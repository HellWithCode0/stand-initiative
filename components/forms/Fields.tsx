import type { ReactNode } from "react";
import { Todo } from "../Todo";
import type { Errors, Status } from "./useSubmit";

type Common = {
  name: string;
  label: string;
  /** Used inside error messages, for example "your name". */
  spoken: string;
  required?: boolean;
  hint?: string;
  errors: Errors;
  onEdit: (name: string) => void;
  formId: string;
};

function describedBy(formId: string, name: string, hint?: string, error?: string) {
  const ids = [hint ? `${formId}-${name}-hint` : null, error ? `${formId}-${name}-error` : null];
  return ids.filter(Boolean).join(" ") || undefined;
}

function Shell({
  formId,
  name,
  label,
  required,
  hint,
  error,
  children,
}: {
  formId: string;
  name: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="field" data-invalid={error ? true : undefined}>
      <label htmlFor={`${formId}-${name}`} className="field-label">
        {label}
        {required ? null : <span className="field-optional"> (optional)</span>}
      </label>
      {hint ? (
        <p className="field-hint" id={`${formId}-${name}-hint`}>
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p className="field-error" id={`${formId}-${name}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextField({
  type = "text",
  autoComplete,
  ...p
}: Common & { type?: "text" | "email" | "tel"; autoComplete?: string }) {
  const error = p.errors[p.name];
  return (
    <Shell {...p} error={error}>
      <input
        id={`${p.formId}-${p.name}`}
        name={p.name}
        type={type}
        required={p.required}
        autoComplete={autoComplete}
        data-label={p.spoken}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(p.formId, p.name, p.hint, error)}
        onInput={() => p.onEdit(p.name)}
        className="input"
      />
    </Shell>
  );
}

export function TextArea({ rows = 5, ...p }: Common & { rows?: number }) {
  const error = p.errors[p.name];
  return (
    <Shell {...p} error={error}>
      <textarea
        id={`${p.formId}-${p.name}`}
        name={p.name}
        rows={rows}
        required={p.required}
        data-label={p.spoken}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(p.formId, p.name, p.hint, error)}
        onInput={() => p.onEdit(p.name)}
        className="input"
      />
    </Shell>
  );
}

export function SelectField({
  options,
  value,
  onChange,
  ...p
}: Common & {
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
}) {
  const error = p.errors[p.name];
  return (
    <Shell {...p} error={error}>
      <select
        id={`${p.formId}-${p.name}`}
        name={p.name}
        required={p.required}
        data-label={p.spoken}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(p.formId, p.name, p.hint, error)}
        className="input select"
        {...(value !== undefined
          ? { value, onChange: (e) => { onChange?.(e.target.value); p.onEdit(p.name); } }
          : { defaultValue: "", onChange: () => p.onEdit(p.name) })}
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Shell>
  );
}

export function CheckGroup({
  name,
  legend,
  options,
}: {
  name: string;
  legend: string;
  options: string[];
}) {
  return (
    <fieldset className="field checks">
      <legend className="field-label">
        {legend}
        <span className="field-optional"> (optional)</span>
      </legend>
      <div className="check-list">
        {options.map((o) => (
          <label key={o} className="check">
            <input type="checkbox" name={name} value={o} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/** The live message under a form's submit button. */
export function FormStatus({ status, pending }: { status: Status; pending: string }) {
  return (
    <div className="form-status" role="status" aria-live="polite">
      {status === "sending" ? <p>Sending…</p> : null}
      {status === "sent" ? (
        <p className="form-ok">Thank you. Your message has been sent.</p>
      ) : null}
      {status === "error" ? (
        <p className="form-bad">
          Sorry, that did not go through. Please try again in a moment.
        </p>
      ) : null}
      {status === "unconnected" ? (
        <p className="form-note">
          Everything looks right, but this form is not connected yet, so nothing was sent.{" "}
          <Todo>{pending}</Todo>
        </p>
      ) : null}
    </div>
  );
}
