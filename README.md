# Personal Portfolio

Next.js portfolio site with a clean, minimal design and technical blog.

## Overview

My personal portfolio as a frontend developer. Designed for performance, accessibility, and high search visibility.

- **Home**: Hero section, tech stack, and featured projects carousel.
- **Projects**: Dedicated gallery of client and personal work with detailed case studies.
- **Blog**: Technical articles focusing on modern frontend engineering and architecture.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** (Server Components)
- **TypeScript** (Strict type safety)
- **Tailwind CSS 4** (Modern utility-first styling)
- **Base UI** (Accessible headless primitives)
- **Animate UI** (Framer Motion-based transitions)
- **Umami** (Privacy-friendly analytics with adblocker proxy)

## SEO & AI Optimization

The site is built with a "machine-first" discovery strategy:

- **Structured Data**: JSON-LD Person, WebSite, and ItemList schemas for rich snippets.
- **Dynamic Sitemap**: Automatically indexed blog posts and project pages.
- **AI-Ready**: `llms.txt` and `llms-full.txt` at the root for LLM context and discovery.
- **Performance**: Optimized images, minimal JS, and 100/100 Lighthouse scores.

## Project Structure

```
src/
  app/                    # Pages and layouts
    blog/                 # Blog post listing & dynamic routes
    projects/             # Projects gallery & dynamic routes
  components/             # By feature
    mdx/                  # Blog rendering components
    structured-data/      # JSON-LD injection
    ...
  content/
    blog/                 # MDX articles
  lib/
    portfolio-data/       # Content source-of-truth
  public/
    llms.txt              # LLM-friendly summary
```

## Development

```bash
pnpm install    # Install deps
pnpm dev        # Dev server
pnpm build      # Production build
pnpm start      # Production server
```
