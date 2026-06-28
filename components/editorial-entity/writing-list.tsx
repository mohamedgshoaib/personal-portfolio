"use client"

import type * as React from "react"

import { EditorialEntityList } from "@/components/editorial-entity/editorial-entity-list"
import { EntityPrimaryLink } from "@/components/editorial-entity/entity-primary-link"
import { EntityList } from "@/components/editorial-entity/entity-list"
import { textStyles } from "@/lib/design/text-styles"
import type { WritingContent } from "@/lib/content/content-types"
import { cn } from "@/lib/utils"
import {
  applyNavigationIntent,
  navigationIntentKeys,
} from "@/lib/navigation/navigation-intent"

type WritingListRowProps = React.ComponentPropsWithoutRef<"div"> & {
  "data-id": string
  children?: React.ReactNode
  post: WritingContent
  writingBackHref: string
}

export function WritingList({
  posts,
  source = "writing",
}: {
  posts: readonly WritingContent[]
  source?: "home" | "writing"
}): React.ReactElement {
  const writingBackHref = source === "home" ? "/" : "/writing"

  return (
    <EntityList className="space-y-0">
      <EditorialEntityList
        getId={(post) => post.title}
        items={posts}
        renderItem={(post, { "data-id": dataId, className }) => (
          <WritingListRow
            className={className}
            data-id={dataId}
            post={post}
            writingBackHref={writingBackHref}
          />
        )}
        siblingDimming
      />
    </EntityList>
  )
}

function WritingListRow({
  children,
  post,
  writingBackHref,
  ...surfaceProps
}: WritingListRowProps): React.ReactElement {
  return (
    <div {...surfaceProps} className={cn(surfaceProps.className, "relative")}>
      {children}
      <EntityPrimaryLink
        ariaLabel={`Open writing post ${post.title}`}
        href={post.href}
        onClick={() => {
          applyNavigationIntent({
            key: navigationIntentKeys.writingDetailBackHref,
            type: "set",
            value: writingBackHref,
          })
        }}
      />
      <div className="pointer-events-none relative min-w-0 py-1">
        <h3 className={textStyles.entityTitle}>{post.title}</h3>
        <p className={`mt-1 line-clamp-2 ${textStyles.entityDescription}`}>
          {post.excerpt}
        </p>
      </div>
    </div>
  )
}
