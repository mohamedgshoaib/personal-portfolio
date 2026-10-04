import type * as React from "react"

import { articleMDXComponents } from "@/components/article/article-mdx-components"
import { ArticleDetailChrome } from "@/components/article/article-detail-chrome"
import { PageActions } from "@/components/article/page-actions"
import { getMDXComponents } from "@/mdx-components"
import type { WritingMdxDocument } from "@/lib/content/writing-pages"
import { navigationIntentKeys } from "@/lib/navigation/navigation-intent"

type WritingDetailPageProps = {
  markdown?: string
  post: WritingMdxDocument
}

const writingDetailMDXComponents = getMDXComponents(articleMDXComponents)
const publishedDateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
  year: "numeric",
})

function formatPublishedDate(date: string): string {
  return publishedDateFormatter.format(new Date(`${date}T00:00:00.000Z`))
}

export function WritingDetailPage({
  markdown,
  post,
}: WritingDetailPageProps): React.ReactElement {
  const MDXContent = post.body
  const visibleDate = post.updatedAt ?? post.publishedAt
  const dateLabel =
    post.updatedAt && post.updatedAt !== post.publishedAt
      ? "Updated"
      : "Published"

  return (
    <ArticleDetailChrome
      backLink={{
        defaultHref: "/writing",
        intentKey: navigationIntentKeys.writingDetailBackHref,
      }}
      description={post.description}
      title={post.title}
      titleActions={<PageActions markdown={markdown} />}
      titleMeta={
        <>
          {dateLabel}{" "}
          <time dateTime={visibleDate}>{formatPublishedDate(visibleDate)}</time>
          <span aria-hidden="true"> · </span>
          {post.readingTime}
        </>
      }
      toc={post.toc}
      tocLabel="Writing sections"
    >
      <MDXContent components={writingDetailMDXComponents} />
    </ArticleDetailChrome>
  )
}
