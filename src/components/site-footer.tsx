import { SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { cn } from "@/lib/utils";

import { Icons } from "./icons";
import { MyWordmark } from "./my-wordmark";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        <div className="mb-4 flex justify-center px-4 selection:bg-accent selection:text-foreground">
          <MyWordmark className="wordmark h-8 w-auto text-brand" />
        </div>

        <p className="mb-1 px-4 text-center text-sm text-balance text-muted-foreground">
          Inspired by{" "}
          <a
            className="link"
            href="https://x.com/iamncdai"
            target="_blank"
            rel="noopener"
          >
            ncdai
          </a>
          .
        </p>

        <p className="mb-4 px-4 text-center text-sm text-balance text-muted-foreground">
          The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = getIconForTitle(link.title);
              const isLast = index === SOCIAL_LINKS.length - 1;

              return (
                <div key={link.href} className="flex items-center gap-3">
                  <a
                    className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.title}
                  >
                    {Icon ? (
                      <Icon className="size-4" />
                    ) : (
                      <span className="text-xs">{link.title}</span>
                    )}
                  </a>
                  {!isLast && <Separator />}
                </div>
              );
            })}
          </div>

          <div className="absolute top-[-3.5px] left-[-4.5px] z-1 size-2 rounded-xs border bg-popover" />
          <div className="absolute top-[-3.5px] right-[-4.5px] z-1 size-2 rounded-xs border bg-popover" />
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />;
}

function getIconForTitle(title: string) {
  const normalized = title.toLowerCase();

  if (normalized.includes("twitter") || normalized === "x") return Icons.x;
  if (normalized.includes("github")) return Icons.github;
  if (normalized.includes("linkedin")) return Icons.linkedin;

  return undefined;
}
