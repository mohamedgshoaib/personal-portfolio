# Mohamed Gamal Portfolio

A personal portfolio and writing site built with Next.js, React, TypeScript, Tailwind CSS v4, and Base UI.

This project is not a generic portfolio starter. It is a real editorial portfolio for Mohamed Gamal, focused on frontend engineering, clean design, careful implementation, and writing about the modern web.

## Overview

The site currently includes:

- a homepage with profile, featured projects, approach, writing, and contact
- a full projects archive
- an MDX-backed writing section
- route-specific Open Graph images
- generated metadata, sitemap, robots, and manifest files
- a floating dock with theme and contact controls

The design direction is intentionally calm, narrow, text-led, and minimal.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Base UI primitives
- MDX with `@next/mdx`
- `next-themes`
- Oxlint and Oxfmt
- pnpm

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm run dev
```

Build for production:

```bash
pnpm run build
pnpm run start
```

## Quality Checks

Run formatting:

```bash
pnpm run format
```

Run linting:

```bash
pnpm run lint
```

Run type checking:

```bash
pnpm run typecheck
```

## Environment Variables

Create a local environment file:

```bash
.env.local
```

Recommended variable:

```env
NEXT_PUBLIC_SITE_URL=https://www.mohamedgshoaib.me
```

This is used for:

- canonical URLs
- sitemap generation
- robots sitemap reference
- metadata base URL
- Open Graph absolute URLs

## Project Structure

High-level structure:

```text
app/                  Routes, layouts, metadata routes, and route-local files
components/           Shared UI and shared route components
content/writing/      MDX writing content
hooks/                Reusable React hooks
lib/content/          Typed authored content and writing registry
lib/metadata/         Metadata helpers, OG image helpers, schema builders
lib/audio/            Sound engine and embedded sound assets
public/               Static assets, icons, images, llms files
spec/                 Internal project memory, plan, styling, and references
```

Notable folders:

- [`app/`](./app) owns routing and route file conventions
- [`app/writing/_components/`](./app/writing/_components) contains writing-only UI
- [`components/home/`](./components/home) contains homepage and project-list UI
- [`lib/content/`](./lib/content) contains authored site data and the writing registry
- [`lib/metadata/`](./lib/metadata) contains metadata, schema, and Open Graph logic

## Content Model

### Portfolio content

Main profile and project content lives in:

- [`lib/content/site-content.ts`](./lib/content/site-content.ts)

This is where you update:

- profile name, role, location, intro, and bio
- homepage approach copy
- social links
- project titles, summaries, details, and architecture lists

Project order in the UI follows the array order in `site-content.ts`.

### Writing content

Writing posts live in:

- [`content/writing/`](./content/writing)

The writing registry lives in:

- [`lib/content/writing.ts`](./lib/content/writing.ts)

Each post exports a `metadata` object and default MDX content.

## Metadata and SEO

The project uses Next.js metadata conventions and generated metadata routes.

Important files:

- [`app/layout.tsx`](./app/layout.tsx)
- [`app/manifest.ts`](./app/manifest.ts)
- [`app/robots.ts`](./app/robots.ts)
- [`app/sitemap.ts`](./app/sitemap.ts)
- [`lib/metadata/site-metadata.ts`](./lib/metadata/site-metadata.ts)
- [`lib/metadata/schema.ts`](./lib/metadata/schema.ts)

Structured data is included for:

- the homepage
- the projects page
- the writing index
- each writing article

Route-specific Open Graph images are generated with:

- [`lib/metadata/brand-image.tsx`](./lib/metadata/brand-image.tsx)

## Icons and Static Metadata Assets

Current icon setup:

- [`app/favicon.ico`](./app/favicon.ico)
- [`app/icon.png`](./app/icon.png)
- [`app/apple-icon.png`](./app/apple-icon.png)
- [`public/web-app-manifest-192x192.png`](./public/web-app-manifest-192x192.png)
- [`public/web-app-manifest-512x512.png`](./public/web-app-manifest-512x512.png)

LLM-facing reference files:

- [`public/llms.txt`](./public/llms.txt)
- [`public/llms-full.txt`](./public/llms-full.txt)

## Forking This Project

If you want to fork this portfolio, change these first:

1. Replace identity and social links in [`lib/content/site-content.ts`](./lib/content/site-content.ts)
2. Replace writing posts in [`content/writing/`](./content/writing)
3. Update metadata values in [`lib/metadata/site-metadata.ts`](./lib/metadata/site-metadata.ts)
4. Replace icons and manifest images in [`app/`](./app) and [`public/`](./public)
5. Update `NEXT_PUBLIC_SITE_URL` in `.env.local`
6. Review [`public/llms.txt`](./public/llms.txt) and [`public/llms-full.txt`](./public/llms-full.txt)

If you fork it, please treat it as a base to adapt, not as a drop-in personal brand.

## Design and Internal References

Internal project documentation lives in:

- [`AGENTS.md`](./AGENTS.md)
- [`spec/context.md`](./spec/context.md)
- [`spec/plan.md`](./spec/plan.md)
- [`spec/skills.md`](./spec/skills.md)
- [`spec/styling.md`](./spec/styling.md)

These files document the project’s design direction, technical decisions, and local AI workflow.

## Notes

- This project uses local content instead of a CMS.
- The homepage is curated and intentionally does not show the full project archive.
- The writing system is minimal by design and uses native MDX exports instead of a heavier content pipeline.
- The visual direction favors editorial restraint over portfolio clichés.
