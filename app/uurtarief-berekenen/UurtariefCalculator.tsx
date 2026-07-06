"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenUurtarief } from "@/lib/calc/uurtarief";

export default function UurtariefCalculator() {
  const [netto, setNetto] = useState("");
  const [kosten, setKosten] = useState("");
  const [belasting, setBelasting] = useState("35");
  const [uren, setUren] = useState("");
  const [vrijeWeken, setVrijeWeken] = useState("");
  const [buffer, setBuffer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<ReturnType<typeof berekenUurtarief> | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const nettoN = parseNumber(netto);
    const kostenN = parseNumber(kosten) ?? 0;
    const belastingN = parseNumber(belasting);
    const urenN = parseNumber(uren);
    const vrijeWekenN = vrijeWeken.trim() === "" ? 0 : parseNumber(vrijeWeken);
    const bufferN = buffer.trim() === "" ? 0 : parseNumber(buffer);

    if (nettoN === null || nettoN <= 0) e.netto = "Vul je gewenste netto maandinkomen in.";
    if (kosten !== "" && (parseNumber(kosten) === null || kostenN < 0)) e.kosten = "Vul een geldig bedrag in.";
    if (belastingN === null || belastingN < 0 || belastingN > 99) e.belasting = "Vul een percentage in tussen 0 en 99.";
    if (urenN === null || urenN <= 0) e.uren = "Vul het aantal declarabele uren per maand in.";
    if (vrijeWekenN === null || vrijeWekenN < 0 || vrijeWekenN > 51) e.vrijeWeken = "Vul een aantal weken in tussen 0 en 51.";
    if (bufferN === null || bufferN < 0) e.buffer = "Vul een geldig percentage in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(
      berekenUurtarief({
        gewenstNettoPerMaand: nettoN!,
        kostenPerMaand: kostenN,
        belastingReservePct: belastingN!,
        declarabeleUrenPerMaand: urenN!,
        vrijeWekenPerJaar: vrijeWekenN!,
        bufferPct: bufferN!,
      })
    );
  }

  function reset() {
    setNetto(""); setKosten(""); setBelasting("35"); setUren(""); setVrijeWeken(""); setBuffer("");
    setErrors({}); setResultaat(null);
  }

  const ok = resultaat && !("fout" in resultaat) ? resultaat : null;
  const copyText = ok
    ? `Uurtarief excl. btw: ${formatEUR(ok.uurtariefExcl)}\nUurtarief incl. 21% btw: ${formatEUR(ok.uurtariefIncl21)}\nOmzetdoel per maand: ${formatEUR(ok.omzetDoelPerMaand)}\nOmzetdoel per jaar: ${formatEUR(ok.omzetDoelPerJaar)}`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="netto" label="Gewenst netto inkomen per maand" value={netto} onChange={setNetto} placeholder="Bijv. 3500" suffix="€" error={errors.netto} />
        <InputField id="kosten" label="Zakelijke kosten per maand" value={kosten} onChange={setKosten} placeholder="Bijv. 500" suffix="€" error={errors.kosten} />
        <InputField id="belasting" label="Belastingreserve" value={belasting} onChange={setBelasting} placeholder="Bijv. 35" suffix="%" error={errors.belasting} />
        <InputField id="uren" label="Declarabele uren per maand" value={uren} onChange={setUren} placeholder="Bijv. 100" suffix="uur" error={errors.uren} />
        <InputField id="vrijeweken" label="Vrije of lege weken per jaar" value={vrijeWeken} onChange={setVrijeWeken} placeholder="Bijv. 6" suffix="wk" optional error={errors.vrijeWeken} />
        <InputField id="buffer" label="Extra buffer" value={buffer} onChange={setBuffer} placeholder="Bijv. 10" suffix="%" optional error={errors.buffer} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken uurtarief</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {ok && <CopyButton text={copyText} />}
      </div>

      {resultaat && "fout" in resultaat && (
        <p className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-700">{resultaat.fout}</p>
      )}

      {ok && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultCard label="Richtprijs per uur (excl. btw)" value={formatEUR(ok.uurtariefExcl)} highlight sub={`Op basis van ${ok.effectieveUrenPerMaand.toLocaleString("nl-NL", { maximumFractionDigits: 1 })} effectieve uren per maand`} />
            <ResultCard label="Per uur incl. 21% btw" value={formatEUR(ok.uurtariefIncl21)} />
            <ResultCard label="Omzetdoel per maand" value={formatEUR(ok.omzetDoelPerMaand)} />
            <ResultCard label="Omzetdoel per jaar" value={formatEUR(ok.omzetDoelPerJaar)} />
          </div>
          <p className="mt-3 text-sm text-slate-600">
            Dit is een praktische schatting op basis van je invoer, geen financieel advies. Rond je tarief af naar een bedrag dat past bij je markt en ervaring.
          </p>
        </div>
      )}
    </div>
  );
}
