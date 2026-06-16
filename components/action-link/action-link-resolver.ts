import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconBriefcaseFilled,
  IconExternalLinkFilled,
  IconFileCvFilled,
  IconHomeFilled,
  IconMailFilled,
  IconWritingFilled,
  type Icon as TablerIcon,
} from "@tabler/icons-react"

import type { IconLinkHrefItem } from "@/components/action-link/icon-link"
import type {
  ActionLinkKind,
  ActionLinkRecord,
} from "@/lib/content/content-types"

type ActionLinkDefinition = {
  icon: TablerIcon
  label: string | ((item: ActionLinkRecord) => string)
  target?: string
}

const actionLinkDefinitions: Record<ActionLinkKind, ActionLinkDefinition> = {
  contact: {
    icon: IconMailFilled,
    label: "Contact",
  },
  cv: {
    icon: IconFileCvFilled,
    label: "Open CV",
    target: "_blank",
  },
  email: {
    icon: IconMailFilled,
    label: "Email Me",
  },
  github: {
    icon: IconBrandGithubFilled,
    label: "GitHub",
    target: "_blank",
  },
  home: {
    icon: IconHomeFilled,
    label: "Home",
  },
  linkedin: {
    icon: IconBrandLinkedinFilled,
    label: "LinkedIn",
    target: "_blank",
  },
  projectLive: {
    icon: IconExternalLinkFilled,
    label: (item) =>
      item.labelContext ? `${item.labelContext} live site` : "Open website",
    target: "_blank",
  },
  projectSource: {
    icon: IconBrandGithubFilled,
    label: (item) =>
      item.labelContext ? `${item.labelContext} source code` : "Source code",
    target: "_blank",
  },
  projects: {
    icon: IconBriefcaseFilled,
    label: "Projects",
  },
  writing: {
    icon: IconWritingFilled,
    label: "Writing",
  },
  x: {
    icon: IconBrandXFilled,
    label: "X",
    target: "_blank",
  },
}

export function resolveActionLinkItem(item: ActionLinkRecord): IconLinkHrefItem {
  const definition = actionLinkDefinitions[item.kind]
  const label =
    typeof definition.label === "function"
      ? definition.label(item)
      : definition.label

  return {
    href: item.href,
    icon: definition.icon,
    label: item.label ?? label,
    ...(definition.target ? { target: definition.target } : {}),
  }
}
