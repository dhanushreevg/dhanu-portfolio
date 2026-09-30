import Link from "next/link"
import { Menu } from "lucide-react"
import { Container } from "@/components/grid-container"
import { BrandLogo } from "@/components/brand-logo"
import { PixelArrow } from "@/components/pixel-arrow"
import { type Locale, withLocale } from "@/lib/i18n"
import { navItems } from "@/lib/site"

const navLabels: Record<string, string> = {
  projects: "Projects",
  about: "About",
  skills: "Skills",
  education: "Education",
  contact: "Contact",
}

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur">
      <Container innerClassName="h-4" />
      <hr className="border-line" />
      <Container innerClassName="h-16">
        <nav className="relative flex h-full justify-between">
          <div className="flex h-full w-[180px] items-center border-line lg:w-[215px] lg:border-r">
            <Link
              href={withLocale("/", locale)}
              className="group inline-flex h-full items-center gap-3 px-4 transition-colors lg:hover:bg-primary/5"
              aria-label="Dhanu Shree — Home"
            >
              <BrandLogo />
              <span className="font-mono text-xs font-medium uppercase tracking-[0.35em] text-foreground">
                Dhanu
              </span>
            </Link>
          </div>
          <div className="hidden flex-1 items-center justify-center lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className="inline-flex h-16 items-center gap-1 px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 hover:text-foreground lg:px-3.5 xl:px-5"
              >
                {navLabels[item.key]}
              </Link>
            ))}
          </div>
          <div className="hidden h-full items-center border-line lg:flex lg:border-l">
            <Link
              href={withLocale("/contact", locale)}
              className="group inline-flex h-full items-center gap-2 px-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/10 lg:px-4 xl:px-6"
            >
              Contact me
              <PixelArrow />
            </Link>
          </div>
          <details className="ml-auto flex items-center lg:hidden">
            <summary
              className="flex h-16 w-16 cursor-pointer list-none items-center justify-center text-foreground/70 transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute left-0 right-0 top-full border-t border-line bg-background">
              <Container innerClassName="px-4 py-4 lg:hidden">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={withLocale(item.href, locale)}
                      className="border-b border-line py-3 text-sm text-foreground"
                    >
                      {navLabels[item.key]}
                    </Link>
                  ))}
                  <Link
                    href={withLocale("/contact", locale)}
                    className="mt-4 inline-flex items-center justify-between border border-foreground/20 px-4 py-3 text-sm font-medium"
                  >
                    Contact me
                    <PixelArrow />
                  </Link>
                </div>
              </Container>
            </div>
          </details>
        </nav>
      </Container>
      <hr className="border-line" />
    </header>
  )
}
