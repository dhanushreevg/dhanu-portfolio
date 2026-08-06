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

export const projects: Project[] = [
  {
    id: "greensprout",
    title: "GreenSprout",
    logo: "/logos/greensprout.png",
    logoAlt: "GreenSprout logo",
    category: "Agritech",
    status: "MSME Registered",
    description:
      "AI-powered smart agriculture platform featuring AGRISOLARBOT™, a multifunctional solar-powered farming vehicle that automates multiple agricultural operations while reducing cost, time, and environmental impact.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "ESP32",
      "IoT",
      "Solar Tech",
      "AI",
      "Automation",
    ],
    impact: [
      "MSME Registered",
      "TN-EDII Funded",
      "Innovation Voucher",
      "Sustainable Farming",
      "Multi-operation Vehicle",
    ],
    awards: ["MSME Registered", "TN-EDII Innovation Voucher"],
    timeline: "2025–2026 · 8-month development cycle",
    live: "https://greensprouts-offl.netlify.app/",
    caseStudy: "https://greensprouts-offl.netlify.app/solution",
  },
  {
    id: "divyam",
    title: "DIVYAM",
    logo: "/logos/divyam.png",
    logoAlt: "DIVYAM logo",
    category: "Accessibility",
    status: "Prototype",
    description:
      "Accessible learning platform designed for visually impaired students using AI, speech recognition, emotion analysis, recorded lectures, teacher dashboard, and voice navigation.",
    technologies: [
      "React",
      "Vite",
      "Tailwind",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Framer Motion",
      "Speech Recognition",
    ],
    impact: ["Inclusive Education", "AI Accessibility", "Assistive Technology"],
    highlights: [
      "Teacher Dashboard",
      "Voice Navigation",
      "Emotion Detection",
      "Lecture Upload",
      "Progress Tracking",
      "Authentication",
    ],
    timeline: "2025 · Full-stack accessibility prototype",
    github: "https://github.com/sanjay-offl/VYAM",
  },
  {
    id: "xgrova",
    title: "XGROVA",
    logo: "/logos/xgrova.png",
    logoAlt: "XGROVA logo",
    category: "Sustainability",
    status: "Concept",
    description:
      "Upcycling discarded laptops into eco-friendly affordable computing devices using modular hardware and lightweight Linux operating systems.",
    technologies: [
      "Linux",
      "Hardware",
      "Circular Economy",
      "Sustainability",
      "Repairability",
    ],
    impact: [
      "Affordable Computing",
      "E-waste Reduction",
      "Digital Inclusion",
      "CSR",
      "NGO Distribution",
    ],
    timeline: "2026 · E-waste upcycling concept",
  },
  {
    id: "codera",
    title: "Codera",
    logo: "/logos/codera.png",
    logoAlt: "Codera logo",
    category: "Community",
    status: "Active",
    description:
      "A student-led innovation community focused on practical learning, hackathons, startups, open source, leadership, networking, and real-world product building.",
    technologies: [
      "AI",
      "Leadership",
      "Hackathons",
      "Open Source",
      "Community",
      "Design",
      "Cloud",
      "Innovation",
    ],
    impact: [
      "Builder Culture",
      "Founder Networking",
      "Workshops",
      "Career Exposure",
      "Innovation",
    ],
    timeline: "2025–2026 · Student-led community",
  },
  {
    id: "webro",
    title: "Webro",
    logo: "/logos/webro.png",
    logoAlt: "Webro logo",
    category: "Freelancing",
    status: "Ongoing",
    description:
      "Freelance software and digital solutions brand delivering modern websites, web applications, UI/UX design, branding, and client-focused technology solutions.",
    technologies: [
      "Next.js",
      "React",
      "Branding",
      "Web Design",
      "Freelancing",
      "UI/UX",
    ],
    impact: [
      "Client Projects",
      "Modern UI",
      "Scalable Solutions",
      "Responsive Design",
    ],
    timeline: "Ongoing · Freelance brand",
    email: "builtwithwebro@gmail.com",
  },
  {
    id: "iitb-esummit",
    title: "IIT Bombay E-Summit",
    logo: "/logos/iitb.png",
    logoAlt: "IIT Bombay E-Summit logo",
    category: "Achievement",
    status: "Finalist",
    description:
      "Participated in IIT Bombay E-Summit 2025 as a finalist in the Google AdMob I-Hack competition while attending workshops, networking sessions, founder talks, and innovation events.",
    technologies: [
      "Product Thinking",
      "Google AdMob",
      "Entrepreneurship",
      "Innovation",
      "Networking",
    ],
    impact: [
      "Google AdMob Track",
      "Industry Exposure",
      "Founder Networking",
      "Workshops",
      "Leadership",
    ],
    awards: ["I-Hack Finalist · Google AdMob Track"],
    timeline: "December 2025 · 4-day summit",
    report:
      "https://drive.google.com/file/d/1OJUiFUtlnjJ3wGbXnEwuNQJEGAC9jPb-/view?usp=sharing",
  },
]

export function getOpenHref(project: Project) {
  return (
    project.live ??
    project.email ??
    project.github ??
    project.caseStudy ??
    project.report
  )
}
