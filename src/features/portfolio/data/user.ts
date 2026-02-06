import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Mohamed",
  lastName: "Gamal",
  displayName: "Mohamed Gamal",
  username: "mohamedgshoaib",
  gender: "male",
  pronouns: "he/him",
  bio: "Learn, Struggle, Master.",
  flipSentences: [
    "Learn, Struggle, Master.",
    "Progress, Not Perfection.",
    "Open Source Contributor.",
  ],
  address: "Cairo, Egypt",
  phoneNumber: "KzIwMTE0MDQ5MzMyOA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "bW9oYW1lZC5nLnNob2FpYkBnbWFpbC5jb20=", // base64 encoded
  website: "https://www.mohamedgshoaib.me/",
  jobTitle: "Frontend Developer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Devloop",
      website: "https://www.devloop.software/",
    },
  ],
  about: `
- I’m Mohamed, a frontend developer focused on building fast, SEO-driven web applications with full RTL support.

- I care deeply about structure, long-term maintainability, clean architecture, predictable state, and performance that holds up under real traffic. I’ve worked extensively with modern frameworks to deliver interfaces that feel simple to users but are carefully engineered under the hood.

- I adapt quickly to project needs, prefer modern tooling, and actively look for problems that force me to learn something new.
`,
  avatar: "/assets/avatars/portfolio-pfp.jpg",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-dark.png?v=5",
  affiliateBadge: {
    name: "Devloop",
    url: "https://www.devloop.software/",
    logo: "/assets/logos/devloop-pfp.webp",
  },
  timeZone: "Africa/Cairo",
  keywords: [
    "mohamedgshoaib",
    "mohamed g shoaib",
    "mohamed gamal",
    "devloop",
    "reway",
    "rootly",
    "dana doors",
    "mo's experiences",
  ],
  dateCreated: "2026-02-05", // YYYY-MM-DD
} satisfies User;
