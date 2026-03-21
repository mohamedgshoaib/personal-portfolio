# AI Agent Guidelines for Mohamed Gamal's Portfolio

This guide provides information for AI agents working with this codebase. This is a Next.js portfolio and blog.

## Project Overview

A Next.js portfolio and blog with:

- Blog with MDX content
- Custom React components
- Contact form integration
- Project showcase with visual grid

### Tech Stack

- **Framework**: Next.js 16.2 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Package Manager**: pnpm
- **Language**: TypeScript
- **Content**: MDX for blog posts
- **Deployment**: Vercel
- **Agents Skills**: Load skills from `.agents/`

### Code Standards

- **TypeScript**: Strict mode enabled
- **Oxlint**: Linting with TypeScript support
- **Oxfmt**: Code formatting
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

- Format: MDX files
- Supports: Custom components, code blocks, and metadata

### User Portfolio

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

## Common Tasks

### Updating User Information

- Personal information
- Job details
- Project descriptions
- Contact information

### Adding Blog Posts

- Include frontmatter metadata
- Use custom components for enhanced content

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
