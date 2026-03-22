# Project Context

> This file is the persistent working-memory document for this repository. Read it before making changes when you need fast project context, implementation history, or reminders about standards already established in the codebase.

## Project Purpose

This repository is meant to become Mohamed Gamal's personal portfolio and blog.

The intended product includes:

- a portfolio homepage
- project showcase content
- work experience and personal profile content
- blog content authored in MDX
- contact-related UI and supporting data

## Current Reality

The repository is still early in implementation and currently looks closer to a minimal Next.js + shadcn starter than a finished portfolio product.

What exists today:

- basic App Router setup under `app/`
- root layout and global theme styles
- a real first-pass portfolio homepage in `app/page.tsx`
- a writing index and first post route under `app/writing/`
- a small shared component set under `components/`
- utility and sound files under `lib/`
- sound playback hook under `hooks/use-sound.ts`
- static assets under `public/`
- internal planning and reference docs under `spec/`

Important: the intended product scope is larger than the current implemented UI. When changing the app, preserve the portfolio/blog direction from `AGENTS.md`, but do not hallucinate features that are not yet in the tree.

## Source Of Truth

When you need authoritative guidance, use these files in this order:

1. `AGENTS.md`
2. `spec/context.md`
3. `spec/skills.md`
4. `spec/styling.md`
5. `spec/references/*.md`
6. actual code in `app/`, `components/`, `hooks/`, and `lib/`

## Core Standards

These standards are already established and should be preserved:

- framework: Next.js App Router
- language: TypeScript with strict mode
- styling: Tailwind CSS v4
- component approach: shadcn/ui-style composition
- package manager: pnpm
- linting: Oxlint
- formatting: Oxfmt
- file naming: kebab-case for files and component files

Coding standards:

- prefer explicit, type-safe TypeScript
- use descriptive names
- keep functions small and focused
- add comments only when logic is genuinely non-obvious
- avoid emojis in code, comments, and commit messages
- use CSS variables and Tailwind tokens instead of scattered one-off styling

Design standards already established:

- avoid generic portfolio tropes like giant marketing heroes, stacked cards everywhere, badge walls, and clunky sectioning
- prefer editorial calm, strong spacing, and narrow reading widths over loud visual treatment
- let structure, typography, and curation create quality before adding decorative UI
- keep motion purposeful and localized; do not make the shell itself noisy
- preserve light/dark mode support and app-wide token discipline
- bias the homepage toward Emil + Dimi more than Samet when tradeoffs appear
- avoid shadows and obvious product-UI surfaces on the homepage unless clearly earned

## Tooling Decisions Already Made

These are completed decisions and should not be accidentally reverted:

### Oxc toolchain

The project has already been migrated from ESLint + Prettier to Oxc:

- `oxlint` is the lint runner
- `oxfmt` is the formatter
- root config files are:
  - `.oxlintrc.json`
  - `.oxfmtrc.json`

Package scripts already wired:

- `pnpm run lint`
- `pnpm run lint:fix`
- `pnpm run fmt`
- `pnpm run fmt:check`
- `pnpm run typecheck`

Git hooks and CI already wired:

- `lint-staged` + `simple-git-hooks` are configured in `package.json`
- pre-commit runs `pnpm exec lint-staged`
- `.github/workflows/oxc.yml` runs lint and format checks
- `.vscode/` recommends and configures the Oxc extension

Do not reintroduce ESLint or Prettier unless explicitly requested.

### Font system

App-wide fonts are already configured in `app/layout.tsx` using `next/font/google`:

- `Google_Sans` maps to `--font-sans`
- `Google_Sans_Code` maps to `--font-mono`

Global font behavior in `app/globals.css`:

- sans font is the default app font
- mono font is reserved for `code`, `pre`, `kbd`, and `samp`

Do not switch back to `Inter`, `Geist`, or raw web-font loading unless explicitly requested.

### Theme and interaction sounds

Theme behavior is handled in `components/theme-provider.tsx`.

Current sound behavior:

- global click sound uses `useSound(clickSoftSound)`
- clickable elements are detected centrally via a delegated document click listener
- theme toggling via the `d` hotkey uses:
  - `switchOnSound` when changing from dark to light
  - `switchOffSound` when changing from light to dark

Important implementation detail:

- the installed sound files live in `lib/`, not `sounds/`
- current sound modules:
  - `lib/click-soft.ts`
  - `lib/switch-on.ts`
  - `lib/switch-off.ts`

There is now a visible light/dark toggle inside the floating dock, in addition to the `d` keyboard shortcut inside `ThemeHotkey`.

### Skills documentation

The installed `.agents` skills are already indexed in:

- `spec/skills.md`

Current note:

- `spec/skills.md` is intended to stay as a concise filesystem-backed index of the currently installed project-local skills under `.agents/skills/`

