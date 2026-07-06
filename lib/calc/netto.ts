export interface NettoInput {
  omzetPerMaandExcl: number;
  kostenPerMaand: number;
  belastingReservePct: number;
  verzekeringPensioenPerMaand?: number;
  bufferPct?: number;
}

export interface NettoResultaat {
  winstVoorBelasting: number;
  belastingReserve: number;
  bufferBedrag: number;
  verzekeringPensioen: number;
  nettoIndicatie: number;
  totaalApartZetten: number;
}

export function berekenNetto(input: NettoInput): NettoResultaat {
  const winstVoorBelasting = input.omzetPerMaandExcl - input.kostenPerMaand;
  const basis = Math.max(winstVoorBelasting, 0);
  const belastingReserve = basis * (Math.min(Math.max(input.belastingReservePct, 0), 100) / 100);
  const bufferBedrag = basis * (Math.max(input.bufferPct ?? 0, 0) / 100);
  const verzekeringPensioen = Math.max(input.verzekeringPensioenPerMaand ?? 0, 0);
  const nettoIndicatie = winstVoorBelasting - belastingReserve - bufferBedrag - verzekeringPensioen;
  return {
    winstVoorBelasting,
    belastingReserve,
    bufferBedrag,
    verzekeringPensioen,
    nettoIndicatie,
    totaalApartZetten: belastingReserve + bufferBedrag,
  };
}
