"use client";

import { site } from "@/content/site";
import { FormStatus } from "./Fields";
import { useSubmit } from "./useSubmit";

export function NewsletterForm({ id = "newsletter", tone = "dark" }: { id?: string; tone?: "dark" | "light" }) {
  const { status, errors, onSubmit, clearError } = useSubmit(site.forms.newsletter);
  const error = errors.email;

  return (
    <form className={`newsletter newsletter-${tone}`} noValidate onSubmit={onSubmit}>
      <label htmlFor={`${id}-email`} className="newsletter-label">
        Email updates
      </label>
      <p className="newsletter-hint" id={`${id}-hint`}>
        A short note when there is real news. Leave at any time.
      </p>
      <div className="newsletter-row">
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@example.com"
          data-label="your email address"
          className="input"
          aria-invalid={error ? true : undefined}
          aria-describedby={[`${id}-hint`, error ? `${id}-error` : ""].filter(Boolean).join(" ")}
          onInput={() => clearError("email")}
        />
        <button
          type="submit"
          className={tone === "dark" ? "btn btn-light" : "btn btn-primary"}
          disabled={status === "sending"}
        >
          Subscribe
        </button>
      </div>
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
      <FormStatus status={status} pending="CONNECT THE NEWSLETTER IN content/site.ts" />
    </form>
  );
}
