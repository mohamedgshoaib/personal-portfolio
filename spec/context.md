# Project Context

> This file is the persistent working-memory document for this repository. Read it when you need the current architecture, implementation history, and the standards already established in the codebase.

## Project Purpose

This repository is Mohamed Gamal's personal portfolio and writing site.

The site is intended to present:

- a concise personal identity
- selected frontend projects
- a writing archive
- direct contact paths
- a durable personal system rather than a one-page portfolio performance

## Current Reality

The repository is no longer a starter and no longer just a design direction document. It now has a real implementation, a functioning content system, and a clear visual language.

What exists today:

- Next.js 16 App Router application under `app/`
- real homepage in `app/page.tsx`
- projects archive in `app/projects/page.tsx`
- writing index and MDX-backed post route in `app/writing/`
- route-specific Open Graph image generation
- generated sitemap, robots, and manifest routes
- JSON-LD schema on key routes
- `llms.txt` and `llms-full.txt`
- a site-wide floating dock with contact, sound mute, and theme controls
- shared homepage and UI primitives in `components/`
- route-local writing UI in `app/writing/_components/`
- authored content in `lib/content/`
- metadata and schema helpers in `lib/metadata/`
- audio helpers and sound assets in `lib/audio/`
- static assets under `public/`
- internal planning and references under `spec/`

Important:

- the product direction is now clearer than the amount of content on the site
- future work should preserve the existing portfolio + writing direction
- do not hallucinate old planned features that are no longer in the tree

## Source Of Truth

When you need authoritative guidance, use these in order:

1. `AGENTS.md`
2. `spec/context.md`
3. `spec/plan.md`
4. `spec/skills.md`
5. `spec/styling.md`
6. `spec/references/*.md`
7. actual code

## Core Standards

Already established and should be preserved:

- framework: Next.js 16 App Router
- language: TypeScript with strict mode
- styling: Tailwind CSS v4
- primitives: Base UI
- package manager: pnpm
- linting: Oxlint
- formatting: Oxfmt
- file naming: kebab-case for files and component files

Coding standards:

- prefer explicit, type-safe TypeScript
- use descriptive names
- keep functions and components focused
- add comments only when behavior is genuinely non-obvious
- avoid emojis in code, comments, and commit messages
- use CSS variables and shared tokens instead of one-off styling

## Design Direction Memory

The intended experience is:

- calm
- narrow
- editorial
- text-led
- design-engineer flavored
- minimal without feeling empty

The project should continue to synthesize the references rather than copy any one site.

Current weighting:

- Emil for calm and editorial rhythm
- Dimi for reusable shell and design-engineering system thinking
- Samet for selective warmth, proof, and clarity
- Shu for structural discipline and archive thinking

Practical translation:

- compact identity instead of a large hero
- curated content instead of volume
- proof over self-branding
- low visual chrome
- motion that stays quiet and localized
- pages that feel like one coherent personal system

## Architecture Memory

### Current file organization

Shared architecture is now grouped by concern:

- `lib/content/`
  - `site-content.ts`
  - `writing.ts`
- `lib/metadata/`
  - `site-metadata.ts`
  - `brand-image.tsx`
  - `schema.ts`
- `lib/audio/`
  - `sound-engine.ts`
  - `sound-types.ts`
  - embedded sound assets

This grouping was introduced intentionally to separate authored content, metadata/discovery logic, and audio behavior.

### Writing route colocation

Writing-only UI was moved into:

- `app/writing/_components/`

This is the current preferred pattern for route-specific writing helpers. Shared components should stay outside `app/`, but writing-private pieces can live with the route.

### Content model

Current local content model:

- profile, homepage copy, projects, and social links live in `lib/content/site-content.ts`
- writing registry lives in `lib/content/writing.ts`
- writing source files live in `content/writing/*.mdx`

Important current state:

- the homepage now uses featured projects only
- the homepage currently features Devloop, Dana Doors, and Mo's Experiences
- the projects page is the full archive
- the total number of projects in the archive is 7 (as of April 2026)
- the experience section has been removed from the content model and UI
- the old stack list was replaced by authored `Approach` copy

## Tooling Decisions Already Made

### Oxc toolchain

The project has already been migrated from ESLint + Prettier to Oxc:

- `oxlint` is the lint runner
- `oxfmt` is the formatter

Scripts already wired:

