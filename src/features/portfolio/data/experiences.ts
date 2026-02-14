import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "devloop",
    companyName: "Devloop",
    companyLogo: "/assets/logos/devloop.webp",
    companyWebsite: "https://www.devloop.software/",
    positions: [
      {
        id: "devloop-frontend-developer",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "10.2025",
        },
        employmentType: "Self-employed",
        icon: "code",
        description: `
Responsibilities:
- Implement modern web applications using Next.js and TypeScript.

What I'm Learning:
- How to plan, research, and build scalable and maintainable web applications.
- How to use tools like Linear and GitHub Actions in a professional environment.
`,
        skills: ["TypeScript", "Next.js", "Upstash Redis", "GitHub Actions"],
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
        id: "iti-full-stack-mern",
        title: "Full Stack MERN Web Developer Trainee",
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
        ],
        isExpanded: false,
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
        id: "telus-search-engine",
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
        skills: ["QA", "SEO", "Research", "Content Writing"],
        isExpanded: false,
      },
    ],
    isCurrentEmployer: false,
  },
];
