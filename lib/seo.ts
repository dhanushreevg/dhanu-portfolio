import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

export const baseUrl = siteConfig.url

export const indexablePaths = [
  "/",
  "/claude-code",
  "/events",
  "/events/sponsors",
  "/n8n",
  "/opencode",
  "/timeline",
  "/projects",
  "/projects/next",
  "/impact/petdex",
  "/research",
  "/team",
  "/team/work-with-us",
  "/workshops/questions",
  "/blog",
  "/brand",
  "/contact",
] as const

const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_419",
  pt: "pt_BR",
}

function pathForLocale(path: string, locale: Locale) {
  const normalized = path === "/" ? "" : path
  return `/${locale}${normalized}`
}

export function absoluteUrl(path: string) {
  return new URL(path, baseUrl).toString()
}

export function localizedUrl(path: string, locale: Locale) {
  return absoluteUrl(pathForLocale(path, locale))
}

export function languageAlternates(path: string) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localizedUrl(path, locale)]),
    ),
    "x-default": localizedUrl(path, defaultLocale),
  }
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale
  path: string
  title: string
  description: string
}): Metadata {
  const url = localizedUrl(path, locale)
  const fullTitle =
    title === siteConfig.name
      ? "Sanjay S | Portfolio"
      : `${title} | ${siteConfig.name}`

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    authors: [{ name: "Sanjay S" }],
    keywords: [
      "Sanjay S",
      "Portfolio",
      "Software Engineer",
      "React",
      "Next.js",
      "AI",
      "Spring Boot",
      "Full Stack",
      "Innovation",
      "Developer Portfolio",
    ],
    alternates: {
      canonical: url,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: ["/ascii.svg"],
      type: "website",
      locale: ogLocales[locale],
      alternateLocale: locales
        .filter((alternate) => alternate !== locale)
        .map((alternate) => ogLocales[alternate]),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/ascii.svg"],
    },
  }
}

export async function pageMetadata({
  params,
  path,
  namespace,
}: {
  params: Promise<{ lang: string }>
  path: string
  namespace: string
}) {
  const { lang } = await params
  if (!isLocale(lang)) return {}

  if (namespace === "home") {
    return buildMetadata({
      locale: lang,
      path,
      title: siteConfig.name,
      description: siteConfig.description[lang],
    })
  }

  const t = await getTranslations({ locale: lang, namespace })
  return buildMetadata({
    locale: lang,
    path,
    title: t("title"),
    description: t("description"),
  })
}
