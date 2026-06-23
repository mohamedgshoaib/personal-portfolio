import type {
  ActionLinkRecord,
  SiteIdentity,
} from "@/lib/content/content-types"

export const siteIdentity = {
  name: "Mohamed Gamal",
  title: "Frontend Engineer",
  email: "mohamed.g.shoaib@gmail.com",
} satisfies SiteIdentity

export const socialLinks = [
  {
    href: "https://github.com/mohamed-g-shoaib",
    kind: "github",
  },
  {
    href: "https://www.linkedin.com/in/mohamed-g-shoaib/",
    kind: "linkedin",
  },
  {
    href: "https://x.com/mohamedgshoaib",
    kind: "x",
  },
  {
    href: "https://drive.google.com/file/d/1CJhC5Ku8wie4-CDmyyIMqc4qGEo2Pg6j/view?usp=sharing",
    kind: "cv",
  },
  {
    href: "mailto:mohamed.g.shoaib@gmail.com",
    kind: "email",
  },
] satisfies readonly ActionLinkRecord[]
