import { notFound } from "next/navigation"
import { ArrowLink } from "@/components/arrow-link"
import { Container, SectionGap } from "@/components/grid-container"
import { LocalizedLink } from "@/components/localized-link"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return ["en"].map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/timeline", namespace: "pages.timeline" })
}

const milestones = [
  {
    year: "2023",
    items: [
      "Started learning React and Next.js",
    ],
  },
  {
    year: "2024",
    items: [
      "Started B.E. CSE at PPG Institute of Technology",
      "Started building first full-stack projects",
      "Founded Codera student community",
      "Applied to the NexGenAds internship (React / Next.js / UI-UX track)",
    ],
  },
  {
    year: "2025",
    items: [
      "Started GreenSprout (agritech startup)",
      "Built DIVYAM accessibility platform",
      "Built ODFE in a 24-hour hackathon — full-stack Cafe POS system",
      "Participated in a Design Thinking and Creativity workshop",
      "Attended GDG Coimbatore events",
      "IIT Bombay E-Summit — I-Hack Finalist (Google AdMob Track)",
      "GreenSprout: MSME Registration approved",
      "GreenSprout: TN-EDII Innovation Voucher received",
      "Published first book: A Mayfly's Memory (Amazon India)",
      "Started frontend developer intern role at NexGenAds Technologies",
    ],
  },
  {
    year: "2026",
    items: [
      "GDG Coimbatore Hackathon (Aug 8–9) — built UrbanMind",
      "Ranked 61st nationally in the Odoo Hackathon",
      "Evaluating Eureka! 2026 (IIT Bombay) with EcoReboot",
      "Writing second book: EPSALIPM",
    ],
  },
  {
    year: "2028",
    items: [
      "Expected graduation: B.E. CSE",
    ],
  },
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
              Timeline
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.055em] md:text-7xl">
              Building, leading, and writing — year by year.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              From my first React components to shipped startups and a published book.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <div className="border-y border-line">
            {milestones.map((period) => (
              <section key={period.year}>
                <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                  <div className="border-b border-line p-8 md:border-b-0 md:border-r md:p-10">
                    <p className="font-mono text-3xl tracking-tight text-accent md:text-4xl">
                      {period.year}
                    </p>
                  </div>
                  <ul className="divide-y divide-line">
                    {period.items.map((item) => (
                      <li key={item} className="p-8 md:p-10">
                        <p className="text-sm leading-relaxed text-foreground">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="border-line md:hidden" />
              </section>
            ))}
          </div>
        </Container>

        <SectionGap />

        <Container>
          <section className="grid border-y border-line md:grid-cols-[1.2fr_0.8fr]">
            <div className="border-b border-line p-8 md:border-b-0 md:border-r md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Now
              </p>
              <h2 className="mt-4 text-3xl tracking-tight md:text-4xl">
                What I am working on.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Shipping AI products, growing GreenSprout and EcoReboot, building
                the Codera community, taking on clients through Webro, and writing
                my second book. The projects page shows the current work in detail.
              </p>
            </div>
            <div className="flex items-center p-8 md:p-10">
              <LocalizedLink href="/projects" locale={lang} className="group">
                <ArrowLink>Open the projects</ArrowLink>
              </LocalizedLink>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
