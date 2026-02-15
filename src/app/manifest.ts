import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: SITE_INFO.name,
    name: SITE_INFO.name,
    description: SITE_INFO.description,
    icons: [
      {
        src: "https://i.ibb.co/7dkp6f7Y/icon-vector.jpg",
        type: "image/jpg",
        sizes: "any",
        purpose: "any",
      },
      {
        src: "https://i.ibb.co/NgM9QtSX/icon-192x192.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "any",
      },
      {
        src: "https://i.ibb.co/gZVmrMrC/icon-512x512.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "any",
      },
      {
        src: "https://i.ibb.co/RqjPDsc/maskable-icon.png",
        type: "image/png",
        sizes: "512x512",
        purpose: "maskable",
      },
    ],
    id: "/?utm_source=pwa",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    scope: "/",
    screenshots: [
      {
        src: "https://i.ibb.co/yFKgbgsk/screenshot-mobile-dark.png",
        type: "image/png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://i.ibb.co/XkMpmgB2/screenshot-mobile-light.png",
        type: "image/png",
        sizes: "440x956",
        form_factor: "narrow",
      },
      {
        src: "https://i.ibb.co/nsW9tXM2/screenshot-desktop-dark.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
      {
        src: "https://i.ibb.co/2YpjRjy6/screenshot-desktop-light.png",
        type: "image/png",
        sizes: "1920x1080",
        form_factor: "wide",
      },
    ],
  };
}
