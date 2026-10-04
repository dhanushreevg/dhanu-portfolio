import { notFound } from "next/navigation"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"
import { siteConfig } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/about", namespace: "pages.about" })
}

const skillGroups = [
  {
    name: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    name: "AI / ML",
    skills: [
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Data Preprocessing",
      "Face Recognition",
    ],
  },
  {
    name: "Web",
    skills: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Firebase",
      "Responsive Web Development",
      "API Basics",
    ],
  },
  {
    name: "Design",
    skills: ["Figma", "Canva", "UI Design", "Responsive Layouts", "Visual Hierarchy"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "GitHub", "Pull Requests", "VS Code", "Figma", "Canva"],
  },
  {
    name: "Soft skills",
    skills: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Continuous Learning",
    ],
  },
] as const

const communities = [
  {
    role: "Member",
    name: "CyberZen Club",
    detail:
      "Student cybersecurity club at PPG Institute of Technology, Coimbatore. Hands-on security awareness, CTF practice and collaboration with peers on security-focused projects.",
  },
] as const

const experienceBlocks = [
  {
    role: "Open-source contributor",
    points: [
      "Contributed frontend UI refactors to UrbanMind, an AI civic-intelligence platform.",
      "Built core UI layouts, navigation and event data types for the PPG Tech Symposium 2026 website.",
      "Worked on the Endless Book web app, a community book of childhood memories.",
      "Opened pull requests and responded to review feedback through GitHub version control.",
    ],
  },
  {
    role: "AI/ML project developer",
    points: [
      "Developed a Face Recognition Attendance System using Python and OpenCV.",
      "Worked with image processing and computer vision concepts.",
      "Practiced debugging, problem-solving and GitHub version control through project development.",
    ],
  },
] as const

/** Two-column label/value rows that collapse cleanly on small screens. */
function DetailRow({
  label,
  children,
  border = "border-t border-line",
}: {
  label: string
  children: React.ReactNode
  border?: string
}) {
  return (
    <div className={`flex flex-col gap-2 px-6 py-6 sm:px-8 md:flex-row md:items-baseline md:gap-8 md:px-10 md:py-8 ${border}`}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent md:w-56 md:shrink-0 md:text-sm">
        {label}
      </p>
      <div className="min-w-0 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl tracking-tight sm:text-3xl md:text-4xl">{title}</h2>
    </div>
  )
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
          <div className="px-6 py-16 sm:px-8 md:px-10 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
              About Dhanu
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] sm:text-5xl md:text-7xl">
              Curious about intelligent, useful technology.
            </h1>
            <p className="mt-6 max-w-3xl text-balance text-base leading-8 text-muted-foreground sm:text-lg">
              I’m Dhanu Shree, a third-year Computer Science and Engineering student at
              PPG Institute of Technology, Coimbatore. I’m passionate about Artificial
              Intelligence, Machine Learning, Computer Vision and modern web development.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-line bg-secondary/40 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-line bg-secondary/40 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/50"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Container>

        <SectionGap />
        <Container>
          <section className="border-y border-line">
            <div className="px-6 py-8 sm:px-8 md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:px-10 md:py-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Profile
              </p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground md:mt-0">
                <p>
                  I enjoy turning ideas into practical projects, from responsive web
                  applications to AI-powered systems. My current technical journey focuses
                  on Python, machine learning, OpenCV, data processing and front-end
                  development.
                </p>
                <p>
                  Alongside development I design in Figma and Canva, so the interface and
                  the code are designed together rather than one after the other.
                </p>
                <p>
                  I’m continuously improving my problem-solving, communication and
                  development skills while exploring technologies that can solve
                  real-world problems.
                </p>
              </div>
            </div>
          </section>
        </Container>

        <SectionGap />
        <Container>
          <section id="education" className="border-y border-line">
            <SectionHeading
              eyebrow="Education"
              title="Where I’m building my foundation."
            />
            <DetailRow label="2024 – Present" border="border-line">
              <p className="font-medium text-foreground">Bachelor of Engineering</p>
              <p className="mt-1">
                Computer Science and Engineering · PPG Institute of Technology,
                Coimbatore
              </p>
              <p className="mt-2">Current year: Third Year</p>
            </DetailRow>
          </section>
        </Container>

        <SectionGap />
        <Container>
          <section id="skills" className="border-y border-line">
            <SectionHeading eyebrow="Skills" title="Learning, practicing, improving." />
            <div className="grid grid-cols-1 border-line sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <div
                  key={group.name}
                  className={[
                    "min-w-0 px-6 py-8 sm:px-8",
                    // Mobile: single column, rule above every row after the first.
                    index >= 2 ? "border-t border-line" : "",
                    // sm: two columns.
                    index >= 2 ? "sm:border-t sm:border-line" : "",
                    index < 2 ? "sm:border-t-0" : "",
                    index % 2 ? "sm:border-l sm:border-line" : "",
                    // lg: three columns, so re-derive both axes.
                    index >= 3 ? "lg:border-t lg:border-line" : "",
                    index < 3 ? "lg:border-t-0" : "",
                    index % 3 ? "lg:border-l lg:border-line" : "",
                    index % 3 === 0 ? "lg:border-l-0" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                    {group.name}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="max-w-full break-words border border-line bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/80"
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
          <section id="communities" className="border-y border-line">
            <SectionHeading
              eyebrow="Communities"
              title="Clubs and campus involvement."
            />
            {communities.map((community) => (
              <DetailRow key={community.name} label={community.role} border="border-line">
                <p className="font-medium text-foreground">{community.name}</p>
                <p className="mt-1">{community.detail}</p>
              </DetailRow>
            ))}
          </section>
        </Container>

        <SectionGap />
        <Container>
          <section id="experience" className="border-y border-line">
            <SectionHeading
              eyebrow="Practical work"
              title="Project experience while learning."
            />
            {experienceBlocks.map((block) => (
              <DetailRow key={block.role} label={block.role} border="border-line">
                <ul className="space-y-2">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      <span className="min-w-0">{point}</span>
                    </li>
                  ))}
                </ul>
              </DetailRow>
            ))}
          </section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}