# Build Plan

> This file is the active build brief for the next implementation phase. It captures the user's provided content, the agreed design direction, the required skill/context inputs, and the practical build plan for the portfolio rebuild.

## Goal

Rebuild the current starter homepage into a clean, minimal portfolio for Mohamed Gamal that feels:

- calm
- modern
- highly curated
- design-engineer aware
- original to Mohamed

The result should synthesize the reference set rather than copy any one site:

- Dimi first
- Samet second
- Emil third
- Shu as the least direct influence

## What The User Provided

### Identity

- Name: Mohamed Gamal
- Title: Frontend Developer
- Location: Cairo, Egypt

### Bio direction

Source material provided by the user:

- focused on fast, SEO-driven web applications
- full RTL support experience
- values maintainability, clean architecture, and performance under real traffic
- works with modern frameworks
- wants interfaces that feel simple to users and carefully engineered underneath
- adapts quickly
- prefers modern tooling
- likes problems that force learning

Writing guidance:

- homepage copy should be professional, restrained, and high-signal
- use a concise intro and/or a slightly longer intro based on what best serves the page

### Avatar

The user already added theme-aware profile images under:

- `public/assets/avatar`

There is a dark version for dark mode and a light version for light mode.

### Project content currently provided

#### Devloop

- Status: shipped
- Link: [devloop.software](https://www.devloop.software/)
- Screenshot: `public/assets/projects/devloop/devloop.webp`

Core substance:

- official Devloop website
- localized routing for English and Arabic
- full RTL support
- server-side translations for SEO
- theme switching
- reduced-motion-aware animation components
- lazy-loaded / dynamically imported heavy UI
- Resend-backed contact form

Architecture notes provided by the user:

- Next.js 16 App Router
- React 19
- Tailwind CSS 4
- `next-intl`
- `next-themes`
- Motion
- Resend

### Writing content currently provided

First blog post to add:

- Title: `Hello World: What This Blog Is About`
- Source text supplied in full by the user
- Origin: copied from the user's old MDX portfolio
- Date note present in the copy: `Last updated on December 19, 2025`

### Experience currently provided

#### TELUS International

- Role: Search Engine Evaluator
- Date range: `09.2019 - 05.2024`

Key themes from the user:

- reviewed search results using detailed guidelines
- wrote clear evaluation notes
- maintained quality and attention to detail remotely
- built a strong QA mindset
- improved written communication through structured reporting

### Links

- GitHub: [mohamed-g-shoaib](https://github.com/mohamed-g-shoaib)
- X: [mo0hamed_gamal](https://x.com/mo0hamed_gamal)
- LinkedIn: [mohamed-g-shoaib](https://www.linkedin.com/in/mohamed-g-shoaib/)
- Email: `mohamed.g.shoaib@gmail.com`

### Desired opportunities

The portfolio should help attract:

- jobs
- open source
- freelance

### Required homepage content areas

The user wants all of these represented in some form:

- about
- projects
- writing
- experience
- contact
- stack

The user does not want:

- testimonials
- services section

### Stack list to include

Keep this minimal, not a badge wall:

- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS
- shadcn/ui

## Design Direction

The page should feel like a blend of the references, weighted toward:

1. Dimi
2. Samet
3. Emil
4. Shu

Translation for this project:

- compact identity block, not a giant hero
- narrow, readable content width
- clean and quiet typography
- strong spacing rhythm
- text-led hierarchy
- no clunky section stacks
- no generic portfolio cards everywhere
- no wall of badges
- screenshots used carefully and sparingly
- richer UI only where it earns its place

Desired emotional quality:

- calm
- credible
- engineered
- modern
- lightly warm

## Shared System We Are Building Toward

The references and user preferences point to the same system:

- a personal system, not a portfolio template
- curation over volume
- proof over self-description
- structure over decoration
- motion localized to meaningful areas
- writing and projects treated as part of one body of work

One-line internal rule:

Build a narrow, calm, text-led portfolio system where structure, curation, and proof carry the design.

## Required Skills For This Build

The user explicitly requested loading these skills:

- `emil-design-eng`
- `make-interfaces-feel-better`
- `next-best-practices`
- `tailwind-design-system`
- `userinterface-wiki`
- `vercel-composition-patterns`
- `vercel-react-best-practices`

How they should influence implementation:

- `emil-design-eng`: taste, restraint, animation purpose, tactile feel
- `make-interfaces-feel-better`: typography polish, shadows, radius, hit areas, motion details
- `next-best-practices`: App Router structure, metadata, image/font usage, RSC/client boundaries
- `tailwind-design-system`: token discipline, component API consistency, Tailwind v4 patterns
- `userinterface-wiki`: timing, spacing, UX laws, visual design and interaction standards
- `vercel-composition-patterns`: avoid boolean prop sprawl and prefer composition for reusable UI
- `vercel-react-best-practices`: keep the implementation lean, avoid unnecessary bundle and render cost

## Base UI Constraints

The project is based on Base UI primitives and the user explicitly asked that the Base UI handbook be understood before building.

Relevant handbook takeaways from `spec/base-ui/`:

- Base UI is unstyled and styling should live in our own Tailwind/className system
- state styling should rely on data attributes and documented CSS variables where appropriate
- composition should prefer Base UI's `render` model when wrapping/extending primitives
- when building custom renderable primitives, `useRender` and `mergeProps` are the intended patterns
- TypeScript should follow the exported namespace types such as `Component.Props`, `Component.State`, and `useRender.ComponentProps`
- transitions are preferred over CSS animations for interruptible state changes
- Motion-based animation with Base UI requires correct controlled state, `keepMounted` where needed, and awareness of unmount timing

Practical implication:

Do not build the site like a plain static marketing page if a part should really be a reusable primitive or a Base UI-composed component.

## Current Theme/Foundation State

Already established in the repo:

- Oxc replaces ESLint + Prettier
- Google Sans and Google Sans Code are installed and active
- Soundcn sounds are wired for click/theme interactions
- Coss-inspired styling philosophy is active
- Coss semantic color palette is now applied directly in `app/globals.css`
- light mode uses a custom off-white canvas token instead of pure white

This means the visual foundation exists, but the actual page implementation is still mostly starter-level.

## Planned Homepage Information Architecture

Initial intended homepage flow:

1. Identity / intro
   - name
   - role
   - compact intro
   - quiet location/context
   - primary contact / profile links

2. Selected project(s)
   - start with Devloop
   - screenshot plus concise explanation
   - emphasize proof and engineering decisions

3. Experience
   - concise timeline-style or compact role listing
   - begin with TELUS International

4. Writing
   - small list of posts
   - begin with `Hello World: What This Blog Is About`

5. Stack
   - minimal inline or grouped presentation
   - not a badge wall

6. Contact / footer
   - email
   - GitHub
   - X
   - LinkedIn

Potential optional section:

- `Now` or current-focus block, if it helps the homepage feel more alive without adding noise

## Planned Content Strategy

### Copy style

Use copy that is:

- concise
- precise
- professional
- not over-marketed
- not generic "creative developer" language

Avoid:

- inflated self-branding
- broad claims without evidence
- filler section intros
- overly dramatic mission statements

### Project writing style

Projects should be written as:

- real work
- real constraints
- real decisions
- real outcomes

Not as:

- agency case studies
- buzzword-heavy marketing blurbs

## Missing Inputs Still Needed Later

The user has provided enough to start, but not enough to fully populate the whole portfolio yet.

Missing or still sparse:

- more featured projects
- more experience entries
- more writing/posts if the homepage should feel fuller
- confirmation of exact avatar filenames in `public/assets/avatar`
- any preference on whether the avatar should be prominent or subtle

These are not blockers for starting the first implementation pass.

## Build Plan

### Phase 1. Replace the starter homepage

- remove the generic starter layout in `app/page.tsx`
- build a real homepage around Mohamed's identity and Devloop
- keep the page narrow, calm, and text-led

### Phase 2. Establish reusable homepage primitives

- create any small reusable sections/components needed for:
  - intro
  - project entry
  - writing list
  - experience row
  - contact/footer

These should follow composition-friendly patterns and avoid boolean mode sprawl.

### Phase 3. Add content-backed project and writing data

- introduce a lightweight content/data structure if needed
- add Devloop content and the first blog post in a maintainable way
- avoid overengineering the data layer before the real content justifies it

### Phase 4. Refine motion and interaction quality

- keep motion minimal and purposeful
- use fast, quiet transitions
- avoid animating the whole shell
- preserve reduced-motion awareness

### Phase 5. Verify and polish

- run `oxlint`
- run `tsc --noEmit`
- run `oxfmt --check`
- run `react-doctor` after React-facing changes

## Non-Negotiable Implementation Rules

- do not build a giant hero
- do not fall back to generic portfolio cards and badge walls
- do not add testimonials or services
- do not sacrifice responsiveness or performance for decoration
- do not ignore Base UI composition/styling patterns
- do not violate the existing theme token system
- do not copy any single reference literally

## Immediate Next Step

Start the real homepage rebuild using the current provided content, with Devloop as the first featured project and `Hello World` as the first writing entry.
