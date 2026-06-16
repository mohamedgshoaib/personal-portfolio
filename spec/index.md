# Mohamed Gamal Personal Portfolio

Mohamed Gamal's personal portfolio and writing site is a durable personal system for presenting a concise identity, selected frontend projects, a writing archive, and direct contact paths. It should feel calm, narrow, editorial, text-led, and design-engineer flavored: minimal without feeling empty, fast to understand, and easy to revisit.

## Core Purpose

For external visitors, the site answers three questions quickly: who Mohamed is, what kind of frontend work he does, and where to go next for projects, writing, or contact.

For Mohamed, the site is a maintainable publishing surface that can grow over time without turning into a one-page portfolio performance.

This project is not meant to become:

- A flashy landing page that hides the work behind decoration.
- A maximal personal archive where every possible detail appears at once.
- A theme demo or component playground detached from authored content.

> **The Central Mechanism** — A narrow editorial spine presents identity, work, writing, and contact with enough restraint that the content stays in charge.

## Product Model

**What it is:**

- A real homepage in `app/page.tsx`.
- A projects archive in `app/projects/page.tsx`.
- A writing index and MDX-backed post route in `app/writing/`.
- Route-specific Open Graph image generation.
- Generated sitemap, robots, and manifest routes.
- JSON-LD schema on key routes.
- `llms.txt` and `llms-full.txt` for agent-readable site context.
- A site-wide floating dock for navigation.
- Authored content under `lib/content/`.
- Metadata and schema helpers under `lib/metadata/`.
- Audio helpers and sound assets under `lib/audio/`.
- Static assets under `public/`.
- Internal planning and references under `spec/`.

**Core truths that guide every decision:**

- The site should communicate intent within 2-3 seconds of view.
- Progressive disclosure beats showing everything at once.
- Text is the main interface; visual details should sharpen the reading experience.
- Navigation should feel direct and persistent, not performative.
- Shared systems should make the site easier to extend, not more abstract.

**Signature mechanics:**

- A centered, narrow content column with generous whitespace.
- Short section headings such as "Now", "Work", "Writing", and "Contact".
- Dense but breathable list rows for projects and posts.
- Subtle dividers, muted descriptions, and restrained metadata.
- Optional thumbnails or media only when they clarify the item.
- A floating dock that gives quick access to primary routes without stealing attention.
- Route metadata, schema, and generated discovery files kept in sync with content.

## Target Audience

### External

- Recruiters, collaborators, founders, and engineers evaluating Mohamed's frontend taste and judgment.
- Readers looking for practical writing about frontend engineering, interface design, and building durable systems.

**Profile:** Mostly desktop and mobile visitors with short attention spans. They need to understand the site in a few seconds, scan work without friction, and find contact paths without reading instructions.

### Internal

- Mohamed as author, curator, and maintainer.
- Agents contributing to implementation, content, metadata, and polish.

**Profile:** Technical users working inside a Next.js codebase. They expect explicit TypeScript, focused modules, shared tokens, and predictable content systems.

## Experience Direction

The site should feel:

- Calm.
- Narrow.
- Editorial.
- Text-led.
- Design-engineer flavored.
- Minimal without feeling empty.

The inspiration direction is a centered personal index: identity at the top, a short current-state paragraph, then compact sections for projects and writing. The page should lean on spacing, rhythm, type hierarchy, and small details rather than heavy cards, gradients, or decorative illustration.

Dark mode may exist, but it should preserve the same editorial restraint. A dark surface should feel like a quiet reading environment, not a dramatic portfolio skin.

## Visual Principles

1. Use a narrow content measure by default. Wide viewports should add quiet margin, not stretched content.
2. Prefer plain rows, subtle dividers, and compact lists over card grids.
3. Keep section headings modest. Reserve visual emphasis for hierarchy and scannability.
4. Use CSS variables and shared tokens instead of one-off styling.
5. Fix UI root causes in `app/globals.css` or `components/ui/*`, not isolated page overrides.
6. Use images, thumbnails, or media only when they reveal real work or add useful recognition.
7. Avoid decorative gradients, oversized hero sections, and marketing-style composition.
8. Outer radius should equal inner radius plus padding when framed UI is necessary.

## Interaction Principles

Animate:

- State changes.
- Navigation transitions.
- Feedback on actions.
- Loading states.

Do not animate:

- Form submission while awaiting response.
- Destructive confirmations.
- Repeated micro-interactions after first use.

Initial page-load motion may be expressive. Repeated interactions should be fast, quiet, and low-friction.

## Architecture & Constraints

Shared architecture is grouped by concern:

- `lib/content/`
  - `project-pages.ts`
  - `writing-pages.ts`
  - `content-discovery.ts`
- `lib/metadata/`
  - `site-metadata.ts`
  - `brand-image.tsx`
  - `schema.ts`
- `lib/audio/`
  - `sound-engine.ts`
  - `sound-types.ts`
  - embedded sound assets

