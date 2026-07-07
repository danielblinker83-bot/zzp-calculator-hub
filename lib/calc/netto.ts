import { berekenHeffing2026, Heffing2026Resultaat } from "./belasting2026";

export interface NettoInput {
  omzetPerMaandExcl: number;
  kostenPerMaand: number;
  urencriterium: boolean;
  startersaftrek?: boolean;
  verzekeringPensioenPerMaand?: number;
  bufferPct?: number; // percentage van de winst dat extra apart gaat
}

export interface NettoResultaat {
  winstVoorBelasting: number; // per maand
  heffingPerMaand: number; // inkomstenbelasting + Zvw, tarieven 2026
  bufferBedrag: number;
  verzekeringPensioen: number;
  nettoIndicatie: number;
  totaalApartZetten: number;
  effectieveDruk: number;
  jaar: Heffing2026Resultaat; // volledige jaarberekening voor de detailweergave
}

/**
 * Route van omzet naar netto voor een IB-ondernemer:
 * omzet - kosten = winst; over de jaarwinst berekenen we de inkomstenbelasting
 * en Zvw-bijdrage met de tarieven en kortingen van 2026 (zie belasting2026.ts).
 * De maandwinst wordt daarvoor met 12 vermenigvuldigd en de heffing weer
 * door 12 gedeeld; dat veronderstelt een gelijkmatige winst over het jaar.
 */
export function berekenNetto(input: NettoInput): NettoResultaat {
  const winstVoorBelasting = input.omzetPerMaandExcl - input.kostenPerMaand;
  const basis = Math.max(winstVoorBelasting, 0);

  const jaar = berekenHeffing2026(basis * 12, {
    urencriterium: input.urencriterium,
    startersaftrek: input.startersaftrek,
  });
  const heffingPerMaand = jaar.totaleHeffing / 12;

  const bufferBedrag = basis * (Math.max(input.bufferPct ?? 0, 0) / 100);
  const verzekeringPensioen = Math.max(input.verzekeringPensioenPerMaand ?? 0, 0);
  const nettoIndicatie = winstVoorBelasting - heffingPerMaand - bufferBedrag - verzekeringPensioen;

  return {
    winstVoorBelasting,
    heffingPerMaand,
    bufferBedrag,
    verzekeringPensioen,
    nettoIndicatie,
    totaalApartZetten: heffingPerMaand + bufferBedrag,
    effectieveDruk: jaar.effectieveDruk,
    jaar,
  };
}

// Controle met testgetallen (handmatig nagerekend, zie ook belasting2026.ts):
//
// 1) Omzet 6.000 p/m, kosten 800 p/m, urencriterium -> winst 5.200 p/m (62.400 p/j).
//    ZKA 1.200 -> 61.200; mkb 7.772,40 -> belastbaar 53.427,60.
//    IB voor kortingen: 13.900,67 + 14.544,60 x 37,56% = 19.363,62.
//    AHK: 3.115 - 6,398% x 23.691,60 = 1.599,21. AK: 5.685 - 6,51% x 7.835,60 = 5.174,90.
//    IB: 12.589,51. Zvw: 4,85% x 53.427,60 = 2.591,24. Totaal 15.180,75 p/j = 1.265,06 p/m.
//    Netto indicatie: 5.200 - 1.265,06 = 3.934,94 p/m.
//
// 2) Omzet 1.000, kosten 1.500 -> winst -500: geen heffing, netto -500.
