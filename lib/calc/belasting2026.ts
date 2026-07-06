/**
 * Belastingberekening voor IB-ondernemers (eenmanszaak/zzp), belastingjaar 2026.
 *
 * Alle cijfers geverifieerd op 6 juli 2026 tegen de Belastingdienst:
 * - Box 1 tarieven: 35,75% t/m 38.883; 37,56% t/m 78.426; 49,50% daarboven.
 *   https://www.belastingdienst.nl/.../boxen_en_tarieven/box_1/box_1
 * - Zelfstandigenaftrek 2026: 1.200 (2025: 2.470), urencriterium 1.225 uur.
 *   https://www.belastingdienst.nl/.../ondernemersaftrek-2026/zelfstandigenaftrek-2026
 * - Startersaftrek 2026: 2.123.
 *   https://www.belastingdienst.nl/.../ondernemersaftrek/startersaftrek
 * - Mkb-winstvrijstelling 2026: 12,7% van de winst na ondernemersaftrek.
 *   https://www.belastingdienst.nl/.../mkb-winstvrijstelling-2026
 * - Algemene heffingskorting 2026: max 3.115; afbouw 6,398% vanaf 29.736, nihil bij 78.426.
 *   https://www.belastingdienst.nl/.../tabel-algemene-heffingskorting-2026
 * - Arbeidskorting 2026: knikpunten 11.965 / 25.845 / 45.592, max 5.685,
 *   afbouw 6,510% tot nihil bij 132.920.
 *   https://www.belastingdienst.nl/.../tabel-arbeidskorting-2026
 * - Zvw-bijdrage ondernemers 2026: 4,85% (2025: 5,26%), maximum bijdrage-inkomen 79.409.
 *   https://www.belastingdienst.nl/.../percentages-zvw
 *
 * Aannames van dit model (bewust eenvoudig gehouden, uitkomst is een indicatie):
 * - De ondernemer is jonger dan de AOW-leeftijd.
 * - De winst uit onderneming is het enige inkomen (geen loondienst ernaast).
 * - Geen fiscale partner, geen andere aftrekposten (hypotheekrente, FOR, lijfrente).
 * - Heffingskortingen verlagen alleen de inkomstenbelasting, niet de Zvw-bijdrage,
 *   en kunnen de belasting niet onder nul brengen.
 */

export const CIJFERS_2026 = {
  schijf1Grens: 38_883,
  schijf1Tarief: 0.3575,
  schijf2Grens: 78_426,
  schijf2Tarief: 0.3756,
  schijf3Tarief: 0.495,

  zelfstandigenaftrek: 1_200,
  startersaftrek: 2_123,
  mkbWinstvrijstelling: 0.127,

  ahkMax: 3_115,
  ahkAfbouwStart: 29_736,
  ahkAfbouwPct: 0.06398,

  akKnik1: 11_965,
  akKnik1Bedrag: 996,
  akOpbouw1Pct: 0.08324,
  akKnik2: 25_845,
  akKnik2Bedrag: 5_300,
  akOpbouw2Pct: 0.31009,
  akOpbouw3Pct: 0.0195,
  akKnik3: 45_592,
  akMax: 5_685,
  akAfbouwPct: 0.0651,
  akNihilVanaf: 132_920,

  zvwPct: 0.0485,
  zvwMaxInkomen: 79_409,
} as const;

export interface Heffing2026Opties {
  urencriterium: boolean;
  startersaftrek?: boolean;
}

export interface Heffing2026Resultaat {
  winstPerJaar: number;
  zelfstandigenaftrek: number;
  startersaftrek: number;
  mkbVrijstelling: number;
  belastbareWinst: number;
  ibVoorKortingen: number;
  algemeneHeffingskorting: number;
  arbeidskorting: number;
  inkomstenbelasting: number;
  zvwBijdrage: number;
  totaleHeffing: number;
  nettoPerJaar: number;
  /** totale heffing als fractie van de winst, 0 bij winst <= 0 */
  effectieveDruk: number;
}

function ibOverBelastbareWinst(belastbaar: number): number {
  const c = CIJFERS_2026;
  if (belastbaar <= 0) return 0;
  if (belastbaar <= c.schijf1Grens) return belastbaar * c.schijf1Tarief;
  if (belastbaar <= c.schijf2Grens) {
    return c.schijf1Grens * c.schijf1Tarief + (belastbaar - c.schijf1Grens) * c.schijf2Tarief;
  }
  return (
    c.schijf1Grens * c.schijf1Tarief +
    (c.schijf2Grens - c.schijf1Grens) * c.schijf2Tarief +
    (belastbaar - c.schijf2Grens) * c.schijf3Tarief
  );
}

