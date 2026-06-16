# Selection Controls

## Choosing the right control

- `Select`: one value from predefined options, no free typing.
- `Combobox`: input plus selectable suggestions, useful for searchable values.
- `Autocomplete`: filtered option entry.
- `Radio`: visible mutually exclusive options.
- `Checkbox`: independent yes/no or multi-select option.
- `CheckboxGroup`: shared state for multiple checkboxes.
- `Switch`: on/off setting with immediate preference meaning.
- `Toggle`: pressed/unpressed action button.
- `ToggleGroup`: related toggle buttons.
- `Slider`: numeric value/range adjusted visually.
- `NumberField`: precise numeric input.
- `OTPField`: verification code input.

## Select guardrails

Use visible labels, trigger, popup/list, items, and value display according to the component docs. Do not use Select for search unless it is combined with proper searchable behavior from Combobox/Autocomplete.

## Combobox and Autocomplete guardrails

- Keep input value and selected value concepts separate when the component supports both.
- Debounce remote queries.
- Provide loading and empty states.
- Keep keyboard navigation working after filtering.
- Do not render unbounded huge lists without virtualization or pagination.

## Checkbox and Radio guardrails

- Use labels for each item.
- Use fieldsets and legends for grouped options.
- Keep hit targets large enough.
- Do not use switch for a submitted form checkbox unless the visual meaning is truly an immediate setting.

## Slider and NumberField guardrails

- Provide min/max/step.
- Show numeric values when precision matters.
- Ensure keyboard controls work.
- Pair sliders with an input when exact entry is required.

## Toggle guardrails

Use toggles for stateful commands such as bold, pin, favorite, or layout mode. Do not use toggles as generic links.
