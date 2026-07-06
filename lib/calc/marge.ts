export interface MargeInput {
  inkoop: number;
  verkoop: number;
  extraKosten?: number;
}

export interface MargeResultaat {
  totaleKosten: number;
  winst: number;
  margePct: number | null; // winst / verkoop
  opslagPct: number | null; // winst / kosten
}

export function berekenMarge(input: MargeInput): MargeResultaat {
  const totaleKosten = input.inkoop + Math.max(input.extraKosten ?? 0, 0);
  const winst = input.verkoop - totaleKosten;
  const margePct = input.verkoop > 0 ? (winst / input.verkoop) * 100 : null;
  const opslagPct = totaleKosten > 0 ? (winst / totaleKosten) * 100 : null;
  return { totaleKosten, winst, margePct, opslagPct };
}
