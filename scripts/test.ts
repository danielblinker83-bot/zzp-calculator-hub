import { berekenBtw } from "../lib/calc/btw";
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

// uurtarief: netto 3500, kosten 500, 30% belasting, 100 uur, 0 vrije weken, 0 buffer
// winst nodig = 3500/0.7 = 5000; omzet = 5500; tarief = 55
const u1 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, belastingReservePct: 30, declarabeleUrenPerMaand: 100 });
check("uurtarief basis", !("fout" in u1) && approx(u1.uurtariefExcl, 55), u1);
// met 26 vrije weken halveren effectieve uren -> tarief verdubbelt
const u2 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, belastingReservePct: 30, declarabeleUrenPerMaand: 100, vrijeWekenPerJaar: 26 });
check("uurtarief vrije weken", !("fout" in u2) && approx(u2.uurtariefExcl, 110), u2);
// buffer 10%
const u3 = berekenUurtarief({ gewenstNettoPerMaand: 3500, kostenPerMaand: 500, belastingReservePct: 30, declarabeleUrenPerMaand: 100, bufferPct: 10 });
check("uurtarief buffer", !("fout" in u3) && approx(u3.uurtariefExcl, 60.5), u3);

// netto: omzet 6000, kosten 800 -> winst 5200; 35% -> 1820; netto 3380
const n1 = berekenNetto({ omzetPerMaandExcl: 6000, kostenPerMaand: 800, belastingReservePct: 35 });
check("netto basis", approx(n1.winstVoorBelasting, 5200) && approx(n1.belastingReserve, 1820) && approx(n1.nettoIndicatie, 3380));
// negatieve winst: geen negatieve belastingreserve
const n2 = berekenNetto({ omzetPerMaandExcl: 1000, kostenPerMaand: 1500, belastingReservePct: 35 });
check("netto verlies", n2.belastingReserve === 0 && approx(n2.winstVoorBelasting, -500) && approx(n2.nettoIndicatie, -500));

// belasting: winst 4500, 35% -> 1575 p/m, 4725 kw, 18900 jr; btw 2100 -> kwartaal totaal 6825
const be1 = berekenBelastingReserve({ winstPerMaand: 4500, reservePct: 35, btwDitKwartaal: 2100 });
check("belastingreserve", approx(be1.perMaand, 1575) && approx(be1.perKwartaal, 4725) && approx(be1.perJaar, 18900) && approx(be1.totaalDitKwartaal, 6825));

// kilometer: 45 km * 0.23 = 10.35; 8 ritten -> 82.80 p/m; 993.60 p/j
const k1 = berekenKilometervergoeding({ kilometersPerRit: 45, vergoedingPerKm: 0.23, rittenPerMaand: 8 });
check("kilometer", approx(k1.perRit, 10.35) && k1.perMaand !== null && approx(k1.perMaand, 82.8) && approx(k1.perJaar!, 993.6));
const k2 = berekenKilometervergoeding({ kilometersPerRit: 45, vergoedingPerKm: 0.23 });
check("kilometer zonder ritten", approx(k2.perRit, 10.35) && k2.perMaand === null);

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
