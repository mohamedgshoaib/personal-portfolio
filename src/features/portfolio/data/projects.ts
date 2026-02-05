import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "Devloop",
    title: "Devloop",
    period: {
      start: "10.2025",
    },
    link: "https://www.devloop.software/",
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
      "Framer Motion",
      "Cloudflare Turnstile",
    ],
    description: `
The official Devloop website built with localized routing for English and Arabic, including full RTL support and server-side translations for SEO. It ships with theme switching, animation components that respect reduced-motion, and lazy-loaded/dynamically imported heavy UI to keep the initial load lean.

Problem:
- Devloop needed a fast, bilingual (English/Arabic) public site with strong SEO, clear sections, and a working contact flow.

Solution:
- Built a localized Next.js website with RTL support, theme switching, performance-focused loading strategies for animations, and a Resend-backed contact form.

Architecture:
- Next.js 16 App Router (Turbopack) + React 19 + Tailwind CSS 4, with next-intl for i18n (en/ar), next-themes for theming, Framer Motion for animations, and Resend for contact email delivery.
`,
    logo: "https://www.devloop.software/favicon.ico",
    isExpanded: true,
  },
  {
    id: "mosexperiences",
    title: "Mo's Experiences",
    period: {
      start: "08.2025",
    },
    link: "https://www.mosexperiences.com/en",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Resend",
      "next-intl",
      "React Hook Form",
      "Framer Motion",
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
  },
  {
    id: "danadoors",
    title: "Dana Doors",
    period: {
      start: "09.2025",
    },
    link: "https://www.danadoors.net/en",
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
  },
  {
    id: "rootlynotes",
    title: "Rootly Notes",
    period: {
      start: "06.2025",
    },
    link: "https://rootly-notes-app.vercel.app/",
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
  },
];
