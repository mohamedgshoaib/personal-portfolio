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
    "Frontend Developer",
    "Open Source Contributor",
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
- Building secure, SEO-optimized web applications with React and Next.js. I specialize in delivering high-performance interfaces with full RTL support and clean architecture, bringing a full-stack mindset to frontend engineering.
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
