import { notFound } from "next/navigation"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return ["en"].map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/contact", namespace: "pages.contact" })
}

const contactLinks = [
  { label: "LinkedIn", value: "linkedin.com/in/sanjayoffl24", href: "https://linkedin.com/in/sanjayoffl24" },
  { label: "Instagram", value: "@sanjay.hq", href: "https://instagram.com/sanjay.hq/" },
  { label: "GitHub", value: "github.com/sanjay-offl", href: "https://github.com/sanjay-offl" },
  { label: "YouTube", value: "@sanjayoffl", href: "https://www.youtube.com/@sanjayoffl" },
]

const reachOutReasons = [
  "Hackathon team-ups",
  "Collaborating on AI / civic tech projects",
  "EcoReboot / GreenSprout partnerships",
  "Internship or opportunity discussions",
  "Book-related conversations (reader, reviewer, publisher)",
  "Mentorship or community building at your campus",
]

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="flex-1">
        <Container>
          <div className="px-6 py-16 md:px-10 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              Contact
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Let's build, collaborate, or just talk.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              Pick the channel that works for you — I reply to everything.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Reach me at
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                Where to find me.
              </h2>
            </div>
            <div className="divide-y divide-line">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group flex flex-col gap-1 p-8 transition-colors hover:bg-accent/5 md:flex-row md:items-baseline md:gap-8 md:p-10"
                >
                  <p className="w-40 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">
                    {link.label}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                What you can reach out for
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                Happy to help.
              </h2>
            </div>
            <div className="divide-y divide-line">
              {reachOutReasons.map((reason, i) => (
                <div key={reason} className="flex items-start gap-5 p-8 md:p-10">
                  <span className="font-mono text-xs text-accent">[{i + 1}]</span>
                  <p className="text-sm leading-relaxed text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
