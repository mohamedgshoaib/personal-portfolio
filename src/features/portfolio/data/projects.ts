import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "Reway",
    slug: "reway",
    title: "Reway",
    link: "https://www.reway.page/",
    github: "https://github.com/mohamed-g-shoaib/reway",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_%D9%85%D8%B4%D9%83%D9%84%D8%A9-%D9%83%D9%84%D9%86%D8%A7-%D8%A8%D9%86%D9%82%D8%B9-%D9%81%D9%8A%D9%87%D8%A7-%D9%84%D9%85%D8%A7-%D8%A7%D9%84%D9%84%D9%8A%D9%86%D9%83%D8%A7%D8%AA-%D8%A7%D9%84%D9%84%D9%8A-%D8%A8%D9%86%D8%AD%D8%AA%D8%A7%D8%AC%D9%87%D8%A7-activity-7433162768834285568-gTXu?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/reway/reway.webp",
    background: "/assets/projects/reway/reway-bg.webp",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Supabase",
      "Motion",
      "Driver.js",
      "Dnd-kit",
    ],
    description: `
The official Reway bookmarking workspace built with intelligent link extraction, real-time sync, and a Chrome extension for instant capture. It ships with keyboard-first navigation, flexible view modes, reduced-motion support, and optimistic updates to keep the UI fast and responsive.

Problem:
- Users needed a unified way to capture, organize, and search bookmarks across devices without browser silos, with smart metadata enrichment and fast keyboard workflows.

Solution:
- Built a centralized bookmarking platform with smart paste-to-bookmark extraction, grouped organization, real-time Supabase sync, and a Chrome MV3 extension for instant page capture and bulk actions.

Architecture:
- Next.js 16 App Router (Turbopack) + React 19 + Tailwind CSS + shadcn/ui, with Supabase (PostgreSQL + Auth + Realtime), Chrome MV3 extension, and optimistic UI patterns for responsive interactions.
`,
    logo: "https://www.reway.page/favicon.ico",
    isExpanded: true,
    status: "live",
    type: "Open Source",
  },
  {
    id: "Devloop",
    slug: "devloop",
    title: "Devloop",
    link: "https://www.devloop.software/",
    github: "",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_%D8%A8%D8%A7%D9%84%D8%AA%D8%B9%D8%A7%D9%88%D9%86-%D9%85%D8%B9-%D8%B5%D8%AF%D9%8A%D9%82%D9%8A-husseini-sobhy-%D9%82%D8%B1%D8%B1%D9%86%D8%A7-%D9%86%D8%A8%D8%AF%D8%A3-activity-7417690607848112128-DvnR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/devloop/devloop.webp",
    background: "/assets/projects/devloop/devloop-bg.webp",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Upstash Redis",
      "GitHub Actions",
      "Resend",
      "next-intl",
      "React Hook Form",
      "Motion",
      "Cloudflare Turnstile",
    ],
    description: `
The official Devloop website built with localized routing for English and Arabic, including full RTL support and server-side translations for SEO. It ships with theme switching, animation components that respect reduced-motion, and lazy-loaded/dynamically imported heavy UI to keep the initial load lean.

Problem:
- Devloop needed a fast, bilingual (English/Arabic) public site with strong SEO, clear sections, and a working contact flow.

Solution:
- Built a localized Next.js website with RTL support, theme switching, performance-focused loading strategies for animations, and a Resend-backed contact form.

Architecture:
- Next.js 16 App Router (Turbopack) + React 19 + Tailwind CSS 4, with next-intl for i18n (en/ar), next-themes for theming, Motion for animations, and Resend for contact email delivery.
`,
    logo: "https://www.devloop.software/favicon.ico",
    isExpanded: true,
    status: "live",
    type: "Agency",
  },
  {
    id: "mosexperiences",
    slug: "mos-experiences",
    title: "Mo's Experiences",
    link: "https://www.mosexperiences.com/en",
    github: "",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_%D9%81%D8%AE%D9%88%D8%B1-%D8%A7%D9%86%D9%8A-%D8%A7%D8%B4%D8%A7%D8%B1%D9%83-%D9%85%D8%B9%D8%A7%D9%83%D9%85-%D8%A3%D9%88%D9%84-%D9%85%D9%88%D9%82%D8%B9-%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84-%D8%A3%D8%B9%D9%85%D9%84%D9%87-activity-7397716704656760832-1UrE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/mos-experiences/mosexperiences.webp",
    background: "/assets/projects/mos-experiences/mos-bg.webp",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Resend",
      "next-intl",
      "React Hook Form",
      "Motion",
      "TanStack Query",
    ],
    description: `
A production-ready travel site that includes destinations, packages, VIP tours, and multiple booking/contact flows with email + WhatsApp integration. It also includes an admin dashboard for CRUD content management and an analytics area tracking engagement and Core Web Vitals (LCP/FID/CLS), plus SEO features like OpenGraph, JSON-LD, sitemap, robots, and hreflang.

Problem:
- A tourism business needed a multi-language website with searchable content, structured packages, and a managed workflow for inquiries and bookings.

Solution:
- Delivered a full-featured site with en/fr routing, content browsing + search, favorites, multiple inquiry forms, and an admin dashboard for managing content and monitoring analytics/Web Vitals/SEO signals.

Architecture:
- Next.js 15.5.5 App Router + TypeScript + Tailwind CSS 4 + shadcn/ui, with Supabase (PostgreSQL + Auth), TanStack Query for server-state, Resend for email, next-themes for theming, and a custom analytics tracking layer.
`,
    logo: "https://www.mosexperiences.com/favicon.ico",
    status: "live",
    type: "Client Work",
  },
  {
    id: "danadoors",
    slug: "dana-doors",
    title: "Dana Doors",
    link: "https://www.danadoors.net/en",
    github: "",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_%D8%A7%D9%84%D8%AD%D9%85%D8%AF-%D9%84%D9%84%D9%87-%D8%B3%D9%84%D9%85%D8%AA-%D8%AA%D8%A7%D9%86%D9%8A-%D9%85%D8%B4%D8%B1%D9%88%D8%B9-freelance-%D9%85%D9%88%D9%82%D8%B9-activity-7400236974671933440-Dczu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/dana-doors/dana-doors.webp",
    background: "/assets/projects/dana-doors/danadoors-bg.webp",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Upstash Redis",
      "Resend",
      "next-intl",
      "React Hook Form",
      "Cloudinary",
    ],
    description: `
A modern website for showcasing aluminum doors, windows, handrails, kitchens, and related products with full English/Arabic localization. Includes a Cloudinary-powered gallery, dark/light themes, and SEO features such as sitemap, structured data, and meta tags.

Problem:
- The business needed a bilingual (RTL-ready) catalog that makes products easy to browse with high-quality imagery and search-friendly pages.

Solution:
- Shipped a responsive EN/AR website with RTL localization, Cloudinary-powered galleries, dark/light themes, and SEO setup including sitemap and structured data.

Architecture:
- Next.js 16 App Router + TypeScript + Tailwind CSS, using Radix UI + shadcn/ui for components, Cloudinary for images/CDN, and Upstash Redis for analytics (visit counter).
`,
    logo: "https://www.danadoors.net/dana-doors-logo.svg",
    status: "live",
    type: "Client Work",
  },
  {
    id: "rootlynotes",
    slug: "rootly-notes",
    title: "Rootly Notes",
    link: "https://rootly-notes-app.vercel.app/",
    github: "https://github.com/mohamed-g-shoaib/rootly-notes-app",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85-%D8%B9%D9%84%D9%8A%D9%83%D9%85-%D8%AD%D8%A7%D8%A8%D8%A8-%D8%A7%D8%B4%D8%A7%D8%B1%D9%83-%D9%85%D8%B9%D8%A7%D9%83%D9%85-%D8%A8%D8%B1%D9%88%D8%AC%D9%83%D8%AA-activity-7363964829461549057-ezWC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/rootly-notes/rootly-notes.webp",
    background: "/assets/projects/rootly-notes/rootly-bg.webp",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Recharts",
    ],
    description: `
Rootly Notes helps track learning progress through courses, Q&A notes (with code snippets), daily study logging (time + mood), and visual analytics across the last 90 days. It supports cloud sync via Supabase or offline-first usage via LocalStorage, and includes a review/quiz mode with session summaries and improvement stats.

Problem:
- Learners needed a structured way to store notes, track progress over time, and review what they studied without losing data (online or offline).

Solution:
- Built a notes + learning tracker with offline and cloud modes, progress dashboards, quiz-based review, and exports to JSON/CSV.

Architecture:
- Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS v4, using Supabase (PostgreSQL + Auth + RLS) for secure per-user data, Recharts for dashboards, and Radix UI/shadcn/ui for accessible components.
`,
    logo: "https://rootly-notes-app.vercel.app/favicon.ico",
    status: "live",
    type: "Open Source",
  },
  {
    id: "nexcn",
    slug: "nexcn-starter",
    title: "Nexcn Starter",
    link: "https://nexcn.vercel.app/en",
    github: "https://github.com/mohamed-g-shoaib/nexcn",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_nextjs-react-typescript-activity-7405713947305226240-p5Bk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/nexcn/nexcn.webp",
    background: "/assets/projects/nexcn/nexcn-bg.webp",
    skills: [
      "TypeScript",
      "Next.js 16",
      "Tailwind CSS",
      "Base UI",
      "next-intl",
      "Vitest",
      "Playwright",
      "ESLint",
      "Prettier",
      "Husky",
    ],
    description: `
A production-ready Next.js 16 starter that ships with modern tooling and best practices out of the box: TypeScript, Tailwind CSS v4, Base UI, shadcn/ui, internationalization, SEO, and a full testing setup. Nexcn can be used as a foundation for SaaS apps, dashboards, marketing sites, or multi-language products.

Problem:
- Spinning up a real-world Next.js project often requires repetitive boilerplate: configuring TypeScript, Tailwind v4, component libraries, i18n, testing, linting, formatting, and deployment.
- Developers lose time wiring up the same stack instead of focusing on product features.

Solution:
- Nexcn provides a batteries-included starter with a clean project structure, opinionated tooling, and sensible defaults.
- It includes DX-friendly scripts for development, testing, linting, formatting, and type-checking, plus documented guides for getting started, styling, i18n, testing, SEO, and RTL support.

Architecture:
- Next.js 16 App Router + React 19 + TypeScript in strict mode, with Tailwind CSS v4, Base UI, shadcn/ui, next-intl for i18n with RTL support, Vitest and Playwright for testing, ESLint/Prettier/Husky for code quality, and SEO-friendly metadata/sitemap/Vercel deployment.
`,
    logo: "https://nexcn.vercel.app/favicon.ico",
    status: "live",
    type: "Open Source",
  },
  {
    id: "marky",
    slug: "marky-editor",
    title: "Marky",
    link: "https://marky-editor.vercel.app/",
    github: "https://github.com/mohamed-g-shoaib/marky-editor",
    post: "https://www.linkedin.com/posts/mohamed-g-shoaib_%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85-%D8%B9%D9%84%D9%8A%D9%83%D9%85-%D9%84%D9%88-%D8%B9%D9%86%D8%AF%D9%83-%D9%86%D9%88%D8%AA%D8%A7%D8%AA-%D9%83%D8%AA%D9%8A%D8%B1-activity-7374204942602911744-tSHR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFBpshwBEQfaP7_ezFl885oMg_0UXZ0vsZM",
    screenshot: "/assets/projects/marky-editor/marky.webp",
    background: "/assets/projects/marky-editor/marky-bg.webp",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Lexical",
      "markmap",
    ],
    description: `
An AI-powered mindmap creator that transforms ideas into beautiful visual mindmaps with real-time editing, rich markdown support, and intelligent content generation. Features include file import/export, auto-save, dark/light themes, and a responsive design with accessibility support.

Problem:
- Users needed an intuitive way to create, edit, and visualize mindmaps without complex software, with support for collaboration and multiple export formats.

Solution:
- Delivered a modern web application with AI-powered content generation, real-time preview, comprehensive file support, and a beautiful UI that works seamlessly across all devices.

Architecture:
- Next.js 15 App Router + TypeScript + Tailwind CSS + shadcn/ui, with Lexical for rich text editing, markmap.js for visualization, custom AI service integration, and local storage for persistent data management.
`,
    logo: "https://marky-editor.vercel.app/marky-logo.png",
    status: "live",
    type: "Open Source",
  },
];
