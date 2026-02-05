# [mohamedgshoaib.me](https://mohamedgshoaib.me) &middot; [![GitHub License](https://img.shields.io/github/license/mohamed-g-shoaib/personal-portfolio?label=License)](https://github.com/mohamed-g-shoaib/personal-portfolio/blob/main/LICENSE) ![GitHub Repo Views](https://gitviews.com/repo/mohamed-g-shoaib/personal-portfolio.svg?style=flat&label-color=%23555&color=%23f59e0b)

A minimal, pixel-perfect dev portfolio, and blog to showcase my work as a Design Engineer.

→ Check out the live site: [mohamedgshoaib.me](https://mohamedgshoaib.me)

[![screenshot-dark](https://assets.chanhdai.com/images/screenshot-desktop-dark.webp?v=5#gh-dark-mode-only)](https://chanhdai.com#gh-dark-mode-only)
[![screenshot-light](https://assets.chanhdai.com/images/screenshot-desktop-light.webp?v=5#gh-light-mode-only)](https://chanhdai.com#gh-light-mode-only)

## Overview

### Stack

- Next.js 16
- Tailwind CSS v4
- shadcn/ui

### Featured

- Clean & modern design
- Light/Dark themes
- vCard integration
- SEO optimized ([JSON-LD schema](https://json-ld.org), sitemap, robots)
- AI-ready with [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable as PWA
- Analytics with [PostHog](https://posthog.com)
- Consent management via [c15t](https://c15t.com)

### Blog

- Supports MDX & Markdown
- Raw `.mdx` endpoints for AI readability
- Syntax highlighting for clear code presentation
- Dynamic OG images for rich link previews
- RSS feed for easy content distribution

### Analytics

User behavior tracking with [PostHog](https://posthog.com) to understand how visitors interact with the site:

- **Copy events** - Track code & command copies
- **Engagement** - Monitor name pronunciation plays, command menu usage
- **Search behavior** - Analyze search queries (debounced)
- **User actions** - Navigation, theme changes, content interactions
- **Screen views** - Automatic page view tracking

Built with privacy in mind:

- Consent management via [c15t](https://c15t.com)
- Cookieless mode until consent
- Production-only tracking
- Type-safe event schema with Zod

## Development

This guide provides instructions on how to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### Setup

1. Clone the repository

```bash
git clone https://github.com/mohamed-g-shoaib/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies

```bash
pnpm i
```

3. Configure environment variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Then, update the necessary environment variables inside `.env.local`.

4. Run the development server

```bash
pnpm dev
```

The application should now be available at http://localhost:1408

### Building for Production

```bash
pnpm build
```

After building, start the application with:

```bash
NODE_ENV=production pnpm start
```

## License

Licensed under the [MIT license](./LICENSE).

You're free to use my code! Just make sure to <ins>remove all my personal information</ins> before publishing your website. It's awesome to see my code being useful to someone!

## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Base UI](https://base-ui.com)
- [Motion](https://motion.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [Kibo UI](https://www.kibo-ui.com)
- [Lucide](https://lucide.dev)
- [Fumadocs](https://fumadocs.dev)
- [PostHog](https://posthog.com)
- [c15t](https://c15t.com)
- And many other open-source libraries used in `package.json`
