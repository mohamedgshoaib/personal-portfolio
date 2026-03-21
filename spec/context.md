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
- a starter homepage in `app/page.tsx`
- a small shared component set under `components/`
- utility and sound files under `lib/`
- sound playback hook under `hooks/use-sound.ts`
- static assets under `public/`

Important: the intended product scope is larger than the current implemented UI. When changing the app, preserve the portfolio/blog direction from `AGENTS.md`, but do not hallucinate features that are not yet in the tree.

## Source Of Truth

When you need authoritative guidance, use these files in this order:

1. `AGENTS.md`
2. `spec/context.md`
3. `spec/skills.md`
4. `spec/styling.md`
5. actual code in `app/`, `components/`, `hooks/`, and `lib/`

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

There is currently no dedicated clickable light/dark toggle component in the tree. The only theme toggle path that exists today is the keyboard shortcut inside `ThemeHotkey`.

### Skills documentation

The installed `.agents` skills are already indexed in:

- `spec/skills.md`

When a task fits an installed skill, load the relevant skill instead of guessing.

## Current File Map

High-value files to check before making changes:

- `app/layout.tsx`: root fonts, root HTML setup, theme provider mount
- `app/globals.css`: tokens, dark mode variables, base typography rules
- `app/page.tsx`: current placeholder homepage
- `components/theme-provider.tsx`: theme hotkey and all current interaction sound behavior
- `components/ui/button.tsx`: shared button primitive
- `hooks/use-sound.ts`: Web Audio hook used by Soundcn assets
- `lib/sound-engine.ts`: audio context and decode/play helpers
- `README.md`: short project overview for humans
- `AGENTS.md`: project intent and coding guidance
- `spec/skills.md`: installed skill catalog
- `spec/styling.md`: styling-specific notes

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

## Important Constraints And Reminders

- Do not assume blog/content modules already exist just because `AGENTS.md` describes them.
- Do not remove the current Oxc setup.
- Do not replace the centralized click-sound approach with per-component duplication unless there is a strong reason.
- Keep sound imports pointed at `lib/*` unless the user explicitly reorganizes them.
- Preserve the portfolio/blog direction even though the current UI is still mostly starter-level.
- Prefer extending the current architecture rather than introducing a parallel pattern for the same concern.

## Recommended Workflow For Future Changes

When returning to this repo later:

1. Read `AGENTS.md`
2. Read `spec/context.md`
3. Check `app/layout.tsx`, `app/globals.css`, and `components/theme-provider.tsx`
4. Check `package.json` to confirm scripts and tooling assumptions
5. Read `spec/skills.md` and load any matching `.agents` skill before implementing work

## Open State

Known current gaps between project intent and implementation:

- homepage is still a starter placeholder
- there is no real portfolio data model implemented in the current top-level app tree
- there is no visible UI theme toggle component yet
- the broader blog/project/experience pages described by the project intent are not yet rebuilt in the current structure

Treat those as future build areas, not already-completed features.
