import { berekenHeffing2026, Heffing2026Resultaat } from "./belasting2026";

export interface BelastingInput {
  winstPerMaand: number;
  urencriterium: boolean;
  startersaftrek?: boolean;
  margePct?: number; // optionele veiligheidsmarge bovenop de berekende heffing
  btwDitKwartaal?: number;
}

export interface BelastingResultaat {
  perMaand: number;
  perKwartaal: number;
  perJaar: number;
  effectieveDruk: number;
  btwDitKwartaal: number;
  totaalDitKwartaal: number;
  jaar: Heffing2026Resultaat;
}

/**
 * Berekent hoeveel je opzij zet voor de inkomstenbelasting en Zvw-bijdrage,
 * op basis van de werkelijke heffing 2026 over je verwachte jaarwinst
 * (maandwinst x 12). Een optionele veiligheidsmarge dekt schommelingen in
 * je winst af. Btw staat hier los van: dat is geld dat je al voor de
 * Belastingdienst vasthoudt, geen reserve.
 */
export function berekenBelastingReserve(input: BelastingInput): BelastingResultaat {
  const winstJaar = Math.max(input.winstPerMaand, 0) * 12;
  const jaar = berekenHeffing2026(winstJaar, {
    urencriterium: input.urencriterium,
    startersaftrek: input.startersaftrek,
  });
  const marge = 1 + Math.max(input.margePct ?? 0, 0) / 100;

  const perJaar = jaar.totaleHeffing * marge;
  const perMaand = perJaar / 12;
  const btw = Math.max(input.btwDitKwartaal ?? 0, 0);

  return {
    perMaand,
    perKwartaal: perMaand * 3,
    perJaar,
    effectieveDruk: jaar.effectieveDruk,
    btwDitKwartaal: btw,
    totaalDitKwartaal: perMaand * 3 + btw,
    jaar,
  };
}

// Controle met testgetallen (handmatig nagerekend met de 2026-tabellen):
//
// 1) Winst 4.500 p/m (54.000 p/j), urencriterium, geen marge:
//    ZKA 1.200 -> 52.800; mkb 6.705,60 -> belastbaar 46.094,40.
//    IB voor kortingen 16.609,27; AHK 2.068,39; AK 5.652,29 -> IB 8.888,59.
//    Zvw 2.235,58. Totaal 11.124,17 p/j = 927,01 p/m; kwartaal 2.781,04.
//    Met btw 2.100 dit kwartaal: totaal dit kwartaal 4.881,04.
//
// 2) Zelfde winst met 10% marge: per jaar 12.236,59 = 1.019,72 p/m.
