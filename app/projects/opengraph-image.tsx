import { createOgImage, ogImageSize, pngContentType } from "@/lib/brand-image"

export const alt = "Projects by Mohamed Gamal"
export const size = ogImageSize
export const contentType = pngContentType

export default async function Image() {
  return createOgImage({
    eyebrow: "Projects",
    title: "Selected frontend work.",
    description:
      "Product websites and interface systems built with an emphasis on structure, visual clarity, and careful execution.",
    footer: "React, Next.js, and frontend systems",
  })
}
