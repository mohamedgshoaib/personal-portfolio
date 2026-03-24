# Project Plan

> This file is the active roadmap for the current state of the portfolio. It is no longer the original rebuild brief. It should describe what the site is now, what remains to be improved, and what direction future work should preserve.

## Current Position

The portfolio has moved past the starter phase and past the first rebuild phase.

The current site already includes:

- a real homepage
- a full projects archive
- an MDX-backed writing section
- a reusable floating dock
- generated metadata, OG images, sitemap, robots, and manifest
- JSON-LD schema on key routes
- LLM-facing reference files

The work now is not "build the portfolio from scratch." The work now is refinement, expansion, and careful continuation of the same system.

## Product Direction

The site should continue to feel:

- calm
- editorial
- narrow
- text-led
- design-engineer flavored
- personal rather than corporate

It should not drift toward:

- marketing-site hero layouts
- agency case-study framing
- card-heavy portfolio UI
- generic personal-brand copy

## Current Architecture

Current architecture is intentionally lightweight:

- routes and route-local files in `app/`
- shared UI in `components/`
- shared hooks in `hooks/`
- authored content in `lib/content/`
- metadata, schema, and OG helpers in `lib/metadata/`
- audio helpers and sound assets in `lib/audio/`
- MDX content in `content/writing/`

This structure is in a good place. Future changes should extend it, not replace it.

## What Is Already Strong

The project already has a solid foundation in these areas:

- homepage structure and curation
- projects archive pattern
- MDX writing flow
- metadata and OG generation
- sitemap, robots, and manifest
- schema markup
- dock/theme/contact shell
- typography and motion baseline

## Near-Term Priorities

### 1. Content depth

The biggest remaining gap is content depth, not system quality.

Priority content work:

- add more writing posts
- continue refining project descriptions as the portfolio evolves
- keep the homepage curated while the archive grows

### 2. Writing maturity

The writing system exists and is clean, but the archive is still small.

Priority writing work:

- publish more posts
- keep post metadata strong
- preserve the quiet article presentation
- add route-local writing utilities only when the section actually needs them

### 3. Site-wide polish

The visual direction is mostly established, but it still needs ongoing consistency work.

Priority polish work:

- protect the current typography hierarchy
- keep interaction feedback subtle and reliable across devices
- preserve the quieter Emil + Dimi synthesis
- keep new UI in the same editorial language as the homepage and writing surfaces

### 4. SEO and discovery maintenance

SEO is now in a strong technical place and should be maintained deliberately.

Ongoing priorities:

- keep metadata accurate when content changes
- keep sitemap and robots aligned with actual routes
- keep schema accurate
- keep `llms.txt` and `llms-full.txt` aligned with the real site

## Future Enhancements Worth Considering

These are real possibilities, but not immediate requirements:

- richer writing archive growth
- project detail pages if the portfolio later needs deeper case-study surfaces
- additional route-local components under `app/projects/` if that section grows
- selective internal linking between writing and projects

These should be treated as future opportunities, not assumed deliverables.

## Non-Negotiable Rules

- do not turn the homepage into a full project archive
- do not add decorative complexity without clear payoff
- do not replace the local content model with a CMS unless there is an explicit need
- do not regress metadata, schema, sitemap, or OG coverage
- do not reintroduce generic portfolio sections that dilute the current identity

## Immediate Working Rule

When making future changes, prefer:

- more real content
- tighter wording
- stronger curation
- cleaner architecture

before adding new surface area.
