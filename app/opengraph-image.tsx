import { createOgImage, ogImageSize, pngContentType } from "@/lib/brand-image"
import { siteProfile } from "@/lib/site-content"

export const alt = `${siteProfile.name} portfolio`
export const size = ogImageSize
export const contentType = pngContentType

export default async function Image() {
  return createOgImage({
    eyebrow: "Portfolio",
    title: siteProfile.name,
    description:
      "Frontend developer working with React and Next.js, with close attention to design quality, structure, and implementation.",
    footer: siteProfile.location,
  })
}
