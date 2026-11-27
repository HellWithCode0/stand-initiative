"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { formatINR, site } from "@/content/site";
import { Todo } from "./Todo";

type Frequency = "once" | "monthly";

export function DonateWidget() {
  const uid = useId();
  const { presets, defaultAmount, minimum, checkoutUrl, provider } = site.donate;
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [choice, setChoice] = useState<string>(String(defaultAmount));
  const [custom, setCustom] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "unconnected">("idle");
  const customRef = useRef<HTMLInputElement>(null);

  const amount = choice === "other" ? Number(custom) : Number(choice);
  const valid = Number.isFinite(amount) && amount >= minimum;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!valid) {
      setError(`Please enter an amount of ${formatINR(minimum)} or more.`);
      customRef.current?.focus();
      return;
    }
    setError("");
    if (checkoutUrl) {
      // The provider's hosted page takes over from here.
      window.location.assign(checkoutUrl);
      return;
    }
    setStatus("unconnected");
  }

  return (
    <form className="donate-card" onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <h2 className="donate-card-title" id={`${uid}-title`}>
        Make a donation
      </h2>

      <fieldset className="segmented">
        <legend className="field-label">How often</legend>
        <div className="segmented-row">
          {(["once", "monthly"] as const).map((f) => (
            <label key={f} className="segment">
              <input
                type="radio"
                name="frequency"
                value={f}
                checked={frequency === f}
                onChange={() => {
                  setFrequency(f);
                  setStatus("idle");
                }}
              />
              <span>{f === "once" ? "One time" : "Monthly"}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="amounts">
        <legend className="field-label">Amount</legend>
        <div className="amount-grid">
          {presets.map((p) => (
            <label key={p} className="amount">
              <input
                type="radio"
                name="amount"
                value={p}
                checked={choice === String(p)}
                onChange={() => {
                  setChoice(String(p));
                  setError("");
                  setStatus("idle");
                }}
              />
              <span>{formatINR(p)}</span>
            </label>
          ))}
          <label className="amount">
            <input
              type="radio"
              name="amount"
              value="other"
              checked={choice === "other"}
              onChange={() => {
                setChoice("other");
                setStatus("idle");
                requestAnimationFrame(() => customRef.current?.focus());
              }}
            />
            <span>Other</span>
          </label>
        </div>
      </fieldset>

      {choice === "other" ? (
        <div className="field" data-invalid={error ? true : undefined}>
          <label className="field-label" htmlFor={`${uid}-custom`}>
            Your amount in rupees
          </label>
          <div className="currency-input">
            <span aria-hidden="true">₹</span>
            <input
              ref={customRef}
              id={`${uid}-custom`}
              className="input"
              inputMode="numeric"
              pattern="[0-9]*"
              value={custom}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${uid}-error` : `${uid}-min`}
              onChange={(e) => {
                setCustom(e.target.value.replace(/[^0-9]/g, ""));
                setError("");
                setStatus("idle");
              }}
            />
          </div>
          <p className="field-hint" id={`${uid}-min`}>
            Minimum {formatINR(minimum)}.
          </p>
          {error ? (
            <p className="field-error" id={`${uid}-error`}>
              {error}
            </p>
          ) : null}
        </div>
      ) : null}

      <p className="donate-summary" aria-live="polite">
        {valid ? (
          <>
            You are giving <strong>{formatINR(amount)}</strong>{" "}
            {frequency === "once" ? "once" : "every month"}.
          </>
        ) : (
          <>Choose or enter an amount.</>
        )}
      </p>

      <button type="submit" className="btn btn-primary btn-block">
        Continue to secure payment
      </button>

      <div role="status" aria-live="polite" className="form-status">
        {status === "unconnected" ? (
          <p className="form-note">
            Online payment is not set up yet, so nothing has been charged.{" "}
            <Todo>CONNECT A PAYMENT PROVIDER IN content/site.ts</Todo>
          </p>
        ) : null}
      </div>

      <p className="donate-fine">
        Payments are handled on the secure page of{" "}
        {provider ? provider : <Todo>ADD PAYMENT PROVIDER</Todo>}. STAND never sees your card or bank details.
      </p>
    </form>
  );
}
