# Forms, Fields, and Validation

## Core form parts

Use:

- `Form` for form-level submission and consolidated errors
- `Field.Root` for individual fields
- `Field.Label` for accessible labels
- `Field.Description` for helper text
- `Field.Error` for validation messages
- `Fieldset.Root` and `Fieldset.Legend` for grouped controls

## Naming fields

Give fields a `name` so their values participate in submission and validation.

```tsx
<Field.Root name="email">
  <Field.Label>Email</Field.Label>
  <Field.Control type="email" required />
  <Field.Error />
</Field.Root>
```

## Native validation

Base UI supports native constraint attributes on many form controls:

- `required`
- `minLength`
- `maxLength`
- `pattern`
- `step`
- relevant native input types

Use `Field.Error` to display messages. Use `match` for custom messages:

```tsx
<Field.Error match="valueMissing">Email is required</Field.Error>
```

## Custom validation

Use `validate` for sync or async validation after native validation passes.

```tsx
<Field.Root
  name="username"
  validationMode="onChange"
  validationDebounceTime={300}
  validate={async (value) => value === 'admin' ? 'Reserved username' : null}
>
  <Field.Control required minLength={3} />
  <Field.Error />
</Field.Root>
```

Validation modes:

- `onSubmit` default
- `onBlur`
- `onChange`

## Server errors

Pass server errors to `Form errors={errors}`. Errors should map field names to a string or string array. Clear or replace them after successful submission or when server state changes.

## React Hook Form

Use `Controller` for compound controls. Forward refs so RHF can focus invalid fields.

```tsx
<Controller
  name="username"
  control={control}
  rules={{ required: 'Required' }}
  render={({ field, fieldState }) => (
    <Field.Root name={field.name} invalid={fieldState.invalid}>
      <Field.Label>Username</Field.Label>
      <Field.Control
        value={field.value ?? ''}
        onValueChange={field.onChange}
        onBlur={field.onBlur}
        ref={field.ref}
      />
      <Field.Error match={!!fieldState.error}>{fieldState.error?.message}</Field.Error>
    </Field.Root>
  )}
/>
```

## Selection fields

- Use `Select` for finite choice without free typing.
- Use `Combobox` or `Autocomplete` when filtering/typing is required.
- Use `CheckboxGroup` or `Radio` for visible grouped choices.

## Hidden input note

Some compound controls use hidden inputs for native form integration. When browser validation bubbles must point near the visible control, wrap the visible trigger/control in a relatively positioned element and provide `name`.
