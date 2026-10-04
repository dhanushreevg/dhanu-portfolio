import { notFound } from "next/navigation"
import { Container } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false
export function generateStaticParams() { return [{ lang: "en" }] }
export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) { return pageMetadata({ params, path: "/timeline", namespace: "pages.timeline" }) }
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const milestones = [{ year: "2024", detail: "Started B.E. Computer Science and Engineering at PPG Institute of Technology." }, { year: "2026", detail: "Continuing practical work across AI/ML, computer vision and front-end development." }]
  return <><SiteHeader locale={lang} /><main className="flex-1"><Container><div className="px-6 py-16 sm:px-8 md:px-10 md:py-24"><p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">Learning timeline</p><h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-7xl">Learning through projects, year by year.</h1><p className="mt-6 max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">A simple record of Dhanu’s academic and project development journey.</p></div></Container><Container><div className="border-y border-line">{milestones.map((milestone) => <div key={milestone.year} className="flex flex-col gap-3 border-b border-line px-6 py-6 sm:px-8 md:flex-row md:gap-8 md:p-10"><p className="font-mono text-xs text-accent md:w-40 md:shrink-0 md:text-sm">{milestone.year}</p><p className="text-sm leading-relaxed text-muted-foreground">{milestone.detail}</p></div>)}</div></Container></main><SiteFooter locale={lang} /></>
}
