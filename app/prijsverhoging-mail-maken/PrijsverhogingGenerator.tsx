"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import CopyButton from "@/components/CopyButton";
import DownloadTxtButton from "@/components/DownloadTxtButton";
import { parseNumber } from "@/lib/format";
import { maakPrijsverhogingMail, PrijsToon } from "@/lib/gen/prijsverhoging";

export default function PrijsverhogingGenerator() {
  const [bedrijf, setBedrijf] = useState("");
  const [klant, setKlant] = useState("");
  const [oud, setOud] = useState("");
  const [nieuw, setNieuw] = useState("");
  const [datum, setDatum] = useState("");
  const [reden, setReden] = useState("");
  const [toon, setToon] = useState<PrijsToon>("professioneel");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<{ onderwerp: string; tekst: string } | null>(null);

  function genereer() {
    const e: Record<string, string> = {};
    const oudN = parseNumber(oud);
    const nieuwN = parseNumber(nieuw);
    if (bedrijf.trim() === "") e.bedrijf = "Vul je bedrijfsnaam in.";
    if (oudN === null || oudN < 0) e.oud = "Vul je huidige prijs in.";
    if (nieuwN === null || nieuwN < 0) e.nieuw = "Vul je nieuwe prijs in.";
    if (datum.trim() === "") e.datum = "Vul de ingangsdatum in, bijvoorbeeld 1 september 2026.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setOutput(null); return; }

    setOutput(
      maakPrijsverhogingMail({
        bedrijfsnaam: bedrijf.trim(),
        klantnaam: klant,
        huidigePrijs: oudN!,
        nieuwePrijs: nieuwN!,
        ingangsdatum: datum.trim(),
        reden,
        toon,
      })
    );
  }

  function reset() {
    setBedrijf(""); setKlant(""); setOud(""); setNieuw(""); setDatum(""); setReden(""); setToon("professioneel");
    setErrors({}); setOutput(null);
  }

  const volledigeTekst = output ? `Onderwerp: ${output.onderwerp}\n\n${output.tekst}` : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="bedrijf" label="Bedrijfsnaam" value={bedrijf} onChange={setBedrijf} placeholder="Bijv. Studio Vermeer" inputMode="text" error={errors.bedrijf} />
        <InputField id="klant" label="Naam klant" value={klant} onChange={setKlant} placeholder="Bijv. mevrouw De Boer" inputMode="text" optional />
        <InputField id="oud" label="Huidige prijs" value={oud} onChange={setOud} placeholder="Bijv. 75" suffix="€" error={errors.oud} />
        <InputField id="nieuw" label="Nieuwe prijs" value={nieuw} onChange={setNieuw} placeholder="Bijv. 85" suffix="€" error={errors.nieuw} />
        <InputField id="datum" label="Ingangsdatum" value={datum} onChange={setDatum} placeholder="Bijv. 1 september 2026" inputMode="text" error={errors.datum} />
        <InputField id="reden" label="Reden" value={reden} onChange={setReden} placeholder="Bijv. gestegen kosten en uitgebreidere service" inputMode="text" optional />
        <SelectField id="toon" label="Toon" value={toon} onChange={(v) => setToon(v as PrijsToon)} options={[
          { value: "vriendelijk", label: "Vriendelijk" },
          { value: "professioneel", label: "Professioneel" },
          { value: "kort", label: "Kort" },
        ]} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={genereer} className="btn-primary">Maak mail</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
      </div>

      {output && (
        <div className="mt-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold text-slate-500">Onderwerp</p>
            <p className="font-semibold">{output.onderwerp}</p>
            <pre className="mt-4 whitespace-pre-wrap font-sans text-sm text-slate-700">{output.tekst}</pre>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <CopyButton text={volledigeTekst} label="Kopieer e-mail" />
            <DownloadTxtButton text={volledigeTekst} filename="prijsverhoging-mail.txt" />
          </div>
        </div>
      )}
    </div>
  );
}
