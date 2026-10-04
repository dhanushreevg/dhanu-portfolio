import Link from "next/link"
import { ArrowLink } from "@/components/arrow-link"
import { Container } from "@/components/grid-container"
import { LocalizedLink } from "@/components/localized-link"
import { type Locale } from "@/lib/i18n"
import { getStats, siteConfig } from "@/lib/site"

export async function ProofStats({ locale }: { locale: Locale }) {
  return (
    <Container>
      <div className="grid grid-cols-2 border-y border-line md:grid-cols-4 md:border-y-0">
        {getStats(locale).map((stat, index) => (
          <div
            key={stat.label}
            className={`p-6 md:p-8 ${index > 0 ? "border-l border-line" : ""} ${index > 1 ? "border-t border-line md:border-t-0" : ""}`}
          >
            <p className="font-mono text-3xl tracking-tight text-accent md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

export async function AboutSnippet({ locale }: { locale: Locale }) {
  return (
    <Container>
      <section className="grid grid-cols-1 border-y border-line lg:grid-cols-[0.7fr_1.3fr]">
        <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            About me
          </p>
          <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Learning by building useful things.
          </h2>
        </div>
        <div className="flex min-w-0 flex-col justify-center gap-6 px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/85">
            I’m Dhanu Shree, a third-year Computer Science and Engineering student at PPG
            Institute of Technology, Coimbatore. I’m passionate about Artificial
            Intelligence, Machine Learning, Computer Vision and modern web development.
          </p>
          <LocalizedLink href="/about" locale={locale} className="group w-fit">
            <ArrowLink>More about me</ArrowLink>
          </LocalizedLink>
        </div>
      </section>
    </Container>
  )
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
] as const

export async function SkillsSection({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section id="skills" className="border-y border-line">
        <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Technical skills
          </p>
          <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
            A learning stack, always growing.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            These are learning areas and working tools, not claims of expert-level mastery.
          </p>
        </div>
        <div className="grid grid-cols-1 border-line sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div
              key={group.name}
              className={`min-w-0 px-6 py-8 sm:px-8 ${index % 2 ? "sm:border-l sm:border-line" : ""} ${index >= 2 ? "border-t border-line" : ""}`}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                {group.name}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="max-w-full break-words border border-line bg-secondary/40 px-3 py-1.5 font-mono text-xs leading-5 text-foreground/80"
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
  )
}

export async function EducationSnippet({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section id="education" className="border-y border-line">
        <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Education
          </p>
          <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Building a strong foundation.
          </h2>
        </div>
        <div className="flex flex-col gap-3 px-6 py-8 sm:px-8 md:flex-row md:items-baseline md:gap-8 md:px-10 md:py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent md:w-64 md:shrink-0 md:text-sm">
            2024 – Present
          </p>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">Bachelor of Engineering</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Computer Science and Engineering · PPG Institute of Technology, Coimbatore
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Current year: Third Year</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export async function CommunitiesSnippet({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section id="communities" className="border-y border-line">
        <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Communities
          </p>
          <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Clubs and campus involvement.
          </h2>
        </div>
        <div className="flex flex-col gap-3 px-6 py-8 sm:px-8 md:flex-row md:items-baseline md:gap-8 md:px-10 md:py-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent md:w-64 md:shrink-0 md:text-sm">
            Member
          </p>
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground">CyberZen Club</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Student cybersecurity club at PPG Institute of Technology, Coimbatore. Security
              awareness, CTF practice and peer collaboration on security-focused projects.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}

const practicalBlocks = [
  {
    role: "Open-source contributor",
    points: [
      "Contributed frontend UI refactors to UrbanMind, an AI civic-intelligence platform.",
      "Built core UI layouts, navigation and event data types for the PPG Tech Symposium 2026 website.",
      "Worked on the Endless Book web app, a community book of childhood memories.",
      "Opened pull requests and responded to review feedback on GitHub.",
    ],
  },
  {
    role: "AI/ML project developer",
    points: [
      "Developed a Face Recognition Attendance System using Python and OpenCV.",
      "Worked with image processing and computer vision concepts.",
      "Built machine-learning-oriented academic projects and practiced debugging through development.",
      "Used GitHub for project version control.",
    ],
  },
] as const

export async function PracticalWorkSnippet({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section className="border-y border-line">
        <div className="border-b border-line px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Experience & practical work
          </p>
          <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Project experience, built while learning.
          </h2>
        </div>
        {practicalBlocks.map((block) => (
          <div
            key={block.role}
            className="flex flex-col gap-3 border-t border-line px-6 py-8 sm:px-8 md:flex-row md:items-start md:gap-8 md:px-10 md:py-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent md:w-64 md:shrink-0 md:text-sm">
              {block.role}
            </p>
            <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-muted-foreground">
              {block.points.map((point) => (
                <li key={point} className="flex min-w-0 gap-2">
                  <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Container>
  )
}

export async function ContactCta({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section className="border-y border-line">
        <div className="px-6 py-10 text-center sm:px-8 md:px-14 md:py-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-3 text-balance text-2xl tracking-tight sm:text-3xl md:text-4xl">
            Let’s build and learn together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            For project conversations, learning opportunities, or thoughtful collaboration,
            reach me at {siteConfig.email}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact" className="group">
              <ArrowLink>Contact Dhanu</ArrowLink>
            </Link>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <ArrowLink>GitHub</ArrowLink>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <ArrowLink>LinkedIn</ArrowLink>
            </a>
          </div>
        </div>
      </section>
    </Container>
  )
}