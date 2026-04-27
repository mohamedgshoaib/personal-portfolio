"use client"

import Link from "next/link"
import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Notebook02Icon,
  Home01Icon,
  MessageMultipleIcon,
  CodeFolderIcon,
  VolumeHighIcon,
  VolumeOffIcon,
} from "@hugeicons/core-free-icons"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import { Kbd } from "@/components/ui/kbd"
import {
  createPopoverHandle,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  createTooltipHandle,
} from "@/components/ui/tooltip"
import { useAudioPreferences } from "@/components/theme-provider"
import { socialLinks } from "@/lib/content/site-content"
import { cn } from "@/lib/utils"

type DockKey = "home" | "projects" | "writing" | "contact"

type DockLinkItem = {
  key: Exclude<DockKey, "contact">
  href: string
  icon: React.ReactNode
  label: string
}

type ActiveFrame = {
  height: number
  left: number
  width: number
}

async function playThemeToggleSound(nextTheme: "light" | "dark") {
  const { playSound } = await import("@/lib/audio/sound-engine")

  if (nextTheme === "light") {
    const { switchOnSound } = await import("@/lib/audio/switch-on")
    await playSound(switchOnSound.dataUri)
    return
  }

  const { switchOffSound } = await import("@/lib/audio/switch-off")
  await playSound(switchOffSound.dataUri)
}

const DOCK_SURFACE_CLASS =
  "max-w-[calc(100vw-2rem)] surface-floating-glass rounded-2xl p-1.5 backdrop-blur-lg"

const DOCK_POPOVER_SURFACE_CLASS =
  "max-w-[calc(100vw-2rem)] surface-floating-glass rounded-2xl p-1.5 backdrop-blur-lg"

const DOCK_CONTACT_ACTION_CLASS =
  "motion-surface-interaction relative z-10 inline-flex h-8 min-w-0 items-center rounded-xl border border-border/60 bg-muted px-2.5 py-1.5 font-sans text-[0.84rem] leading-none text-muted-foreground hover:border-border/90 hover:bg-card hover:text-foreground focus-visible:border-border/90 focus-visible:bg-card focus-visible:text-foreground focus-visible:outline-none sm:h-9 sm:px-3 sm:text-[0.875rem]"

export function FloatingDock() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const { muted, setMuted } = useAudioPreferences()
  const [contactOpen, setContactOpen] = React.useState(false)
  const clusterRef = React.useRef<HTMLDivElement | null>(null)
  const itemRefs = React.useRef<Partial<Record<DockKey, HTMLElement | null>>>(
    {}
  )
  const [activeFrame, setActiveFrame] = React.useState<ActiveFrame | null>(null)

  const items: DockLinkItem[] = [
    {
      key: "home",
      href: "/",
      icon: <DockIcon icon={Home01Icon} />,
      label: "Home",
    },
    {
      key: "projects",
      href: "/projects",
      icon: <DockIcon icon={CodeFolderIcon} />,
      label: "Projects",
    },
    {
      key: "writing",
      href: "/writing",
      icon: <DockIcon icon={Notebook02Icon} />,
      label: "Writings",
    },
  ]

  const baseActiveKey: Exclude<DockKey, "contact"> | null = pathname.startsWith(
    "/writing"
  )
    ? "writing"
    : pathname.startsWith("/projects")
      ? "projects"
      : pathname === "/"
        ? "home"
        : null

  const activeKey: DockKey | null = contactOpen ? "contact" : baseActiveKey

  const updateActiveFrame = React.useCallback((key: DockKey | null) => {
    if (!key) {
      setActiveFrame(null)
      return
    }

    const current = itemRefs.current[key]

    if (!current) {
      setActiveFrame(null)
      return
    }

    const nextFrame = {
      height: current.offsetHeight,
      left: current.offsetLeft,
      width: current.offsetWidth,
    }

    setActiveFrame((previous) => {
      if (
        previous &&
        previous.height === nextFrame.height &&
        previous.left === nextFrame.left &&
        previous.width === nextFrame.width
      ) {
        return previous
      }

      return nextFrame
    })
  }, [])

  React.useLayoutEffect(() => {
    updateActiveFrame(activeKey)
  }, [activeKey, updateActiveFrame])

  React.useEffect(() => {
    const cluster = clusterRef.current

    if (!cluster) {
      return
    }

    const observer = new ResizeObserver(() => {
      updateActiveFrame(activeKey)
    })

    observer.observe(cluster)

    Object.values(itemRefs.current).forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    window.addEventListener("resize", handleWindowResize)

    function handleWindowResize() {
      updateActiveFrame(activeKey)
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize)
      observer.disconnect()
    }
  }, [activeKey, updateActiveFrame])

  function handleThemeToggle() {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

    if (muted) {
      setTheme(nextTheme)
      return
    }

    void playThemeToggleSound(nextTheme)
    setTheme(nextTheme)
  }

  function handleMuteToggle() {
    setMuted((previous) => !previous)
  }

  return (
    <TooltipProvider>
      <div className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center px-4 pb-2.5 sm:pb-5">
        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[calc(100%+0.75rem)] w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 bg-gradient-to-b from-transparent via-background/16 to-background/58 [mask:linear-gradient(to_bottom,_transparent,_black_45%,_black)] sm:block" />
        <div className="relative inline-flex max-w-[calc(100vw-2rem)]">
          <nav
            aria-label="Quick navigation"
            className={cn(
              "pointer-events-auto relative z-30",
              DOCK_SURFACE_CLASS
            )}
          >
            <div className="flex items-center gap-1.5">
              <div
                ref={clusterRef}
                className="relative flex items-center gap-1.5"
              >
                {activeFrame ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 z-0 rounded-xl bg-muted motion-layout-frame"
                    style={{
                      height: `${activeFrame.height}px`,
                      transform: `translateX(${activeFrame.left}px)`,
                      width: `${activeFrame.width}px`,
                    }}
                  />
                ) : null}
                {items.map((item) => (
                  <DockTooltip key={item.key} label={item.label}>
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      ref={(element) => {
                        itemRefs.current[item.key] = element
                      }}
                      onClick={() => {
                        setContactOpen(false)
                      }}
                      className={cn(
                        "relative z-10 flex size-9 items-center justify-center rounded-xl bg-transparent text-muted-foreground motion-interactive-color outline-none hover:text-foreground focus-visible:text-foreground",
                        activeKey === item.key && "text-foreground"
                      )}
                    >
                      {item.icon}
                    </Link>
                  </DockTooltip>
                ))}

                <DockContactPopover
                  open={contactOpen}
                  onOpenChange={setContactOpen}
                  isActive={activeKey === "contact"}
                  onTriggerRefChange={(element) => {
                    itemRefs.current.contact = element
                  }}
                />
              </div>

              <DockTooltip label={muted ? "Enable sounds" : "Mute sounds"}>
                <button
                  type="button"
                  aria-label={
                    muted
                      ? "Enable interaction sounds"
                      : "Mute interaction sounds"
                  }
                  data-click-sound="off"
                  onClick={handleMuteToggle}
                  className="flex size-9 items-center justify-center rounded-xl bg-transparent text-muted-foreground motion-interactive-color outline-none hover:text-foreground focus-visible:text-foreground"
                >
                  {muted ? (
                    <DockIcon icon={VolumeOffIcon} />
                  ) : (
                    <DockIcon icon={VolumeHighIcon} />
                  )}
                </button>
              </DockTooltip>

              <DockTooltip
                label={resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
                shortcut="D"
              >
                <button
                  type="button"
                  aria-label="Toggle theme"
                  data-click-sound="off"
                  onClick={handleThemeToggle}
                  className="flex size-9 items-center justify-center rounded-xl bg-transparent text-foreground outline-none"
                >
                  <span className="size-[22px] rounded-md bg-foreground motion-surface-interaction dark:bg-[#F3F4F6]" />
                </button>
              </DockTooltip>
            </div>
          </nav>
        </div>
      </div>
    </TooltipProvider>
  )
}

