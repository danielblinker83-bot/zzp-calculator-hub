export const SITE = {
  name: "BerekenZZP.nl",
  url: "https://www.berekenzzp.nl",
  description:
    "Gratis rekentools voor zzp'ers: btw, uurtarief, netto inkomen en belasting berekenen met de echte tarieven van 2026.",
  email: "info@berekenzzp.nl",
};

export type Tool = {
  slug: string;
  title: string;
  short: string;
  category: "Berekenen" | "Genereren";
};

export const TOOLS: Tool[] = [
  { slug: "btw-berekenen", title: "Btw berekenen", short: "Reken snel 21%, 9% of 0% btw uit, van en naar inclusief.", category: "Berekenen" },
  { slug: "uurtarief-berekenen", title: "Uurtarief berekenen", short: "Bepaal je minimale uurtarief met de echte belastingtarieven van 2026.", category: "Berekenen" },
  { slug: "zzp-netto-inkomen-berekenen", title: "Netto inkomen berekenen", short: "Van bruto naar netto: zie wat je overhoudt met de tarieven van 2026.", category: "Berekenen" },
  { slug: "loondienst-naar-zzp", title: "Loondienst naar zzp", short: "Welk uurtarief en welke winst evenaren je huidige salaris?", category: "Berekenen" },
  { slug: "belasting-reserveren-zzp", title: "Belasting reserveren", short: "Bereken je werkelijke heffing 2026 en wat je per maand apart zet.", category: "Berekenen" },
  { slug: "kilometervergoeding-berekenen", title: "Kilometervergoeding", short: "Bereken je vergoeding met het 2026-tarief van € 0,25 per kilometer.", category: "Berekenen" },
  { slug: "marge-berekenen", title: "Marge berekenen", short: "Bereken je winst, marge en opslag op inkoop en verkoop.", category: "Berekenen" },
  { slug: "offerte-calculator", title: "Offerte calculator", short: "Reken uren, materiaal en btw om naar een duidelijke offerte.", category: "Berekenen" },
  { slug: "betalingsherinnering-maken", title: "Betalingsherinnering maken", short: "Genereer een nette Nederlandse betalingsherinnering.", category: "Genereren" },
  { slug: "factuurtekst-maken", title: "Factuurtekst maken", short: "Maak korte, professionele omschrijvingen voor je factuur.", category: "Genereren" },
  { slug: "prijsverhoging-mail-maken", title: "Prijsverhoging mail maken", short: "Genereer een professionele mail over je nieuwe prijzen.", category: "Genereren" },
];

export function toolBySlug(slug: string) {
  return TOOLS.find((t) => t.slug === slug);
}

// Thematische verwijzingen tussen tools. Bewust zo opgesteld dat de sterkste
// pagina's (marge-berekenen, belasting-reserveren-zzp) vaker als bestemming
// terugkomen, zodat interne linkkracht daarheen stroomt.
const RELATED: Record<string, string[]> = {
  "btw-berekenen": ["offerte-calculator", "factuurtekst-maken", "marge-berekenen", "zzp-netto-inkomen-berekenen"],
  "uurtarief-berekenen": ["loondienst-naar-zzp", "zzp-netto-inkomen-berekenen", "belasting-reserveren-zzp", "marge-berekenen"],
  "zzp-netto-inkomen-berekenen": ["uurtarief-berekenen", "loondienst-naar-zzp", "belasting-reserveren-zzp", "btw-berekenen"],
  "loondienst-naar-zzp": ["uurtarief-berekenen", "zzp-netto-inkomen-berekenen", "belasting-reserveren-zzp", "marge-berekenen"],
  "belasting-reserveren-zzp": ["zzp-netto-inkomen-berekenen", "uurtarief-berekenen", "btw-berekenen", "marge-berekenen"],
  "kilometervergoeding-berekenen": ["offerte-calculator", "zzp-netto-inkomen-berekenen", "belasting-reserveren-zzp", "factuurtekst-maken"],
  "marge-berekenen": ["offerte-calculator", "btw-berekenen", "zzp-netto-inkomen-berekenen", "uurtarief-berekenen"],
  "offerte-calculator": ["uurtarief-berekenen", "btw-berekenen", "marge-berekenen", "factuurtekst-maken"],
  "betalingsherinnering-maken": ["factuurtekst-maken", "offerte-calculator", "btw-berekenen", "belasting-reserveren-zzp"],
  "factuurtekst-maken": ["btw-berekenen", "offerte-calculator", "betalingsherinnering-maken", "marge-berekenen"],
  "prijsverhoging-mail-maken": ["uurtarief-berekenen", "zzp-netto-inkomen-berekenen", "offerte-calculator", "marge-berekenen"],
};

export function relatedTools(slug: string, count = 4) {
  const gekozen = (RELATED[slug] ?? [])
    .map((s) => toolBySlug(s))
    .filter((t): t is Tool => Boolean(t));
  // Vul aan met overige tools als de kaart voor een slug ontbreekt of te kort is.
  if (gekozen.length < count) {
    for (const t of TOOLS) {
      if (t.slug !== slug && !gekozen.some((g) => g.slug === t.slug)) gekozen.push(t);
      if (gekozen.length >= count) break;
    }
  }
  return gekozen.slice(0, count);
}
