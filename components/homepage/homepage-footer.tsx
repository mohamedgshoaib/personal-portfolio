import type * as React from "react"

import { SignatureMark } from "@/components/homepage/signature-mark"
import { HomepageSceneReveal } from "@/components/homepage/homepage-scene"
import { SocialLinks } from "@/components/action-link/social-links"
import type { ActionLinkRecord } from "@/lib/content/content-types"

type FooterSocialLink = Pick<ActionLinkRecord, "href" | "kind" | "label">

export function HomepageFooter({
  revealDelays,
  socialLinks,
}: {
  revealDelays?: {
    signature: number
    socials: number
  }
  socialLinks: readonly FooterSocialLink[]
}): React.ReactElement {
  return (
    <footer className="mt-20 flex flex-row items-center justify-between gap-4 pb-16 text-sm text-muted-foreground">
      <HomepageSceneReveal
        delayMs={revealDelays?.signature ?? 0}
        kind="body"
      >
        <SignatureMark />
      </HomepageSceneReveal>
      <HomepageSceneReveal
        delayMs={revealDelays?.socials ?? 0}
        kind="utility"
      >
        <SocialLinks className="text-muted-foreground" links={socialLinks} />
      </HomepageSceneReveal>
    </footer>
  )
}
