import type { Metadata } from "next"
import type { ReactNode } from "react"

import { Avatar } from "@/components/home/avatar"
import { ContactCopy } from "@/components/home/contact-copy"
import { DisclosureList } from "@/components/home/disclosure-list"
import { TextLink } from "@/components/home/text-link"
import { JsonLd } from "@/components/seo/json-ld"
import {
  createAbsoluteUrl,
  siteDescription,
  siteName,
  siteXHandle,
} from "@/lib/metadata/site-metadata"
import {
  createHomepageSchema,
  createPersonSchema,
  createWebsiteSchema,
} from "@/lib/metadata/schema"
import {
  featuredProjects,
  homeContent,
  siteProfile,
  socialLinks,
} from "@/lib/content/site-content"
import { posts } from "@/lib/content/writing"

const latestPost = posts[0] ?? null
const emailLink = socialLinks.find((link) => link.label === "Email")

export const metadata: Metadata = {
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    images: [createAbsoluteUrl("/opengraph-image")],
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [createAbsoluteUrl("/twitter-image")],
    creator: siteXHandle,
  },
}

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
      <p className="text-sm font-medium tracking-[-0.01em] text-foreground">
        {label}
      </p>
      {children}
    </section>
  )
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[42rem] flex-col px-6 pt-10 pb-16 sm:px-8 sm:pt-14">
      <JsonLd data={createWebsiteSchema()} />
      <JsonLd data={createPersonSchema()} />
      <JsonLd data={createHomepageSchema()} />
      <div className="space-y-12 sm:space-y-16">
        <header className="flex items-center gap-4">
          <Avatar />
          <div className="translate-y-px space-y-0.5">
            <p className="font-heading text-[1.06rem] font-medium tracking-[-0.012em] text-foreground sm:text-[1.12rem]">
              {siteProfile.name}
            </p>
            <p className="text-[0.96rem] text-muted-foreground">
              {siteProfile.role}
            </p>
          </div>
        </header>

        <HomeSection id="about" label="About">
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            <p>{siteProfile.intro}</p>
            <p>{siteProfile.bio}</p>
            <p>
              Reach me on{" "}
              <TextLink href="https://x.com/mo0hamed_gamal">X</TextLink>,
              connect on{" "}
              <TextLink href="https://www.linkedin.com/in/mohamed-g-shoaib/">
                LinkedIn
              </TextLink>
              , or check out my{" "}
              <TextLink href="https://github.com/mohamed-g-shoaib">
                GitHub
              </TextLink>
              .
            </p>
            <p>Based in {siteProfile.location}.</p>
          </div>
        </HomeSection>

        <HomeSection id="projects" label="Projects">
          <div className="space-y-5">
            <DisclosureList type="projects" items={featuredProjects} />
            <TextLink href="/projects">View all projects</TextLink>
          </div>
        </HomeSection>

        <HomeSection id="approach" label="Approach">
          <div className="max-w-[33rem] space-y-4 text-[0.96rem] leading-8 text-muted-foreground">
            {homeContent.approach.map((paragraph: string) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </HomeSection>

        <HomeSection id="writing" label="Writing">
          <div className="max-w-[33rem] space-y-5">
            {latestPost ? (
              <article className="space-y-1.5">
                <TextLink
                  href={`/writing/${latestPost.slug}`}
                  className="font-heading text-[1.03rem] font-medium tracking-[-0.01em]"
                >
                  {latestPost.title}
                </TextLink>
                <p className="text-[0.96rem] leading-8 text-muted-foreground">
                  {latestPost.summary}
                </p>
              </article>
            ) : (
              <p className="text-[0.96rem] leading-8 text-muted-foreground">
                No writing published yet.
              </p>
            )}
            <TextLink href="/writing">View all writing</TextLink>
          </div>
        </HomeSection>

        <section id="contact" className="scroll-mt-24 space-y-6 pt-4">
          {emailLink ? <ContactCopy email={emailLink.href.slice(7)} /> : null}
        </section>
      </div>

      <footer className="mt-auto pt-16 text-sm text-muted-foreground">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <p>Based in {siteProfile.location}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:justify-end">
            {socialLinks.map((link) => (
              <TextLink key={link.label} href={link.href}>
                {link.label === "Email" ? "Email me" : link.label}
              </TextLink>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
