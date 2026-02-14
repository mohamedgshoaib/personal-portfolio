import Image from "next/image";

import { FlipSentences } from "@/components/flip-sentences";
import { USER } from "@/features/portfolio/data/user";

export function ProfileHeader() {
  return (
    <div className="screen-line-before screen-line-after flex border-x border-edge">
      <div className="absolute top-[-3.5px] left-[-4.5px] size-2 rounded-xs border bg-popover" />
      <div className="absolute top-[-3.5px] right-[-4.5px] size-2 rounded-xs border bg-popover" />

      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-0.75">
          <Image
            className="size-30 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            width={160}
            height={160}
            priority
            quality={100}
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
        <div className="flex grow items-end pb-0.5 pl-4 sm:pb-1">
          <div className="line-clamp-1 font-mono text-[10px] text-muted-foreground/50 select-none sm:text-xs">
            {"text-3xl "}
            <span className="inline dark:hidden">text-stone-950</span>
            <span className="hidden dark:inline">text-stone-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex flex-col pl-4">
            <div className="flex items-center gap-2">
              <h1 className="-translate-y-px text-2xl font-semibold sm:text-3xl">
                {USER.displayName}
              </h1>
            </div>

            <h2 className="mt-0.5 text-lg font-medium text-primary/90">
              {USER.jobTitle}
            </h2>
          </div>

          <div className="flex h-9 items-center border-t border-edge py-0.5 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-xs text-balance text-muted-foreground sm:text-sm"
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
