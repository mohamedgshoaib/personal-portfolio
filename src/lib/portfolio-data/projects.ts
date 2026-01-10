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
      name: "Devloop Software Agency",
      description:
        "Developed a modular component library, RTL/LTR support, SEO-optimized pages, and integrated Resend for emails, and react-email for professional email template.",
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
      name: "Mo's Experiences for Tourism",
      description:
        "Optimized caching for server data, improving load times 40%, enhanced security with XSS and CSRF prevention, and added bilingual support.",
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
      name: "Dana Doors Showroom",
      description:
        "Implemented bilingual inquiry flows and responsive showroom UI to drive sales leads, RTL/LTR support, and Indexed on Google Search Console.",
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
    // Mind Cave
    // ========================================
    {
      id: "mind-cave",
      type: "personal",
      name: "Mind Cave Bookmark Manager",
      description:
        "High-performance bookmark manager with Chrome extension, real-time sync across devices, and intelligent organization with custom categories.",
      fullDescription:
        "Mind Cave is a full-stack bookmark management system that solves the problem of scattered, unorganized bookmarks across browsers. It features a lightning-fast dashboard with real-time multi-tab synchronization, intelligent category management with custom icons and colors, advanced filtering, bulk operations, and one-click bookmark imports from Chrome/Firefox/Safari. The dashboard was comprehensively optimized through systematic performance improvements: lazy loading, image optimization with Sharp/WebP conversion, Intersection Observer-based true lazy loading, and pre-generated thumbnail caching. Built with Next.js 16, React 19, and Supabase PostgreSQL, it delivers a seamless bookmark collection and discovery experience.",
      image: "/assets/projects/mind-cave/mind-cave.jpg",
      websiteUrl: "https://mindcave.vercel.app",
      repositoryUrl: "https://github.com/mohamed-g-shoaib/mindcave",
      architecture:
        "Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Supabase PostgreSQL. Frontend: Shadcn/ui components, Framer Motion animations, Hugeicons, React Query for server state. Backend: Next.js API routes, Sharp for server-side image processing, real-time subscriptions. Chrome Extension: Manifest v3 with content scripts and background workers. Performance: Intersection Observer lazy loading, content-visibility CSS, 365-day cache, WebP image conversion.",
      problem:
        "Users collect thousands of bookmarks across browsers but struggle to organize, rediscover, and access them efficiently. Browser bookmarks are scattered, search is poor, and there's no way to add context or categorize at scale.",
      solution:
        "Built a centralized bookmark hub with intelligent organization (categories with icons/colors), real-time Chrome extension syncing, advanced filtering, bulk operations, bookmark import from browsers, and metadata auto-fetch. Optimized the dashboard from 5.49s to 1.1s through 4 strategic performance phases, ensuring fast load times even with hundreds of bookmarks.",
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS 4",
        "Supabase PostgreSQL",
        "Shadcn/ui",
        "Framer Motion",
        "Hugeicons",
        "Sharp",
        "React Query",
        "Chrome Extension (MV3)",
        "Intersection Observer",
        "Sonner (Toast)",
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
  ],
} as const;
