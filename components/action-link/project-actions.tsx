"use client"

import { ActionLinkSet } from "@/components/action-link/action-link-set"
import { cn } from "@/lib/utils"

export function ProjectActions({
  liveHref,
  layout = "row",
  projectName,
  sourceHref,
}: {
  liveHref: string
  layout?: "row" | "stack"
  projectName: string
  sourceHref: string | null
}): React.ReactElement {
  return (
    <ActionLinkSet
      aria-label={`${projectName} links`}
      className={cn(layout === "stack" && "flex-col items-start gap-1.5")}
      items={[
        {
          href: liveHref,
          kind: "projectLive",
          labelContext: projectName,
        },
        ...(sourceHref
          ? [
              {
                href: sourceHref,
                kind: "projectSource" as const,
                labelContext: projectName,
              },
            ]
          : []),
      ]}
      variant="projectActions"
    />
  )
}
