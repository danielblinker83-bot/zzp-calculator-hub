import { berekenBtw } from "../lib/calc/btw";
import { berekenHeffing2026 } from "../lib/calc/belasting2026";
import { berekenUurtarief } from "../lib/calc/uurtarief";
import { berekenNetto } from "../lib/calc/netto";
import { berekenBelastingReserve } from "../lib/calc/belasting";
import { berekenKilometervergoeding } from "../lib/calc/kilometer";
import { berekenMarge } from "../lib/calc/marge";
import { berekenOfferte } from "../lib/calc/offerte";
import { parseNumber, formatEUR } from "../lib/format";
import { maakBetalingsherinnering } from "../lib/gen/herinnering";
import { maakPrijsverhogingMail } from "../lib/gen/prijsverhoging";
import { maakFactuurteksten } from "../lib/gen/factuurtekst";

let fails = 0;
function check(name: string, cond: boolean, info?: unknown) {
  if (!cond) { fails++; console.log("FAIL:", name, info ?? ""); }
  else console.log("ok:", name);
}
const approx = (a: number, b: number) => Math.abs(a - b) < 0.005;

// parseNumber
check("parse 1.250,50", parseNumber("1.250,50") === 1250.5);
check("parse 1250.50", parseNumber("1250.50") === 1250.5);
check("parse 0,23", parseNumber("0,23") === 0.23);
check("parse leeg", parseNumber("") === null);
check("parse abc", parseNumber("abc") === null);

// btw
const b1 = berekenBtw(100, 21, "excl-naar-incl");
check("btw excl->incl", approx(b1.inclusief, 121) && approx(b1.btwBedrag, 21));
const b2 = berekenBtw(121, 21, "incl-naar-excl");
check("btw incl->excl", approx(b2.exclusief, 100) && approx(b2.btwBedrag, 21));
const b3 = berekenBtw(100, 0, "excl-naar-incl");
check("btw 0%", approx(b3.inclusief, 100) && approx(b3.btwBedrag, 0));

// heffing 2026: handmatig nagerekend met de tabellen van de Belastingdienst
// (zie commentaar in lib/calc/belasting2026.ts)
const approxEuro = (a: number, b: number) => Math.abs(a - b) < 0.5;
const h1 = berekenHeffing2026(60000, { urencriterium: true });
check("heffing2026 winst 60k", approxEuro(h1.belastbareWinst, 51332.4) && approxEuro(h1.ibVoorKortingen, 18576.67) && approxEuro(h1.algemeneHeffingskorting, 1733.26) && approxEuro(h1.arbeidskorting, 5311.3) && approxEuro(h1.zvwBijdrage, 2489.62) && approxEuro(h1.totaleHeffing, 14021.73), h1);
const h2 = berekenHeffing2026(30000, { urencriterium: true });
check("heffing2026 winst 30k", approxEuro(h2.belastbareWinst, 25142.4) && approxEuro(h2.algemeneHeffingskorting, 3115) && approxEuro(h2.arbeidskorting, 5082.18) && approxEuro(h2.totaleHeffing, 2010.63), h2);
const h3 = berekenHeffing2026(0, { urencriterium: true });
check("heffing2026 winst 0", h3.totaleHeffing === 0 && h3.nettoPerJaar === 0);
// zonder urencriterium geen zelfstandigenaftrek -> hogere heffing
const h4 = berekenHeffing2026(60000, { urencriterium: false });
check("heffing2026 zonder urencriterium", h4.zelfstandigenaftrek === 0 && h4.totaleHeffing > h1.totaleHeffing);

// uurtarief: netto 3500 p/m, kosten 500, 100 uur, urencriterium.
// Consistentie: de gevonden winst moet via de heffing precies netto 42.000 p/j opleveren.
const u1 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, declarabeleUrenPerMaand: 100, urencriterium: true });
const u1winst = !("fout" in u1) ? u1.omzetDoelPerJaar - 500 * 12 : 0;
const u1netto = u1winst - berekenHeffing2026(u1winst, { urencriterium: true }).totaleHeffing;
check("uurtarief consistent met heffing", !("fout" in u1) && Math.abs(u1netto - 42000) < 1, { u1winst, u1netto });
// met 26 vrije weken halveren effectieve uren -> tarief verdubbelt, omzetdoel gelijk
const u2 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, declarabeleUrenPerMaand: 100, urencriterium: true, vrijeWekenPerJaar: 26 });
check("uurtarief vrije weken", !("fout" in u1) && !("fout" in u2) && approx(u2.uurtariefExcl, u1.uurtariefExcl * 2) && approx(u2.omzetDoelPerJaar, u1.omzetDoelPerJaar), u2);
// buffer 10% -> omzetdoel en tarief 10% hoger
const u3 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, declarabeleUrenPerMaand: 100, urencriterium: true, bufferPct: 10 });
check("uurtarief buffer", !("fout" in u1) && !("fout" in u3) && approx(u3.uurtariefExcl, u1.uurtariefExcl * 1.1), u3);
// startersaftrek verlaagt de heffing -> lager tarief nodig
const u4 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, declarabeleUrenPerMaand: 100, urencriterium: true, startersaftrek: true });
check("uurtarief startersaftrek", !("fout" in u1) && !("fout" in u4) && u4.uurtariefExcl < u1.uurtariefExcl);

