import Image from "next/image"
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
      className="pointer-events-none relative"
      inset={surfaceInset}
      interaction={surfaceInteraction}
    >
      <ProjectMediaFrame name={name} priority={priority} src={screenshotSrc} />
      <div className="mt-3 flex min-w-0 items-center justify-between gap-3">
        <h3 className={cn(textStyles.entityTitle, "min-w-0 truncate")}>{name}</h3>
        <div className="pointer-events-auto relative z-10 shrink-0">
          <ProjectActions
            liveHref={liveHref}
            projectName={name}
            sourceHref={sourceHref}
          />
        </div>
      </div>
      <p className={`mt-1 ${textStyles.entityDescription}`}>{summary}</p>
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
    <div
      className="relative aspect-[3/2] overflow-hidden rounded-lg"
    >
      {src ? (
        <Image
          alt={`${name} project screenshot`}
          className="absolute inset-0 object-cover"
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
