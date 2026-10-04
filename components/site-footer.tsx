import Link from "next/link"
import { LocalizedLink } from "@/components/localized-link"
import { SiteWordmark } from "@/components/site-wordmark"
import { type Locale } from "@/lib/i18n"
import { projects } from "@/lib/projects"
import { socials } from "@/lib/site"

const buildLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/about#skills" },
  { label: "Education", href: "/about#education" },
  { label: "Communities", href: "/about#communities" },
  { label: "Contact", href: "/contact" },
]

// Derived from lib/projects so the footer can never drift from the project ids.
const projectLinks = projects.slice(0, 5).map((project) => ({
  label: project.title,
  href: `/projects#${project.id}`,
}))

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line bg-background">
      <div className="grid gap-12 px-6 py-14 sm:px-8 sm:py-16 md:grid-cols-3 xl:grid-cols-5">
        <div className="min-w-0">
          <SiteWordmark />
          <p className="mt-4 font-mono text-[10px] uppercase leading-5 tracking-[0.25em] text-muted-foreground sm:tracking-[0.3em]">
            Aspiring AI/ML Engineer · Front-End Developer · CSE Student
          </p>
        </div>

        <div className="min-w-0">
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

        <div className="min-w-0">
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

        <div className="min-w-0">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Explore
          </p>
          <ul className="space-y-3 text-sm">
            {buildLinks.slice(0, 3).map((l) => (
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

        <div className="min-w-0">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Elsewhere
          </p>
          <ul className="space-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="break-words text-foreground transition-colors hover:text-muted-foreground"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="flex flex-col items-start justify-between gap-3 px-6 py-6 sm:px-8 md:flex-row md:items-center">
          <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
            © {new Date().getFullYear()} Dhanu Shree
          </p>
        </div>
      </div>
    </footer>
  )
}
