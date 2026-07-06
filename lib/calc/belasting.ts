export interface BelastingInput {
  winstPerMaand: number;
  reservePct: number;
  btwDitKwartaal?: number;
}

export interface BelastingResultaat {
  perMaand: number;
  perKwartaal: number;
  perJaar: number;
  btwDitKwartaal: number;
  totaalDitKwartaal: number;
}

export function berekenBelastingReserve(input: BelastingInput): BelastingResultaat {
  const pct = Math.min(Math.max(input.reservePct, 0), 100) / 100;
  const perMaand = Math.max(input.winstPerMaand, 0) * pct;
  const btw = Math.max(input.btwDitKwartaal ?? 0, 0);
  return {
    perMaand,
    perKwartaal: perMaand * 3,
    perJaar: perMaand * 12,
    btwDitKwartaal: btw,
    totaalDitKwartaal: perMaand * 3 + btw,
  };
}