// netto: omzet 6000, kosten 800 -> winst 5200 p/m (62.400 p/j), urencriterium.
// Handmatig (zie lib/calc/netto.ts): heffing 15.180,75 p/j = 1.265,06 p/m; netto 3.934,94.
const n1 = berekenNetto({ omzetPerMaandExcl: 6000, kostenPerMaand: 800, urencriterium: true });
check("netto basis", approx(n1.winstVoorBelasting, 5200) && Math.abs(n1.heffingPerMaand - 1265.06) < 0.5 && Math.abs(n1.nettoIndicatie - 3934.94) < 0.5, n1);
// negatieve winst: geen heffing
const n2 = berekenNetto({ omzetPerMaandExcl: 1000, kostenPerMaand: 1500, urencriterium: true });
check("netto verlies", n2.heffingPerMaand === 0 && approx(n2.winstVoorBelasting, -500) && approx(n2.nettoIndicatie, -500));

// belasting: winst 4500 p/m (54.000 p/j), urencriterium. Handmatig: heffing 11.124,17 p/j
// = 927,01 p/m; kwartaal 2.781,04; met btw 2.100 -> totaal dit kwartaal 4.881,04.
const be1 = berekenBelastingReserve({ winstPerMaand: 4500, urencriterium: true, btwDitKwartaal: 2100 });
check("belastingreserve", Math.abs(be1.perMaand - 927.01) < 0.5 && Math.abs(be1.perKwartaal - 2781.04) < 1 && Math.abs(be1.perJaar - 11124.17) < 1 && Math.abs(be1.totaalDitKwartaal - 4881.04) < 1, be1);
// 10% marge -> per jaar 10% hoger
const be2 = berekenBelastingReserve({ winstPerMaand: 4500, urencriterium: true, margePct: 10 });
check("belastingreserve marge", Math.abs(be2.perJaar - be1.perJaar * 1.1) < 0.01);

// kilometer: 45 km * 0.25 (tarief 2026) = 11.25; 8 ritten -> 90 p/m; 1080 p/j
const k1 = berekenKilometervergoeding({ kilometersPerRit: 45, vergoedingPerKm: 0.25, rittenPerMaand: 8 });
check("kilometer", approx(k1.perRit, 11.25) && k1.perMaand !== null && approx(k1.perMaand, 90) && approx(k1.perJaar!, 1080));
const k2 = berekenKilometervergoeding({ kilometersPerRit: 45, vergoedingPerKm: 0.25 });
check("kilometer zonder ritten", approx(k2.perRit, 11.25) && k2.perMaand === null);

// marge: inkoop 60, verkoop 100 -> winst 40, marge 40%, opslag 66.67%
const m1 = berekenMarge({ inkoop: 60, verkoop: 100 });
check("marge", approx(m1.winst, 40) && approx(m1.margePct!, 40) && approx(m1.opslagPct!, 66.6667));
const m2 = berekenMarge({ inkoop: 60, verkoop: 100, extraKosten: 5 });
check("marge extra kosten", approx(m2.winst, 35) && approx(m2.margePct!, 35));

// offerte: 24u * 75 = 1800 + 350 + 50 = 2200; 10% korting -> 1980; btw 21% = 415.80; totaal 2395.80
const o1 = berekenOfferte({ uren: 24, uurtarief: 75, materiaal: 350, extraKosten: 50, btwPct: 21, kortingPct: 10 });
check("offerte", approx(o1.subtotaalExcl, 1980) && approx(o1.btwBedrag, 415.8) && approx(o1.totaalIncl, 2395.8), o1);

// formatEUR
check("formatEUR", formatEUR(1250.5).includes("1.250,50"));

// generators produceren tekst met kernvelden
const h = maakBetalingsherinnering({ klantnaam: "Jansen BV", factuurnummer: "2026-014", bedrag: 1250, vervaldatum: "1 juli 2026", toon: "zakelijk" });
check("herinnering", h.tekst.includes("Jansen BV") && h.tekst.includes("2026-014") && h.tekst.includes("1 juli 2026") && h.tekst.includes("1.250,00"));
const p = maakPrijsverhogingMail({ bedrijfsnaam: "Studio X", huidigePrijs: 75, nieuwePrijs: 85, ingangsdatum: "1 september 2026", toon: "kort" });
check("prijsverhoging", p.tekst.includes("Studio X") && p.tekst.includes("75,00") && p.tekst.includes("85,00"));
const f = maakFactuurteksten({ dienst: "webdesign", periode: "juni 2026", klantType: "bedrijf", toon: "uitgebreid" });
check("factuurtekst", f.length === 3 && f.every((t) => t.includes("webdesign") && t.includes("juni 2026")));

console.log(fails === 0 ? "\nALLE TESTS GESLAAGD" : `\n${fails} TESTS GEFAALD`);
process.exit(fails === 0 ? 0 : 1);
