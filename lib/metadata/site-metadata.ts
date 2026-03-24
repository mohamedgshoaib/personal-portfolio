import type { Metadata } from "next"

import { siteProfile } from "@/lib/content/site-content"

const DEFAULT_SITE_URL = "http://localhost:3000"
const SITE_HANDLE = "@mo0hamed_gamal"
const SOCIAL_IMAGE_VERSION = "2"

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

export function createVersionedSocialImageUrl(path: string) {
  const url = createAbsoluteUrl(path)
  url.searchParams.set("v", SOCIAL_IMAGE_VERSION)

  return url
}

function createRouteSocialImagePath(
  routePath: string,
  imageRoute: "opengraph-image" | "twitter-image"
) {
  if (routePath === "/") {
    return `/${imageRoute}`
  }

  return `${routePath}/${imageRoute}`
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
      images: [
        createVersionedSocialImageUrl(
          createRouteSocialImagePath(path, "opengraph-image")
        ),
      ],
      siteName,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        createVersionedSocialImageUrl(
          createRouteSocialImagePath(path, "twitter-image")
        ),
      ],
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
      images: [
        createVersionedSocialImageUrl(
          createRouteSocialImagePath(path, "opengraph-image")
        ),
      ],
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
      images: [
        createVersionedSocialImageUrl(
          createRouteSocialImagePath(path, "twitter-image")
        ),
      ],
      creator: siteXHandle,
    },
  }
}
