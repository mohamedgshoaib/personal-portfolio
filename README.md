# Personal Portfolio

Next.js portfolio site with a clean, minimal design.

## Overview

My personal portfolio as a frontend developer. Built for simplicity, fast loads, and easy updates. Content lives in separate data files so I can update things without touching components.

## Architecture

Uses Next.js App Router with mostly server components. Client components only where needed (theme toggle, accordions). Components stay small and focused, each section in its own folder.

## Tech Stack

**Next.js 16** - Routing, server rendering, image optimization via App Router.

**React 19** - Server Components by default. Less JS shipped to the browser.

**TypeScript** - Catches errors early. Makes updating data files safer.

**Tailwind CSS** - Utility classes for fast styling. Design system built in.

**Base UI** - Unstyled primitives with accessibility handled. I control the styling.

**Animate UI** - Adds Motion-based animations to Base UI. Respects reduced motion.

**Hugeicons** - Icon library for UI elements.

**simple-icons** - SVG icons for the tech stack display.

**Embla Carousel** - Powers the project carousel. Lightweight with smooth navigation.

## Design

Swiss-inspired minimal design. Consistent `max-w-3xl` width. No rounded corners. Vertical borders connect sections into a boxy layout.

Corner accents use small orange plus signs on border intersections. Orange is the accent color, used sparingly for links and interactive elements.

Geist Mono for body, Geist Sans for headings. Projects show in a carousel. Experience and education expand via accordions. Animations are subtle and respect motion preferences.

## Project Structure

```
src/
  app/                    # Pages and layouts
  components/             # By feature
    animate-ui/           # Animated Base UI wrappers
    education/            # Education accordion
    experience/           # Experience accordion
    featured-projects/    # Project carousel and cards
    footer/               # Footer with social links
    github-activity/      # GitHub contribution graph
    introduction/         # Hero section
    navbar/               # Navigation
    tech-stack/           # Skills grid
    ui/                   # Shared primitives
  lib/
    portfolio-data/       # Content files
      index.ts            # Aggregates exports
      personal.ts         # Name, bio, socials
      projects.ts         # Featured projects
      tech-stack.ts       # Skills with icons
      experience.ts       # Work history
      education.ts        # Degrees
  hooks/                  # Custom hooks
```

## Portfolio Data

Content split into files under `src/lib/portfolio-data/`:

- **personal.ts** - Name, title, bio, avatar, social links
- **projects.ts** - Projects with descriptions, tags, links
- **tech-stack.ts** - Tech with SVG icons
- **experience.ts** - Jobs and internships
- **education.ts** - Degrees with institution logos

Each file has comments explaining the fields. Import from `@/lib/portfolio-data`.

## Why Base UI

Chose Base UI over Radix UI because:

- Truly unstyled. No defaults to override.
- Works with Animate UI for animations.
- Covers all components I need.

Radix is good but has more built-in styling. I wanted full control.

## Development

```bash
pnpm install    # Install deps
pnpm dev        # Dev server
pnpm build      # Production build
pnpm start      # Production server
```
