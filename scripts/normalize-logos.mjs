import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'

const logos = [
  { id: 'webro', file: "public/PROJECT LOGO'S/webro-logo.png", contentFrac: 0.97 },
  { id: 'greensprout', file: "public/PROJECT LOGO'S/greensprouts.webp" },
  { id: 'divyam', file: "public/PROJECT LOGO'S/divyam.png" },
  { id: 'xgrova', file: "public/PROJECT LOGO'S/xgrova.jpeg" },
  { id: 'codera', file: "public/PROJECT LOGO'S/codera.jpeg" },
  { id: 'iitb', file: "public/PROJECT LOGO'S/IITB.png" },
]

const CANVAS = 1024
const CONTENT_FRAC = 0.74
const perLogo = {}

const FUZZ = 42

await mkdir('public/logos', { recursive: true })

for (const { id, file, contentFrac = CONTENT_FRAC } of logos) {
  const meta = await sharp(file).metadata()
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const w = info.width, h = info.height
  const idx = (x, y) => (y * w + x) * 4

  const cornerColors = [
    [data[idx(0, 0)], data[idx(0, 0) + 1], data[idx(0, 0) + 2]],
    [data[idx(w - 1, 0)], data[idx(w - 1, 0) + 1], data[idx(w - 1, 0) + 2]],
    [data[idx(0, h - 1)], data[idx(0, h - 1) + 1], data[idx(0, h - 1) + 2]],
    [data[idx(w - 1, h - 1)], data[idx(w - 1, h - 1) + 1], data[idx(w - 1, h - 1) + 2]],
  ]
  const median = (arr, k) => arr.map((c) => c[k]).sort((a, b) => a - b)[1]
  const bg = [median(cornerColors, 0), median(cornerColors, 1), median(cornerColors, 2)]

  const alpha = new Uint8ClampedArray(w * h).fill(1)
  const visited = new Uint8Array(w * h)
  const matchesBg = (i) => {
    const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3]
    if (a < 20) return true
    return Math.hypot(r - bg[0], g - bg[1], b - bg[2]) < FUZZ
  }

  const stack = []
  for (let x = 0; x < w; x++) {
    if (!visited[x]) { visited[x] = 1; stack.push(x) }
    const b = (h - 1) * w + x
    if (!visited[b]) { visited[b] = 1; stack.push(b) }
  }
  for (let y = 0; y < h; y++) {
    const l = y * w, r2 = y * w + w - 1
    if (!visited[l]) { visited[l] = 1; stack.push(l) }
    if (!visited[r2]) { visited[r2] = 1; stack.push(r2) }
  }

  while (stack.length) {
    const p = stack.pop()
    const i = p * 4
    if (matchesBg(i)) {
      alpha[p] = 0
      const x = p % w, y = (p / w) | 0
      if (x > 0) { const n = p - 1; if (!visited[n]) { visited[n] = 1; stack.push(n) } }
      if (x < w - 1) { const n = p + 1; if (!visited[n]) { visited[n] = 1; stack.push(n) } }
      if (y > 0) { const n = p - w; if (!visited[n]) { visited[n] = 1; stack.push(n) } }
      if (y < h - 1) { const n = p + w; if (!visited[n]) { visited[n] = 1; stack.push(n) } }
    }
  }

  let minX = w, minY = h, maxX = -1, maxY = -1
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const p = y * w + x
    if (alpha[p] === 0) continue
    if (x < minX) minX = x; if (y < minY) minY = y
    if (x > maxX) maxX = x; if (y > maxY) maxY = y
  }

  let extract
  if (maxX < 0) {
    extract = { left: 0, top: 0, width: w, height: h }
  } else {
    extract = { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 }
  }

  const cw = extract.width, ch = extract.height
  const scale = Math.min((CANVAS * contentFrac) / cw, (CANVAS * contentFrac) / ch)
  const outW = Math.max(1, Math.round(cw * scale))
  const outH = Math.max(1, Math.round(ch * scale))

  const masked = Buffer.from(data)
  for (let p = 0; p < w * h; p++) if (alpha[p] === 0) masked[p * 4 + 3] = 0

  const resized = await sharp(masked, { raw: { width: w, height: h, channels: 4 } })
    .extract(extract)
    .resize(outW, outH, { fit: 'fill', kernel: 'lanczos3' })
    .png()
    .toBuffer()

  const ox = Math.round((CANVAS - outW) / 2)
  const oy = Math.round((CANVAS - outH) / 2)
  await sharp({ create: { width: CANVAS, height: CANVAS, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: resized, left: ox, top: oy }])
    .png()
    .toFile(`public/logos/${id}.png`)

  console.log(`${id}: src=${w}x${h} bbox=${extract.width}x${extract.height} -> ${outW}x${outH} at (${ox},${oy})`)
}
