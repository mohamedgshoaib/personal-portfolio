# Core Model

## What Base UI is

Base UI is a React package of unstyled, accessible component primitives. It provides behavior, accessibility, state, focus management, keyboard support, and component anatomy, while leaving visual design to the app.

## Install

```bash
pnpm add @base-ui/react
```

Use the package manager already used by the project.

## Import pattern

Import from component-specific paths:

```tsx
import { Dialog } from '@base-ui/react/dialog';
import { Select } from '@base-ui/react/select';
import { Menu } from '@base-ui/react/menu';
```

Avoid importing all components from one large barrel unless the docs/package version explicitly supports it and the project already uses it.

## Compound component anatomy

Most components are assembled from parts:

```tsx
<Popover.Root>
  <Popover.Trigger />
  <Popover.Portal>
    <Popover.Positioner>
      <Popover.Popup />
    </Popover.Positioner>
  </Popover.Portal>
</Popover.Root>
```

Agents must preserve required parts. Missing `Portal`, `Positioner`, `Popup`, `Trigger`, `Item`, `Label`, or `Control` pieces are common causes of broken behavior.

## Portal setup

For reliable z-index behavior with portaled popups, place the app content in a root wrapper and apply:

```css
.root {
  isolation: isolate;
}
```

For modern iOS Safari backdrop handling, add:

```css
body {
  position: relative;
}
```

## Accessibility baseline

Base UI handles many low-level accessibility concerns: ARIA attributes, roles, pointer behavior, keyboard navigation, and focus management. The app still owns:

- visible focus styles
- accessible labels and descriptions
- color contrast
- semantic component choice
- keyboard testing
- screen-reader testing where practical

## Client component rule

Interactive Base UI components need client-side React behavior. In Next.js App Router, files containing component state, event handlers, effects, or Base UI interactions should start with:

```tsx
'use client';
```

Keep server data fetching outside where possible and pass serializable props into client UI components.
