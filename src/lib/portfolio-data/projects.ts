/**
 * PROJECTS DATA
 * =============
 *
 * HOW TO EDIT:
 * - Add new projects by copying an existing project object
 * - Update existing projects by modifying the fields below
 * - This data is used in: FeaturedProjects component and Projects page
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (lowercase, use hyphens)
 * - name: Project name
 * - description: Short description (1 sentence)
 * - fullDescription: Detailed description (2-3 sentences)
 * - image: Path to project image (relative to /public)
 * - websiteUrl: Live website URL (or "#" if not available)
 * - repositoryUrl: GitHub repository URL (or null if private)
 * - architecture: Technical architecture description
 * - problem: Problem statement
 * - solution: Solution description
 * - techStack: Array of technologies used
 *
 * TIPS:
 * - Keep descriptions clear and concise
 * - Use null for private repositories
 * - Image paths should be relative to /public directory
 * - Use "/placeholder.svg" for projects without images yet
 * - Separate each project with a clear separator (see below)
 */

export const projects = {
  featured: [
    // ========================================
    // Devloop
    // ========================================
    {
      id: "devloop-homepage",
      type: "client",
      name: "Devloop Homepage",
      description:
        "Agency website for Devloop with RTL-ready i18n, performance optimizations, and a Resend-powered contact form.",
      fullDescription:
        "The official Devloop website built with localized routing for English and Arabic, including full RTL support and server-side translations for SEO. It ships with theme switching, animation components that respect reduced-motion, and lazy-loaded/dynamically imported heavy UI to keep the initial load lean.",
      image: "/assets/projects/devloop/devloop.jpg",
      websiteUrl: "https://www.devloop.software",
      repositoryUrl: null,
      architecture:
        "Next.js 16 App Router (Turbopack) + React 19 + Tailwind CSS 4, with next-intl for i18n (en/ar), next-themes for theming, Framer Motion for animations, and Resend for contact email delivery.",
      problem:
        "Devloop needed a fast, bilingual (English/Arabic) public site with strong SEO, clear sections, and a working contact flow.",
      solution:
        "Built a localized Next.js website with RTL support, theme switching, performance-focused loading strategies for animations, and a Resend-backed contact form.",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Base UI",
        "Framer Motion",
        "next-intl",
        "React Hook Form",
        "Zod",
        "Resend",
      ],
    },
    // ========================================
    // Mo's Experiences
    // ========================================
    {
      id: "mos-experiences",
      type: "client",
      name: "Mo's Experiences",
      description:
        "Tourism website with en/fr routing, real-time search, favorites, and an admin dashboard with analytics + Web Vitals insights.",
      fullDescription:
        "A production-ready travel site that includes destinations, packages, VIP tours, and multiple booking/contact flows with email + WhatsApp integration. It also includes an admin dashboard for CRUD content management and an analytics area tracking engagement and Core Web Vitals (LCP/FID/CLS), plus SEO features like OpenGraph, JSON-LD, sitemap, robots, and hreflang.",
      image: "/assets/projects/mos-experiences/mosexperiences.jpg",
      websiteUrl: "https://www.mosexperiences.com/",
      repositoryUrl: null,
      architecture:
        "Next.js 15.5.5 App Router + TypeScript + Tailwind CSS 4 + shadcn/ui, with Supabase (PostgreSQL + Auth), TanStack Query for server-state, Resend for email, next-themes for theming, and a custom analytics tracking layer.",
      problem:
        "A tourism business needed a multi-language website with searchable content, structured packages, and a managed workflow for inquiries and bookings.",
      solution:
        "Delivered a full-featured site with en/fr routing, content browsing + search, favorites, multiple inquiry forms, and an admin dashboard for managing content and monitoring analytics/Web Vitals/SEO signals.",
      techStack: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Radix UI",
        "next-intl",
        "React Hook Form",
        "Zod",
        "PostgreSQL",
        "Supabase Auth",
        "TanStack Query",
        "Resend",
      ],
    },

    // ========================================
    // Dana Doors
    // ========================================
    {
      id: "dana-doors",
      type: "client",
      name: "Dana Doors",
      description:
        "Bilingual (EN/AR) product catalog with full RTL support, Cloudinary-powered image galleries, detailed product specs, and SEO setup (sitemap + structured data).",
      fullDescription:
        "A modern website for showcasing aluminum doors, windows, handrails, kitchens, and related products with full English/Arabic localization. Includes a Cloudinary-powered gallery, dark/light themes, and SEO features such as sitemap, structured data, and meta tags.",
      image: "/assets/projects/dana-doors/dana-doors.jpg",
      websiteUrl: "https://www.danadoors.net/",
      repositoryUrl: null,
      architecture:
        "Next.js 16 App Router + TypeScript + Tailwind CSS, using Radix UI + shadcn/ui for components, Cloudinary for images/CDN, and Upstash Redis for analytics (visit counter).",
      problem:
        "The business needed a bilingual (RTL-ready) catalog that makes products easy to browse with high-quality imagery and search-friendly pages.",
      solution:
        "Shipped a responsive EN/AR website with RTL localization, Cloudinary-powered galleries, dark/light themes, and SEO setup including sitemap and structured data.",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Radix UI",
        "next-intl",
        "React Hook Form",
        "Zod",
        "Cloudinary",
        "Upstash Redis",
        "Resend",
      ],
    },
    // ========================================
    // Rootly
    // ========================================
    {
      id: "rootly-notes",
      type: "personal",
      name: "Rootly Notes",
      description:
        "Learning tracker with dual storage (Supabase or LocalStorage), analytics charts, quiz review mode, and exports (JSON/CSV).",
      fullDescription:
        "Rootly Notes helps track learning progress through courses, Q&A notes (with code snippets), daily study logging (time + mood), and visual analytics across the last 90 days. It supports cloud sync via Supabase or offline-first usage via LocalStorage, and includes a review/quiz mode with session summaries and improvement stats.",
      image: "/assets/projects/rootly-notes/rootly-notes.jpg",
      websiteUrl: "https://rootly-notes-app.vercel.app/",
      repositoryUrl: "https://github.com/mohamed-g-shoaib/rootly-notes-app",
      architecture:
        "Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS v4, using Supabase (PostgreSQL + Auth + RLS) for secure per-user data, Recharts for dashboards, and Radix UI/shadcn/ui for accessible components.",
      problem:
        "Learners needed a structured way to store notes, track progress over time, and review what they studied without losing data (online or offline).",
      solution:
        "Built a notes + learning tracker with offline and cloud modes, progress dashboards, quiz-based review, and exports to JSON/CSV.",
      techStack: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Radix UI",
        "PostgreSQL",
        "Supabase Auth",
        "Recharts",
      ],
    },
    // ========================================
    // Nexcn
    // ========================================
    {
      id: "nexcn",
      type: "personal",
      name: "Nexcn",
      description:
        "Interactive CLI and Next.js 16 starter preconfigured with TypeScript, Tailwind CSS v4, Base UI, EN/AR i18n (RTL), and testing out of the box.",
      fullDescription:
        "Nexcn is a Next.js 16 starter built for shipping without spending time on boilerplate configuration. It includes next-intl for English/Arabic i18n with RTL support, Vitest + Playwright for testing, and a code-quality setup with ESLint, Prettier, and Husky.",
      image: "/assets/projects/nexcn/nexcn.png",
      websiteUrl: "https://nexcn.vercel.app/en",
      repositoryUrl: "https://github.com/mohamed-g-shoaib/nexcn",
      architecture:
        "Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4, with Base UI and shadcn/ui for components, next-intl for i18n (EN/AR + RTL), Vitest for unit tests, Playwright for E2E, and ESLint/Prettier/Husky for code quality.",
      problem:
        "Starting a new Next.js project usually means repeating the same setup work (TypeScript, styling, i18n, testing, linting, and SEO basics).",
      solution:
        "Built an interactive CLI and starter template that generates a production-ready baseline with i18n and testing configured, so the focus stays on product work instead of boilerplate.",
      techStack: [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Base UI",
        "next-intl",
        "Vitest",
        "Playwright",
        "ESLint",
        "Prettier",
        "Husky",
      ],
    },
    // ========================================
    // Marky
    // ========================================
    {
      id: "marky",
      type: "personal",
      name: "Marky",
      description:
        "Mindmap editor with AI-assisted generation, rich editing, markmap visual preview, import/export, and autosave.",
      fullDescription:
        "A responsive mindmap creation and editing app built around a rich editor and real-time visual rendering using markmap. Supports importing Markdown/HTML, exporting standalone HTML, local autosave, a learning center, keyboard shortcuts, and accessibility-focused interactions (including keyboard navigation).",
      image: "/assets/projects/marky-editor/marky-editor.jpg",
      websiteUrl: "https://marky-editor.vercel.app/",
      repositoryUrl: "https://github.com/mohamed-g-shoaib/marky-editor",
      architecture:
        "Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui, using markmap for visualization and Lexical for editing, with an optional configurable AI endpoint and error boundaries for resilience.",
      problem:
        "Users needed a fast way to turn text/Markdown into clean visual mindmaps without relying on heavy desktop tools.",
      solution:
        "Built an editor + live mindmap preview workflow with autosave, import/export, and optional AI-assisted generation to quickly structure ideas.",
      techStack: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS 4",
        "shadcn/ui",
        "Radix UI",
        "markmap.js",
        "Lexical",
        "GPT-OSS",
      ],
    },
  ],
} as const;
