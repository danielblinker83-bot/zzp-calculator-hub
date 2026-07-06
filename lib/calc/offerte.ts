export interface OfferteInput {
  uren: number;
  uurtarief: number;
  materiaal?: number;
  extraKosten?: number;
  btwPct: number;
  kortingPct?: number;
}

export interface OfferteResultaat {
  arbeid: number;
  materiaal: number;
  extraKosten: number;
  subtotaalVoorKorting: number;
  korting: number;
  subtotaalExcl: number;
  btwBedrag: number;
  totaalIncl: number;
}

export function berekenOfferte(input: OfferteInput): OfferteResultaat {
  const arbeid = input.uren * input.uurtarief;
  const materiaal = Math.max(input.materiaal ?? 0, 0);
  const extraKosten = Math.max(input.extraKosten ?? 0, 0);
  const subtotaalVoorKorting = arbeid + materiaal + extraKosten;
  const korting = subtotaalVoorKorting * (Math.min(Math.max(input.kortingPct ?? 0, 0), 100) / 100);
  const subtotaalExcl = subtotaalVoorKorting - korting;
  const btwBedrag = subtotaalExcl * (input.btwPct / 100);
  return {
    arbeid,
    materiaal,
    extraKosten,
    subtotaalVoorKorting,
    korting,
    subtotaalExcl,
    btwBedrag,
    totaalIncl: subtotaalExcl + btwBedrag,
  };
}
