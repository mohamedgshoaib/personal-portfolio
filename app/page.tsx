import type { Metadata } from "next"

import { ContactSection } from "@/components/contact/contact-section"
import { HomepageDock } from "@/components/dock/homepage-dock"
import { HomepageFooter } from "@/components/homepage/homepage-footer"
import { HomepageSceneReveal } from "@/components/homepage/homepage-scene"
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

const homepageSceneDelay = {
  aboutHeader: 72,
  aboutParagraph: 112,
  aboutSocials: 188,
  contactLabel: 0,
  contactSurface: 64,
  footerSignature: 0,
  footerSocials: 64,
  hero: 0,
  projectRows: 278,
  projectsHeader: 220,
  writingHeader: 430,
  writingRows: 494,
  myApproachHeader: 352,
  myApproach: 392,
} as const

export default function Page(): React.ReactElement {
  const { identity, about, approach, projects, writing, socialLinks } =
    homepageContent

  return (
    <PageShell>
      <StructuredData data={[createPersonJsonLd(), createWebsiteJsonLd()]} />
      <PageContent>
        <HomepageSceneReveal delayMs={homepageSceneDelay.hero} kind="body">
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
        </HomepageSceneReveal>

        <HomeSection
          header={
            <HomepageSceneReveal
              delayMs={homepageSceneDelay.aboutHeader}
              kind="header"
            >
              <SectionHeader actionLabel="View All" title="About" />
            </HomepageSceneReveal>
          }
          id="about"
        >
          <HomepageSceneReveal
            delayMs={homepageSceneDelay.aboutParagraph}
            kind="body"
          >
            <div className="space-y-3">
              {about.split("\n\n").map((para) => (
                <p className={textStyles.pageDescription} key={para}>
                  {para}
                </p>
              ))}
            </div>
          </HomepageSceneReveal>
          <HomepageSceneReveal
            delayMs={homepageSceneDelay.aboutSocials}
            kind="utility"
          >
            <SocialLinks links={socialLinks} />
          </HomepageSceneReveal>
        </HomeSection>

        <HomeSection
          header={
            <HomepageSceneReveal
              delayMs={homepageSceneDelay.projectsHeader}
              kind="header"
            >
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
            </HomepageSceneReveal>
          }
          id="projects"
          rhythm="list"
        >
          <ProjectList
            projects={projects}
            sceneDelayMs={homepageSceneDelay.projectRows}
            source="home"
          />
        </HomeSection>

        <HomeSection
          header={
            <HomepageSceneReveal
              delayMs={homepageSceneDelay.myApproachHeader}
              kind="header"
            >
              <SectionHeader actionLabel="View All" title="My Approach" />
            </HomepageSceneReveal>
          }
        >
          <HomepageSceneReveal
            delayMs={homepageSceneDelay.myApproach}
            kind="body"
          >
            <div className="space-y-3">
              {approach.split("\n\n").map((para) => (
                <p className={textStyles.pageDescription} key={para}>
                  {para}
                </p>
              ))}
            </div>
          </HomepageSceneReveal>
        </HomeSection>

        <HomeSection
          header={
            <HomepageSceneReveal
              delayMs={homepageSceneDelay.writingHeader}
              kind="header"
            >
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
            </HomepageSceneReveal>
          }
          id="writing"
          rhythm="list"
        >
          <WritingList
            posts={writing}
            sceneDelayMs={homepageSceneDelay.writingRows}
            source="home"
          />
        </HomeSection>

        <ContactSection
          email={identity.email}
          sceneDelays={{
            label: homepageSceneDelay.contactLabel,
            surface: homepageSceneDelay.contactSurface,
          }}
        />
      </PageContent>
      <HomepageDock />
      <HomepageFooter
        revealDelays={{
          signature: homepageSceneDelay.footerSignature,
          socials: homepageSceneDelay.footerSocials,
        }}
        socialLinks={socialLinks.filter((l) => l.kind !== "email")}
      />
    </PageShell>
  )
}