function DockContactPopover({
  open,
  onOpenChange,
  isActive,
  onTriggerRefChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  isActive: boolean
  onTriggerRefChange: (element: HTMLButtonElement | null) => void
}) {
  const popoverHandle = React.useMemo(() => createPopoverHandle(), [])
  const tooltipHandle = React.useMemo(() => createTooltipHandle(), [])
  const triggerId = "dock-contact-trigger"
  const emailLink = socialLinks.find((link) => link.label === "Email")
  const githubLink = socialLinks.find((link) => link.label === "GitHub")
  const linkedInLink = socialLinks.find((link) => link.label === "LinkedIn")
  const xLink = socialLinks.find((link) => link.label === "X")

  return (
    <>
      <Tooltip disabled={open} handle={tooltipHandle}>
        <TooltipContent sideOffset={14}>Contact</TooltipContent>
      </Tooltip>
      <Popover
        open={open}
        onOpenChange={onOpenChange}
        handle={popoverHandle}
        triggerId={triggerId}
      >
        <PopoverContent className={DOCK_POPOVER_SURFACE_CLASS}>
          <div className="flex flex-nowrap items-center justify-center gap-1 sm:gap-1.5">
            {emailLink ? (
              <ContactAction href={emailLink.href} label="Email me" />
            ) : null}
            {githubLink ? (
              <ContactAction href={githubLink.href} label="GitHub" />
            ) : null}
            {linkedInLink ? (
              <ContactAction href={linkedInLink.href} label="LinkedIn" />
            ) : null}
            {xLink ? <ContactAction href={xLink.href} label="X" /> : null}
          </div>
        </PopoverContent>
      </Popover>
      <PopoverTrigger handle={popoverHandle} id={triggerId}>
        <TooltipTrigger handle={tooltipHandle}>
          <button
            ref={onTriggerRefChange}
            type="button"
            aria-label="Open contact options"
            className={cn(
              "relative z-10 flex size-9 items-center justify-center rounded-xl bg-transparent text-muted-foreground motion-interactive-color outline-none hover:text-foreground focus-visible:text-foreground",
              isActive && "text-foreground"
            )}
          >
            <DockIcon icon={MessageMultipleIcon} />
          </button>
        </TooltipTrigger>
      </PopoverTrigger>
    </>
  )
}

function DockTooltip({
  children,
  label,
  shortcut,
}: {
  children: React.ReactElement
  label: string
  shortcut?: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent
        sideOffset={14}
        className="inline-flex flex-row items-center gap-2 whitespace-nowrap"
      >
        <span>{label}</span>
        {shortcut ? <Kbd>{shortcut}</Kbd> : null}
      </TooltipContent>
    </Tooltip>
  )
}

function DockIcon({
  icon,
}: {
  icon: Parameters<typeof HugeiconsIcon>[0]["icon"]
}) {
  return <HugeiconsIcon icon={icon} size={24} strokeWidth={1.7} />
}

function ContactAction({ href, label }: { href: string; label: string }) {
  const isExternal = href.startsWith("http")
  const isClientRoute = href.startsWith("/") || href.startsWith("#")

  if (isClientRoute) {
    return (
      <Link href={href} className={DOCK_CONTACT_ACTION_CLASS}>
        <span className="truncate">{label}</span>
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={DOCK_CONTACT_ACTION_CLASS}
    >
      <span className="truncate">{label}</span>
    </a>
  )
}
