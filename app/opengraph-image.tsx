import { createOgImage, ogImageSize, pngContentType } from "@/lib/brand-image"
import { siteProfile } from "@/lib/site-content"

export const alt = `${siteProfile.name} portfolio`
export const size = ogImageSize
export const contentType = pngContentType

export default async function Image() {
  return createOgImage({
    eyebrow: "Portfolio",
    title: siteProfile.name,
    description: `${siteProfile.role}. Projects, writing, and selected frontend work shaped by performance, clarity, and maintainable systems.`,
    footer: siteProfile.location,
  })
}
