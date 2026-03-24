import type { MetadataRoute } from "next"

import { createAbsoluteUrl } from "@/lib/metadata/site-metadata"
import { posts } from "@/lib/content/writing"

const buildTimestamp = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: createAbsoluteUrl("/").toString(),
      lastModified: buildTimestamp,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: createAbsoluteUrl("/projects").toString(),
      lastModified: buildTimestamp,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: createAbsoluteUrl("/writing").toString(),
      lastModified: buildTimestamp,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const writingRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: createAbsoluteUrl(`/writing/${post.slug}`).toString(),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...writingRoutes]
}
