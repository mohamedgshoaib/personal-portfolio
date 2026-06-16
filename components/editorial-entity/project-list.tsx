"use client"

import type * as React from "react"

import { EntityPrimaryLink } from "@/components/editorial-entity/entity-primary-link"
import { HomepageSceneSurface } from "@/components/homepage/homepage-scene"
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
  sceneDelayMs?: number
  source: "home" | "projects"
}

export function ProjectList({
  projects,
  sceneDelayMs,
  source = "projects",
}: {
  projects: readonly ProjectContent[]
  sceneDelayMs?: number
  source?: "home" | "projects"
}): React.ReactElement {
  const projectBackHref = source === "home" ? "/" : "/projects"
  const getSceneDelayMs =
    source === "home" && sceneDelayMs !== undefined
      ? (index: number) =>
          sceneDelayMs + (index === 0 ? 0 : 48 + (index - 1) * 30)
      : undefined

  return (
    <div className="grid sm:grid-cols-2 sm:gap-x-6">
      <EditorialEntityList
        getId={(project) => project.name}
        getSceneDelayMs={getSceneDelayMs}
        itemClassName="h-full cursor-pointer"
        items={projects}
        renderItem={(
          project,
          { "data-id": dataId, className, sceneDelayMs: rowDelayMs },
          index
        ) => (
          <ProjectListRow
            className={className}
            data-id={dataId}
            priority={index < 2}
            project={project}
            projectBackHref={projectBackHref}
            sceneDelayMs={rowDelayMs}
            source={source}
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
  sceneDelayMs,
  source,
  ...surfaceProps
}: ProjectListRowProps): React.ReactElement {
  const content = (
    <>
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
