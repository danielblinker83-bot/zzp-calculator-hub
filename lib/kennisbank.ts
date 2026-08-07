// Metadata van de kennisbank-artikelen. Elk artikel heeft daarnaast een eigen
// pagina onder app/kennisbank/<slug>/page.tsx (net zoals de tools). Deze lijst
// voedt de overzichtspagina, de sitemap en de interne links.

import type { Metadata } from "next";

export type Bron = { label: string; url: string };

export type Artikel = {
  slug: string;
  title: string;
  description: string;
  datum: string; // ISO, publicatiedatum
  bijgewerkt?: string; // ISO, laatst inhoudelijk bijgewerkt
  gecontroleerd?: string; // ISO, laatst gecontroleerd op actualiteit (versheidssignaal)
  leestijd: number; // minuten
  afbeelding?: string; // pad in /public, bijv. /kennisbank/<slug>.png (16:9)
  afbeeldingAlt?: string;
  gerelateerdeTools?: string[]; // tool-slugs
  bronnen?: Bron[];
};

/**
 * Bouwt de complete, consistente metadata voor een artikel: canonical,
 * Open Graph (type article, met publicatie- en wijzigingsdatum en afbeelding)
 * en een Twitter summary_large_image-kaart. Pagina's mogen title/description
 * overschrijven voor een scherpere zoekwoord-variant. De relatieve
 * afbeeldings-URL wordt via metadataBase automatisch absoluut gemaakt.
 */
export function artikelMetadata(a: Artikel, overrides?: { title?: string; description?: string }): Metadata {
  const path = `/kennisbank/${a.slug}`;
  const title = overrides?.title ?? a.title;
  const description = overrides?.description ?? a.description;
  const images = a.afbeelding
    ? [{ url: a.afbeelding, width: 1672, height: 941, alt: a.afbeeldingAlt ?? a.title }]
    : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      publishedTime: a.datum,
      modifiedTime: a.gecontroleerd ?? a.bijgewerkt ?? a.datum,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: a.afbeelding ? [a.afbeelding] : undefined,
    },
  };
}

export const ARTIKELEN: Artikel[] = [
  {
    slug: "wat-is-een-goed-uurtarief-als-zzper",
    title: "Wat is een goed uurtarief als zzp'er?",
    description:
      "Er bestaat geen vast bedrag, wel een manier om het te berekenen. Zo bepaal je een uurtarief dat je kosten, je belasting en je gewenste inkomen dekt, met voorbeelden voor 2026.",
    datum: "2026-08-10",
    gecontroleerd: "2026-08-10",
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
    gecontroleerd: "2026-08-07",
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
