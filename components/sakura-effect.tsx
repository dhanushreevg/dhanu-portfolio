"use client"

const petals = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  size: 10 + ((index * 7) % 13),
  left: (index * 37) % 100,
  delay: -((index * 1.7) % 14),
  duration: 12 + ((index * 5) % 10),
  drift: -50 + ((index * 29) % 101),
  rotation: 180 + ((index * 47) % 360),
  opacity: 0.38 + ((index * 13) % 38) / 100,
}))

export function SakuraEffect() {
  return (
    <div
      aria-hidden="true"
      className="sakura-effect pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="sakura-petal"
          style={
            {
              "--sakura-size": `${petal.size}px`,
              "--sakura-left": `${petal.left}%`,
              "--sakura-delay": `${petal.delay}s`,
              "--sakura-duration": `${petal.duration}s`,
              "--sakura-drift": `${petal.drift}px`,
              "--sakura-rotation": `${petal.rotation}deg`,
              "--sakura-opacity": petal.opacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
