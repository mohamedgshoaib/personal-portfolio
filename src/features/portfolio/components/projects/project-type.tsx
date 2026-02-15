import type { ProjectType } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";

interface ProjectTypeProps {
  type: ProjectType;
  className?: string;
}

const typeConfig = {
  "Client Work": {
    textColor: "text-white",
  },
  "Open Source": {
    textColor: "text-white",
  },
  Agency: {
    textColor: "text-white",
  },
};

export function ProjectType({ type, className }: ProjectTypeProps) {
  const config = typeConfig[type];

  return (
    <div
      className={cn(
        "absolute left-2 top-2 z-10 text-xs font-medium transition-all duration-300 ease-premium group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-105",
        config.textColor,
        "drop-shadow-[0_0_1px_rgba(0,0,0,1)] dark:drop-shadow-[0_0_1px_rgba(0,0,0,0.9)]",
        "group-hover:drop-shadow-[0_0_8px_rgba(0,0,0,1)] group-hover:dark:drop-shadow-[0_0_8px_rgba(0,0,0,1)]",
        className
      )}
    >
      {type}
    </div>
  );
}
