import type { Metadata } from "next"

import { siteProfile } from "@/lib/content/site-content"

const DEFAULT_SITE_URL = "http://localhost:3000"
const SITE_HANDLE = "@mo0hamed_gamal"

function normalizeSiteUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value
  }

  return `https://${value}`
}

function resolveSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL

  return new URL(normalizeSiteUrl(candidate ?? DEFAULT_SITE_URL))
}

export const siteUrl = resolveSiteUrl()
export const siteName = siteProfile.name
export const siteDescription =
  "Frontend developer working with React and Next.js, with a focus on clean design, strong planning, and careful implementation."
export const siteKeywords = [
  "Mohamed Gamal",
  "Frontend Developer",
  "Frontend Engineer",
  "Next.js",
  "React",
  "TypeScript",
  "Web interfaces",
  "Design systems",
  "Performance",
  "Web development",
] as const
export const siteXHandle = SITE_HANDLE

export function createAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl)
}

type CreatePageMetadataOptions = {
  title: string
  description: string
  path: string
}

export function createPageMetadata({
  title,
  description,
  path,
}: CreatePageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: createAbsoluteUrl(path),
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteXHandle,
    },
  }
}

type CreateArticleMetadataOptions = {
  title: string
  description: string
  path: string
  publishedTime?: string
}

export function createArticleMetadata({
  title,
  description,
  path,
  publishedTime,
}: CreateArticleMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: createAbsoluteUrl(path),
      siteName,
      locale: "en_US",
      type: "article",
      authors: [siteName],
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteXHandle,
    },
  }
}
