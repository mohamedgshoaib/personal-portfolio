import type { Metadata } from "next"

import type { DiscoveryRoute } from "@/lib/content/content-types"
import {
  getDiscoveryRouteByHref,
  getProjectDiscoveryRouteBySlug,
  getWritingDiscoveryRouteBySlug,
} from "@/lib/content/content-discovery"
import { siteConfig } from "@/lib/metadata/site-config"
import { getCanonicalUrl } from "@/lib/metadata/url"

type RouteMetadataInput = Pick<
  DiscoveryRoute,
  "description" | "href" | "kind" | "title"
>

function formatRouteTitle(route: RouteMetadataInput): string {
  return route.kind === "home"
    ? route.title
    : `${route.title} | ${siteConfig.name}`
}

function getOpenGraphType(route: RouteMetadataInput): "article" | "website" {
  return route.kind === "writingDetail" ? "article" : "website"
}

function createRouteMetadata(route: RouteMetadataInput): Metadata {
  const title = formatRouteTitle(route)
  const canonicalUrl = getCanonicalUrl(route.href)

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title,
    description: route.description,
    alternates: {
      canonical: canonicalUrl,
    },
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    openGraph: {
      title,
      description: route.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      type: getOpenGraphType(route),
      url: canonicalUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: route.description,
      creator: siteConfig.twitterHandle,
      images: ["/opengraph-image"],
    },
  }
}

export function getRouteMetadata(href: string): Metadata {
  const route = getDiscoveryRouteByHref(href)

  if (!route) {
    return {}
  }

  return createRouteMetadata(route)
}

export function getProjectRouteMetadata(slug: string): Metadata {
  const route = getProjectDiscoveryRouteBySlug(slug)

  if (!route) {
    return {}
  }

  const base = createRouteMetadata(route)
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: "/projects/opengraph-image", width: 1200, height: 630, alt: base.openGraph?.title as string }] },
    twitter: { ...base.twitter, images: ["/projects/opengraph-image"] },
  }
}

export function getWritingRouteMetadata(slug: string): Metadata {
  const route = getWritingDiscoveryRouteBySlug(slug)

  if (!route) {
    return {}
  }

  const base = createRouteMetadata(route)
  return {
    ...base,
    openGraph: { ...base.openGraph, images: [{ url: "/writing/opengraph-image", width: 1200, height: 630, alt: base.openGraph?.title as string }] },
    twitter: { ...base.twitter, images: ["/writing/opengraph-image"] },
  }
}