function algemeneHeffingskorting(verzamelinkomen: number): number {
  const c = CIJFERS_2026;
  if (verzamelinkomen <= c.ahkAfbouwStart) return c.ahkMax;
  const korting = c.ahkMax - c.ahkAfbouwPct * (verzamelinkomen - c.ahkAfbouwStart);
  return Math.max(0, korting);
}

function arbeidskorting(arbeidsinkomen: number): number {
  const c = CIJFERS_2026;
  if (arbeidsinkomen <= 0) return 0;
  if (arbeidsinkomen <= c.akKnik1) return c.akOpbouw1Pct * arbeidsinkomen;
  if (arbeidsinkomen <= c.akKnik2) return c.akKnik1Bedrag + c.akOpbouw2Pct * (arbeidsinkomen - c.akKnik1);
  if (arbeidsinkomen <= c.akKnik3) return c.akKnik2Bedrag + c.akOpbouw3Pct * (arbeidsinkomen - c.akKnik2);
  const korting = c.akMax - c.akAfbouwPct * (arbeidsinkomen - c.akKnik3);
  return Math.max(0, korting);
}

export function berekenHeffing2026(winstPerJaar: number, opties: Heffing2026Opties): Heffing2026Resultaat {
  const c = CIJFERS_2026;
  const winst = Math.max(0, winstPerJaar);

  // Ondernemersaftrek kan de winst niet negatief maken.
  let restWinst = winst;
  const zka = opties.urencriterium ? Math.min(c.zelfstandigenaftrek, restWinst) : 0;
  restWinst -= zka;
  const sa = opties.urencriterium && opties.startersaftrek ? Math.min(c.startersaftrek, restWinst) : 0;
  restWinst -= sa;

  const mkb = restWinst * c.mkbWinstvrijstelling;
  const belastbareWinst = restWinst - mkb;

  const ibVoor = ibOverBelastbareWinst(belastbareWinst);
  const ahk = belastbareWinst > 0 ? algemeneHeffingskorting(belastbareWinst) : 0;
  const ak = arbeidskorting(belastbareWinst);
  const ib = Math.max(0, ibVoor - ahk - ak);

  const zvw = Math.min(belastbareWinst, c.zvwMaxInkomen) * c.zvwPct;
  const totaal = ib + Math.max(0, zvw);

  return {
    winstPerJaar: winst,
    zelfstandigenaftrek: zka,
    startersaftrek: sa,
    mkbVrijstelling: mkb,
    belastbareWinst,
    ibVoorKortingen: ibVoor,
    algemeneHeffingskorting: ahk,
    arbeidskorting: ak,
    inkomstenbelasting: ib,
    zvwBijdrage: Math.max(0, zvw),
    totaleHeffing: totaal,
    nettoPerJaar: winst - totaal,
    effectieveDruk: winst > 0 ? totaal / winst : 0,
  };
}

// Controle met testgetallen (handmatig nagerekend met de tabellen hierboven):
//
// 1) Winst 60.000, urencriterium, geen startersaftrek:
//    ZKA 1.200 -> 58.800; mkb 12,7% = 7.467,60 -> belastbaar 51.332,40.
//    IB: 38.883 x 35,75% = 13.900,67 + 12.449,40 x 37,56% = 4.675,99 -> 18.576,67.
//    AHK: 3.115 - 6,398% x 21.596,40 = 1.733,26.
//    AK (afbouw): 5.685 - 6,51% x 5.740,40 = 5.311,30.
//    IB na kortingen: 11.532,10. Zvw: 4,85% x 51.332,40 = 2.489,62.
//    Totale heffing 14.021,73; netto 45.978,27; druk ~23,4%.
//
// 2) Winst 30.000, urencriterium, geen startersaftrek:
//    ZKA 1.200 -> 28.800; mkb 3.657,60 -> belastbaar 25.142,40.
//    IB: 25.142,40 x 35,75% = 8.988,41. AHK: 3.115 (onder afbouwgrens).
//    AK (schijf 2): 996 + 31,009% x 13.177,40 = 5.082,18.
//    IB na kortingen: 791,23. Zvw: 1.219,41. Totaal 2.010,63; netto 27.989,37; druk ~6,7%.
