"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR, formatPct } from "@/lib/format";
import { berekenMarge, MargeResultaat } from "@/lib/calc/marge";

export default function MargeCalculator() {
  const [inkoop, setInkoop] = useState("");
  const [verkoop, setVerkoop] = useState("");
  const [extra, setExtra] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<MargeResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const inkoopN = parseNumber(inkoop);
    const verkoopN = parseNumber(verkoop);
    const extraN = extra.trim() === "" ? 0 : parseNumber(extra);

    if (inkoopN === null || inkoopN < 0) e.inkoop = "Vul je inkoopprijs in.";
    if (verkoopN === null || verkoopN < 0) e.verkoop = "Vul je verkoopprijs in.";
    if (extraN === null || extraN < 0) e.extra = "Vul een geldig bedrag in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(berekenMarge({ inkoop: inkoopN!, verkoop: verkoopN!, extraKosten: extraN! }));
  }

  function reset() {
    setInkoop(""); setVerkoop(""); setExtra(""); setErrors({}); setResultaat(null);
  }

  const copyText = resultaat
    ? `Winst: ${formatEUR(resultaat.winst)}\nMarge: ${resultaat.margePct !== null ? formatPct(resultaat.margePct) : "-"}\nOpslag: ${resultaat.opslagPct !== null ? formatPct(resultaat.opslagPct) : "-"}`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <InputField id="inkoop" label="Inkoopprijs" value={inkoop} onChange={setInkoop} placeholder="Bijv. 60" suffix="€" error={errors.inkoop} />
        <InputField id="verkoop" label="Verkoopprijs" value={verkoop} onChange={setVerkoop} placeholder="Bijv. 100" suffix="€" error={errors.verkoop} />
        <InputField id="extra" label="Extra kosten" value={extra} onChange={setExtra} placeholder="Bijv. 5" suffix="€" optional error={errors.extra} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken marge</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultCard label="Winst per verkoop" value={formatEUR(resultaat.winst)} highlight />
            <ResultCard label="Marge" value={resultaat.margePct !== null ? formatPct(resultaat.margePct) : "n.v.t."} sub="Winst als percentage van de verkoopprijs" />
            <ResultCard label="Opslag (markup)" value={resultaat.opslagPct !== null ? formatPct(resultaat.opslagPct) : "n.v.t."} sub="Winst als percentage van je kosten" />
          </div>
          {resultaat.winst < 0 && (
            <p className="mt-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              Je maakt verlies op deze verkoop: je kosten ({formatEUR(resultaat.totaleKosten)}) zijn hoger dan je verkoopprijs.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
