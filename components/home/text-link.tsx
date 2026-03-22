import Link from "next/link"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

type TextLinkProps = ComponentProps<typeof Link>

export function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-1.5 text-sm text-foreground decoration-border underline-offset-4 transition-[color,text-decoration-color] duration-150 ease-[var(--ease-out)] hover:text-muted-foreground hover:decoration-foreground/30",
        className
      )}
      {...props}
    />
  )
}
