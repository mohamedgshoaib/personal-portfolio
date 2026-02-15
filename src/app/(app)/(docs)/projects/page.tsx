import type { Metadata } from "next";

import { BackButton } from "@/components/ui/back-button";
import { ProjectList } from "@/features/portfolio/components/projects/project-list";
import { PROJECTS } from "@/features/portfolio/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects showcasing web development, design, and software engineering work.",
};

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="flex items-center justify-between p-2 pl-4">
        <BackButton fallbackHref="/" label="Home" />
      </div>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="p-4">
        <p className="text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <ProjectList
        projects={PROJECTS}
        className="screen-line-before screen-line-after pt-4"
      />

      <div className="h-4" />
    </div>
  );
}
