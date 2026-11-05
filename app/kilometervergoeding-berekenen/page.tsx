import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import KilometerCalculator from "./KilometerCalculator";

export const metadata: Metadata = {
  title: "Kilometervergoeding berekenen (2026: €0,25 per km) | Calculator",
  description:
    "Bereken je kilometerbedrag per rit, maand en jaar. Voor zakelijke ritten met privévervoer geldt in 2026 €0,25 fiscale aftrek per kilometer.",
  alternates: { canonical: "/kilometervergoeding-berekenen" },
  openGraph: {
    title: "Kilometervergoeding berekenen (2026: €0,25 per km)",
    description: "Bereken je vergoeding per rit, per maand en per jaar met het 2026-tarief.",
    url: "/kilometervergoeding-berekenen",
  },
};

const faq = [
  {
    vraag: "Hoeveel is de kilometervergoeding in 2026?",
    antwoord:
      "De maximale onbelaste kilometervergoeding is in 2026 verhoogd naar €0,25 per kilometer, met terugwerkende kracht vanaf 1 januari 2026. In 2025 was dit nog €0,23. Als zzp'er mag je dit bedrag per zakelijke kilometer met je privéauto, motor of fiets als kosten aftrekken van je winst.",
  },
  {
    vraag: "Hoe werkt de kilometeraftrek voor zzp'ers met een privéauto?",
    antwoord:
      "Rijd je zakelijke kilometers met je privéauto, dan mag je in 2026 €0,25 per kilometer als kosten van je winst aftrekken. Dat is een aftrekpost, geen belastingvrije omzet of directe terugbetaling. Brandstof, verzekering, tol en parkeren van die ritten mag je niet ook nog afzonderlijk aftrekken.",
  },
  {
    vraag: "Geldt de vergoeding ook voor de fiets of het ov?",
    antwoord:
      "Ja, het tarief van €0,25 per kilometer (2026) geldt ongeacht het vervoermiddel, dus ook voor de fiets, e-bike of scooter. Reis je met het ov, dan kun je in plaats daarvan de werkelijke kosten van je kaartjes of abonnement opvoeren als dat gunstiger is.",
  },
  {
    vraag: "Moet ik een rittenregistratie bijhouden?",
    antwoord:
      "Ja. Houd per rit de datum, het vertrek- en aankomstadres, het doel van de rit en het aantal kilometers bij. Zonder registratie kan de Belastingdienst je aftrek weigeren. Een simpele spreadsheet of een app volstaat, als de administratie maar controleerbaar is.",
  },
  {
    vraag: "Kan ik reiskosten doorberekenen aan mijn klant?",
    antwoord:
      "Maak hierover vooraf afspraken, bijvoorbeeld in je offerte. Voor de factuur gebruik je jullie afgesproken tarief. Bij een gewone belaste dienst horen de reiskosten bij de vergoeding en volgen zij het btw-tarief van die dienst. Bij vrijstelling of verlegging kan dat anders zijn. De kilometeraftrek in je aangifte staat los van je klantfactuur.",
  },
  {
    vraag: "Wat als mijn auto op de zaak staat?",
    antwoord:
      "Dan geldt de kilometervergoeding niet. Bij een auto van de zaak trek je de werkelijke autokosten af en krijg je bij privégebruik te maken met de bijtelling. De €0,25 per kilometer is alleen voor zakelijke ritten met een privévoertuig.",
  },
  {
    vraag: "Telt woon-werkverkeer ook als zakelijke kilometers?",
    antwoord:
      "Voor zzp'ers wel: ritten van huis naar een klant, opdracht of werklocatie gelden als zakelijk. Werk je vanuit huis, dan zijn er geen woon-werkkilometers. Puur privéritten tellen uiteraard niet mee.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="kilometervergoeding-berekenen"
      h1="Kilometervergoeding berekenen"
      intro="Bereken het bedrag van je zakelijke kilometers per rit, maand en jaar. De standaardwaarde van €0,25 is de fiscale aftrek per kilometer met privévervoer in 2026, niet je belastingteruggave. Voor een klantfactuur vul je het tarief in dat jullie hebben afgesproken."
      tool={<KilometerCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe je de kilometervergoeding berekent</h2>
            <p className="mt-2">
              Maak je een klantfactuur? Lees hoe je{" "}
              <Link href="/kennisbank/kilometervergoeding-doorberekenen-klant" className="font-medium text-petrol-700 underline">
                kilometervergoeding doorberekent aan je klant, met btw en voorbeeldfactuur
              </Link>.
            </p>
            <p className="mt-2">
              De berekening zelf is eenvoudig: aantal kilometers keer het tarief per kilometer.
              Rijd je bijvoorbeeld 45 kilometer naar een klant en terug, dan is dat bij het
              2026-tarief van €0,25 per kilometer een bedrag van €11,25 per rit. Doe je die rit 8
              keer per maand, dan gaat het om €90 per maand en €1.080 per jaar. Dat zijn kosten
              die je winst verlagen, en dus rechtstreeks belasting schelen.
            </p>
            <p className="mt-2">
              Voor een zzp'er heeft het bedrag twee gezichten. In je aangifte is het een
              aftrekpost: per zakelijke kilometer met je privévoertuig mag je €0,25 van je winst
              aftrekken. Richting je klant is het een afspraak: je mag reiskosten doorberekenen
              tegen het tarief dat jullie overeenkomen. Dat is een andere berekening dan de
              fiscale aftrek voor privévervoer.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Het tarief in 2026: verhoogd naar €0,25</h2>
            <p className="mt-2">
              De maximale onbelaste kilometervergoeding is in 2026 verhoogd van €0,23 naar €0,25
              per kilometer. De verhoging werkt terug tot 1 januari 2026, dus ook kilometers die
              je eerder dit jaar reed, mag je tegen €0,25 rekenen. Het tarief stond in 2024 en
              2025 op €0,23 en in 2023 op €0,21. Het geldt voor elk vervoermiddel: auto, motor,
              scooter of fiets als privévervoermiddel voor zakelijke ritten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Privéauto of auto van de zaak: twee verschillende regimes</h2>
            <p className="mt-2">
              De kilometervergoeding geldt alleen voor zakelijke ritten met een privévoertuig. Je
              mag dan niets anders aftrekken: geen brandstof, geen onderhoud, geen afschrijving.
              Het bedrag per kilometer dekt alle kosten. Staat je auto op de zaak, dan werkt het
              omgekeerd: je trekt de werkelijke autokosten af, betaalt bijtelling bij privégebruik
              en laat de kilometervergoeding links liggen. Welke variant gunstiger is, hangt af
              van hoeveel je rijdt en wat de auto kost; bij veel zakelijke kilometers met een
              zuinige, afgeschreven auto is de privévariant vaak voordeliger.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij de kilometervergoeding</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Geen rittenregistratie bijhouden, waardoor de aftrek bij een controle sneuvelt.</li>
              <li>Naast de kilometeraftrek ook brandstof, tol of parkeren van dezelfde privévoertuigritten aftrekken. Die kosten zijn al in het kilometerbedrag verwerkt.</li>
              <li>De btw-behandeling van doorberekende reiskosten niet controleren. Bij een gewone belaste dienst volgen de bijbehorende reiskosten het tarief van die dienst; vrijstelling en verlegging kunnen een andere behandeling vragen.</li>
              <li>Met het oude tarief van €0,23 blijven rekenen, terwijl 2026-kilometers €0,25 waard zijn.</li>
              <li>Privéritten of geschatte kilometers opvoeren in plaats van werkelijk gereden zakelijke kilometers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Bronnen</h2>
            <p className="mt-2 text-sm">
              <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/winst/inkomstenbelasting/veranderingen-inkomstenbelasting-2026/zakelijk-gebruik-privevervoermiddel-2026" className="text-petrol-700 underline">Belastingdienst: zakelijk gebruik privévervoermiddel 2026</a>. Tarief en verwerking van parkeren en tol gecontroleerd op 5 november 2026.
            </p>
          </section>
          <section>
            <p className="mt-2">
              Bereken je reiskosten voor een klus, verwerk ze dan meteen in een compleet
              prijsvoorstel met de{" "}
              <Link href="/offerte-calculator" className="font-medium text-petrol-700 underline">
                offerte calculator
              </Link>
              . Factureer je de kilometers door, dan helpt{" "}
              <Link href="/factuurtekst-maken" className="font-medium text-petrol-700 underline">
                factuurtekst maken
              </Link>{" "}
              je aan een nette omschrijving. En wil je weten wat die aftrekpost je uiteindelijk
              netto scheelt, bekijk dan de{" "}
              <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
                netto inkomen calculator
              </Link>
              .
            </p>
          </section>
        </div>
      }
      faq={faq}
    />
  );
}
