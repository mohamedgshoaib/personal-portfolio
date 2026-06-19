import Link from "next/link"
import type * as React from "react"

import { NavigationIntentLink } from "@/components/navigation/navigation-intent-link"
import { textStyles } from "@/lib/design/text-styles"
import type { NavigationIntentAction } from "@/lib/navigation/navigation-intent"
import { cn } from "@/lib/utils"

type PageShellProps = {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps): React.ReactElement {
  return (
    <main className="box-border min-h-svh px-6 py-12 sm:px-8 sm:py-16" id="top">
      <div className="mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[640px] flex-col sm:min-h-[calc(100svh-8rem)]">
        {children}
      </div>
    </main>
  )
}

export function PageContent({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return <div className="flex flex-1 flex-col gap-16">{children}</div>
}

type HomeSectionProps = React.ComponentPropsWithoutRef<"section"> & {
  actionHref?: string
  actionIntent?: NavigationIntentAction | NavigationIntentAction[]
  actionLabel?: string
  header?: React.ReactNode
  rhythm?: "body" | "list"
  title?: string
}

export function HomeSection({
  actionHref,
  actionIntent,
  actionLabel = "View All",
  children,
  className,
  header,
  rhythm = "body",
  title,
  ...props
}: HomeSectionProps): React.ReactElement {
  return (
    <section
      className={cn(
        "scroll-mt-24",
        rhythm === "list" ? "space-y-5" : "space-y-4",
        className
      )}
      {...props}
    >
      {header ??
        (title ? (
          <SectionHeader
            actionHref={actionHref}
            actionIntent={actionIntent}
            actionLabel={actionLabel}
            title={title}
          />
        ) : null)}
      {children}
    </section>
  )
}

export function SectionHeader({
  actionHref,
  actionIntent,
  actionLabel,
  title,
}: {
  actionHref?: string
  actionIntent?: NavigationIntentAction | NavigationIntentAction[]
  actionLabel: string
  title: string
}): React.ReactElement {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className={textStyles.sectionTitle}>{title}</h2>
      {actionHref ? (
        actionIntent ? (
          <NavigationIntentLink href={actionHref} intent={actionIntent}>
            {actionLabel}
          </NavigationIntentLink>
        ) : (
          <Link className={textStyles.inlineMutedLink} href={actionHref}>
            {actionLabel}
          </Link>
        )
      ) : null}
    </div>
  )
}
