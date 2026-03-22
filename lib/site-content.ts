export type SocialLink = {
  href: string
  label: string
}

export type Technology = {
  name: string
}

export type Project = {
  name: string
  slug: string
  status: "shipped" | "in-progress" | "archived"
  href: string
  summary: string
  details: string
  architecture: string[]
  image: {
    src: string
    alt: string
  }
}

export type Experience = {
  company: string
  role: string
  periodLabel: string
  summary: string
}

export const siteProfile = {
  name: "Mohamed Gamal",
  role: "Frontend Developer",
  location: "Cairo, Egypt",
  intro:
    "I build fast, SEO-driven web applications with full RTL support and a strong bias toward clarity, performance, and long-term maintainability.",
  bio: "I care about clean architecture, thoughtful interfaces, and performance that holds up under real traffic. I work best with modern tooling, adapt quickly to project needs, and gravitate toward problems that force me to learn something new.",
  opportunities: ["Jobs", "Freelance", "Open source"],
} as const

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:mohamed.g.shoaib@gmail.com",
    label: "Email",
  },
  {
    href: "https://github.com/mohamed-g-shoaib",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mohamed-g-shoaib/",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/mo0hamed_gamal",
    label: "X",
  },
]

export const technologies: Technology[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "shadcn/ui" },
]

export const projects: Project[] = [
  {
    name: "Devloop",
    slug: "devloop",
    status: "shipped",
    href: "https://www.devloop.software/",
    summary:
      "A bilingual public website for Devloop with localized routing, server-rendered SEO, and full English/Arabic RTL support.",
    details:
      "Built to stay lean on first load while still supporting theming, reduced-motion-aware interactions, and a working contact flow. The implementation prioritizes clear information architecture, strong SEO fundamentals, and loading strategies that keep heavier UI off the critical path.",
    architecture: [
      "Next.js 16 App Router",
      "React 19",
      "Tailwind CSS 4",
      "next-intl",
      "next-themes",
      "Motion",
      "Resend",
    ],
    image: {
      src: "/assets/projects/devloop/devloop.webp",
      alt: "Homepage preview for the Devloop bilingual marketing website.",
    },
  },
]

export const experiences: Experience[] = [
  {
    company: "TELUS International",
    role: "Search Engine Evaluator",
    periodLabel: "Sep 2019 - May 2024",
    summary:
      "Worked with detailed evaluation guidelines, structured review notes, and remote QA processes that strengthened my attention to detail, consistency, and written communication.",
  },
]
