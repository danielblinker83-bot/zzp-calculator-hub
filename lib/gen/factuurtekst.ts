export type FactuurToon = "kort" | "professioneel" | "uitgebreid";
export type KlantType = "particulier" | "bedrijf";

export interface FactuurtekstInput {
  dienst: string;
  periode: string;
  klantType: KlantType;
  toon: FactuurToon;
}

export function maakFactuurteksten(i: FactuurtekstInput): string[] {
  const d = i.dienst.trim();
  const p = i.periode.trim();
  const aanhef = i.klantType === "bedrijf" ? "conform afspraak" : "zoals besproken";

  if (i.toon === "kort") {
    return [
      `${d} – ${p}`,
      `${d}, periode ${p}`,
      `Werkzaamheden: ${d} (${p})`,
    ];
  }

  if (i.toon === "professioneel") {
    return [
      `Uitgevoerde werkzaamheden: ${d}, in de periode ${p}, ${aanhef}.`,
      `${d} ten behoeve van uw opdracht, periode ${p}.`,
      `Geleverde diensten: ${d}. Uitvoering: ${p}.`,
    ];
  }

  return [
    `In de periode ${p} zijn de volgende werkzaamheden uitgevoerd: ${d}. De werkzaamheden zijn ${aanhef} afgerond en opgeleverd.`,
    `Deze factuur betreft ${d}, uitgevoerd in ${p}. De uitvoering vond plaats ${aanhef}, inclusief afstemming en oplevering.`,
    `Omschrijving: ${d}. Periode: ${p}. Werkzaamheden zijn ${aanhef} uitgevoerd; eventuele vervolgafspraken worden apart gefactureerd.`,
  ];
}
