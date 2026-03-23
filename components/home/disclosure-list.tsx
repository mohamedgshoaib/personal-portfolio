"use client"

import Image from "next/image"
import * as React from "react"
import { Accordion } from "@base-ui/react/accordion"

import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@/components/ui/preview-card"
import { DisclosureChevron } from "@/components/ui/disclosure-chevron"
import { TextLink } from "@/components/home/text-link"
import type { Experience, Project } from "@/lib/site-content"

type DisclosureListProps =
  | {
      type: "projects"
      items: Project[]
    }
  | {
      type: "experience"
      items: Experience[]
    }

const DISCLOSURE_TRIGGER_CLASS =
  "flex w-full items-start justify-between gap-6 py-3 text-left motion-interactive-color outline-none focus-visible:text-foreground data-[panel-open]:text-foreground"

const DISCLOSURE_PANEL_CLASS = "motion-disclosure-panel"
const DISCLOSURE_CONTENT_CLASS =
  "motion-disclosure-content max-w-[33rem] space-y-3 pb-4 text-[0.96rem] leading-8 text-muted-foreground"

export function DisclosureList(props: DisclosureListProps) {
  if (props.type === "projects") {
    return (
      <ProjectDisclosureList
        key={props.items.map((item) => item.slug).join("|")}
        items={props.items}
      />
    )
  }

  return (
    <ExperienceDisclosureList
      key={props.items.map((item) => `${item.company}-${item.role}`).join("|")}
      items={props.items}
    />
  )
}

function ProjectDisclosureList({ items }: { items: Project[] }) {
  const [value, setValue] = React.useState<string[]>([])
  const [supportsHoverPreview, setSupportsHoverPreview] = React.useState(false)
  const showPersistentImage = true

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)")

    function updatePreviewSupport(event?: MediaQueryListEvent) {
      setSupportsHoverPreview(event ? event.matches : mediaQuery.matches)
    }

    updatePreviewSupport()
    mediaQuery.addEventListener("change", updatePreviewSupport)

    return () => {
      mediaQuery.removeEventListener("change", updatePreviewSupport)
    }
  }, [])

  return (
    <Accordion.Root
      className="w-full space-y-2"
      hiddenUntilFound
      value={value}
      onValueChange={setValue}
    >
      {items.map((item, index) => (
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
                    <span className="font-heading text-lg font-medium text-foreground decoration-border underline-offset-4 group-hover:underline">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[0.96rem] leading-8 text-muted-foreground">
                    {item.summary}
                  </p>
                </div>

                {showPersistentImage ? (
                  <div className="mb-1 w-full max-w-[18rem] translate-x-[1.125rem] justify-self-center overflow-hidden rounded-[1.1rem] sm:mb-0 sm:max-w-none sm:translate-x-0 sm:justify-self-auto">
                    {supportsHoverPreview ? (
                      <ProjectPreviewCard item={item}>
                        <span className="block">
                          <ProjectImage item={item} />
                        </span>
                      </ProjectPreviewCard>
                    ) : (
                      <ProjectImage item={item} />
                    )}
                  </div>
                ) : null}
              </div>
              <DisclosureChevron />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className={DISCLOSURE_PANEL_CLASS}>
            <div className={DISCLOSURE_CONTENT_CLASS}>
              <p>{item.details}</p>
              <p>{item.architecture.join(", ")}.</p>
              <p>
                <TextLink href={item.href}>Visit project</TextLink>
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

function ProjectPreviewCard({
  children,
  item,
}: {
  children: React.ReactElement
  item: Project
}) {
  return (
    <PreviewCard>
      <PreviewCardTrigger>{children}</PreviewCardTrigger>
      <PreviewCardContent
        side="bottom"
        align="center"
        sideOffset={-10}
        className="w-[min(32rem,80vw)]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 640px) 32rem, 80vw"
            className="object-cover shadow-none!"
          />
        </div>
      </PreviewCardContent>
    </PreviewCard>
  )
}

function ProjectImage({ item }: { item: Project }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 640px) 140px, 100vw"
        className="object-cover shadow-none!"
      />
    </div>
  )
}

function ExperienceDisclosureList({ items }: { items: Experience[] }) {
  const [value, setValue] = React.useState<string[]>([])

  return (
    <Accordion.Root
      className="w-full space-y-2"
      hiddenUntilFound
      value={value}
      onValueChange={setValue}
    >
      {items.map((item, index) => {
        const value = `${item.company}-${item.role}`

        return (
          <Accordion.Item
            key={value}
            value={value}
            className={index === 0 ? "group" : "group pt-1"}
          >
            <Accordion.Header>
              <Accordion.Trigger className={DISCLOSURE_TRIGGER_CLASS}>
                <div className="max-w-[33rem] min-w-0 space-y-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="font-heading text-lg font-medium text-foreground">
                      {item.role}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.company}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.periodLabel}
                  </p>
                </div>
                <DisclosureChevron />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel className={DISCLOSURE_PANEL_CLASS}>
              <div className={DISCLOSURE_CONTENT_CLASS}>
                <p>{item.summary}</p>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}
