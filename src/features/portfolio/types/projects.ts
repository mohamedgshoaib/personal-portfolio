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
  screenshot?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
