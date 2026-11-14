import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("autokosten-per-kilometer-berekenen")!;
export const metadata = artikelMetadata(artikel, { title: "Werkelijke autokosten per kilometer berekenen" });

const inhoudsopgave = [
  { id: "jaarkosten", label: "Tel je autokosten voor één jaar op" },
  { id: "voorbeeld", label: "Rekenvoorbeeld met 15.000 kilometer" },
  { id: "extra-rit", label: "Gemiddelde kosten of kosten van één extra rit?" },
  { id: "zakelijke-rit", label: "Gebruik de uitkomst voor een zakelijke rit" },
];

const faq = [
  {
    vraag: "Deel ik door alle kilometers of alleen mijn zakelijke kilometers?",
    antwoord: "Deel je totale autokosten door alle kilometers die je met de auto rijdt, privé en zakelijk. Als je 15.000 kilometer rijdt waarvan 5.000 zakelijk, deel je de totale kosten dus door 15.000. Voor een gemiddelde toerekening aan je werk vermenigvuldig je die kilometerprijs vervolgens met 5.000.",
  },
  {
    vraag: "Hoe reken ik brandstofkosten per kilometer uit?",
    antwoord: "Vermenigvuldig het verbruik in liters per 100 kilometer met de prijs per liter en deel door 100. Bij 6 liter per 100 km en €2 per liter komt dat uit op €0,12 per kilometer. Voor elektrisch rijden gebruik je het aantal betaalde kWh per 100 km en je gemiddelde prijs per kWh.",
  },
  {
    vraag: "Tel ik de aanschafprijs van mijn auto mee?",
    antwoord: "Gebruik de verwachte waardedaling voor de periode waarover je rekent. Daalt de geschatte waarde van €15.000 naar €9.000 in drie jaar, dan is dat gemiddeld €2.000 afschrijving per jaar. Tel je afschrijving mee, voeg dan niet ook de aanschafprijs of de aflossing toe. Rente kun je wel als aparte kostenpost opnemen.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Deel je totale autokosten per jaar door alle kilometers die je dat jaar rijdt. Neem onder meer afschrijving, verzekering, onderhoud en brandstof of stroom mee. Bij €6.000 jaarkosten en 15.000 kilometer kost je auto gemiddeld €0,40 per kilometer."
    >
      <section id="jaarkosten" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke kosten neem je mee?</h2>
        <p className="mt-2">Maak een terugblik over twaalf maanden met je facturen en kilometerstanden, of begroot de komende twaalf maanden. Neem bij beide berekeningen de kosten en kilometers uit dezelfde periode. ANWB rekent onder meer met afschrijving, verzekering, motorrijtuigenbelasting, onderhoud en brandstof.</p>
        <h3 className="mt-4 font-bold text-ink">Kosten die doorlopen en kosten die meegroeien</h3>
        <p className="mt-2">Verzekering en motorrijtuigenbelasting betaal je ook als de auto stilstaat. Brandstof, banden en een deel van het onderhoud hangen samen met het gebruik. Waardedaling hangt zowel af van tijd als van kilometers. Neem voor je jaartotaal één schatting van die waardedaling op, zodat je die niet dubbel telt.</p>
      </section>
      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Rekenvoorbeeld met 15.000 kilometer</h2>
        <p className="mt-2">Stel dat je 15.000 kilometer per jaar rijdt. Je auto verbruikt 6 liter per 100 kilometer. Bij een voorbeeldprijs van €2 per liter is dat 900 liter × €2 = €1.800 aan brandstof. De andere bedragen hieronder zijn ook fictief.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Voorbeeld van autokosten per jaar" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Voorbeeldkosten voor één jaar</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Kostenpost</th><th scope="col" className="p-2 text-right">Per jaar</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Afschrijving</th><td className="p-2 text-right">€2.400</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Verzekering en belasting</th><td className="p-2 text-right">€1.200</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Brandstof</th><td className="p-2 text-right">€1.800</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Onderhoud en banden</th><td className="p-2 text-right">€600</td></tr>
            </tbody>
            <tfoot><tr><th scope="row" className="p-2">Totaal</th><td className="p-2 text-right font-semibold">€6.000</td></tr></tfoot>
          </table>
        </div>
        <p className="mt-3">Je deelt €6.000 door 15.000 km. Dat komt uit op €0,40 per kilometer. Wil je een andere jaarkilometrage vergelijken? Bereken ook je brandstof, onderhoud en verwachte restwaarde opnieuw.</p>
      </section>
      <section id="extra-rit" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat kost één extra rit?</h2>
        <p className="mt-2">Bij een rit van 80 kilometer reken je op basis van het jaargemiddelde 80 × €0,40 = €32 toe aan die rit. Kijk je alleen naar wat je voor die rit extra aan brandstof kwijt bent, dan kom je uit op 80 × €0,12 = €9,60. Neem voor de totale extra kosten ook extra slijtage, eventuele kilometerafhankelijke waardedaling en kosten zoals parkeren mee. Je jaarlijkse verzekeringspremie verandert meestal niet door één rit.</p>
      </section>
      <section id="zakelijke-rit" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Hoe gebruik je je kilometerprijs als zzp’er?</h2>
        <p className="mt-2">Gebruik je geschatte kilometerprijs bij het maken van je offerte. Wil je weten wat op de factuur komt, kijk dan naar het tarief dat je met de klant hebt afgesproken. Lees hoe je <Link href="/kennisbank/kilometervergoeding-doorberekenen-klant" className={link}>reiskosten doorberekent aan je klant</Link>.</p>
        <p className="mt-2">Voor ondernemers voor de inkomstenbelasting geldt in 2026 voor zakelijke ritten met een privévervoermiddel een aftrek van €0,25 per kilometer. In het voorbeeld is dat 80 × €0,25 = €20 minder winst voor de aangifte. Met de <Link href="/kilometervergoeding-berekenen" className={link}>kilometercalculator</Link> reken je dit bedrag na of vul je het afgesproken klanttarief in.</p>
      </section>
    </ArtikelLayout>
  );
}
