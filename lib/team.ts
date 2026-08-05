import type { Locale } from "@/lib/i18n"

export type TeamMember = {
  username: string
  name: string
  role: string
  location?: string
  image: string
  bio: Record<Locale, string>
  skills: string[]
  github?: string
  linkedin?: string
  x?: string
  instagram?: string
  website?: string
  email?: string
  projects?: (string | { name: string; url: string })[]
  joinedYear?: number
  cal?: string
  listening?: {
    title: string
    artist: string
    cover?: string
    url?: string
  }
  timezone?: string
  clubs?: { icon: string; label: string }[]
  currently?: { label: string; value: string }[]
  stack?: { category: string; items: (string | { name: string; detail?: string })[] }[]
  software?: { category: string; items: (string | { name: string; detail?: string })[] }[]
  hardware?: { category: string; items: (string | { name: string; detail?: string })[] }[]
}

export const teamMembers: TeamMember[] = [
  {
    username: "sanjay",
    name: "Sanjay S",
    role: "CS Student · AI Builder · Product Developer",
    location: "Coimbatore, India",
    timezone: "Asia/Kolkata",
    image: "/team/sanjay.webp",
    bio: {
      en: "Third-year B.Tech CSE student at PPGIT, Coimbatore. Building AI-powered applications, full-stack products, and contributing to the startup and civic tech ecosystem. NEC Team Lead at the college Entrepreneurship Cell.",
      es: "Third-year B.Tech CSE student at PPGIT, Coimbatore. Building AI-powered applications, full-stack products, and contributing to the startup and civic tech ecosystem. NEC Team Lead at the college Entrepreneurship Cell.",
      pt: "Third-year B.Tech CSE student at PPGIT, Coimbatore. Building AI-powered applications, full-stack products, and contributing to the startup and civic tech ecosystem. NEC Team Lead at the college Entrepreneurship Cell.",
    },
    skills: [
      "Python", "TypeScript", "JavaScript", "Java",
      "React", "Next.js", "Node.js", "FastAPI",
      "PostgreSQL", "MongoDB", "Firebase",
      "OpenAI APIs", "Gemini APIs", "Docker", "Git",
      "Figma", "Tailwind CSS",
    ],
    github: "sanjay-offl",
    linkedin: "sanjayoffl",
    x: "sanjay_offl",
    projects: [
      { name: "THADAM AI", url: "https://github.com/sanjay-offl/thadam-ai" },
      { name: "CivicBrain", url: "https://github.com/sanjay-offl/civicbrain" },
      { name: "CyberShield AI", url: "https://github.com/sanjay-offl/cybershield-ai" },
      { name: "Epsalipm", url: "https://github.com/sanjay-offl/epsalipm" },
      { name: "Pleco AI", url: "https://github.com/sanjay-offl/pleco-ai" },
      { name: "FAYNEX", url: "https://github.com/sanjay-offl/faynex" },
    ],
    joinedYear: 2024,
    calendar: "sanjay",
    stack: [
      { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "GDScript", "C"] },
      { category: "Frontend", items: ["React", "Next.js 14", "Tailwind CSS", "HTML5", "CSS3"] },
      { category: "Backend", items: ["Node.js", "FastAPI", "Express.js", "Serverless", "REST APIs"] },
      { category: "Database", items: ["PostgreSQL", "MongoDB", "Firebase Firestore", "Redis"] },
      { category: "AI", items: ["OpenAI APIs", "Gemini APIs", "Claude Code", "Prompt Engineering", "AI SDK"] },
      { category: "DevOps & Cloud", items: ["Docker", "Vercel", "GitHub Actions", "Supabase"] },
      { category: "Design", items: ["Figma", "Tailwind CSS"] },
    ],
    software: [
      {
        category: "Editor & Terminal",
        items: [
          "VS Code",
          "Cursor",
          { name: "Claude Code", detail: "AI IDE" },
          "Ghostty",
        ],
      },
      {
        category: "Productivity",
        items: [
          "Notion",
          "Linear",
          { name: "Obsidian", detail: "Second brain, notes & learning" },
          "Google Calendar",
        ],
      },
      { category: "Media", items: ["DaVinci Resolve", "Screen Studio"] },
      { category: "Communication", items: ["Discord", "WhatsApp"] },
      { category: "Browser", items: ["Brave", "Chrome"] },
    ],
    hardware: [
      {
        category: "Computers",
        items: [
          { name: "MacBook Pro M4", detail: "14-inch, 2025" },
          { name: "iPhone 15", detail: "Daily driver" },
        ],
      },
      {
        category: "Audio & Video",
        items: [
          { name: "AirPods Pro", detail: "Noise cancellation" },
        ],
      },
    ],
  },
]

export function getTeamMember(username: string) {
  return teamMembers.find((member) => member.username === username)
}
