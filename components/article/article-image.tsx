import Image from "next/image"
import type * as React from "react"

import { writingImageRatio } from "@/lib/content/writing-media"
import { cn } from "@/lib/utils"

type ArticleImageProps = Omit<
  React.ComponentPropsWithoutRef<"img">,
  "height" | "src" | "width"
> & {
  height?: number
  src?: string
  width?: number
}

export function ArticleImage({
  alt = "",
  className,
  height = writingImageRatio.height,
  src,
  width = writingImageRatio.width,
  ...props
}: ArticleImageProps): React.ReactElement | null {
  if (!src) {
    return null
  }

  return (
    <Image
      alt={alt}
      className={cn(
        writingImageRatio.tailwindClass,
        "h-auto w-full rounded-lg bg-muted object-cover outline outline-1 -outline-offset-1 outline-[rgba(0,0,0,0.10)] dark:outline-[rgba(255,255,255,0.10)]",
        className
      )}
      height={height}
      sizes="(max-width: 768px) 100vw, 640px"
      src={src}
      width={width}
      {...props}
    />
  )
}
