import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import KilometerCalculator from "./KilometerCalculator";

export const metadata: Metadata = {
  title: "Kilometervergoeding berekenen (2026: €0,25 per km) | Calculator",
  description:
    "Bereken je kilometervergoeding met het tarief van 2026: €0,25 onbelast per kilometer. Zie direct het bedrag per rit, per maand en per jaar.",
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
      "Rijd je zakelijke kilometers met je privéauto, dan mag je per kilometer het onbelaste tarief (€0,25 in 2026) als zakelijke kosten opvoeren. Dat verlaagt je winst en dus je belasting. De werkelijke autokosten (brandstof, verzekering, onderhoud) mag je dan niet ook nog aftrekken; het bedrag per kilometer dekt alles.",
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
      "Dat mag, als je het vooraf afspreekt, bijvoorbeeld in je offerte. Je bent daarbij niet gebonden aan €0,25: je mag zakelijk elk tarief afspreken. Let op: over doorberekende reiskosten reken je gewoon btw, tegen hetzelfde tarief als je hoofddienst. Wat je aan de klant factureert is omzet; de kilometeraftrek in je aangifte staat daar los van.",
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
      intro="Bereken in een paar seconden wat je zakelijke kilometers opleveren. De calculator staat standaard op het 2026-tarief van €0,25 per kilometer. Vul je kilometers in, voeg optioneel je ritten per maand toe en zie direct het bedrag per rit, maand en jaar."
      tool={<KilometerCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe je de kilometervergoeding berekent</h2>
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
              tegen elk tarief dat jullie overeenkomen, al is het gebruikelijke tarief ook daar
              vaak €0,25.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Het tarief in 2026: verhoogd naar €0,25</h2>
            <p className="mt-2">
              De maximale onbelaste kilometervergoeding is in 2026 verhoogd van €0,23 naar €0,25
              per kilometer. De verhoging werkt terug tot 1 januari 2026, dus ook kilometers die
              je eerder dit jaar reed, mag je tegen €0,25 rekenen. Het tarief stond in 2024 en
              2025 op €0,23 en in 2023 op €0,21. Het geldt voor elk vervoermiddel: auto, motor,
              scooter, fiets of te voet afgelegde zakelijke kilometers.
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
              <li>Naast de kilometervergoeding ook brandstof of parkeerkosten van dezelfde ritten aftrekken. Parkeren mag overigens wél apart, de brandstof niet.</li>
              <li>Doorberekende reiskosten zonder btw factureren. Reiskosten volgen het btw-tarief van je hoofddienst.</li>
              <li>Met het oude tarief van €0,23 blijven rekenen, terwijl 2026-kilometers €0,25 waard zijn.</li>
              <li>Privéritten of geschatte kilometers opvoeren in plaats van werkelijk gereden zakelijke kilometers.</li>
            </ul>
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
