/** Indicatieve box 3-raming voor 2026. Forfaits voor banktegoeden en schulden zijn voorlopig. */
export type Box3Input = {
  savings: number;
  investments: number;
  debts: number;
  fiscalPartner: boolean;
  eligibleTaxDebt?: number;
  taxReserve?: number;
};
export type Box3Result = {
  savingsAfterEligibleTaxDebt: number;
  deductibleDebt: number;
  netAssets: number;
  deemedReturn: number;
  taxableBase: number;
  taxableReturn: number;
  tax: number;
  taxWithoutReserve: number;
  reserveTaxCost: number;
};
const ALLOWANCE = 59357;
const DEBT_THRESHOLD = 3800;
const SAVINGS_RATE = 0.0128;
const OTHER_ASSETS_RATE = 0.06;
const DEBT_RATE = 0.027;
const TAX_RATE = 0.36;

function nonNegative(value: number | undefined): number {
  return Number.isFinite(value) ? Math.max(0, value ?? 0) : 0;
}
function calculate(input: Box3Input, savingsOverride?: number): Omit<Box3Result, "taxWithoutReserve" | "reserveTaxCost"> {
  const savings = nonNegative(savingsOverride ?? input.savings);
  const assets = nonNegative(input.investments);
  const eligibleDebt = Math.min(savings, nonNegative(input.eligibleTaxDebt));
  const savingsAfterEligibleTaxDebt = Math.max(0, savings - eligibleDebt);
  const deductibleDebt = Math.max(0, nonNegative(input.debts) - DEBT_THRESHOLD * (input.fiscalPartner ? 2 : 1));
  const netAssets = Math.max(0, savingsAfterEligibleTaxDebt + assets - deductibleDebt);
  const deemedReturn = savingsAfterEligibleTaxDebt * SAVINGS_RATE + assets * OTHER_ASSETS_RATE - deductibleDebt * DEBT_RATE;
  const taxableBase = Math.max(0, netAssets - ALLOWANCE * (input.fiscalPartner ? 2 : 1));
  const taxableReturn = netAssets > 0 ? Math.max(0, deemedReturn * taxableBase / netAssets) : 0;
  const tax = taxableReturn * TAX_RATE;
  return { savingsAfterEligibleTaxDebt, deductibleDebt, netAssets, deemedReturn, taxableBase, taxableReturn, tax };
}
export function calculateBox3(input: Box3Input): Box3Result {
  const current = calculate(input);
  const reserve = Math.min(nonNegative(input.taxReserve), nonNegative(input.savings));
  const withoutReserve = calculate(input, Math.max(0, nonNegative(input.savings) - reserve));
  return { ...current, taxWithoutReserve: withoutReserve.tax, reserveTaxCost: Math.max(0, current.tax - withoutReserve.tax) };
}
