"use client"

import Image from "next/image"
import {
  ArrowUpRight,
  Calendar,
  Check,
  FileText,
  Github,
  Globe,
  Mail,
  Trophy,
} from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getOpenHref, type Project } from "@/lib/projects"

const chip = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
}

const chipContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04 },
  },
}

const buttonSpring = {
  type: "spring",
  stiffness: 420,
  damping: 18,
} as const

interface ProjectCardProps {
  project: Project
  index: number
}

function SecondaryAction({
  href,
  label,
  icon,
}: {
  href: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={buttonSpring}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-background px-3.5 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {icon}
      {label}
    </motion.a>
  )
}

function PrimaryOpen({ href }: { href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={buttonSpring}
      className="group/btn inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-xs font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      Open
      <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
    </motion.a>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reduceMotion = useReducedMotion()
  const openHref = getOpenHref(project)

  return (
    <motion.article
      id={project.id}
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -10, scale: 1.03 }}
      className="group relative flex h-full min-h-[560px] scroll-mt-32 flex-col overflow-hidden rounded-3xl border border-line bg-card p-6 transition-[border-color,box-shadow] duration-300 hover:border-primary/50 hover:shadow-[0_24px_70px_-20px_rgba(228,34,120,0.18)] focus-within:border-primary/50 sm:p-7"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_0%_0%,rgba(237,123,171,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <header className="relative z-10 flex items-start gap-4">
        <motion.div
          whileHover={reduceMotion ? undefined : { rotate: 3, scale: 1.08 }}
          transition={buttonSpring}
          className="shrink-0"
        >
          <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-line bg-secondary sm:size-[88px]">
            <Image
              src={project.logo}
              alt={project.logoAlt}
              width={88}
              height={88}
              className="size-full object-contain object-center"
            />
          </div>
        </motion.div>
        <div className="min-w-0 flex-1">
          <h2 className="text-balance text-lg font-semibold leading-snug tracking-tight text-foreground sm:truncate sm:text-xl">
            {project.title}
          </h2>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-line bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase leading-4 tracking-[0.18em] text-muted-foreground">
              {project.category}
            </span>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border border-line bg-secondary px-2.5 py-1 text-[11px] font-medium leading-4 text-muted-foreground",
              )}
            >
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              {project.status}
            </span>
          </div>
        </div>
      </header>

      <p className="relative z-10 mt-6 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <motion.ul
        variants={chipContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 mt-5 flex flex-wrap gap-2"
      >
        {project.technologies.map((tech) => (
          <motion.li key={tech} variants={chip} transition={buttonSpring}>
            <span className="inline-flex max-w-full items-center rounded-full border border-line bg-secondary px-2.5 py-1 text-[11px] font-medium leading-4 text-muted-foreground">
              {tech}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="relative z-10 mt-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          Impact
        </p>
        <ul className="mt-3 grid grid-cols-1 gap-x-3 gap-y-2 sm:grid-cols-2">
          {project.impact.map((item) => (
            <li
              key={item}
              className="flex min-w-0 items-start gap-1.5 text-xs leading-snug text-foreground"
            >
              <Check className="size-3.5 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.highlights ? (
        <div className="relative z-10 mt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            What it does
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="max-w-full break-words rounded-md border border-line bg-secondary px-2 py-1 text-[11px] leading-4 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {project.awards ? (
        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          {project.awards.map((award) => (
            <span
              key={award}
              className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-line bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
            >
              <Trophy className="size-3.5 text-primary" />
              {award}
            </span>
          ))}
        </div>
      ) : null}

      {project.timeline ? (
        <div className="relative z-10 mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Calendar className="size-3.5" />
          {project.timeline}
        </div>
      ) : null}

      <footer className="relative z-10 mt-auto flex flex-wrap items-center gap-2 pt-7">
        {project.live ? (
          <SecondaryAction
            href={project.live}
            label="Live"
            icon={<Globe className="size-3.5" />}
          />
        ) : null}
        {project.github ? (
          <SecondaryAction
            href={project.github}
            label="Github"
            icon={<Github className="size-3.5" />}
          />
        ) : null}
        {project.email ? (
          <SecondaryAction
            href={`mailto:${project.email}`}
            label="Email"
            icon={<Mail className="size-3.5" />}
          />
        ) : null}
        {project.caseStudy ? (
          <SecondaryAction
            href={project.caseStudy}
            label="Case Study"
            icon={<FileText className="size-3.5" />}
          />
        ) : null}
        {project.report ? (
          <SecondaryAction
            href={project.report}
            label="Report"
            icon={<FileText className="size-3.5" />}
          />
        ) : null}
        {openHref ? <PrimaryOpen href={openHref} /> : null}
      </footer>
    </motion.article>
  )
}
