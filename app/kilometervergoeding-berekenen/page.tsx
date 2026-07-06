import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import KilometerCalculator from "./KilometerCalculator";

export const metadata: Metadata = {
  title: "Kilometervergoeding berekenen | Gratis calculator",
  description:
    "Bereken snel je kilometervergoeding per rit, per maand en per jaar. Vul je kilometers en vergoeding per kilometer in en zie direct het bedrag.",
  alternates: { canonical: "/kilometervergoeding-berekenen" },
  openGraph: {
    title: "Kilometervergoeding berekenen",
    description: "Bereken je vergoeding per rit, per maand en per jaar.",
    url: "/kilometervergoeding-berekenen",
  },
};

const faq = [
  { vraag: "Welk bedrag per kilometer mag ik rekenen?", antwoord: "Er geldt in Nederland een maximum voor de onbelaste kilometervergoeding. Dat bedrag kan per jaar wijzigen; controleer het actuele tarief bij de Belastingdienst. Zakelijk mag je met een klant ook een ander tarief afspreken." },
  { vraag: "Geldt de vergoeding ook voor fiets of ov?", antwoord: "De onbelaste kilometervergoeding geldt in principe per gereisde kilometer, ongeacht het vervoermiddel, behalve bij vergoeding van werkelijke ov-kosten. Controleer je eigen situatie." },
  { vraag: "Moet ik mijn ritten bijhouden?", antwoord: "Ja, houd een rittenregistratie bij met datum, vertrek- en aankomstadres en het aantal kilometers. Dat maakt je administratie controleerbaar." },
  { vraag: "Kan ik reiskosten doorberekenen aan mijn klant?", antwoord: "Dat mag als je het vooraf afspreekt, bijvoorbeeld in je offerte. Vermeld reiskosten dan apart op je factuur." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="kilometervergoeding-berekenen"
      h1="Kilometervergoeding berekenen"
      intro="Bereken in een paar seconden wat je zakelijke kilometers opleveren. Vul het aantal kilometers en de vergoeding per kilometer in, voeg optioneel je ritten per maand toe en zie direct het bedrag per rit, maand en jaar."
      tool={<KilometerCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            De berekening is simpel: kilometers keer vergoeding per kilometer. Vul je ook het aantal ritten per maand in, dan zie je meteen wat het per maand en per jaar oplevert. Handig voor je administratie, je offertes en je aangifte.
          </p>
          <p>
            Het standaardbedrag in de tool is een veelgebruikt tarief, maar het wettelijke maximum kan wijzigen. Dit is een indicatie; controleer het actuele tarief bij de Belastingdienst.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
