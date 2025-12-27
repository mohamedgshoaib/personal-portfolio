import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { ExperienceItem } from "@/lib/portfolio-data";

interface ExperienceFallbackProps {
  items: readonly ExperienceItem[];
}

export function ExperienceFallback({ items }: ExperienceFallbackProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="relative border-y border-border bg-card">
          <div className="px-4 py-3 flex items-center gap-3">
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={32}
              height={32}
              className="object-contain shrink-0 opacity-75"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="text-base font-semibold">{item.title}</h4>
                <Badge
                  variant="outline"
                  className="h-auto text-[10px] px-1.5 py-0"
                >
                  {item.type === "internship" ? "Internship" : "Work"}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{item.company}</span>
                <span>•</span>
                <span>{item.period}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
