import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import OfferteCalculator from "./OfferteCalculator";

export const metadata: Metadata = {
  title: "Offerte berekenen | Gratis offerte calculator voor zzp'ers",
  description:
    "Bereken snel een offerte: uren maal uurtarief plus materiaal en extra kosten, inclusief btw en optionele korting. Met kant-en-klare samenvatting.",
  alternates: { canonical: "/offerte-calculator" },
  openGraph: {
    title: "Offerte berekenen",
    description: "Reken uren, materiaal en btw om naar een duidelijke offerte.",
    url: "/offerte-calculator",
  },
};

const faq = [
  { vraag: "Zet ik bedragen inclusief of exclusief btw in mijn offerte?", antwoord: "Voor zakelijke klanten is exclusief btw gebruikelijk; voor particulieren vermeld je bij voorkeur het totaal inclusief btw. Vermeld in beide gevallen duidelijk het btw-percentage." },
  { vraag: "Hoe lang is een offerte geldig?", antwoord: "Dat bepaal je zelf. Een geldigheidstermijn van 14 of 30 dagen is gebruikelijk. Vermeld de termijn altijd in je offerte." },
  { vraag: "Moet ik korting geven?", antwoord: "Korting is nooit verplicht. Geef je korting, vermeld dan het oorspronkelijke bedrag en de korting apart, zodat de waarde van je werk zichtbaar blijft." },
  { vraag: "Is deze berekening een officiële offerte?", antwoord: "Nee, dit is een rekenhulp. Gebruik de samenvatting als basis en vul deze aan met je voorwaarden, omschrijving van het werk en geldigheidstermijn." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="offerte-calculator"
      h1="Offerte berekenen"
      intro="Snel een kloppende offerte opstellen? Vul je uren, uurtarief, materiaal en eventuele korting in. Je ziet direct het subtotaal, het btw-bedrag en het totaal inclusief btw, met een samenvatting die je zo kunt kopiëren."
      tool={<OfferteCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            De calculator telt je arbeid (uren maal uurtarief), materiaal en extra kosten op, trekt eventuele korting eraf en berekent daarover de btw. Het resultaat is een heldere prijsopbouw die je klant in één oogopslag begrijpt.
          </p>
          <p>
            De samenvatting is een indicatie en geen juridisch document. Voeg zelf je leveringsvoorwaarden, planning en geldigheidstermijn toe.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
