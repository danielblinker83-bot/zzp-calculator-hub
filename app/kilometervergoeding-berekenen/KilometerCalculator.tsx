"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenKilometervergoeding, KilometerResultaat } from "@/lib/calc/kilometer";

export default function KilometerCalculator() {
  const [km, setKm] = useState("");
  const [vergoeding, setVergoeding] = useState("0,25");
  const [ritten, setRitten] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<KilometerResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const kmN = parseNumber(km);
    const vergoedingN = parseNumber(vergoeding);
    const rittenN = ritten.trim() === "" ? undefined : parseNumber(ritten);

    if (kmN === null || kmN <= 0) e.km = "Vul het aantal kilometers in.";
    if (vergoedingN === null || vergoedingN < 0) e.vergoeding = "Vul een geldige vergoeding per kilometer in.";
    if (ritten.trim() !== "" && (rittenN === null || rittenN! < 0)) e.ritten = "Vul een geldig aantal ritten in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(berekenKilometervergoeding({ kilometersPerRit: kmN!, vergoedingPerKm: vergoedingN!, rittenPerMaand: rittenN ?? undefined }));
  }

  function reset() {
    setKm(""); setVergoeding("0,25"); setRitten(""); setErrors({}); setResultaat(null);
  }

  const copyText = resultaat
    ? `Vergoeding per rit: ${formatEUR(resultaat.perRit)}` +
      (resultaat.perMaand !== null ? `\nPer maand: ${formatEUR(resultaat.perMaand)}\nPer jaar: ${formatEUR(resultaat.perJaar!)}` : "")
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <InputField id="km" label="Aantal kilometers (per rit)" value={km} onChange={setKm} placeholder="Bijv. 45" suffix="km" error={errors.km} />
        <InputField id="vergoeding" label="Vergoeding per kilometer" value={vergoeding} onChange={setVergoeding} placeholder="Bijv. 0,25" suffix="€/km" error={errors.vergoeding} />
        <InputField id="ritten" label="Aantal ritten per maand" value={ritten} onChange={setRitten} placeholder="Bijv. 8" optional error={errors.ritten} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken vergoeding</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <ResultCard label="Per rit" value={formatEUR(resultaat.perRit)} highlight={resultaat.perMaand === null} />
          {resultaat.perMaand !== null && <ResultCard label="Per maand" value={formatEUR(resultaat.perMaand)} highlight />}
          {resultaat.perJaar !== null && <ResultCard label="Per jaar" value={formatEUR(resultaat.perJaar)} />}
        </div>
      )}
    </div>
  );
}
