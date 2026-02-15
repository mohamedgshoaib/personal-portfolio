import type { ProjectStatus } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";

interface ProjectStatusProps {
  status: ProjectStatus;
  className?: string;
}

const statusConfig = {
  live: {
    label: "Live",
    dotColor: "bg-green-500",
    textColor: "text-green-700 dark:text-green-400",
  },
  building: {
    label: "Building",
    dotColor: "bg-yellow-500",
    textColor: "text-yellow-700 dark:text-yellow-400",
  },
  soon: {
    label: "Soon",
    dotColor: "bg-blue-500",
    textColor: "text-blue-700 dark:text-blue-400",
  },
};

export function ProjectStatus({ status, className }: ProjectStatusProps) {
  const config = statusConfig[status];

  return (
    <div className={cn("flex items-center gap-1.5 text-sm font-medium", config.textColor, className)}>
      <div className="relative">
        <div
          className={cn(
            "size-1.5 rounded-full",
            config.dotColor,
            "animate-pulse"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 size-1.5 rounded-full opacity-75",
            config.dotColor,
            "animate-ping"
          )}
        />
      </div>
      <span className="text-sm">{config.label}</span>
    </div>
  );
}
