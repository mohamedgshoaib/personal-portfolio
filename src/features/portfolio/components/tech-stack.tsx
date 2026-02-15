import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { NextjsIconLight } from "@/components/ui/svgs/nextjsIconLight";
import { ReactDark } from "@/components/ui/svgs/reactDark";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi";
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark";
import { Supabase } from "@/components/ui/svgs/supabase";
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss";
import { Typescript } from "@/components/ui/svgs/typescript";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import type { TechStack } from "../types/tech-stack";
import { Panel, PanelHeader, PanelTitle } from "./panel";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
type IconEntry = IconComponent | { light: IconComponent; dark: IconComponent };

const isThemedEntry = (
  entry: IconEntry
): entry is { light: IconComponent; dark: IconComponent } =>
  typeof entry === "object" && "light" in entry && "dark" in entry;

const techIconMap: Record<TechStack["key"], IconEntry> = {
  typescript: Typescript,
  nextjs2: {
    light: NextjsIconLight,
    dark: NextjsIconDark,
  },
  react: {
    light: ReactLight,
    dark: ReactDark,
  },
  supabase: Supabase,
  tailwindcss: Tailwindcss,
  "shadcn-ui": {
    light: ShadcnUi,
    dark: ShadcnUiDark,
  },
};

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-edge"></div>
          <div className="border-l border-edge"></div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {TECH_STACK.map((tech) => {
            const iconEntry = techIconMap[tech.key];
            const LightIcon = isThemedEntry(iconEntry)
              ? iconEntry.light
              : (iconEntry as IconComponent);
            const DarkIcon = isThemedEntry(iconEntry)
              ? iconEntry.dark
              : (iconEntry as IconComponent);

            return (
              <a
                key={tech.key}
                className={cn(
                  "group flex cursor-pointer items-center gap-4 p-4 pr-2 transition-[background-color] ease-out hover:bg-accent-muted",
                  "max-sm:screen-line-before max-sm:screen-line-after max-sm:first:before:content-none",
                  "sm:nth-[1]:before:content-none sm:nth-[2]:before:content-none sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
                )}
                href={tech.href}
                target="_blank"
                rel="noopener"
                aria-label={tech.title}
              >
                <div className="relative size-12 shrink-0">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-background corner-squircle supports-corner-shape:rounded-[50%]">
                    {isThemedEntry(iconEntry) ? (
                      <>
                        <LightIcon className="hidden size-8 [html.light_&]:block" />
                        <DarkIcon className="hidden size-8 [html.dark_&]:block" />
                      </>
                    ) : (
                      <LightIcon className="size-8" />
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/15 supports-corner-shape:rounded-[50%]" />
                </div>

                <div className="flex-1">
                  <h3 className="flex items-center font-medium underline-offset-4 group-hover:underline">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.categories.join(" · ")}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
