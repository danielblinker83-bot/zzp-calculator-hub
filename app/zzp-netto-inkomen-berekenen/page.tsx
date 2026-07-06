import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import NettoCalculator from "./NettoCalculator";

export const metadata: Metadata = {
  title: "Zzp netto inkomen berekenen | Wat houd je over?",
  description:
    "Bereken als zzp'er een indicatie van je netto inkomen. Vul je omzet, kosten en belastingreserve in en zie direct wat je maandelijks overhoudt.",
  alternates: { canonical: "/zzp-netto-inkomen-berekenen" },
  openGraph: {
    title: "Zzp netto inkomen berekenen",
    description: "Zie een indicatie van wat je maandelijks overhoudt van je omzet.",
    url: "/zzp-netto-inkomen-berekenen",
  },
};

const faq = [
  { vraag: "Waarom is dit een indicatie en geen exact bedrag?", antwoord: "Je werkelijke belasting hangt af van je jaarwinst, aftrekposten zoals zelfstandigenaftrek en mkb-winstvrijstelling, en je persoonlijke situatie. Deze tool rekent met een vast reserveringspercentage als praktische benadering." },
  { vraag: "Moet ik omzet inclusief of exclusief btw invullen?", antwoord: "Exclusief btw. De btw die je ontvangt is niet van jou; die draag je af aan de Belastingdienst. Reken daarom altijd met bedragen exclusief btw." },
  { vraag: "Wat valt onder zakelijke kosten?", antwoord: "Denk aan software, telefoon, werkruimte, vervoer, verzekeringen, administratie en inkoop. Alles wat je zakelijk uitgeeft om je omzet te kunnen draaien." },
  { vraag: "Hoeveel moet ik reserveren voor pensioen en arbeidsongeschiktheid?", antwoord: "Dat is persoonlijk. Veel zzp'ers reserveren hiervoor een vast maandbedrag. Laat je hierover adviseren door een financieel adviseur; deze tool rekent alleen met het bedrag dat jij invult." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="zzp-netto-inkomen-berekenen"
      h1="Zzp netto inkomen berekenen"
      intro="Hoeveel houd je als zzp'er echt over van je omzet? Vul je maandomzet, kosten en belastingreserve in en zie direct een indicatie van je netto inkomen en het bedrag dat je verstandig apart zet."
      tool={<NettoCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            Van je omzet gaan eerst je zakelijke kosten af: dat is je winst voor belasting. Van die winst reserveer je een percentage voor inkomstenbelasting en de bijdrage Zvw. Wat daarna overblijft, minus eventuele verzekeringen, pensioen en buffer, is een indicatie van je netto inkomen.
          </p>
          <p>
            Gebruik dit om te toetsen of je omzetdoel realistisch is en of je genoeg apart zet. Controleer altijd je eigen situatie.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
