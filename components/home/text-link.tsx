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

function isExternalHttpHref(href: LinkProps["href"]) {
  return (
    typeof href === "string" &&
    (href.startsWith("https://") || href.startsWith("http://"))
  )
}

export function TextLink({ className, ...props }: TextLinkProps) {
  const { children, href, rel, target, ...rest } = props

  if (isInternalHref(href)) {
    return (
      <Link className={cn("text-link", className)} href={href} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <a
      className={cn("text-link", className)}
      href={typeof href === "string" ? href : "#"}
      target={isExternalHttpHref(href) ? "_blank" : target}
      rel={isExternalHttpHref(href) ? "noreferrer noopener" : rel}
      {...rest}
    >
      {children}
    </a>
  )
}
