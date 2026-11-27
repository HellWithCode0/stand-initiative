"use client";

import { useState, type FormEvent } from "react";

export type Status = "idle" | "sending" | "sent" | "error" | "unconnected";
export type Errors = Record<string, string>;

type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

function isField(el: Element): el is Field {
  return (
    el instanceof HTMLInputElement ||
    el instanceof HTMLTextAreaElement ||
    el instanceof HTMLSelectElement
  );
}

function messageFor(el: Field) {
  const label = el.dataset.label ?? "this field";
  const v = el.validity;
  if (v.valueMissing) {
    return el instanceof HTMLSelectElement ? `Please choose ${label}.` : `Please enter ${label}.`;
  }
  if (v.typeMismatch && el.type === "email") return "Please enter an email address, like name@example.com.";
  if (v.tooShort) return `Please write at least ${(el as HTMLInputElement).minLength} characters.`;
  return `Please check ${label}.`;
}

/**
 * Checks a form with the browser's own rules, shows one clear message per
 * field, then posts it to `endpoint`. With no endpoint, nothing is sent and
 * the status becomes "unconnected".
 */
export function useSubmit(endpoint: string | null) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Errors = {};
    let first: Field | null = null;

    for (const el of Array.from(form.elements)) {
      if (!isField(el) || !el.name || !el.willValidate) continue;
      if (!el.checkValidity()) {
        next[el.name] = messageFor(el);
        first ??= el;
      }
    }

    setErrors(next);
    if (first) {
      first.focus();
      setStatus("idle");
      return;
    }

    if (!endpoint) {
      setStatus("unconnected");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  function clearError(name: string) {
    if (!errors[name]) return;
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[name];
      return copy;
    });
  }

  return { status, errors, onSubmit, clearError };
}
