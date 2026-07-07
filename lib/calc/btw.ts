export type BtwRichting = "excl-naar-incl" | "incl-naar-excl";

export interface BtwResultaat {
  exclusief: number;
  btwBedrag: number;
  inclusief: number;
}

export function berekenBtw(bedrag: number, percentage: number, richting: BtwRichting): BtwResultaat {
  const factor = 1 + percentage / 100;
  if (richting === "excl-naar-incl") {
    const exclusief = bedrag;
    const inclusief = bedrag * factor;
    return { exclusief, btwBedrag: inclusief - exclusief, inclusief };
  }
  const inclusief = bedrag;
  const exclusief = bedrag / factor;
  return { exclusief, btwBedrag: inclusief - exclusief, inclusief };
}

// Controle met testgetallen (2026, tarieven ongewijzigd):
// 1) berekenBtw(1000, 21, "excl-naar-incl") -> exclusief 1000, btw 210, inclusief 1210.
//    Klopt: 1000 * 1,21 = 1210, en 1210 - 1000 = 210.
// 2) berekenBtw(1210, 21, "incl-naar-excl") -> exclusief 1000, btw 210, inclusief 1210.
//    Klopt: 1210 / 1,21 = 1000 (de omgekeerde bewerking van test 1).
// 3) berekenBtw(109, 9, "incl-naar-excl") -> exclusief 100, btw 9, inclusief 109.
//    Klopt: 109 / 1,09 = 100.
