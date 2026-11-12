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
    slug: "voorlopige-aanslag-belastingreserve",
    title: "Voorlopige aanslag en belastingreserve als zzp’er",
    description: "Bereken hoeveel je extra reserveert naast je voorlopige aanslag. Met een rekenvoorbeeld voor inkomstenbelasting, Zvw en openstaande termijnen.",
    datum: "2026-11-12",
    redactie: true,
    leestijd: 4,
    afbeelding: "/kennisbank/voorlopige-aanslag-belastingreserve.jpg",
    afbeeldingAlt: "Daniel Blinker met een envelop en notitieboek in een roestoranje overhemd",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["belasting-reserveren-zzp", "zzp-netto-inkomen-berekenen"],
    bronnen: [
      { label: "Belastingdienst — Wanneer wijzig je de voorlopige aanslag?", url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/in-welke-situaties-moet-ik-mijn-voorlopige-aanslag-wijzigen" },
      { label: "Belastingdienst — Betalen van de voorlopige aanslag", url: "https://www.belastingdienst.nl/wps/wcm/connect/nl/voorlopige-aanslag/content/voorlopige-aanslag-aangevraagd-hoe-gaat-het-met-betalen" },
      { label: "Belastingdienst — Verrekening bij de definitieve aanslag", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/inkomstenbelasting/hoe_werkt_inkomstenbelasting/aanslag/definitieve_aanslag" },
      { label: "Belastingdienst — Inkomensafhankelijke bijdrage Zvw", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/prive/werk_en_inkomen/zorgverzekeringswet/bijdrage_zorgverzekeringswet/" },
    ],
  },
  {
    slug: "break-even-afzet-berekenen",
    title: "Break-even afzet berekenen",
    description: "Bereken hoeveel verkopen je nodig hebt om je vaste kosten te dekken. Met de formule voor break-even afzet, een tabel en een scenario met winstdoel.",
    datum: "2026-11-11",
    redactie: true,
    leestijd: 4,
    afbeelding: "/kennisbank/break-even-afzet-berekenen.jpg",
    afbeeldingAlt: "Daniel Blinker in een marineblauw overhemd houdt een productdoos vast",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["marge-berekenen"],
    bronnen: [
      { label: "KVK — Vaste en variabele kosten in de exploitatiebegroting", url: "https://www.kvk.nl/geldzaken/exploitatiebegroting/" },
      { label: "OpenStax — Break-even afzet en contributiemarge", url: "https://openstax.org/books/principles-managerial-accounting/pages/3-2-calculate-a-break-even-point-in-units-and-dollars" },
      { label: "Belastingdienst — Zakelijke kosten en aftrekbare btw", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/zakelijke_kosten/" },
    ],
  },
  {
    slug: "omzet-winst-banksaldo",
    title: "Omzet, winst en banksaldo als zzp’er",
    description: "Bereken je winst uit omzet en kosten. Zie met een openstaande factuur waarom je banksaldo afwijkt en welke cijfers je invult bij de nettocalculator.",
    datum: "2026-11-10",
    redactie: true,
    leestijd: 4,
    afbeelding: "/kennisbank/omzet-winst-banksaldo.jpg",
    afbeeldingAlt: "Daniel Blinker legt in een bordeauxrood overhemd een factuur in een postbak",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["zzp-netto-inkomen-berekenen", "belasting-reserveren-zzp", "btw-berekenen"],
    bronnen: [
      { label: "KVK — Verwachte winst en kosten in de exploitatiebegroting", url: "https://www.kvk.nl/geldzaken/exploitatiebegroting/" },
      { label: "KVK — Ontvangsten en betalingen in de liquiditeitsbegroting", url: "https://www.kvk.nl/geldzaken/liquiditeitsbegroting/" },
      { label: "Belastingdienst — Zakelijke kosten en aftrekbare btw", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/zakelijke_kosten/" },
      { label: "Belastingdienst — Btw-tarieven", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_berekenen_aan_uw_klanten/btw_berekenen/btw_tarief/btw_tarief" },
    ],
  },
  {
    slug: "zakelijke-ritten-bijhouden",
    title: "Zakelijke ritten bijhouden met je privéauto",
    description: "Leg zakelijke kilometers vast als zzp’er. Bekijk een voorbeeld van een rittenoverzicht en hoe woon-werkverkeer meetelt voor inkomstenbelasting en btw.",
    datum: "2026-11-09",
    redactie: true,
    leestijd: 4,
    afbeelding: "/kennisbank/zakelijke-ritten-bijhouden.jpg",
    afbeeldingAlt: "Daniel Blinker in een grijs overhemd met een notitieboek in een geparkeerde auto",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["kilometervergoeding-berekenen"],
    bronnen: [
      { label: "Belastingdienst — Zakelijk gebruik privévervoermiddel in 2026", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/zakelijk-gebruik-privevervoermiddel-2026" },
      { label: "Belastingdienst — Woon-werkverkeer voor de inkomstenbelasting", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/zakelijk-gebruik-privevervoermiddel" },
      { label: "Belastingdienst — Btw en zakelijk gebruik van de privéauto", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aftrekken/btw_en_de_auto/zakelijk_gebruik_van_de_priveauto/" },
      { label: "Belastingdienst — Rittenregistratie voor privégebruik van een auto van de zaak", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/privegebruik_auto/rittenregistratie" },
    ],
  },
  {
    slug: "declarabele-uren-plannen",
    title: "Declarabele uren realistisch plannen als zzp’er",
    description: "Van werkweek naar declarabele uren per jaar en maand. Met rekenvoorbeelden, tarieftabel en uitleg om vrije weken één keer mee te nemen.",
    datum: "2026-11-08",
    redactie: true,
    leestijd: 5,
    afbeelding: "/kennisbank/declarabele-uren-plannen.jpg",
    afbeeldingAlt: "Daniel Blinker in een zandkleurig overhemd wijst naar een weekplanner",
    afbeeldingBreedte: 1536,
    afbeeldingHoogte: 864,
    gerelateerdeTools: ["uurtarief-berekenen", "offerte-calculator"],
    bronnen: [
      { label: "KVK — Uurtarief en declarabele uren", url: "https://www.kvk.nl/geldzaken/uurtarief-bepalen/" },
      { label: "KVK — Urenregistratie bijhouden", url: "https://www.kvk.nl/starten/waarom-een-goede-urenregistratie-onmisbaar-is/" },
      { label: "Belastingdienst — Welke uren tellen mee voor het urencriterium?", url: "https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/inkomstenbelasting_voor_ondernemers/voorwaarden_urencriterium" },
    ],
  },
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
