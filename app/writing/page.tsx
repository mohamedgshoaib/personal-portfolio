import { TextLink } from "@/components/home/text-link"
import { JsonLd } from "@/components/seo/json-ld"
import { posts } from "@/lib/content/writing"
import { createWritingPageSchema } from "@/lib/metadata/schema"
import { createPageMetadata } from "@/lib/metadata/site-metadata"

export const metadata = createPageMetadata({
  title: "Writing",
  description:
    "Writing on frontend engineering, interface decisions, modern web architecture, and the details that make products hold together.",
  path: "/writing",
})

export default function WritingPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <JsonLd data={createWritingPageSchema(posts)} />
      <div className="space-y-12 sm:space-y-16">
        <header className="space-y-5">
          <p className="text-sm font-medium text-foreground">Writing</p>
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            <p>
              Notes on frontend engineering, interface design, architecture,
              performance, and the decisions that usually sit behind the final
              surface.
            </p>
            <p>
              A place to make the thinking visible: what worked, what changed,
              and what was worth doing carefully.
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
    </main>
  )
}
