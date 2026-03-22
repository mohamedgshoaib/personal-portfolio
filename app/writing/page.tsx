import type { Metadata } from "next"

import { TextLink } from "@/components/home/text-link"
import { posts, siteProfile } from "@/lib/site-content"

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on React, Next.js, frontend architecture, accessibility, and building for the web.",
}

export default function WritingPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="space-y-12 sm:space-y-16">
        <header className="space-y-5">
          <p className="text-sm font-medium text-foreground">Writing</p>
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            <p>
              Notes on React, Next.js, frontend architecture, accessibility,
              performance, and the small decisions that make interfaces feel
              clearer.
            </p>
            <p>
              A place to write things down, explain what I&apos;m learning, and
              keep a public record of what is actually working.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="max-w-[33rem] space-y-1.5">
              <p className="text-sm text-muted-foreground">
                {post.publishedLabel}
              </p>
              <h2 className="font-heading text-lg font-medium text-foreground">
                <TextLink href={`/writing/${post.slug}`} className="text-base">
                  {post.title}
                </TextLink>
              </h2>
              <p className="text-[0.96rem] leading-8 text-muted-foreground">
                {post.summary}
              </p>
            </article>
          ))}
        </section>
      </div>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        <p>
          Writing by {siteProfile.name}. Based in {siteProfile.location}.
        </p>
      </footer>
    </main>
  )
}
