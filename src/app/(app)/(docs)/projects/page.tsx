import type { Metadata } from "next";

import { ProjectList } from "@/features/portfolio/components/projects/project-list";
import { PROJECTS } from "@/features/portfolio/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A collection of projects showcasing web development, design, and software engineering work.",
};

export default function Page() {
  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Projects</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
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
