"use client"

import * as React from "react"
import { PreviewCard as BasePreviewCard } from "@base-ui/react/preview-card"

import { cn } from "@/lib/utils"

function PreviewCard({ children }: { children: React.ReactNode }) {
  return <BasePreviewCard.Root>{children}</BasePreviewCard.Root>
}

function PreviewCardTrigger({
  children,
  delay = 180,
  closeDelay = 120,
  ...props
}: React.ComponentProps<typeof BasePreviewCard.Trigger> & {
  children: React.ReactElement
}) {
  return (
    <BasePreviewCard.Trigger
      render={children}
      delay={delay}
      closeDelay={closeDelay}
      {...props}
    />
  )
}

function PreviewCardContent({
  children,
  className,
  side = "right",
  align = "start",
  sideOffset = 16,
}: {
  children: React.ReactNode
  className?: string
  side?: React.ComponentProps<typeof BasePreviewCard.Positioner>["side"]
  align?: React.ComponentProps<typeof BasePreviewCard.Positioner>["align"]
  sideOffset?: React.ComponentProps<
    typeof BasePreviewCard.Positioner
  >["sideOffset"]
}) {
  return (
    <BasePreviewCard.Portal>
      <BasePreviewCard.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
      >
        <BasePreviewCard.Popup
          className={cn(
            "motion-overlay-scale overflow-hidden rounded-2xl bg-transparent",
            className
          )}
          style={{ transformOrigin: "var(--transform-origin)" }}
        >
          {children}
        </BasePreviewCard.Popup>
      </BasePreviewCard.Positioner>
    </BasePreviewCard.Portal>
  )
}

export { PreviewCard, PreviewCardContent, PreviewCardTrigger }
