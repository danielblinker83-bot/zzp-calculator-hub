import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import OfferteCalculator from "./OfferteCalculator";

export const metadata: Metadata = {
  title: "Offerte berekenen | Gratis offerte calculator voor zzp'ers (2026)",
  description:
    "Bereken snel een kloppende offerte: uren maal uurtarief plus materiaal, min korting, plus btw. Met duidelijke prijsopbouw en kopieerbare samenvatting.",
  alternates: { canonical: "/offerte-calculator" },
  openGraph: {
    title: "Offerte berekenen | Gratis calculator voor zzp'ers",
    description: "Reken uren, materiaal en btw om naar een duidelijke offerte.",
    url: "/offerte-calculator",
  },
};

const faq = [
  {
    vraag: "Wat moet er verplicht in een offerte staan?",
    antwoord:
      "Een offerte is vormvrij, maar een goede offerte bevat: je bedrijfsgegevens en KVK-nummer, een duidelijke omschrijving van het werk, de prijs met btw-specificatie, de geldigheidstermijn, de leverings- of uitvoeringstermijn en je betalingsvoorwaarden. Accepteert de klant de offerte, dan is er in principe een overeenkomst; zorg dus dat alles klopt voordat je hem verstuurt.",
  },
  {
    vraag: "Zet ik bedragen inclusief of exclusief btw in mijn offerte?",
    antwoord:
      "Voor zakelijke klanten is exclusief btw gebruikelijk, met het btw-bedrag en het totaal apart vermeld. Richting particulieren ben je verplicht prijzen inclusief btw te communiceren. Vermeld in beide gevallen het btw-percentage, zodat er achteraf geen discussie ontstaat.",
  },
  {
    vraag: "Hoe lang is een offerte geldig?",
    antwoord:
      "Dat bepaal je zelf, maar zet het er altijd in. Een termijn van 14 of 30 dagen is gebruikelijk. Zonder termijn kan een klant maanden later nog akkoord gaan tegen je oude prijs, terwijl je kosten of tarieven inmiddels gestegen zijn.",
  },
  {
    vraag: "Reken ik korting vóór of na de btw?",
    antwoord:
      "Korting trek je af van het bedrag exclusief btw; daarna bereken je de btw over het verlaagde bedrag. Bij €2.200 aan werk en 10% korting reken je dus 21% btw over €1.980, niet over €2.200. Deze calculator past dat automatisch goed toe.",
  },
  {
    vraag: "Moet ik voorrijkosten of reiskosten apart vermelden?",
    antwoord:
      "Het mag in je uurtarief verwerkt zitten, maar apart vermelden voorkomt discussie. Zet reiskosten of voorrijkosten als losse regel onder extra kosten. Let op: over doorberekende reiskosten reken je hetzelfde btw-tarief als over je hoofddienst.",
  },
  {
    vraag: "Wat is het verschil tussen een offerte en een vrijblijvende prijsindicatie?",
    antwoord:
      "Een offerte is een aanbod: accepteert de klant hem binnen de geldigheidstermijn, dan zit je eraan vast. Een prijsindicatie of richtprijs schept meer ruimte, maar mag bij uitvoering niet onbeperkt overschreden worden; bij een richtprijs geldt als vuistregel maximaal zo'n 10% overschrijding. Benoem dus expliciet wat je afgeeft.",
  },
  {
    vraag: "Is de uitkomst van deze calculator een officiële offerte?",
    antwoord:
      "Nee, dit is een rekenhulp voor de prijsopbouw. Gebruik de samenvatting als basis en vul hem aan met je bedrijfsgegevens, de omschrijving van het werk, je voorwaarden en de geldigheidstermijn voordat je hem naar de klant stuurt.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="offerte-calculator"
      h1="Offerte berekenen"
      intro="Snel een kloppende offerte opstellen? Vul je uren, uurtarief, materiaal en eventuele korting in. Je ziet direct het subtotaal, het btw-bedrag en het totaal inclusief btw, met een samenvatting die je zo in je offerte plakt."
      tool={<OfferteCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe de berekening werkt</h2>
            <p className="mt-2">
              De calculator bouwt je prijs op zoals een klant hem wil lezen. Eerst de arbeid: uren
              maal uurtarief. Stel dat je 24 uur werk inschat tegen €75 per uur, dan is dat €1.800.
              Daar komen materiaalkosten bij, bijvoorbeeld €350, en extra kosten zoals voorrijkosten
              of parkeerkosten, zeg €50. Het subtotaal is dan €2.200 exclusief btw.
            </p>
            <p className="mt-2">
              Geef je 10% korting, dan gaat die van het subtotaal af: €2.200 min €220 is €1.980.
              Over dat bedrag wordt de btw berekend, bij 21% is dat €415,80. Het totaal voor de
              klant komt daarmee op €2.395,80 inclusief btw. De volgorde is belangrijk: korting
              eerst, btw daarna. Zo schrijft de Belastingdienst het voor en zo verwacht je klant
              het ook.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Welk btw-tarief kies je in 2026?</h2>
            <p className="mt-2">
              De btw-tarieven zijn in 2026 ongewijzigd: 21% is het algemene tarief en geldt voor
              de meeste zzp-diensten, van klussen tot advieswerk. Het verlaagde tarief van 9%
              geldt voor een beperkte lijst, waaronder kappersdiensten en het schilderen of
              stukadoren van woningen ouder dan twee jaar. Het nultarief is vooral voor export en
              intracommunautaire leveringen. Val je onder de kleineondernemersregeling (KOR,
              omzetgrens €20.000 per jaar), dan vermeld je helemaal geen btw op je offerte en
              factuur, maar een verwijzing naar de vrijstelling.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Een offerte die wint zonder de goedkoopste te zijn</h2>
            <p className="mt-2">
              Een duidelijke prijsopbouw wekt vertrouwen. Splits arbeid, materiaal en bijkomende
              kosten, zodat de klant ziet waar het geld heen gaat. Wees realistisch met je
              ureninschatting: te scherp inschatten betekent onbetaald bijwerken of een vervelend
              meerwerkgesprek. Bouw voor onzekere klussen liever een stelpost of bandbreedte in en
              benoem expliciet wat er buiten de prijs valt. En geef je korting, laat dan het
              oorspronkelijke bedrag en de korting allebei zien; zo blijft de waarde van je werk
              zichtbaar en voorkom je dat de kortingsprijs je nieuwe standaardprijs wordt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten in offertes</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>De btw over het bedrag vóór korting berekenen, waardoor het totaal te hoog uitvalt.</li>
              <li>Geen geldigheidstermijn opnemen, zodat een klant maanden later nog akkoord kan gaan tegen oude prijzen.</li>
              <li>Niet-declarabele tijd (reistijd, afstemming, oplevering) vergeten in de ureninschatting.</li>
              <li>Voor particulieren alleen prijzen exclusief btw noemen; dat is niet toegestaan en zorgt voor discussie bij de factuur.</li>
              <li>Niet vastleggen wat er buiten de offerte valt, waardoor meerwerk onbetaald blijft.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Twijfel je of het uurtarief in je offerte wel hoog genoeg is om netto over te houden
              wat je wilt? Reken het na met de{" "}
              <Link href="/uurtarief-berekenen" className="font-medium text-petrol-700 underline">
                uurtarief calculator
              </Link>
              , die met de belastingtarieven van 2026 rekent. Wil je alleen snel een btw-bedrag
              controleren, gebruik dan de{" "}
              <Link href="/btw-berekenen" className="font-medium text-petrol-700 underline">
                btw calculator
              </Link>
              . En is de offerte geaccepteerd en het werk gedaan, dan maak je met{" "}
              <Link href="/factuurtekst-maken" className="font-medium text-petrol-700 underline">
                factuurtekst maken
              </Link>{" "}
              in een paar klikken een nette factuuromschrijving.
            </p>
          </section>
        </div>
      }
      faq={faq}
    />
  );
}
