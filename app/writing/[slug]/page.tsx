import Image from "next/image"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CopyMarkdownButton } from "@/components/writing/copy-markdown-button"
import { PostHeaderLinks } from "@/components/writing/post-header-links"
import { createArticleMetadata } from "@/lib/site-metadata"
import { siteProfile } from "@/lib/site-content"
import { getPostBySlug, posts } from "@/lib/writing"

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

  return createArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/writing/${post.slug}`,
    publishedTime: post.publishedAt,
  })
}

export default async function WritingPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const PostContent = post.Component

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="space-y-12 sm:space-y-16">
        <header className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <PostHeaderLinks />
            <CopyMarkdownButton markdown={post.markdown} />
          </div>
          <div className="max-w-[33rem] space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {post.publishedLabel}
              </p>
              <h1 className="max-w-[28rem] font-heading text-2xl font-medium tracking-tight text-foreground sm:text-[2rem]">
                {post.title}
              </h1>
            </div>
            <p className="text-[0.96rem] leading-8 text-muted-foreground">
              {post.description}
            </p>
            <figure className="overflow-hidden rounded-[1.1rem] border border-border/70">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  fill
                  sizes="(min-width: 768px) 33rem, calc(100vw - 3rem)"
                  priority
                  className="object-cover shadow-none!"
                />
              </div>
            </figure>
          </div>
        </header>

        <article className="max-w-[33rem] space-y-5 text-[0.96rem] leading-8 text-muted-foreground">
          <PostContent />
        </article>
      </div>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        <p className="max-w-[33rem]">
          Written by {siteProfile.name}. You can also find me on{" "}
          <a
            href="https://github.com/mohamed-g-shoaib"
            className="text-link"
            rel="noreferrer noopener"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://x.com/mo0hamed_gamal"
            className="text-link"
            rel="noreferrer noopener"
            target="_blank"
          >
            X
          </a>
          .
        </p>
      </footer>
    </main>
  )
}
