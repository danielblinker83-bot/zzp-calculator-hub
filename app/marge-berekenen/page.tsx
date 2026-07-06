import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import MargeCalculator from "./MargeCalculator";

export const metadata: Metadata = {
  title: "Marge berekenen | Winst, marge en opslag calculator",
  description:
    "Bereken snel je winst, winstmarge en opslagpercentage. Vul je inkoopprijs en verkoopprijs in en zie direct hoeveel je verdient per verkoop.",
  alternates: { canonical: "/marge-berekenen" },
  openGraph: {
    title: "Marge berekenen",
    description: "Bereken je winst, marge en opslag op inkoop en verkoop.",
    url: "/marge-berekenen",
  },
};

const faq = [
  { vraag: "Wat is het verschil tussen marge en opslag?", antwoord: "Marge is je winst als percentage van de verkoopprijs. Opslag (markup) is je winst als percentage van je kosten. Bij inkoop 60 en verkoop 100 is je marge 40% en je opslag ruim 66%." },
  { vraag: "Reken ik met bedragen inclusief of exclusief btw?", antwoord: "Reken voor je marge altijd met bedragen exclusief btw. De btw is geen omzet of kostenpost; die draag je af of vraagt je terug." },
  { vraag: "Wat is een gezonde marge?", antwoord: "Dat verschilt per branche. Handel werkt vaak met lagere marges en hoog volume; diensten met hogere marges. Vergelijk met je branche en houd rekening met vaste kosten die uit je marge betaald worden." },
  { vraag: "Wat vul ik in bij extra kosten?", antwoord: "Directe kosten per verkoop, zoals verzendkosten, transactiekosten of verpakking. Deze verlagen je werkelijke winst per verkoop." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="marge-berekenen"
      h1="Marge berekenen"
      intro="Weet precies wat je verdient per verkoop. Vul je inkoopprijs, verkoopprijs en eventuele extra kosten in en zie direct je winst in euro's, je marge en je opslagpercentage."
      tool={<MargeCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            Winst is je verkoopprijs min al je kosten. De marge zet die winst af tegen je verkoopprijs en laat zien welk deel van elke euro omzet je overhoudt. De opslag laat zien hoeveel je bovenop je kosten rekent. Beide percentages zeggen iets anders; verwar ze niet in prijsgesprekken.
          </p>
          <p>
            Gebruik deze indicatie om prijzen te bepalen en te controleren of een actie of korting nog rendabel is.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
