import Link from "next/link"
import { ArrowLink } from "@/components/arrow-link"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/grid-container"
import { cn } from "@/lib/utils"

const featured = [
  {
    title: "GreenSprout",
    category: "Agritech",
    status: "MSME Registered · TN-EDII Funded",
    description:
      "AI-powered smart agriculture platform with AGRISOLARBOT™ — a solar-powered multi-function farming vehicle that automates agricultural operations, reduces cost, and improves sustainability.",
    technologies: ["Next.js", "IoT", "ESP32", "Solar Tech", "AI"],
    href: "https://greensprouts-offl.netlify.app/",
    cta: "Visit GreenSprout",
  },
  {
    title: "UrbanMind",
    category: "Civic Tech",
    status: "GDG Coimbatore Hackathon 2026",
    description:
      "AI-powered citizen grievance intelligence portal that lets citizens submit, track, and resolve civic complaints using AI categorization, priority scoring, and department routing.",
    technologies: ["Next.js 14", "FastAPI", "PostgreSQL", "Gemini 1.5 Flash"],
    href: "/projects",
    cta: "See it on projects",
  },
  {
    title: "DIVYAM",
    category: "Accessibility",
    status: "Prototype",
    description:
      "Accessible learning platform for visually impaired students using AI, speech recognition, emotion analysis, recorded lectures, teacher dashboard, and full voice navigation.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Framer Motion"],
    href: "https://github.com/sanjay-offl/VYAM",
    cta: "View on GitHub",
  },
]

export function FeaturedProjects() {
  return (
    <div id="work">
      <Container innerClassName="border-b py-6">
        <h2 className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Featured projects
        </h2>
      </Container>
      <hr className="border-line" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p, i) => (
            <article
              key={p.title}
              className={cn(
                "relative min-h-80 border-line p-8 md:p-10",
                i > 0 ? "border-t md:border-t-0" : "",
                i % 2 ? "md:border-l" : "",
                i >= 2 ? "md:border-t xl:border-t-0" : "",
                i % 3 ? "xl:border-l" : "",
              )}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {p.category}
              </p>
              <h3 className="mt-4 text-3xl tracking-tight md:text-4xl">{p.title}</h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {p.status}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.technologies.map((t) => (
                  <Badge key={t} variant="outline">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <Link
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  p.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group mt-8 inline-block"
              >
                <ArrowLink>{p.cta}</ArrowLink>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}
