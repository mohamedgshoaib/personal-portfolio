"use client";

import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";
import { Avatar } from "./avatar";
import { Icon } from "@/components/ui/icon";
import {
  Location06Icon,
  Linkedin02Icon,
  GithubIcon,
  NewTwitterIcon,
  DocumentAttachmentIcon,
  Message01Icon,
} from "@hugeicons/core-free-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipPanel,
} from "@/components/animate-ui/components/base/tooltip";

export function Introduction() {
  const { personal } = portfolioData;

  return (
    <section className="pt-16 pb-16 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-8">
          {/* Header: Image + Name/Title/Location */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-6">
            <div className="flex shrink-0 justify-center md:justify-start">
              <div className="w-24 h-24 md:w-28 md:h-28">
                <Avatar src={personal.avatar} alt={`${personal.name} avatar`} />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2 text-center md:text-left md:justify-start">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {personal.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {personal.jobTitle}
              </p>
              <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground md:justify-start">
                <Icon icon={Location06Icon} size={14} strokeWidth={2} />
                Cairo, Egypt
              </div>
            </div>
          </div>

          {/* Bio - full width */}
          <p className="text-lg leading-relaxed text-foreground">
            {personal.bio}
          </p>

          {/* CTAs + Social links */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            {/* View CV */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <Icon icon={DocumentAttachmentIcon} size={16} strokeWidth={2} />
              <span>View</span>
              <Link
                href={personal.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                My CV
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            </div>

            {/* Social links as text */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <Icon icon={GithubIcon} size={16} strokeWidth={2} />
              <span>Visit</span>
              <Link
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                My GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            </div>

            {/* Contact links */}
            <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <Icon icon={Message01Icon} size={16} strokeWidth={2} />
              <span>Reach me at</span>
              <Link
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
              <span>or</span>
              <Link
                href={personal.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                X<span className="sr-only"> (opens in a new tab)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
