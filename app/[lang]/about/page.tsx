import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLink } from "@/components/arrow-link"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return ["en"].map((lang) => ({ lang }))
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/about", namespace: "pages.about" })
}

const roles = [
  {
    role: "NEC Team Lead",
    org: "Entrepreneurship Cell, PPGIT (Boss Builder E-Cell)",
  },
  {
    role: "Frontend Developer Intern",
    org: "NexGenAds Technologies, Coimbatore",
  },
  {
    role: "Founder",
    org: "GreenSprout, EcoReboot, Codera, Webro",
  },
  {
    role: "Author",
    org: "One May Fly's Memory (published) · EPSALIPM (writing)",
  },
]

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React", "Next.js 14", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "FastAPI", "Spring Boot", "Spring Security", "JWT"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "Prisma", "Redis"],
  },
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java"],
  },
  {
    name: "AI",
    skills: ["Gemini 1.5 Flash", "Google AI APIs"],
  },
  {
    name: "Infrastructure",
    skills: ["Vercel", "Netlify", "Docker (basic)"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Figma", "Canva"],
  },
]

const building = [
  {
    title: "AI civic tech products",
    body: "AI-powered citizen grievance intelligence for real civic impact — UrbanMind.",
    href: "https://github.com/sanjay-offl",
  },
  {
    title: "Sustainable farming technology",
    body: "GreenSprout's AGRISOLARBOT™ — solar-powered automation for agriculture.",
    href: "https://greensprouts-offl.netlify.app/",
  },
  {
    title: "E-waste solutions",
    body: "Upcycling discarded devices into affordable, repairable computing — EcoReboot.",
    href: "https://github.com/sanjay-offl",
  },
  {
    title: "A student builder community",
    body: "Codera at PPGIT — practical learning, hackathons, and startup culture.",
    href: "https://github.com/sanjay-offl",
  },
  {
    title: "Books that make people think",
    body: "One May Fly's Memory and the next book in progress, EPSALIPM.",
    href: "/books",
  },
]

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="flex-1">
        <Container>
          <div className="px-6 py-16 md:px-10 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              About
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
              Who I am.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
              Third-year Computer Science student at PPG Institute of Technology,
              Coimbatore. I build AI products, lead startup communities, compete in
              hackathons, and write books. My work sits at the intersection of
              technology, civic purpose, and human stories.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Roles
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                What I do right now.
              </h2>
            </div>
            <div className="divide-y divide-line">
              {roles.map((r) => (
                <div
                  key={r.role}
                  className="flex flex-col gap-1 p-8 md:flex-row md:items-baseline md:gap-8 md:p-10"
                >
                  <p className="w-64 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">
                    {r.role}
                  </p>
                  <p className="text-sm leading-relaxed text-foreground">{r.org}</p>
                </div>
              ))}
            </div>
          </section>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Skills
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                The stack I build with.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
              {skillGroups.map((group, i) => (
                <div
                  key={group.name}
                  className={
                    "p-8 md:p-10 " +
                    (i % 2 ? "md:border-l md:border-line " : "") +
                    (i >= 2 ? "border-t border-line xl:border-t-0 " : "") +
                    (i % 3 ? "xl:border-l xl:border-line " : "") +
                    (i > 0 ? "border-t border-line md:border-t-0" : "")
                  }
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {group.name}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-line px-3 py-1.5 font-mono text-xs text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                What I am building
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                Work in motion.
              </h2>
            </div>
            <div className="divide-y divide-line">
              {building.map((item) => (
                <div
                  key={item.title}
                  className="group flex flex-col gap-3 p-8 transition-colors hover:bg-accent/5 md:flex-row md:items-baseline md:gap-8 md:p-10"
                >
                  <p className="w-72 shrink-0 text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="max-w-xl flex-1 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group mt-1"
                  >
                    <ArrowLink>Open</ArrowLink>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="p-8 md:grid md:grid-cols-[0.85fr_1.15fr] md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Research & writing
              </p>
              <div>
                <h2 className="mt-3 text-3xl tracking-tight md:mt-0 md:text-4xl">
                  Building in public, sharing in public.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  My open-source projects, experiments, and writing live on GitHub —
                  where I build, learn, and share what I am working on.
                </p>
                <Link
                  href="https://github.com/sanjay-offl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-block"
                >
                  <ArrowLink>Open my GitHub</ArrowLink>
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
