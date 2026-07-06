import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import FactuurtekstGenerator from "./FactuurtekstGenerator";

export const metadata: Metadata = {
  title: "Factuurtekst maken | Professionele factuuromschrijving (2026)",
  description:
    "Maak snel een korte, professionele omschrijving voor op je factuur. Kies je stijl en krijg direct drie varianten die je kunt kopiëren naar je factuurprogramma.",
  alternates: { canonical: "/factuurtekst-maken" },
  openGraph: {
    title: "Factuurtekst maken | Professionele factuuromschrijving",
    description: "Maak korte, professionele omschrijvingen voor je factuur.",
    url: "/factuurtekst-maken",
  },
};

const faq = [
  {
    vraag: "Wat moet er verplicht op een factuur staan?",
    antwoord:
      "De Belastingdienst stelt vaste eisen: je volledige naam en die van je klant, je adres, je KVK-nummer, je btw-identificatienummer, de factuurdatum, een opeenvolgend factuurnummer, een omschrijving van de geleverde goederen of diensten, de leverdatum of periode, het bedrag exclusief btw, het btw-tarief en het btw-bedrag. Bij een factuur onder de €100 inclusief btw gelden vereenvoudigde eisen.",
  },
  {
    vraag: "Hoe specifiek moet mijn factuuromschrijving zijn?",
    antwoord:
      "Zo specifiek dat je klant én de Belastingdienst kunnen zien wat er is geleverd en wanneer. 'Diverse werkzaamheden' zonder toelichting is te vaag en roept bij een controle vragen op. 'Webdesign homepage en contactpagina, juni 2026' is wel duidelijk. Verwijs waar mogelijk naar de offerte of opdrachtbevestiging.",
  },
  {
    vraag: "Kan ik meerdere regels op één factuur zetten?",
    antwoord:
      "Ja, en bij verschillende diensten of periodes is dat ook verstandig. Aparte regels voor bijvoorbeeld ontwerp, uitvoering en reiskosten maken de factuur controleerbaar en voorkomen discussie. Gelden er verschillende btw-tarieven, dan moet je die sowieso per regel uitsplitsen.",
  },
  {
    vraag: "Moet ik uren specificeren op mijn factuur?",
    antwoord:
      "Het hoeft niet, maar bij facturen op uurbasis voorkomt een urenspecificatie discussie. Je kunt de specificatie ook als bijlage meesturen en op de factuur volstaan met het totaal en een verwijzing. Spreek met vaste klanten af welke vorm zij nodig hebben voor hun administratie.",
  },
  {
    vraag: "Wat zet ik op mijn factuur als ik onder de KOR val?",
    antwoord:
      "Dan bereken je geen btw en vermeld je geen btw-bedrag of -tarief, maar zet je op de factuur dat je bent vrijgesteld op grond van de kleineondernemersregeling, bijvoorbeeld: 'factuur vrijgesteld van OB o.g.v. artikel 25 Wet OB'. De omzetgrens van de KOR is in 2026 €20.000 per kalenderjaar.",
  },
  {
    vraag: "Mag ik een factuur achteraf aanpassen?",
    antwoord:
      "Nee, een verstuurde factuur pas je niet aan. Klopt er iets niet, dan stuur je een creditfactuur die de oude (deels) tegenboekt en daarna een nieuwe, correcte factuur. Zo blijft je factuurnummering doorlopend en je administratie sluitend.",
  },
  {
    vraag: "Wordt mijn invoer opgeslagen?",
    antwoord:
      "Nee. De teksten worden volledig in je eigen browser samengesteld en nergens opgeslagen of verstuurd.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="factuurtekst-maken"
      h1="Factuurtekst maken"
      intro="Zoek je een nette omschrijving voor op je factuur? Vul je dienst en de periode in, kies je stijl en ontvang direct drie varianten. Kopieer de tekst die past en plak hem in je factuurprogramma."
      tool={<FactuurtekstGenerator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Waarom de omschrijving op je factuur ertoe doet</h2>
            <p className="mt-2">
              De omschrijving is het eerste dat een klant leest voordat hij betaalt, en het eerste
              waar een controleur van de Belastingdienst naar kijkt. Een vage regel als "diverse
              werkzaamheden" leidt bij de klant tot vragen (en dus tot latere betaling) en maakt je
              administratie moeilijk controleerbaar. Een goede omschrijving beantwoordt drie
              vragen in één regel: wat is er geleverd, voor wie of welk project, en in welke
              periode. Vergelijk "advieswerk" met "adviestraject herinrichting magazijn, 3
              sessies, juni 2026": de tweede variant betaalt sneller en staat sterker bij
              discussie.
            </p>
            <p className="mt-2">
              De generator maakt drie varianten in de stijl die je kiest: kort voor wie een strakke
              regel in het factuurprogramma wil, professioneel voor de gemiddelde zakelijke
              factuur, en uitgebreid voor opdrachten waar je de afronding en eventuele
              vervolgafspraken expliciet wilt vastleggen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">De wettelijke eisen aan je factuur</h2>
            <p className="mt-2">
              De omschrijving is één van de verplichte onderdelen. Een volledige factuur bevat
              daarnaast je naam en adres en die van je klant, je KVK-nummer, je
              btw-identificatienummer, een opeenvolgend factuurnummer, de factuurdatum, de
              leverdatum of periode, het bedrag exclusief btw, het toegepaste btw-tarief en het
              btw-bedrag. Die eisen zijn in 2026 niet veranderd. Factureer je aan een klant in een
              ander EU-land met verlegde btw, dan vermeld je ook het btw-nummer van de klant en
              "btw verlegd". Val je onder de kleineondernemersregeling, dan vervangt een
              KOR-vermelding de btw-regels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Zo bouw je een omschrijving op</h2>
            <p className="mt-2">
              Begin met de dienst of het product, zo concreet mogelijk: niet "teksten", maar
              "webteksten homepage en dienstenpagina". Voeg de periode of leverdatum toe, want die
              is verplicht en voorkomt verwarring bij opdrachten die over een maandgrens heen
              lopen. Verwijs bij grotere klussen naar de offerte ("conform offerte 2026-014"), dan
              is de koppeling tussen afspraak en factuur direct te leggen. En splits ongelijke
              dingen: uren, materiaal en reiskosten horen elk op hun eigen regel, zeker als er
              verschillende btw-tarieven gelden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten in factuurteksten</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Vage omschrijvingen zonder periode, waardoor de klant intern moet navragen wat er gefactureerd wordt.</li>
              <li>De leverdatum of periode weglaten, terwijl die wettelijk verplicht is.</li>
              <li>Verschillende diensten of btw-tarieven op één regel samenvoegen.</li>
              <li>Jargon of interne projectcodes gebruiken die de boekhouding van de klant niet herkent.</li>
              <li>Een verstuurde factuur stilletjes aanpassen in plaats van een creditfactuur te sturen.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Controleer voordat je factureert of de bedragen kloppen: de{" "}
              <Link href="/btw-berekenen" className="font-medium text-petrol-700 underline">
                btw calculator
              </Link>{" "}
              rekent exclusief en inclusief btw voor je om. Komt de factuur voort uit een
              prijsvoorstel, dan zorgt de{" "}
              <Link href="/offerte-calculator" className="font-medium text-petrol-700 underline">
                offerte calculator
              </Link>{" "}
              dat offerte en factuur dezelfde opbouw hebben. En blijft de betaling uit, dan maak je
              met{" "}
              <Link href="/betalingsherinnering-maken" className="font-medium text-petrol-700 underline">
                betalingsherinnering maken
              </Link>{" "}
              in een halve minuut een nette herinnering.
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt voorbeeldteksten voor je factuuromschrijving. Controleer zelf of je factuur aan alle wettelijke eisen voldoet. Bij twijfel kun je je boekhouder raadplegen."
    />
  );
}
