import { notFound } from "next/navigation"
import { Container } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/books", namespace: "pages.books" })
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return <><SiteHeader locale={lang} /><main className="flex-1"><Container><div className="px-6 py-16 sm:px-8 md:px-10 md:py-24"><p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">Learning notes</p><h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-7xl">A place for future writing.</h1><p className="mt-6 max-w-2xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">This space is reserved for Dhanu’s notes on AI/ML, computer vision, front-end development and the lessons behind her projects.</p></div></Container></main><SiteFooter locale={lang} /></>
}
