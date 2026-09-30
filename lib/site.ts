import { defaultLocale, type Locale } from "@/lib/i18n"

type LocalizedString = Record<Locale, string>

function localized(value: LocalizedString, locale: Locale) {
  return value[locale] ?? value[defaultLocale]
}

export const siteConfig = {
  name: "Dhanu Shree",
  domain: "localhost:3000",
  tagline: {
    en: "Aspiring AI/ML Engineer · Front-End Developer · CSE Student",
    es: "Aspiring AI/ML Engineer · Front-End Developer · CSE Student",
    pt: "Aspiring AI/ML Engineer · Front-End Developer · CSE Student",
  },
  description: {
    en: "Dhanu Shree is a Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, Computer Vision and modern web development.",
    es: "Dhanu Shree is a Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, Computer Vision and modern web development.",
    pt: "Dhanu Shree is a Computer Science and Engineering student passionate about Artificial Intelligence, Machine Learning, Computer Vision and modern web development.",
  },
  url: "http://localhost:3000",
  author: "Dhanu Shree",
  email: "dhanushreevg28@gmail.com",
  phone: "9842815860",
  github: "",
  linkedin: "",
  location: "Coimbatore, India",
  ogImage: {
    alt: "Dhanu Shree — Aspiring AI/ML Engineer and Front-End Developer",
  },
} as const

export function getSiteConfig(locale: Locale = defaultLocale) {
  return {
    ...siteConfig,
    tagline: localized(siteConfig.tagline, locale),
    description: localized(siteConfig.description, locale),
  }
}

export const navItems = [
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "skills", href: "/about#skills" },
  { key: "education", href: "/about#education" },
  { key: "contact", href: "/contact" },
] as const

export const socials = [] as const

export const stats = [
  { value: "3rd", label: { en: "Year of CSE", es: "Year of CSE", pt: "Year of CSE" } },
  { value: "AI/ML", label: { en: "Learning focus", es: "Learning focus", pt: "Learning focus" } },
  { value: "CV", label: { en: "Computer vision", es: "Computer vision", pt: "Computer vision" } },
  { value: "Web", label: { en: "Front-end development", es: "Front-end development", pt: "Front-end development" } },
] as const

export function getStats(locale: Locale = defaultLocale) {
  return stats.map((item) => ({ ...item, label: localized(item.label, locale) }))
}

export const ecosystem = [
  {
    title: { en: "Artificial intelligence", es: "Artificial intelligence", pt: "Artificial intelligence" },
    body: { en: "Learning how intelligent systems can solve practical problems.", es: "Learning how intelligent systems can solve practical problems.", pt: "Learning how intelligent systems can solve practical problems." },
    href: "/projects",
  },
  {
    title: { en: "Computer vision", es: "Computer vision", pt: "Computer vision" },
    body: { en: "Exploring image processing, OpenCV, and face recognition.", es: "Exploring image processing, OpenCV, and face recognition.", pt: "Exploring image processing, OpenCV, and face recognition." },
    href: "/projects",
  },
  {
    title: { en: "Front-end development", es: "Front-end development", pt: "Front-end development" },
    body: { en: "Building responsive interfaces with modern web technologies.", es: "Building responsive interfaces with modern web technologies.", pt: "Building responsive interfaces with modern web technologies." },
    href: "/projects",
  },
] as const

export function getEcosystem(locale: Locale = defaultLocale) {
  return ecosystem.map((item) => ({
    ...item,
    title: localized(item.title, locale),
    body: localized(item.body, locale),
  }))
}

export const stackLogos = [] as const
