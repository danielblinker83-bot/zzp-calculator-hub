import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("zakelijke-ritten-bijhouden")!;
export const metadata = artikelMetadata(artikel, {
  title: "Zakelijke ritten bijhouden als zzp’er met je privéauto",
});

const inhoudsopgave = [
  { id: "vastleggen", label: "Welke gegevens leg je vast?" },
  { id: "woon-werk", label: "Hoe tel je woon-werkritten?" },
  { id: "voorbeeld", label: "Voorbeeld van een rittenoverzicht" },
  { id: "maandcontrole", label: "Controleer je registratie per maand" },
];

const faq = [
  {
    vraag: "Kan ik mijn zakelijke ritten in een spreadsheet bijhouden?",
    antwoord: "Een spreadsheet is een praktische manier om je ritten te ordenen. Bewaar gegevens waarmee je de werkelijk gereden kilometers en het zakelijke doel kunt onderbouwen. Voor bewijs over privégebruik van een auto van de zaak gelden aparte eisen.",
  },
  {
    vraag: "Tel ik de heenrit en terugrit allebei mee?",
    antwoord: "Noteer beide ritten als je beide aflegt. Gebruik de werkelijk gereden afstanden. De heenweg en terugweg kunnen verschillen. Deel een privéomweg apart in zodat die niet bij je zakelijke kilometers terechtkomt.",
  },
  {
    vraag: "Zijn woon-werkkilometers zakelijk met een privéauto?",
    antwoord: "Voor de inkomstenbelasting telt woon-werkverkeer mee als zakelijke kilometers. Voor de btw telt het als privégebruik. Noteer woon-werkritten daarom als aparte categorie in je overzicht.",
  },
  {
    vraag: "Wat levert 1.000 zakelijke kilometers in 2026 op?",
    antwoord: "Bij 1.000 zakelijke kilometers met je privéauto en €0,25 per kilometer komt de aftrek van je ondernemingswinst uit op €250. Het effect op je inkomstenbelasting hangt af van je eigen situatie.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Houd per rit de datum, vertrekplek, bestemming, het doel en de gereden kilometers bij. Geef woon-werkritten een eigen label. Ze tellen mee voor de inkomstenbelasting en gelden voor de btw als privégebruik. Tel je zakelijke kilometers per maand op en bereken met dat totaal de aftrek voor je privéauto."
    >
      <section id="vastleggen" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke gegevens leg je per rit vast?</h2>
        <p className="mt-2">Gebruik één overzicht per voertuig. Voeg een regel toe na elke rit en schrijf op waarvoor je reed. Met een korte omschrijving zoals ‘installatie bij klant A’ kun je de rit later terugvinden in je agenda of opdrachtadministratie.</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Datum, vertrekplek en bestemming.</li>
          <li>Doel van de rit en categorie, bijvoorbeeld klantbezoek, woon-werk of privé.</li>
          <li>Werkelijk gereden kilometers, bijvoorbeeld op basis van begin- en eindstand.</li>
          <li>Een toelichting op een afwijkende route of privéomweg, als die er was.</li>
        </ul>
        <h3 className="mt-4 font-bold text-ink">Noteer een omweg apart</h3>
        <p className="mt-2">Rijd je na een klantbezoek nog langs een privébestemming? Leg vast welk deel voor de opdracht was en welk deel voor jezelf. Dat maakt je optelling controleerbaar. Heb je een auto van de zaak en wil je aantonen dat je op jaarbasis hoogstens 500 kilometer privé rijdt, raadpleeg dan de aparte eisen voor die rittenregistratie bij de Belastingdienst.</p>
      </section>
      <section id="woon-werk" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Waarom krijgt woon-werkverkeer een eigen label?</h2>
        <p className="mt-2">Voor de inkomstenbelasting mag je woon-werkkilometers met je privéauto bij de zakelijke kilometers tellen. Voor de btw behandelt de Belastingdienst woon-werkverkeer als privégebruik. Gebruik daarom aparte subtotalen. Zo kun je hetzelfde overzicht voor beide berekeningen gebruiken.</p>
        <p className="mt-2">Bij het berekenen van btw-aftrek voor gebruik en onderhoud speelt ook mee in hoeverre je de auto voor belaste omzet gebruikt. De <Link href="/kilometervergoeding-berekenen" className={link}>kilometercalculator</Link> vermenigvuldigt kilometers met een tarief. Voor een btw-berekening volg je de methode van de Belastingdienst.</p>
      </section>
      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Voorbeeld van een rittenoverzicht</h2>
        <p className="mt-2">In dit fictieve overzicht gaat het om ritten met een privéauto. De kolom voor de inkomstenbelasting laat zien hoeveel kilometer per regel meetelt voor de aftrek.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Voorbeeld zakelijke ritten" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Gereden en meetellende kilometers</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Rit</th><th scope="col" className="p-2">Gereden</th><th scope="col" className="p-2">Voor inkomstenbelasting</th></tr></thead>
            <tbody>{[
              ["Klantbezoek heen", "24 km", "24 km"],
              ["Klantbezoek terug", "24 km", "24 km"],
              ["Woon-werk heen en terug", "16 km", "16 km"],
              ["Privéboodschappen", "12 km", "0 km"],
              ["Totaal", "76 km", "64 km"],
            ].map(([rit, gereden, zakelijk]) => (
              <tr key={rit} className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">{rit}</th><td className="whitespace-nowrap p-2">{gereden}</td><td className="whitespace-nowrap p-2">{zakelijk}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-3">Voor de inkomstenbelasting levert 64 × €0,25 in 2026 €16 aan aftrek van de winst op. Voor de btw blijven in dit overzicht 48 zakelijke kilometers over, omdat de 16 woon-werkkilometers als privégebruik tellen. De zakelijke afstand is één onderdeel van de btw-berekening.</p>
      </section>
      <section id="maandcontrole" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Sluit je maand af met drie controles</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Vergelijk je overzicht met je agenda, opdrachten en kilometerstanden. Vul ontbrekende ritten aan met gegevens die je kunt onderbouwen.</li>
          <li>Tel klantbezoeken, woon-werkritten en privéritten afzonderlijk op. Controleer per rit of je heen- en terugweg en eventuele omwegen juist hebt verwerkt.</li>
          <li>Vermenigvuldig het totaal aan zakelijke kilometers voor de inkomstenbelasting met het tarief voor het betreffende jaar. In 2026 is dat €0,25 per kilometer voor privévervoer. Brandstof, tol en parkeren voor die ritten zijn in dat bedrag verwerkt.</li>
        </ol>
        <p className="mt-3">Factureer je de rit aan een klant? Houd het afgesproken klanttarief apart van je rittenregistratie voor de belasting. Bekijk het <Link href="/kennisbank/kilometervergoeding-doorberekenen-klant" className={link}>voorbeeld van reiskosten op een klantfactuur</Link>.</p>
      </section>
    </ArtikelLayout>
  );
}
