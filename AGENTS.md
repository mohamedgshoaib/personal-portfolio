# AI Agent Guidelines for Mohamed Gamal's Portfolio

This guide provides information for AI agents working with this codebase. This is a Next.js portfolio and blog.

## Project Overview

A Next.js portfolio and blog with:

- Blog with MDX content
- Custom React components
- Contact form integration
- Project showcase with visual grid

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui and custom components
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Content**: MDX for blog posts
- **Deployment**: Vercel

## Project Structure

### Key Directories

- `src/app/`: Next.js App Router pages (routes, layouts, API routes)
- `src/components/`: Shared UI components
- `src/features/`: Feature based modules (blog, portfolio)
- `src/config/`: Site configuration
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility libraries and helpers
- `src/styles/`: Global styles and CSS
- `src/assets/`: Static assets such as fonts
- `src/types/`: TypeScript type definitions
- `src/utils/`: Utility functions

### Important Files

- `src/config/site.ts`: Site configuration and navigation
- `src/features/portfolio/data/user.ts`: User portfolio data
- `components.json`: shadcn/ui configuration

## Development Guidelines

### Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev # Runs on port 1408

# Build for production
pnpm build
```

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js configuration
- **Prettier**: Code formatting
- **File naming**: Use kebab-case for files and component files

### Coding Guidelines

Follow these principles when writing code:

- Write type-safe TypeScript code with explicit types
- Use descriptive variable and function names for self-documenting code
- Add comments only for complex logic or non-obvious behavior
- Avoid emojis in code, comments, or commit messages
- Use JSDoc for public APIs when the signature is not clear
- Follow SOLID principles by keeping functions small and focused

## Working with Content

### Blog Posts

- Location: `src/features/blog/content/`
- Format: MDX files
- Supports: Custom components, code blocks, and metadata

### User Portfolio

**Portfolio Data Files** (`src/features/portfolio/data/`):

- `user.ts`: Core personal information, bio, contact details, and job history
- `experiences.ts`: Detailed work experience and company information
- `projects.ts`: Portfolio projects with descriptions, links, and skills
- `tech-stack.ts`: Technology stack and frameworks
- `social-links.ts`: Social media profiles and contact links

## Environment and Configuration

### Environment Variables

See `.env.example` for required variables:

**Core Application**:

- `APP_URL`: Application base URL

**External Services**:

- `GITHUB_API_TOKEN`: GitHub Personal Access Token for API calls
- `NEXT_PUBLIC_DMCA_URL`: DMCA Protection badge URL

**Analytics and Tracking**:

- `NEXT_PUBLIC_POSTHOG_KEY`: PostHog project API key
- `NEXT_PUBLIC_POSTHOG_HOST`: PostHog API host URL
- `NEXT_PUBLIC_POSTHOG_UI_HOST`: PostHog UI host URL

### Analytics Events

The project uses PostHog for analytics tracking. Events are defined in `src/lib/events.ts` with Zod schema validation. PostHog is initialized for production with consent management via the `@c15t/nextjs` package.

### Site Configuration

- Navigation: `MAIN_NAV` in `src/config/site.ts`
- Theme colors: `META_THEME_COLORS` in `src/config/site.ts`
- GitHub repo: `SOURCE_CODE_GITHUB_REPO` in `src/config/site.ts`

## Common Tasks

### Updating User Information

Edit `src/features/portfolio/data/user.ts` for:

- Personal information
- Job details
- Project descriptions
- Contact information

### Adding Blog Posts

1. Create an MDX file in `src/features/blog/content/`
2. Include frontmatter metadata
3. Use custom components for enhanced content

### Styling Guidelines

- Use Tailwind CSS v4 syntax
- Follow the existing color scheme
- Support dark and light modes
- Use CSS variables for theme colors

## Important Notes

### Performance Considerations

- Components use React.lazy for code splitting
- Images are optimized with the Next.js Image component
- MDX content is statically generated

### Personal Information

Ensure all personal information is replaced when adapting this codebase. Refer to the **User Portfolio** section for data file locations. Update `src/config/site.ts`, blog posts, and asset URLs throughout the project.

## Build Commands

```bash
pnpm build # Production build
pnpm start # Start production server
pnpm preview # Build and preview locally
pnpm lint # Run ESLint
pnpm format:write # Format code with Prettier
pnpm check-types # TypeScript type checking
```
