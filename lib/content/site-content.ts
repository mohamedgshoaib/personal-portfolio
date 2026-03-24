type SocialLink = {
  href: string
  label: string
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

export const siteProfile = {
  name: "Mohamed Gamal",
  role: "Frontend Developer",
  location: "Cairo, Egypt",
  intro:
    "I build frontend systems with React and Next.js, with close attention to structure, interface quality, and execution.",
  bio: "My work sits at the intersection of engineering and design: strong planning, clean visual decisions, and implementation that stays careful all the way through. I care about products that feel considered, not improvised.",
} as const

export const homeContent = {
  approach: [
    "I work mostly with React and Next.js. I use React with Vite for focused client-side products, and Next.js when the product needs a stronger foundation for routing, content, SEO, or backend work.",
    "For UI, I usually reach for shadcn/ui or coss ui. I prefer Base UI when I want control over the primitives, and Radix UI when the ecosystem fit is better.",
    "On the backend, I often use Supabase for auth, Postgres, and product infrastructure that should move fast without losing structure.",
  ],
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

export const projects: Project[] = [
  {
    name: "Dana Doors",
    slug: "dana-doors",
    status: "shipped",
    href: "https://danadoors.net/",
    summary:
      "A bilingual showroom website built to present doors, aluminum windows, handrails, kitchens, and related product lines in both English and Arabic.",
    details:
      "Designed as a clean product-browsing experience for a showroom business, with full RTL support, structured navigation, and image-led discovery across multiple categories. The build focuses on clarity, search visibility, and a catalog structure that can scale as inventory and content grow.",
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
      "A travel agency website with multilingual content, curated packages, VIP experiences, and a dashboard-managed content system.",
    details:
      "Built as a managed frontend system for a travel agency rather than a static brochure. The site supports multilingual routing, curated travel content, inquiry flows, and dashboard-controlled updates for destinations, packages, and other commercial content. The emphasis was on giving the business a reliable publishing and communication layer without overcomplicating the public experience.",
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
      "A bookmarking workspace that turns saved links into a cleaner, searchable system across devices, with a Chrome extension as part of the capture flow.",
    details:
      "Built around speed and usability: quick capture, structured organization, and an interface that stays responsive while content syncs in real time. A Chrome extension is a core part of the product, making it possible to save links directly from the browser into the workspace without breaking the flow. The product leans on careful interaction design as much as the underlying data model.",
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
      "A bilingual agency website with localized routing, full RTL support, and a careful technical foundation for search and performance.",
    details:
      "Built for an agency that delivers digital systems, whether full stack products or more focused web work. The site is intentionally lean, with clear structure, bilingual routing, full RTL support, and strong SEO fundamentals. The frontend keeps heavier behavior away from the critical path while still supporting theming and polished interactions.",
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
