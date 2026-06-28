"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
};

const readiness = [
  "invio email futuro alla segreteria GIUVA",
  "salvataggio futuro in database",
  "esportazione dati volontari",
  "consenso privacy registrabile",
  "messaggio automatico di conferma"
];

export function ItalyMockForm({
  fields,
  children,
  submitLabel,
  successMessage,
  errorMessage = "Verifica i dati inseriti e accetta il consenso privacy prima dell'invio."
}: {
  fields: Field[];
  children?: ReactNode;
  submitLabel: string;
  successMessage: string;
  errorMessage?: string;
}) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

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
    <form onSubmit={handleSubmit} noValidate className="card grid gap-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name}>
            <span className="field-label">{field.label}</span>
            <input className="field" name={field.name} type={field.type} required={field.required} />
          </label>
        ))}
      </div>
      {children}
      <label className="flex gap-3 text-sm font-semibold leading-6 text-slate-700">
        <input name="privacy_consent" type="checkbox" required className="mt-1 h-4 w-4" />
        Accetto il trattamento dei dati per essere ricontattato dalla segreteria GIUVA. Privacy policy e cookie policy saranno collegate nella versione finale.
      </label>
      <button type="submit" className="btn btn-primary justify-self-start">
        {submitLabel}
      </button>
      {error ? <p className="rounded-md bg-red-50 p-4 font-bold text-red-800">{error}</p> : null}
      {sent ? <p className="rounded-md bg-emerald-50 p-4 font-bold text-emerald-800">{successMessage}</p> : null}
      <div className="rounded-md bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        <strong className="block text-slate-900">Predisposto per integrazione futura</strong>
        <ul className="mt-2 grid gap-1">
          {readiness.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </form>
  );
}
