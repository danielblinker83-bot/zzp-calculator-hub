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
