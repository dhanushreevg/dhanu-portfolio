import Link from "next/link"
import { ArrowLink } from "@/components/arrow-link"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/grid-container"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function FeaturedProjects() {
  return (
    <div id="work">
      <Container innerClassName="border-b py-6">
        <h2 className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Featured projects</h2>
      </Container>
      <hr className="border-line" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <article key={project.id} className={cn("relative min-h-80 border-line p-8 md:p-10", index > 0 ? "border-t md:border-t-0" : "", index % 2 ? "md:border-l" : "", index % 4 ? "xl:border-l" : "")}>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{project.category}</p>
              <h3 className="mt-4 text-2xl tracking-tight md:text-3xl">{project.title}</h3>
              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.status}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((technology) => <Badge key={technology} variant="outline">{technology}</Badge>)}</div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <Link href={`/projects#${project.id}`} className="group mt-8 inline-block"><ArrowLink>View project</ArrowLink></Link>
            </article>
          ))}
        </div>
      </Container>
    </div>
  )
}
