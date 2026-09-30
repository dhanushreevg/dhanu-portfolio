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
    logo: projectLogo,
    logoAlt: "UrbanMind project placeholder logo",
    category: "AI / Smart City",
    status: "Project",
    description: "An AI-focused project exploring technology-driven solutions for urban challenges and citizen needs.",
    technologies: ["AI", "Next.js", "Data Processing"],
    impact: ["Urban problem solving", "AI exploration", "Practical technology"],
    timeline: "2026 · Hackathon project",
  },
  {
    id: "goose-os",
    title: "Goose OS Development",
    logo: projectLogo,
    logoAlt: "Goose OS project placeholder logo",
    category: "Operating Systems / Systems Development",
    status: "Development project",
    description: "A systems development project exploring operating-system concepts and hands-on low-level software work.",
    technologies: ["Systems Development", "Operating Systems"],
    impact: ["Systems learning", "Low-level exploration", "Problem solving"],
  },
  {
    id: "ppg-symposium",
    title: "PPG Symposium Website",
    logo: projectLogo,
    logoAlt: "PPG Symposium Website placeholder logo",
    category: "Web Development",
    status: "Academic project",
    description: "A website developed for a symposium or event at PPG Institute of Technology, Coimbatore.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Development"],
    impact: ["Event communication", "Responsive interface", "Front-end practice"],
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
  },
]

export function getOpenHref(project: Project) {
  return project.live ?? project.email ?? project.github ?? project.caseStudy ?? project.report
}
