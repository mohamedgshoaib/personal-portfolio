"use client"

import * as React from "react"
import { Popover as BasePopover } from "@base-ui/react/popover"

import { cn } from "@/lib/utils"

function Popover({
  children,
  open,
  onOpenChange,
  handle,
  triggerId,
}: {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: React.ComponentProps<typeof BasePopover.Root>["onOpenChange"]
  handle?: React.ComponentProps<typeof BasePopover.Root>["handle"]
  triggerId?: React.ComponentProps<typeof BasePopover.Root>["triggerId"]
}) {
  return (
    <BasePopover.Root
      open={open}
      onOpenChange={onOpenChange}
      handle={handle}
      triggerId={triggerId}
    >
      {children}
    </BasePopover.Root>
  )
}

function PopoverTrigger({
  children,
  ...props
}: React.ComponentProps<typeof BasePopover.Trigger> & {
  children: React.ReactElement
}) {
  return <BasePopover.Trigger render={children} {...props} />
}

function PopoverContent({
  children,
  className,
  side = "top",
  sideOffset = 14,
  align = "center",
  anchor,
}: {
  children: React.ReactNode
  className?: string
  side?: React.ComponentProps<typeof BasePopover.Positioner>["side"]
  sideOffset?: React.ComponentProps<typeof BasePopover.Positioner>["sideOffset"]
  align?: React.ComponentProps<typeof BasePopover.Positioner>["align"]
  anchor?: React.ComponentProps<typeof BasePopover.Positioner>["anchor"]
}) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        anchor={anchor}
      >
        <BasePopover.Popup
          data-slot="popover-content"
          className={cn(
            "z-40 motion-overlay-lift-blur rounded-2xl border border-border/70 bg-background/22 p-2 backdrop-blur-md",
            className
          )}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
}

function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Title>) {
  return (
    <BasePopover.Title
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  )
}

function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<typeof BasePopover.Description>) {
  return (
    <BasePopover.Description
      className={cn("text-sm leading-6 text-muted-foreground", className)}
      {...props}
    />
  )
}

const createPopoverHandle = BasePopover.createHandle

export {
  createPopoverHandle,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
}
