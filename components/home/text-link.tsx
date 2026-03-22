import Link from "next/link"
import type { ComponentPropsWithoutRef } from "react"
import type { LinkProps } from "next/link"

import { cn } from "@/lib/utils"

type TextLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> &
  Omit<LinkProps, "href"> & {
    href: LinkProps["href"]
  }

function isInternalHref(href: LinkProps["href"]) {
  return (
    typeof href !== "string" || href.startsWith("/") || href.startsWith("#")
  )
}

export function TextLink({ className, ...props }: TextLinkProps) {
  const { children, href, ...rest } = props

  if (isInternalHref(href)) {
    return (
      <Link
        className={cn("text-link text-link-chrome", className)}
        href={href}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      className={cn("text-link text-link-chrome", className)}
      href={typeof href === "string" ? href : "#"}
      {...rest}
    >
      {children}
    </a>
  )
}
