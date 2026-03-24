# AI Agent Guidelines For Mohamed Gamal's Portfolio

This file is the short entrypoint for agents working in this repository. Read it first, then use `spec/context.md` for the fuller project memory.

## Current Project State

This repository is a real personal portfolio and writing site, not a starter.

What exists today:

- Next.js 16 App Router application under `app/`
- a real homepage in `app/page.tsx`
- a projects archive in `app/projects/page.tsx`
- a writing index and MDX-backed post route under `app/writing/`
- route-specific Open Graph image routes
- generated sitemap, robots, and manifest routes
- JSON-LD schema for the homepage, projects, writing index, and writing posts
- a site-wide floating dock with theme and contact controls
- shared UI in `components/`
- local content in `lib/content/`
- metadata and schema helpers in `lib/metadata/`
- audio helpers and sound assets in `lib/audio/`
- MDX writing content under `content/writing/`
- internal project docs under `spec/`

Important:

- the product direction is clear and already implemented in a first strong pass
- do not reintroduce starter patterns, generic marketing sections, or portfolio clichés
- preserve the portfolio + writing identity of the site

## Source Of Truth

Read these in order when you need project guidance:

1. `AGENTS.md`
2. `spec/context.md`
3. `spec/skills.md`
4. `spec/styling.md`
5. `spec/references/*.md`
6. the actual code

## Stack And Standards

- framework: Next.js 16 App Router
- language: TypeScript with strict mode
- styling: Tailwind CSS v4
- primitives: Base UI
- component style: shadcn-style composition where useful
- package manager: pnpm
- linting: Oxlint
- formatting: Oxfmt
- file naming: kebab-case for files and component files

Working rules:

- write explicit, type-safe TypeScript
- prefer small, focused functions and components
- use descriptive names
- add comments only when behavior is not obvious
- avoid emojis in code, comments, and commit messages
- use CSS variables and shared tokens rather than scattered one-off values

## Design Direction

The target experience is:

- calm
- narrow
- editorial
- text-led
- design-engineer flavored
- minimal without feeling empty

Avoid:

- giant marketing heroes
- card piles by default
- badge walls
- noisy section chrome
- generic startup portfolio language

The current reference synthesis is:

- Dimi for reusable shell and design-engineering system thinking
- Emil for editorial restraint and rhythm
- Samet for clarity, proof, and selective warmth
- Shu for structural discipline and archive thinking

## Content And Architecture Notes

- the current content layer is lightweight and local, not a CMS
- profile, projects, social links, and homepage-authored copy live in `lib/content/site-content.ts`
- writing registry logic lives in `lib/content/writing.ts`
- writing posts live in `content/writing/*.mdx`
- post metadata is authored through native MDX exports, not frontmatter transformation
- the homepage is curated and intentionally shows featured projects, not the full archive
- the projects page is the full archive
- the site currently includes four shipped project entries and four published writing posts
- the experience section has been removed from the UI and content model
- the avatar uses theme-aware PNG assets under `public/assets/avatar/`
- writing-only UI is colocated under `app/writing/_components/`

Do not assume older planned files like `user.ts`, `projects.ts`, or `experiences.ts` already exist unless they are actually in the tree.

## Metadata, SEO, And Discovery

The project already uses Next-native metadata conventions and generated metadata routes.

Important files:

- `app/layout.tsx`
- `app/manifest.ts`
- `app/robots.ts`
- `app/sitemap.ts`
- `lib/metadata/site-metadata.ts`
- `lib/metadata/brand-image.tsx`
- `lib/metadata/schema.ts`

Current SEO/discovery behavior:

- canonical metadata is set per route
- route-level Open Graph images are generated for home, projects, writing, and writing posts
- JSON-LD schema is included for homepage, projects, writing index, and writing posts
- `public/llms.txt` and `public/llms-full.txt` are part of the shipped site

## Base UI And Styling Notes

- Base UI primitives are intentionally unstyled; styling belongs in our Tailwind and token layer
- prefer `className`, data attributes, CSS variables, and documented composition patterns over ad hoc wrappers
- preserve light and dark mode support
- keep motion purposeful, fast, and localized
- do not regress the styling system back toward stock starter aesthetics

For deeper Base UI and styling guidance, check:

- `spec/base-ui/*.md`
- `spec/styling.md`

## Skills

Project-local skills live in `.agents/skills/`. The current installed set is indexed in `spec/skills.md`.

When a task clearly matches a skill, read that skill's `SKILL.md` before implementing.

## Common Agent Tasks

- updating portfolio content
- refining homepage and writing surfaces
- adding or editing MDX writing posts
- extending reusable UI primitives
- polishing layout, typography, and interaction details
- maintaining metadata, sitemap, schema, and OG output
- keeping docs and internal references accurate as the project evolves

## Documentation Strategy

Keep documentation layered:

- `AGENTS.md` for short orientation
- `spec/context.md` for richer project memory and implementation history
- `spec/plan.md` for the active near-term roadmap
- `spec/skills.md` for the live skill index

Do not duplicate long explanations across all four files unless there is a clear reason.
