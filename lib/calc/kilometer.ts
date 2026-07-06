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
