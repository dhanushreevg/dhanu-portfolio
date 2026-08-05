"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"

const simulationVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const simulationFragmentShader = `
uniform sampler2D textureA;
uniform vec2 mouse;
uniform vec2 prevMouse;
uniform vec2 resolution;
uniform float step;
uniform int frame;

uniform float mouseRadius;
uniform float mouseStrength;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  if (frame == 0) {
    gl_FragColor = vec4(0.0);
    return;
  }

  // Frame-rate independent timestep keeps wave speed consistent on 60Hz and
  // high-refresh displays. It is capped so the explicit integrator stays
  // numerically stable even when frames run slow (software WebGL, low FPS).
  float delta = min(1.4 * step, 1.0);

  vec4 data = texture2D(textureA, uv);
  float pressure = data.x;
  float pVel = data.y;

  vec2 texelSize = 1.0 / resolution;
  float p_right = texture2D(textureA, uv + vec2(texelSize.x, 0.0)).x;
  float p_left = texture2D(textureA, uv + vec2(-texelSize.x, 0.0)).x;
  float p_up = texture2D(textureA, uv + vec2(0.0, texelSize.y)).x;
  float p_down = texture2D(textureA, uv + vec2(0.0, -texelSize.y)).x;

  if (uv.x <= texelSize.x) p_left = p_right;
  if (uv.x >= 1.0 - texelSize.x) p_right = p_left;
  if (uv.y <= texelSize.y) p_down = p_up;
  if (uv.y >= 1.0 - texelSize.y) p_up = p_down;

  pVel += delta * (-2.0 * pressure + p_right + p_left) / 4.0;
  pVel += delta * (-2.0 * pressure + p_up + p_down) / 4.0;

  pressure += delta * pVel;

  // Smooth, frame-rate independent damping lets ripples fade elegantly.
  pVel -= 0.005 * delta * pressure;
  pVel *= pow(0.985, step);
  pressure *= pow(0.96, step);

  vec2 toPx = uv * resolution;

  // Cursor ripples: the surface stays still until the cursor moves. While
  // moving, pressure is injected at the pointer, leaving a wake that
  // radiates outward as smooth, natural waves. A stationary cursor or an
  // idle page keeps the liquid calm.
  if (mouse.x > 0.0) {
    vec2 mouseVel = mouse - prevMouse;
    float speed = length(mouseVel);
    if (speed > 0.3) {
      float d = distance(toPx, mouse);
      if (d <= mouseRadius) {
        float falloff = 1.0 - d / mouseRadius;
        float amp = clamp(speed * 0.06, 0.4, 3.0) * mouseStrength;
        pressure += amp * falloff * falloff;
        pVel -= amp * 0.45 * falloff;
      }
    }
  }

  pressure = clamp(pressure, -3.0, 3.0);

  gl_FragColor = vec4(pressure, pVel,
    (p_right - p_left) / 2.0,
    (p_up - p_down) / 2.0);
}
`

const renderVertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const renderFragmentShader = `
uniform sampler2D textureA;
uniform sampler2D textureB;
uniform float distortionStrength;
varying vec2 vUv;

void main() {
  vec4 data = texture2D(textureA, vUv);
  vec2 slope = data.zw;

  // Gentle, clamped distortion keeps the logo recognizable while the
  // gradient bends the image beneath it like a thin layer of glass.
  vec2 distortion = clamp(distortionStrength * slope, -0.045, 0.045);
  vec4 color = texture2D(textureB, vUv + distortion);

  // Subtle monochrome height shading for the floating-water feel
  color.rgb += data.x * 0.06;

  vec3 normal = normalize(vec3(-slope.x * 2.0, 0.5, -slope.y * 2.0));
  vec3 lightDir = normalize(vec3(-3.0, 10.0, 3.0));
  float specular = pow(max(0.0, dot(normal, lightDir)), 64.0) * 1.4;

  gl_FragColor = vec4(color.rgb + specular, color.a);
}
`

