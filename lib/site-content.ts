type SocialLink = {
  href: string
  label: string
}

type Technology = {
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
    name: "Dana Doors",
    slug: "dana-doors",
    status: "shipped",
    href: "https://danadoors.net/",
    summary:
      "A bilingual product catalog for aluminum doors, windows, handrails, kitchens, and related offerings.",
    details:
      "Built as a modern EN/AR showcase experience with full RTL localization and image-first product browsing. The site pairs Cloudinary-powered galleries with responsive layouts, dark/light themes, and a search-friendly SEO setup including metadata, sitemap coverage, and structured data so catalog pages stay discoverable.",
    architecture: [
      "Next.js 16 App Router",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Cloudinary (image delivery + CDN)",
      "Upstash Redis (visit analytics counter)",
      "SEO metadata + sitemap + structured data",
    ],
    image: {
      src: "/assets/projects/danadoors/danadoors.webp",
      alt: "Homepage preview for Dana Doors bilingual product catalog website.",
    },
  },
  {
    name: "Mo's Experiences",
    slug: "mos-experiences",
    status: "shipped",
    href: "http://mosexperiences.com/",
    summary:
      "A production-ready travel platform with destinations, packages, VIP tours, and multi-channel booking flows.",
    details:
      "Built to give a tourism business one managed system for discovery, inquiries, and booking operations across languages. The platform includes en/fr routing, searchable content, favorites, multiple contact and booking flows with email and WhatsApp integration, plus an admin dashboard for CRUD content management and analytics coverage for engagement, Core Web Vitals, and SEO health.",
    architecture: [
      "Next.js 15.5.5 App Router",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "Supabase (PostgreSQL, Auth)",
      "TanStack Query",
      "Resend",
      "next-themes",
      "Custom analytics tracking layer",
      "OpenGraph + JSON-LD + sitemap + robots + hreflang",
    ],
    image: {
      src: "/assets/projects/mosexperiences/mosexperiences.webp",
      alt: "Homepage preview for Mo's Experiences travel platform.",
    },
  },
  {
    name: "Reway",
    slug: "reway",
    status: "shipped",
    href: "https://www.reway.page/",
    summary:
      "A bookmarking workspace with intelligent link extraction, real-time sync, and a Chrome extension for instant capture.",
    details:
      "Built to replace browser-siloed bookmark flows with one searchable workspace across devices. Reway supports smart paste-to-bookmark metadata enrichment, grouped organization, keyboard-first navigation, flexible view modes, reduced-motion support, and optimistic updates to keep interactions fast and responsive.",
    architecture: [
      "Next.js 16 App Router (Turbopack)",
      "React 19",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase (PostgreSQL, Auth, Realtime)",
      "Chrome Extension (Manifest V3)",
      "Optimistic UI patterns",
    ],
    image: {
      src: "/assets/projects/reway/reway.webp",
      alt: "Workspace preview for the Reway bookmarking platform.",
    },
  },
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

export const featuredProjects = projects.slice(0, 3)

export const experiences: Experience[] = [
  {
    company: "TELUS International",
    role: "Search Engine Evaluator",
    periodLabel: "Sep 2019 - May 2024",
    summary:
      "Worked with detailed evaluation guidelines, structured review notes, and remote QA processes that strengthened my attention to detail, consistency, and written communication.",
  },
]
