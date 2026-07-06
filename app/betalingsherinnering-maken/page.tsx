import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import HerinneringGenerator from "./HerinneringGenerator";

export const metadata: Metadata = {
  title: "Betalingsherinnering maken | Gratis voorbeeldmail (2026)",
  description:
    "Maak in 30 seconden een nette Nederlandse betalingsherinnering. Kies een vriendelijke, zakelijke of dringende toon en kopieer of download de mail direct.",
  alternates: { canonical: "/betalingsherinnering-maken" },
  openGraph: {
    title: "Betalingsherinnering maken | Gratis voorbeeldmail",
    description: "Genereer een nette Nederlandse betalingsherinnering.",
    url: "/betalingsherinnering-maken",
  },
};

const faq = [
  {
    vraag: "Wanneer stuur ik een eerste betalingsherinnering?",
    antwoord:
      "Een gebruikelijke richtlijn is enkele dagen tot een week na de vervaldatum van de factuur. Wacht niet te lang: hoe ouder de factuur, hoe lastiger het gesprek. Houd de eerste herinnering vriendelijk, want in de meeste gevallen is de factuur simpelweg vergeten of blijven hangen in een goedkeuringsproces.",
  },
  {
    vraag: "Wat moet er verplicht in een betalingsherinnering staan?",
    antwoord:
      "Zorg dat de klant de factuur direct kan terugvinden en betalen: vermeld het factuurnummer, het openstaande bedrag, de oorspronkelijke vervaldatum en een nieuwe betaaltermijn. Wil je bij een particuliere klant later incassokosten kunnen rekenen, dan is een formele aanmaning met een termijn van minimaal 14 dagen ná ontvangst en een vermelding van de incassokosten wettelijk verplicht.",
  },
  {
    vraag: "Mag ik incassokosten in rekening brengen?",
    antwoord:
      "Bij particuliere klanten mag dat pas nadat je een kosteloze aanmaning hebt gestuurd met een betaaltermijn van minimaal 14 dagen, waarin je de hoogte van de incassokosten aankondigt. De wettelijke staffel begint bij 15% over de eerste €2.500, met een minimum van €40 en een maximum van €6.775. Bij zakelijke klanten mag je de €40 en de kosten volgens de staffel direct na het verstrijken van de betaaltermijn rekenen, zonder aanmaning vooraf.",
  },
  {
    vraag: "Mag ik rente rekenen over een te late betaling?",
    antwoord:
      "Ja. Voor zakelijke klanten geldt de wettelijke handelsrente, per 1 januari 2026 10,15% per jaar, automatisch vanaf het verstrijken van de betaaltermijn. Voor particuliere klanten geldt de gewone wettelijke rente van 4% (2026), meestal pas na een ingebrekestelling. In de praktijk rekenen veel zzp'ers pas rente als een klant echt niet beweegt; het is een recht, geen verplichting.",
  },
  {
    vraag: "Welke betaaltermijn geldt er eigenlijk voor mijn factuur?",
    antwoord:
      "De termijn die je bent overeengekomen, bijvoorbeeld in je offerte of algemene voorwaarden; 14 of 30 dagen is gebruikelijk. Is er niets afgesproken, dan geldt bij zakelijke klanten een wettelijke termijn van 30 dagen. Grote bedrijven mogen aan mkb-leveranciers en zzp'ers geen langere betaaltermijn dan 30 dagen opleggen.",
  },
  {
    vraag: "Wat als de klant na meerdere herinneringen nog niet betaalt?",
    antwoord:
      "Stuur dan een formele aanmaning (ingebrekestelling) met een laatste termijn, en kondig aan dat je daarna incassokosten en rente rekent. Levert ook dat niets op, dan kun je een incassobureau, deurwaarder of jurist inschakelen, of zelf naar de kantonrechter voor vorderingen tot €25.000. Bewaar kopieën van facturen, herinneringen en verzendbewijzen.",
  },
  {
    vraag: "Bel ik de klant of stuur ik een mail?",
    antwoord:
      "Doe allebei. Een mail geeft bewijs, een telefoontje geeft duidelijkheid: vaak hoor je dan meteen waarom er niet betaald is en wanneer het geld komt. Noteer wat er is toegezegd en bevestig dat per mail, zodat je dossier compleet blijft.",
  },
  {
    vraag: "Wordt mijn invoer opgeslagen?",
    antwoord:
      "Nee. De tekst wordt volledig in je browser samengesteld en nergens opgeslagen of verstuurd. Je gegevens en die van je klant blijven van jou.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="betalingsherinnering-maken"
      h1="Betalingsherinnering maken"
      intro="Een openstaande factuur en geen zin om zelf een mail te formuleren? Vul de klantnaam, het factuurnummer, bedrag en de vervaldatum in, kies een toon en je hebt direct een nette Nederlandse betalingsherinnering om te kopiëren of downloaden."
      tool={<HerinneringGenerator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Een goede betalingsherinnering: kort, feitelijk en compleet</h2>
            <p className="mt-2">
              Het doel van een herinnering is dat de klant de factuur binnen een minuut kan
              terugvinden en betalen. Daarom horen er vier dingen in: het factuurnummer, het
              openstaande bedrag, de oorspronkelijke vervaldatum en een concrete nieuwe termijn,
              bijvoorbeeld "binnen 7 dagen". Alles wat daar bovenop komt, zoals lange excuses of
              verwijten, maakt de mail zwakker. De generator hierboven zet die elementen
              automatisch op de juiste plek.
            </p>
            <p className="mt-2">
              Kies de toon bij de fase. De eerste herinnering is vriendelijk: de meeste facturen
              worden simpelweg vergeten, en je wilt de relatie niet beschadigen om een slordigheid.
              Reageert de klant niet, dan volgt een zakelijke herinnering met een duidelijke
              termijn. Pas bij de derde stap wordt de toon dringend en benoem je de vervolgstappen.
              Escaleer in tempo, niet in emotie: de tekst blijft ook in de dringende variant
              correct en zonder dreigende taal die je later kan opbreken.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">De regels in 2026: aanmaning, incassokosten en rente</h2>
            <p className="mt-2">
              Voor particuliere klanten schrijft de wet een vaste route voor. Voordat je
              incassokosten mag rekenen, stuur je een kosteloze aanmaning (vaak de
              "veertiendagenbrief" genoemd) waarin je een betaaltermijn van minimaal 14 dagen ná
              ontvangst geeft én de hoogte van de incassokosten aankondigt. Betaalt de klant dan
              nog niet, dan mag je kosten rekenen volgens de wettelijke staffel: 15% over de
              eerste €2.500 met een minimum van €40, aflopend tot 0,5% over hogere bedragen, met
              een maximum van €6.775.
            </p>
            <p className="mt-2">
              Bij zakelijke klanten ben je vrijer: daar mag je na het verstrijken van de
              betaaltermijn direct incassokosten rekenen en loopt de wettelijke handelsrente van
              10,15% per jaar (stand 1 januari 2026, halfjaarlijks herzien) automatisch. Voor
              particulieren geldt de gewone wettelijke rente, in 2026 verlaagd van 6% naar 4%.
              Een herinnering of aanmaning is geen incasso: je hoeft er niets voor te betalen en
              er komt geen bureau aan te pas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Voorkom herinneringen met een strakke factuurroutine</h2>
            <p className="mt-2">
              Wie laat factureert, wordt laat betaald. Stuur je factuur direct na oplevering,
              vermeld een expliciete betaaltermijn en maak betalen makkelijk met een betaallink of
              QR-code. Spreek bij grotere klussen deelbetalingen af, zodat er nooit één groot
              bedrag openstaat. En agendeer een vast wekelijks moment om openstaande facturen na te
              lopen; dan gaat een herinnering de deur uit als de factuur een week over tijd is, in
              plaats van na twee maanden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij betalingsherinneringen</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Het factuurnummer of de vervaldatum vergeten, waardoor de klant moet gaan zoeken en de betaling weer blijft liggen.</li>
              <li>Geen concrete nieuwe termijn noemen. "Zo spoedig mogelijk" is voor niemand een deadline.</li>
              <li>Bij particulieren incassokosten rekenen zonder eerst de verplichte veertiendagenbrief te sturen; die kosten zijn dan niet afdwingbaar.</li>
              <li>Dreigen met stappen die je niet van plan bent te zetten. Dat kost geloofwaardigheid bij de volgende herinnering.</li>
              <li>Alleen mailen en nooit bellen, terwijl één telefoontje vaak sneller duidelijk maakt waarom er niet betaald wordt.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Wil je discussies over facturen vóór zijn, zorg dan dat de factuur zelf glashelder
              is; met{" "}
              <Link href="/factuurtekst-maken" className="font-medium text-petrol-700 underline">
                factuurtekst maken
              </Link>{" "}
              schrijf je in een paar klikken een duidelijke omschrijving. Controleer met de{" "}
              <Link href="/btw-berekenen" className="font-medium text-petrol-700 underline">
                btw calculator
              </Link>{" "}
              of het bedrag op je factuur klopt. En verhoog je binnenkort je prijzen voor klanten
              die structureel traag betalen, dan helpt de{" "}
              <Link href="/prijsverhoging-mail-maken" className="font-medium text-petrol-700 underline">
                prijsverhoging mail generator
              </Link>{" "}
              je aan een nette aankondiging.
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt een voorbeeldtekst. Dit is geen juridisch advies. De genoemde bedragen en percentages (incassostaffel, wettelijke rente en handelsrente) zijn de stand van 2026; voor incassotrajecten en ingebrekestellingen kun je een jurist of incassospecialist raadplegen."
    />
  );
}
