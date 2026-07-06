import type { Metadata } from "next";
import CalculatorLayout from "@/components/CalculatorLayout";
import BelastingCalculator from "./BelastingCalculator";

export const metadata: Metadata = {
  title: "Hoeveel belasting apart zetten als zzp'er? | Calculator",
  description:
    "Bereken hoeveel je als zzp'er per maand, kwartaal en jaar apart zet voor belasting. Vul je winst en reserveringspercentage in en zie direct het bedrag.",
  alternates: { canonical: "/belasting-reserveren-zzp" },
  openGraph: {
    title: "Hoeveel belasting apart zetten als zzp'er?",
    description: "Bereken je belastingreserve per maand, kwartaal en jaar.",
    url: "/belasting-reserveren-zzp",
  },
};

const faq = [
  { vraag: "Hoeveel procent moet ik apart zetten?", antwoord: "Een veelgebruikte richtlijn is 30 tot 40 procent van je winst. Bij een lagere winst kan het door aftrekposten minder zijn; bij een hoge winst juist meer. Controleer je eigen situatie of vraag je boekhouder." },
  { vraag: "Telt btw ook mee als belastingreserve?", antwoord: "Nee, btw is geen kostenpost maar geld dat je int voor de Belastingdienst. Zet het btw-bedrag van je facturen direct apart, bovenop je reserve voor inkomstenbelasting." },
  { vraag: "Waar zet ik dit geld het beste neer?", antwoord: "Veel ondernemers gebruiken een aparte spaar- of bufferrekening die ze niet voor uitgaven gebruiken. Zo blijft het gereserveerde bedrag zichtbaar gescheiden van je werkkapitaal." },
  { vraag: "Wanneer betaal ik inkomstenbelasting als zzp'er?", antwoord: "Na je aangifte over het afgelopen jaar, of tussentijds via een voorlopige aanslag. Btw draag je meestal per kwartaal af. Een maandelijkse reserve voorkomt dat je in één keer een groot bedrag moet ophoesten." },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="belasting-reserveren-zzp"
      h1="Hoeveel belasting apart zetten als zzp'er?"
      intro="Voorkom verrassingen bij je aangifte. Vul je gemiddelde maandwinst en je gewenste reserveringspercentage in en zie direct hoeveel je per maand, per kwartaal en per jaar apart zet, eventueel inclusief je btw-afdracht."
      tool={<BelastingCalculator />}
      uitleg={
        <div className="space-y-3 text-slate-600">
          <h2 className="text-xl font-bold text-ink">Wat betekent dit?</h2>
          <p>
            Als zzp'er betaal je inkomstenbelasting en bijdrage Zvw over je winst, vaak pas maanden na afloop van het jaar. Door maandelijks een vast percentage van je winst te reserveren, spreid je die last en houd je overzicht.
          </p>
          <p>
            Het percentage is een richtlijn: je werkelijke belastingdruk hangt af van je jaarwinst en aftrekposten. Voor persoonlijk belastingadvies kun je contact opnemen met een boekhouder of belastingadviseur.
          </p>
        </div>
      }
      faq={faq}
    />
  );
}