- `pnpm run lint`
- `pnpm run lint:fix`
- `pnpm run format`
- `pnpm run format:check`
- `pnpm run typecheck`

Git hooks:

- `lint-staged` + `simple-git-hooks` are configured in `package.json`
- pre-commit runs `pnpm exec lint-staged`

Do not reintroduce ESLint or Prettier unless explicitly requested.

### Font system

Fonts are configured in `app/layout.tsx`:

- `@calcom/cal-sans-ui` provides the default `--font-sans` / `--font-heading` variable through its Next font export
- `--font-mono` intentionally maps to the same Cal Sans UI variable to avoid a second font payload
- the old 4.7 MB Google Sans variable TTF was removed from `public/fonts/` after the Cal Sans UI switch

Global font behavior:

- sans is the default app font
- code-like elements use the same Cal Sans UI family with tabular numbers, not a separate monospace font

### Theme and interaction sounds

Theme behavior is handled in `components/theme-provider.tsx`.

Current sound behavior:

- global click sound is delegated centrally
- click and theme-switching sounds are dynamically imported at interaction time so audio data is not part of the initial client path
- dock and hotkey interaction sounds respect a shared global mute state
- the dock includes a mute toggle before the theme toggle (`VolumeHighIcon` / `VolumeOffIcon`)
- dock active navigation state is derived from `usePathname`; route changes from links outside the dock update the active item without optimistic local state
- mute preference is persisted in `localStorage` (`portfolio-audio-muted`)
- audio decode/play helpers live in `lib/audio/sound-engine.ts`
- sound assets live in `lib/audio/`

The dock also includes a visible theme toggle in addition to the `d` shortcut.

### Metadata and discovery

The site now has a stronger metadata/discovery layer than earlier project notes reflect.

Implemented:

- root metadata in `app/layout.tsx`
- page/article metadata helpers in `lib/metadata/site-metadata.ts`
- generated OG image routes
- generated `manifest.ts`, `robots.ts`, and `sitemap.ts`
- JSON-LD schema helpers in `lib/metadata/schema.ts`
- `public/llms.txt`
- `public/llms-full.txt`

Important historical note:

- temporary `?v=2` query params were once added to social image URLs to force X to recrawl a stale homepage card
- after X finally picked up the new dynamic social images for the plain homepage URL, those query params were removed and the metadata returned to plain route URLs

### Styling baseline

The visual foundation has already moved away from starter defaults.

Established styling decisions:

- custom token system in `app/globals.css`
- off-white light canvas
- balanced headings and pretty body wrapping
- shared motion utilities for disclosure, overlay, layout, and fades
- restrained monochrome link/action styling
- inline text links stay visually stable on press; tactile scale feedback is reserved for controls
- a compact floating dock shell using the shared floating surface treatment and one lightweight backdrop blur layer
- projects are presented as editorial rows with always-visible 4:3 previews
- the homepage shows three curated projects and links to the archive with a dynamic remaining-project count
- full project descriptions and stack details live in a Base UI bottom sheet rather than inline accordions
- project previews avoid extra colored image backplates; the image asset itself carries the visual frame
- project sheet stack details use a quiet inline wrap with dot separators instead of badges, dense columns, or tall vertical lists
- shared `surface-floating` utility in `app/globals.css` defines the distinct `bg-card` surface, quiet edge, and no-shadow treatment used by the project sheet
- shared `surface-floating-glass` utility keeps the dock and dock popover lighter and blurred while preserving the same quiet edge language
- shared text hierarchy utilities in `app/globals.css` define section labels and item titles so page headings, project rows, and writing rows stay visually consistent

Recent addition:

- route-level page transitions are now handled by `app/template.tsx` (App Router template remount on navigation)
- the previous client shell approach with mount-state `useEffect` was removed
- the transition style is subtle and cheap (fade + slight lift, no blur/filter) and respects reduced motion
- project detail sheets now use a restrained bottom-up motion with a light backdrop and reduced-motion support
- section labels and project titles were rebalanced so section headings are not visually weaker than the items they introduce
- project row images were slightly reduced and centered on mobile; sheet images are also centered and constrained

Important nuance:

- `body` now carries `text-wrap: pretty`
- headings still explicitly use `text-wrap: balance`
- the project intentionally keeps a light editorial feel instead of a loud product UI feel

