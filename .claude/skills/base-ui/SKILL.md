---
name: base-ui-react
description: Use when implementing Base UI React components from @base-ui/react, including unstyled accessible UI primitives, dialogs, menus, forms, selects, comboboxes, tabs, toasts, RTL, CSP, styling, animation, composition, and TypeScript patterns. Helps agents choose the correct component, wire compound parts correctly, avoid accessibility mistakes, and adapt Tailwind CSS v4 examples to Tailwind CSS v3 when needed.
---

# Base UI React

Base UI is an unstyled, accessible React component library. Use it when the app needs custom visual design with reliable behavior, keyboard interactions, focus handling, ARIA wiring, and compound component primitives.

## First principles

- Install with `pnpm add @base-ui/react` or the project's package manager.
- Import each component from its component path, for example `@base-ui/react/dialog`, `@base-ui/react/select`, `@base-ui/react/menu`.
- Base UI is unstyled. Never assume default visual styling.
- Components are usually compound components. Preserve the documented anatomy: `Root`, `Trigger`, `Portal`, `Positioner`, `Popup`, `Item`, etc.
- Use `className`, data attributes, CSS variables, or state functions to style parts.
- Base UI handles many accessibility mechanics, but the app must still provide labels, visible focus styles, adequate contrast, and correct semantic usage.
- For React Server Components or Next.js App Router, interactive Base UI components belong in client components.
- If a popup renders through a portal, ensure the app root has `isolation: isolate`.
- If supporting RTL, set both app direction (`dir="rtl"` or CSS direction) and `DirectionProvider`.
- If using a strict CSP, use `CSPProvider` with a per-request nonce or disable inline style elements where safe.
- Tailwind examples in the docs may use Tailwind CSS v4 syntax. If the project uses Tailwind v3, convert unsupported utilities.

## Required setup checklist

1. Confirm package version and docs compatibility.
2. Confirm styling engine: Tailwind v4, Tailwind v3, CSS Modules, plain CSS, or CSS-in-JS.
3. Confirm framework: Vite, Next.js App Router, Remix, or other React runtime.
4. Add `isolation: isolate` to the root wrapper for reliable portal stacking.
5. Add `body { position: relative; }` when the app targets modern iOS Safari dialog backdrops.
6. For RTL apps, wrap relevant UI with `DirectionProvider direction="rtl"` and set HTML/CSS direction separately.
7. For strict CSP, wrap the app with `CSPProvider nonce={nonce}`.
8. Test keyboard navigation, focus return, escape behavior, labels, and screen reader names.

## Component decision map

### Overlays and popups

- Use `Dialog` for generic modal content.
- Use `AlertDialog` for destructive or blocking confirmations that require a response.
- Use `Drawer` for edge-attached panels, especially mobile sheets.
- Use `Popover` for anchored popup content triggered by a button.
- Use `Tooltip` for short hints shown on hover/focus.
- Use `PreviewCard` for hover/focus previews of links or cards.

### Menus and commands

- Use `Menu` for action dropdowns.
- Use `ContextMenu` for right-click or long-press actions.
- Use `Menubar` for desktop-style application menu bars.
- Use `NavigationMenu` for site navigation links and nested navigation panels.
- Use `Toolbar` to group controls such as editor buttons or formatting actions.

### Forms and inputs

- Use `Form`, `Field`, and `Fieldset` for validation, labeling, descriptions, and error display.
- Use `Input` for plain text input.
- Use `Checkbox`, `CheckboxGroup`, `Radio`, and `Switch` for binary or grouped choices.
- Use `Select` for choosing one value from a predefined list without free typing.
- Use `Combobox` when the user can type and choose from suggestions.
- Use `Autocomplete` for filtered option entry.
- Use `NumberField` for numeric input with increment/decrement or scrub behavior.
- Use `OTPField` for one-time codes.
- Use `Slider` for bounded numeric ranges.

### Disclosure, layout, and navigation

