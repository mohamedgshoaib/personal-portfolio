import type { Metadata } from "next"
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
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="space-y-12 sm:space-y-16">
        <header className="space-y-5">
          <TextLink href="/writing" className="text-muted-foreground">
            Writing
          </TextLink>
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
          </div>
        </header>

        <article className="max-w-[33rem] space-y-5 text-[0.96rem] leading-8 text-muted-foreground">
          {post.content.map((block) => {
            if (block.type === "paragraph") {
              return <p key={block.id}>{block.content}</p>
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={block.id}
                  className="pt-4 font-heading text-lg font-medium text-foreground"
                >
                  {block.content}
                </h2>
              )
            }

            if (block.type === "list") {
              const ListTag = block.ordered ? "ol" : "ul"

              return (
                <ListTag
                  key={block.id}
                  className={
                    block.ordered
                      ? "space-y-3 pl-5 marker:text-muted-foreground"
                      : "list-disc space-y-3 pl-5 marker:text-muted-foreground"
                  }
                >
                  {block.items.map((item) => (
                    <li key={item.id} className="pl-1">
                      {item.content}
                    </li>
                  ))}
                </ListTag>
              )
            }

            return (
              <div
                key={block.id}
                className="overflow-hidden rounded-[1rem] border border-border/80 bg-muted/30"
              >
                <div className="border-b border-border/70 px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  {block.language}
                </div>
                <pre className="overflow-x-auto px-4 py-4 text-sm leading-7 text-foreground">
                  <code>{block.code}</code>
                </pre>
              </div>
            )
          })}
        </article>
      </div>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        <p className="max-w-[33rem]">
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
