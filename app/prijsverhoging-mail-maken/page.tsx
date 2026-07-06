import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import PrijsverhogingGenerator from "./PrijsverhogingGenerator";

export const metadata: Metadata = {
  title: "Prijsverhoging mail maken | Professioneel voorbeeld",
  description:
    "Maak snel een professionele mail over je prijsverhoging. Vul je oude en nieuwe prijs en de ingangsdatum in, kies een toon en kopieer of download de mail.",
  alternates: { canonical: "/prijsverhoging-mail-maken" },
  openGraph: {
    title: "Prijsverhoging mail maken",
    description: "Genereer een professionele mail over je nieuwe prijzen.",
    url: "/prijsverhoging-mail-maken",
  },
};

const faq = [
  { vraag: "Hoe ver van tevoren kondig ik een prijsverhoging aan?", antwoord: "Een gebruikelijke richtlijn is minimaal één tot twee maanden van tevoren. Zo geef je klanten tijd om te reageren en lopende afspraken af te ronden. Controleer ook wat er in je contracten of voorwaarden staat." },
  { vraag: "Moet ik een reden geven?", antwoord: "Het hoeft niet, maar een korte, eerlijke reden zoals gestegen kosten of uitgebreidere dienstverlening maakt de boodschap beter verteerbaar. Overdrijf niet en bied geen excuses aan; een prijsaanpassing is normaal ondernemerschap." },
  { vraag: "Wat doe ik met lopende offertes en contracten?", antwoord: "Respecteer afspraken die al vastliggen. Een gebruikelijke aanpak: alles wat vóór de ingangsdatum is bevestigd, valt onder het oude tarief. Vermeld dit expliciet in je mail." },
  { vraag: "Wordt mijn invoer opgeslagen?", antwoord: "Nee, de mail wordt in je browser samengesteld en nergens opgeslagen of verstuurd." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="prijsverhoging-mail-maken"
      h1="Prijsverhoging mail maken"
      intro="Een prijsverhoging aankondigen voelt spannend, maar hoort bij ondernemen. Vul je huidige en nieuwe prijs, de ingangsdatum en eventueel een reden in. Je krijgt direct een nette mail die je kunt kopiëren of downloaden."
      tool={<PrijsverhogingGenerator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Zo kondig je een prijsverhoging aan</h2>
          <p>
            Wees duidelijk en zelfverzekerd: noem de oude prijs, de nieuwe prijs en de ingangsdatum. Geef eventueel een korte reden en maak expliciet wat er gebeurt met lopende afspraken. Verstuur de mail ruim voor de ingangsdatum.
          </p>
          <p>
            De gegenereerde tekst is een voorbeeld. Pas hem aan op je relatie met de klant en controleer je contractuele afspraken.
          </p>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt een voorbeeldmail. Dit is geen juridisch advies. Controleer je contracten en voorwaarden voordat je prijzen wijzigt."
    />
  );
}
