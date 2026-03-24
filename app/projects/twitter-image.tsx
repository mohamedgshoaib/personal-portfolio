import {
  createOgImage,
  ogImageSize,
  pngContentType,
} from "@/lib/metadata/brand-image"

export const alt = "Projects by Mohamed Gamal"
export const size = ogImageSize
export const contentType = pngContentType

export default async function Image() {
  return createOgImage({
    eyebrow: "Projects",
    title: "Selected frontend work",
    description:
      "Client work and personal systems shaped by structure, interface quality, and careful implementation.",
    footer: "Mohamed Gamal",
  })
}
