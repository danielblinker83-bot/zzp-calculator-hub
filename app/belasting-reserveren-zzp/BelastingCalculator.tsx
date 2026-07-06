"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenBelastingReserve, BelastingResultaat } from "@/lib/calc/belasting";

export default function BelastingCalculator() {
  const [winst, setWinst] = useState("");
  const [pct, setPct] = useState("35");
  const [btw, setBtw] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<BelastingResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const winstN = parseNumber(winst);
    const pctN = parseNumber(pct);
    const btwN = btw.trim() === "" ? 0 : parseNumber(btw);

    if (winstN === null || winstN < 0) e.winst = "Vul je gemiddelde winst per maand in.";
    if (pctN === null || pctN < 0 || pctN > 100) e.pct = "Vul een percentage in tussen 0 en 100.";
    if (btwN === null || btwN < 0) e.btw = "Vul een geldig bedrag in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(berekenBelastingReserve({ winstPerMaand: winstN!, reservePct: pctN!, btwDitKwartaal: btwN! }));
  }

  function reset() {
    setWinst(""); setPct("35"); setBtw(""); setErrors({}); setResultaat(null);
  }

  const copyText = resultaat
    ? `Reserveren per maand: ${formatEUR(resultaat.perMaand)}\nPer kwartaal: ${formatEUR(resultaat.perKwartaal)}\nPer jaar: ${formatEUR(resultaat.perJaar)}\nDit kwartaal incl. btw-afdracht: ${formatEUR(resultaat.totaalDitKwartaal)}`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <InputField id="winst" label="Winst per maand" value={winst} onChange={setWinst} placeholder="Bijv. 4500" suffix="€" error={errors.winst} />
        <InputField id="pct" label="Gewenste belastingreserve" value={pct} onChange={setPct} placeholder="Bijv. 35" suffix="%" error={errors.pct} />
        <InputField id="btw" label="Btw te betalen dit kwartaal" value={btw} onChange={setBtw} placeholder="Bijv. 2100" suffix="€" optional error={errors.btw} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken reservering</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultCard label="Per maand apart zetten" value={formatEUR(resultaat.perMaand)} highlight />
            <ResultCard label="Per kwartaal" value={formatEUR(resultaat.perKwartaal)} />
            <ResultCard label="Per jaar" value={formatEUR(resultaat.perJaar)} />
          </div>
          {resultaat.btwDitKwartaal > 0 && (
            <div className="mt-3">
              <ResultCard label="Totaal dit kwartaal (reserve + btw-afdracht)" value={formatEUR(resultaat.totaalDitKwartaal)} sub="Btw is geen belastingreserve maar geld dat je al voor de Belastingdienst vasthoudt." />
            </div>
          )}
          <p className="mt-3 text-sm text-slate-600">
            Richtlijn: zet dit bedrag direct na binnenkomst van je omzet op een aparte rekening. Zo kom je nooit voor verrassingen te staan.
          </p>
        </div>
      )}
    </div>
  );
}
