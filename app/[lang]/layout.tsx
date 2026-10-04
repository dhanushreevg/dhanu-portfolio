import React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { isLocale, locales } from "@/lib/i18n"
import { absoluteUrl, baseUrl } from "@/lib/seo"
import { profileLinks, siteConfig } from "@/lib/site"

import "../globals.css"

// Self-hosted so builds never fetch from Google Fonts at build time. Both files
// are variable fonts, so one file per family covers every weight in use.
const spaceGrotesk = localFont({
  src: "../fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  style: "normal",
  display: "swap",
  variable: "--font-sans",
})
const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  style: "normal",
  display: "swap",
  variable: "--font-mono",
})

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    logo: absoluteUrl(siteConfig.ogImage.path),
    sameAs: profileLinks,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: baseUrl,
    inLanguage: locales,
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: "%s",
  },
  description: siteConfig.description.en,
  authors: [{ name: siteConfig.author }],
  keywords: [
    "Dhanu Shree",
    "Portfolio",
    "AI/ML Engineer",
    "CSE Student",
    "React",
    "Next.js",
    "AI",
    "Computer Vision",
    "Python",
    "Front-End Developer",
    "Developer Portfolio",
  ],
  icons: {
    icon: siteConfig.ogImage.path,
    shortcut: siteConfig.ogImage.path,
    apple: siteConfig.ogImage.path,
  },
  manifest: "/manifest.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#F9F9F9",
}

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  setRequestLocale(lang)

  return (
    <html lang={lang}>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} flex min-h-full flex-col bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  )
}
