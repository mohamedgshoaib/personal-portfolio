import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GithubIcon,
  LinkIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { WebPage as PageSchema, WithContext } from "schema-dts";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Tag } from "@/components/ui/tag";
import { ProseMono } from "@/components/ui/typography";
import { SITE_INFO, UTM_PARAMS } from "@/config/site";
import { ProjectKeyboardShortcuts } from "@/features/portfolio/components/projects/project-keyboard-shortcuts";
import { ProjectShareMenu } from "@/features/portfolio/components/projects/project-share-menu";
import {
  findNeighbourProject,
  getAllProjects,
  getProjectBySlug,
} from "@/features/portfolio/data/project-helpers";
import { USER } from "@/features/portfolio/data/user";
import type { Project } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";
import { addQueryParams } from "@/utils/url";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  const { title, description, screenshot } = project;
  const projectUrl = `/projects/${project.slug}`;
  const ogImage = screenshot || `/og/simple?title=${encodeURIComponent(title)}`;

  return {
    title,
    description: description
      ? description.split("\n\n")[0].replace(/^[\s\n]+/, "")
      : `${title} - Project showcase`,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      url: projectUrl,
      type: "website",
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },
  };
}

function getPageJsonLd(project: Project): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: project.title,
    description: project.description
      ? project.description.split("\n\n")[0].replace(/^[\s\n]+/, "")
      : undefined,
    image: project.screenshot,
    url: `${SITE_INFO.url}/projects/${project.slug}`,
    author: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const { previous, next } = findNeighbourProject(allProjects, slug);

  return (
    <>
      <ProjectKeyboardShortcuts
        basePath="/projects"
        previous={previous}
        next={next}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd(project)).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 rounded-lg px-0 font-mono text-muted-foreground"
          variant="link"
          asChild
        >
          <Link href="/projects">
            <ArrowLeftIcon />
            Projects
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <ProjectShareMenu
            title={project.title}
            url={`/projects/${project.slug}`}
          />

          {previous && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary" size="icon-sm" asChild>
                    <Link href={`/projects/${previous.slug}`} />
                  </Button>
                }
              >
                <ArrowLeftIcon />
                <span className="sr-only">Previous</span>
              </TooltipTrigger>

              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Previous Project
                  <Kbd>
                    <ArrowLeftIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}

          {next && (
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="secondary" size="icon-sm" asChild>
                    <Link href={`/projects/${next.slug}`} />
                  </Button>
                }
              >
                <span className="sr-only">Next</span>
                <ArrowRightIcon />
              </TooltipTrigger>

              <TooltipContent className="pr-2 pl-3">
                <div className="flex items-center gap-3">
                  Next Project
                  <Kbd>
                    <ArrowRightIcon />
                  </Kbd>
                </div>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <div className="px-4">
        <h1 className="screen-line-after mb-4 text-3xl font-semibold">
          {project.title}
        </h1>

        {project.screenshot && (
          <div className="screen-line-after pb-4">
            <div className="relative select-none [&_img]:aspect-1200/630 [&_img]:rounded-xl">
              <Image
                src={project.screenshot}
                alt={project.title}
                width={1200}
                height={630}
                quality={100}
                priority
                unoptimized
              />

              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pb-4">
          {project.link && (
            <Button className="gap-2" variant="default" size="sm" asChild>
              <a
                href={addQueryParams(project.link, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                <LinkIcon className="size-4" />
                Visit Website
              </a>
            </Button>
          )}

          {project.github && (
            <Button className="gap-2" variant="secondary" size="sm" asChild>
              <a
                href={addQueryParams(project.github, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                <GithubIcon className="size-4" />
                View Source
              </a>
            </Button>
          )}
        </div>

        {project.description && (
          <ProseMono className="screen-line-after pb-4">
            <Markdown>{project.description}</Markdown>
          </ProseMono>
        )}

        {project.skills.length > 0 && (
          <div className="screen-line-after pb-4">
            <h2 className="mb-3 text-lg font-semibold">Tech Stack</h2>
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-2 pb-4">
          <dl className="text-sm">
            <dt className="font-semibold text-muted-foreground">Period</dt>
            <dd className="mt-1">
              {project.period.start}
              {project.period.end && ` — ${project.period.end}`}
              {!project.period.end && " — Present"}
            </dd>
          </dl>
        </div>
      </div>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}
