import type * as React from "react"

import { SignatureMark } from "@/components/homepage/signature-mark"
import { SocialLinks } from "@/components/action-link/social-links"
import type { ActionLinkRecord } from "@/lib/content/content-types"

type FooterSocialLink = Pick<ActionLinkRecord, "href" | "kind" | "label">

export function HomepageFooter({
  socialLinks,
}: {
  socialLinks: readonly FooterSocialLink[]
}): React.ReactElement {
  return (
    <footer className="mt-20 flex flex-row items-center justify-between gap-4 pb-16 text-sm text-muted-foreground">
      <SignatureMark />
      <SocialLinks className="text-muted-foreground" links={socialLinks} />
    </footer>
  )
}
