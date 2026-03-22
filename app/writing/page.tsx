import type { Metadata } from "next"
import Image from "next/image"

import { Section } from "@/components/home/section"
import { TextLink } from "@/components/home/text-link"
import { posts, siteProfile } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on React, Next.js, frontend architecture, accessibility, and building for the web.",
}

export default function WritingPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-4xl flex-col px-6 pt-12 pb-20 sm:px-8 sm:pt-16">
      <div className="space-y-4 border-b border-border/80 pb-8 sm:space-y-5 sm:pb-10">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Writing
        </p>
        <h1 className="max-w-2xl font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Notes on building clear, durable frontend systems.
        </h1>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
          This is where I write about what I&apos;m learning, building, and
          refining across React, Next.js, accessibility, performance, and
          frontend architecture.
        </p>
      </div>

      <Section
        eyebrow="Posts"
        contentClassName="space-y-6"
        className="border-t-0 pt-8 sm:pt-10"
      >
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group grid gap-4 rounded-[calc(var(--radius)*1.2)] border border-border/70 bg-card/60 p-4 shadow-[var(--surface-shadow-sm)] transition-[border-color,background-color,transform] duration-150 ease-[var(--ease-out)] hover:border-foreground/12 hover:bg-card sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-5 sm:p-5"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius)*0.9)] border border-border/70 bg-muted/60">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                sizes="(min-width: 640px) 8rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 space-y-3">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  {post.publishedLabel}
                </p>
                <h2 className="font-heading text-lg font-medium text-foreground">
                  {post.title}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                {post.summary}
              </p>
              <TextLink href={`/writing/${post.slug}`}>Read post</TextLink>
            </div>
          </article>
        ))}
      </Section>

      <footer className="mt-auto border-t border-border/80 pt-8 text-sm text-muted-foreground">
        <p>
          Writing by {siteProfile.name}. Based in {siteProfile.location}.
        </p>
      </footer>
    </main>
  )
}
