"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import CopyButton from "@/components/CopyButton";
import DownloadTxtButton from "@/components/DownloadTxtButton";
import { parseNumber } from "@/lib/format";
import { maakBetalingsherinnering, HerinneringToon } from "@/lib/gen/herinnering";

export default function HerinneringGenerator() {
  const [klant, setKlant] = useState("");
  const [nummer, setNummer] = useState("");
  const [bedrag, setBedrag] = useState("");
  const [datum, setDatum] = useState("");
  const [toon, setToon] = useState<HerinneringToon>("vriendelijk");
  const [link, setLink] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [output, setOutput] = useState<{ onderwerp: string; tekst: string } | null>(null);

  function genereer() {
    const e: Record<string, string> = {};
    const bedragN = parseNumber(bedrag);
    if (klant.trim() === "") e.klant = "Vul de naam van je klant in.";
    if (nummer.trim() === "") e.nummer = "Vul het factuurnummer in.";
    if (bedragN === null || bedragN <= 0) e.bedrag = "Vul het factuurbedrag in.";
    if (datum.trim() === "") e.datum = "Vul de vervaldatum in, bijvoorbeeld 1 juli 2026.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setOutput(null); return; }

    setOutput(
      maakBetalingsherinnering({
        klantnaam: klant.trim(),
        factuurnummer: nummer.trim(),
        bedrag: bedragN!,
        vervaldatum: datum.trim(),
        toon,
        betaallink: link,
      })
    );
  }

  function reset() {
    setKlant(""); setNummer(""); setBedrag(""); setDatum(""); setToon("vriendelijk"); setLink("");
    setErrors({}); setOutput(null);
  }

  const volledigeTekst = output ? `Onderwerp: ${output.onderwerp}\n\n${output.tekst}` : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="klant" label="Naam klant" value={klant} onChange={setKlant} placeholder="Bijv. Jansen BV" inputMode="text" error={errors.klant} />
        <InputField id="nummer" label="Factuurnummer" value={nummer} onChange={setNummer} placeholder="Bijv. 2026-014" inputMode="text" error={errors.nummer} />
        <InputField id="bedrag" label="Factuurbedrag" value={bedrag} onChange={setBedrag} placeholder="Bijv. 1250,00" suffix="€" error={errors.bedrag} />
        <InputField id="datum" label="Vervaldatum" value={datum} onChange={setDatum} placeholder="Bijv. 1 juli 2026" inputMode="text" error={errors.datum} />
        <SelectField id="toon" label="Toon" value={toon} onChange={(v) => setToon(v as HerinneringToon)} options={[
          { value: "vriendelijk", label: "Vriendelijk (eerste herinnering)" },
          { value: "zakelijk", label: "Zakelijk" },
          { value: "dringend", label: "Dringend (tweede herinnering)" },
        ]} />
        <InputField id="link" label="Betaallink" value={link} onChange={setLink} placeholder="https://..." inputMode="text" optional />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={genereer} className="btn-primary">Maak herinnering</button>
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
            <DownloadTxtButton text={volledigeTekst} filename={`betalingsherinnering-${nummer || "factuur"}.txt`} />
          </div>
          <p className="mt-3 text-sm text-slate-600">Controleer naam, bedrag en datum voordat je de mail verstuurt. Vul je eigen naam of bedrijfsnaam aan onder de groet.</p>
        </div>
      )}
    </div>
  );
}
