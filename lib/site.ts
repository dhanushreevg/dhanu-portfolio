import { teamMembers } from "@/lib/team"
import { defaultLocale, type Locale } from "@/lib/i18n"

type LocalizedString = Record<Locale, string>

function localized(value: LocalizedString, locale: Locale) {
  return value[locale] ?? value[defaultLocale]
}

export const siteConfig = {
  name: "Sanjay S",
  domain: "sanjay.dev",
  tagline: {
    en: "CS Student · AI Builder · Product Developer",
    es: "CS Student · AI Builder · Product Developer",
    pt: "CS Student · AI Builder · Product Developer",
  },
  description: {
    en: "Software Developer, AI Builder, Full Stack Developer, Founder, and Innovation Enthusiast.",
    es: "Software Developer, AI Builder, Full Stack Developer, Founder, and Innovation Enthusiast.",
    pt: "Software Developer, AI Builder, Full Stack Developer, Founder, and Innovation Enthusiast.",
  },
  url: "https://sanjay.dev",
  author: "Sanjay S",
  email: "sanjay@sanjay.dev",
  github: "https://github.com/sanjay-offl",
  twitter: "https://twitter.com/sanjay_offl",
  linkedin: "https://linkedin.com/in/sanjayoffl",
  location: "Coimbatore, India",
  ogImage: {
    alt: "Sanjay S — AI Builder & Product Developer",
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
  { key: "projects", href: "/projects" },
  { key: "research", href: "/research" },
  { key: "team", href: "/team" },
  { key: "timeline", href: "/timeline" },
  { key: "impact", href: "/impact/petdex" },
] as const

export const languageLinks = [
  { label: "EN", href: "/" },
  { label: "ES", href: "/es" },
  { label: "PT", href: "/pt" },
] as const

export const stats = [
  { value: "6+", label: { en: "Projects Shipped", es: "Projects Shipped", pt: "Projects Shipped" } },
  { value: "3+", label: { en: "Hackathons", es: "Hackathons", pt: "Hackathons" } },
  { value: "2026", label: { en: "B.Tech CSE", es: "B.Tech CSE", pt: "B.Tech CSE" } },
] as const

export function getStats(locale: Locale = defaultLocale) {
  return stats.map((item) => ({ ...item, label: localized(item.label, locale) }))
}

export const ecosystem = [
  {
    title: { en: "Community", es: "Community", pt: "Community" },
    body: {
      en: "I share my journey building AI-powered applications, full-stack products, and learning in public.",
      es: "I share my journey building AI-powered applications, full-stack products, and learning in public.",
      pt: "I share my journey building AI-powered applications, full-stack products, and learning in public.",
    },
    href: "https://sanjay-offl.github.io",
  },
  {
    title: { en: "Projects", es: "Projects", pt: "Projects" },
    body: {
      en: "AI-powered platforms, full-stack applications, and open-source tools built with purpose.",
      es: "AI-powered platforms, full-stack applications, and open-source tools built with purpose.",
      pt: "AI-powered platforms, full-stack applications, and open-source tools built with purpose.",
    },
    href: "/projects",
  },
  {
    title: { en: "Research", es: "Research", pt: "Research" },
    body: {
      en: "I explore ideas at the intersection of artificial intelligence, civic technology, sustainability, and software engineering.",
      es: "I explore ideas at the intersection of artificial intelligence, civic technology, sustainability, and software engineering.",
      pt: "I explore ideas at the intersection of artificial intelligence, civic technology, sustainability, and software engineering.",
    },
    href: "/research",
  },
  {
    title: { en: "Open source", es: "Open source", pt: "Open source" },
    body: {
      en: "I build in public and contribute to open-source projects that developers actually use.",
      es: "I build in public and contribute to open-source projects that developers actually use.",
      pt: "I build in public and contribute to open-source projects that developers actually use.",
    },
    href: "/projects",
  },
  {
    title: { en: "Skills", es: "Skills", pt: "Skills" },
    body: {
      en: "Python, TypeScript, JavaScript, React, Next.js, FastAPI, PostgreSQL, AI APIs, and more.",
      es: "Python, TypeScript, JavaScript, React, Next.js, FastAPI, PostgreSQL, AI APIs, and more.",
      pt: "Python, TypeScript, JavaScript, React, Next.js, FastAPI, PostgreSQL, AI APIs, and more.",
    },
    href: "/team",
  },
] as const

export function getEcosystem(locale: Locale = defaultLocale) {
  return ecosystem.map((item) => ({
    ...item,
    title: localized(item.title, locale),
    body: localized(item.body, locale),
  }))
}

export const services = [
  {
    title: { en: "AI Products", es: "AI Products", pt: "AI Products" },
    body: {
      en: "Streaming LLM UIs, agents, evals, and inference infrastructure. Building with the latest models and patterns that hold up in production.",
      es: "Streaming LLM UIs, agents, evals, and inference infrastructure. Building with the latest models and patterns that hold up in production.",
      pt: "Streaming LLM UIs, agents, evals, and inference infrastructure. Building with the latest models and patterns that hold up in production.",
    },
    href: "/projects",
  },
  {
    title: { en: "Full Stack Engineering", es: "Full Stack Engineering", pt: "Full Stack Engineering" },
    body: {
      en: "End-to-end web products built on Next.js and the React ecosystem with PostgreSQL or MongoDB backends.",
      es: "End-to-end web products built on Next.js and the React ecosystem with PostgreSQL or MongoDB backends.",
      pt: "End-to-end web products built on Next.js and the React ecosystem with PostgreSQL or MongoDB backends.",
    },
    href: "/projects",
  },
  {
    title: { en: "Civic Tech", es: "Civic Tech", pt: "Civic Tech" },
    body: {
      en: "Building technology that solves real problems — from sustainability to civic engagement through data and AI.",
      es: "Building technology that solves real problems — from sustainability to civic engagement through data and AI.",
      pt: "Building technology that solves real problems — from sustainability to civic engagement through data and AI.",
    },
    href: "/research",
  },
  {
    title: { en: "Developer Experience", es: "Developer Experience", pt: "Developer Experience" },
    body: {
      en: "Designing tools, APIs, and workflows that engineers love to use — from local dev to production deployments.",
      es: "Designing tools, APIs, and workflows that engineers love to use — from local dev to production deployments.",
      pt: "Designing tools, APIs, and workflows that engineers love to use — from local dev to production deployments.",
    },
    href: "/projects",
  },
] as const

export function getServices(locale: Locale = defaultLocale) {
  return services.map((item) => ({
    ...item,
    title: localized(item.title, locale),
    body: localized(item.body, locale),
  }))
}

export const communityOffers = [
  { en: "I share my journey building AI-powered applications, full-stack products, and learning in public.", es: "I share my journey building AI-powered applications, full-stack products, and learning in public.", pt: "I share my journey building AI-powered applications, full-stack products, and learning in public." },
  { en: "I actively participate in hackathons, GDG events, and the startup ecosystem in Tamil Nadu.", es: "I actively participate in hackathons, GDG events, and the startup ecosystem in Tamil Nadu.", pt: "I actively participate in hackathons, GDG events, and the startup ecosystem in Tamil Nadu." },
  { en: "Open to collaborating on innovative ideas and contributing to open source projects.", es: "Open to collaborating on innovative ideas and contributing to open source projects.", pt: "Open to collaborating on innovative ideas and contributing to open source projects." },
  { en: "I build in public — sharing progress, lessons, and finished work along the way.", es: "I build in public — sharing progress, lessons, and finished work along the way.", pt: "I build in public — sharing progress, lessons, and finished work along the way." },
  { en: "Building technology that is simple, accessible, and solves genuine human problems.", es: "Building technology that is simple, accessible, and solves genuine human problems.", pt: "Building technology that is simple, accessible, and solves genuine human problems." },
] as const

export function getCommunityOffers(locale: Locale = defaultLocale) {
  return communityOffers.map((item) => localized(item, locale))
}

export const products = [
  {
    slug: "thadam-ai",
    title: "THADAM AI",
    tagline: { en: "AI-powered sustainability platform", es: "AI-powered sustainability platform", pt: "AI-powered sustainability platform" },
    description: {
      en: "An AI-powered sustainability platform that helps users understand, track, and reduce their carbon footprint through intelligent insights and eco-friendly recommendations.",
      es: "An AI-powered sustainability platform that helps users understand, track, and reduce their carbon footprint through intelligent insights and eco-friendly recommendations.",
      pt: "An AI-powered sustainability platform that helps users understand, track, and reduce their carbon footprint through intelligent insights and eco-friendly recommendations.",
    },
    metrics: ["Open source"],
    technologies: ["AI", "Sustainability", "Full Stack"],
    url: "https://github.com/sanjay-offl/thadam-ai",
    sourceUrl: "https://github.com/sanjay-offl/thadam-ai",
    openSource: true,
    accent: "from-lime-300 via-emerald-500 to-teal-700",
  },
  {
    slug: "civicbrain",
    title: "CivicBrain",
    tagline: { en: "AI-powered civic technology", es: "AI-powered civic technology", pt: "AI-powered civic technology" },
    description: {
      en: "An AI-powered civic technology platform that transforms citizen grievances and public data into actionable municipal insights for stronger institutions.",
      es: "An AI-powered civic technology platform that transforms citizen grievances and public data into actionable municipal insights for stronger institutions.",
      pt: "An AI-powered civic technology platform that transforms citizen grievances and public data into actionable municipal insights for stronger institutions.",
    },
    metrics: ["Open source"],
    technologies: ["Civic Tech", "AI", "Next.js"],
    url: "https://github.com/sanjay-offl/civicbrain",
    sourceUrl: "https://github.com/sanjay-offl/civicbrain",
    openSource: true,
    accent: "from-pink-300 via-fuchsia-500 to-purple-700",
  },
  {
    slug: "cybershield-ai",
    title: "CyberShield AI",
    tagline: { en: "Intelligent cybersecurity platform", es: "Intelligent cybersecurity platform", pt: "Intelligent cybersecurity platform" },
    description: {
      en: "An intelligent cybersecurity platform focused on threat awareness, security analysis, and digital protection.",
      es: "An intelligent cybersecurity platform focused on threat awareness, security analysis, and digital protection.",
      pt: "An intelligent cybersecurity platform focused on threat awareness, security analysis, and digital protection.",
    },
    metrics: ["Open source"],
    technologies: ["Cybersecurity", "AI", "React"],
    url: "https://github.com/sanjay-offl/cybershield-ai",
    sourceUrl: "https://github.com/sanjay-offl/cybershield-ai",
    openSource: true,
    accent: "from-slate-200 via-blue-500 to-indigo-800",
  },
  {
    slug: "epsalipm",
    title: "Epsalipm",
    tagline: { en: "Interactive philosophical journal", es: "Interactive philosophical journal", pt: "Interactive philosophical journal" },
    description: {
      en: "An interactive philosophical journal inspired by the eight Greek forms of love, combining storytelling, reflection, and personal memories into a unique reading experience.",
      es: "An interactive philosophical journal inspired by the eight Greek forms of love, combining storytelling, reflection, and personal memories into a unique reading experience.",
      pt: "An interactive philosophical journal inspired by the eight Greek forms of love, combining storytelling, reflection, and personal memories into a unique reading experience.",
    },
    metrics: ["Open source"],
    technologies: ["Full Stack", "UI/UX", "Storytelling"],
    url: "https://github.com/sanjay-offl/epsalipm",
    sourceUrl: "https://github.com/sanjay-offl/epsalipm",
    openSource: true,
    accent: "from-stone-200 via-neutral-500 to-black",
  },
  {
    slug: "pleco-ai",
    title: "Pleco AI",
    tagline: { en: "AI workflow automation assistant", es: "AI workflow automation assistant", pt: "AI workflow automation assistant" },
    description: {
      en: "An AI assistant designed to simplify workflows and improve productivity through intelligent automation.",
      es: "An AI assistant designed to simplify workflows and improve productivity through intelligent automation.",
      pt: "An AI assistant designed to simplify workflows and improve productivity through intelligent automation.",
    },
    metrics: ["Open source"],
    technologies: ["AI", "Productivity", "Automation"],
    url: "https://github.com/sanjay-offl/pleco-ai",
    sourceUrl: "https://github.com/sanjay-offl/pleco-ai",
    openSource: true,
    accent: "from-blue-300 via-cyan-500 to-emerald-600",
  },
  {
    slug: "faynex",
    title: "FAYNEX",
    tagline: { en: "Modern digital product", es: "Modern digital product", pt: "Modern digital product" },
    description: {
      en: "A modern digital product focused on solving practical challenges with scalable technology and clean user experiences.",
      es: "A modern digital product focused on solving practical challenges with scalable technology and clean user experiences.",
      pt: "A modern digital product focused on solving practical challenges with scalable technology and clean user experiences.",
    },
    metrics: ["Open source"],
    technologies: ["Product", "Full Stack", "TypeScript"],
    url: "https://github.com/sanjay-offl/faynex",
    sourceUrl: "https://github.com/sanjay-offl/faynex",
    openSource: true,
    accent: "from-zinc-200 via-zinc-500 to-zinc-900",
  },
] as const

export function getProducts(locale: Locale = defaultLocale) {
  return products.map((item) => ({
    ...item,
    tagline: localized(item.tagline, locale),
    description: localized(item.description, locale),
  }))
}

export const collaborations = [
  { name: "OpenAI", logo: "/collaborations/openai.svg", href: "https://openai.com" },
  { name: "Vercel", logo: "/collaborations/vercel.svg", href: "https://vercel.com" },
  { name: "Supabase", logo: "/collaborations/supabase.svg", href: "https://supabase.com" },
] as const

export const events = [
  {
    title: { en: "Hackathons", es: "Hackathons", pt: "Hackathons" },
    body: {
      en: "High-energy build sprints where ideas turn into working products. I actively participate in hackathons across Tamil Nadu.",
      es: "High-energy build sprints where ideas turn into working products. I actively participate in hackathons across Tamil Nadu.",
      pt: "High-energy build sprints where ideas turn into working products. I actively participate in hackathons across Tamil Nadu.",
    },
  },
  {
    title: { en: "Community", es: "Community", pt: "Community" },
    body: {
      en: "I am part of the Entrepreneurship Cell at PPGIT, leading NEC team initiatives that foster student innovation and startup culture.",
      es: "I am part of the Entrepreneurship Cell at PPGIT, leading NEC team initiatives that foster student innovation and startup culture.",
      pt: "I am part of the Entrepreneurship Cell at PPGIT, leading NEC team initiatives that foster student innovation and startup culture.",
    },
  },
] as const

export function getEvents(locale: Locale = defaultLocale) {
  return events.map((item) => ({
    title: localized(item.title, locale),
    body: localized(item.body, locale),
  }))
}

export const researchLinks = [
  {
    title: "Sanjay S Research",
    body: {
      en: "Research notes, essays, experiments, and technical writing on AI, civic technology, and software engineering.",
      es: "Research notes, essays, experiments, and technical writing on AI, civic technology, and software engineering.",
      pt: "Research notes, essays, experiments, and technical writing on AI, civic technology, and software engineering.",
    },
    href: "https://research.sanjay.dev",
  },
  {
    title: "sanjay-offl GitHub",
    body: {
      en: "Open-source projects, experiments, and technical artifacts.",
      es: "Open-source projects, experiments, and technical artifacts.",
      pt: "Open-source projects, experiments, and technical artifacts.",
    },
    href: "https://github.com/sanjay-offl",
  },
] as const

export function getResearchLinks(locale: Locale = defaultLocale) {
  return researchLinks.map((item) => ({ ...item, body: localized(item.body, locale) }))
}

export const team = teamMembers

export const testimonials = [
  {
    name: "Peer",
    role: "Hackathon teammate",
    quote: {
      en: "Sanjay is one of those rare builders who actually ships — fast, focused, and with real attention to detail. Watching him turn an idea into a working product in 24 hours is something else.",
      es: "Sanjay is one of those rare builders who actually ships — fast, focused, and with real attention to detail. Watching him turn an idea into a working product in 24 hours is something else.",
      pt: "Sanjay is one of those rare builders who actually ships — fast, focused, and with real attention to detail. Watching him turn an idea into a working product in 24 hours is something else.",
    },
  },
  {
    name: "Mentor",
    role: "College faculty",
    quote: {
      en: "Sanjay brings curiosity and rigor to everything he touches. He is building, learning, and contributing back to the ecosystem — exactly the kind of student we want to support.",
      es: "Sanjay brings curiosity and rigor to everything he touches. He is building, learning, and contributing back to the ecosystem — exactly the kind of student we want to support.",
      pt: "Sanjay brings curiosity and rigor to everything he touches. He is building, learning, and contributing back to the ecosystem — exactly the kind of student we want to support.",
    },
  },
] as const

export function getTestimonials(locale: Locale = defaultLocale) {
  return testimonials.map((item) => ({ ...item, quote: localized(item.quote, locale) }))
}

export const stackLogos = [
  { name: "Next.js" },
  { name: "Bun" },
  { name: "Vercel" },
  { name: "Drizzle" },
  { name: "Postgres" },
] as const

export const socials = [
  { label: "GitHub", href: "https://github.com/sanjay-offl" },
  { label: "X", href: "https://twitter.com/sanjay_offl" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sanjayoffl" },
] as const
