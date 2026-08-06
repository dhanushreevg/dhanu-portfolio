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
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 text-xs font-medium text-zinc-300 transition-colors duration-200 hover:border-white/[0.2] hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
      className="group/btn inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-4 text-xs font-semibold text-black transition-colors duration-200 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]"
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
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -10, scale: 1.03 }}
      className="group relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111111] p-7 transition-[border-color,box-shadow] duration-300 hover:border-white/[0.15] hover:shadow-[0_24px_70px_-20px_rgba(255,255,255,0.12)] focus-within:border-white/[0.15]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_60%_at_0%_0%,rgba(255,255,255,0.09),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <header className="relative z-10 flex items-start gap-4">
        <motion.div
          whileHover={reduceMotion ? undefined : { rotate: 3, scale: 1.08 }}
          transition={buttonSpring}
          className="shrink-0"
        >
          <div className="flex size-[88px] shrink-0 items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-[#0a0a0a]">
            <Image
              src={project.logo}
              alt={project.logoAlt}
              width={88}
              height={88}
              className="size-full object-contain object-center"
            />
          </div>
        </motion.div>
        <div className="min-w-0">
          <h2 className="truncate text-xl font-semibold tracking-tight text-white">
            {project.title}
          </h2>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              {project.category}
            </span>
            <span
              className={cn(
                "inline-flex h-6 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 text-[11px] font-medium text-zinc-300",
              )}
            >
              <span className="size-1.5 rounded-full bg-white/60" />
              {project.status}
            </span>
          </div>
        </div>
      </header>

      <p className="relative z-10 mt-6 text-sm leading-6 text-zinc-400">
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
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-zinc-300">
              {tech}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <div className="relative z-10 mt-7">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          Impact
        </p>
        <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2">
          {project.impact.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-xs leading-snug text-zinc-300"
            >
              <Check className="size-3.5 shrink-0 text-white/60" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {project.highlights ? (
        <div className="relative z-10 mt-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            What it does
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-400"
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
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-zinc-300"
            >
              <Trophy className="size-3.5 text-white/60" />
              {award}
            </span>
          ))}
        </div>
      ) : null}

      {project.timeline ? (
        <div className="relative z-10 mt-4 flex items-center gap-1.5 text-xs text-zinc-500">
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
