import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import FactuurtekstGenerator from "./FactuurtekstGenerator";

export const metadata: Metadata = {
  title: "Factuurtekst maken | Professionele factuuromschrijving",
  description:
    "Maak snel een korte, professionele omschrijving voor op je factuur. Kies je stijl en krijg direct drie varianten die je kunt kopiëren.",
  alternates: { canonical: "/factuurtekst-maken" },
  openGraph: {
    title: "Factuurtekst maken",
    description: "Maak korte, professionele omschrijvingen voor je factuur.",
    url: "/factuurtekst-maken",
  },
};

const faq = [
  { vraag: "Wat moet er op een factuur staan?", antwoord: "Onder meer je naam en adres, je KVK- en btw-nummer, factuurnummer en -datum, een omschrijving van de geleverde dienst of het product, het bedrag exclusief btw, het btw-percentage en -bedrag en het totaal. Controleer de actuele eisen bij de Belastingdienst." },
  { vraag: "Hoe specifiek moet mijn omschrijving zijn?", antwoord: "Zo specifiek dat je klant en de Belastingdienst kunnen zien wat er is geleverd en wanneer. Vermijd vage termen als 'diverse werkzaamheden' zonder toelichting." },
  { vraag: "Kan ik meerdere regels op één factuur zetten?", antwoord: "Ja, splits verschillende diensten of periodes gerust in aparte factuurregels. Dat maakt je factuur duidelijker en discussies minder waarschijnlijk." },
  { vraag: "Wordt mijn invoer opgeslagen?", antwoord: "Nee, de teksten worden in je eigen browser samengesteld en nergens opgeslagen." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="factuurtekst-maken"
      h1="Factuurtekst maken"
      intro="Zoek je een nette omschrijving voor op je factuur? Vul je dienst en de periode in, kies je stijl en ontvang direct drie varianten. Kopieer de tekst die past en plak hem in je factuurprogramma."
      tool={<FactuurtekstGenerator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Waarom een goede factuurtekst?</h2>
          <p>
            Een duidelijke omschrijving voorkomt vragen, versnelt betaling en maakt je administratie controleerbaar. Je klant ziet in één regel wat er is geleverd en in welke periode; jij kunt de factuur later moeiteloos koppelen aan de opdracht.
          </p>
          <p>
            De varianten zijn een startpunt. Pas ze gerust aan op je eigen stijl en de afspraken met je klant.
          </p>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt voorbeeldteksten voor je factuuromschrijving. Controleer zelf of je factuur aan alle wettelijke eisen voldoet. Bij twijfel kun je je boekhouder raadplegen."
    />
  );
}
