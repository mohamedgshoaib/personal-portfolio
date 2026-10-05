"use client"

import {
  AnchorProvider,
  TOCItem,
  useActiveAnchor,
  useActiveAnchors,
  type TOCItemType,
} from "fumadocs-core/toc"
import { IconListFilled } from "@tabler/icons-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import type * as React from "react"

import { textStyles } from "@/lib/design/text-styles"
import { m } from "@/lib/motion/primitives"
import { cn } from "@/lib/utils"

export function ArticleToc({
  "aria-label": ariaLabel = "Sections",
  toc,
}: {
  "aria-label"?: string
  toc: readonly TOCItemType[]
}): React.ReactElement | null {
  const visibleItems = toc.filter((item) => item.depth <= 3)

  if (visibleItems.length === 0) {
    return null
  }

  return (
    <AnchorProvider toc={[...visibleItems]}>
      <>
        <nav
          aria-label={ariaLabel}
          className="fixed top-24 left-[calc(50%+24rem)] z-10 hidden w-56 xl:block"
        >
          <p className={textStyles.tocHeading}>Sections</p>
          <ArticleTocItems toc={visibleItems} />
        </nav>
        <details className="rounded-lg border border-border px-3 py-2 xl:hidden">
          <summary className="cursor-pointer list-none py-1 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
            <IconListFilled
              aria-hidden="true"
              className="mr-2 inline-block size-4 align-[-0.2em]"
            />
            On this page
          </summary>
          <nav aria-label={ariaLabel} className="pt-2">
            <ArticleTocItems showTrackingRail={false} toc={visibleItems} />
          </nav>
        </details>
      </>
    </AnchorProvider>
  )
}

function ArticleTocItems({
  showTrackingRail = true,
  toc,
}: {
  showTrackingRail?: boolean
  toc: readonly TOCItemType[]
}): React.ReactElement {
  const activeAnchor = useActiveAnchor()
  const activeAnchors = useActiveAnchors()
  const listRef = useRef<HTMLOListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const [railStyle, setRailStyle] = useState({ height: 0, top: 0 })
  const itemIds = useMemo(
    () => toc.map((item) => item.url.replace(/^#/, "")),
    [toc]
  )
  const activeIds = useMemo(
    () =>
      activeAnchors.length > 0
        ? activeAnchors
        : activeAnchor
          ? [activeAnchor]
          : [],
    [activeAnchor, activeAnchors]
  )
  const activeIndexes = useMemo(
    () =>
      itemIds.flatMap((id, index) => (activeIds.includes(id) ? [index] : [])),
    [activeIds, itemIds]
  )
  const activeIndexSet = useMemo(() => new Set(activeIndexes), [activeIndexes])
  const measureRail = useCallback(() => {
    if (!showTrackingRail || activeIndexes.length === 0) {
      setRailStyle((current) =>
        current.height === 0 ? current : { ...current, height: 0 }
      )
      return
    }

    const list = listRef.current
    const firstItem = itemRefs.current[Math.min(...activeIndexes)]
    const lastItem = itemRefs.current[Math.max(...activeIndexes)]

    if (!list || !firstItem || !lastItem) {
      return
    }

    const listRect = list.getBoundingClientRect()
    const firstRect = firstItem.getBoundingClientRect()
    const lastRect = lastItem.getBoundingClientRect()
    const top = firstRect.top - listRect.top + 4
    const height = lastRect.bottom - firstRect.top - 8

    const nextRailStyle = {
      top,
      height: Math.max(height, 0),
    }

    setRailStyle((current) =>
      current.top === nextRailStyle.top &&
      current.height === nextRailStyle.height
        ? current
        : nextRailStyle
    )
  }, [activeIndexes, showTrackingRail])

  useEffect(() => {
    if (!showTrackingRail) return

    const frame = window.requestAnimationFrame(measureRail)

    const list = listRef.current
    if (!list) {
      return () => window.cancelAnimationFrame(frame)
    }

    const observer = new ResizeObserver(measureRail)
    observer.observe(list)

    return () => {
      window.cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [measureRail, showTrackingRail])

  return (
    <ol
      className={cn(
        "relative space-y-0.5",
        showTrackingRail &&
          "before:absolute before:top-1 before:bottom-1 before:left-[0.21875rem] before:w-px before:bg-muted-foreground/15"
      )}
      ref={listRef}
    >
      {showTrackingRail ? (
        <m.span
          aria-hidden="true"
          animate={{
            opacity: railStyle.height > 0 ? 1 : 0,
            transform: `translateY(${railStyle.top}px) scaleY(${Math.max(railStyle.height, 0)})`,
          }}
          className="absolute left-[0.1875rem] w-0.5 origin-top rounded-full bg-foreground"
          initial={false}
          style={{ height: 1, top: 0 }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
        />
      ) : null}
      {toc.map((item, index) => {
        const active = activeIndexSet.has(index)

        return (
          <li
            key={item.url}
            ref={(node) => {
              itemRefs.current[index] = node
            }}
          >
            <TOCItem
              className={cn(textStyles.tocItem, active && "text-foreground")}
              href={item.url}
              style={{
                paddingLeft: `${Math.max(item.depth - 2, 0) * 0.75}rem`,
              }}
            >
              <span aria-hidden="true" />
              <span className="min-w-0 self-center text-pretty whitespace-normal">
                {item.title}
              </span>
            </TOCItem>
          </li>
        )
      })}
    </ol>
  )
}
