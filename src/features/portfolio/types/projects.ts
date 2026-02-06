export type ProjectScreenshot =
  | "/assets/projects/devloop/devloop.jpg"
  | "/assets/projects/mos-experiences/mosexperiences.jpg"
  | "/assets/projects/dana-doors/dana-doors.jpg"
  | "/assets/projects/rootly-notes/rootly-notes.jpg";

export type ProjectLogo =
  | "https://www.devloop.software/favicon.ico"
  | "https://www.mosexperiences.com/favicon.ico"
  | "https://www.danadoors.net/dana-doors-logo.svg"
  | "https://rootly-notes-app.vercel.app/favicon.ico";

export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  /** URL-friendly slug for project detail pages. */
  slug: string;
  title: string;
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** GitHub repository URL (optional). */
  github?: string;
  /** Link to a blog post or article (optional). */
  post?: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Screenshot image URL for project cards and detail pages. */
  screenshot?: ProjectScreenshot;
  /** Logo image URL (absolute or path under /public). */
  logo?: ProjectLogo | string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
