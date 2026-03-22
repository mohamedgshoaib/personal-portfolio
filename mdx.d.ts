declare module "*.mdx" {
  import type { ComponentType } from "react"

  const MDXContent: ComponentType

  export const metadata: {
    title: string
    description: string
    summary: string
    publishedAt: string
    publishedLabel: string
    image: {
      src: string
      alt: string
    }
  }

  export default MDXContent
}
