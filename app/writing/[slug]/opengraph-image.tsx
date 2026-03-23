import { createOgImage, ogImageSize, pngContentType } from "@/lib/brand-image"
import { getPostBySlug } from "@/lib/writing"

type ImageProps = {
  params: Promise<{
    slug: string
  }>
}

export const alt = "Writing post by Mohamed Gamal"
export const size = ogImageSize
export const contentType = pngContentType

export default async function Image({ params }: ImageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return createOgImage({
      eyebrow: "Writing",
      title: "Post not found",
      description:
        "This writing route could not be resolved, but the archive is still available on the portfolio.",
      footer: "Mohamed Gamal",
    })
  }

  return createOgImage({
    eyebrow: "Writing",
    title: post.title,
    description: post.summary,
    footer: post.publishedLabel,
  })
}
