'use client';

import { Form } from '@base-ui/react/form';
import { Field } from '@base-ui/react/field';
import './base-ui-patterns.css';

export function FormExample() {
  return (
    <Form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        console.log(Object.fromEntries(formData));
      }}
    >
      <Field.Root name="email" className="stack">
        <Field.Label className="field-label">Email</Field.Label>
        <Field.Control className="input" type="email" required />
        <Field.Error className="error" />
      </Field.Root>

      <Field.Root
        name="username"
        className="stack"
        validationMode="onChange"
        validationDebounceTime={250}
        validate={(value) => value === 'admin' ? 'This username is reserved.' : null}
      >
        <Field.Label className="field-label">Username</Field.Label>
        <Field.Control className="input" required minLength={3} />
        <Field.Error className="error" />
      </Field.Root>

      <button className="button" type="submit">Submit</button>
    </Form>
  );
}
