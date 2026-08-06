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
  return pageMetadata({ params, path: "/achievements", namespace: "pages.achievements" })
}

const certificates = [
  {
    name: "MSME Registration Certificate",
    issuer: "Ministry of Micro, Small and Medium Enterprises, India",
    date: "2025",
    description:
      "Proof of registered startup for GreenSprout — MSME-recognized agritech venture.",
    pdf: null,
  },
  {
    name: "TN-EDII Innovation Voucher",
    issuer: "Tamil Nadu Entrepreneurship Development Institute",
    date: "2025",
    description:
      "Funding and recognition received for GreenSprout's sustainable farming innovation.",
    pdf: null,
  },
  {
    name: "I-Hack Finalist — Google AdMob Track",
    issuer: "IIT Bombay E-Summit",
    date: "December 2025",
    description:
      "Finalist in the Google AdMob I-Hack competition at IIT Bombay E-Summit 2025.",
    pdf: null,
  },
  {
    name: "Design Thinking and Creativity Workshop",
    issuer: "[TODO] Organizer name",
    date: "2025",
    description: "Workshop participation certificate for design thinking and creativity.",
    pdf: null,
  },
  {
    name: "GDG Coimbatore Hackathon Participation",
    issuer: "GDG Coimbatore",
    date: "August 2026",
    description:
      "Built UrbanMind at the GDG Coimbatore Hackathon 2026. Certificate to be added when issued.",
    pdf: null,
  },
  {
    name: "ODFE Hackathon Completion",
    issuer: "[TODO] Organizer name",
    date: "2025",
    description:
      "Completed a 24-hour hackathon build with a full-stack Cafe POS system.",
    pdf: null,
  },
  {
    name: "Online certifications",
    issuer: "Coursera / NPTEL / Google Cloud / others",
    date: "[TODO]",
    description: "[TODO] Add any online certifications you have earned.",
    pdf: null,
  },
  {
    name: "College certificates",
    issuer: "PPG Institute of Technology",
    date: "[TODO]",
    description:
      "[TODO] Add any merit certificates or department recognitions from PPGIT.",
    pdf: null,
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
              Achievements
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Certificates & recognitions.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              Registrations, vouchers, finalist placings, and workshop completions
              from the work I have shipped so far.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <div className="grid grid-cols-1 border-y border-line md:grid-cols-2">
            {certificates.map((cert, i) => (
              <article
                key={cert.name}
                className={
                  "flex min-h-64 flex-col justify-between p-8 md:p-10 " +
                  (i % 2 ? "md:border-l md:border-line " : "") +
                  (i >= 2 ? "border-t border-line md:border-t " : "") +
                  (i >= 2 ? "md:border-t" : "") +
                  (i > 0 ? "border-t border-line md:border-t-0" : "")
                }
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {cert.date}
                  </p>
                  <h2 className="mt-3 text-xl tracking-tight md:text-2xl">
                    {cert.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {cert.issuer}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
                {cert.pdf ? (
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block border border-foreground/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-accent/10"
                  >
                    View
                  </a>
                ) : (
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Certificate PDF coming soon
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
