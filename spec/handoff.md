# Handoff — 2026-06-15

## Where We Are

Session covered two major areas: (1) dock/sound/hydration polish and (2) project card image pipeline. All 7 real projects now have MDX files and the card image infrastructure is wired. The site is in a clean, shippable state with no open blockers.

Read `spec/sessions/2026-06-15-dock-blur-sound-system.md` for the full completed list and architectural decisions from today.

---

## What Was Just Done (this session)

- `useReducedMotion()` from `motion/react` eliminated project-wide — SSR-unsafe. Replaced with `useMediaQuery("(prefers-reduced-motion: reduce)")` in three files: `homepage-scene-motion.ts`, `text-roll.tsx`, `animated-background.tsx`. Do not reintroduce it.
- TOC minimap `height` animation fixed — was in `style` (instant), moved to `animate` (springs with position).
- Avatar made non-interactive (`pointer-events-none`, `draggable={false}`). Uses `fetchPriority="high"` not `priority` — Base UI renders native `<img>`, not `next/image`.
- All project image surfaces standardised to `aspect-[3/2]`. One crop for everything: `1200×800` or `1800×1200`.
- Project card image pipeline: `screenshotSrc` in frontmatter → `ProjectContent` type → `ProjectMediaFrame` renders `next/image`. First two cards get `priority` for LCP (index threaded via `EditorialEntityList.renderItem` third param).
- 7 real project MDX files live at `content/projects/`: reway, danadoors, devloop, forge, markymap, mosexperiences, rootly. Placeholders deleted.

---

## What's Next (likely)

- **Project content**: All 7 project MDX files have placeholder `title`, `description`, `summary`, `liveHref`, `sourceHref`, `stack`. Real values need to be filled in.
- **Writing list thumbnails**: removed permanently. Writing list is text-only (title + excerpt).
- **Project detail images**: `ProjectMediaPlaceholder` is a styled div. Same approach when real screenshots come in.
- **`mosexperiences` image**: The only `.jpg` in the project assets (all others are `.webp`). Worth converting when convenient.

---

## Established Principles to Carry Forward

**Animation:**

- Never split animated values between `style` (instant) and `animate` (spring) on the same Framer Motion element — everything that changes goes in `animate`.
- Spring config throughout: `{ type: "spring", duration: 0.3, bounce: 0 }`.
- `useMediaQuery("(prefers-reduced-motion: reduce)")` is the only safe SSR pattern for reduced motion. Never use `useReducedMotion()` from `motion/react`.

**Images:**

- All image surfaces: `aspect-[3/2]`, `next/image`, `sizes` matching rendered size.
- Avatar is the only exception — Base UI `<img>`, uses `fetchPriority="high"`.
- `priority` on first two project cards (LCP); rest lazy.
- Per-surface image components (`ProjectMediaFrame`) are the single choke points — update once, all instances inherit.

**Sound:**

- `useSound()` hooks live in client components only. `SoundProvider` wraps the tree in `app/layout.tsx`.
- Button items handle their own sound via `onClick`. `onItemClick` in `AnimatedIconLinkGroup` fires only for link items — avoids double-sound on theme toggle.

**Content pipeline:**

- New feature → invoke `grill-me` skill first.
- Project images: `screenshotSrc` in MDX frontmatter, path format `/assets/projects/<slug>/<file>` (no `/public` prefix).
- Cache-bust changed images with `rm -r .next/cache/images`.

---

## Suggested Skills

- `/grill-me` — before any new feature. Mandatory per CLAUDE.md.
- `/emil-design-eng` — when reviewing or building animations, interactions, or motion.
- `/make-interfaces-feel-better` — when reviewing UI details (radius, typography, transitions).
- `/nextjs-patterns` — when touching data fetching, image handling, or SSR patterns.
- `/wrap-up` + `/handoff` — end of every session.

---

## Key Files for Next Session

| Area            | File                                           |
| --------------- | ---------------------------------------------- |
| Project cards   | `components/editorial-entity/project-card.tsx` |
| Project list    | `components/editorial-entity/project-list.tsx` |
| Project content | `content/projects/*.mdx`                       |
| Writing list    | `components/editorial-entity/writing-list.tsx` |
| Image schema    | `source.config.ts`                             |
| Content types   | `lib/content/content-types.ts`                 |
| Audio patch     | `lib/audio/minimal.ts`                         |
| Sound provider  | `components/app/sound-provider.tsx`            |
| TOC             | `components/article/article-toc.tsx`           |
