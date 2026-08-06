import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { FeaturedProjects } from "@/components/featured-products"
import { SectionGap } from "@/components/grid-container"
import { HeroContent } from "@/components/hero"
import {
  AboutSnippet,
  BooksPreview,
  ContactCta,
  HackathonsPreview,
  InstagramFollow,
  ProofStats,
  SkillsSection,
} from "@/components/home-sections"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/", namespace: "home" })
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const t = await getTranslations({ locale: lang, namespace: "home" })

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="flex-1">
        <HeroContent
          eyebrow={t("eyebrow")}
          lines={[t("line1"), t("line2"), t("line3")]}
          description={t("description")}
          primaryCta={t("projectsCta")}
          primaryHref="/projects"
          secondaryCta={t("booksCta")}
          secondaryHref="/books"
        />
        <SectionGap />
        <ProofStats locale={lang} />
        <SectionGap />
        <AboutSnippet locale={lang} />
        <SectionGap />
        <FeaturedProjects />
        <SectionGap />
        <BooksPreview locale={lang} />
        <SectionGap />
        <HackathonsPreview locale={lang} />
        <SectionGap />
        <SkillsSection locale={lang} />
        <SectionGap />
        <ContactCta locale={lang} />
        <SectionGap />
        <InstagramFollow locale={lang} />
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
