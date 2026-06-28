import type { Metadata } from "next"

import { ContactSection } from "@/components/contact/contact-section"
import { HomepageDock } from "@/components/dock/homepage-dock"
import { HomepageFooter } from "@/components/homepage/homepage-footer"
import {
  HomeSection,
  PageContent,
  PageShell,
  SectionHeader,
} from "@/components/homepage/homepage-layout"
import { SocialLinks } from "@/components/action-link/social-links"
import { ProjectList } from "@/components/editorial-entity/project-list"
import { StructuredData } from "@/components/metadata/structured-data"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { textStyles } from "@/lib/design/text-styles"
import { WritingList } from "@/components/editorial-entity/writing-list"
import { homepageContent } from "@/lib/content/content-discovery"
import { getRouteMetadata } from "@/lib/metadata/site-metadata"
import {
  createPersonJsonLd,
  createWebsiteJsonLd,
} from "@/lib/metadata/structured-data"
import { navigationIntentKeys } from "@/lib/navigation/navigation-intent"

export const metadata: Metadata = getRouteMetadata("/")

export default function Page(): React.ReactElement {
  const { identity, about, approach, projects, writing, socialLinks } =
    homepageContent

  return (
    <PageShell>
      <StructuredData data={[createPersonJsonLd(), createWebsiteJsonLd()]} />
      <PageContent>
        <header className="flex items-center gap-5 pt-4 sm:pt-8">
          <Avatar className="size-14 rounded-lg sm:size-16">
            <AvatarImage
              alt="Mohamed Gamal"
              className="object-contain"
              fetchPriority="high"
              sizes="64px"
              src="/assets/avatar/avatar.webp"
              width={64}
              height={64}
            />
          </Avatar>
          <hgroup className="min-w-0">
            <h1 className={textStyles.pageTitle}>{identity.name}</h1>
            <p className={`mt-1 ${textStyles.entityDescription}`}>
              {identity.title}
            </p>
          </hgroup>
        </header>

        <HomeSection
          header={<SectionHeader actionLabel="View All" title="About" />}
          id="about"
        >
          <div className="space-y-3">
            {about.split("\n\n").map((para) => (
              <p className={textStyles.pageDescription} key={para}>
                {para}
              </p>
            ))}
          </div>
          <SocialLinks links={socialLinks} />
        </HomeSection>

        <HomeSection
          header={
            <SectionHeader
              actionHref="/projects"
              actionIntent={{
                key: navigationIntentKeys.projectsArchiveBackHref,
                type: "set",
                value: "/",
              }}
              actionLabel="View All"
              title="Projects"
            />
          }
          id="projects"
          rhythm="list"
        >
          <ProjectList projects={projects} source="home" />
        </HomeSection>

        <HomeSection
          header={<SectionHeader actionLabel="View All" title="My Approach" />}
        >
          <div className="space-y-3">
            {approach.split("\n\n").map((para) => (
              <p className={textStyles.pageDescription} key={para}>
                {para}
              </p>
            ))}
          </div>
        </HomeSection>

        <HomeSection
          header={
            <SectionHeader
              actionHref="/writing"
              actionIntent={{
                key: navigationIntentKeys.writingArchiveBackHref,
                type: "set",
                value: "/",
              }}
              actionLabel="View All"
              title="Writing"
            />
          }
          id="writing"
          rhythm="list"
        >
          <WritingList posts={writing} source="home" />
        </HomeSection>

        <ContactSection email={identity.email} />
      </PageContent>
      <HomepageDock />
      <HomepageFooter
        socialLinks={socialLinks.filter((l) => l.kind !== "email")}
      />
    </PageShell>
  )
}
