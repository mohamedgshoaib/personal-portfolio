import Link from "next/link"

import { SkeletonImage } from "@/components/ui/skeleton-image"
import type { VariantProps } from "class-variance-authority"
import type * as React from "react"

import { ProjectActions } from "@/components/action-link/project-actions"
import { EntitySurface } from "@/components/editorial-entity/entity-surface"
import { entitySurfaceVariants } from "@/components/editorial-entity/entity-surface-variants"
import { textStyles } from "@/lib/design/text-styles"
import { cn } from "@/lib/utils"

export type ProjectCardProps = {
  detailHref: string
  liveHref: string
  loading?: "eager" | "lazy"
  name: string
  onDetailClick?: React.MouseEventHandler<HTMLAnchorElement>
  screenshotSrc?: string
  sourceHref: string | null
  surfaceInset?: VariantProps<typeof entitySurfaceVariants>["inset"]
  surfaceInteraction?: VariantProps<typeof entitySurfaceVariants>["interaction"]
  summary: string
}

export function ProjectCard({
  detailHref,
  liveHref,
  loading,
  name,
  onDetailClick,
  screenshotSrc,
  sourceHref,
  surfaceInset = "card",
  surfaceInteraction = "withinFocus",
  summary,
}: ProjectCardProps): React.ReactElement {
  return (
    <EntitySurface
      as="article"
      className="pointer-events-none relative flex h-full flex-col"
      inset={surfaceInset}
      interaction={surfaceInteraction}
    >
      <Link
        className="group/project-detail pointer-events-auto block touch-manipulation rounded-lg focus-visible:outline-offset-2"
        href={detailHref}
        onClick={onDetailClick}
      >
        <ProjectMediaFrame loading={loading} src={screenshotSrc} />
        <h3
          className={cn(
            textStyles.entityTitle,
            "mt-3 group-hover/project-detail:underline group-hover/project-detail:underline-offset-4 group-focus-visible/project-detail:underline no-hover:underline"
          )}
        >
          {name}
        </h3>
      </Link>
      <p className={cn(textStyles.entityDescription, "mt-1.5")}>{summary}</p>
      <div className="pointer-events-auto relative z-10 mt-auto pt-3">
        <ProjectActions
          liveHref={liveHref}
          projectName={name}
          sourceHref={sourceHref}
        />
      </div>
    </EntitySurface>
  )
}

function ProjectMediaFrame({
  loading,
  src,
}: {
  loading?: "eager" | "lazy"
  src?: string
}): React.ReactElement {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
      {src ? (
        <SkeletonImage
          alt=""
          className="object-cover"
          fill
          loading={loading}
          sizes="(max-width: 640px) 100vw, 50vw"
          src={src}
        />
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}
    </div>
  )
}
