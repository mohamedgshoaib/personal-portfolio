import type { Metadata } from "next"
import { Suspense } from "react"

import { HomepageDock } from "@/components/dock/homepage-dock"
import { HomepageFooter } from "@/components/homepage/homepage-footer"
import {
  HomeSection,
  PageContent,
  PageShell,
} from "@/components/homepage/homepage-layout"
import { StoredBackLink } from "@/components/navigation/stored-back-link"
import { StructuredData } from "@/components/metadata/structured-data"
import { textStyles } from "@/lib/design/text-styles"
import { WritingList } from "@/components/editorial-entity/writing-list"
import { getWritingSummaries } from "@/lib/content/writing-pages"
import {
  getDiscoveryRouteByHref,
  homepageContent,
} from "@/lib/content/content-discovery"
import { getRouteMetadata } from "@/lib/metadata/site-metadata"
import { createCollectionPageJsonLd } from "@/lib/metadata/structured-data"
import { navigationIntentKeys } from "@/lib/navigation/navigation-intent"

export const metadata: Metadata = getRouteMetadata("/writing")

export default function WritingPage(): React.ReactElement {
  const { socialLinks } = homepageContent
  const writing = getWritingSummaries()
  const route = getDiscoveryRouteByHref("/writing")

  return (
    <PageShell>
      {route ? (
        <StructuredData data={createCollectionPageJsonLd(route)} />
      ) : null}
      <PageContent>
        <header className="space-y-3 pt-4 sm:pt-8">
          <Suspense fallback={null}>
            <StoredBackLink
              intentKey={navigationIntentKeys.writingArchiveBackHref}
              showWithoutStoredHref={false}
            />
          </Suspense>
          <h1 className={textStyles.archiveTitle}>Writing</h1>
          <div className="space-y-3">
            <p className={textStyles.pageDescription}>
              Notes on frontend engineering, interface design, architecture,
              performance, and the decisions that usually sit behind the final
              surface.
            </p>
            <p className={textStyles.pageDescription}>
              A place to make the thinking visible: what worked, what changed,
              and what was worth doing carefully.
            </p>
          </div>
        </header>

        <HomeSection rhythm="list">
          <WritingList posts={writing} />
        </HomeSection>
      </PageContent>
      <HomepageDock />
      <HomepageFooter socialLinks={socialLinks} />
    </PageShell>
  )
}
