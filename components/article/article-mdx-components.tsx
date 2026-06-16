/* eslint-disable react-doctor/no-multi-comp, react-doctor/only-export-components -- MDX component maps are intentionally multi-component with a non-component export */
import type { MDXComponents } from "mdx/types"
import type * as React from "react"

import { ArticleCodeBlock } from "@/components/article/article-code-block"
import { ArticleImage } from "@/components/article/article-image"
import { Kbd } from "@/components/ui/kbd"
import { cn } from "@/lib/utils"

export const articleMDXComponents = {
  a: ArticleLink,
  blockquote: ArticleBlockquote,
  code: ArticleCode,
  img: ArticleImage,
  kbd: Kbd,
  ol: ArticleOrderedList,
  pre: ArticleCodeBlock,
  ul: ArticleUnorderedList,
} satisfies MDXComponents

function ArticleLink({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a">): React.ReactElement {
  return (
    <a
      className={cn(
        "text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

function ArticleBlockquote({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"blockquote">): React.ReactElement {
  return (
    <blockquote
      className={cn(
        "pl-4 text-foreground [box-shadow:inset_2px_0_0_var(--border)]",
        className
      )}
      {...props}
    />
  )
}

function ArticleCode({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">): React.ReactElement {
  const isBlockCode = className?.includes("language-")

  return (
    <code
      className={cn(
        "font-mono",
        isBlockCode
          ? "text-code-foreground"
          : "rounded-sm bg-code-highlight px-1 py-0.5 text-foreground",
        className
      )}
      {...props}
    />
  )
}

function ArticleUnorderedList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">): React.ReactElement {
  return <ul className={cn("list-disc space-y-2 pl-5", className)} {...props} />
}

function ArticleOrderedList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ol">): React.ReactElement {
  return (
    <ol className={cn("list-decimal space-y-2 pl-5", className)} {...props} />
  )
}
