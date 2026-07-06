"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [verzonden, setVerzonden] = useState(false);

  function verstuur() {
    const e: Record<string, string> = {};
    if (naam.trim() === "") e.naam = "Vul je naam in.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) e.email = "Vul een geldig e-mailadres in.";
    if (bericht.trim().length < 10) e.bericht = "Schrijf een bericht van minimaal 10 tekens.";
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const onderwerp = encodeURIComponent(`Bericht via ${SITE.name} van ${naam.trim()}`);
    const body = encodeURIComponent(`${bericht.trim()}\n\nNaam: ${naam.trim()}\nE-mail: ${email.trim()}`);
    window.location.href = `mailto:${SITE.email}?subject=${onderwerp}&body=${body}`;
    setVerzonden(true);
  }

  if (verzonden) {
    return (
      <div className="rounded-2xl border border-petrol-100 bg-petrol-50 p-6">
        <p className="font-semibold text-petrol-700">Je e-mailprogramma wordt geopend</p>
        <p className="mt-1 text-sm text-slate-600">
          Je bericht staat klaar in je eigen e-mailprogramma; verstuur hem daar om hem te verzenden.
          Opent er niets? Mail dan rechtstreeks naar {SITE.email}.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <InputField id="naam" label="Naam" value={naam} onChange={setNaam} placeholder="Je naam" inputMode="text" error={errors.naam} />
      <InputField id="email" label="E-mailadres" value={email} onChange={setEmail} placeholder="jij@voorbeeld.nl" inputMode="text" type="email" error={errors.email} />
      <div>
        <label htmlFor="bericht" className="mb-1 block text-sm font-medium">Bericht</label>
        <textarea
          id="bericht"
          value={bericht}
          onChange={(e) => setBericht(e.target.value)}
          rows={5}
          placeholder="Waar kunnen we je mee helpen?"
          aria-invalid={!!errors.bericht}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition focus:ring-2 focus:ring-petrol-600 ${errors.bericht ? "border-red-400" : "border-slate-300"}`}
        />
        {errors.bericht && <p className="mt-1 text-sm text-red-600">{errors.bericht}</p>}
      </div>
      <button type="button" onClick={verstuur} className="btn-primary">Verstuur bericht</button>
    </div>
  );
}