When a task fits an installed skill, load the relevant skill instead of guessing.

### Base styling direction

The global CSS baseline has already been pushed away from starter defaults.

Established styling decisions in `app/globals.css` and `components/ui/button.tsx`:

- the Coss UI semantic color palette is now applied directly to the app theme tokens
- token system was refined toward softer surfaces and cleaner borders
- base typography was improved with antialiasing, balanced headings, prettier paragraph wrapping, and mono-only code styling
- buttons were tightened to feel more tactile and intentional
- `transition-all` was removed from the shared button in favor of explicit transition properties

This means the repo already has a better visual foundation than a stock starter, even though the actual portfolio pages are not built yet.

Do not regress the CSS language back toward generic starter styling.

Important nuance:

- the project intentionally keeps some additions beyond the raw Coss snippet, such as chart tokens, extended radius tokens, custom surface shadows, and the existing typography polish
- `font-heading` currently aliases the sans font instead of using a separate heading font
- Base UI isolation is currently handled at the `body` level via global CSS instead of a dedicated inner wrapper div

These are acceptable project-specific adaptations, not accidental drift.

## Design Direction Memory

The target portfolio direction is now much clearer than when this file was first written.

Current desired outcome:

- clean and minimal
- not clichéd
- not card-heavy by default
- calm, narrow, editorial, and deliberate
- design-engineer flavored rather than agency-marketing flavored
- able to support both portfolio work and technical writing

Important: the goal is not to copy any single reference. The likely future design should synthesize the references below into one original direction for Mohamed.

### Core conclusion from the reference study

The strongest portfolio references do not feel like "portfolio websites". They feel like personal systems.

That means:

- not a landing page
- not a card gallery
- not a self-branding performance
- not a stack of loud sections

Instead, the target should feel like:

- a calm, durable personal place
- an authored system for work, writing, and experiments
- a site where curation is stronger than volume
- a design-engineering portfolio with taste and restraint

Minimalism in this project should be understood as editorial restraint, not visual emptiness.

### Shared design language across the references

The four references differ in flavor, but they share a strong common system.

Common patterns:

- compact identity instead of a giant hero
- narrow reading widths
- generous whitespace
- modest, quiet typography
- text-led hierarchy
- low visual chrome
- calm navigation
- curated lists and indexes
- proof over claims
- consistent shell across page types
- soft utility surfaces when needed
- restrained palette with sparing color use

Practical translation:

The portfolio should be a narrow, calm, text-led system where structure, curation, and proof carry the design. Richer UI should appear only where it earns its place.

### Roles of the references in the synthesis

When designing future pages, think of the references as complementary inputs:

- Emil Kowalski: editorial calm and curated rhythm
- Shu Ding: archival structure and severe restraint
- Samet Ozkale: warm product clarity and trust-building proof
- Dimi: design-engineering platform feel, demos, and reusable shell

The likely direction for Mohamed is not any one of these alone. It is a synthesis:

- Emil's calm
- Shu's structure
- Samet's clarity
- Dimi's system thinking

## Reference Library

The design reference set lives in `spec/references/`.

Current reference files:

- `spec/references/emilkowalski.md`
- `spec/references/shudin.md`
- `spec/references/samet.md`
- `spec/references/dimi.md`

Each file captures visual observations and translation notes for this project.

High-level roles of each reference:

1. Emil Kowalski
   - editorial calm
   - narrow reading column
   - curated list-based structure
   - excellent model for portfolio + long-form article rhythm

2. Shu Ding
   - archival structure
   - left-rail identity
   - austere restraint
   - strong model for text-led writing and project indexing

3. Samet Ozkale
   - warm product minimalism
   - more commercially legible
   - strong use of screenshots, proof, trust, and timelines without cliché

4. Dimi
   - design-engineering platform minimalism
   - strongest reference for lab content, demos, code presentation, and a reusable site shell

Use these reference files before making major layout or styling decisions. They now represent part of the project's memory, not just temporary inspiration.

## Current File Map

High-value files to check before making changes:

