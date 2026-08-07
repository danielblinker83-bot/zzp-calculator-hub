"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenLoondienstZzp, LoondienstZzpResultaat } from "@/lib/calc/loondienstZzp";

export default function LoondienstZzpCalculator() {
  const [bruto, setBruto] = useState("");
  const [uren, setUren] = useState("1400");
  const [kosten, setKosten] = useState("");
  const [reserveringen, setReserveringen] = useState("");
  const [urencriterium, setUrencriterium] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<LoondienstZzpResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const brutoN = parseNumber(bruto);
    const urenN = parseNumber(uren);
    const kostenN = kosten.trim() === "" ? 0 : parseNumber(kosten);
    const reserveringenN = reserveringen.trim() === "" ? 0 : parseNumber(reserveringen);

    if (brutoN === null || brutoN <= 0) e.bruto = "Vul je huidige bruto jaarsalaris in.";
    if (urenN === null || urenN <= 0) e.uren = "Vul het aantal declarabele uren per jaar in.";
    if (kostenN === null || kostenN < 0) e.kosten = "Vul een geldig bedrag in.";
    if (reserveringenN === null || reserveringenN < 0) e.reserveringen = "Vul een geldig bedrag in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(
      berekenLoondienstZzp({
        brutoJaarsalaris: brutoN!,
        declarabeleUrenPerJaar: urenN!,
        kostenPerJaar: kostenN!,
        reserveringenPerJaar: reserveringenN!,
        urencriterium,
      })
    );
  }

  function reset() {
    setBruto(""); setUren("1400"); setKosten(""); setReserveringen("");
    setUrencriterium(true); setErrors({}); setResultaat(null);
  }

  const heeftReservering = resultaat && resultaat.winstNodigEerlijk > resultaat.winstNodigKaal + 1;
  const copyText = resultaat
    ? `Netto loondienst: ${formatEUR(resultaat.nettoLoondienstPerMaand)} per maand\n` +
      `Zzp-winst nodig (gelijk netto): ${formatEUR(resultaat.winstNodigKaal)} per jaar\n` +
      `Uurtarief nodig (gelijk netto): ${formatEUR(resultaat.uurtariefKaal)} excl. btw` +
      (heeftReservering
        ? `\nUurtarief nodig (incl. eigen pensioen/AOV/buffer): ${formatEUR(resultaat.uurtariefEerlijk)} excl. btw`
        : "")
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="bruto" label="Huidig bruto jaarsalaris (incl. vakantiegeld)" value={bruto} onChange={setBruto} placeholder="Bijv. 50000" suffix="€" error={errors.bruto} />
        <InputField id="uren" label="Declarabele uren per jaar" value={uren} onChange={setUren} placeholder="Bijv. 1400" suffix="uur" error={errors.uren} />
        <InputField id="kosten" label="Zakelijke kosten per jaar" value={kosten} onChange={setKosten} placeholder="Bijv. 6000" suffix="€" optional error={errors.kosten} />
        <InputField id="reserveringen" label="Pensioen, AOV en buffer per jaar" value={reserveringen} onChange={setReserveringen} placeholder="Bijv. 8000" suffix="€" optional error={errors.reserveringen} />
      </div>
      <fieldset className="mt-4">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <input
            type="checkbox"
            checked={urencriterium}
            onChange={(e) => setUrencriterium(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-petrol-700 focus:ring-petrol-600"
          />
          Ik voldoe aan het urencriterium (1.225 uur per jaar)
        </label>
      </fieldset>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-ink">Je houdt in loondienst netto over:</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <ResultCard label="Netto per maand" value={formatEUR(resultaat.nettoLoondienstPerMaand)} />
            <ResultCard label="Netto per jaar" value={formatEUR(resultaat.nettoLoondienstPerJaar)} />
          </div>

          <p className="mt-6 text-sm font-semibold text-ink">Om dat als zzp'er te evenaren heb je nodig:</p>
          <div className="mt-2 grid gap-3 sm:grid-cols-2">
            <ResultCard label="Uurtarief (excl. btw)" value={formatEUR(resultaat.uurtariefKaal)} highlight sub={`Bij ${formatEUR(resultaat.omzetNodigKaal)} omzet per jaar`} />
            <ResultCard label="Winst per jaar" value={formatEUR(resultaat.winstNodigKaal)} sub="Zelfde netto als je salaris" />
          </div>

          {heeftReservering && (
            <>
              <p className="mt-6 text-sm font-semibold text-ink">Eerlijke vergelijking, inclusief wat je zelf opzij zet voor pensioen, AOV en buffer:</p>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <ResultCard label="Uurtarief (excl. btw)" value={formatEUR(resultaat.uurtariefEerlijk)} highlight sub={`Bij ${formatEUR(resultaat.omzetNodigEerlijk)} omzet per jaar`} />
                <ResultCard label="Winst per jaar" value={formatEUR(resultaat.winstNodigEerlijk)} sub="Inclusief eigen reserveringen" />
              </div>
            </>
          )}

          <p className="mt-4 text-sm text-slate-600">
            Berekend met de tarieven en heffingskortingen van 2026, uitgaande van je inkomen als enige
            bron. Het is een onderbouwde indicatie, geen financieel advies. Een werkgever betaalt
            daarnaast premies en pensioen die je als zzp'er zelf regelt; vul die bij pensioen, AOV en
            buffer in voor een eerlijker beeld.
          </p>
        </div>
      )}
    </div>
  );
}
