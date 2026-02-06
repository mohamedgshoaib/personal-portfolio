import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";
import { FlipSentences } from "@/components/flip-sentences";
import { UTM_PARAMS } from "@/config/site";
import { USER } from "@/features/portfolio/data/user";
import { addQueryParams } from "@/utils/url";

export function ProfileHeader() {
  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="absolute top-[-3.5px] left-[-4.5px] size-2 rounded-xs border bg-popover" />
      <div className="absolute top-[-3.5px] right-[-4.5px] size-2 rounded-xs border bg-popover" />

      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-0.75">
          <img
            className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>

        {/* <a
          href="https://vietnam.gov.vn/about-viet-nam"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 -left-px"
        >
          <svg
            className="h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Flag of Viet Nam</title>
            <rect width="30" height="20" fill="#F00" />
            <polygon
              points="15,4 11.47,14.85 20.71,8.15 9.29,8.15 18.53,14.85"
              fill="#FFEB00"
            />
          </svg>
        </a> */}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex flex-col pl-4">
            <div className="flex items-center gap-2">
              <h1 className="-translate-y-px text-3xl font-semibold">
                {USER.displayName}
              </h1>

              {USER.affiliateBadge && (
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <a
                        className="relative flex after:absolute after:inset-0 after:ring after:ring-black/10 after:ring-inset dark:after:ring-white/15"
                        href={addQueryParams(
                          USER.affiliateBadge.url,
                          UTM_PARAMS
                        )}
                        target="_blank"
                        rel="noopener"
                      />
                    }
                  >
                    <Image
                      src={USER.affiliateBadge.logo}
                      alt={USER.affiliateBadge.name}
                      width={20}
                      height={20}
                      quality={100}
                      unoptimized
                    />
                  </TooltipTrigger>

                  <TooltipContent>
                    <p>
                      Co-Founder @{" "}
                      <a
                        className="font-medium underline-offset-4 hover:underline"
                        href={addQueryParams(
                          USER.affiliateBadge.url,
                          UTM_PARAMS
                        )}
                        target="_blank"
                        rel="noopener"
                      >
                        {USER.affiliateBadge.name}
                      </a>
                    </p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>

            <h2 className="mt-0.5 text-lg font-medium text-primary/90">
              {USER.jobTitle}
            </h2>
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.flipSentences}
            </FlipSentences>
          </div>
        </div>
      </div>
    </div>
  );
}
