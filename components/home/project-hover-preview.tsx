"use client"

import Image from "next/image"

import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from "@/components/ui/preview-card"
import type { Project } from "@/lib/content/site-content"

export function ProjectHoverPreview({
  children,
  item,
}: {
  children: React.ReactElement
  item: Project
}) {
  return (
    <PreviewCard>
      <PreviewCardTrigger>{children}</PreviewCardTrigger>
      <PreviewCardContent
        side="bottom"
        align="center"
        sideOffset={-10}
        className="w-[min(32rem,80vw)]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 640px) 32rem, 80vw"
            className="object-cover shadow-none!"
          />
        </div>
      </PreviewCardContent>
    </PreviewCard>
  )
}
