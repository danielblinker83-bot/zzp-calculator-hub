export const SITE = {
  name: "ZZP Calculator Hub",
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

export function relatedTools(slug: string, count = 4) {
  return TOOLS.filter((t) => t.slug !== slug).slice(0, count);
}
