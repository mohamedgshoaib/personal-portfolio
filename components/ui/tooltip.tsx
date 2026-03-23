"use client"

import * as React from "react"
import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  children,
  delay = 550,
  closeDelay = 0,
  timeout = 400,
}: React.ComponentProps<typeof BaseTooltip.Provider>) {
  return (
    <BaseTooltip.Provider
      delay={delay}
      closeDelay={closeDelay}
      timeout={timeout}
    >
      {children}
    </BaseTooltip.Provider>
  )
}

function Tooltip({
  children,
  disabled,
  handle,
}: {
  children: React.ReactNode
  disabled?: boolean
  handle?: React.ComponentProps<typeof BaseTooltip.Root>["handle"]
}) {
  return (
    <BaseTooltip.Root disabled={disabled} handle={handle}>
      {children}
    </BaseTooltip.Root>
  )
}

function TooltipTrigger({
  children,
  ...props
}: React.ComponentProps<typeof BaseTooltip.Trigger> & {
  children: React.ReactElement
}) {
  return <BaseTooltip.Trigger render={children} {...props} />
}

function TooltipContent({
  children,
  className,
  side = "top",
  sideOffset = 12,
}: {
  children: React.ReactNode
  className?: string
  side?: React.ComponentProps<typeof BaseTooltip.Positioner>["side"]
  sideOffset?: React.ComponentProps<typeof BaseTooltip.Positioner>["sideOffset"]
}) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner side={side} sideOffset={sideOffset}>
        <BaseTooltip.Popup
          data-slot="tooltip-content"
          className={cn(
            "tooltip relative motion-overlay-scale rounded-xl border border-border/80 bg-background px-3 py-1.5 text-xs text-foreground shadow-none data-[instant]:duration-0",
            className
          )}
        >
          {children}
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}

const createTooltipHandle = BaseTooltip.createHandle

export {
  createTooltipHandle,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
}
