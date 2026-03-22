import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  eyebrow: string
  title?: string
  description?: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

export function Section({
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: SectionProps) {
  return (
    <section
      className={cn(
        "grid gap-5 border-t border-border/80 py-8 sm:gap-6 sm:py-10 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8",
        className
      )}
    >
      <div className="space-y-1 md:pt-1">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {eyebrow}
        </p>
        {title ? (
          <h2 className="font-heading text-base font-medium text-foreground sm:text-lg">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      <div className={cn("min-w-0", contentClassName)}>{children}</div>
    </section>
  )
}
