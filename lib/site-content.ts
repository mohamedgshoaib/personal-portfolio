export type SocialLink = {
  href: string
  label: string
}

export type Technology = {
  name: string
}

export type Project = {
  name: string
  slug: string
  status: "shipped" | "in-progress" | "archived"
  href: string
  summary: string
  details: string
  architecture: string[]
  image: {
    src: string
    alt: string
  }
}

export type Experience = {
  company: string
  role: string
  periodLabel: string
  summary: string
}

export type PostContentBlock =
  | {
      id: string
      type: "paragraph"
      content: string
    }
  | {
      id: string
      type: "heading"
      content: string
    }
  | {
      id: string
      type: "list"
      items: {
        id: string
        content: string
      }[]
      ordered?: boolean
    }
  | {
      id: string
      type: "code"
      language: string
      code: string
    }

export type Post = {
  slug: string
  title: string
  description: string
  publishedLabel: string
  summary: string
  image: {
    src: string
    alt: string
  }
  content: PostContentBlock[]
}

export const siteProfile = {
  name: "Mohamed Gamal",
  role: "Frontend Developer",
  location: "Cairo, Egypt",
  intro:
    "I build fast, SEO-driven web applications with full RTL support and a strong bias toward clarity, performance, and long-term maintainability.",
  bio: "I care about clean architecture, thoughtful interfaces, and performance that holds up under real traffic. I work best with modern tooling, adapt quickly to project needs, and gravitate toward problems that force me to learn something new.",
  opportunities: ["Jobs", "Freelance", "Open source"],
} as const

export const socialLinks: SocialLink[] = [
  {
    href: "mailto:mohamed.g.shoaib@gmail.com",
    label: "Email",
  },
  {
    href: "https://github.com/mohamed-g-shoaib",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/mohamed-g-shoaib/",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/mo0hamed_gamal",
    label: "X",
  },
]

export const technologies: Technology[] = [
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "shadcn/ui" },
]

export const projects: Project[] = [
  {
    name: "Devloop",
    slug: "devloop",
    status: "shipped",
    href: "https://www.devloop.software/",
    summary:
      "A bilingual public website for Devloop with localized routing, server-rendered SEO, and full English/Arabic RTL support.",
    details:
      "Built to stay lean on first load while still supporting theming, reduced-motion-aware interactions, and a working contact flow. The implementation prioritizes clear information architecture, strong SEO fundamentals, and loading strategies that keep heavier UI off the critical path.",
    architecture: [
      "Next.js 16 App Router",
      "React 19",
      "Tailwind CSS 4",
      "next-intl",
      "next-themes",
      "Motion",
      "Resend",
    ],
    image: {
      src: "/assets/projects/devloop/devloop.webp",
      alt: "Homepage preview for the Devloop bilingual marketing website.",
    },
  },
]

export const experiences: Experience[] = [
  {
    company: "TELUS International",
    role: "Search Engine Evaluator",
    periodLabel: "Sep 2019 - May 2024",
    summary:
      "Worked with detailed evaluation guidelines, structured review notes, and remote QA processes that strengthened my attention to detail, consistency, and written communication.",
  },
]

export const posts: Post[] = [
  {
    slug: "hello-world-what-this-blog-is-about",
    title: "Hello World: What This Blog Is About",
    description:
      "A quick intro to what you'll find here and why I started writing.",
    publishedLabel: "December 19, 2025",
    summary:
      "An introduction to the blog, the kinds of topics I'll be writing about, and why writing is part of how I learn.",
    image: {
      src: "/assets/blog/Hello World What This Blog Is About.webp",
      alt: "Cover image for the Hello World blog post.",
    },
    content: [
      {
        id: "intro-thanks",
        type: "paragraph",
        content: "Hey, thanks for stopping by!",
      },
      {
        id: "intro-about",
        type: "paragraph",
        content:
          "This is where I write about things I'm learning, building, and occasionally breaking. If you're into React, Next.js, or just enjoy watching someone figure things out in public, you're in the right place.",
      },
      {
        id: "why-write",
        type: "heading",
        content: "Why Write?",
      },
      {
        id: "why-write-intro",
        type: "paragraph",
        content: "Three reasons, really:",
      },
      {
        id: "why-write-list",
        type: "list",
        ordered: true,
        items: [
          {
            id: "why-write-learn",
            content:
              "Learning sticks better when you explain it. Writing forces me to actually understand what I'm doing instead of just copy-pasting from Stack Overflow (well, mostly).",
          },
          {
            id: "why-write-time-capsule",
            content:
              "It's a time capsule. Future me will appreciate having notes on why past me made certain decisions.",
          },
          {
            id: "why-write-share",
            content:
              "Sharing is caring. If something helped me, maybe it'll help you too.",
          },
        ],
      },
      {
        id: "whats-coming",
        type: "heading",
        content: "What's Coming",
      },
      {
        id: "whats-coming-intro",
        type: "paragraph",
        content: "Here's a rough roadmap of topics I'll be covering:",
      },
      {
        id: "whats-coming-list",
        type: "list",
        items: [
          {
            id: "whats-coming-react-next",
            content:
              "React and Next.js in 2025: Server Components, the App Router, and patterns that actually work in production.",
          },
          {
            id: "whats-coming-accessibility",
            content:
              "Making things accessible: because if your site doesn't work for everyone, it doesn't really work.",
          },
          {
            id: "whats-coming-architecture",
            content:
              "Architecture decisions: the fun part where we debate SSR vs. CSR and whether you really need Redux.",
          },
          {
            id: "whats-coming-breakdowns",
            content:
              "Project breakdowns: real builds, real mistakes, real lessons.",
          },
        ],
      },
      {
        id: "code-samples-heading",
        type: "heading",
        content: "Code Samples Look Like This",
      },
      {
        id: "code-samples-intro",
        type: "paragraph",
        content: "Just so you know what to expect:",
      },
      {
        id: "code-samples-example",
        type: "code",
        language: "tsx",
        code: `function Greeting({ name }: { name: string }) {
  return (
    <div className="p-4 border rounded-lg">
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
    </div>
  )
}`,
      },
      {
        id: "code-samples-note",
        type: "paragraph",
        content:
          "Nothing fancy. Just practical stuff that you can actually use.",
      },
      {
        id: "outro",
        type: "paragraph",
        content: "Let's see where this goes!",
      },
    ],
  },
]

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug) ?? null
}