- Use `Accordion` for multiple collapsible panels with headings.
- Use `Collapsible` for one controlled expandable region.
- Use `Tabs` for switching between related panels on the same page.
- Use `ScrollArea` for custom scrollbars around native scrolling.
- Use `Separator` for visual or semantic separation.

### Feedback and display

- Use `Toast` for temporary notifications.
- Use `Progress` for task completion progress.
- Use `Meter` for a bounded measurement.
- Use `Avatar` for user or entity imagery with fallback.
- Use `Button` when you need Base UI's button behavior, render flexibility, or disabled focus behavior.
- Use `Toggle` and `ToggleGroup` for pressed/unpressed action states.

## Styling rules

- Style every visible part explicitly.
- Prefer data attributes for state styling, for example `data-open`, `data-closed`, `data-highlighted`, `data-disabled`, `data-checked`.
- Use CSS variables exposed by components for dynamic measurements such as available height, trigger width, or transform origin.
- For Tailwind v4 syntax like `origin-(--transform-origin)`, convert to v3-compatible arbitrary values such as `origin-[var(--transform-origin)]`.
- Do not hide focus outlines without replacing them with accessible `:focus-visible` styles.
- Do not rely on color alone for invalid or selected state.

## Composition rules

- Use the `render` prop to compose Base UI parts with custom components.
- Custom components passed to `render` must forward refs and spread received props onto the actual DOM element.
- Avoid changing the rendered element unless semantics remain valid.
- When nesting render props across Tooltip/Dialog/Menu, preserve every required trigger and portal part.
- Use `mergeProps` when combining props from multiple sources in custom primitives.
- Use `useRender` only when building reusable Base UI-style components.

## Form rules

- Prefer `Field.Root name="..."` around controls that participate in form submission.
- Use `Field.Label`, `Field.Description`, and `Field.Error` for accessible field UI.
- Native validation attributes are supported: `required`, `minLength`, `maxLength`, `pattern`, `step`.
- Use `validate`, `validationMode`, and `validationDebounceTime` for custom validation.
- Use `Form errors={serverErrors}` for server-returned field errors.
- With React Hook Form, use `Controller` for compound controls and forward refs/input refs so invalid fields can receive focus.

## Agent implementation workflow

1. Identify the user interaction pattern before choosing a component.
2. Load the relevant reference file from `references/`.
3. Copy the closest example from `examples/`, then adapt styling and state.
4. Verify anatomy and imports against the component docs.
5. Add client boundary when using Next.js App Router.
6. Add labels, descriptions, focus-visible styles, and error rendering.
7. Test with keyboard only.
8. Test controlled and uncontrolled state paths.
9. Check RTL and CSP requirements if the app needs them.
10. Convert Tailwind v4-only utilities if the project uses Tailwind v3.

## Anti-patterns

- Do not treat Base UI as pre-styled.
- Do not replace required component parts with random `div`s.
- Do not use `Dialog` for irreversible confirmation flows; use `AlertDialog`.
- Do not use `Select` when the user needs searchable free typing; use `Combobox` or `Autocomplete`.
- Do not use `Tooltip` for critical information required to complete a task.
- Do not mount multiple toast managers unless the app explicitly needs isolated queues.
- Do not ignore `Portal`, `Positioner`, and `Popup` structure for floating components.
- Do not break refs in custom wrappers.
- Do not disable focus outlines globally.
- Do not assume Tailwind v4 syntax works in Tailwind v3 projects.

## References

- Core model: `references/01-core-model.md`
- Styling, animation, composition: `references/02-styling-animation-composition.md`
- Forms and validation: `references/03-forms-fields-validation.md`
- Overlays, menus, popups: `references/04-overlays-menus-popups.md`
- Selection controls: `references/05-selection-controls.md`
- Navigation and disclosure: `references/06-navigation-disclosure.md`
- Feedback and display: `references/07-feedback-display.md`
- Utilities, RTL, CSP: `references/08-utilities-rtl-csp.md`
- Agent checklists: `references/09-agent-checklists.md`
