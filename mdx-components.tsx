import * as React from "react"
import type { MDXComponents } from "mdx/types"

import { TextLink } from "@/components/home/text-link"
import { cn } from "@/lib/utils"

function getCodeLanguage(className?: string) {
  const match = className?.match(/language-([\w-]+)/)
  return match?.[1] ?? null
}

function Pre({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"pre">) {
  const child = React.Children.only(children)
  const language =
    React.isValidElement<{ className?: string }>(child) &&
    typeof child.props.className === "string"
      ? getCodeLanguage(child.props.className)
      : null

  return (
    <div className="overflow-hidden rounded-[1rem] border border-border/80 bg-muted/30">
      <div className="border-b border-border/70 px-4 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
        {language ?? "text"}
      </div>
      <pre
        className={cn(
          "overflow-x-auto px-4 py-4 text-sm leading-7 text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  )
}

function Code({ className, ...props }: React.ComponentPropsWithoutRef<"code">) {
  if (getCodeLanguage(className)) {
    return <code className={className} {...props} />
  }

  return (
    <code
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 text-[0.9em] text-foreground",
        className
      )}
      {...props}
    />
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children, className, ...props }) => (
      <h2
        className={cn(
          "pt-4 font-heading text-lg font-medium text-foreground",
          className
        )}
        {...props}
      >
        {children}
      </h2>
    ),
    p: ({ children, className, ...props }) => (
      <p
        className={cn(
          "text-[0.96rem] leading-8 text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </p>
    ),
    a: ({ children, className, href = "#", ...props }) => (
      <TextLink href={href} className={cn("text-base", className)} {...props}>
        {children}
      </TextLink>
    ),
    ul: ({ children, className, ...props }) => (
      <ul
        className={cn(
          "list-disc space-y-3 pl-5 text-[0.96rem] leading-8 text-muted-foreground marker:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, className, ...props }) => (
      <ol
        className={cn(
          "space-y-3 pl-5 text-[0.96rem] leading-8 text-muted-foreground marker:text-muted-foreground",
          className
        )}
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, className, ...props }) => (
      <li className={cn("pl-1", className)} {...props}>
        {children}
      </li>
    ),
    pre: Pre,
    code: Code,
    ...components,
  }
}
