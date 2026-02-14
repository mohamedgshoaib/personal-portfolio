import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { UTM_PARAMS } from "@/config/site";
import type { Project } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

export function ProjectGridItem({
  project,
  shouldPreloadImage,
  isHome,
}: {
  project: Project;
  shouldPreloadImage?: boolean;
  isHome?: boolean;
}) {
  const detailUrl = `/projects/${project.slug}${isHome ? "?from=home" : ""}`;

  return (
    <div
      className={cn(
        "group flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      <div className="relative flex flex-col">
        {/* Card-level Link (Top Section) */}
        <Link
          href={detailUrl}
          className="absolute inset-0 z-20 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          aria-label={`View ${project.title} details`}
        />

        {project.screenshot && (
          <div className="relative aspect-4/3 overflow-hidden rounded-xl border border-edge bg-muted/30 select-none dark:bg-muted/10">
            {/* Background Layer (Candy / Asset) */}
            {project.background && (
              <div className="absolute inset-0 opacity-15 grayscale transition-all duration-500 ease-premium group-hover:opacity-100 group-hover:grayscale-0">
                <Image
                  src={project.background}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-black/40" />
              </div>
            )}

            {/* Screenshot Container - 4:3 optimized */}
            <div className="relative flex h-full w-full items-end justify-center px-6 pt-10 pb-0 transition-transform duration-500 ease-premium group-hover:scale-[1.03] sm:px-8 sm:pt-14">
              <div className="relative h-full w-full overflow-hidden rounded-t-lg ring-1 ring-black/10 transition-all duration-500 ease-premium dark:ring-white/10">
                <Image
                  src={project.screenshot}
                  alt={project.title}
                  width={1200}
                  height={900}
                  quality={100}
                  priority={shouldPreloadImage}
                  className="h-full w-full object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 p-2 pb-0">
          <Link
            href={detailUrl}
            className="w-fit rounded outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <h3 className="text-lg leading-snug font-medium text-balance underline-offset-4">
              {project.title}
            </h3>
          </Link>

          {project.description && (
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {project.description.split("\n\n")[0].replace(/^[\s\n]+/, "")}
            </p>
          )}
        </div>
      </div>

      <div className="relative z-30 flex flex-col gap-2 p-2 pt-0">
        <div className="mt-2 flex items-center gap-4">
          <Link
            href={detailUrl}
            className="group/link inline-flex items-center gap-2 rounded text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Case Study
            <ArrowRightIcon className="size-4 text-current transition-transform duration-300 ease-premium group-hover/link:translate-x-1" />
          </Link>

          <a
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener"
            className="group/link inline-flex items-center gap-2 rounded text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Visit Website
            <ArrowUpRightIcon className="size-4 text-current transition-transform duration-300 ease-premium group-hover/link:rotate-45" />
          </a>
        </div>
      </div>
    </div>
  );
}
