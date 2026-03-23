import type { MetadataRoute } from "next"

import { siteDescription, siteName } from "@/lib/site-metadata"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Mohamed",
    description: siteDescription,
    start_url: "/",
    display: "browser",
    background_color: "#f7f5f1",
    theme_color: "#f7f5f1",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
