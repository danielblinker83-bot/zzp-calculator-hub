/**
 * Maximale onbelaste kilometervergoeding 2026: 0,25 per kilometer
 * (verhoogd van 0,23, met terugwerkende kracht vanaf 1 januari 2026).
 * Bron: Belastingdienst, nieuwsbericht verhoging onbelaste kilometervergoeding.
 */
export const ONBELAST_TARIEF_2026 = 0.25;

export interface KilometerInput {
  kilometersPerRit: number;
  vergoedingPerKm: number;
  rittenPerMaand?: number;
}

export interface KilometerResultaat {
  perRit: number;
  perMaand: number | null;
  perJaar: number | null;
}

export function berekenKilometervergoeding(input: KilometerInput): KilometerResultaat {
  const perRit = input.kilometersPerRit * input.vergoedingPerKm;
  const ritten = input.rittenPerMaand;
  if (ritten == null || ritten <= 0) {
    return { perRit, perMaand: null, perJaar: null };
  }
  const perMaand = perRit * ritten;
  return { perRit, perMaand, perJaar: perMaand * 12 };
}

// Controle met testgetallen:
// 1) 45 km x 0,25 (tarief 2026) = 11,25 per rit; 8 ritten = 90,00 p/m; 1.080,00 p/j.
// 2) 45 km x 0,25 zonder ritten: alleen perRit (11,25), maand en jaar null.
