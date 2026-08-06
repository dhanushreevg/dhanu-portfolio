import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { notFound } from "next/navigation"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { certificates } from "@/lib/certificates"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return ["en"].map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/certificates", namespace: "pages.certificates" })
}

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
              Certificates
            </p>
            <h1 className="mt-5 max-w-4xl text-balance font-serif text-5xl font-semibold tracking-[-0.02em] md:text-7xl">
              Certified by the names behind the tools.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              Proof of the learning, not just the building.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <div className="grid grid-cols-1 border-y border-line md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((cert, i) => {
              const cell =
                "group relative flex flex-col border-line transition-colors hover:bg-secondary/10 " +
                (i > 0 ? "border-t " : "") +
                (i % 2 === 1 ? "md:border-l " : "") +
                (i >= 2 ? "md:border-t " : "") +
                (i % 3 !== 0 ? "xl:border-l " : "") +
                (i >= 3 ? "xl:border-t " : "")

              return (
                <article key={cert.name} className={cell}>
                  <div className="flex items-center justify-between border-b border-line px-6 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                      Certificate
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 py-12">
                    <div className="flex size-[8.5rem] items-center justify-center">
                      <Image
                        src={cert.logo}
                        alt={`${cert.name} logo`}
                        width={136}
                        height={136}
                        className="size-full object-contain"
                      />
                    </div>
                    <h2 className="max-w-[18ch] px-4 text-balance text-center font-serif text-lg leading-snug tracking-[-0.01em]">
                      {cert.description}
                    </h2>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border-t border-line px-6 py-5 text-sm font-medium transition-colors group-hover:bg-accent/10"
                  >
                    <span>View certificate</span>
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </article>
              )
            })}
          </div>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Verified
              </p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                Every certificate links to its original file.
              </h2>
            </div>
            <div className="p-8 md:p-10">
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                Select any certificate to open the original on Google Drive and
                verify it for yourself.
              </p>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
