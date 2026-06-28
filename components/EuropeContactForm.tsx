"use client";

import type { FormEvent, ReactNode } from "react";
import { useId, useState } from "react";

type Field = { name: string; label: string; type: string; required?: boolean };

const readiness = [
  "future email routing to the GIUVA Europe secretariat",
  "future database storage",
  "future community and volunteer export",
  "recordable GDPR consent",
  "future automatic confirmation message"
];

export function EuropeContactForm({
  fields,
  children,
  submitLabel,
  successMessage,
  errorMessage = "Please complete the required fields and accept the privacy consent before sending."
}: {
  fields: Field[];
  children?: ReactNode;
  submitLabel: string;
  successMessage: string;
  errorMessage?: string;
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const descriptionId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    setError("");

    if (!event.currentTarget.checkValidity()) {
      setError(errorMessage);
      return;
    }

    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card grid gap-5 p-6 md:p-8" aria-describedby={descriptionId}>
      <p id={descriptionId} className="text-sm font-semibold leading-6 text-slate-600">
        This Release 1.0 form is production-safe and demonstrative: it validates fields locally and is prepared for future API integration.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name}>
            <span className="field-label">{field.label}{field.required ? " *" : ""}</span>
            <input className="field" name={field.name} type={field.type} required={field.required} />
          </label>
        ))}
      </div>
      {children}
      <label className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
        <input name="privacy_consent" type="checkbox" required className="mt-1 h-4 w-4" />
        I agree that GIUVA may process my data to respond to this request. Privacy and cookie policies will be connected in the final public version.
      </label>
      <button type="submit" className="btn btn-primary justify-self-start">{submitLabel}</button>
      {error ? <p role="alert" className="rounded-md bg-red-50 p-4 font-bold text-red-800">{error}</p> : null}
      {sent ? <p role="status" className="rounded-md bg-emerald-50 p-4 font-bold text-emerald-800">{successMessage}</p> : null}
      <div className="rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <strong className="block text-slate-900">Prepared for future integration</strong>
        <ul className="mt-2 grid gap-1">{readiness.map((item) => <li key={item}>- {item}</li>)}</ul>
      </div>
    </form>
  );
}
