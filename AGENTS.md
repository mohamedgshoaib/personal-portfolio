# AI Agent Guidelines For Mohamed Gamal's Portfolio

This file is the short entrypoint for agents working in this repository. Use it for orientation, then read the richer project memory in `spec/context.md` before making meaningful changes.

## Current Project State

This repository is no longer a generic starter. It is an in-progress personal portfolio and writing site with a real first implementation pass already shipped.

What exists today:

- Next.js App Router application under `app/`
- a real homepage in `app/page.tsx`
- a projects index in `app/projects/page.tsx`
- a writing index and MDX-backed post route under `app/writing/`
- a site-wide floating dock with theme and contact controls
- shared UI and homepage components under `components/`
- typed local portfolio content in `lib/site-content.ts`
- MDX writing content under `content/writing/` with registry logic in `lib/writing.ts`
- theme switching and interaction sounds
- internal project docs under `spec/`

Important:

- the product direction is clearer than the amount of implemented content
- do not treat planned features as already built
- preserve the current portfolio + writing direction rather than reintroducing starter patterns

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

- the current content layer is lightweight and local, not a full CMS
- `lib/site-content.ts` is still the main typed content source for profile, projects, experience, and links
- writing now uses an MDX-backed flow with content under `content/writing/` and registry logic in `lib/writing.ts`
- post metadata is currently authored through native MDX exports rather than frontmatter transformation
- the local content currently includes four shipped project entries, one experience entry, and one published writing post
- the avatar uses theme-aware local PNG assets under `public/assets/avatar/`

Do not assume older planned files like `user.ts`, `projects.ts`, or `experiences.ts` already exist unless they are actually in the tree.

MDX direction notes:

- the project already uses the Next.js integration path with `@next/mdx`
- in Next.js, keep component mapping in `mdx-components.tsx` rather than planning around `providerImportSource`
- keep the MDX setup minimal and add remark/rehype plugins only when they clearly support the writing needs of this project

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
- extending reusable UI primitives
- polishing layout, typography, and interaction details
- keeping docs and internal references accurate as the project evolves

## Documentation Strategy

Keep documentation layered:

- `AGENTS.md` for short orientation
- `spec/context.md` for richer project memory and implementation history
- `spec/skills.md` for the live skill index

Do not duplicate long explanations across all three files unless there is a clear reason.
