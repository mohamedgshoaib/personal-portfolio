# Agent Checklists

## Before coding

- Identify component category: overlay, menu, form, selection, disclosure, feedback, utility.
- Confirm controlled vs uncontrolled state.
- Confirm client component boundary.
- Confirm styling engine and Tailwind version.
- Confirm RTL and CSP requirements.
- Confirm whether the component needs portals.

## Implementation checklist

- Use correct import path.
- Preserve required anatomy.
- Provide labels/titles/descriptions.
- Add visible focus styles.
- Add disabled, selected, highlighted, invalid, and open/closed styling.
- Use data attributes for state.
- Use CSS variables for dynamic geometry.
- Wire form names and errors.
- Use `render` only with ref-forwarding components.
- Test keyboard interactions.

## Accessibility checklist

- Keyboard-only path works.
- Focus does not disappear.
- Modal focus is trapped where appropriate.
- Escape closes dismissible popups.
- Focus returns to trigger after close.
- Trigger has accessible name.
- Dialog/alert dialog has title/description.
- Field has label and error association.
- Color contrast is adequate.
- Focus visible indicator is not removed.

## Debugging checklist

### Popup appears behind content

- Add `.root { isolation: isolate; }`.
- Check portal placement.
- Remove arbitrary z-index escalation.

### Component has no styles

- Expected: Base UI is unstyled.
- Add classes to every visible part.
- Check data attribute selectors.

### Custom trigger does not work

- Confirm custom component forwards ref.
- Confirm props are spread onto the DOM element.
- Confirm semantic element is focusable.

### Form field is not submitted

- Add `name` to `Field.Root` or relevant control.
- Check hidden input integration.
- Check controlled value and onChange wiring.

### React Hook Form cannot focus invalid field

- Forward `ref` or use the component's input ref prop.
- Use `Controller` for compound controls.

### RTL feels wrong

- Add both DOM direction and `DirectionProvider`.
- Test portaled content.

### CSP blocks styles/scripts

- Use `CSPProvider nonce={nonce}`.
- Ensure server header and prop use the same nonce.
- Consider `disableStyleElements` only with replacement CSS.

## Tailwind v4 to v3 checklist

- Replace v4-only CSS variable shorthand with arbitrary values.
- Replace unsupported data variants with CSS selectors or configured variants.
- Confirm `outline-hidden` equivalent.
- Prefer CSS Modules for tricky popup animations if conversion gets ugly.

## Final review

- No missing compound parts.
- No inaccessible icon-only controls.
- No hidden critical content in tooltips.
- No incorrect component choice.
- No broken refs.
- No style assumptions.
