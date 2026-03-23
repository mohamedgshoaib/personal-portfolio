import { readFileSync } from "node:fs"
import path from "node:path"
import type { ComponentType } from "react"

import helloWorldPostModule from "@/content/writing/hello-world-what-this-blog-is-about.mdx"
import { metadata as helloWorldPostMetadata } from "@/content/writing/hello-world-what-this-blog-is-about.mdx"

export type WritingPostMetadata = {
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

export type WritingPost = WritingPostMetadata & {
  Component: ComponentType
  markdown: string
  slug: string
}

function quoteYamlString(value: string) {
  return JSON.stringify(value)
}

function createFrontmatter(metadata: WritingPostMetadata) {
  return [
    "---",
    `title: ${quoteYamlString(metadata.title)}`,
    `description: ${quoteYamlString(metadata.description)}`,
    `summary: ${quoteYamlString(metadata.summary)}`,
    `publishedAt: ${quoteYamlString(metadata.publishedAt)}`,
    `publishedLabel: ${quoteYamlString(metadata.publishedLabel)}`,
    "image:",
    `  src: ${quoteYamlString(metadata.image.src)}`,
    `  alt: ${quoteYamlString(metadata.image.alt)}`,
    "---",
  ].join("\n")
}

function stripLeadingMetadataExport(source: string) {
  const trimmed = source.trimStart()

  if (!trimmed.startsWith("export const metadata")) {
    return trimmed.trim()
  }

  const objectStart = trimmed.indexOf("{")

  if (objectStart === -1) {
    return trimmed.trim()
  }

  let depth = 0
  let objectEnd = -1

  for (let index = objectStart; index < trimmed.length; index += 1) {
    const character = trimmed[index]

    if (character === "{") {
      depth += 1
    } else if (character === "}") {
      depth -= 1

      if (depth === 0) {
        objectEnd = index
        break
      }
    }
  }

  if (objectEnd === -1) {
    return trimmed.trim()
  }

  return trimmed.slice(objectEnd + 1).trim()
}

function createMarkdownSource(
  filePath: string,
  metadata: WritingPostMetadata
): string {
  const source = readFileSync(filePath, "utf8")
  const body = stripLeadingMetadataExport(source)

  return `${createFrontmatter(metadata)}\n\n${body}\n`
}

const postModules = [
  {
    slug: "hello-world-what-this-blog-is-about",
    Component: helloWorldPostModule,
    metadata: helloWorldPostMetadata as WritingPostMetadata,
    markdown: createMarkdownSource(
      path.join(
        process.cwd(),
        "content",
        "writing",
        "hello-world-what-this-blog-is-about.mdx"
      ),
      helloWorldPostMetadata as WritingPostMetadata
    ),
  },
]

export const posts: WritingPost[] = postModules
  .map((post) => ({
    slug: post.slug,
    Component: post.Component,
    markdown: post.markdown,
    ...post.metadata,
  }))
  .sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() -
      new Date(left.publishedAt).getTime()
  )

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null
}
