import { formatEUR } from "@/lib/format";

export type HerinneringToon = "vriendelijk" | "zakelijk" | "dringend";

export interface HerinneringInput {
  klantnaam: string;
  factuurnummer: string;
  bedrag: number;
  vervaldatum: string; // vrije tekst, bv. "1 juli 2026"
  toon: HerinneringToon;
  betaallink?: string;
}

export function maakBetalingsherinnering(i: HerinneringInput): { onderwerp: string; tekst: string } {
  const bedrag = formatEUR(i.bedrag);
  const link = i.betaallink?.trim()
    ? `\n\nU kunt direct betalen via deze link:\n${i.betaallink.trim()}`
    : "";

  if (i.toon === "vriendelijk") {
    return {
      onderwerp: `Vriendelijke herinnering: factuur ${i.factuurnummer}`,
      tekst: `Beste ${i.klantnaam},

Misschien is het aan uw aandacht ontsnapt, dat kan gebeuren. Volgens onze administratie staat factuur ${i.factuurnummer} van ${bedrag} nog open. De vervaldatum was ${i.vervaldatum}.

Zou u het bedrag op korte termijn willen overmaken? Heeft u de betaling inmiddels gedaan, dan kunt u deze herinnering als niet verzonden beschouwen.${link}

Heeft u vragen over de factuur? Laat het gerust weten.

Met vriendelijke groet`,
    };
  }

  if (i.toon === "zakelijk") {
    return {
      onderwerp: `Betalingsherinnering factuur ${i.factuurnummer}`,
      tekst: `Geachte ${i.klantnaam},

Uit onze administratie blijkt dat factuur ${i.factuurnummer} van ${bedrag} nog niet is voldaan. De vervaldatum van deze factuur was ${i.vervaldatum}.

Wij verzoeken u vriendelijk het openstaande bedrag binnen 7 dagen over te maken.${link}

Mocht de betaling inmiddels zijn uitgevoerd, dan kunt u dit bericht als niet verzonden beschouwen.

Met vriendelijke groet`,
    };
  }

  return {
    onderwerp: `Tweede herinnering: factuur ${i.factuurnummer} vervalt`,
    tekst: `Geachte ${i.klantnaam},

Ondanks eerdere herinnering staat factuur ${i.factuurnummer} van ${bedrag} nog steeds open. De vervaldatum was ${i.vervaldatum}.

Wij verzoeken u dringend het volledige bedrag binnen 5 werkdagen over te maken.${link}

Blijft betaling uit, dan zien wij ons genoodzaakt verdere stappen te overwegen. Wij gaan ervan uit dat het zover niet hoeft te komen.

Heeft u het bedrag al overgemaakt? Dan kunt u dit bericht als niet verzonden beschouwen.

Met vriendelijke groet`,
  };
}
