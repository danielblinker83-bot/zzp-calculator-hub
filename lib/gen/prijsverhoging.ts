import { formatEUR } from "@/lib/format";

export type PrijsToon = "vriendelijk" | "professioneel" | "kort";

export interface PrijsverhogingInput {
  bedrijfsnaam: string;
  klantnaam?: string;
  huidigePrijs: number;
  nieuwePrijs: number;
  ingangsdatum: string;
  reden?: string;
  toon: PrijsToon;
}

export function maakPrijsverhogingMail(i: PrijsverhogingInput): { onderwerp: string; tekst: string } {
  const aanhef = i.klantnaam?.trim() ? `Beste ${i.klantnaam.trim()},` : "Beste klant,";
  const oud = formatEUR(i.huidigePrijs);
  const nieuw = formatEUR(i.nieuwePrijs);
  const reden = i.reden?.trim()
    ? ` De reden hiervoor: ${i.reden.trim()}.`
    : "";

  if (i.toon === "kort") {
    return {
      onderwerp: `Prijswijziging per ${i.ingangsdatum}`,
      tekst: `${aanhef}

Per ${i.ingangsdatum} wijzigt ons tarief van ${oud} naar ${nieuw}.${reden}

Lopende afspraken tot die datum blijven tegen het huidige tarief.

Vragen? Laat het weten.

Met vriendelijke groet,
${i.bedrijfsnaam}`,
    };
  }

  if (i.toon === "professioneel") {
    return {
      onderwerp: `Tariefwijziging ${i.bedrijfsnaam} per ${i.ingangsdatum}`,
      tekst: `${aanhef}

Graag informeren wij u over een aanpassing van onze tarieven. Per ${i.ingangsdatum} wijzigt het tarief van ${oud} naar ${nieuw}.${reden}

Alle opdrachten die vóór deze datum zijn bevestigd, factureren wij nog tegen het huidige tarief. Voor nieuwe opdrachten vanaf ${i.ingangsdatum} geldt het nieuwe tarief.

Heeft u vragen over deze wijziging? Neem gerust contact op, wij lichten het graag toe.

Met vriendelijke groet,
${i.bedrijfsnaam}`,
    };
  }

  return {
    onderwerp: `Nieuwe tarieven per ${i.ingangsdatum}`,
    tekst: `${aanhef}

Allereerst: bedankt voor de prettige samenwerking. Die waarderen we enorm.

Om de kwaliteit van ons werk te kunnen blijven leveren, passen we per ${i.ingangsdatum} onze prijzen aan. Het tarief gaat van ${oud} naar ${nieuw}.${reden}

Voor alles wat vóór ${i.ingangsdatum} is afgesproken, verandert er niets. Heeft u vragen of wilt u iets afstemmen? We denken graag met u mee.

Met vriendelijke groet,
${i.bedrijfsnaam}`,
  };
}
