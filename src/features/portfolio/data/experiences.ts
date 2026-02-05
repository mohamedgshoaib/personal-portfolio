import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "devloop",
    companyName: "Devloop",
    companyLogo:
      "/assets/logos/devloop-pfp.webp",
    companyWebsite: "https://www.devloop.software/",
    positions: [
      {
        id: "0C741FC7-A4C2-4B1D-857B-F3058CE8D9CE",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `
Responsibilities:
- Implement modern web applications using Next.js and TypeScript.
- Collaborate with Backend & AI Engineer to create AI Integrations for web applications.

What I'm Learning:
- How to build scalable and maintainable web applications.
- How to work effectively in a team environmen and use tools like Linear and GitHub Actions.
- How to plan, research, and execute projects from start to finish.
`,
        skills: [
          "TypeScript",
          "Next.js",
          "Tailwind CSS",
          "shadcn/ui",
          "Supabase",
          "Upstash Redis",
          "GitHub Actions",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "iti",
    companyName: "Information Technology Institute (ITI)",
    companyLogo: "/assets/institutions/iti.png",
    companyWebsite: "https://iti.gov.eg/home",
    positions: [
      {
        id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        title: "Search Engine Optimizer & Evaluator",
        employmentPeriod: {
          start: "02.2025",
          end: "07.2025",
        },
        employmentType: "Internship",
        icon: "education",
        description: `
Responsibilities:
- Built full-stack MERN applications and connected React UIs to REST APIs.
- Worked in a team setting and shipped responsive features under training deadlines.

What I Learned:
- Got comfortable breaking work into small deliverables and shipping incrementally.
- Improved communication around tasks, blockers, and handoffs.
`,
        skills: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "Software Engineering",
          "React.js & Next.js",
          "Angular",
          "Figma",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
  {
    id: "telus",
    companyName: "TELUS International AI",
    companyLogo: "/assets/institutions/telus.png",
    companyWebsite: "https://www.telusinternational.ai/",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "Search Engine Optimizer & Evaluator",
        employmentPeriod: {
          start: "09.2019",
          end: "05.2024",
        },
        employmentType: "Part-time",
        icon: "business",
        description: `
Responsibilities:
- Reviewed search results using detailed guidelines and wrote clear evaluation notes.
- Maintained consistent quality and attention to detail while working remotely.

What I Learned:
- Built a strong QA mindset and habit of double-checking work before submitting.
- Improved written communication through structured, guideline-based reporting.
`,
        skills: [
          "QA",
          "SEO",
          "Research",
          "Content Writing",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];
