// Metadata van de kennisbank-artikelen. Elk artikel heeft daarnaast een eigen
// pagina onder app/kennisbank/<slug>/page.tsx (net zoals de tools). Deze lijst
// voedt de overzichtspagina, de sitemap en de interne links.

export type Bron = { label: string; url: string };

export type Artikel = {
  slug: string;
  title: string;
  description: string;
  datum: string; // ISO, publicatiedatum
  bijgewerkt?: string; // ISO, laatst inhoudelijk bijgewerkt
  leestijd: number; // minuten
  afbeelding?: string; // pad in /public, bijv. /kennisbank/<slug>.png (16:9)
  afbeeldingAlt?: string;
  gerelateerdeTools?: string[]; // tool-slugs
  bronnen?: Bron[];
};

export const ARTIKELEN: Artikel[] = [
  {
    slug: "wat-is-een-goed-uurtarief-als-zzper",
    title: "Wat is een goed uurtarief als zzp'er?",
    description:
      "Er bestaat geen vast bedrag, wel een manier om het te berekenen. Zo bepaal je een uurtarief dat je kosten, je belasting en je gewenste inkomen dekt, met voorbeelden voor 2026.",
    datum: "2026-08-10",
    leestijd: 7,
    afbeelding: "/kennisbank/wat-is-een-goed-uurtarief-als-zzper.png",
    afbeeldingAlt: "Daniel, maker van berekenzzp.nl, bij de vraag wat een goed uurtarief is als zzp'er",
    gerelateerdeTools: ["uurtarief-berekenen", "loondienst-naar-zzp", "zzp-netto-inkomen-berekenen"],
    bronnen: [
      { label: "Belastingdienst — Zelfstandigenaftrek 2026", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/ondernemersaftrek-2026/zelfstandigenaftrek-2026" },
      { label: "KVK — Uurtarief bepalen als zzp'er", url: "https://www.kvk.nl/starten/uurtarief-berekenen-als-zzper/" },
    ],
  },
  {
    slug: "hoeveel-belasting-betaal-je-als-zzper-2026",
    title: "Hoeveel belasting betaal je als zzp'er in 2026?",
    description:
      "Een heldere uitleg van de inkomstenbelasting voor zzp'ers in 2026: de schijven, de zelfstandigenaftrek, de mkb-winstvrijstelling, de heffingskortingen en de Zvw-bijdrage, met rekenvoorbeelden per winstniveau.",
    datum: "2026-08-07",
    leestijd: 7,
    gerelateerdeTools: ["belasting-reserveren-zzp", "zzp-netto-inkomen-berekenen", "uurtarief-berekenen"],
    bronnen: [
      { label: "Belastingdienst — Box 1 tarieven 2026", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/boxen_en_tarieven/box_1/box_1" },
      { label: "Belastingdienst — Mkb-winstvrijstelling 2026", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/mkb-winstvrijstelling-2026" },
      { label: "Belastingdienst — Tabel arbeidskorting 2026", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/heffingskortingen_boxen_tarieven/heffingskortingen/arbeidskorting/tabel-arbeidskorting-2026" },
    ],
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
