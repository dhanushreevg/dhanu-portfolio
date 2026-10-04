export interface Project {
  id: string
  title: string
  logo: string
  logoAlt: string
  category: string
  status: string
  description: string
  technologies: string[]
  impact: string[]
  highlights?: string[]
  awards?: string[]
  timeline?: string
  github?: string
  live?: string
  caseStudy?: string
  email?: string
  report?: string
}

const projectLogo = "/placeholder-logo.svg"

export const projects: Project[] = [
  {
    id: "urbanmind",
    title: "UrbanMind",
    logo: "/logos/urbanmind.png",
    logoAlt: "UrbanMind project logo",
    category: "AI / Civic Intelligence",
    status: "Team project · Contributor",
    description:
      "AI-powered civic intelligence platform that turns citizen grievances and public data into ranked, explainable municipal priorities. I contributed dashboard and grievance-view UI refactors on the Next.js frontend.",
    technologies: ["Next.js", "TypeScript", "Gemini", "Leaflet", "Tailwind"],
    impact: ["Grievance triage", "Priority scoring", "Ward-level mapping"],
    highlights: ["Ranked dashboard", "Priority scoring", "Analytics trends", "PDF reports"],
    github: "https://github.com/sanjay-offl/UrbanMind",
    live: "https://urban-mind-mauve.vercel.app",
  },
  {
    id: "viyugam-2k26",
    title: "PPG Tech Symposium 2026",
    logo: "/logos/viyugam2k26.png",
    logoAlt: "PPG Tech Symposium 2026 logo",
    category: "Web Development",
    status: "Team project · Contributor",
    description:
      "Official VIYUGAM 2K26 website for the national-level technical symposium at PPG Institute of Technology. I contributed the core UI layouts, navigation, and typed event data (merged as PR #8).",
    technologies: ["Astro", "TypeScript", "SCSS", "GSAP", "Three.js"],
    impact: ["Event microsite", "Animated landing", "Public event routes"],
    highlights: ["Department pages", "Event detail routes", "Registration forms", "GSAP + Three.js motion"],
    github: "https://github.com/sanjay-offl/ppg-tech-symposium-2026",
    live: "https://viyugam2k26.vercel.app",
    timeline: "2026 · Symposium website",
  },
  {
    id: "endless-book",
    title: "Endless Book",
    logo: "/logos/endless-book.png",
    logoAlt: "Endless Book project logo",
    category: "Full-Stack / Creative Web",
    status: "Open source · Contributor",
    description:
      "A community book of childhood memories where every contributor writes one memory in exactly three pages. I worked on the React/Vite web app and API-facing fixes alongside the Kotlin backend.",
    technologies: ["React", "Vite", "TypeScript", "Firebase", "Ktor"],
    impact: ["Three-page chapters", "Contributor profiles", "City autocomplete"],
    highlights: ["Memory submission flow", "Firebase auth + storage", "Google Places lookup", "Ktor API client"],
    github: "https://github.com/sanjay-offl/ENDLESS-BOOK",
    live: "https://endless-book-tau.vercel.app",
  },
  {
    id: "goose-os",
    title: "Goose OS Development",
    logo: "/logos/goose-os.png",
    logoAlt: "Goose OS project logo",
    category: "Operating Systems / Systems Development",
    status: "Development project",
    description: "A systems development project exploring operating-system concepts and hands-on low-level software work.",
    technologies: ["TypeScript", "Systems Design", "Operating Systems"],
    impact: ["Systems learning", "Low-level exploration", "Problem solving"],
    github: "https://github.com/dhanushreevg/goose-os",
  },
  {
    id: "face-recognition-attendance",
    title: "Face Recognition Attendance System",
    logo: projectLogo,
    logoAlt: "Face Recognition Attendance System placeholder logo",
    category: "Computer Vision",
    status: "Academic project",
    description: "An academic computer vision project that uses Python and OpenCV to explore face recognition and attendance automation.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing"],
    impact: ["Face recognition", "Image processing", "Attendance automation"],
    github: "https://github.com/dhanushreevg/objectrecognition",
  },
]

export function getOpenHref(project: Project) {
  return project.live ?? project.email ?? project.github ?? project.caseStudy ?? project.report
}