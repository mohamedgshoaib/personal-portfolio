import type { Project } from "../types/projects";
import { PROJECTS } from "./projects";

export function getAllProjects() {
  return PROJECTS;
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function findNeighbourProject(projects: Project[], slug: string) {
  const len = projects.length;

  for (let i = 0; i < len; ++i) {
    if (projects[i].slug === slug) {
      return {
        previous: i > 0 ? projects[i - 1] : null,
        next: i < len - 1 ? projects[i + 1] : null,
      };
    }
  }

  return { previous: null, next: null };
}
