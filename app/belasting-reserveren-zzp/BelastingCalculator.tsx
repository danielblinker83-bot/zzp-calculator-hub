"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR, formatPct } from "@/lib/format";
import { berekenBelastingReserve, BelastingResultaat } from "@/lib/calc/belasting";

export default function BelastingCalculator() {
  const [winst, setWinst] = useState("");
  const [marge, setMarge] = useState("");
  const [btw, setBtw] = useState("");
  const [urencriterium, setUrencriterium] = useState(true);
  const [starter, setStarter] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<BelastingResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const winstN = parseNumber(winst);
    const margeN = marge.trim() === "" ? 0 : parseNumber(marge);
    const btwN = btw.trim() === "" ? 0 : parseNumber(btw);

    if (winstN === null || winstN < 0) e.winst = "Vul je gemiddelde winst per maand in.";
    if (margeN === null || margeN < 0 || margeN > 100) e.marge = "Vul een percentage in tussen 0 en 100.";
    if (btwN === null || btwN < 0) e.btw = "Vul een geldig bedrag in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(
      berekenBelastingReserve({
        winstPerMaand: winstN!,
        urencriterium,
        startersaftrek: starter,
        margePct: margeN!,
        btwDitKwartaal: btwN!,
      })
    );
  }

  function reset() {
    setWinst(""); setMarge(""); setBtw("");
    setUrencriterium(true); setStarter(false);
    setErrors({}); setResultaat(null);
  }

  const copyText = resultaat
    ? `Reserveren per maand: ${formatEUR(resultaat.perMaand)}\nPer kwartaal: ${formatEUR(resultaat.perKwartaal)}\nPer jaar: ${formatEUR(resultaat.perJaar)}\nDit kwartaal incl. btw-afdracht: ${formatEUR(resultaat.totaalDitKwartaal)}`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <InputField id="winst" label="Winst per maand" value={winst} onChange={setWinst} placeholder="Bijv. 4500" suffix="€" error={errors.winst} />
        <InputField id="marge" label="Veiligheidsmarge" value={marge} onChange={setMarge} placeholder="Bijv. 10" suffix="%" optional error={errors.marge} />
        <InputField id="btw" label="Btw te betalen dit kwartaal" value={btw} onChange={setBtw} placeholder="Bijv. 2100" suffix="€" optional error={errors.btw} />
      </div>
      <fieldset className="mt-4 flex flex-col gap-2">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={urencriterium}
            onChange={(e) => setUrencriterium(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-petrol-700 focus:ring-petrol-600"
          />
          Ik voldoe aan het urencriterium (1.225 uur per jaar)
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={starter}
            onChange={(e) => setStarter(e.target.checked)}
            disabled={!urencriterium}
            className="h-4 w-4 rounded border-slate-300 text-petrol-700 focus:ring-petrol-600 disabled:opacity-40"
          />
          Ik heb recht op startersaftrek
        </label>
      </fieldset>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken reservering</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <ResultCard label="Per maand apart zetten" value={formatEUR(resultaat.perMaand)} highlight sub={`Effectieve druk ${formatPct(resultaat.effectieveDruk * 100)} van je winst (2026)`} />
            <ResultCard label="Per kwartaal" value={formatEUR(resultaat.perKwartaal)} />
            <ResultCard label="Per jaar" value={formatEUR(resultaat.perJaar)} />
          </div>
          {resultaat.btwDitKwartaal > 0 && (
            <div className="mt-3">
              <ResultCard label="Totaal dit kwartaal (reserve + btw-afdracht)" value={formatEUR(resultaat.totaalDitKwartaal)} sub="Btw is geen belastingreserve maar geld dat je al voor de Belastingdienst vasthoudt." />
            </div>
          )}
          <p className="mt-3 text-sm text-slate-600">
            Berekend met de tarieven en heffingskortingen van 2026, uitgaande van winst als enig inkomen.
            Zet dit bedrag direct na binnenkomst van je omzet op een aparte rekening.
          </p>
        </div>
      )}
    </div>
  );
}
