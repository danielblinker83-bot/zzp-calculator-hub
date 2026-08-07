import { berekenHeffing2026, berekenNettoLoondienst } from "./belasting2026";

export interface LoondienstZzpInput {
  brutoJaarsalaris: number; // loondienst, inclusief vakantiegeld
  declarabeleUrenPerJaar: number;
  kostenPerJaar?: number; // zakelijke kosten als zzp'er
  reserveringenPerJaar?: number; // pensioen + AOV + buffer die je zelf draagt
  urencriterium?: boolean;
}

export interface LoondienstZzpResultaat {
  nettoLoondienstPerJaar: number;
  nettoLoondienstPerMaand: number;
  // Kale vergelijking: winst nodig voor hetzelfde netto
  winstNodigKaal: number;
  omzetNodigKaal: number;
  uurtariefKaal: number;
  // Eerlijke vergelijking: inclusief eigen reserveringen (pensioen/AOV/buffer)
  winstNodigEerlijk: number;
  omzetNodigEerlijk: number;
  uurtariefEerlijk: number;
}

/**
 * Zoekt de zzp-winst waarbij het netto (winst min heffing 2026) een doelbedrag
 * bereikt. Netto stijgt monotoon met de winst, dus binair zoeken vindt precies
 * een oplossing.
 */
function winstVoorNetto(nettoDoel: number, urencriterium: boolean): number {
  let laag = 0;
  let hoog = Math.max(nettoDoel * 3, 10_000);
  for (let i = 0; i < 60; i++) {
    const midden = (laag + hoog) / 2;
    const netto = midden - berekenHeffing2026(midden, { urencriterium }).totaleHeffing;
    if (netto < nettoDoel) laag = midden;
    else hoog = midden;
  }
  return hoog;
}

export function berekenLoondienstZzp(input: LoondienstZzpInput): LoondienstZzpResultaat {
  const urencriterium = input.urencriterium ?? true;
  const kosten = Math.max(input.kostenPerJaar ?? 0, 0);
  const reserveringen = Math.max(input.reserveringenPerJaar ?? 0, 0);
  const uren = Math.max(input.declarabeleUrenPerJaar, 1);

  const loondienst = berekenNettoLoondienst(input.brutoJaarsalaris);
  const nettoDoel = loondienst.nettoPerJaar;

  // Kaal: alleen hetzelfde netto evenaren.
  const winstNodigKaal = winstVoorNetto(nettoDoel, urencriterium);
  const omzetNodigKaal = winstNodigKaal + kosten;

  // Eerlijk: je moet ook pensioen, AOV en buffer zelf betalen die een werkgever
  // (deels) draagt, dus die tel je bij het te evenaren netto op.
  const winstNodigEerlijk = winstVoorNetto(nettoDoel + reserveringen, urencriterium);
  const omzetNodigEerlijk = winstNodigEerlijk + kosten;

  return {
    nettoLoondienstPerJaar: nettoDoel,
    nettoLoondienstPerMaand: nettoDoel / 12,
    winstNodigKaal,
    omzetNodigKaal,
    uurtariefKaal: omzetNodigKaal / uren,
    winstNodigEerlijk,
    omzetNodigEerlijk,
    uurtariefEerlijk: omzetNodigEerlijk / uren,
  };
}

// Controle met testgetallen:
//
// 1) Bruto 50.000 loondienst, 1.400 declarabele uren, geen kosten/reserveringen,
//    urencriterium. Netto loondienst: IB over 50.000 = 13.900,67 + 11.117 x 37,56%
//    = 18.076,42; AHK 3.115 - 6,398% x 20.264 = 1.818,50; AK 5.685 - 6,51% x 4.408
//    = 5.398,04; IB na kortingen 10.859,88; netto 39.140,12 p/j (3.261,68 p/m).
//    De gezochte winst teruggerekend door de zzp-heffing levert weer 39.140 netto
//    (consistentietest in scripts/test.ts). Uurtarief = winst / 1.400.
//
// 2) Met reserveringen 8.000 p/j ligt winstNodigEerlijk hoger dan winstNodigKaal,
//    en uurtariefEerlijk navenant hoger (test controleert de ongelijkheid).
