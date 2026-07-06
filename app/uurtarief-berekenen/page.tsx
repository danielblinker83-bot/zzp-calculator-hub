import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import UurtariefCalculator from "./UurtariefCalculator";

export const metadata: Metadata = {
  title: "Uurtarief berekenen als zzp'er | Gratis calculator",
  description:
    "Bereken een realistisch uurtarief als zzp'er op basis van je gewenste netto inkomen, kosten, belastingreserve en declarabele uren. Gratis en direct resultaat.",
  alternates: { canonical: "/uurtarief-berekenen" },
  openGraph: {
    title: "Uurtarief berekenen als zzp'er",
    description: "Bereken een realistisch uurtarief op basis van je doelen en kosten.",
    url: "/uurtarief-berekenen",
  },
};

const faq = [
  { vraag: "Wat is een goed uurtarief voor een zzp'er?", antwoord: "Dat verschilt sterk per branche en ervaring. Deze calculator rekent terug vanuit wat jij netto wilt overhouden, zodat je een ondergrens kent. Vergelijk daarnaast tarieven in jouw vakgebied." },
  { vraag: "Waarom rekent de tool met declarabele uren?", antwoord: "Niet elk gewerkt uur is factureerbaar. Administratie, acquisitie en reistijd betaal je niet. Reken daarom alleen met uren die je echt aan klanten kunt factureren." },
  { vraag: "Welk percentage belastingreserve is verstandig?", antwoord: "Veel zzp'ers houden 30 tot 40 procent van hun winst aan als reserve voor inkomstenbelasting en bijdrage Zvw. Dit is een richtlijn; je werkelijke belastingdruk hangt af van je winst en aftrekposten." },
  { vraag: "Is deze uitkomst financieel advies?", antwoord: "Nee. Dit is een praktische schatting om richting te geven. Controleer je eigen situatie of overleg met een boekhouder voordat je tarieven vastlegt." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="uurtarief-berekenen"
      h1="Uurtarief berekenen als zzp'er"
      intro="Wat moet je per uur vragen om netto over te houden wat jij wilt? Vul je gewenste inkomen, kosten, belastingreserve en declarabele uren in en krijg direct een richtprijs per uur, exclusief en inclusief btw."
      tool={<UurtariefCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            De calculator rekent terug vanuit je doel. Eerst bepaalt hij welke winst je nodig hebt om na je belastingreserve je gewenste netto inkomen over te houden. Daar komen je zakelijke kosten bij, plus een eventuele buffer. Dat omzetdoel wordt gedeeld door je effectieve declarabele uren, gecorrigeerd voor vrije weken.
          </p>
          <p>
            De uitkomst is een ondergrens-indicatie: vraag je minder, dan haal je je doel waarschijnlijk niet. Dit is een praktische schatting, geen financieel advies.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
