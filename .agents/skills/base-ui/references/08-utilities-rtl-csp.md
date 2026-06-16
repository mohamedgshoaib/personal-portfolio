# Utilities, RTL, and CSP

## DirectionProvider

Use `DirectionProvider` so child Base UI components adjust behavior for RTL.

```tsx
import { DirectionProvider } from '@base-ui/react/direction-provider';

export function RTLRoot({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl">
      <DirectionProvider direction="rtl">{children}</DirectionProvider>
    </div>
  );
}
```

Important: `DirectionProvider` affects Base UI behavior, not HTML/CSS direction. Set `dir="rtl"` or CSS direction yourself.

Use `useDirection` when portaled components or custom wrappers need to read direction.

## CSPProvider

Use `CSPProvider` for strict Content Security Policy environments.

```tsx
import { CSPProvider } from '@base-ui/react/csp-provider';

export function AppProviders({ nonce, children }: { nonce?: string; children: React.ReactNode }) {
  return <CSPProvider nonce={nonce}>{children}</CSPProvider>;
}
```

Server must generate a per-request nonce, include it in CSP headers, and pass the same nonce to the provider.

Use `disableStyleElements` only if the app provides required external CSS equivalents for inline styles Base UI would otherwise inject.

## mergeProps

Use `mergeProps` when combining props from Base UI, custom components, and app handlers. It merges class names, styles, and event handlers more safely than object spreading.

## useRender

Use `useRender` when building reusable primitives that expose Base UI-style render prop behavior. Avoid it for normal app code unless creating a component abstraction.

## RTL checklist

- Add `dir="rtl"` or CSS `direction: rtl`.
- Add `DirectionProvider direction="rtl"`.
- Test keyboard directions.
- Test portaled menus/popovers.
- Use logical CSS properties where possible: `ms`, `me`, `ps`, `pe`, `start`, `end`, or CSS logical properties.

## CSP checklist

- Generate nonce per request.
- Include nonce in CSP header.
- Pass nonce into `CSPProvider`.
- Audit components using scroll locking, popup pre-hydration, or scrollbar hiding.
- Avoid blocking necessary inline elements accidentally.
