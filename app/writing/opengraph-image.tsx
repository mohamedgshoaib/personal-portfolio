import { createOgImage, ogImageSize, pngContentType } from "@/lib/brand-image"

export const alt = "Writing by Mohamed Gamal"
export const size = ogImageSize
export const contentType = pngContentType

export default function Image() {
  return createOgImage({
    eyebrow: "Writing",
    title: "Notes on building for the web.",
    description:
      "Writing on React, Next.js, frontend architecture, accessibility, performance, and the small decisions that make interfaces feel clearer.",
    footer: "Essays, notes, and implementation details",
  })
}
