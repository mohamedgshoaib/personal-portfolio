"use client"

import Image from "next/image"
import * as React from "react"
import { Drawer } from "@base-ui/react/drawer"

import { cn } from "@/lib/utils"
import type { Project } from "@/lib/content/site-content"
import {
  ArrowUpRightIcon,
  type ArrowUpRightIconHandle,
} from "@/components/ui/arrow-up-right"
import { GithubIcon, type GithubIconHandle } from "@/components/ui/github"

function ExternalLinkButton({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  const iconRef = React.useRef<ArrowUpRightIconHandle>(null)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-button shrink-0"
      onMouseEnter={(e) => {
        iconRef.current?.startAnimation()
        props.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        iconRef.current?.stopAnimation()
        props.onMouseLeave?.(e)
      }}
      {...props}
    >
      {children}
      <span className="external-icon">
        <ArrowUpRightIcon ref={iconRef} size={14} />
      </span>
    </a>
  )
}

function GithubLinkButton({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"a">) {
  const iconRef = React.useRef<GithubIconHandle>(null)
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="text-button shrink-0"
      onMouseEnter={(e) => {
        iconRef.current?.startAnimation()
        props.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        iconRef.current?.stopAnimation()
        props.onMouseLeave?.(e)
      }}
      {...props}
    >
      <span className="icon">
        <GithubIcon ref={iconRef} size={14} />
      </span>
      {children}
    </a>
  )
}

type DisclosureListProps = {
  type: "projects"
  items: Project[]
}

const DEFAULT_PROJECT_STATUS = "shipped"

export function DisclosureList(props: DisclosureListProps) {
  return (
    <ProjectRows
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

function ProjectRows({ items }: { items: Project[] }) {
  const [open, setOpen] = React.useState(false)
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null
  )

  function openProjectDetails(project: Project) {
    setSelectedProject(project)
    setOpen(true)
  }

  return (
    <Drawer.Root
      open={open}
      onOpenChange={setOpen}
      onOpenChangeComplete={(nextOpen) => {
        if (!nextOpen) {
          setSelectedProject(null)
        }
      }}
    >
      <div className="w-full divide-y divide-border/70">
        {items.map((item) => (
          <ProjectRow
            key={item.slug}
            item={item}
            onOpenDetails={openProjectDetails}
          />
        ))}
      </div>
      <ProjectDetailsSheet project={selectedProject} />
    </Drawer.Root>
  )
}

function ProjectRow({
  item,
  onOpenDetails,
}: {
  item: Project
  onOpenDetails: (project: Project) => void
}) {
  const statusLabel = getProjectStatusLabel(item.status)

  return (
    <article className="grid gap-5 py-5 first:pt-0 last:pb-0 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6">
      <ProjectImage
        item={item}
        className="mx-auto max-w-[20rem] sm:mx-0 sm:max-w-none"
      />

      <div className="min-w-0 space-y-3 self-center">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-item-title">{item.name}</h3>
          {statusLabel ? (
            <span className="text-sm text-muted-foreground">{statusLabel}</span>
          ) : null}
        </div>

        <p className="text-[0.96rem] leading-8 text-muted-foreground">
          {item.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.96rem]">
          <button
            type="button"
            className="text-button text-left"
            onClick={() => onOpenDetails(item)}
            aria-label={`View details for ${item.name}`}
          >
            Details
          </button>
          {item.href ? (
            <ExternalLinkButton href={item.href}>
              Visit website
            </ExternalLinkButton>
          ) : null}
        </div>
      </div>
    </article>
  )
}

function ProjectDetailsSheet({ project }: { project: Project | null }) {
  if (!project) {
    return null
  }

  const statusLabel = getProjectStatusLabel(project.status)

  return (
    <Drawer.Portal>
      <Drawer.Backdrop className="fixed inset-0 z-40 bg-background/45 motion-sheet-backdrop backdrop-blur-[2px]" />
      <Drawer.Viewport className="fixed inset-0 z-50 flex items-end justify-center px-3 pt-10 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:px-6 sm:pb-6">
        <Drawer.Popup className="flex max-h-[min(82svh,46rem)] w-full max-w-[48rem] motion-bottom-sheet flex-col overflow-hidden rounded-[var(--radius-surface)] surface-floating">
          <header className="shrink-0 border-b border-border/70 p-3 sm:p-4">
            <div className="min-w-0 space-y-1.5">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <Drawer.Title className="text-section-label">
                  {project.name}
                </Drawer.Title>
                {statusLabel ? (
                  <span className="text-sm text-muted-foreground">
                    {statusLabel}
                  </span>
                ) : null}
              </div>
              <Drawer.Description className="text-[0.92rem] leading-6 text-muted-foreground">
                {project.summary}
              </Drawer.Description>
            </div>
          </header>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
            <div className="space-y-6">
              <ProjectImage
                item={project}
                className="mx-auto max-w-[34rem]"
                sizes="(min-width: 768px) 34rem, calc(100vw - 2.5rem)"
              />

              <div className="max-w-[38rem] space-y-6 text-[0.96rem] leading-8 text-muted-foreground">
                <p>{project.details}</p>

                <section className="space-y-3" aria-labelledby="project-stack">
                  <h4
                    id="project-stack"
                    className="text-sm font-medium text-foreground"
                  >
                    Stack
                  </h4>
                  <ul className="flex max-w-[36rem] flex-wrap gap-x-2 gap-y-1 text-sm leading-6">
                    {project.architecture.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground after:ml-2 after:text-border after:content-['•'] last:after:content-none"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <footer className="shrink-0 border-t border-border/70 p-3 sm:p-4">
            <div className="flex items-center justify-between gap-4 text-[0.92rem] sm:gap-6 sm:text-[0.96rem]">
              <div className="flex min-w-0 flex-nowrap items-center gap-x-3 sm:gap-x-4">
                {project.href ? (
                  <ExternalLinkButton href={project.href}>
                    Visit website
                  </ExternalLinkButton>
                ) : null}
                {project.repoHref ? (
                  <GithubLinkButton href={project.repoHref}>
                    Repository
                  </GithubLinkButton>
                ) : null}
              </div>
              <Drawer.Close className="relative text-button inline-flex shrink-0 items-center text-left after:absolute after:inset-x-0 after:-inset-y-2 after:content-['']">
                Close
              </Drawer.Close>
            </div>
          </footer>
        </Drawer.Popup>
      </Drawer.Viewport>
    </Drawer.Portal>
  )
}

function ProjectImage({
  item,
  className,
  priority = false,
  sizes = "(min-width: 640px) 13rem, min(20rem, calc(100vw - 3rem))",
}: {
  item: Project
  className?: string
  priority?: boolean
  sizes?: string
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain shadow-none!"
      />
    </div>
  )
}
