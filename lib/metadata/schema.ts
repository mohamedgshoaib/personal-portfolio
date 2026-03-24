import {
  socialLinks,
  type Project,
  siteProfile,
} from "@/lib/content/site-content"
import { type WritingPost } from "@/lib/content/writing"
import {
  createAbsoluteUrl,
  siteDescription,
  siteKeywords,
  siteName,
} from "@/lib/metadata/site-metadata"

function getSocialProfileUrl(label: string) {
  return socialLinks.find((link) => link.label === label)?.href ?? null
}

function getEmailAddress() {
  const emailLink = socialLinks.find((link) => link.label === "Email")?.href

  if (!emailLink?.startsWith("mailto:")) {
    return null
  }

  return emailLink.slice(7)
}

export function createPersonSchema() {
  const email = getEmailAddress()
  const sameAs = socialLinks
    .filter((link) => link.label !== "Email")
    .map((link) => link.href)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": createAbsoluteUrl("/#person").toString(),
    name: siteProfile.name,
    url: createAbsoluteUrl("/").toString(),
    description: siteDescription,
    jobTitle: siteProfile.role,
    knowsAbout: [...siteKeywords],
    sameAs,
    homeLocation: {
      "@type": "Place",
      name: siteProfile.location,
    },
  }

  return email
    ? {
        ...personSchema,
        email: `mailto:${email}`,
      }
    : personSchema
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": createAbsoluteUrl("/#website").toString(),
    name: siteName,
    url: createAbsoluteUrl("/").toString(),
    description: siteDescription,
    inLanguage: "en",
    publisher: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
  }
}

export function createHomepageSchema() {
  const linkedInUrl = getSocialProfileUrl("LinkedIn")
  const xUrl = getSocialProfileUrl("X")
  const githubUrl = getSocialProfileUrl("GitHub")

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": createAbsoluteUrl("/#webpage").toString(),
    url: createAbsoluteUrl("/").toString(),
    name: `${siteProfile.name} portfolio`,
    description: siteDescription,
    isPartOf: {
      "@id": createAbsoluteUrl("/#website").toString(),
    },
    about: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
    mainEntity: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
    significantLink: [linkedInUrl, xUrl, githubUrl].filter(Boolean),
  }
}

export function createProjectsPageSchema(projects: Project[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": createAbsoluteUrl("/projects#webpage").toString(),
    url: createAbsoluteUrl("/projects").toString(),
    name: "Projects",
    description:
      "Selected frontend work across product websites, internal systems, and interface-heavy builds.",
    isPartOf: {
      "@id": createAbsoluteUrl("/#website").toString(),
    },
    about: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.name,
        description: project.summary,
        url: project.href,
        creator: {
          "@id": createAbsoluteUrl("/#person").toString(),
        },
      })),
    },
  }
}

export function createWritingPageSchema(posts: WritingPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": createAbsoluteUrl("/writing#blog").toString(),
    url: createAbsoluteUrl("/writing").toString(),
    name: `${siteProfile.name} writing`,
    description:
      "Writing on frontend engineering, interface decisions, modern web architecture, and the details that make products hold together.",
    publisher: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: createAbsoluteUrl(`/writing/${post.slug}`).toString(),
      datePublished: post.publishedAt,
      author: {
        "@id": createAbsoluteUrl("/#person").toString(),
      },
    })),
  }
}

export function createBlogPostingSchema(post: WritingPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": createAbsoluteUrl(`/writing/${post.slug}#article`).toString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": createAbsoluteUrl(`/writing/${post.slug}`).toString(),
    },
    headline: post.title,
    description: post.description,
    image: [createAbsoluteUrl(post.image.src).toString()],
    datePublished: post.publishedAt,
    author: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
    publisher: {
      "@id": createAbsoluteUrl("/#person").toString(),
    },
    keywords: post.title,
    inLanguage: "en",
  }
}
