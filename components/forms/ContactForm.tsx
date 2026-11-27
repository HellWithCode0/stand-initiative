"use client";

import { useEffect, useRef } from "react";
import { site } from "@/content/site";
import { FormStatus, SelectField, TextArea, TextField } from "./Fields";
import { useSubmit } from "./useSubmit";

export const topics = [
  { value: "general", label: "A general question" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media or interviews" },
  { value: "fundraising", label: "Running a fundraiser" },
  { value: "volunteering", label: "Volunteering" },
  { value: "donation", label: "Help with a donation" },
];

export function ContactForm() {
  const { status, errors, onSubmit, clearError } = useSubmit(site.forms.contact);
  const formRef = useRef<HTMLFormElement>(null);
  const id = "contact";

  // Links such as /contact?topic=partnership choose the topic in advance.
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    const select = formRef.current?.elements.namedItem("topic");
    if (topic && select instanceof HTMLSelectElement && topics.some((t) => t.value === topic)) {
      select.value = topic;
    }
  }, []);

  const common = { errors, onEdit: clearError, formId: id };

  return (
    <form ref={formRef} className="form" noValidate onSubmit={onSubmit} aria-labelledby="contact-form-title">
      <div className="form-grid">
        <TextField {...common} name="name" label="Your name" spoken="your name" required autoComplete="name" />
        <TextField {...common} name="email" type="email" label="Email" spoken="your email address" required autoComplete="email" />
      </div>
      <SelectField {...common} name="topic" label="What is it about?" spoken="a topic" required options={topics} />
      <TextField {...common} name="subject" label="Subject" spoken="a subject" required />
      <TextArea {...common} name="message" label="Message" spoken="your message" required rows={6} />
      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          Send message
        </button>
      </div>
      <FormStatus status={status} pending="CONNECT THE CONTACT FORM IN content/site.ts" />
    </form>
  );
}
