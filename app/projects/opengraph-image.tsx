import { createOgImage, ogImageSize, pngContentType } from "@/lib/brand-image"

export const alt = "Projects by Mohamed Gamal"
export const size = ogImageSize
export const contentType = pngContentType

export default function Image() {
  return createOgImage({
    eyebrow: "Projects",
    title: "Selected frontend work.",
    description:
      "Case studies and shipped products focused on fast systems, SEO-aware implementation, RTL support, and interfaces that stay maintainable as they grow.",
    footer: "Performance, clarity, and strong implementation details",
  })
}
