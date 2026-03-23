import type { MetadataRoute } from "next"

import { createAbsoluteUrl, siteUrl } from "@/lib/site-metadata"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: createAbsoluteUrl("/sitemap.xml").toString(),
    host: siteUrl.origin,
  }
}
