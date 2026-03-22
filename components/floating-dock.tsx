"use client"

import Link from "next/link"
import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  BloggerIcon,
  Home01Icon,
  MailAtSign01Icon,
  SourceCodeSquareIcon,
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
import { useSound } from "@/hooks/use-sound"
import { socialLinks } from "@/lib/site-content"
import { switchOffSound } from "@/lib/switch-off"
import { switchOnSound } from "@/lib/switch-on"
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

export function FloatingDock() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [contactOpen, setContactOpen] = React.useState(false)
  const [pendingActiveKey, setPendingActiveKey] = React.useState<Exclude<
    DockKey,
    "contact"
  > | null>(null)
  const [playSwitchOn] = useSound(switchOnSound, { interrupt: true })
  const [playSwitchOff] = useSound(switchOffSound, { interrupt: true })
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
      icon: <DockIcon icon={SourceCodeSquareIcon} />,
      label: "Projects",
    },
    {
      key: "writing",
      href: "/writing",
      icon: <DockIcon icon={BloggerIcon} />,
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

  const activeKey: DockKey | null = contactOpen
    ? "contact"
    : (pendingActiveKey ?? baseActiveKey)

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
    setPendingActiveKey(null)
  }, [pathname])

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
    if (resolvedTheme === "dark") {
      playSwitchOn()
      setTheme("light")
      return
    }

    playSwitchOff()
    setTheme("dark")
  }

  return (
    <TooltipProvider>
      <div className="fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center px-4 pb-2.5 sm:pb-5">
        <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[calc(100%+0.75rem)] w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 sm:block">
          <div className="absolute inset-0 z-[1] backdrop-blur-[0.5px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,1)_12.5%,_rgba(0,0,0,1)_25%,_rgba(0,0,0,0)_37.5%)]" />
          <div className="absolute inset-0 z-[2] backdrop-blur-[1px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_12.5%,_rgba(0,0,0,1)_25%,_rgba(0,0,0,1)_37.5%,_rgba(0,0,0,0)_50%)]" />
          <div className="absolute inset-0 z-[3] backdrop-blur-[2px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_25%,_rgba(0,0,0,1)_37.5%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,0)_62.5%)]" />
          <div className="absolute inset-0 z-[4] backdrop-blur-[3px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_37.5%,_rgba(0,0,0,1)_50%,_rgba(0,0,0,1)_62.5%,_rgba(0,0,0,0)_75%)]" />
          <div className="absolute inset-0 z-[5] backdrop-blur-[4px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_50%,_rgba(0,0,0,1)_62.5%,_rgba(0,0,0,1)_75%,_rgba(0,0,0,0)_87.5%)]" />
          <div className="absolute inset-0 z-[6] backdrop-blur-[5px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_62.5%,_rgba(0,0,0,1)_75%,_rgba(0,0,0,1)_87.5%,_rgba(0,0,0,0)_100%)]" />
          <div className="absolute inset-0 z-[7] backdrop-blur-[6px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_75%,_rgba(0,0,0,1)_87.5%,_rgba(0,0,0,1)_100%)]" />
          <div className="absolute inset-0 z-[8] backdrop-blur-[12px] [mask:linear-gradient(to_bottom,_rgba(0,0,0,0)_87.5%,_rgba(0,0,0,1)_100%)]" />
        </div>
        <div className="relative inline-flex max-w-[calc(100vw-2rem)]">
          <nav
            aria-label="Quick navigation"
            className="pointer-events-auto relative z-30 max-w-[calc(100vw-2rem)] rounded-2xl border border-border/70 bg-background/60 p-2 backdrop-blur-xl"
          >
            <div className="flex items-center gap-1.5">
              <div
                ref={clusterRef}
                className="relative flex items-center gap-1.5"
              >
                {activeFrame ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 z-0 rounded-xl bg-muted transition-[transform,width,height] duration-250 ease-[var(--ease-out)]"
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
                      onPointerDownCapture={() => {
                        setPendingActiveKey(item.key)
                      }}
                      onClick={() => {
                        setPendingActiveKey(item.key)
                        setContactOpen(false)
                      }}
                      className={cn(
                        "relative z-10 flex size-9 items-center justify-center rounded-xl bg-transparent text-muted-foreground transition-[color,transform] duration-150 ease-[var(--ease-out)] outline-none hover:text-foreground focus-visible:text-foreground",
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

              <DockTooltip
                label={resolvedTheme === "dark" ? "Light mode" : "Dark mode"}
                shortcut="D"
              >
                <button
                  type="button"
                  aria-label="Toggle theme"
                  data-click-sound="off"
                  onClick={handleThemeToggle}
                  className="flex size-9 items-center justify-center rounded-xl bg-transparent text-foreground transition-[transform] duration-150 ease-[var(--ease-out)] outline-none"
                >
                  <span className="size-[22px] rounded-md bg-foreground transition-transform duration-200 ease-[var(--ease-out)] dark:bg-[#F3F4F6]" />
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
        <PopoverContent className="max-w-[calc(100vw-1rem)] rounded-2xl border border-border/70 bg-background/60 p-1.5 backdrop-blur-xl sm:max-w-[calc(100vw-2rem)] sm:p-2">
          <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2">
            {emailLink ? (
              <ContactAction href={emailLink.href} label="Email me" />
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
              "relative z-10 flex size-9 items-center justify-center rounded-xl bg-transparent text-muted-foreground transition-[color,transform] duration-150 ease-[var(--ease-out)] outline-none hover:text-foreground focus-visible:text-foreground",
              isActive && "text-foreground"
            )}
          >
            <DockIcon icon={MailAtSign01Icon} />
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

  const className =
    "relative z-10 inline-flex h-9 min-w-0 items-center rounded-xl border border-border/70 bg-card px-3 py-1.5 font-sans text-[0.875rem] leading-none text-card-foreground transition-[background-color,color,transform,border-color] duration-200 ease-[var(--ease-out)] hover:border-border/90 hover:bg-muted focus-visible:border-border/90 focus-visible:bg-muted focus-visible:outline-none sm:h-10 sm:px-3.5 sm:text-[0.95rem]"

  if (isClientRoute) {
    return (
      <Link href={href} className={className}>
        <span className="truncate">{label}</span>
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={className}
    >
      <span className="truncate">{label}</span>
    </a>
  )
}
