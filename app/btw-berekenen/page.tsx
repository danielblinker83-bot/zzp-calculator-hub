import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import BtwCalculator from "./BtwCalculator";

export const metadata: Metadata = {
  title: "Btw berekenen voor zzp'ers | Gratis calculator",
  description:
    "Bereken snel 21%, 9% of 0% btw. Vul je bedrag in en zie direct het bedrag inclusief btw, exclusief btw en het btw-bedrag.",
  alternates: { canonical: "/btw-berekenen" },
  openGraph: {
    title: "Btw berekenen voor zzp'ers | Gratis calculator",
    description: "Bereken snel 21%, 9% of 0% btw, van en naar inclusief.",
    url: "/btw-berekenen",
  },
};

const faq = [
  { vraag: "Welk btw-tarief moet ik kiezen?", antwoord: "In Nederland geldt meestal 21%. Voor bepaalde goederen en diensten, zoals voedingsmiddelen en boeken, geldt 9%. Het nultarief (0%) geldt onder meer bij export binnen de EU. Twijfel je? Controleer de regels van de Belastingdienst of vraag je boekhouder." },
  { vraag: "Hoe reken ik van inclusief naar exclusief btw?", antwoord: "Deel het bedrag inclusief btw door 1,21 bij 21% btw, of door 1,09 bij 9% btw. Deze calculator doet dat automatisch voor je." },
  { vraag: "Moet ik btw op mijn factuur zetten?", antwoord: "Als btw-plichtige ondernemer vermeld je op je factuur het bedrag exclusief btw, het btw-percentage, het btw-bedrag en het totaal inclusief btw. Val je onder de KOR, dan bereken je geen btw." },
  { vraag: "Is deze uitkomst exact?", antwoord: "De berekening zelf is wiskundig correct, maar welk tarief op jouw dienst van toepassing is, hangt af van je situatie. Controleer dit altijd zelf." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="btw-berekenen"
      h1="Btw berekenen"
      intro="Bereken in een paar seconden hoeveel btw je moet rekenen of hebt betaald. Kies of je van exclusief naar inclusief rekent of andersom, selecteer 21%, 9% of 0% en zie direct het btw-bedrag en het totaal."
      tool={<BtwCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            Btw (belasting toegevoegde waarde) reken je als ondernemer bovenop je prijs en draag je af aan de Belastingdienst. Reken je van exclusief naar inclusief, dan tel je het btw-percentage bij je bedrag op. Reken je terug van inclusief naar exclusief, dan deel je door 1,21 (bij 21%) of 1,09 (bij 9%).
          </p>
          <p>
            Handig bij het opstellen van offertes, het controleren van inkoopfacturen of het voorbereiden van je btw-aangifte. Welk tarief voor jouw dienst geldt, is een indicatie: controleer altijd je eigen situatie.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
