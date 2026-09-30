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
  return <><SiteHeader locale={lang} /><main className="flex-1"><Container><div className="px-6 py-16 md:px-10 md:py-24"><p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">Learning timeline</p><h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Learning through projects, year by year.</h1><p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">A simple record of Dhanu’s academic and project development journey.</p></div></Container><Container><div className="border-y border-line">{milestones.map((milestone) => <div key={milestone.year} className="flex flex-col gap-3 border-b border-line p-8 last:border-b-0 md:flex-row md:gap-8 md:p-10"><p className="w-40 shrink-0 font-mono text-sm text-accent">{milestone.year}</p><p className="text-sm leading-relaxed text-muted-foreground">{milestone.detail}</p></div>)}</div></Container></main><SiteFooter locale={lang} /></>
}
