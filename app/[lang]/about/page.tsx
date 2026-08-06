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

const skills = [
  "User Interface (UI) Design",
  "User Experience (UX) Research",
  "Responsive Web Design",
  "Wireframing & Prototyping",
  "Design Systems & Component Libraries",
  "Landing Page Design",
  "Visual Hierarchy & Typography",
  "No-Code Website Development",
]

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    school: "PPG Institute of Technology, Coimbatore",
    period: "2024 – Present",
    detail: "Currently pursuing Second Year.",
  },
  {
    degree: "Higher Secondary Education",
    school: "Metro School, Mettupalayam",
    period: "2010 – 2024",
  },
]

const interests = [
  "Authoring",
  "Innovation",
  "Entrepreneurship",
  "Community Building",
  "Pedagogy",
  "Ideation",
  "Product Building",
  "Education",
  "Exploration",
  "Networking",
  "Creative Design",
  "Mentoring",
  "Storytelling",
  "Prototyping",
  "Teaching",
]

const experience = {
  role: "Web Design Intern",
  org: "Zidio Development",
  period: "2025 – Present",
  points: [
    "Designing responsive and user-friendly web interfaces.",
    "Creating wireframes, prototypes, and landing pages.",
    "Collaborating on modern web design projects.",
    "Improving user experience through design thinking and usability principles.",
  ],
}

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
              Aspiring Web Designer and B.E. Computer Science & Engineering student
              passionate about designing intuitive, user-centered digital
              experiences. I enjoy transforming ideas into meaningful products
              through thoughtful design, modern web technologies, and creative
              problem solving. My interests span UI/UX design, frontend
              development, AI products, and entrepreneurship, with a focus on
              building impactful digital solutions.
            </p>
          </div>
        </Container>

        <SectionGap />

        <Container>
          <section className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Experience
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                Where I design.
              </h2>
            </div>
            <div className="divide-y divide-line">
              <div className="flex flex-col gap-3 p-8 md:flex-row md:items-baseline md:gap-8 md:p-10">
                <div className="w-64 shrink-0">
                  <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
                    {experience.role}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
                <div className="max-w-xl flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {experience.org}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span aria-hidden className="text-accent">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                What I design with.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {skills.map((skill, i) => (
                <div
                  key={skill}
                  className={
                    "p-8 md:p-10 " +
                    (i % 2 ? "md:border-l md:border-line " : "") +
                    (i >= 2 ? "border-t border-line" : "")
                  }
                >
                  <p className="text-sm leading-relaxed text-foreground">
                    {skill}
                  </p>
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
                Education
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                Where I learned.
              </h2>
            </div>
            <div className="divide-y divide-line">
              {education.map((entry) => (
                <div
                  key={entry.degree}
                  className="flex flex-col gap-3 p-8 md:flex-row md:items-baseline md:gap-8 md:p-10"
                >
                  <p className="w-64 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">
                    {entry.period}
                  </p>
                  <div className="max-w-xl flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {entry.degree}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {entry.school}
                    </p>
                    {entry.detail ? (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {entry.detail}
                      </p>
                    ) : null}
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
                Interests
              </p>
              <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">
                What I am curious about.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 p-8 md:p-10">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="border border-line px-3 py-1.5 font-mono text-xs text-foreground/80"
                >
                  {interest}
                </span>
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
