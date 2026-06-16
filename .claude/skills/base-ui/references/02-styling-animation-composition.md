# Styling, Animation, and Composition

## Styling model

Base UI ships no visual styles. Style each part explicitly using:

- `className`
- state-based `className={(state) => ...}`
- data attributes such as `[data-open]`, `[data-highlighted]`, `[data-disabled]`
- CSS variables exposed by the part
- `style` or state-based `style={(state) => ...}`

## Tailwind CSS

Tailwind can be applied directly to parts through `className`.

Docs examples may use Tailwind CSS v4. If the project uses Tailwind CSS v3, convert unsupported syntax.

Common conversions:

```txt
origin-(--transform-origin)       -> origin-[var(--transform-origin)]
outline-hidden                    -> outline-none or outline-0, depending project conventions
data-starting-style:opacity-0     -> use CSS data selector fallback if plugin unsupported
data-ending-style:scale-95        -> use CSS data selector fallback if plugin unsupported
```

When unsure, prefer plain CSS or CSS Modules for data-state animations.

## Data attributes

Use data attributes for component state styling. Examples:

```css
.SelectItem[data-highlighted] {
  background: var(--accent);
}

.SwitchThumb[data-checked] {
  transform: translateX(1rem);
}

.DialogPopup[data-starting-style],
.DialogPopup[data-ending-style] {
  opacity: 0;
  transform: scale(.96);
}
```

## CSS variables

Floating and layout components may expose variables for available size, anchor size, or transform origin. Use them instead of guessing geometry.

```css
.PopoverPopup {
  max-height: var(--available-height);
  transform-origin: var(--transform-origin);
}
```

Check each component API when exact variable names matter.

## Composition with render

Use `render` to compose a Base UI part with a custom component:

```tsx
<Menu.Trigger render={<MyButton />}>Open</Menu.Trigger>
```

The custom component must:

- forward its ref
- spread all received props
- render the correct underlying DOM element

Example wrapper:

```tsx
const MyButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  function MyButton(props, ref) {
    return <button ref={ref} {...props} className={`btn ${props.className ?? ''}`} />;
  },
);
```

## Nested composition

Tooltip/Dialog/Menu triggers can be nested through `render`. Do not drop any trigger semantics.

## Animation

Prefer CSS transitions using data attributes and CSS variables. Do not animate layout-critical state in a way that breaks focus or pointer interactions. For exit animations, preserve mounted state according to the component docs when available.
