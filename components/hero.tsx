import Link from "next/link"
import { Container } from "@/components/grid-container"
import { LiquidHero } from "@/components/liquid-hero"
import { PixelArrow } from "@/components/pixel-arrow"
import { SakuraEffect } from "@/components/sakura-effect"

export function Hero() {
  return <HeroContent />
}

export function HeroContent({
  eyebrow = "Dhanu Shree · Coimbatore, India",
  lines = ["Aspiring AI/ML", "Engineer", "& Front-End Developer"],
  description = "Building practical AI, ML and web solutions with curiosity, creativity and code.",
  primaryCta = "View projects",
  primaryHref = "/projects",
  secondaryCta = "Contact me",
  secondaryHref = "/contact",
}: {
  eyebrow?: string
  lines?: [string, string, string]
  description?: string
  primaryCta?: string
  primaryHref?: string
  secondaryCta?: string
  secondaryHref?: string
}) {
  return (
    <Container innerClassName="overflow-hidden bg-background">
      <div className="relative flex flex-col md:block md:min-h-[calc(100svh-5rem)]">
        <LiquidHero imagePath="/sanjay-logo.png" imageAlign="right" className="z-0 hidden md:block" />
        <SakuraEffect />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-br from-background/80 via-background/30 to-transparent md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-1/3 bg-gradient-to-t from-background/85 to-transparent md:block"
        />

        <div className="pointer-events-none relative z-10 flex flex-col md:absolute md:inset-0 md:flex-col">
          <div className="mx-auto flex w-full max-w-[1380px] flex-col justify-between px-4 pt-8 sm:px-6 md:h-full md:gap-14 md:px-10 md:py-11">
            <div className="min-w-0 md:max-w-[55%]">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-accent md:mb-5">
                {eyebrow}
              </p>
              <h1
                className="select-none break-words text-balance font-bold uppercase leading-[0.95] tracking-tight text-foreground text-[clamp(1.75rem,7.5vw,3rem)] sm:text-[clamp(2rem,6.5vw,3rem)] md:text-6xl lg:text-7xl xl:text-[5.5rem]"
                style={{
                  filter:
                    "drop-shadow(0 2px 24px hsl(var(--background) / 0.6))",
                }}
              >
                <span className="block">{lines[0]}</span>
                <span className="block">{lines[1]}</span>
                <span className="block text-accent">{lines[2]}</span>
              </h1>
              <p
                className="mt-3 max-w-2xl text-balance text-base leading-relaxed text-foreground/85 md:mt-6 md:text-lg"
                style={{
                  filter:
                    "drop-shadow(0 1px 8px hsl(var(--background) / 0.7))",
                }}
              >
                {description}
              </p>
            </div>

            <div className="pointer-events-auto mt-8 grid w-full grid-cols-1 gap-4 sm:inline-grid sm:w-fit sm:grid-cols-2 md:mt-0">
              <Link
                href={primaryHref}
                className="group flex items-center justify-between gap-3 border border-foreground/20 bg-background/20 px-6 py-3 text-foreground/85 backdrop-blur-[2px] transition-colors hover:border-foreground/50 hover:bg-background/40"
              >
                {primaryCta}
                <PixelArrow />
              </Link>
              <Link
                href={secondaryHref}
                className="group flex items-center justify-between gap-3 border border-foreground/20 bg-background/20 px-6 py-3 text-foreground/85 backdrop-blur-[2px] transition-colors hover:border-foreground/50 hover:bg-background/40"
              >
                {secondaryCta}
                <PixelArrow />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative mb-8 mt-8 md:hidden">
          <div className="mx-auto w-[68vw] max-w-[420px]">
            <div className="relative aspect-[1.03]">
              <LiquidHero imagePath="/sanjay-logo.png" imageAlign="center" fillFactor={0.92} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
