"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import CopyButton from "@/components/CopyButton";
import { maakFactuurteksten, FactuurToon, KlantType } from "@/lib/gen/factuurtekst";

export default function FactuurtekstGenerator() {
  const [dienst, setDienst] = useState("");
  const [periode, setPeriode] = useState("");
  const [klantType, setKlantType] = useState<KlantType>("bedrijf");
  const [toon, setToon] = useState<FactuurToon>("professioneel");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [teksten, setTeksten] = useState<string[] | null>(null);

  function genereer() {
    const e: Record<string, string> = {};
    if (dienst.trim() === "") e.dienst = "Omschrijf kort je dienst of product.";
    if (periode.trim() === "") e.periode = "Vul de periode in, bijvoorbeeld juni 2026.";
    setErrors(e);
    if (Object.keys(e).length > 0) { setTeksten(null); return; }
    setTeksten(maakFactuurteksten({ dienst: dienst.trim(), periode: periode.trim(), klantType, toon }));
  }

  function reset() {
    setDienst(""); setPeriode(""); setKlantType("bedrijf"); setToon("professioneel");
    setErrors({}); setTeksten(null);
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="dienst" label="Dienst of product" value={dienst} onChange={setDienst} placeholder="Bijv. webdesign voor nieuwe homepage" inputMode="text" error={errors.dienst} />
        <InputField id="periode" label="Periode" value={periode} onChange={setPeriode} placeholder="Bijv. juni 2026" inputMode="text" error={errors.periode} />
        <SelectField id="klanttype" label="Type klant" value={klantType} onChange={(v) => setKlantType(v as KlantType)} options={[
          { value: "bedrijf", label: "Bedrijf" },
          { value: "particulier", label: "Particulier" },
        ]} />
        <SelectField id="toon" label="Stijl" value={toon} onChange={(v) => setToon(v as FactuurToon)} options={[
          { value: "kort", label: "Kort" },
          { value: "professioneel", label: "Professioneel" },
          { value: "uitgebreid", label: "Uitgebreid" },
        ]} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={genereer} className="btn-primary">Maak factuurtekst</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
      </div>

      {teksten && (
        <div className="mt-6 space-y-3">
          {teksten.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Variant {i + 1}</p>
              <p className="mt-1 text-sm text-slate-700">{t}</p>
              <div className="mt-3"><CopyButton text={t} label="Kopieer deze tekst" /></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
