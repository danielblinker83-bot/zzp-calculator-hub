const eur = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const pct = new Intl.NumberFormat("nl-NL", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
});

export function formatEUR(value: number): string {
  if (!Number.isFinite(value)) return "€ 0,00";
  return eur.format(value);
}

export function formatPct(value: number): string {
  if (!Number.isFinite(value)) return "0%";
  return `${pct.format(value)}%`;
}

/** Parse Dutch-style number input: "1.250,50" or "1250.50" -> 1250.5 */
export function parseNumber(input: string): number | null {
  const raw = input.trim();
  if (raw === "") return null;
  let s = raw.replace(/\s/g, "").replace(/€/g, "");
  const hasComma = s.includes(",");
  const hasDot = s.includes(".");
  if (hasComma && hasDot) {
    // assume dot = thousands, comma = decimal (Dutch)
    s = s.replace(/\./g, "").replace(",", ".");
  } else if (hasComma) {
    s = s.replace(",", ".");
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}
