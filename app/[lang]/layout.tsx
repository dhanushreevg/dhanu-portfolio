import React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { isLocale, locales } from "@/lib/i18n"
import { baseUrl } from "@/lib/seo"
import { profileLinks, siteConfig } from "@/lib/site"

import "../globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
})

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: baseUrl,
    logo: `${baseUrl}/og-image.png`,
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
  default: "Dhanu Shree | Aspiring AI/ML Engineer & Front-End Developer",
    template: "%s",
  },
  description: siteConfig.description.en,
  authors: [{ name: "Dhanu Shree" }],
  keywords: [
    "Dhanu Shree",
    "Portfolio",
    "Aspiring AI/ML Engineer",
    "React",
    "Next.js",
    "AI",
    "Computer Vision",
    "Python",
    "Front-End Developer",
    "Developer Portfolio",
  ],
  icons: {
    icon: "/sanjay-logo.png",
    shortcut: "/sanjay-logo.png",
    apple: "/sanjay-logo.png",
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
