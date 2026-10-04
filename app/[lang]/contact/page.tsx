import { notFound } from "next/navigation"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { socials } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/contact", namespace: "pages.contact" })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="flex-1">
        <Container>
          <div className="px-6 py-16 sm:px-8 md:px-10 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              Contact
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Let’s build, learn, and solve problems together.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
              I’m open to thoughtful conversations about projects, learning opportunities
              and front-end or AI/ML work.
            </p>
          </div>
        </Container>

        <SectionGap />
        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Reach Dhanu
              </p>
              <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
                The best place to start.
              </h2>
            </div>
            <div className="divide-y divide-line">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1.5 px-6 py-6 transition-colors hover:bg-accent/5 sm:px-8 md:flex-row md:items-baseline md:gap-8 md:px-10 md:py-8"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:w-40 sm:shrink-0 sm:text-sm">
                    {social.label}
                  </p>
                  <p className="min-w-0 break-all text-sm text-foreground sm:break-normal">
                    {social.display}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </Container>

        <SectionGap />
        <Container>
          <section className="border-y border-line">
            <div className="px-6 py-8 sm:px-8 md:px-10 md:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Good conversations
              </p>
              <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
                Project ideas, learning, and collaboration.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Reach out about academic projects, AI/ML learning, responsive interfaces,
                computer vision or opportunities to keep growing together.
              </p>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}