import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("kilometervergoeding-doorberekenen-klant")!;
export const metadata = artikelMetadata(artikel, {
  title: "Kilometervergoeding doorberekenen: btw en voorbeeld",
});
const toc = [
  { id: "afspraken", label: "Welke afspraken maak je vooraf?" },
  { id: "voorbeeld", label: "Voorbeeld: kilometers op je factuur" },
  { id: "btw", label: "Hoe zit het met de btw?" },
  { id: "aftrek", label: "Factureren is iets anders dan aftrekken" },
  { id: "check", label: "Controle voordat je de factuur verstuurt" },
];
const faq = [
  { vraag: "Moet ik reiskosten apart factureren?", antwoord: "Dat hoeft niet. Je kunt ze verwerken in je uurtarief of apart afspreken. Leg vast wat is inbegrepen, zodat de klant de offerte en factuur op dezelfde manier begrijpt." },
  { vraag: "Moet ik de heen- en terugreis allebei tellen?", antwoord: "Als jullie afspreken de werkelijk gereden heen- en terugreis te factureren, neem je beide mee. Een afstand van 40 kilometer enkele reis wordt dan 80 kilometer voor die retourrit. Vermeld duidelijk welke afstand je rekent." },
  { vraag: "Kan ik reistijd naast kilometers factureren?", antwoord: "Reistijd en kilometers zijn verschillende onderdelen van je prijs. Neem ze alleen naast elkaar op als dat in jullie prijsafspraak past. Maak duidelijk of het tijdtarief alleen voor het werk op locatie geldt of ook voor de reis." },
  { vraag: "Is doorberekende kilometervergoeding belastingvrij inkomen?", antwoord: "Nee. Wat je voor de opdracht factureert, inclusief reiskosten, behoort tot je omzet exclusief eventuele btw. De aftrek voor zakelijke kilometers met een privévervoermiddel is een afzonderlijke kostenpost. Die twee bedragen hoeven niet gelijk te zijn." },
  { vraag: "Hoeveel btw reken ik over reiskosten bij een dienst met 21% btw?", antwoord: "Als de reiskosten bij die dienst horen, bereken je in de normale situatie ook 21% over de reiskosten. Bij €36 reiskosten is dat €7,56 btw. Een vrijstelling of verleggingsregeling vraagt om een andere behandeling." },
];
const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout artikel={artikel} inhoudsopgave={toc} faq={faq}
      intro="Je kunt reiskosten aan je klant doorberekenen als jullie daar afspraken over maken. Leg het kilometertarief en de te rekenen afstand vooraf vast. De vergoeding op je factuur is onderdeel van je omzet. De fiscale kilometeraftrek voor een privévoertuig staat daar los van. Bij een gewone belaste dienst bereken je ook btw over de bijbehorende reiskosten."
      disclaimerTekst="Dit artikel beschrijft algemene uitgangspunten voor Nederlandse zzp’ers. Het factuurvoorbeeld veronderstelt één dienst met 21% btw, zonder vrijstelling of verlegging. De fiscale kilometeraftrek geldt hier voor een ondernemer met een privévervoermiddel. Bronnen geraadpleegd op 5 november 2026."
    >
      <section id="afspraken" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Maak je reisafspraak net zo duidelijk als je uurtarief</h2>
        <p className="mt-2">KVK adviseert vooraf te bespreken of bijkomende kosten in je tarief zitten of apart worden gefactureerd. Dat voorkomt een onaangename verrassing bij de betaling. Gebruik in je offerte bijvoorbeeld een eigen prijsafspraak zoals hieronder. Het bedrag is een rekenvoorbeeld, geen aanbevolen tarief.</p>
        <blockquote className="mt-3 border-l-4 border-petrol-700 bg-mist p-4">Reiskosten: €0,45 per werkelijk gereden kilometer voor de heen- en terugreis tussen de afgesproken vertrekplaats en de werklocatie, exclusief btw. Reistijd is in dit voorbeeld inbegrepen in de opdrachtprijs.</blockquote>
        <p className="mt-3">Bedenk ook wat jullie doen bij meerdere locaties of een gewijzigde afspraak. Spreek af welke vertrekplaats telt. Noteer per bezoek datum, bestemming en afstand, zodat je factuurregels terug te vinden zijn. Dat is een praktische controle voor jezelf en je klant.</p>
        <p className="mt-2">Reken het afgesproken bedrag door met de <Link href="/kilometervergoeding-berekenen" className={link}>kilometercalculator</Link>. Pas het tariefveld aan naar jullie afspraak: de standaardwaarde is niet automatisch jouw factuurtarief.</p>
      </section>

      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Voorbeeldfactuur: 80 kilometer tegen €0,45</h2>
        <p className="mt-2">Stel: je werkt vier uur op locatie voor €65 per uur en rijdt 40 kilometer heen en 40 kilometer terug. Jullie hebben €0,45 per kilometer afgesproken. Alle onderstaande prijzen zijn eerst exclusief btw; de gehele dienst valt in dit voorbeeld onder 21%.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Rekenvoorbeeld voor één opdracht met retourreis</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Onderdeel</th><th scope="col" className="p-2">Berekening</th><th scope="col" className="p-2 text-right">Bedrag</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-100"><td className="p-2">Werk op locatie</td><td className="p-2">4 × €65</td><td className="p-2 text-right">€260,00</td></tr>
              <tr className="border-b border-slate-100"><td className="p-2">Reiskosten retour</td><td className="p-2">80 × €0,45</td><td className="p-2 text-right">€36,00</td></tr>
              <tr className="border-b border-slate-100"><td className="p-2">Subtotaal</td><td className="p-2">€260 + €36</td><td className="p-2 text-right">€296,00</td></tr>
              <tr className="border-b border-slate-100"><td className="p-2">Btw</td><td className="p-2">21% van €296</td><td className="p-2 text-right">€62,16</td></tr>
              <tr className="font-semibold"><td className="p-2">Te betalen</td><td className="p-2">Inclusief btw</td><td className="p-2 text-right">€358,16</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Een controle op de btw: over het werk bereken je €54,60 en over de reis €7,56. Samen is dat €62,16. De <Link href="/btw-berekenen" className={link}>btwcalculator</Link> helpt om beide onderdelen na te rekenen.</p>
        <h3 className="mt-4 font-bold text-ink">Een begrijpelijke factuurregel</h3>
        <p className="mt-2">Schrijf bijvoorbeeld: ‘Reiskosten bezoek 5 november 2026, Rotterdam–werklocatie–Rotterdam, 80 km × €0,45’. Gebruik je werkelijke route en datum. Dit is één omschrijvingsregel, geen volledige factuur. Met <Link href="/factuurtekst-maken" className={link}>factuurtekst maken</Link> kun je ook de omschrijving van de opdracht voorbereiden.</p>
      </section>

      <section id="btw" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Een aparte reiskostenregel maakt de kosten niet btw-vrij</h2>
        <p className="mt-2">De Belastingdienst rekent reiskosten mee in de totale vergoeding voor een dienst. Bij de gewone situatie uit het voorbeeld vallen de kilometers daarom onder hetzelfde btw-tarief als het werk. Dat verandert niet doordat je ze op een eigen factuurregel zet.</p>
        <p className="mt-2">KVK noemt ook vrijstellingen, de kleineondernemersregeling en verlegging als situaties waarbij de btw-behandeling anders kan zijn. Kopieer het voorbeeld dan niet automatisch. Een doorlopende post is bovendien een apart begrip: een uitgave wordt dat niet alleen doordat je haar zonder opslag aan je klant doorberekent.</p>
      </section>

      <section id="aftrek" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Het factuurtarief en de fiscale aftrek zijn twee verschillende bedragen</h2>
        <p className="mt-2">Voor zakelijke ritten met een privévervoermiddel noemt de Belastingdienst in 2026 €0,25 aftrek per kilometer. Bij de 80 zakelijke kilometers uit het voorbeeld is de aftrek €20. De klantfactuur bevat €36 reiskosten exclusief btw. Je gebruikt dus jullie afspraak voor de factuur en de fiscale regel voor de aftrek.</p>
        <p className="mt-2">Die €20 is een verlaging van de winst, geen terugbetaling van €20 belasting. Het uiteindelijke belastingeffect hangt af van je totale situatie. Ook is het verschil tussen de €36 op je factuur en de €20 aftrek niet automatisch je werkelijke economische winst op de reis.</p>
        <p className="mt-2">Brandstof, verzekering, tol en parkeren mag je voor deze privévoertuigritten niet nog eens afzonderlijk van de winst aftrekken: volgens de Belastingdienst zijn die verwerkt in het kilometerbedrag. De regels voor een auto van de zaak vallen buiten dit voorbeeld.</p>
      </section>

      <section id="check" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Vijf controles voordat je factureert</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Komt het kilometertarief overeen met de geaccepteerde offerte?</li>
          <li>Heb je de afgesproken vertrekplaats en heen- en terugreis gebruikt?</li>
          <li>Zijn reiskosten niet ook al volledig in een ander bedrag opgenomen?</li>
          <li>Klopt de btw-behandeling van de hele opdracht?</li>
          <li>Kun je datum, rit en afstand terugvinden in je administratie?</li>
        </ol>
        <p className="mt-3">Wil je eerst weten wat de rit je zelf kost? Bereken je <Link href="/kennisbank/autokosten-per-kilometer-berekenen" className={link}>werkelijke autokosten per kilometer</Link> met brandstof, onderhoud en afschrijving.</p>
        <p className="mt-3">Begin je nog aan de prijsafspraak? Zet je werk en reiskosten samen in een <Link href="/offerte-calculator" className={link}>offerteberekening</Link>. Zo ziet de klant vooraf wat een bezoek kost en kun je achteraf dezelfde uitgangspunten gebruiken.</p>
      </section>
    </ArtikelLayout>
  );
}
