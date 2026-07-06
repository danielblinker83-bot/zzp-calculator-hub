export interface UurtariefInput {
  gewenstNettoPerMaand: number;
  kostenPerMaand: number;
  belastingReservePct: number; // 0-100
  declarabeleUrenPerMaand: number;
  vrijeWekenPerJaar?: number; // optioneel
  bufferPct?: number; // optioneel
}

export interface UurtariefResultaat {
  uurtariefExcl: number;
  uurtariefIncl21: number;
  omzetDoelPerMaand: number;
  omzetDoelPerJaar: number;
  effectieveUrenPerMaand: number;
}

/**
 * Redenering:
 * netto = (omzet - kosten) * (1 - belasting%)
 * => benodigde winst = netto / (1 - belasting%)
 * => omzetdoel = winst + kosten, plus optionele buffer
 * Vrije weken verlagen het aantal effectieve declarabele uren per maand.
 */
export function berekenUurtarief(input: UurtariefInput): UurtariefResultaat | { fout: string } {
  const belasting = Math.min(Math.max(input.belastingReservePct, 0), 99) / 100;
  const buffer = Math.max(input.bufferPct ?? 0, 0) / 100;
  const vrijeWeken = Math.min(Math.max(input.vrijeWekenPerJaar ?? 0, 0), 51);

  const winstNodig = input.gewenstNettoPerMaand / (1 - belasting);
  let omzetDoelPerMaand = winstNodig + input.kostenPerMaand;
  omzetDoelPerMaand = omzetDoelPerMaand * (1 + buffer);

  const werkbareFractie = (52 - vrijeWeken) / 52;
  const effectieveUrenPerMaand = input.declarabeleUrenPerMaand * werkbareFractie;

  if (effectieveUrenPerMaand <= 0) {
    return { fout: "Het aantal declarabele uren komt op nul uit. Controleer je uren en vrije weken." };
  }

  const uurtariefExcl = omzetDoelPerMaand / effectieveUrenPerMaand;
  return {
    uurtariefExcl,
    uurtariefIncl21: uurtariefExcl * 1.21,
    omzetDoelPerMaand,
    omzetDoelPerJaar: omzetDoelPerMaand * 12,
    effectieveUrenPerMaand,
  };
}
