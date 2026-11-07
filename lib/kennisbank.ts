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
  redactie?: boolean;
  afbeelding?: string; // pad in /public, bijv. /kennisbank/<slug>.png (16:9)
  afbeeldingAlt?: string;
  afbeeldingBreedte?: number;
  afbeeldingHoogte?: number;
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
    ? [{ url: a.afbeelding, width: a.afbeeldingBreedte ?? 1672, height: a.afbeeldingHoogte ?? 941, alt: a.afbeeldingAlt ?? a.title }]
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
    slug: "btw-terugrekenen-gemengde-bon",
    title: "Btw terugrekenen op een gemengde bon",
    description: "Een bon met 21% en 9% btw narekenen? Splits per tarief en controleer de bedragen met voorbeelden, een tabel en uitleg over afronding.",
    datum: "2026-11-07",
    redactie: true,
    leestijd: 5,
    afbeelding: "/kennisbank/btw-terugrekenen-gemengde-bon.jpg",
    afbeeldingAlt: "Daniel Blinker in een olijfgroen overhemd bekijkt een bon met een pen in de hand",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["btw-berekenen", "marge-berekenen"],
    bronnen: [
      { label: "Belastingdienst — Btw terugrekenen", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_berekenen_aan_uw_klanten/btw_berekenen/rekenvoorbeeld_btw_berekenen" },
      { label: "Belastingdienst — Btw-bedragen afronden", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/btw-bedrag_afronden" },
      { label: "Belastingdienst — Factuureisen en verschillende tarieven", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/" },
      { label: "Belastingdienst — Voorwaarden voor btw-aftrek", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aftrekken/welke_btw_is_aftrekbaar/welke_btw_mag_u_aftrekken" },
    ],
  },
  {
    slug: "verkoopprijs-platformkosten",
    title: "Verkoopprijs berekenen met platformkosten",
    description: "Bereken je verkoopprijs met een vaste vergoeding, platformcommissie en gewenste marge. Met rekenvoorbeelden en uitleg over de commissiegrondslag bij bol.",
    datum: "2026-11-06",
    leestijd: 5,
    redactie: true,
    afbeelding: "/kennisbank/verkoopprijs-platformkosten.jpg",
    afbeeldingAlt: "Daniel Blinker in een lichtblauw overhemd met een verzenddoos op schoot",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["marge-berekenen", "btw-berekenen"],
    bronnen: [
      { label: "KVK — Kostprijs en verkoopprijs bepalen", url: "https://www.kvk.nl/marketing/hoe-bereken-je-een-goede-verkoopprijs-voor-je-product/" },
      { label: "KVK — Kosten bij verkoop via een online platform", url: "https://www.kvk.nl/starten/spullen-verkopen-via-een-online-platform/" },
      { label: "bol Partnerplatform — Commissie en berekeningsgrondslag", url: "https://partnerplatform.bol.com/nl/idp/commissie" },
      { label: "bol Partnerplatform — Verkoopfactuur en verrekeningen", url: "https://partnerplatform.bol.com/nl/idp/verkoopfactuur" },
      { label: "Belastingdienst — Btw-tarieven", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_berekenen_aan_uw_klanten/btw_berekenen/btw_tarief/btw_tarief" },
    ],
  },
  {
    slug: "kilometervergoeding-doorberekenen-klant",
    title: "Kilometervergoeding doorberekenen aan je klant: tarief, btw en voorbeeld",
    description: "Hoe zet je reiskosten op je factuur als zzp’er? Met voorbeeldfactuur, afspraken over kilometers en uitleg over het verschil met je fiscale aftrek in 2026.",
    datum: "2026-11-05",
    gecontroleerd: "2026-11-05",
    leestijd: 5,
    afbeelding: "/kennisbank/kilometervergoeding-doorberekenen-klant.jpg",
    afbeeldingAlt: "Daniel Blinker in een wit overhemd bij uitleg over kilometervergoeding doorberekenen aan je klant",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["kilometervergoeding-berekenen", "btw-berekenen", "factuurtekst-maken", "offerte-calculator"],
    bronnen: [
      { label: "KVK — Afspraken over bijkomende kosten", url: "https://www.kvk.nl/geldzaken/uurtarief-bepalen/" },
      { label: "Belastingdienst — Btw over diensten en reiskosten", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_berekenen_aan_uw_klanten/waarover_btw_berekenen/diensten/" },
      { label: "Belastingdienst — Zakelijk gebruik privévervoermiddel 2026", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/zakelijk-gebruik-privevervoermiddel-2026" },
    ],
  },
  {
    slug: "verschil-marge-en-opslag",
    title: "Verschil tussen marge en opslag: zo voorkom je een te lage prijs",
    description: "30% opslag is geen 30% marge. Bekijk de formules, omrekentabel en voorbeelden voor je verkoopprijs, extra kosten en korting.",
    datum: "2026-11-04",
    gecontroleerd: "2026-11-04",
    leestijd: 6,
    afbeelding: "/kennisbank/verschil-marge-en-opslag.jpg",
    afbeeldingAlt: "Daniel Blinker legt in een wit overhemd het verschil tussen marge en opslag uit",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["marge-berekenen", "offerte-calculator", "uurtarief-berekenen"],
    bronnen: [
      { label: "KVK — Kostprijs en verkoopprijs bepalen", url: "https://www.kvk.nl/marketing/hoe-bereken-je-een-goede-verkoopprijs-voor-je-product/" },
      { label: "Ondernemersplein — Directe, indirecte, vaste en variabele kosten", url: "https://ondernemersplein.overheid.nl/geldzaken-en-belastingen/cashflow/prijs-bepalen-of-aanpassen/" },
    ],
  },
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
    afbeelding: "/kennisbank/hoeveel-belasting-betaal-je-als-zzper-2026.png",
    afbeeldingAlt: "Daniel, maker van berekenzzp.nl, bij de vraag hoeveel belasting je betaalt als zzp'er in 2026",
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
