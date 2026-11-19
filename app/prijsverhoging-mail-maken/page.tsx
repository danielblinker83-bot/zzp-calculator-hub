import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import PrijsverhogingGenerator from "./PrijsverhogingGenerator";

export const metadata: Metadata = {
  title: "Prijsverhoging aankondigen per mail | Voorbeeld en generator",
  description:
    "Maak een prijsverhogingsmail met je oude tarief, nieuwe tarief en ingangsdatum. Met een voorbeeld voor zzp’ers en een controle voor lopende afspraken.",
  alternates: { canonical: "/prijsverhoging-mail-maken" },
  openGraph: {
    title: "Prijsverhoging aankondigen per mail",
    description: "Maak een mail met een duidelijke tariefwijziging en ingangsdatum. Bekijk het voorbeeld en controleer je lopende afspraken.",
    url: "/prijsverhoging-mail-maken",
  },
};

const faq = [
  {
    vraag: "Hoe schrijf ik een mail over een prijsverhoging?",
    antwoord:
      "Noem het huidige en nieuwe tarief, de eenheid zoals per uur of per opdracht, en de ingangsdatum. Leg uit op welk werk het nieuwe tarief van toepassing is. Voeg eventueel een korte reden toe en geef de klant een manier om vragen te stellen.",
  },
  {
    vraag: "Hoe lang van tevoren stuur ik de prijsverhogingsmail?",
    antwoord:
      "Controleer eerst de termijn en procedure in je bestaande prijsafspraak. Kies de verzenddatum zo dat je aan die afspraak voldoet en je klant tijd heeft om vragen te stellen. KVK adviseert op tijd te communiceren. De termijn hangt af van je overeenkomst.",
  },
  {
    vraag: "Wat schrijf ik over lopende opdrachten?",
    antwoord:
      "Schrijf concreet wat je met al bevestigde opdrachten doet. De generator gebruikt als voorbeeld dat eerdere afspraken tegen het oude tarief blijven lopen. Controleer of dat past bij de werkelijke afspraken met deze klant en pas de gekopieerde tekst aan vóór verzending.",
  },
  {
    vraag: "Hoeveel procent gaat mijn prijs omhoog?",
    antwoord:
      "Trek de oude prijs af van de nieuwe prijs, deel het verschil door de oude prijs en vermenigvuldig met 100. Van €75 naar €81 is €6 extra. €6 gedeeld door €75 is 0,08, dus de verhoging is 8%. Deze formule werkt bij een oude prijs groter dan nul.",
  },
  {
    vraag: "Moet ik voor elke klant dezelfde mail gebruiken?",
    antwoord:
      "Controleer per klant de prijsafspraak, ingangsdatum en lopende opdrachten. Je kunt dezelfde opbouw gebruiken, maar pas de bedragen en de uitleg aan de ontvanger aan. KVK adviseert bij een kleine groep of belangrijke klanten een persoonlijke benadering.",
  },
  {
    vraag: "Verstuurt deze tool de mail naar mijn klant?",
    antwoord:
      "De tool maakt een tekst in je browser. Je kunt die kopiëren of als tekstbestand downloaden. Daarna controleer en verstuur je de mail zelf vanuit je eigen e-mailprogramma.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <CalculatorLayout
      slug="prijsverhoging-mail-maken"
      h1="Prijsverhoging mail maken"
      intro="Kondig je prijsverhoging aan met het oude tarief, het nieuwe tarief en de ingangsdatum. Vul hieronder je gegevens in en kies een toon. Controleer daarna de zin over lopende opdrachten, voeg zo nodig ‘per uur’ en de btw-basis toe, en kopieer de mail naar je eigen e-mailprogramma."
      tool={<PrijsverhogingGenerator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Voorbeeldmail voor een nieuw uurtarief</h2>
            <p className="mt-2">
              Dit fictieve voorbeeld gaat over nieuwe zakelijke opdrachten. Studio Vermeer
              rekent voortaan €81 per uur in plaats van €75. Eerder bevestigde opdrachten
              worden in dit voorbeeld tegen €75 uitgevoerd. Pas de tekst aan als jouw
              afspraken anders zijn.
            </p>
            <blockquote className="mt-3 space-y-3 rounded-xl border-l-4 border-petrol-700 bg-mist p-4 text-sm leading-relaxed">
              <p className="font-semibold">Onderwerp — Nieuw uurtarief voor opdrachten vanaf 1 januari 2027</p>
              <p>Beste Robin,</p>
              <p>
                Voor nieuwe opdrachten die we vanaf 1 januari 2027 afspreken, wijzigt mijn
                uurtarief van €75 naar €81 exclusief btw. Ik pas mijn tarief aan vanwege
                gestegen bedrijfskosten.
              </p>
              <p>
                De opdrachten die we al hebben bevestigd, voer ik uit tegen het afgesproken
                tarief van €75 exclusief btw per uur.
              </p>
              <p>Heb je vragen over een nieuwe of lopende opdracht? Laat het weten, dan bespreken we die samen.</p>
              <p>Met vriendelijke groet,<br />Studio Vermeer</p>
            </blockquote>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink">Wat vul je in de generator in?</h2>
            <ol className="mt-2 list-decimal space-y-2 pl-5">
              <li>Vul je bedrijfsnaam en eventueel de naam van je contactpersoon in.</li>
              <li>Gebruik voor de oude en nieuwe prijs dezelfde eenheid en btw-basis. Vergelijk bijvoorbeeld twee uurprijzen exclusief btw.</li>
              <li>Noem een exacte ingangsdatum. Controleer hoe die datum zich verhoudt tot het moment waarop een opdracht wordt bevestigd of uitgevoerd.</li>
              <li>Voeg alleen een reden toe die klopt voor je bedrijf. Het redenveld is optioneel.</li>
              <li>Kies een toon, maak de mail en controleer de uitkomst voordat je die kopieert of downloadt.</li>
            </ol>
            <p className="mt-3">
              De generator kent je contracten niet. Voeg na het kopiëren toe of het bedrag
              per uur, per bezoek of per opdracht geldt. Benoem ook of je bedragen inclusief
              of exclusief btw vermeldt.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink">Controleer bestaande prijsafspraken</h2>
            <p className="mt-2">
              Kijk vóór verzending welke prijs je al hebt afgesproken, welke
              aankondigingstermijn geldt en op welk werk een wijziging van toepassing is.
              Een offerte, een doorlopende samenwerking en een nieuwe opdracht kunnen
              verschillende afspraken bevatten. Beschrijf in de mail wat jullie voor die
              situatie afspreken.
            </p>
            <h3 className="mt-4 font-bold text-ink">Stuur een persoonlijk bericht bij vragen over de overgang</h3>
            <p className="mt-2">
              Twijfel je hoe een lopende opdracht over de ingangsdatum heen wordt afgerekend?
              Bespreek dat eerst met je opdrachtgever en bevestig de uitkomst. KVK adviseert
              belangrijke klanten persoonlijk te informeren en op tijd te communiceren.
              Dat geeft ruimte om vragen over de opdracht en planning te beantwoorden.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink">Reken het bedrag na voordat je de mail verstuurt</h2>
            <p className="mt-2">
              In het voorbeeld is €81 − €75 = €6. Deel €6 door €75 en vermenigvuldig met 100.
              De verhoging is dus 8%. Dat percentage beschrijft dit rekenvoorbeeld.
              Bereken voor je eigen bedrijf welk tarief past bij de kosten en de uren die
              je verwacht te factureren met de{" "}
              <Link href="/uurtarief-berekenen" className={link}>uurtariefcalculator</Link>.
            </p>
            <p className="mt-2">
              Volg je een afgesproken CBS-index? Lees hoe je je{" "}
              <Link href="/kennisbank/uurtarief-indexeren" className={link}>uurtarief indexeert</Link>{" "}
              met twee indexcijfers. Verwerk het nieuwe bedrag vervolgens in een{" "}
              <Link href="/offerte-calculator" className={link}>offerteberekening</Link>{" "}
              voor de volgende opdracht.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-ink">Controle vóór verzending</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>De klantnaam, beide tarieven, de eenheid en de ingangsdatum kloppen.</li>
              <li>De zin over eerder bevestigde opdrachten past bij deze klant.</li>
              <li>De reden is concreet en je contactgegevens zijn toegevoegd.</li>
              <li>De onderwerpregel maakt duidelijk wanneer het nieuwe tarief ingaat.</li>
            </ul>
            <p className="mt-3 text-sm">
              Bron voor de communicatieaanpak —{" "}
              <a href="https://www.kvk.nl/geldzaken/uurtarief-verhogen/" className={link} target="_blank" rel="noopener noreferrer">
                KVK over het verhogen van je uurtarief
              </a>.
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="Deze generator maakt een voorbeeldmail. Controleer de prijsafspraken en voorwaarden die voor jouw klant gelden. Vraag bij juridische twijfel advies voordat je de wijziging verstuurt."
    />
  );
}
