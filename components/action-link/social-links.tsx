"use client"

import { ActionLinkSet } from "@/components/action-link/action-link-set"
import type { ActionLinkRecord } from "@/lib/content/content-types"

type SocialLink = Pick<ActionLinkRecord, "href" | "kind" | "label">

export function SocialLinks({
  alignment = "start",
  className,
  links,
}: {
  alignment?: "start" | "end"
  className?: string
  links: readonly SocialLink[]
}): React.ReactElement {
  return (
    <ActionLinkSet
      aria-label="Social links"
      alignment={alignment}
      className={className}
      items={links}
      variant="social"
    />
  )
}
