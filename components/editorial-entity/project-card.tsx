import { SkeletonImage } from "@/components/ui/skeleton-image"
import type { VariantProps } from "class-variance-authority"
import type * as React from "react"

import { ProjectActions } from "@/components/action-link/project-actions"
import { EntitySurface } from "@/components/editorial-entity/entity-surface"
import { entitySurfaceVariants } from "@/components/editorial-entity/entity-surface-variants"
import { textStyles } from "@/lib/design/text-styles"
import { cn } from "@/lib/utils"

export type ProjectCardProps = {
  liveHref: string
  name: string
  priority?: boolean
  screenshotSrc?: string
  sourceHref: string | null
  surfaceInset?: VariantProps<typeof entitySurfaceVariants>["inset"]
  surfaceInteraction?: VariantProps<typeof entitySurfaceVariants>["interaction"]
  summary: string
}

export function ProjectCard({
  liveHref,
  name,
  priority,
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
      <ProjectMediaFrame name={name} priority={priority} src={screenshotSrc} />
      <h3 className={cn(textStyles.entityTitle, "mt-3")}>{name}</h3>
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
  name,
  priority,
  src,
}: {
  name: string
  priority?: boolean
  src?: string
}): React.ReactElement {
  return (
    <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
      {src ? (
        <SkeletonImage
          alt={`${name} project screenshot`}
          className="object-cover"
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 50vw"
          src={src}
        />
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}
    </div>
  )
}
