"use client";

import { useRouter } from "next/navigation";
import { useHotkeys } from "react-hotkeys-hook";

import type { Project } from "@/features/portfolio/types/projects";

export function ProjectKeyboardShortcuts({
  basePath,
  hrefSuffix,
  previous,
  next,
}: {
  basePath: string;
  hrefSuffix?: string;
  previous: Project | null;
  next: Project | null;
}) {
  const router = useRouter();

  const navigate = (project: Project | null) => {
    if (project) {
      router.replace(`${basePath}/${project.slug}${hrefSuffix ?? ""}`);
    }
  };

  useHotkeys("ArrowRight", (event) => {
    if (event.defaultPrevented) {
      return;
    }

    navigate(next);
  });

  useHotkeys("ArrowLeft", (event) => {
    if (event.defaultPrevented) {
      return;
    }

    navigate(previous);
  });

  return null;
}
