// Metadata van de kennisbank-artikelen. Elk artikel heeft daarnaast een eigen
// pagina onder app/kennisbank/<slug>/page.tsx (net zoals de tools). Deze lijst
// voedt de overzichtspagina, de sitemap en de interne links.

export type Artikel = {
  slug: string;
  title: string;
  description: string;
  datum: string; // ISO, publicatiedatum
  bijgewerkt?: string; // ISO, laatst inhoudelijk bijgewerkt
  leestijd: number; // minuten
  gerelateerdeTools?: string[]; // tool-slugs
};

export const ARTIKELEN: Artikel[] = [
  {
    slug: "hoeveel-belasting-betaal-je-als-zzper-2026",
    title: "Hoeveel belasting betaal je als zzp'er in 2026?",
    description:
      "Een heldere uitleg van de inkomstenbelasting voor zzp'ers in 2026: de schijven, de zelfstandigenaftrek, de mkb-winstvrijstelling, de heffingskortingen en de Zvw-bijdrage, met rekenvoorbeelden per winstniveau.",
    datum: "2026-08-07",
    leestijd: 7,
    gerelateerdeTools: ["belasting-reserveren-zzp", "zzp-netto-inkomen-berekenen", "uurtarief-berekenen"],
  },
];

export function artikelBySlug(slug: string) {
  return ARTIKELEN.find((a) => a.slug === slug);
}

export function recenteArtikelen(exclSlug?: string, count = 3) {
  return ARTIKELEN.filter((a) => a.slug !== exclSlug)
    .sort((a, b) => (a.datum < b.datum ? 1 : -1))
    .slice(0, count);
}
