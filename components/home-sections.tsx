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
          <div key={stat.label} className={`p-6 md:p-8 ${index > 0 ? "border-l border-line" : ""} ${index > 1 ? "border-t border-line md:border-t-0" : ""}`}>
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
        <div className="border-b border-line p-8 md:p-10 lg:border-b-0 lg:border-r">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">About me</p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Learning by building useful things.</h2>
        </div>
        <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
          <p className="max-w-2xl text-base leading-relaxed text-foreground/85">I’m Dhanu Shree, a third-year Computer Science and Engineering student at PPG Institute of Technology, Coimbatore. I’m passionate about Artificial Intelligence, Machine Learning, Computer Vision and modern web development.</p>
          <LocalizedLink href="/about" locale={locale} className="group w-fit"><ArrowLink>More about me</ArrowLink></LocalizedLink>
        </div>
      </section>
    </Container>
  )
}

const skillGroups = [
  { name: "Programming", skills: ["Python", "JavaScript", "HTML", "CSS"] },
  { name: "AI / ML", skills: ["Machine Learning", "Computer Vision", "OpenCV", "NumPy", "Pandas", "Data Preprocessing", "Face Recognition"] },
  { name: "Web", skills: ["React", "Next.js", "Tailwind CSS", "Responsive Web Development", "API Basics"] },
  { name: "Tools & strengths", skills: ["Git", "GitHub", "VS Code", "Problem Solving", "Communication", "Teamwork", "Adaptability", "Continuous Learning"] },
]

export async function SkillsSection({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section id="skills" className="border-y border-line">
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Technical skills</p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">A learning stack, always growing.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">These are learning areas and working tools, not claims of expert-level mastery.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <div key={group.name} className={`p-8 md:p-10 ${index % 2 ? "md:border-l md:border-line" : ""} ${index >= 2 ? "border-t border-line" : ""}`}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{group.name}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="border border-line bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/80">{skill}</span>)}
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
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Education</p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Building a strong foundation.</h2>
        </div>
        <div className="flex flex-col gap-3 p-8 md:flex-row md:items-baseline md:gap-8 md:p-10">
          <p className="w-64 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">2024 – Present</p>
          <div>
            <p className="text-sm font-medium text-foreground">Bachelor of Engineering</p>
            <p className="mt-1 text-sm text-muted-foreground">Computer Science and Engineering · PPG Institute of Technology, Coimbatore</p>
            <p className="mt-2 text-sm text-muted-foreground">Current year: Third Year</p>
          </div>
        </div>
      </section>
    </Container>
  )
}

export async function PracticalWorkSnippet({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section className="border-y border-line">
        <div className="border-b border-line p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Experience & practical work</p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Project experience, built while learning.</h2>
        </div>
        <div className="flex flex-col gap-3 p-8 md:flex-row md:items-start md:gap-8 md:p-10">
          <p className="w-64 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">AI/ML Project Developer</p>
          <ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-muted-foreground">
            <li>Developed a Face Recognition Attendance System using Python and OpenCV.</li>
            <li>Worked with image processing and computer vision concepts.</li>
            <li>Built machine-learning-oriented academic projects and practiced debugging through development.</li>
            <li>Used GitHub for project version control.</li>
          </ul>
        </div>
      </section>
    </Container>
  )
}

export async function ContactCta({ locale: _locale }: { locale: Locale }) {
  return (
    <Container>
      <section className="border-y border-line">
        <div className="p-8 text-center md:p-14">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Contact</p>
          <h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Let’s build and learn together.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">For project conversations, learning opportunities, or thoughtful collaboration, reach me at {siteConfig.email}.</p>
          <Link href="/contact" className="group mt-8 inline-block"><ArrowLink>Contact Dhanu</ArrowLink></Link>
        </div>
      </section>
    </Container>
  )
}
