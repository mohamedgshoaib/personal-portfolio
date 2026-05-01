"use client"

import Link from "next/link"
import type { ComponentPropsWithoutRef } from "react"
import type { LinkProps } from "next/link"
import { useRef } from "react"

import {
  ArrowUpRightIcon,
  type ArrowUpRightIconHandle,
} from "@/components/ui/arrow-up-right"
import { cn } from "@/lib/utils"

type TextLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> &
  Omit<LinkProps, "href"> & {
    href: LinkProps["href"]
    hideIcon?: boolean
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

export function TextLink({ className, hideIcon, ...props }: TextLinkProps) {
  const { children, href, rel, target, onMouseEnter, onMouseLeave, ...rest } =
    props
  const isExternal = isExternalHttpHref(href)
  const iconRef = useRef<ArrowUpRightIconHandle>(null)

  if (isInternalHref(href)) {
    return (
      <Link
        className={cn("text-link", className)}
        href={href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      className={cn("text-link", className)}
      href={typeof href === "string" ? href : "#"}
      target={isExternal ? "_blank" : target}
      rel={isExternal ? "noreferrer noopener" : rel}
      onMouseEnter={(e) => {
        iconRef.current?.startAnimation()
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        iconRef.current?.stopAnimation()
        onMouseLeave?.(e)
      }}
      {...rest}
    >
      {children}
      {isExternal && !hideIcon ? (
        <span className="external-icon">
          <ArrowUpRightIcon ref={iconRef} size={14} />
        </span>
      ) : null}
    </a>
  )
}
