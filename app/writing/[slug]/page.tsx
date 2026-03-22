import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { TextLink } from "@/components/home/text-link"
import { getPostBySlug, posts, siteProfile } from "@/lib/site-content"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-3xl flex-col px-6 pt-10 pb-20 sm:px-8 sm:pt-14">
      <div className="space-y-6 border-b border-border/80 pb-8 sm:space-y-7 sm:pb-10">
        <TextLink href="/writing" className="text-muted-foreground">
          Back to writing
        </TextLink>
        <div className="space-y-3">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Writing
          </p>
          <h1 className="max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
            {post.description}
          </p>
          <p className="text-xs text-muted-foreground">
            Last updated on {post.publishedLabel}
          </p>
        </div>
      </div>

      <article className="space-y-8 py-8 sm:space-y-10 sm:py-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[calc(var(--radius)*1.6)] border border-border/70 bg-card shadow-[var(--surface-shadow-md)]">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            sizes="(min-width: 768px) 42rem, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-5 text-[0.98rem] leading-8 text-foreground/88">
          {post.content.map((block, index) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.content}</p>
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="pt-3 font-heading text-xl font-medium text-foreground sm:text-2xl"
                >
                  {block.content}
                </h2>
              )
            }

            if (block.type === "list") {
              return (
                <ol
                  key={index}
                  className="space-y-3 pl-5 text-foreground/88 marker:text-muted-foreground"
                >
                  {block.items.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ol>
              )
            }

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[calc(var(--radius)*1.4)] border border-border/80 bg-card shadow-[var(--surface-shadow-sm)]"
              >
                <div className="border-b border-border/70 px-4 py-3 text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  {block.language}
                </div>
                <pre className="overflow-x-auto p-4 text-sm leading-7 text-foreground/90">
                  <code>{block.code}</code>
                </pre>
              </div>
            )
          })}
        </div>
      </article>

      <footer className="mt-auto border-t border-border/80 pt-8 text-sm text-muted-foreground">
        <p>
          Written by {siteProfile.name}. You can also find me on{" "}
          <Link
            href="https://github.com/mohamed-g-shoaib"
            className="text-foreground decoration-border underline-offset-4 hover:underline"
          >
            GitHub
          </Link>{" "}
          and{" "}
          <Link
            href="https://x.com/mo0hamed_gamal"
            className="text-foreground decoration-border underline-offset-4 hover:underline"
          >
            X
          </Link>
          .
        </p>
      </footer>
    </main>
  )
}
