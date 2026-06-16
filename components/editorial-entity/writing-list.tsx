"use client"

import type * as React from "react"

import { EditorialEntityList } from "@/components/editorial-entity/editorial-entity-list"
import { EntityPrimaryLink } from "@/components/editorial-entity/entity-primary-link"
import { EntityList } from "@/components/editorial-entity/entity-list"
import { HomepageSceneSurface } from "@/components/homepage/homepage-scene"
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
  source: "home" | "writing"
  sceneDelayMs?: number
  writingBackHref: string
}

export function WritingList({
  posts,
  sceneDelayMs,
  source = "writing",
}: {
  posts: readonly WritingContent[]
  sceneDelayMs?: number
  source?: "home" | "writing"
}): React.ReactElement {
  const writingBackHref = source === "home" ? "/" : "/writing"
  const getSceneDelayMs =
    source === "home" && sceneDelayMs !== undefined
      ? (index: number) =>
          sceneDelayMs + (index === 0 ? 0 : 48 + (index - 1) * 30)
      : undefined

  return (
    <EntityList className="space-y-0">
      <EditorialEntityList
        getId={(post) => post.title}
        getSceneDelayMs={getSceneDelayMs}
        items={posts}
        renderItem={(
          post,
          { "data-id": dataId, className, sceneDelayMs: rowDelayMs }
        ) => (
          <WritingListRow
            className={className}
            data-id={dataId}
            post={post}
            sceneDelayMs={rowDelayMs}
            source={source}
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
  sceneDelayMs,
  source,
  writingBackHref,
  ...surfaceProps
}: WritingListRowProps): React.ReactElement {
  const content = (
    <>
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
    </>
  )

  if (source === "home") {
    return (
      <HomepageSceneSurface
        {...surfaceProps}
        className={cn(surfaceProps.className, "relative")}
        delayMs={sceneDelayMs}
      >
        {children}
        {content}
      </HomepageSceneSurface>
    )
  }

  return (
    <div {...surfaceProps} className={cn(surfaceProps.className, "relative")}>
      {children}
      {content}
    </div>
  )
}
