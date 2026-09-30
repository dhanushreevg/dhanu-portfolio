import { notFound } from "next/navigation"
import { Container, SectionGap } from "@/components/grid-container"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isLocale } from "@/lib/i18n"
import { pageMetadata } from "@/lib/seo"

export const dynamicParams = false

export function generateStaticParams() {
  return [{ lang: "en" }]
}

export function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata({ params, path: "/about", namespace: "pages.about" })
}

const skillGroups = [
  { name: "Programming", skills: ["Python", "JavaScript", "HTML", "CSS"] },
  { name: "AI / ML", skills: ["Machine Learning", "Computer Vision", "OpenCV", "NumPy", "Pandas", "Data Preprocessing", "Face Recognition"] },
  { name: "Web", skills: ["React", "Next.js", "Tailwind CSS", "Responsive Web Development", "API Basics"] },
  { name: "Tools & soft skills", skills: ["Git", "GitHub", "VS Code", "Problem Solving", "Communication", "Teamwork", "Adaptability", "Continuous Learning"] },
]

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()

  return (
    <>
      <SiteHeader locale={lang} />
      <main className="flex-1">
        <Container>
          <div className="px-6 py-16 md:px-10 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">About Dhanu</p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] md:text-7xl">Curious about intelligent, useful technology.</h1>
            <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-muted-foreground">I’m Dhanu Shree, a third-year Computer Science and Engineering student at PPG Institute of Technology, Coimbatore. I’m passionate about Artificial Intelligence, Machine Learning, Computer Vision and modern web development.</p>
          </div>
        </Container>
        <SectionGap />
        <Container>
          <section className="border-y border-line">
            <div className="p-8 md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-10 md:p-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Profile</p>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>I enjoy turning ideas into practical projects, from responsive web applications to AI-powered systems. My current technical journey focuses on Python, machine learning, OpenCV, data processing and front-end development.</p>
                <p>I’m continuously improving my problem-solving, communication and development skills while exploring technologies that can solve real-world problems.</p>
              </div>
            </div>
          </section>
        </Container>
        <SectionGap />
        <Container>
          <section id="education" className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Education</p><h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Where I’m building my foundation.</h2></div>
            <div className="flex flex-col gap-3 p-8 md:flex-row md:items-baseline md:gap-8 md:p-10">
              <p className="w-64 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">2024 – Present</p>
              <div><p className="text-sm font-medium text-foreground">Bachelor of Engineering</p><p className="mt-1 text-sm text-muted-foreground">Computer Science and Engineering · PPG Institute of Technology, Coimbatore</p><p className="mt-2 text-sm text-muted-foreground">Current year: Third Year</p></div>
            </div>
          </section>
        </Container>
        <SectionGap />
        <Container>
          <section id="skills" className="border-y border-line">
            <div className="border-b border-line p-8 md:p-10"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Skills</p><h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Learning, practicing, improving.</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2">{skillGroups.map((group, index) => <div key={group.name} className={`p-8 md:p-10 ${index % 2 ? "md:border-l md:border-line" : ""} ${index >= 2 ? "border-t border-line" : ""}`}><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{group.name}</p><div className="mt-4 flex flex-wrap gap-2">{group.skills.map((skill) => <span key={skill} className="border border-line bg-secondary/40 px-3 py-1.5 font-mono text-xs text-foreground/80">{skill}</span>)}</div></div>)}</div>
          </section>
        </Container>
        <SectionGap />
        <Container>
          <section className="border-y border-line"><div className="border-b border-line p-8 md:p-10"><p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Practical work</p><h2 className="mt-3 text-3xl tracking-tight md:text-4xl">Project experience while learning.</h2></div><div className="flex flex-col gap-3 p-8 md:flex-row md:gap-8 md:p-10"><p className="w-64 shrink-0 font-mono text-sm uppercase tracking-[0.2em] text-accent">AI/ML Project Developer</p><ul className="max-w-2xl space-y-2 text-sm leading-relaxed text-muted-foreground"><li>Developed a Face Recognition Attendance System using Python and OpenCV.</li><li>Worked with image processing and computer vision concepts.</li><li>Practiced debugging, problem-solving and GitHub version control through project development.</li></ul></div></section>
        </Container>
      </main>
      <SiteFooter locale={lang} />
    </>
  )
}
