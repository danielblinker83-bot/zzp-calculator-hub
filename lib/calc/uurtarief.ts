import { berekenHeffing2026 } from "./belasting2026";

export interface UurtariefInput {
  gewenstNettoPerMaand: number;
  kostenPerMaand: number;
  declarabeleUrenPerMaand: number;
  urencriterium: boolean;
  startersaftrek?: boolean;
  vrijeWekenPerJaar?: number; // optioneel
  bufferPct?: number; // optioneel
}

export interface UurtariefResultaat {
  uurtariefExcl: number;
  uurtariefIncl21: number;
  omzetDoelPerMaand: number;
  omzetDoelPerJaar: number;
  effectieveUrenPerMaand: number;
  geschatteHeffingPerJaar: number;
  effectieveDruk: number;
}

/**
 * Redenering:
 * Netto per jaar = winst - heffing 2026 (IB + Zvw, met zelfstandigenaftrek,
 * mkb-winstvrijstelling en heffingskortingen). De heffing hangt niet-lineair
 * van de winst af, dus we zoeken de benodigde winst met binair zoeken:
 * netto(winst) stijgt monotoon met de winst, waardoor er precies een oplossing is.
 * Omzetdoel = benodigde winst + kosten, plus een optionele buffer.
 * Vrije weken verlagen het aantal effectieve declarabele uren per maand.
 * De buffer is bewust omzet bovenop het doel; de heffing daarover rekenen we
 * niet mee, omdat de buffer juist bedoeld is als marge voor tegenvallers.
 */
export function berekenUurtarief(input: UurtariefInput): UurtariefResultaat | { fout: string } {
  const buffer = Math.max(input.bufferPct ?? 0, 0) / 100;
  const vrijeWeken = Math.min(Math.max(input.vrijeWekenPerJaar ?? 0, 0), 51);

  const werkbareFractie = (52 - vrijeWeken) / 52;
  const effectieveUrenPerMaand = input.declarabeleUrenPerMaand * werkbareFractie;
  if (effectieveUrenPerMaand <= 0) {
    return { fout: "Het aantal declarabele uren komt op nul uit. Controleer je uren en vrije weken." };
  }

  const nettoDoelJaar = input.gewenstNettoPerMaand * 12;
  const opties = { urencriterium: input.urencriterium, startersaftrek: input.startersaftrek };

  // Binair zoeken naar de winst waarbij netto het doel bereikt.
  // Bovengrens ruim: bij 49,5% marginaal tarief is 3x het doel altijd genoeg.
  let laag = 0;
  let hoog = Math.max(nettoDoelJaar * 3, 10_000);
  for (let i = 0; i < 60; i++) {
    const midden = (laag + hoog) / 2;
    const netto = midden - berekenHeffing2026(midden, opties).totaleHeffing;
    if (netto < nettoDoelJaar) laag = midden;
    else hoog = midden;
  }
  const winstNodigJaar = hoog;
  const heffing = berekenHeffing2026(winstNodigJaar, opties);

  const kostenJaar = input.kostenPerMaand * 12;
  const omzetDoelPerJaar = (winstNodigJaar + kostenJaar) * (1 + buffer);
  const omzetDoelPerMaand = omzetDoelPerJaar / 12;

  const uurtariefExcl = omzetDoelPerMaand / effectieveUrenPerMaand;
  return {
    uurtariefExcl,
    uurtariefIncl21: uurtariefExcl * 1.21,
    omzetDoelPerMaand,
    omzetDoelPerJaar,
    effectieveUrenPerMaand,
    geschatteHeffingPerJaar: heffing.totaleHeffing,
    effectieveDruk: heffing.effectieveDruk,
  };
}

// Controle met testgetallen:
//
// 1) Netto 3.500 p/m (42.000 p/j), kosten 500 p/m, 100 uur p/m, urencriterium,
//    0 vrije weken, 0 buffer. Handmatig: bij winst 54.000 is netto 42.875,83
//    (zie belasting2026.ts), dus de gezochte winst ligt iets onder 54.000.
//    De test in scripts/test.ts controleert de consistentie: de gevonden winst
//    teruggerekend door berekenHeffing2026 levert netto = 42.000 (binnen 1 euro).
//
// 2) Zelfde invoer met 26 vrije weken: effectieve uren halveren (100 -> 50),
//    dus het uurtarief verdubbelt exact; het omzetdoel blijft gelijk.