- `app/layout.tsx`: root fonts, root HTML setup, theme provider mount
- `app/globals.css`: tokens, dark mode variables, base typography rules
- `app/page.tsx`: current homepage implementation
- `app/projects/page.tsx`: projects index route used by the dock and project archive
- `components/floating-dock.tsx`: site-wide floating dock navigation and theme toggle
- `app/writing/page.tsx`: writing index page
- `app/writing/[slug]/page.tsx`: first post route and article rendering
- `components/theme-provider.tsx`: theme hotkey and all current interaction sound behavior
- `components/home/*`: homepage-specific UI primitives
- `components/ui/button.tsx`: shared button primitive
- `components/ui/button-styles.ts`: server-safe shared button variant definitions
- `components/ui/popover.tsx`: Base UI popover primitive used by the dock contact panel
- `components/ui/tooltip.tsx`: Base UI tooltip primitive adapted for compact utility UI
- `components/ui/kbd.tsx`: keyboard hint primitive used inside tooltips and utility surfaces
- `hooks/use-sound.ts`: Web Audio hook used by Soundcn assets
- `lib/sound-engine.ts`: audio context and decode/play helpers
- `lib/site-content.ts`: current typed portfolio content source
- `README.md`: short project overview for humans
- `AGENTS.md`: project intent and coding guidance
- `spec/skills.md`: installed skill catalog
- `spec/styling.md`: styling-specific notes
- `spec/references/*.md`: design reference library and translation notes

## What Has Been Developed So Far

This section is here to prevent loss of context over time.

Completed work in this repo:

1. Oxc migration
   - ESLint and Prettier were replaced with Oxlint and Oxfmt.
   - Scripts, config, editor setup, CI, and pre-commit integration were added.

2. README cleanup
   - `README.md` was reduced to a short, human-facing overview instead of duplicating internal agent guidance.

3. Fonts
   - App font stack changed to `Google Sans` + `Google Sans Code`.
   - Code-like elements use the mono font only.

4. Interaction audio
   - A global click sound system was added using Soundcn assets.
   - Theme switching sounds were implemented for dark/light transitions.

5. Agent docs
   - `spec/skills.md` was created as the installed skill index.
   - `spec/context.md` was rewritten as a true project-memory document.

6. Styling foundation
   - the base token and typography system was upgraded away from generic starter defaults
   - the shared button primitive was refined to feel more intentional and tactile

7. Design reference library
   - detailed reference notes were added for Emil Kowalski, Shu Ding, Samet Ozkale, and Dimi
   - these notes capture what to borrow, what not to copy, and how each reference should influence Mohamed's portfolio

8. Visual direction clarification
   - the intended visual direction is now substantially clearer than the current UI
   - the first real implementation pass is now in place, but the full product scope is still not finished

9. First implementation pass
   - the generic starter homepage was replaced with a real portfolio homepage
   - a typed content source was added in `lib/site-content.ts`
   - the homepage now presents Mohamed's identity, selected work, experience, writing, stack, and contact details
   - a writing index and the first blog post route were added under `app/writing/`
   - `app/layout.tsx` now includes basic site metadata

10. Homepage refinement toward Emil + Dimi

- the homepage was pulled away from a warmer, more product-like first pass
- cards, badge-like treatments, screenshot-heavy sections, and obvious shadows were removed from the homepage shell
- section structure was simplified into calmer text-led blocks with minimal rules and tighter hierarchy
- projects and experience now use quiet disclosure patterns to keep the page compact as more entries are added
- disclosure affordances now use a small edge-aligned SVG chevron instead of casual `+ / -` text
- the disclosure behavior is meant to feel like progressive text reveal, not a dashboard accordion
- the current section order is:
  - About
  - Projects
  - Experience
  - Stack
  - Writing
  - Contact
- section rules were later removed again so the shell stays closer to Emil's spacing-led separation than to Dimi's homepage separators

11. Floating dock shell

- a shared floating dock now lives in the root layout as a site-wide navigation and theme-control surface
- the dock uses Hugeicons, Base UI tooltips, Base UI popovers, the `kbd` primitive, and the existing theme sound behavior
- the dock currently links to:
  - Home
  - Projects
  - Writings
- `Projects` is now a real route at `app/projects/page.tsx`, not only a homepage hash target
- the contact icon now opens a compact popover panel above the dock instead of jumping to the footer
- the contact control now uses Base UI detached tooltip/popover triggers with a stable trigger id in controlled mode so click-to-open and click-again-to-close both work reliably
- tooltip timing and motion follow the Emil design-engineering guidance: delayed first hover, instant subsequent hovers, short transitions, and trigger-origin-aware animation
- the tooltip surface is now solid and arrowless after review, with the theme tooltip showing `Light mode` or `Dark mode` plus `Kbd(D)` and the contact tooltip suppressed while its popover is open
- the dock is intentionally small, blurred, and restrained so it reads as a compact utility object rather than app chrome
- the dock now uses a Dimi-inspired layered backdrop-blur field so content can visually blur underneath it instead of being pushed away by page spacing
- the contact popover currently exposes direct actions for email, LinkedIn, and X in a text-led panel that matches the site's calmer editorial system rather than copying Dimi's internal button styling
- the dock now uses a single measured active surface that animates between Home, Projects, Writings, and Contact rather than relying on per-item backgrounds or hard-coded spacing math
- the heavier multi-layer backdrop blur is now gated off on small screens, leaving the simpler dock surface blur in place for mobile performance
- the dock shell now uses the same `bg-background/60` + `backdrop-blur-xl` surface treatment as the contact popover so both utility layers feel like one system
- mobile sizing was tightened so the dock and contact popover do not introduce horizontal scroll

