import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import HerinneringGenerator from "./HerinneringGenerator";

export const metadata: Metadata = {
  title: "Betalingsherinnering maken | Gratis voorbeeldmail",
  description:
    "Maak in 30 seconden een nette Nederlandse betalingsherinnering. Kies een vriendelijke, zakelijke of dringende toon en kopieer of download de mail direct.",
  alternates: { canonical: "/betalingsherinnering-maken" },
  openGraph: {
    title: "Betalingsherinnering maken",
    description: "Genereer een nette Nederlandse betalingsherinnering.",
    url: "/betalingsherinnering-maken",
  },
};

const faq = [
  { vraag: "Wanneer stuur ik een eerste herinnering?", antwoord: "Een gebruikelijke richtlijn is enkele dagen tot een week na de vervaldatum. Houd de eerste herinnering vriendelijk; vaak is een factuur simpelweg vergeten." },
  { vraag: "Mag ik incassokosten rekenen?", antwoord: "Bij particuliere klanten moet je eerst een kosteloze aanmaning sturen met een termijn van minimaal 14 dagen voordat je wettelijke incassokosten mag rekenen. Bij zakelijke klanten gelden andere regels. Controleer je eigen situatie." },
  { vraag: "Wat als de klant na meerdere herinneringen niet betaalt?", antwoord: "Dan kun je een formele aanmaning sturen, een betalingsregeling voorstellen of een incassobureau of jurist inschakelen. Bewaar altijd kopieën van je facturen en herinneringen." },
  { vraag: "Wordt mijn invoer opgeslagen?", antwoord: "Nee. De tekst wordt in je browser samengesteld en nergens opgeslagen of verstuurd." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="betalingsherinnering-maken"
      h1="Betalingsherinnering maken"
      intro="Een openstaande factuur en geen zin om zelf een mail te formuleren? Vul de klantnaam, het factuurnummer, bedrag en de vervaldatum in, kies een toon en je hebt direct een nette Nederlandse betalingsherinnering."
      tool={<HerinneringGenerator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Zo gebruik je de herinnering</h2>
          <p>
            Begin vriendelijk: de meeste klanten betalen na één nette herinnering. Blijft betaling uit, dan kies je de zakelijke of dringende variant. Vermeld altijd het factuurnummer, het bedrag en de oorspronkelijke vervaldatum, zodat de klant de factuur direct kan terugvinden.
          </p>
          <p>
            De gegenereerde tekst is een voorbeeld, geen juridisch document. Pas de tekst aan waar nodig en controleer de gegevens voor verzending.
          </p>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt een voorbeeldtekst. Dit is geen juridisch advies. Voor vragen over incasso, aanmaningen of wettelijke termijnen kun je een jurist of incassospecialist raadplegen."
    />
  );
}
