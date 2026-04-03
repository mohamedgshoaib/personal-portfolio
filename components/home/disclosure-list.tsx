"use client"

import Image from "next/image"
import * as React from "react"
import { Accordion } from "@base-ui/react/accordion"
import dynamic from "next/dynamic"

import { DisclosureChevron } from "@/components/ui/disclosure-chevron"
import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@/components/ui/preview-card"
import { TextLink } from "@/components/home/text-link"
import { useHoverCapability } from "@/hooks/use-hover-capability"
import type { Project } from "@/lib/content/site-content"

type DisclosureListProps = {
  type: "projects"
  items: Project[]
}

const DEFAULT_PROJECT_STATUS = "shipped"
const MAX_VISIBLE_STACK_ITEMS = 4

const DISCLOSURE_TRIGGER_CLASS =
  "flex w-full items-start justify-between gap-6 py-3 text-left motion-interactive-color outline-none focus-visible:text-foreground data-[panel-open]:text-foreground"

const DISCLOSURE_PANEL_CLASS = "motion-disclosure-panel"
const DISCLOSURE_CONTENT_CLASS =
  "motion-disclosure-content max-w-[33rem] space-y-3 pb-4 text-[0.96rem] leading-8 text-muted-foreground"

const ProjectHoverPreview = dynamic(() =>
  import("@/components/home/project-hover-preview").then(
    (mod) => mod.ProjectHoverPreview
  )
)

export function DisclosureList(props: DisclosureListProps) {
  return (
    <ProjectDisclosureList
      key={props.items.map((item) => item.slug).join("|")}
      items={props.items}
    />
  )
}

function getProjectStatusLabel(status: Project["status"]) {
  if (status === DEFAULT_PROJECT_STATUS) {
    return null
  }

  return status.replace("-", " ")
}

function formatCompactStack(architecture: Project["architecture"]) {
  if (architecture.length <= MAX_VISIBLE_STACK_ITEMS) {
    return {
      visible: architecture.join(" · "),
      hidden: [] as string[],
    }
  }

  const visibleStack = architecture
    .slice(0, MAX_VISIBLE_STACK_ITEMS)
    .join(" · ")
  const hiddenStack = architecture.slice(MAX_VISIBLE_STACK_ITEMS)

  return {
    visible: visibleStack,
    hidden: hiddenStack,
  }
}

function ProjectDisclosureList({ items }: { items: Project[] }) {
  const [value, setValue] = React.useState<string[]>([])
  const supportsHoverPreview = useHoverCapability()
  const showPersistentImage = true

  return (
    <Accordion.Root
      className="w-full space-y-2"
      hiddenUntilFound
      value={value}
      onValueChange={setValue}
    >
      {items.map((item, index) => {
        const statusLabel = getProjectStatusLabel(item.status)
        const fullStack = item.architecture.join(", ")
        const compactStack = formatCompactStack(item.architecture)
        const hiddenCount = compactStack.hidden.length

        return (
          <Accordion.Item
            key={item.slug}
            value={item.slug}
            className={index === 0 ? "group" : "group pt-1"}
          >
            <Accordion.Header>
              <Accordion.Trigger className={DISCLOSURE_TRIGGER_CLASS}>
                <div className="grid min-w-0 flex-1 gap-4 sm:grid-cols-[minmax(0,1fr)_8.75rem] sm:items-start">
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="font-heading text-[1.03rem] font-medium tracking-[-0.01em] text-foreground decoration-border underline-offset-4 group-hover:underline sm:text-[1.06rem]">
                        {item.name}
                      </span>
                      {statusLabel ? (
                        <span className="text-sm text-muted-foreground">
                          {statusLabel}
                        </span>
                      ) : null}
                    </div>
                    <p className="text-[0.96rem] leading-8 text-muted-foreground">
                      {item.summary}
                    </p>
                  </div>

                  {showPersistentImage ? (
                    <div className="mb-1 w-full max-w-[18rem] translate-x-[1.125rem] justify-self-center overflow-hidden rounded-[1.1rem] sm:mb-0 sm:max-w-none sm:translate-x-0 sm:justify-self-auto">
                      <ProjectImageWithOptionalPreview
                        item={item}
                        supportsHoverPreview={supportsHoverPreview}
                      />
                    </div>
                  ) : null}
                </div>
                <DisclosureChevron />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className={DISCLOSURE_PANEL_CLASS}>
              <div className={DISCLOSURE_CONTENT_CLASS}>
                <p>{item.details}</p>
                <p className="truncate text-sm leading-6">
                  Stack: {compactStack.visible}
                  {hiddenCount > 0 ? (
                    <>
                      {" "}
                      <StackMorePreview
                        hiddenStack={compactStack.hidden}
                        hiddenCount={hiddenCount}
                      />
                    </>
                  ) : null}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  {item.href ? (
                    <TextLink href={item.href}>Visit project</TextLink>
                  ) : null}
                  {item.repoHref ? (
                    <TextLink href={item.repoHref}>View repository</TextLink>
                  ) : null}
                </div>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}

function StackMorePreview({
  hiddenStack,
  hiddenCount,
}: {
  hiddenStack: string[]
  hiddenCount: number
}) {
  return (
    <PreviewCard>
      <PreviewCardTrigger>
        <button
          type="button"
          className="inline-flex items-center rounded-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground focus-visible:outline-none"
          aria-label={`Show ${hiddenCount} more stack items: ${hiddenStack.join(", ")}`}
        >
          +{hiddenCount} more
        </button>
      </PreviewCardTrigger>
      <PreviewCardContent side="top" sideOffset={10}>
        <div className="max-w-[20rem] rounded-xl border border-border/70 bg-background px-3 py-2 text-sm leading-6 text-foreground shadow-xl">
          <p className="font-medium text-foreground">Additional stack</p>
          <p className="text-muted-foreground">{hiddenStack.join(" · ")}</p>
        </div>
      </PreviewCardContent>
    </PreviewCard>
  )
}

function ProjectImageWithOptionalPreview({
  item,
  supportsHoverPreview,
}: {
  item: Project
  supportsHoverPreview: boolean
}) {
  const image = <ProjectImage item={item} />

  if (!supportsHoverPreview) {
    return image
  }

  return (
    <React.Suspense fallback={image}>
      <ProjectHoverPreview item={item}>
        <span className="block">{image}</span>
      </ProjectHoverPreview>
    </React.Suspense>
  )
}

function ProjectImage({ item }: { item: Project }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 640px) 8.75rem, calc(100vw - 5rem)"
        className="object-cover shadow-none!"
      />
    </div>
  )
}