12. Writing surface refinement

- the writing index was pulled away from the earlier card and cover-image treatment
- the writing list is now a quiet text-led archive closer to Emil's editorial rhythm and Dimi's system consistency
- blog post pages now use the same narrow shell and calmer spacing as the homepage instead of a louder article template
- article pages now rely on restrained metadata, simple prose rhythm, and lighter code surfaces rather than hero imagery
- post content now supports ordered and unordered lists explicitly in the typed content model

13. Shared text-link state and interaction cleanup

- text-led links across the homepage, writing index, writing post pages, and project disclosure content now use a shared monochrome link treatment
- the shared link state keeps links muted at rest and slightly clearer on hover/focus, without introducing bright accent color
- this shared behavior now lives in the global styling layer and the `components/home/text-link.tsx` primitive instead of being repeated per component
- internal route links still use `next/link`, while external and `mailto:` links in the shared text-link primitive now render as plain anchors
- hover lift was removed from the dock and the contact copy CTA so the project keeps shared press feedback without upward hover motion on those controls

14. Mobile project disclosure image alignment

- the persistent project preview image inside the homepage disclosure list needed a mobile-only visual centering adjustment
- the current solution is implemented in `components/home/disclosure-list.tsx` at the wrapper level, without changing the underlying image sizing logic
- this was adjusted manually in the repo after an earlier attempted fix was reverted

## Important Constraints And Reminders

- Do not assume blog/content modules already exist just because `AGENTS.md` describes them.
- Do not remove the current Oxc setup.
- Do not replace the centralized click-sound approach with per-component duplication unless there is a strong reason.
- Keep sound imports pointed at `lib/*` unless the user explicitly reorganizes them.
- Preserve the portfolio/blog direction even though the current UI is still mostly starter-level.
- Prefer extending the current architecture rather than introducing a parallel pattern for the same concern.
- Use the reference notes to guide design choices, but do not copy any referenced site literally.
- Remember that the project is now in a "clear direction, low implementation" state: the vision is richer than the shipped UI.

## Recommended Workflow For Future Changes

When returning to this repo later:

1. Read `AGENTS.md`
2. Read `spec/context.md`
3. Check `app/layout.tsx`, `app/globals.css`, and `components/theme-provider.tsx`
4. Check `package.json` to confirm scripts and tooling assumptions
5. Read `spec/references/*.md` before major visual work
6. Read `spec/skills.md` and load any matching `.agents` skill before implementing work

## Open State

Known current gaps between project intent and implementation:

- only the first implementation pass of the homepage exists
- the reference-informed visual direction is now partially implemented, but not yet carried through a full site-wide system
- the homepage should continue moving toward the quieter Emil + Dimi synthesis, not back toward a product marketing layout
- the dock is now part of the reusable site shell, but its blur/offset/details should still be judged against the Dimi reference during future polish
- the current content model is lightweight and local, not a full blog/project CMS or MDX pipeline
- only one project, one experience entry, and one post are currently represented in the new typed content layer
- broader project, experience, and long-form content surfaces are not yet fully built out

Current immediate likely next milestone:

- expand the new homepage/content system with more real portfolio entries
- deepen the page polish and layout rhythm based on the reference synthesis
- move the writing system from the temporary typed local content model to an MDX-backed flow

Current writing-direction decision:

- MDX is now the intended direction for the writing system
- the current typed post-content model should be treated as a temporary bridge, not the long-term content architecture

MDX implementation guidance now established from the official MDX docs:

- for this Next.js project, prefer the framework integration route with `@next/mdx`
- do not plan around `providerImportSource` or `@mdx-js/react` for component injection in Next.js; use the Next-style `mdx-components.tsx` pattern instead
- treat each MDX file as a module with a default export for content and optional named exports for metadata or other authored values
- keep the initial setup lightweight and plugin-driven: add remark/rehype plugins only when they solve a clear need
- likely first plugin candidates for this project are frontmatter support and GFM-style markdown features, but those should still be chosen deliberately during implementation
- remember key MDX syntax constraints when authoring content:
  - HTML syntax is replaced by JSX syntax
  - autolink literals do not work like plain markdown and should use explicit link syntax
  - indented code blocks do not work in MDX
  - raw `<` and `{` often need escaping when meant as plain text
  - invalid `import` or `export` lines will hard-fail parsing because they are treated as JavaScript
- layout and component mapping should preserve the current quiet writing presentation rather than introducing a louder docs-like shell by default

Treat those as future build areas, not already-completed features.
