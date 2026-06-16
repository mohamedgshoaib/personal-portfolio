# Feedback and Display

## Toast

Use `Toast` for temporary messages triggered by user or system actions.

Guidelines:

- keep content short
- avoid using toast as the only place for critical errors
- provide undo action for reversible destructive actions when appropriate
- do not stack noisy success toasts for every tiny event

## Progress

Use `Progress` for task completion. Provide accessible labels and values when progress is determinate.

## Meter

Use `Meter` for bounded measurements such as storage usage, score, or capacity. Do not use Meter for task progress.

## Avatar

Use fallback content when images fail or are missing. Ensure fallback is not meaningless decorative text.

## Button

Use `Button` when you need Base UI button behavior, render flexibility, or disabled focus behavior. Keep button text/action names clear.

## Toggle and Toggle Group

Use for pressed/unpressed states. Make selected state visible and accessible.

## Tooltip and Preview Card

These are display-adjacent feedback components but belong behaviorally with overlays. Use tooltips only for supplemental hints.
