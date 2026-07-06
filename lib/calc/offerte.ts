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

// Controle met testgetallen:
// 1) 24 uur x 75 = 1.800 arbeid + 350 materiaal + 50 extra = 2.200;
//    10% korting = 220 -> subtotaal 1.980; btw 21% = 415,80; totaal 2.395,80.
// 2) 8 uur x 60 = 480, geen materiaal/korting, btw 21% = 100,80; totaal 580,80.
// De korting gaat over het hele subtotaal en de btw wordt over het bedrag
// ná korting berekend, zoals de Belastingdienst voorschrijft.
