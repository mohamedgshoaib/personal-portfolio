import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { UTM_PARAMS } from "@/config/site";
import type { Project } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

export function ProjectGridItem({
  project,
  shouldPreloadImage,
}: {
  project: Project;
  shouldPreloadImage?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {project.screenshot && (
        <a
          href={addQueryParams(project.link, UTM_PARAMS)}
          className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl"
          target="_blank"
          rel="noopener"
        >
          <Image
            src={project.screenshot}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            priority={shouldPreloadImage}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </a>
      )}

      <div className="flex flex-col gap-2 p-2">
        <a
          href={addQueryParams(project.link, UTM_PARAMS)}
          target="_blank"
          rel="noopener"
          className="w-fit"
        >
          <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4 hover:underline">
            {project.title}
          </h3>
        </a>

        {project.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description.split("\n\n")[0].replace(/^[\s\n]+/, "")}
          </p>
        )}

        <Link
          href={`/projects/${project.slug}`}
          className="group/link mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium"
        >
          View Project
          <ArrowUpRightIcon className="size-4 text-current transition-[rotate] duration-300 group-hover/link:rotate-45" />
        </Link>
      </div>
    </div>
  );
}
