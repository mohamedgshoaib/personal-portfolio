# Navigation and Disclosure

## Accordion

Use for multiple collapsible panels with headings. Good for FAQ, settings sections, and grouped details. Ensure each trigger has meaningful text.

## Collapsible

Use for a single expandable region. Prefer this over Accordion when there is only one toggleable area.

## Tabs

Use to switch between related panels on the same page. Avoid tabs for unrelated navigation where normal links/routes are better.

Checklist:

- every tab has a matching panel
- selected state is visible
- keyboard navigation works
- content is not destroyed unexpectedly if user input must be preserved

## Navigation Menu

Use for website/app navigation. Keep navigation links as anchors/links. Do not bury critical navigation behind hover-only behavior.

## Toolbar

Use to group related controls, such as editor formatting buttons or image controls. Use toggle buttons for persistent pressed states.

## Scroll Area

Use for styled scrollbars while preserving native scrolling. In strict CSP environments, note that scrollbar-hiding styles may require CSP handling through `CSPProvider` or custom external CSS.

## Separator

Use for visual or semantic separation. If purely decorative, ensure the component is configured/used so it does not create noise for assistive tech.