This grouping intentionally separates authored content, metadata/discovery logic, and audio behavior.

Current implementation state: the repository has a first-pass homepage with placeholder content, reusable homepage/interface primitives, motion surface helpers, typed authored content under `lib/content/`, Fumadocs MDX collections for projects and writing, static `/projects` plus `/projects/[slug]` routes, static `/writing` plus `/writing/[slug]` routes, first-pass project and writing detail page anatomy, a shared desktop-only `ArticleToc` powered by generated MDX `toc` data, shared page URL/share/Markdown actions, cleaned Markdown export for project and writing detail pages, 3:2 article media primitives for writing, project and writing discovery records, shared route metadata helpers, local Google Sans / Google Sans Code fonts, shared typography roles in `lib/design/text-styles.ts`, generated sitemap/robots/manifest routes, static `llms.txt` and `llms-full.txt` routes, route-level JSON-LD helpers, and dynamic Open Graph image routes. The writing MDX flow is tracked in `spec/writing-mdx-flow-spec.md`; chunks 0-9 are complete. The metadata/discovery/OG phase is tracked in `spec/metadata-discovery-og-spec.md`; the first pass is complete, with exact Google Sans matching in OG images deferred until a Satori-compatible static font is available. The completed structural health pass for module families, `Page Actions`, article detail chrome, and `Content Discovery` clarity is tracked in `spec/codebase-structure-deepening-spec.md`. The next homepage motion pass for a homepage-only staggered entrance scene is tracked in `spec/homepage-stagger-scene-spec.md`. Planned audio helpers, real authored content/media, route/view transitions, and richer media/signature effects should still be implemented according to this document rather than assumed to already exist. Project detail drawers are no longer the canonical direction; dedicated project pages are.

## Technology Stack

**Core**

- Next.js 16 App Router.
- React 19.
- TypeScript 5.
- Tailwind CSS 4.
- pnpm.

**UI & Components**

- Coss UI.
- Base UI via `@base-ui/react`.
- `@tabler/icons-react`.
- `class-variance-authority`.
- `clsx`.
- `tailwind-merge`.
- `next-themes`.
- Self-hosted local Google Sans and Google Sans Code through `next/font/local`.

**Icon conventions**

- Import Tabler icons as ESM components from `@tabler/icons-react`.
- Use filled-style icons by default when a filled variant exists, such as `IconHomeFilled`.
- Use outline icons for directional controls or cases where Tabler has no filled variant.
- Size, color, and stroke can be adjusted through props such as `size`, `color`, and `stroke`.

**Tooling**

- ESLint 9 with `eslint-config-next`.
- Prettier with `prettier-plugin-tailwindcss`.
- TypeScript `tsc --noEmit`.

## Coding Standards

- Prefer explicit, type-safe TypeScript.
- Use descriptive names.
- Keep functions and components focused.
- Add comments only when behavior is genuinely non-obvious.
- Avoid emojis in code, comments, and commit messages.
- Use CSS variables and shared tokens instead of one-off styling.
- Read exports, callers, and shared utilities before adding code.
- Match existing conventions even when changing nearby code.
- Surface uncertainty when verification is incomplete.

## Content Model

Authored content should live in `lib/content/` for structured records and under `content/` for MDX-authored project detail pages and future writing posts.

Content should be:

- Short enough to scan.
- Specific enough to communicate taste and capability.
- Structured enough to power metadata, schema, `llms.txt`, and route surfaces from the same source of truth where practical.

Projects should emphasize what was built, the interaction or engineering problem solved, and the visible result. Writing should emphasize title, concise summary, publication date, and route slug.

## Metadata & Discovery

Key routes should include:

- Accurate page metadata.
- Route-specific Open Graph imagery.
- JSON-LD schema where useful.
- Sitemap inclusion.
- Robots and manifest support.
- Agent-readable summaries in `llms.txt` and `llms-full.txt`.

Metadata helpers belong in `lib/metadata/`. Avoid duplicating brand text, canonical URLs, or schema fragments inside individual routes when a shared helper can keep them consistent.

## Non-Negotiable Principles

1. No decorative work that delays comprehension.
2. No one-off page styling when a shared token or UI primitive should own the behavior.
3. No content surface that requires instructions to operate.
4. No broad architecture fork without first documenting the reason and trade-off.
5. No claim of completion when tests, type checks, or route verification were skipped.

## Working Posture For Agents

Agents working in this repository should think in this order:

1. What is the central editorial spine of this change?
2. Which visible surface owns the user experience?
3. Which shared concern owns the data, metadata, audio, or styling behavior?
4. Is the implementation making the system clearer or more mixed?
5. What has been verified, and what uncertainty remains?

Simple local edits do not need a skill. New features must use the `grill-me` skill first and wait for spec confirmation before implementation. Architecture or broad structural decisions must use the relevant architecture skill when available.
