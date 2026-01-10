/**
 * EXPERIENCE DATA
 * ===============
 *
 * HOW TO EDIT:
 * - Add new experience by copying an existing experience object
 * - Update existing experience by modifying the fields below
 * - This data is used in: Experience component
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (e.g., "exp-1", "exp-2")
 * - title: Job title
 * - company: Company name
 * - period: Employment period (e.g., "2024 - Present")
 * - type: Either "work" or "internship"
 * - logo: Path to institution logo image
 * - responsibilities: Array of responsibility strings
 * - learnings: Array of learning strings
 * - certificateUrl: URL to view certificate (optional)
 *
 * TIPS:
 * - List experiences in reverse chronological order (most recent first)
 * - Keep responsibilities concise and action-oriented
 * - Focus on learnings that demonstrate growth
 */

export type ExperienceType = "work" | "internship";

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  type: ExperienceType;
  logo: string;
  responsibilities: readonly string[];
  learnings: readonly string[];
  certificateUrl?: string | null;
}

export const experience: readonly ExperienceItem[] = [
  // ========================================
  // Full-Stack Web Development (MERN) — Internship
  // ========================================
  {
    id: "intern-1",
    title: "Full-Stack MERN Developer",
    company: "Information Technology Institute (ITI)",
    period: "Feb 2025 - Jul 2025",
    type: "internship",
    logo: "/assets/institutions/iti.png",
    responsibilities: [
      "Built full-stack MERN applications and connected React UIs to REST APIs.",
      "Worked in a team setting and shipped responsive features under training deadlines.",
    ],
    learnings: [
      "Got comfortable breaking work into small deliverables and shipping incrementally.",
      "Improved communication around tasks, blockers, and handoffs.",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1mu1tMVlfn6hDeHZGgt6L8TpvYYU1q9Mg/view",
  },

  // ========================================
  // Search Engine Evaluator — Work
  // ========================================
  {
    id: "exp-1",
    title: "Search Engine Evaluator",
    company: "TELUS International",
    period: "Sep 2019 - May 2024",
    type: "work",
    logo: "/assets/institutions/telus.png",
    responsibilities: [
      "Reviewed search results using detailed guidelines and wrote clear evaluation notes.",
      "Maintained consistent quality and attention to detail while working remotely.",
    ],
    learnings: [
      "Built a strong QA mindset and habit of double-checking work before submitting.",
      "Improved written communication through structured, guideline-based reporting.",
    ],
  },
] as const;
