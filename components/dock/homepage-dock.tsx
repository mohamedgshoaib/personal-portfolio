"use client"

import * as React from "react"
import { IconSquareRoundedFilled } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { useSound } from "@web-kits/audio/react"

import { ActionLinkSet } from "@/components/action-link/action-link-set"
import { HomepageSceneReveal } from "@/components/homepage/homepage-scene"
import { Kbd } from "@/components/ui/kbd"
import type { IconLinkButtonItem } from "@/components/action-link/icon-link"
import { click, toggleOff, toggleOn } from "@/lib/audio/minimal"

const navigationItems = [
  {
    href: "/",
    kind: "home",
  },
  {
    href: "/projects",
    kind: "projects",
  },
  {
    href: "/writing",
    kind: "writing",
  },
] as const

const dockPillClassName =
  "pointer-events-auto rounded-2xl bg-surface-floating p-1 shadow-[var(--shadow-surface-floating)]"

// Static — hoisted so tooltip payload reference never changes between renders,
// preventing spurious store.set('payload') calls on every HomepageDock re-render.
const themeTooltip = (
  <span className="flex items-center gap-2">
    <span>Toggle theme</span>
    <Kbd>D</Kbd>
  </span>
)

export function HomepageDock({
  revealDelayMs = 0,
}: {
  revealDelayMs?: number
}): React.ReactElement {
  const { resolvedTheme, setTheme } = useTheme()
  const playClick = useSound(click)
  const playToggleOn = useSound(toggleOn)
  const playToggleOff = useSound(toggleOff)

  // Ref so the click handler always reads the current theme without being listed
  // as a useMemo dependency — keeps themeItem stable across theme-change re-renders.
  const resolvedThemeRef = React.useRef(resolvedTheme)
  resolvedThemeRef.current = resolvedTheme

  const themeItem = React.useMemo<IconLinkButtonItem>(
    () => ({
      icon: IconSquareRoundedFilled,
      id: "theme-toggle",
      kind: "button",
      label: "Toggle theme",
      onClick: () => {
        if (resolvedThemeRef.current === "dark") {
          playToggleOn()
          setTheme("light")
        } else {
          playToggleOff()
          setTheme("dark")
        }
      },
      tooltip: themeTooltip,
    }),
    [setTheme, playToggleOn, playToggleOff]
  )

  const pill = (
    <ActionLinkSet
      as="div"
      className={dockPillClassName}
      items={[...navigationItems, themeItem]}
      onItemClick={playClick}
      variant="dock"
    />
  )

  return (
    <>
      {/*
        Progressive blur zone (pointer:fine / desktop only): 8 overlapping layers
        of increasing blur radius, each masked to a vertical band. Smooth gradient
        of blur intensity — 0.5px at top to 12px at bottom.
        8 layers = 8 serial GPU passes per scroll frame, which is too expensive
        on mobile. pointer:coarse devices get a CSS gradient fallback instead.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-auto fixed inset-x-0 bottom-0 z-[39] hidden h-20 sm:h-[4.75rem] [@media(pointer:fine)]:block"
      >
        <div className="absolute inset-0 backdrop-blur-[0.5px] [mask:linear-gradient(to_bottom,transparent_0%,black_12.5%,black_25%,transparent_37.5%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px] [mask:linear-gradient(to_bottom,transparent_12.5%,black_25%,black_37.5%,transparent_50%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px] [mask:linear-gradient(to_bottom,transparent_25%,black_37.5%,black_50%,transparent_62.5%)]" />
        <div className="absolute inset-0 backdrop-blur-[3px] [mask:linear-gradient(to_bottom,transparent_37.5%,black_50%,black_62.5%,transparent_75%)]" />
        <div className="absolute inset-0 backdrop-blur-[4px] [mask:linear-gradient(to_bottom,transparent_50%,black_62.5%,black_75%,transparent_87.5%)]" />
        <div className="absolute inset-0 backdrop-blur-[5px] [mask:linear-gradient(to_bottom,transparent_62.5%,black_75%,black_87.5%,transparent_100%)]" />
        <div className="absolute inset-0 backdrop-blur-[6px] [mask:linear-gradient(to_bottom,transparent_75%,black_87.5%,black_100%)]" />
        <div className="absolute inset-0 backdrop-blur-[12px] [mask:linear-gradient(to_bottom,transparent_87.5%,black_100%)]" />
      </div>
      {/* Mobile fallback (pointer:coarse): gradient fade — zero GPU compositing
          cost, same semantic signal as the blur zone. */}
      <div
        aria-hidden="true"
        className="pointer-events-auto fixed inset-x-0 bottom-0 z-[39] h-20 bg-gradient-to-t from-background to-transparent sm:h-[4.75rem] [@media(pointer:fine)]:hidden"
      />
      {/* The nav is the fixed anchor. HomepageSceneReveal wraps only the inner
          pill so its transform/filter never creates a containing block for the
          fixed ancestor, which would break viewport positioning. */}
      <nav
        aria-label="Primary navigation"
        className="pointer-events-none fixed inset-x-0 bottom-8 z-40 flex justify-center px-6"
      >
        {revealDelayMs > 0 ? (
          <HomepageSceneReveal
            delayMs={revealDelayMs}
            kind="utility"
            mode="timed"
          >
            {pill}
          </HomepageSceneReveal>
        ) : (
          pill
        )}
      </nav>
    </>
  )
}
