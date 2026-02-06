import { GithubIcon, GlobeIcon, NewspaperIcon } from "lucide-react";

import { UTM_PARAMS } from "@/config/site";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";

interface ProjectLinksProps {
  project: Project;
  className?: string;
}

export function ProjectLinks({ project, className }: ProjectLinksProps) {
  const links = [
    {
      label: "Github",
      href: project.github,
      icon: GithubIcon,
    },
    {
      label: "Website",
      href: project.link,
      icon: GlobeIcon,
    },
    {
      label: "Post",
      href: project.post,
      icon: NewspaperIcon,
    },
  ].filter((link) => !!link.href);

  if (links.length === 0) return null;

  return (
    <div
      className={cn(
        "screen-line-before screen-line-after flex divide-x divide-edge",
        className
      )}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={addQueryParams(link.href!, UTM_PARAMS)}
          target="_blank"
          rel="noopener"
          className="flex flex-1 items-center justify-center gap-2.5 py-4 text-sm font-medium transition-all duration-300 ease-premium select-none hover:bg-accent hover:text-foreground active:scale-[0.98] active:bg-accent-muted"
        >
          <link.icon className="size-4.5" />
          {link.label}
        </a>
      ))}
    </div>
  );
}
