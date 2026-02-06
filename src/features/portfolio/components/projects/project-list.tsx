import { cn } from "@/lib/utils";

import type { Project } from "../../types/projects";
import { ProjectGridItem } from "./project-grid-item";

export function ProjectList({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  const wrapperClasses = className ?? "py-4";

  return (
    <div className={cn("relative", wrapperClasses)}>
      <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-edge" />
        <div className="border-l border-edge" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectGridItem
            key={project.slug}
            project={project}
            shouldPreloadImage={index <= 4}
          />
        ))}

        {projects.length === 0 && (
          <div className="screen-line-before screen-line-after p-4">
            <p className="font-mono text-sm">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
