"use client"

import { Accordion } from "@base-ui/react/accordion"

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

export function DisclosureList(props: DisclosureListProps) {
  if (props.type === "projects") {
    return <ProjectDisclosureList items={props.items} />
  }

  return <ExperienceDisclosureList items={props.items} />
}

function ProjectDisclosureList({ items }: { items: Project[] }) {
  const defaultValue = items.length === 1 ? [items[0].slug] : []

  return (
    <Accordion.Root
      className="w-full space-y-2"
      defaultValue={defaultValue}
      hiddenUntilFound
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={item.slug}
          value={item.slug}
          className={index === 0 ? "group" : "group pt-1"}
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-start justify-between gap-6 py-3 text-left transition-[color] duration-150 ease-[var(--ease-out)] outline-none focus-visible:text-foreground data-[panel-open]:text-foreground">
              <div className="max-w-[33rem] min-w-0 space-y-1">
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
              <DisclosureChevron />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="overflow-hidden transition-[height,opacity,transform] duration-200 ease-[var(--ease-out)] data-[ending-style]:-translate-y-1 data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-1 data-[starting-style]:opacity-0">
            <div className="max-w-[33rem] space-y-3 pb-4 text-[0.96rem] leading-8 text-muted-foreground">
              <p>{item.details}</p>
              <p>{item.architecture.join(", ")}.</p>
              <p>
                <a
                  href={item.href}
                  className="text-foreground decoration-border underline-offset-4 hover:underline"
                >
                  Visit project
                </a>
              </p>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

function ExperienceDisclosureList({ items }: { items: Experience[] }) {
  const defaultValue =
    items.length === 1 ? [`${items[0].company}-${items[0].role}`] : []

  return (
    <Accordion.Root
      className="w-full space-y-2"
      defaultValue={defaultValue}
      hiddenUntilFound
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
              <Accordion.Trigger className="flex w-full items-start justify-between gap-6 py-3 text-left transition-[color] duration-150 ease-[var(--ease-out)] outline-none focus-visible:text-foreground data-[panel-open]:text-foreground">
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
            <Accordion.Panel className="overflow-hidden transition-[height,opacity,transform] duration-200 ease-[var(--ease-out)] data-[ending-style]:-translate-y-1 data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-1 data-[starting-style]:opacity-0">
              <div className="max-w-[33rem] space-y-3 pb-4 text-[0.96rem] leading-8 text-muted-foreground">
                <p>{item.summary}</p>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}

function DisclosureChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 14 14"
      className="mt-0.5 size-3 shrink-0 text-muted-foreground transition-[color,transform] duration-200 ease-[var(--ease-out)] group-hover:text-foreground group-data-[open]:rotate-90 motion-reduce:transition-none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3.5 8.5 7 5 10.5" />
    </svg>
  )
}
