"use client"

import type * as React from "react"

import { EntityPrimaryLink } from "@/components/editorial-entity/entity-primary-link"
import { EditorialEntityList } from "@/components/editorial-entity/editorial-entity-list"
import { ProjectCard } from "@/components/editorial-entity/project-card"
import type { ProjectContent } from "@/lib/content/content-types"
import { cn } from "@/lib/utils"
import {
  applyNavigationIntent,
  navigationIntentKeys,
} from "@/lib/navigation/navigation-intent"

type ProjectListRowProps = React.ComponentPropsWithoutRef<"div"> & {
  "data-id": string
  children?: React.ReactNode
  priority?: boolean
  project: ProjectContent
  projectBackHref: string
}

export function ProjectList({
  projects,
  source = "projects",
}: {
  projects: readonly ProjectContent[]
  source?: "home" | "projects"
}): React.ReactElement {
  const projectBackHref = source === "home" ? "/" : "/projects"

  return (
    <div className="grid sm:grid-cols-2 sm:gap-x-6">
      <EditorialEntityList
        getId={(project) => project.name}
        itemClassName="h-full cursor-pointer"
        items={projects}
        renderItem={(
          project,
          { "data-id": dataId, className }
        ) => (
          <ProjectListRow
            className={className}
            data-id={dataId}
            priority={false}
            project={project}
            projectBackHref={projectBackHref}
          />
        )}
        siblingDimming
        surfaceInset="card"
        surfaceInteraction="none"
      />
    </div>
  )
}

function ProjectListRow({
  children,
  priority,
  project,
  projectBackHref,
  ...surfaceProps
}: ProjectListRowProps): React.ReactElement {
  return (
    <div {...surfaceProps} className={cn(surfaceProps.className, "relative")}>
      {children}
      <EntityPrimaryLink
        ariaLabel={`Open details for ${project.name}`}
        href={project.href}
        onClick={() => {
          applyNavigationIntent({
            key: navigationIntentKeys.projectDetailBackHref,
            type: "set",
            value: projectBackHref,
          })
        }}
      />
      <ProjectCard
        liveHref={project.liveHref}
        name={project.name}
        priority={priority}
        screenshotSrc={project.screenshotSrc}
        sourceHref={project.sourceHref}
        surfaceInset="none"
        surfaceInteraction="none"
        summary={project.summary}
      />
    </div>
  )
}
