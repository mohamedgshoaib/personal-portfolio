"use client"

import { createContext, use, useEffect, useRef, useState } from "react"
import * as React from "react"
import {
  IconCheckFilled,
  IconMailFilled,
  type Icon as TablerIcon,
} from "@tabler/icons-react"
import { useSound } from "@web-kits/audio/react"

import { resolveActionLinkItem } from "@/components/action-link/action-link-resolver"
import { click, copy } from "@/lib/audio/minimal"
import { AnimatedIconLinkGroup } from "@/components/action-link/animated-icon-link-group"
import type {
  IconLinkItem,
  IconLinkSize,
} from "@/components/action-link/icon-link"
import { AnimatePresence, m } from "@/lib/motion/primitives"
import type { ActionLinkRecord } from "@/lib/content/content-types"
import {
  applyNavigationIntent,
  navigationIntentKeys,
} from "@/lib/navigation/navigation-intent"
import { cn } from "@/lib/utils"

const iconTransition = { bounce: 0, duration: 0.3, type: "spring" } as const

const EmailCopiedContext = createContext(false)

function EmailIcon({ className: cls, ...props }: React.SVGProps<SVGSVGElement>) {
  const emailCopied = use(EmailCopiedContext)
  return (
    <AnimatePresence initial={false} mode="wait">
      <m.span
        key={emailCopied ? "success" : "idle"}
        animate={{ filter: "blur(0px)", opacity: 1, scale: 1 }}
        className="inline-flex"
        exit={{ filter: "blur(4px)", opacity: 0, scale: 0.25 }}
        initial={{ filter: "blur(4px)", opacity: 0, scale: 0.25 }}
        transition={iconTransition}
      >
        {emailCopied ? (
          <IconCheckFilled className={cls} {...props} />
        ) : (
          <IconMailFilled className={cls} {...props} />
        )}
      </m.span>
    </AnimatePresence>
  )
}

type ActionLinkSetVariant = "dock" | "pageActions" | "projectActions" | "social"

const actionLinkSetSize: Record<ActionLinkSetVariant, IconLinkSize> = {
  dock: "dock",
  pageActions: "projectAction",
  projectActions: "projectAction",
  social: "social",
}

export function ActionLinkSet({
  "aria-label": ariaLabel,
  as,
  className,
  itemClassName,
  items,
  onItemClick,
  size,
  variant = "social",
}: {
  "aria-label"?: string
  as?: "div" | "nav"
  className?: string
  itemClassName?: string
  items: readonly (ActionLinkRecord | IconLinkItem)[]
  onItemClick?: () => void
  size?: IconLinkSize
  variant?: ActionLinkSetVariant
}): React.ReactElement {
  const playClick = useSound(click)
  const playCopy = useSound(copy)
  const effectiveOnItemClick = onItemClick ?? playClick

  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    if (!emailCopied) return
    const timeout = window.setTimeout(() => setEmailCopied(false), 1600)
    return () => window.clearTimeout(timeout)
  }, [emailCopied])

  const resolvedItems = items.map((item) => {
    if ("icon" in item) {
      return item
    }

    if (item.kind === "email") {
      const email = item.href.replace("mailto:", "")
      const label = emailCopied ? "Email copied" : (item.label ?? "Copy email")
      return {
        icon: EmailIcon as unknown as TablerIcon,
        id: "email",
        kind: "button" as const,
        label,
        onClick: () => {
          playCopy()
          void navigator.clipboard.writeText(email).then(() => setEmailCopied(true))
        },
        tooltip: label,
      }
    }

    const resolvedItem = resolveActionLinkItem(item)

    if (
      variant === "dock" &&
      (item.kind === "projects" || item.kind === "writing")
    ) {
      const archiveBackHrefKey =
        item.kind === "projects"
          ? navigationIntentKeys.projectsArchiveBackHref
          : navigationIntentKeys.writingArchiveBackHref

      return {
        ...resolvedItem,
        onClick: () => {
          applyNavigationIntent({
            key: archiveBackHrefKey,
            type: "clear",
          })
        },
      }
    }

    return resolvedItem
  })

  return (
    <EmailCopiedContext.Provider value={emailCopied}>
      <AnimatedIconLinkGroup
        aria-label={ariaLabel}
        as={as}
        backgroundClassName={variant === "dock" ? "rounded-xl" : undefined}
        className={className}
        itemClassName={variant === "dock" ? cn("rounded-xl", itemClassName) : itemClassName}
        items={resolvedItems}
        onItemClick={effectiveOnItemClick}
        showActiveRoute={variant === "dock"}
        size={size ?? actionLinkSetSize[variant]}
        tooltipSideOffset={variant === "dock" ? 12 : 4}
      />
    </EmailCopiedContext.Provider>
  )
}
