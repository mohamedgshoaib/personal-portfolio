import Link from "next/link"
import type { ReactNode } from "react"

import { Avatar } from "@/components/home/avatar"
import { DisclosureList } from "@/components/home/disclosure-list"
import { TextLink } from "@/components/home/text-link"
import {
  experiences,
  posts,
  projects,
  siteProfile,
  socialLinks,
  technologies,
} from "@/lib/site-content"

const latestPost = posts[0]

function HomeSection({
  id,
  label,
  children,
}: {
  id?: string
  label: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-5">
      <p className="text-sm font-medium text-foreground">{label}</p>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <div className="space-y-12 sm:space-y-16">
        <header className="flex items-center gap-4">
          <Avatar />
          <div className="space-y-0.5">
            <p className="font-heading text-base font-medium text-foreground">
              {siteProfile.name}
            </p>
            <p className="text-sm text-muted-foreground">{siteProfile.role}</p>
          </div>
        </header>

        <HomeSection id="about" label="About">
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            <p>{siteProfile.intro}</p>
            <p>{siteProfile.bio}</p>
            <p>Open to {siteProfile.opportunities.join(", ").toLowerCase()}.</p>
            <p>
              Reach me on{" "}
              <TextLink
                href="https://x.com/mo0hamed_gamal"
                className="text-inherit"
              >
                X
              </TextLink>{" "}
              or check out my{" "}
              <TextLink
                href="https://github.com/mohamed-g-shoaib"
                className="text-inherit"
              >
                GitHub
              </TextLink>
              .
            </p>
          </div>
        </HomeSection>

        <HomeSection id="projects" label="Projects">
          <div className="space-y-5">
            <DisclosureList type="projects" items={projects} />
            <TextLink href="/projects" className="text-muted-foreground">
              View all projects
            </TextLink>
          </div>
        </HomeSection>

        <HomeSection id="experience" label="Experience">
          <DisclosureList type="experience" items={experiences} />
        </HomeSection>

        <HomeSection id="stack" label="Stack">
          <p className="max-w-[33rem] text-[0.96rem] leading-8 text-muted-foreground">
            {technologies.map((item) => item.name).join(", ")}.
          </p>
        </HomeSection>

        <HomeSection id="writing" label="Writing">
          <div className="max-w-[33rem] space-y-5">
            <article className="space-y-1.5">
              <Link
                href={`/writing/${latestPost.slug}`}
                className="font-heading text-lg font-medium text-foreground decoration-border underline-offset-4 hover:underline"
              >
                {latestPost.title}
              </Link>
              <p className="text-[0.96rem] leading-8 text-muted-foreground">
                {latestPost.summary}
              </p>
            </article>
            <TextLink href="/writing" className="text-muted-foreground">
              View all writing
            </TextLink>
          </div>
        </HomeSection>

        <section id="contact" className="scroll-mt-24 space-y-6 pt-4">
          <div className="space-y-4 text-center">
            <p className="text-sm text-muted-foreground">
              Want to get in touch?
            </p>
            <a
              href="mailto:mohamed.g.shoaib@gmail.com"
              className="inline-flex min-h-11 items-center justify-center rounded-[1.15rem] bg-muted px-6 py-3 text-lg text-foreground transition-[background-color,color] duration-150 ease-[var(--ease-out)] hover:bg-secondary"
            >
              mohamed.g.shoaib@gmail.com
            </a>
          </div>
        </section>
      </div>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p>Based in {siteProfile.location}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
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
        </div>
      </footer>
    </main>
  )
}
