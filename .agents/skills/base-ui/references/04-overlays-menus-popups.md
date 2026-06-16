# Overlays, Menus, and Popups

## Dialog

Use `Dialog` for modal content that appears above the page. Include trigger, portal, backdrop if needed, popup, title, and close controls.

Checklist:

- provide a visible or screen-reader title
- manage initial/final focus only when defaults are not enough
- style backdrop and popup explicitly
- test Escape and focus return

## Alert Dialog

Use `AlertDialog` for confirmations that block progress, especially destructive actions. Do not use regular `Dialog` when the user must make a high-consequence choice.

Checklist:

- clear title and description
- explicit cancel action
- destructive action styled distinctly
- focus should not land on destructive action by surprise unless docs/project conventions require it

## Drawer

Use `Drawer` for edge panels and mobile sheets. Consider body scroll locking, swipe gestures, focus return, and safe-area spacing.

## Popover

Use `Popover` for anchored content. Preserve:

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

Use side/align offsets when positioning matters. Use CSS variables for available size and transform origin.

## Tooltip

Use `Tooltip` for short non-critical hints. Never put required task instructions only in a tooltip. Ensure trigger has an accessible name independent of the tooltip.

## Preview Card

Use for richer hover/focus previews. Do not use it for required disclosure content on touch-only flows unless there is an alternate access path.

## Menu

Use `Menu` for actions. Items should represent commands. Use disabled state for unavailable actions instead of removing important expected actions.

## Context Menu

Use for pointer context actions. Ensure all important actions are also reachable through normal UI or keyboard shortcuts.

## Menubar

Use for app-like command bars, not normal website navigation.

## Navigation Menu

Use for site/app navigation links. Use semantic links for navigation. Do not model navigation as command menu items unless the UI really is a command menu.

## Portal and stacking

Add `isolation: isolate` to the app root. Avoid random global `z-index: 999999` wars. Humanity has suffered enough.
