"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import SelectField from "@/components/SelectField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenBtw, BtwRichting } from "@/lib/calc/btw";

export default function BtwCalculator() {
  const [bedrag, setBedrag] = useState("");
  const [richting, setRichting] = useState<BtwRichting>("excl-naar-incl");
  const [pct, setPct] = useState("21");
  const [error, setError] = useState<string | undefined>();

  const bedragNum = parseNumber(bedrag);
  const geldig = bedragNum !== null && bedragNum >= 0;
  const resultaat = geldig ? berekenBtw(bedragNum, Number(pct), richting) : null;

  function onBedrag(v: string) {
    setBedrag(v);
    const n = parseNumber(v);
    if (v !== "" && (n === null || n < 0)) setError("Vul een geldig bedrag in, bijvoorbeeld 1250,50.");
    else setError(undefined);
  }

  function reset() {
    setBedrag("");
    setPct("21");
    setRichting("excl-naar-incl");
    setError(undefined);
  }

  const copyText = resultaat
    ? `Exclusief btw: ${formatEUR(resultaat.exclusief)}\nBtw (${pct}%): ${formatEUR(resultaat.btwBedrag)}\nInclusief btw: ${formatEUR(resultaat.inclusief)}`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <SelectField
          id="richting"
          label="Wat wil je berekenen?"
          value={richting}
          onChange={(v) => setRichting(v as BtwRichting)}
          options={[
            { value: "excl-naar-incl", label: "Exclusief btw → inclusief btw" },
            { value: "incl-naar-excl", label: "Inclusief btw → exclusief btw" },
          ]}
        />
        <InputField
          id="bedrag"
          label={richting === "excl-naar-incl" ? "Bedrag exclusief btw" : "Bedrag inclusief btw"}
          value={bedrag}
          onChange={onBedrag}
          placeholder="Bijv. 1250,50"
          suffix="€"
          error={error}
        />
        <SelectField
          id="pct"
          label="Btw-percentage"
          value={pct}
          onChange={setPct}
          options={[
            { value: "21", label: "21% (algemeen tarief)" },
            { value: "9", label: "9% (verlaagd tarief)" },
            { value: "0", label: "0% (nultarief)" },
          ]}
        />
      </div>

      {resultaat && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <ResultCard label="Exclusief btw" value={formatEUR(resultaat.exclusief)} />
          <ResultCard label={`Btw-bedrag (${pct}%)`} value={formatEUR(resultaat.btwBedrag)} />
          <ResultCard label="Inclusief btw" value={formatEUR(resultaat.inclusief)} highlight />
        </div>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        {resultaat && <CopyButton text={copyText} />}
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
      </div>
    </div>
  );
}
