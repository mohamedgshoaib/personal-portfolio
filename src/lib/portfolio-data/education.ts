/**
 * EDUCATION DATA
 * ==============
 *
 * HOW TO EDIT:
 * - Add new education entries by copying an existing object
 * - Update existing items by modifying the fields below
 * - This data is used in: Education component
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (e.g., "edu-1", "edu-2")
 * - name: Degree/program name
 * - issuer: Institution name
 * - date: Year obtained (e.g., "2024")
 * - logo: Path to institution logo image
 * - description: Description text
 * - learnings: Array of learning strings (what you learned)
 * - certificateUrl: URL to view certificate (or null if not available)
 *
 * TIPS:
 * - List items in reverse chronological order (most recent first)
 * - Keep learnings specific and relevant
 * - Use null for certificateUrl if verification link is not available
 */

export interface EducationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  logo: string;
  description: string;
  learnings: readonly string[];
  certificateUrl: string | null;
}

export const education: readonly EducationItem[] = [
  // ========================================
  // Bachelor's Degree - Computer Science
  // ========================================
  {
    id: "edu-1",
    name: "B.Sc. in Computer Science",
    issuer: "Misr University for Science and Technology",
    date: "Oct 2017 – Jun 2021",
    logo: "/assets/institutions/must.png",
    description: "Bachelor of Computer Science (GPA 3.11).",
    learnings: [
      "Strong foundation in core CS topics and problem solving.",
      "Exposure to Software Engineering concepts and system-level thinking.",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
  },
] as const;
