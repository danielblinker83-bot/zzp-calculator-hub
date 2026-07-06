"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR, formatPct } from "@/lib/format";
import { berekenNetto, NettoResultaat } from "@/lib/calc/netto";

export default function NettoCalculator() {
  const [omzet, setOmzet] = useState("");
  const [kosten, setKosten] = useState("");
  const [urencriterium, setUrencriterium] = useState(true);
  const [starter, setStarter] = useState(false);
  const [verzekering, setVerzekering] = useState("");
  const [buffer, setBuffer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<NettoResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const omzetN = parseNumber(omzet);
    const kostenN = kosten.trim() === "" ? 0 : parseNumber(kosten);
    const verzekeringN = verzekering.trim() === "" ? 0 : parseNumber(verzekering);
    const bufferN = buffer.trim() === "" ? 0 : parseNumber(buffer);

    if (omzetN === null || omzetN < 0) e.omzet = "Vul je maandomzet exclusief btw in.";
    if (kostenN === null || kostenN < 0) e.kosten = "Vul een geldig bedrag in.";
    if (verzekeringN === null || verzekeringN < 0) e.verzekering = "Vul een geldig bedrag in.";
    if (bufferN === null || bufferN < 0) e.buffer = "Vul een geldig percentage in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(
      berekenNetto({
        omzetPerMaandExcl: omzetN!,
        kostenPerMaand: kostenN!,
        urencriterium,
        startersaftrek: starter,
        verzekeringPensioenPerMaand: verzekeringN!,
        bufferPct: bufferN!,
      })
    );
  }

  function reset() {
    setOmzet(""); setKosten(""); setVerzekering(""); setBuffer("");
    setUrencriterium(true); setStarter(false);
    setErrors({}); setResultaat(null);
  }

  const copyText = resultaat
    ? `Winst voor belasting: ${formatEUR(resultaat.winstVoorBelasting)} per maand\nInkomstenbelasting + Zvw (2026): ${formatEUR(resultaat.heffingPerMaand)} per maand\nNetto indicatie: ${formatEUR(resultaat.nettoIndicatie)} per maand\nApart zetten: ${formatEUR(resultaat.totaalApartZetten)} per maand`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="omzet" label="Omzet per maand (excl. btw)" value={omzet} onChange={setOmzet} placeholder="Bijv. 6000" suffix="€" error={errors.omzet} />
        <InputField id="kosten" label="Zakelijke kosten per maand" value={kosten} onChange={setKosten} placeholder="Bijv. 800" suffix="€" error={errors.kosten} />
        <InputField id="verzekering" label="Verzekering of pensioen per maand" value={verzekering} onChange={setVerzekering} placeholder="Bijv. 250" suffix="€" optional error={errors.verzekering} />
        <InputField id="buffer" label="Buffer" value={buffer} onChange={setBuffer} placeholder="Bijv. 5" suffix="%" optional error={errors.buffer} />
        <fieldset className="flex flex-col justify-center gap-2 sm:col-span-2">
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
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken netto inkomen</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultCard label="Winst voor belasting" value={formatEUR(resultaat.winstVoorBelasting)} sub="Omzet min zakelijke kosten, per maand" />
            <ResultCard
              label="Inkomstenbelasting + Zvw (2026)"
              value={formatEUR(resultaat.heffingPerMaand)}
              sub={`Effectieve druk ${formatPct(resultaat.effectieveDruk * 100)} van je winst`}
            />
            <ResultCard label="Netto inkomen (indicatie)" value={formatEUR(resultaat.nettoIndicatie)} highlight />
            <ResultCard label="Aanbevolen apart te zetten" value={formatEUR(resultaat.totaalApartZetten)} sub="Belasting en Zvw plus je buffer" />
          </div>

          {resultaat.winstVoorBelasting > 0 && (
            <details className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600">
              <summary className="cursor-pointer font-semibold text-ink">Zo is de belasting opgebouwd (per jaar)</summary>
              <ul className="mt-3 space-y-1">
                <li>Winst per jaar: {formatEUR(resultaat.jaar.winstPerJaar)}</li>
                {resultaat.jaar.zelfstandigenaftrek > 0 && <li>Zelfstandigenaftrek: -{formatEUR(resultaat.jaar.zelfstandigenaftrek)}</li>}
                {resultaat.jaar.startersaftrek > 0 && <li>Startersaftrek: -{formatEUR(resultaat.jaar.startersaftrek)}</li>}
                <li>Mkb-winstvrijstelling (12,7%): -{formatEUR(resultaat.jaar.mkbVrijstelling)}</li>
                <li>Belastbare winst: {formatEUR(resultaat.jaar.belastbareWinst)}</li>
                <li>Inkomstenbelasting vóór kortingen: {formatEUR(resultaat.jaar.ibVoorKortingen)}</li>
                <li>Algemene heffingskorting: -{formatEUR(resultaat.jaar.algemeneHeffingskorting)}</li>
                <li>Arbeidskorting: -{formatEUR(resultaat.jaar.arbeidskorting)}</li>
                <li>Inkomstenbelasting: {formatEUR(resultaat.jaar.inkomstenbelasting)}</li>
                <li>Bijdrage Zvw (4,85%): {formatEUR(resultaat.jaar.zvwBijdrage)}</li>
                <li className="font-semibold text-ink">Totaal: {formatEUR(resultaat.jaar.totaleHeffing)} per jaar</li>
              </ul>
            </details>
          )}

          {resultaat.winstVoorBelasting < 0 && (
            <p className="mt-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              Je kosten zijn hoger dan je omzet. Controleer je invoer of kijk kritisch naar je kosten.
            </p>
          )}
          <p className="mt-3 text-sm text-slate-600">
            Berekend met de tarieven en heffingskortingen van 2026, uitgaande van winst als enig inkomen.
            Je werkelijke aanslag kan afwijken door je persoonlijke situatie.
          </p>
        </div>
      )}
    </div>
  );
}
