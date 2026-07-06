"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenOfferte, OfferteResultaat } from "@/lib/calc/offerte";

export default function OfferteCalculator() {
  const [uren, setUren] = useState("");
  const [tarief, setTarief] = useState("");
  const [materiaal, setMateriaal] = useState("");
  const [extra, setExtra] = useState("");
  const [btwPct, setBtwPct] = useState("21");
  const [korting, setKorting] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<OfferteResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const urenN = parseNumber(uren);
    const tariefN = parseNumber(tarief);
    const materiaalN = materiaal.trim() === "" ? 0 : parseNumber(materiaal);
    const extraN = extra.trim() === "" ? 0 : parseNumber(extra);
    const kortingN = korting.trim() === "" ? 0 : parseNumber(korting);

    if (urenN === null || urenN < 0) e.uren = "Vul het aantal uren in.";
    if (tariefN === null || tariefN < 0) e.tarief = "Vul je uurtarief in.";
    if (materiaalN === null || materiaalN < 0) e.materiaal = "Vul een geldig bedrag in.";
    if (extraN === null || extraN < 0) e.extra = "Vul een geldig bedrag in.";
    if (kortingN === null || kortingN < 0 || kortingN > 100) e.korting = "Vul een kortingspercentage in tussen 0 en 100.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(
      berekenOfferte({
        uren: urenN!,
        uurtarief: tariefN!,
        materiaal: materiaalN!,
        extraKosten: extraN!,
        btwPct: Number(btwPct),
        kortingPct: kortingN!,
      })
    );
  }

  function reset() {
    setUren(""); setTarief(""); setMateriaal(""); setExtra(""); setBtwPct("21"); setKorting("");
    setErrors({}); setResultaat(null);
  }

  const samenvatting = resultaat
    ? `Offerte-indicatie
Arbeid: ${formatEUR(resultaat.arbeid)}
Materiaal: ${formatEUR(resultaat.materiaal)}
Extra kosten: ${formatEUR(resultaat.extraKosten)}${resultaat.korting > 0 ? `\nKorting: -${formatEUR(resultaat.korting)}` : ""}
Subtotaal excl. btw: ${formatEUR(resultaat.subtotaalExcl)}
Btw (${btwPct}%): ${formatEUR(resultaat.btwBedrag)}
Totaal incl. btw: ${formatEUR(resultaat.totaalIncl)}

Deze offerte is een indicatie en 30 dagen geldig, tenzij anders vermeld.`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <InputField id="uren" label="Aantal uren" value={uren} onChange={setUren} placeholder="Bijv. 24" suffix="uur" error={errors.uren} />
        <InputField id="tarief" label="Uurtarief (excl. btw)" value={tarief} onChange={setTarief} placeholder="Bijv. 75" suffix="€" error={errors.tarief} />
        <InputField id="materiaal" label="Materiaalkosten" value={materiaal} onChange={setMateriaal} placeholder="Bijv. 350" suffix="€" optional error={errors.materiaal} />
        <InputField id="extra" label="Extra kosten" value={extra} onChange={setExtra} placeholder="Bijv. 50" suffix="€" optional error={errors.extra} />
        <SelectField id="btw" label="Btw-percentage" value={btwPct} onChange={setBtwPct} options={[{ value: "21", label: "21%" }, { value: "9", label: "9%" }, { value: "0", label: "0%" }]} />
        <InputField id="korting" label="Korting" value={korting} onChange={setKorting} placeholder="Bijv. 10" suffix="%" optional error={errors.korting} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken offerte</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={samenvatting} label="Kopieer samenvatting" />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultCard label="Subtotaal excl. btw" value={formatEUR(resultaat.subtotaalExcl)} sub={resultaat.korting > 0 ? `Na ${formatEUR(resultaat.korting)} korting` : undefined} />
            <ResultCard label={`Btw (${btwPct}%)`} value={formatEUR(resultaat.btwBedrag)} />
            <ResultCard label="Totaal incl. btw" value={formatEUR(resultaat.totaalIncl)} highlight />
          </div>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-semibold">Samenvatting voor je offerte</p>
            <pre className="mt-2 whitespace-pre-wrap font-sans text-sm text-slate-600">{samenvatting}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
