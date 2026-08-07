import Link from "next/link"
import { LocalizedLink } from "@/components/localized-link"
import { SiteWordmark } from "@/components/site-wordmark"
import { type Locale } from "@/lib/i18n"
import { socials } from "@/lib/site"

const buildLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Timeline", href: "/timeline" },
  { label: "About", href: "/about" },
  { label: "Achievements", href: "/achievements" },
  { label: "Certificates", href: "/certificates" },
]

const projectLinks = [
  { label: "GreenSprout", href: "https://greensprouts-offl.netlify.app/" },
  { label: "UrbanMind", href: "https://github.com/sanjay-offl/UrbanMind" },
  { label: "DIVYAM", href: "https://github.com/sanjay-offl/VYAM" },
] as const

const bookLinks = [
  { label: "A Mayfly's Memory", href: "https://amzn.in/d/01BTpnYV" },
  { label: "EPSALIPM", href: "/books" },
] as const

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line bg-background">
      <div className="grid gap-12 px-8 py-16 md:grid-cols-3 xl:grid-cols-5">
        <div>
          <SiteWordmark />
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Builder. Founder. Author.
          </p>
        </div>

        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Build
          </p>
          <ul className="space-y-3 text-sm">
            {buildLinks.map((l) => (
              <li key={l.href}>
                <LocalizedLink
                  href={l.href}
                  locale={locale}
                  className="text-foreground transition-colors hover:text-muted-foreground"
                >
                  {l.label}
                </LocalizedLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Projects
          </p>
          <ul className="space-y-3 text-sm">
            {projectLinks.map((l) => (
              <li key={l.label}>
                {l.href.startsWith("/") ? (
                  <LocalizedLink
                    href={l.href}
                    locale={locale}
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {l.label}
                  </LocalizedLink>
                ) : (
                  <Link
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Books
          </p>
          <ul className="space-y-3 text-sm">
            {bookLinks.map((l) => (
              <li key={l.label}>
                {l.href.startsWith("/") ? (
                  <LocalizedLink
                    href={l.href}
                    locale={locale}
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {l.label} (coming soon)
                  </LocalizedLink>
                ) : (
                  <Link
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Elsewhere
          </p>
          <ul className="space-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-muted-foreground"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="flex flex-col items-start justify-between gap-3 px-8 py-6 md:flex-row md:items-center">
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} Sanjay S
          </p>
        </div>
      </div>
    </footer>
  )
}
