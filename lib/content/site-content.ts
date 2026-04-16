type SocialLink = {
  href: string
  label: string
}

export type Project = {
  name: string
  slug: string
  kind: "client" | "personal"
  status: "shipped" | "in-progress" | "refactoring" | "archived"
  href?: string
  repoHref?: string
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
    "I work mostly with React and Next.js. I use React with Vite for focused client-side products, and Next.js when the product needs a stronger foundation for routing, content, SEO, or backend work, usually with Supabase and Postgres.",
    "For UI, I usually reach for shadcn/ui or coss ui. I prefer Base UI when I want control over the primitives, and Radix UI when the ecosystem fit is better.",
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
    name: "Devloop",
    slug: "devloop",
    kind: "client",
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
  {
    name: "Dana Doors",
    slug: "dana-doors",
    kind: "client",
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
    name: "Reway",
    slug: "reway",
    kind: "personal",
    status: "shipped",
    href: "https://www.reway.page/",
    repoHref: "https://github.com/mohamed-g-shoaib/reway",
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
    name: "Forge",
    slug: "forge",
    kind: "personal",
    status: "shipped",
    href: "https://use-forge.vercel.app/",
    repoHref: "https://github.com/mohamed-g-shoaib/forge",
    summary:
      "A TypeScript CLI for generating clean React starters with framework shells, theme support, optional RTL routing, metadata, fallback pages, and code-quality tooling already wired.",
    details:
      "Built to turn the repeated setup work behind new React apps into a small, editable starter generator. Forge starts from a shadcn scaffold, then applies framework overlays and feature packs for app shell structure, themes, optional English and Arabic routing, sound hooks, metadata, fallback pages, starter docs, and lint or format tooling. The project includes a Vercel-hosted marketing site and is moving through its first public release pass.",
    architecture: [
      "TypeScript CLI",
      "shadcn scaffold adapter",
      "Next.js, Vite, and TanStack Start presets",
      "Base UI and Radix UI options",
      "LTR and RTL routing modes",
      "Theme and sound hook feature packs",
      "Metadata, error, and not-found overlays",
      "Biome, ESLint + Prettier, and Oxlint + Oxfmt options",
      "Generated regression fixtures",
      "Vercel marketing site",
    ],
    image: {
      src: "/assets/projects/forge/forge.webp",
      alt: "Marketing site preview for the Forge React starter generator.",
    },
  },
  {
    name: "Mo's Experiences",
    slug: "mos-experiences",
    kind: "client",
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
    name: "Rootly",
    slug: "rootly",
    kind: "personal",
    status: "shipped",
    href: "https://rootlynotes.vercel.app/",
    repoHref: "https://github.com/mohamed-g-shoaib/rootly",
    summary:
      "A cloud-first learning notebook for self-taught developers with structured notes, course tracking, daily study logs, and active-recall review.",
    details:
      "Built as the active Rootly v2 application with a performance-focused dashboard architecture and extension-powered capture workflows. The product combines Q&A and freeform notes, topic-aware course tracking, daily study logs, and review sessions, then layers in query-backed instant navigation, cache-tagged server reads/mutations, extension-to-dashboard live updates, and a lightweight Web Audio interaction system for a faster, more responsive study experience.",
    architecture: [
      "Next.js 16 App Router (Turbopack, Cache Components)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "coss ui + Base UI",
      "Hugeicons",
      "Supabase (Auth, PostgreSQL, RLS)",
      "TanStack Query",
      "Recharts",
      "Motion",
      "Browser extension side panel + authenticated bridge APIs",
      "Oxlint + Oxfmt",
    ],
    image: {
      src: "/assets/projects/rootly/rootly.webp",
      alt: "Dashboard preview for the Rootly developer learning notebook.",
    },
  },
  {
    name: "Markymap",
    slug: "markymap",
    kind: "personal",
    status: "shipped",
    href: "https://markymap.vercel.app/",
    repoHref: "https://github.com/mohamed-g-shoaib/markymap",
    summary:
      "A high-performance Markdown-to-mindmap application with live rendering, autosave, and interactive map controls in a clean split interface.",
    details:
      "Built for frictionless visual note-taking and brainstorming without heavyweight desktop tools. The product pairs a live Markdown editor with real-time SVG mindmap rendering, then layers in practical workflow features: local autosave, import/export for .md files, keyboard-friendly theme toggling, zoom and pan interactions, and responsive behavior that stays smooth across devices.",
    architecture: [
      "Next.js 16 App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "coss ui + Base UI",
      "Markmap (markmap-lib + markmap-view)",
      "Hugeicons",
      "Web Audio API",
      "Local storage persistence",
      "Oxlint + Oxfmt",
    ],
    image: {
      src: "/assets/projects/markymap/markymap.webp",
      alt: "Editor and live mindmap preview for the Markymap Markdown mindmapping app.",
    },
  },
]

export const clientProjects = projects.filter(
  (project) => project.kind === "client"
)

export const personalProjects = projects.filter(
  (project) => project.kind === "personal"
)

const featuredProjectSlugs = [
  "devloop",
  "dana-doors",
  "mos-experiences",
  "rootly",
] as const

export const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => project !== undefined)
