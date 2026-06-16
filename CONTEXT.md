# Project Context

This file records domain vocabulary for architecture work in Mohamed Gamal's portfolio and writing site. Use these terms when naming modules, seams, specs, and implementation chunks.

## Editorial Spine

The narrow, text-led homepage and future route structure that presents identity, projects, writing, and contact without becoming a decorative landing page.

## Editorial Entity

A scannable item inside the editorial spine. Current examples are project cards, writing rows, social/action icon items, and future archive rows.

## Editorial Entity List

A list module that presents editorial entities with shared surface, safe hover area, focus, motion, and item identity behavior.

## Content Discovery

The module family that turns authored project, writing, identity, and contact records into homepage sections, archive routes, metadata, schema, sitemap entries, and agent-readable files.

## Project Detail Interaction

The module family that owns the primary project action and dedicated project detail routes. Project cards link to `/projects/[slug]`; a drawer is not the canonical detail surface.

## MDX Content Pipeline

The shared local content processing module for project detail pages and future writing posts. It owns MDX collection discovery, frontmatter validation, rendered content, generated TOC data, structured data, and cleaned Markdown exports.

## Page Actions

Page-level sharing and copying controls used by project detail pages and future writing posts. It owns copy page URL, copy as cleaned Markdown, native share with fallback, icon-only controls, tooltips, and short feedback state.

## Project Detail TOC

The desktop section navigation for project detail pages. It should be driven by generated MDX TOC data and use Fumadocs headless TOC behavior before considering a custom minimap visual shell.

## Article TOC

The shared desktop section navigation for project detail pages and writing posts. It is driven by generated MDX TOC data and should preserve the connected rail, multiple active headings, and fixed desktop placement established by the project detail flow.

## Writing Detail Flow

The module family that owns the writing archive and dedicated writing detail routes. Writing rows link to `/writing/[slug]`; writing content is MDX-authored and shares the MDX content pipeline, article TOC, page actions, clean Markdown export, metadata, and discovery behavior with project pages where appropriate.

## Action Link Set

A group of icon-only or compact action links with shared tooltip, semantic icon, size, safe hover area, focus, and motion behavior.

## Contact Feedback

Feedback around contact actions such as copying an email address, showing copied/error state, and future text, toast, or audio feedback.
