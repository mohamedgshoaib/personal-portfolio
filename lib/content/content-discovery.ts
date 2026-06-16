import type {
  DiscoveryRoute,
  HomepageContent,
} from "@/lib/content/content-types"
import { siteIdentity, socialLinks } from "@/lib/content/identity"
import { getProjectPages } from "@/lib/content/project-pages"
import { projects } from "@/lib/content/projects"
import {
  getFeaturedWritingSummaries,
  getWritingPages,
} from "@/lib/content/writing-pages"

const homepageCopy = {
  about:
    "I build frontend systems with React and Next.js, with close attention to structure, interface quality, and execution.\n\nMy work sits at the intersection of engineering and design: strong planning, clean visual decisions, and implementation that stays careful all the way through. I care about products that feel considered, not improvised.\n\nBased in Cairo, Egypt.",
  approach:
    "I work mostly with React and Next.js. I use React with Vite for focused client-side products, and Next.js when the product needs a stronger foundation for routing, content, SEO, or backend work, usually with Supabase and Postgres.\n\nFor UI, I usually reach for shadcn/ui or coss ui. I prefer Base UI when I want control over the primitives, and Radix UI when the ecosystem fit is better.",
}

const rootDiscoveryRoutes = [
  {
    kind: "home",
    href: "/",
    title: `${siteIdentity.name} | Frontend Engineer`,
    description:
      "Frontend engineer based in Cairo, Egypt. I build React and Next.js products with close attention to interface quality, architecture, and performance.",
  },
  {
    kind: "projects",
    href: "/projects",
    title: "Projects",
    description:
      "Selected frontend projects by Mohamed Gamal: React and Next.js products built with Supabase, TypeScript, and Tailwind CSS, focused on interface craft and scalable systems.",
  },
  {
    kind: "writing",
    href: "/writing",
    title: "Writing",
    description:
      "Frontend engineering notes by Mohamed Gamal on React patterns, Next.js architecture, interface design decisions, and the implementation details that change how a product feels.",
  },
] satisfies readonly DiscoveryRoute[]

const projectDetailDiscoveryRoutes = getProjectPages().map((project) => ({
  kind: "projectDetail",
  href: `/projects/${project.slug}`,
  title: project.title,
  description: project.description,
  publishedAt: project.publishedAt,
  slug: project.slug,
})) satisfies readonly DiscoveryRoute[]

const writingDetailDiscoveryRoutes = getWritingPages().map((post) => ({
  kind: "writingDetail",
  href: `/writing/${post.slug}`,
  title: post.title,
  description: post.description,
  publishedAt: post.publishedAt,
  slug: post.slug,
})) satisfies readonly DiscoveryRoute[]

const discoveryRoutes = [
  ...rootDiscoveryRoutes,
  ...projectDetailDiscoveryRoutes,
  ...writingDetailDiscoveryRoutes,
] satisfies readonly DiscoveryRoute[]

function getHomepageContent(): HomepageContent {
  return {
    ...homepageCopy,
    identity: siteIdentity,
    projects: projects.slice(0, 4),
    socialLinks,
    writing: getFeaturedWritingSummaries(2),
  }
}

export function getDiscoveryRoutes(): readonly DiscoveryRoute[] {
  return discoveryRoutes
}

export function getProjectDiscoveryRoutes(): readonly DiscoveryRoute[] {
  return projectDetailDiscoveryRoutes
}

export function getWritingDiscoveryRoutes(): readonly DiscoveryRoute[] {
  return writingDetailDiscoveryRoutes
}

export function getDiscoveryRouteByHref(
  href: string,
): DiscoveryRoute | undefined {
  return discoveryRoutes.find((route) => route.href === href)
}

export function getProjectDiscoveryRouteBySlug(
  slug: string,
): DiscoveryRoute | undefined {
  return projectDetailDiscoveryRoutes.find((route) => route.slug === slug)
}

export function getWritingDiscoveryRouteBySlug(
  slug: string,
): DiscoveryRoute | undefined {
  return writingDetailDiscoveryRoutes.find((route) => route.slug === slug)
}

export const homepageContent = getHomepageContent()
