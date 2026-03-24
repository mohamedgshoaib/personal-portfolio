import {
  createOgImage,
  ogImageSize,
  pngContentType,
} from "@/lib/metadata/brand-image"

export const alt = "Writing by Mohamed Gamal"
export const size = ogImageSize
export const contentType = pngContentType

export default async function Image() {
  return createOgImage({
    eyebrow: "Writing",
    title: "Notes on frontend engineering",
    description:
      "Writing on frontend engineering, interface decisions, architecture, and the details behind the final surface.",
    footer: "Mohamed Gamal",
  })
}
