import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import PrijsverhogingGenerator from "./PrijsverhogingGenerator";

export const metadata: Metadata = {
  title: "Prijsverhoging aankondigen: mail maken | Voorbeeld (2026)",
  description:
    "Maak snel een professionele mail over je prijsverhoging. Vul je oude en nieuwe prijs en de ingangsdatum in, kies een toon en kopieer of download de mail.",
  alternates: { canonical: "/prijsverhoging-mail-maken" },
  openGraph: {
    title: "Prijsverhoging aankondigen: mail maken",
    description: "Genereer een professionele mail over je nieuwe prijzen.",
    url: "/prijsverhoging-mail-maken",
  },
};

const faq = [
  {
    vraag: "Hoe kondig ik een prijsverhoging aan bij mijn klanten?",
    antwoord:
      "Kort en zelfverzekerd: noem het huidige tarief, het nieuwe tarief en de ingangsdatum, geef eventueel één zin uitleg en maak duidelijk wat er met lopende afspraken gebeurt. Verstuur de mail persoonlijk aan vaste klanten en ruim voor de ingangsdatum. De generator hierboven zet die elementen automatisch in een nette mail.",
  },
  {
    vraag: "Hoe ver van tevoren kondig ik een prijsverhoging aan?",
    antwoord:
      "Eén tot twee maanden is gebruikelijk. Zo kunnen klanten hun budget aanpassen en lopende trajecten afronden tegen het oude tarief. Staat er in je contract of algemene voorwaarden een termijn voor tariefwijzigingen, dan is die leidend.",
  },
  {
    vraag: "Moet ik een reden geven voor de prijsverhoging?",
    antwoord:
      "Verplicht is het niet, maar één korte, eerlijke zin werkt goed: gestegen kosten, meer ervaring, uitgebreidere dienstverlening of een jaarlijkse indexatie. Vermijd lange rechtvaardigingen en bied vooral geen excuses aan; een prijsaanpassing is normaal ondernemerschap, geen gunst die je vraagt.",
  },
  {
    vraag: "Hoeveel procent prijsverhoging is redelijk?",
    antwoord:
      "Een jaarlijkse indexatie van enkele procenten volgt de inflatie en verrast niemand. Heb je je tarief jaren niet aangepast of is je ervaring flink gegroeid, dan kan een grotere stap van 10 tot 20 procent gerechtvaardigd zijn; onderbouw die dan wel. Reken vooraf uit wat je nieuwe tarief netto oplevert, zodat je niet binnen een jaar opnieuw moet verhogen.",
  },
  {
    vraag: "Wat doe ik met lopende offertes en contracten?",
    antwoord:
      "Respecteer wat vastligt. De gebruikelijke lijn: alles wat vóór de ingangsdatum is bevestigd, valt onder het oude tarief; nieuwe opdrachten vanaf de ingangsdatum onder het nieuwe. Bij doorlopende contracten mag je alleen tussentijds verhogen als het contract of je voorwaarden daarin voorzien. Vermeld de lijn expliciet in je mail.",
  },
  {
    vraag: "Wat als een klant de prijsverhoging niet accepteert?",
    antwoord:
      "Ga het gesprek aan: soms is een overgangsperiode of een aangepaste scope een oplossing. Blijft de klant weigeren, dan loopt bij een doorlopende overeenkomst de oude afspraak in principe door tot je die volgens de voorwaarden kunt aanpassen of opzeggen. Realiseer je ook: als élke klant zonder morren akkoord gaat, was je waarschijnlijk te goedkoop.",
  },
  {
    vraag: "Wordt mijn invoer opgeslagen?",
    antwoord:
      "Nee. De mail wordt volledig in je browser samengesteld en nergens opgeslagen of verstuurd.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="prijsverhoging-mail-maken"
      h1="Prijsverhoging mail maken"
      intro="Een prijsverhoging aankondigen voelt spannend, maar hoort bij ondernemen. Vul je huidige en nieuwe prijs, de ingangsdatum en eventueel een reden in. Je krijgt direct een nette mail die je kunt kopiëren of downloaden."
      tool={<PrijsverhogingGenerator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">De anatomie van een goede prijsverhogingsmail</h2>
            <p className="mt-2">
              Een goede aankondiging bevat vier elementen: het huidige tarief, het nieuwe tarief,
              de ingangsdatum en de afspraak over lopend werk. Concreet: "Per 1 september 2026
              wijzigt mijn uurtarief van €75 naar €85. Alles wat vóór die datum is bevestigd,
              factureer ik nog tegen het huidige tarief." Meer is er in de kern niet nodig. Een
              korte reden mag erbij, een lange rechtvaardiging werkt averechts: hoe meer je
              uitlegt, hoe meer het klinkt alsof je zelf twijfelt.
            </p>
            <p className="mt-2">
              De toon bepaalt hoe de boodschap landt. Voor vaste klanten met wie je een warme
              relatie hebt, past de vriendelijke variant met een bedankje voor de samenwerking.
              Voor zakelijke opdrachtgevers is de professionele variant logischer. De korte
              variant werkt voor grotere klantenbestanden waar een persoonlijke inleiding
              gekunsteld zou aanvoelen. In alle gevallen geldt: geen excuses, geen
              onderhandelingsopening in de mail zelf.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Waarom een verhoging in 2026 goed te onderbouwen is</h2>
            <p className="mt-2">
              Wie zijn tarief al een paar jaar niet heeft aangepast, is er reëel op achteruitgegaan.
              Naast de gestegen kosten van levensonderhoud en zakelijke lasten is ook de
              belastingdruk voor zzp'ers opgelopen: de zelfstandigenaftrek daalde van €2.470 in
              2025 naar €1.200 in 2026 en zakt in 2027 verder naar €900. Bij dezelfde omzet houd
              je dus minder over dan vorig jaar. Reken daarom eerst uit welk tarief je nodig hebt
              en kondig daarna pas aan; zo voorkom je dat je binnen een jaar opnieuw moet
              verhogen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Timing en aanpak</h2>
            <p className="mt-2">
              Kies een logisch moment: 1 januari is het meest gangbaar, maar de start van een
              nieuw kwartaal of de afronding van een project werkt ook. Stuur de mail één tot twee
              maanden van tevoren en bel je belangrijkste klanten vooraf even persoonlijk; een
              tariefsverhoging hoort niet als verrassing in de inbox van je beste opdrachtgever te
              vallen. Controleer vóór verzending je contracten en algemene voorwaarden: bij
              doorlopende overeenkomsten mag je vaak alleen verhogen op de momenten en volgens de
              procedure die daar staan.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij het aankondigen van een prijsverhoging</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Excuses aanbieden ("sorry dat ik het moet vragen"), waardoor de verhoging als onderhandelbaar overkomt.</li>
              <li>De ingangsdatum of de afspraak over lopend werk vergeten, met discussies over al bevestigde opdrachten als gevolg.</li>
              <li>Te lang wachten en dan één grote sprong moeten maken, in plaats van jaarlijks licht te indexeren.</li>
              <li>De verhoging alleen in een nieuwsbrief of op de website melden en vaste klanten niet persoonlijk informeren.</li>
              <li>Verhogen zonder eerst te berekenen of het nieuwe tarief je doelinkomen wel dekt.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Bepaal vóór je aankondiging wat je eigenlijk moet vragen: de{" "}
              <Link href="/uurtarief-berekenen" className="font-medium text-petrol-700 underline">
                uurtarief calculator
              </Link>{" "}
              rekent met de belastingtarieven van 2026 uit welk tarief bij je doelinkomen hoort.
              Check met de{" "}
              <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
                netto inkomen calculator
              </Link>{" "}
              wat de verhoging je netto per maand oplevert. En verwerk het nieuwe tarief daarna
              direct in je prijsvoorstellen met de{" "}
              <Link href="/offerte-calculator" className="font-medium text-petrol-700 underline">
                offerte calculator
              </Link>
              .
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt een voorbeeldmail. Dit is geen juridisch advies. Controleer je contracten en voorwaarden voordat je prijzen wijzigt."
    />
  );
}
