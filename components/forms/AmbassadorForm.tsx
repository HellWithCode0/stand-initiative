"use client";

import { site } from "@/content/site";
import { CheckGroup, FormStatus, SelectField, TextArea, TextField } from "./Fields";
import { useSubmit } from "./useSubmit";

export function AmbassadorForm() {
  const { status, errors, onSubmit, clearError } = useSubmit(site.forms.ambassador);
  const common = { errors, onEdit: clearError, formId: "ambassador" };

  return (
    <form className="form" noValidate onSubmit={onSubmit} aria-labelledby="ambassador-title">
      <div className="form-grid">
        <TextField {...common} name="name" label="Your name" spoken="your name" required autoComplete="name" />
        <TextField {...common} name="email" type="email" label="Email" spoken="your email address" required autoComplete="email" />
      </div>
      <div className="form-grid">
        <TextField {...common} name="organisation" label="School or organisation" spoken="your school or organisation" required autoComplete="organization" />
        <TextField {...common} name="city" label="City" spoken="your city" required autoComplete="address-level2" />
      </div>
      <SelectField
        {...common}
        name="role"
        label="I am"
        spoken="what describes you"
        required
        options={[
          { value: "student", label: "A student" },
          { value: "teacher", label: "A teacher or coach" },
          { value: "parent", label: "A parent or guardian" },
          { value: "other", label: "Something else" },
        ]}
      />
      <CheckGroup
        name="interests"
        legend="How would you like to help?"
        options={[
          "Become a STAND Out ambassador",
          "Help with fundraising",
          "Help with the interview series",
          "Bring STAND to my school",
        ]}
      />
      <TextArea {...common} name="message" label="Anything else we should know?" spoken="a message" rows={4} />
      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
          Send application
        </button>
      </div>
      <FormStatus status={status} pending="CONNECT THE AMBASSADOR FORM IN content/site.ts" />
    </form>
  );
}
