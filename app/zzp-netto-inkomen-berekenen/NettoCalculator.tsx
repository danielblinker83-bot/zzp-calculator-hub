"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import ResultCard from "@/components/ResultCard";
import CopyButton from "@/components/CopyButton";
import { parseNumber, formatEUR } from "@/lib/format";
import { berekenNetto, NettoResultaat } from "@/lib/calc/netto";

export default function NettoCalculator() {
  const [omzet, setOmzet] = useState("");
  const [kosten, setKosten] = useState("");
  const [belasting, setBelasting] = useState("35");
  const [verzekering, setVerzekering] = useState("");
  const [buffer, setBuffer] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resultaat, setResultaat] = useState<NettoResultaat | null>(null);

  function bereken() {
    const e: Record<string, string> = {};
    const omzetN = parseNumber(omzet);
    const kostenN = kosten.trim() === "" ? 0 : parseNumber(kosten);
    const belastingN = parseNumber(belasting);
    const verzekeringN = verzekering.trim() === "" ? 0 : parseNumber(verzekering);
    const bufferN = buffer.trim() === "" ? 0 : parseNumber(buffer);

    if (omzetN === null || omzetN < 0) e.omzet = "Vul je maandomzet exclusief btw in.";
    if (kostenN === null || kostenN < 0) e.kosten = "Vul een geldig bedrag in.";
    if (belastingN === null || belastingN < 0 || belastingN > 100) e.belasting = "Vul een percentage in tussen 0 en 100.";
    if (verzekeringN === null || verzekeringN < 0) e.verzekering = "Vul een geldig bedrag in.";
    if (bufferN === null || bufferN < 0) e.buffer = "Vul een geldig percentage in.";

    setErrors(e);
    if (Object.keys(e).length > 0) { setResultaat(null); return; }

    setResultaat(
      berekenNetto({
        omzetPerMaandExcl: omzetN!,
        kostenPerMaand: kostenN!,
        belastingReservePct: belastingN!,
        verzekeringPensioenPerMaand: verzekeringN!,
        bufferPct: bufferN!,
      })
    );
  }

  function reset() {
    setOmzet(""); setKosten(""); setBelasting("35"); setVerzekering(""); setBuffer("");
    setErrors({}); setResultaat(null);
  }

  const copyText = resultaat
    ? `Winst voor belasting: ${formatEUR(resultaat.winstVoorBelasting)}\nBelastingreserve: ${formatEUR(resultaat.belastingReserve)}\nNetto indicatie: ${formatEUR(resultaat.nettoIndicatie)}\nApart zetten: ${formatEUR(resultaat.totaalApartZetten)}`
    : "";

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField id="omzet" label="Omzet per maand (excl. btw)" value={omzet} onChange={setOmzet} placeholder="Bijv. 6000" suffix="€" error={errors.omzet} />
        <InputField id="kosten" label="Zakelijke kosten per maand" value={kosten} onChange={setKosten} placeholder="Bijv. 800" suffix="€" error={errors.kosten} />
        <InputField id="belasting" label="Belastingreserve" value={belasting} onChange={setBelasting} placeholder="Bijv. 35" suffix="%" error={errors.belasting} />
        <InputField id="verzekering" label="Verzekering of pensioen per maand" value={verzekering} onChange={setVerzekering} placeholder="Bijv. 250" suffix="€" optional error={errors.verzekering} />
        <InputField id="buffer" label="Buffer" value={buffer} onChange={setBuffer} placeholder="Bijv. 5" suffix="%" optional error={errors.buffer} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={bereken} className="btn-primary">Bereken netto inkomen</button>
        <button type="button" onClick={reset} className="btn-secondary">Opnieuw beginnen</button>
        {resultaat && <CopyButton text={copyText} />}
      </div>

      {resultaat && (
        <div className="mt-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <ResultCard label="Winst voor belasting" value={formatEUR(resultaat.winstVoorBelasting)} />
            <ResultCard label="Belastingreserve" value={formatEUR(resultaat.belastingReserve)} />
            <ResultCard label="Netto inkomen (indicatie)" value={formatEUR(resultaat.nettoIndicatie)} highlight />
            <ResultCard label="Aanbevolen apart te zetten" value={formatEUR(resultaat.totaalApartZetten)} sub="Belastingreserve plus buffer" />
          </div>
          {resultaat.winstVoorBelasting < 0 && (
            <p className="mt-3 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              Je kosten zijn hoger dan je omzet. Controleer je invoer of kijk kritisch naar je kosten.
            </p>
          )}
          <p className="mt-3 text-sm text-slate-600">Dit is een indicatie op basis van je invoer. Je werkelijke belastingdruk hangt af van je jaarwinst en aftrekposten.</p>
        </div>
      )}
    </div>
  );
}
