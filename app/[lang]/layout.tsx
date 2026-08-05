import React from "react"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"

import { isLocale, locales } from "@/lib/i18n"
import { baseUrl } from "@/lib/seo"
import { siteConfig, socials } from "@/lib/site"

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
    logo: `${baseUrl}/sanjay-logo.png`,
    sameAs: socials.map((social) => social.href),
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
    default: "Sanjay S | Portfolio",
    template: "%s | Sanjay S",
  },
  description:
    "AI Builder • Product Developer • Open Source Contributor. Building technology that solves real-world problems through AI, full-stack development, and innovative digital experiences.",
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
  icons: {
    icon: "/sanjay-logo.png",
    shortcut: "/sanjay-logo.png",
    apple: "/sanjay-logo.png",
  },
  manifest: "/manifest.webmanifest",
}

export const viewport: Viewport = {
  themeColor: "#000000",
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
    <html lang={lang} className="dark">
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
