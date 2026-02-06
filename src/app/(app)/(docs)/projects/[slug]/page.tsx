import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
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
import { BackButton } from "@/components/ui/back-button";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { Tag } from "@/components/ui/tag";
import { ProseMono } from "@/components/ui/typography";
import { SITE_INFO } from "@/config/site";
import { ProjectKeyboardShortcuts } from "@/features/portfolio/components/projects/project-keyboard-shortcuts";
import { ProjectLinks } from "@/features/portfolio/components/projects/project-links";
import { ProjectShareMenu } from "@/features/portfolio/components/projects/project-share-menu";
import {
  findNeighbourProject,
  getAllProjects,
  getProjectBySlug,
} from "@/features/portfolio/data/project-helpers";
import { USER } from "@/features/portfolio/data/user";
import type { Project } from "@/features/portfolio/types/projects";
import { cn } from "@/lib/utils";

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
  searchParams,
}: {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await params;
  const { from } = await searchParams;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const { previous, next } = findNeighbourProject(allProjects, slug);

  const backHref = from === "home" ? "/" : "/projects";
  const backLabel = from === "home" ? "Home" : "Projects";

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
        <BackButton fallbackHref={backHref} label={backLabel} />

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

      <div className="px-4 sm:px-6">
        <h1 className="screen-line-after mb-4 text-3xl font-semibold">
          {project.title}
        </h1>

        {project.screenshot && (
          <div className="pb-4">
            <div className="relative overflow-hidden rounded-xl border border-edge select-none">
              <Image
                src={project.screenshot}
                alt={project.title}
                width={1800}
                height={1350}
                quality={100}
                priority
                className="aspect-4/3 w-full object-cover object-top"
                unoptimized
              />

              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
            </div>
          </div>
        )}

        <ProjectLinks project={project} className="-mx-4 mb-4 sm:-mx-6" />

        {project.description && (
          <ProseMono className="screen-line-after py-4">
            <Markdown>{project.description}</Markdown>
          </ProseMono>
        )}

        {project.skills.length > 0 && (
          <div className="pb-4">
            <h2 className="screen-line-after mb-3 text-3xl font-semibold">
              Tech Stack
            </h2>
            <ul className="flex flex-wrap gap-1.5">
              {project.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="screen-line-before h-4 w-full" />
    </>
  );
}