## Current Route Map

High-value files:

- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/projects/page.tsx`
- `app/writing/page.tsx`
- `app/writing/[slug]/page.tsx`
- `app/opengraph-image.tsx`
- `app/projects/opengraph-image.tsx`
- `app/writing/opengraph-image.tsx`
- `app/writing/[slug]/opengraph-image.tsx`
- `app/manifest.ts`
- `app/robots.ts`
- `app/sitemap.ts`
- `components/floating-dock.tsx`
- `components/theme-provider.tsx`
- `components/home/*`
- `app/writing/_components/*`
- `lib/content/*`
- `lib/metadata/*`
- `lib/audio/*`

## What Has Been Developed So Far

This section exists to prevent loss of project memory over time.

Completed work:

1. Tooling migration
   - ESLint + Prettier were replaced with Oxlint and Oxfmt.

2. Real portfolio implementation
   - the starter homepage was replaced with a real editorial portfolio homepage
   - a projects archive route was added
   - a writing index and writing post route were built

3. Shared shell
   - the floating dock was added as a reusable site-wide shell element
   - theme toggle and contact popover were integrated into that shell

4. Writing system
   - writing moved to an MDX-backed system
   - posts are authored as MDX modules with native metadata exports
   - route-local writing helpers were later colocated under `app/writing/_components/`

5. Content direction
   - homepage sections were simplified
   - the experience section was removed
   - the stack list was replaced with authored `Approach` copy
   - the homepage now shows featured projects only

6. Metadata and SEO
   - root/page/article metadata helpers were added
   - route-specific OG images were added
   - sitemap, robots, and manifest routes were added
   - structured data was later added for homepage, projects, writing, and writing posts

7. LLM/discovery support
   - `llms.txt` and `llms-full.txt` were added and aligned with the project’s personal-brand positioning

8. Architecture cleanup
   - dead code and unused files were removed
   - `lib` was reorganized into `content`, `metadata`, and `audio`

9. Project archive presentation
   - project accordions were replaced with text-led rows that keep the project image, name, summary, status, and actions visible
   - long descriptions and full stack lists moved into an accessible Base UI bottom sheet
   - old accordion hover-preview and chevron helpers were removed after the interaction model changed
   - project rows expose `Details` and the crucial `Visit website` action; repository links stay inside the sheet footer
   - the sheet floats slightly above the bottom edge with full rounded corners and the shared `surface-floating` treatment; it keeps project identity in a slim evenly padded header, external project links on the left side of a single-row slim footer, one separate close action on the right side with an extended hit area, and a smaller full-image preview in the content area

## Current Content State

Current authored content:

- seven shipped projects
- four published writing posts
- homepage profile/about/approach content
- no experience section

Current projects:

- Dana Doors
- Forge
- Markymap
- Mo's Experiences
- Reway
- Rootly
- Devloop

Current writing:

- Hello World: What This Blog Is About
- Search Visibility in 2026: Beyond Meta Tags
- AI Discovery in 2026: The llms.txt Standard
- Privacy-Friendly Analytics That Actually Work (Even With Adblockers)

## Important Constraints And Reminders

- do not assume the old flat `lib/site-content.ts` or `lib/writing.ts` paths still exist
- do not reintroduce the experience section unless explicitly requested
- do not turn the homepage into the full project archive
- do not replace the local content model with a CMS without clear need
- do not regress metadata, schema, sitemap, robots, or OG coverage
- keep external links and authored summaries factually accurate
- use the reference notes to guide design choices, but do not copy any referenced site literally

## Recommended Workflow For Future Changes

When returning to this repo later:

1. Read `AGENTS.md`
2. Read `spec/context.md`
3. Read `spec/plan.md`
4. Check `app/layout.tsx`, `app/globals.css`, and `components/theme-provider.tsx`
5. Check `lib/content/`, `lib/metadata/`, and `app/writing/_components/`
6. Read `spec/references/*.md` before major visual work
7. Read `spec/skills.md` and load any matching skill before implementing

## Open State

Known current gaps between product quality and product breadth:

- the system is strong, but the content archive is still relatively small
- the writing archive should keep growing
- projects may later justify deeper detail pages, but they do not yet require them
- the visual direction is established, but still needs continued consistency as new content is added

Current likely next milestone:

- expand content depth while preserving the current calm, technical, editorial identity
