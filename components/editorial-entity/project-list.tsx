"use client"

import type * as React from "react"

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
  loading?: "eager" | "lazy"
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
        itemClassName="h-full cursor-default"
        items={projects}
        renderItem={(project, { "data-id": dataId, className }, index) => (
          <ProjectListRow
            className={className}
            data-id={dataId}
            loading={index < 2 ? "eager" : undefined}
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
  loading,
  project,
  projectBackHref,
  ...surfaceProps
}: ProjectListRowProps): React.ReactElement {
  return (
    <div {...surfaceProps} className={cn(surfaceProps.className, "relative")}>
      {children}
      <ProjectCard
        detailHref={project.href}
        liveHref={project.liveHref}
        name={project.name}
        onDetailClick={() => {
          applyNavigationIntent({
            key: navigationIntentKeys.projectDetailBackHref,
            type: "set",
            value: projectBackHref,
          })
        }}
        loading={loading}
        screenshotSrc={project.screenshotSrc}
        sourceHref={project.sourceHref}
        surfaceInset="none"
        surfaceInteraction="none"
        summary={project.summary}
      />
    </div>
  )
}