export function LiquidHero({
  imagePath = "",
  imageAlign = "center",
  className,
  fillFactor = 0.5,
}: {
  imagePath?: string
  imageAlign?: "center" | "right"
  className?: string
  fillFactor?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return

    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let cssWidth = container.clientWidth || 1
    let cssHeight = container.clientHeight || 1
    let width = Math.max(1, Math.floor(cssWidth * dpr))
    let height = Math.max(1, Math.floor(cssHeight * dpr))

    const scene = new THREE.Scene()
    const simScene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    })
    renderer.setPixelRatio(dpr)
    renderer.setSize(cssWidth, cssHeight, false)
    renderer.domElement.style.display = "block"
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    container.appendChild(renderer.domElement)

    const supportsFloat = renderer.extensions.get("OES_texture_float") != null
    const rtType =
      renderer.capabilities.isWebGL2 || supportsFloat
        ? THREE.FloatType
        : THREE.HalfFloatType
    const rtOptions = {
      format: THREE.RGBAFormat,
      type: rtType,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      stencilBuffer: false,
      depthBuffer: false,
    }
    let rtA = new THREE.WebGLRenderTarget(width, height, rtOptions)
    let rtB = new THREE.WebGLRenderTarget(width, height, rtOptions)

    const mouse = new THREE.Vector2()
    const prevMouse = new THREE.Vector2()

    const simMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        mouse: { value: mouse },
        prevMouse: { value: prevMouse },
        resolution: { value: new THREE.Vector2(width, height) },
        step: { value: 1 },
        frame: { value: 0 },
        mouseRadius: { value: 40 },
        mouseStrength: { value: 2.4 },
      },
      vertexShader: simulationVertexShader,
      fragmentShader: simulationFragmentShader,
    })

    const renderMaterial = new THREE.ShaderMaterial({
      uniforms: {
        textureA: { value: null },
        textureB: { value: null },
        distortionStrength: { value: 0.55 },
      },
      vertexShader: renderVertexShader,
      fragmentShader: renderFragmentShader,
      transparent: true,
    })

    const updateWaveField = () => {
      const minDim = Math.min(width, height)
      simMaterial.uniforms.mouseRadius.value = Math.max(40, 45 * dpr)
    }
    updateWaveField()

    const plane = new THREE.PlaneGeometry(2, 2)
    const simQuad = new THREE.Mesh(plane, simMaterial)
    const renderQuad = new THREE.Mesh(plane, renderMaterial)
    simScene.add(simQuad)
    scene.add(renderQuad)

    const offscreen = document.createElement("canvas")
    offscreen.width = width
    offscreen.height = height
    const ctx = offscreen.getContext("2d", { alpha: true })!

    const textTexture = new THREE.CanvasTexture(offscreen)
    textTexture.minFilter = THREE.LinearFilter
    textTexture.magFilter = THREE.LinearFilter
    textTexture.format = THREE.RGBAFormat

    let logoImg: HTMLImageElement | null = null

    const readThemeColors = () => {
      const styles = getComputedStyle(document.documentElement)
      const bg = styles.getPropertyValue("--background").trim() || "0 0% 100%"
      const fg = styles.getPropertyValue("--foreground").trim() || "0 0% 0%"
      return { bg: `hsl(${bg})`, fg: `hsl(${fg})` }
    }

    let themeColors = readThemeColors()

    const paintCanvas = (w: number, h: number) => {
      ctx.clearRect(0, 0, w, h)
      if (!logoImg || !logoImg.complete || logoImg.naturalWidth === 0) {
        ctx.fillStyle = themeColors.bg
        ctx.fillRect(0, 0, w, h)
        textTexture.needsUpdate = true
        return
      }

      // The source portrait contains a small duplicated fragment above the
      // head; crop it out so the hero renders a single, seamless portrait.
      const cropTop = 0.11
      const srcY = logoImg.height * cropTop
      const srcH = logoImg.height * (1 - cropTop)
      const imageAspect = logoImg.width / srcH || 1
      // Use CSS pixels for the responsive breakpoint check
      const cssW = w / dpr
      const useRightAlign = imageAlign === "right" && cssW >= 768

      let logoW: number
      let logoH: number
      let logoX: number
      let logoY: number

      if (useRightAlign) {
        // Desktop: fill the right ~46% of the canvas, vertically centered
        const availW = w * 0.46
        const availH = h * 0.92
        if (imageAspect > availW / availH) {
          logoW = availW
          logoH = logoW / imageAspect
        } else {
          logoH = availH
          logoW = logoH * imageAspect
        }
        logoX = w - logoW
        logoY = (h - logoH) / 2
      } else {
        // Mobile / center: use fillFactor, centered
        const canvasAspect = w / h
        if (imageAspect > canvasAspect) {
          logoW = w * fillFactor
          logoH = logoW / imageAspect
        } else {
          logoH = h * fillFactor
          logoW = logoH * imageAspect
        }
        logoX = (w - logoW) / 2
        logoY = (h - logoH) / 2
      }

      // Draw the logo into the canvas texture (cropped source region)
      ctx.drawImage(logoImg, 0, srcY, logoImg.width, srcH, logoX, logoY, logoW, logoH)

      // Fill the theme background behind anything still transparent.
      ctx.save()
      ctx.globalCompositeOperation = "destination-over"
      ctx.fillStyle = themeColors.bg
      ctx.fillRect(0, 0, w, h)
      ctx.restore()

      textTexture.needsUpdate = true
    }

    let frame = 0
    let running = false
    let lastFrameTime = 0
    let animationId: number | null = null

    const tick = (now: number) => {
      const elapsed = lastFrameTime === 0 ? 16.7 : now - lastFrameTime
      lastFrameTime = now
      const step = Math.min(elapsed / 16.67, 2.5)

      simMaterial.uniforms.step.value = step
      simMaterial.uniforms.frame.value = frame++

      simMaterial.uniforms.textureA.value = rtA.texture
      renderer.setRenderTarget(rtB)
      renderer.render(simScene, camera)

      renderMaterial.uniforms.textureA.value = rtB.texture
      renderMaterial.uniforms.textureB.value = textTexture
      renderer.setRenderTarget(null)
      renderer.render(scene, camera)

      const tmp = rtA
      rtA = rtB
      rtB = tmp

      // Persist this frame's cursor position so the next frame can measure
      // how far the pointer travelled and inject a ripple accordingly.
      simMaterial.uniforms.prevMouse.value.copy(mouse)

      animationId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running || document.hidden) return
      running = true
      lastFrameTime = 0
      animationId = requestAnimationFrame(tick)
    }

    const stop = () => {
      running = false
      if (animationId !== null) cancelAnimationFrame(animationId)
      animationId = null
      mouse.set(0, 0)
    }

    const onVisibilityChange = () => {
      if (document.hidden) {
        stop()
      } else {
        start()
      }
    }
    document.addEventListener("visibilitychange", onVisibilityChange)

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start()
        } else {
          stop()
        }
      },
      { rootMargin: "100px" },
    )
    io.observe(container)

    const onMouseMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      mouse.x = (e.clientX - rect.left) * dpr
      mouse.y = (rect.height - (e.clientY - rect.top)) * dpr
    }
    const onMouseLeave = () => {
      mouse.set(0, 0)
    }
    const onPointerDown = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect()
      const x = (e.clientX - rect.left) * dpr
      const y = (rect.height - (e.clientY - rect.top)) * dpr
      mouse.set(x, y)
      prevMouse.set(x - 320, y - 320)
    }

    renderer.domElement.addEventListener("pointermove", onMouseMove)
    renderer.domElement.addEventListener("pointerleave", onMouseLeave)
    renderer.domElement.addEventListener("pointerdown", onPointerDown)

    let resizeRaf: number | null = null
    const applyResize = () => {
      resizeRaf = null
      const nextCssWidth = container.clientWidth || 1
      const nextCssHeight = container.clientHeight || 1
      const nextDpr = Math.min(window.devicePixelRatio || 1, 2)
      const nextWidth = Math.max(1, Math.floor(nextCssWidth * nextDpr))
      const nextHeight = Math.max(1, Math.floor(nextCssHeight * nextDpr))

      if (
        nextWidth === width &&
        nextHeight === height &&
        nextDpr === dpr
      ) {
        return
      }

      cssWidth = nextCssWidth
      cssHeight = nextCssHeight
      dpr = nextDpr
      width = nextWidth
      height = nextHeight

      renderer.setPixelRatio(dpr)
      renderer.setSize(cssWidth, cssHeight, false)
      rtA.setSize(width, height)
      rtB.setSize(width, height)
      simMaterial.uniforms.resolution.value.set(width, height)

      offscreen.width = width
      offscreen.height = height

      // Restart the simulation so the wave field doesn't read stale buffers
      // sampled at the previous resolution (causes hot-pixel artifacts).
      frame = 0
      simMaterial.uniforms.frame.value = 0

      updateWaveField()
      paintCanvas(width, height)
      // CanvasTexture caches its image; reassign so three.js re-uploads at
      // the new dimensions on the next animate() tick.
      textTexture.image = offscreen
      textTexture.needsUpdate = true
    }
    const ro = new ResizeObserver(() => {
      if (resizeRaf !== null) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(applyResize)
    })
    ro.observe(container)

    const themeObserver = new MutationObserver(() => {
      themeColors = readThemeColors()
      paintCanvas(width, height)
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style"],
    })

    paintCanvas(width, height)

    if (imagePath) {
      const img = new window.Image()
      img.decoding = "async"
      img.onload = () => {
        if (!container.isConnected) return
        logoImg = img
        paintCanvas(width, height)
        start()
      }
      img.onerror = () => {
        if (container.isConnected) start()
      }
      img.src = imagePath
    } else {
      start()
    }

    return () => {
      stop()
      document.removeEventListener("visibilitychange", onVisibilityChange)
      if (resizeRaf !== null) cancelAnimationFrame(resizeRaf)
      io.disconnect()
      ro.disconnect()
      themeObserver.disconnect()
      renderer.domElement.removeEventListener("pointermove", onMouseMove)
      renderer.domElement.removeEventListener("pointerleave", onMouseLeave)
      renderer.domElement.removeEventListener("pointerdown", onPointerDown)
      try {
        renderer.domElement.parentNode?.removeChild(renderer.domElement)
      } catch {}
      rtA.dispose()
      rtB.dispose()
      textTexture.dispose()
      simMaterial.dispose()
      renderMaterial.dispose()
      plane.dispose()
      renderer.dispose()
    }
  }, [imagePath, imageAlign, fillFactor])

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("absolute inset-0", className)}
    />
  )
}
