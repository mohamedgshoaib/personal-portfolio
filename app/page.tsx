import Image from "next/image"
import Link from "next/link"

import { Avatar } from "@/components/home/avatar"
import { Section } from "@/components/home/section"
import { TextLink } from "@/components/home/text-link"
import { buttonVariants } from "@/components/ui/button-styles"
import {
  experiences,
  posts,
  projects,
  siteProfile,
  socialLinks,
  technologies,
} from "@/lib/site-content"
import { cn } from "@/lib/utils"

const featuredProject = projects[0]
const latestPost = posts[0]

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-4xl flex-col px-6 pt-10 pb-20 sm:px-8 sm:pt-14">
      <section className="space-y-8 border-b border-border/80 pb-8 sm:space-y-10 sm:pb-12">
        <div className="flex items-start gap-4 sm:gap-5">
          <Avatar />
          <div className="min-w-0 space-y-2 pt-1">
            <div className="space-y-1">
              <p className="font-heading text-lg font-medium text-foreground sm:text-xl">
                {siteProfile.name}
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                <span>{siteProfile.role}</span>
                <span className="text-border">/</span>
                <span>{siteProfile.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="max-w-3xl font-heading text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
            {siteProfile.intro}
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[0.96rem]">
            {siteProfile.bio}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:mohamed.g.shoaib@gmail.com"
            className={cn(buttonVariants())}
          >
            Get in touch
          </a>
          <TextLink href="/writing">Read writing</TextLink>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {socialLinks.map((link) => (
            <TextLink
              key={link.label}
              href={link.href}
              className="text-muted-foreground"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
      </section>

      <Section
        eyebrow="Work"
        title="Selected work"
        description="A small selection of production work focused on performance, localization, and durable frontend architecture."
      >
        <article className="space-y-5">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h2 className="font-heading text-xl font-medium text-foreground sm:text-2xl">
                {featuredProject.name}
              </h2>
              <span className="rounded-full border border-border/80 bg-secondary px-2.5 py-1 text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                {featuredProject.status}
              </span>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-foreground/88 sm:text-[0.96rem]">
              {featuredProject.summary}
            </p>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[0.95rem]">
              {featuredProject.details}
            </p>
          </div>

          <Link
            href={featuredProject.href}
            className="group block overflow-hidden rounded-[calc(var(--radius)*1.8)] border border-border/75 bg-card shadow-[var(--surface-shadow-md)] transition-[border-color,transform] duration-200 ease-[var(--ease-out)] hover:border-foreground/12"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted/60">
              <Image
                src={featuredProject.image.src}
                alt={featuredProject.image.alt}
                fill
                sizes="(min-width: 1024px) 44rem, (min-width: 640px) calc(100vw - 10rem), calc(100vw - 3rem)"
                className="object-cover object-top transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.01]"
                priority
              />
            </div>
          </Link>

          <div className="flex flex-wrap gap-2 pt-1">
            {featuredProject.architecture.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/75 bg-background/80 px-2.5 py-1 text-xs text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>

          <TextLink href={featuredProject.href}>Visit project</TextLink>
        </article>
      </Section>

      <Section
        eyebrow="Experience"
        title="Work history"
        description="Compact experience notes focused on craft, quality, and how I think about frontend work."
      >
        <div className="space-y-6">
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-2 border-b border-border/60 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
            >
              <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase sm:pt-1">
                {item.periodLabel}
              </p>
              <div className="space-y-2">
                <h3 className="font-heading text-base font-medium text-foreground">
                  {item.role}
                  <span className="text-muted-foreground">
                    {" "}
                    / {item.company}
                  </span>
                </h3>
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Writing"
        title="Learning in public"
        description="Notes on the things I build, learn, and occasionally break while working with the modern frontend stack."
      >
        <article className="group grid gap-5 rounded-[calc(var(--radius)*1.5)] border border-border/75 bg-card/60 p-4 shadow-[var(--surface-shadow-sm)] transition-[border-color,background-color] duration-150 ease-[var(--ease-out)] hover:border-foreground/12 hover:bg-card sm:grid-cols-[10rem_minmax(0,1fr)] sm:p-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius)*1.1)] border border-border/70 bg-muted/60">
            <Image
              src={latestPost.image.src}
              alt={latestPost.image.alt}
              fill
              sizes="(min-width: 640px) 10rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 space-y-3">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                {latestPost.publishedLabel}
              </p>
              <h3 className="font-heading text-lg font-medium text-foreground">
                {latestPost.title}
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              {latestPost.summary}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <TextLink href={`/writing/${latestPost.slug}`}>
                Read post
              </TextLink>
              <TextLink href="/writing" className="text-muted-foreground">
                All writing
              </TextLink>
            </div>
          </div>
        </article>
      </Section>

      <Section
        eyebrow="Stack"
        title="Core tools"
        description="A small set of technologies I keep returning to when building production frontend systems."
      >
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology.name}
              className="rounded-full border border-border/75 bg-background/85 px-3 py-1.5 text-sm text-muted-foreground shadow-[var(--surface-shadow-sm)]"
            >
              {technology.name}
            </span>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Contact"
        title="Open to thoughtful work"
        description="Currently interested in jobs, freelance opportunities, and open source collaborations."
        className="mb-12"
      >
        <div className="space-y-5">
          <div className="rounded-[calc(var(--radius)*1.8)] border border-border/80 bg-card px-5 py-5 shadow-[var(--surface-shadow-md)] sm:px-6 sm:py-6">
            <p className="text-sm leading-7 text-muted-foreground">
              If you&apos;re building something that needs speed, clarity, and a
              frontend that stays maintainable over time, I&apos;d love to hear
              about it.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="mailto:mohamed.g.shoaib@gmail.com"
                className={cn(buttonVariants())}
              >
                mohamed.g.shoaib@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {siteProfile.opportunities.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </Section>

      <footer className="flex flex-col gap-4 border-t border-border/80 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p className="font-heading text-foreground">{siteProfile.name}</p>
          <p>
            {siteProfile.role} based in {siteProfile.location}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {socialLinks.map((link) => (
            <TextLink
              key={link.label}
              href={link.href}
              className="text-muted-foreground"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
      </footer>
    </main>
  )
}
