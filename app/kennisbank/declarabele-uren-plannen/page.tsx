import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("declarabele-uren-plannen")!;
export const metadata = artikelMetadata(artikel, {
  title: "Declarabele uren plannen voor je uurtarief als zzp’er",
});
const toc = [
  { id: "week", label: "Van werkweek naar factureerbare uren" },
  { id: "jaar", label: "Van weekplanning naar jaar en maand" },
  { id: "tarief", label: "Wat minder uren met je tarief doen" },
  { id: "calculator", label: "Vrije weken één keer verwerken" },
  { id: "bijhouden", label: "Je planning vergelijken met je urenregistratie" },
];
const faq = [
  { vraag: "Hoeveel declarabele uren moet ik per maand invullen?", antwoord: "Gebruik een realistische verwachting van de uren die je aan klanten kunt factureren. In de BerekenZZP-calculator kun je een maand zonder vrije weken gebruiken en die weken apart invullen. Heb je vrije weken al verwerkt in een jaargemiddelde per maand, zet de aparte vrije weken dan op nul." },
  { vraag: "Zijn administratie en acquisitie declarabele uren?", antwoord: "Voor je eigen administratie en het vinden van klanten stuur je doorgaans geen rekening. Registreer die tijd wel als werk voor je bedrijf. Bij voorbereiding of reistijd voor een klant bepaalt je afspraak of je die uren apart kunt factureren." },
  { vraag: "Is een declarabel uur hetzelfde als een uur voor het urencriterium?", antwoord: "Voor het urencriterium kunnen ook werkelijk gewerkte ondernemingsuren meetellen die je niet factureert, zoals administratie of offertes maken. Alleen beschikbaar zijn zonder werkzaamheden telt volgens de Belastingdienst niet mee. De fiscale voorwaarden moet je afzonderlijk beoordelen." },
  { vraag: "Hoe vaak moet ik mijn urenplanning controleren?", antwoord: "Vergelijk bijvoorbeeld maandelijks je geplande en werkelijk gefactureerde uren. Kijk bij een verschil naar vakantie, lege plekken, uitloop en tijd voor je eigen bedrijf. Pas je verwachting voor de rest van het jaar aan als het verschil aanhoudt." },
];
const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout artikel={artikel} inhoudsopgave={toc} faq={faq}
      intro="Bereken je declarabele uren door van je beschikbare werktijd de uren voor je eigen bedrijf en verwachte lege plekken af te trekken. Vermenigvuldig je factureerbare uren per werkweek met je werkweken per jaar. Deel dat door twaalf voor een maandgemiddelde. Verwerk vakantie en andere vrije weken één keer in je berekening."
    >
      <section id="week" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Hoeveel van je werkweek kun je factureren?</h2>
        <p className="mt-2">Begin met de tijd die je werkelijk kunt werken. Reserveer daarna tijd voor je eigen administratie, offertes, klantcontact en het vinden van nieuwe opdrachten. KVK noemt het aantal declarabele uren als onderdeel van je tariefberekening. Een agenda met beschikbare uren levert pas omzet op als er betaald werk tegenover staat.</p>
        <h3 className="mt-4 font-bold text-ink">Voorbeeld van een werkweek van 32 uur</h3>
        <p className="mt-2">Stel dat je 32 uur kunt werken. Je plant 8 uur voor je eigen bedrijfswerk en 4 uur voor verwachte lege plekken of uitloop. Dan blijven 20 factureerbare uren over. Dat is een zelfgekozen scenario. Gebruik je eigen afspraken en urenregistratie om je planning te onderbouwen.</p>
        <p className="mt-2">Spreek met je klant af welke tijd je in rekening brengt. Voorbereiding of reistijd kan onderdeel zijn van een vast bedrag of apart worden gefactureerd. Tel dezelfde tijd één keer mee in je omzetplanning. Bij een vaste opdrachtprijs kun je achteraf je opbrengst delen door alle werkelijk bestede opdrachturen om je gerealiseerde tarief te controleren.</p>
      </section>
      <section id="jaar" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Van een weekplanning naar een maandgemiddelde</h2>
        <p className="mt-2">Reken voor een eenvoudig planningsmodel met 52 weken. Reserveer je daarvan 6 weken waarin je geen uren factureert, dan blijven 46 werkweken over. Bij 20 factureerbare uren per werkweek geeft dat 20 × 46 = 920 uren per jaar. Het gemiddelde over twaalf maanden is 920 ÷ 12 = 76,67 uur.</p>
        <div className="mt-3 rounded-2xl border border-petrol-100 bg-petrol-50/50 p-4">
          <p><strong>Declarabele uren per jaar</strong> = factureerbare uren per werkweek × werkweken</p>
          <p className="mt-2"><strong>Maandgemiddelde</strong> = declarabele uren per jaar ÷ 12</p>
        </div>
        <p className="mt-3">Het maandgemiddelde helpt bij je jaarbegroting. In een maand met vakantie kun je minder factureren, terwijl je vaste kosten doorlopen. Maak daarom ook een planning per maand. Verwerk feestdagen en verwachte uitval in je beschikbare weken of uren, op een manier die bij jouw agenda past.</p>
      </section>
      <section id="tarief" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat doen minder uren met het benodigde tarief?</h2>
        <p className="mt-2">Stel dat je voor je eigen begroting een omzetdoel van €60.000 exclusief btw hebt vastgesteld. Deel dat doel door je verwachte declarabele uren. De voorbeelden hieronder gebruiken allemaal 46 werkweken en ronden het tarief naar boven af op centen.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Uren en tarief bij hetzelfde omzetdoel" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Scenario’s bij €60.000 omzet exclusief btw</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Uren per werkweek</th><th scope="col" className="p-2">Uren per jaar</th><th scope="col" className="p-2">Tarief excl. btw</th></tr></thead>
            <tbody>{[["15", "690", "€86,96"], ["20", "920", "€65,22"], ["25", "1.150", "€52,18"]].map(([week, jaar, tarief]) => (
              <tr key={week} className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">{week}</th><td className="p-2">{jaar}</td><td className="whitespace-nowrap p-2">{tarief}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-3">Het omzetdoel in dit voorbeeld is een aanname voor de planning. Kosten, belasting en wat je privé wilt overhouden bepalen welk doel bij je past. De <Link href="/uurtarief-berekenen" className={link}>uurtariefcalculator</Link> helpt om vanuit een netto-inkomensdoel naar een tarief te rekenen. Voor de bredere afweging kun je ook lezen <Link href="/kennisbank/wat-is-een-goed-uurtarief-als-zzper" className={link}>hoe je een passend uurtarief bepaalt</Link>.</p>
      </section>
      <section id="calculator" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Verwerk vrije weken één keer in de calculator</h2>
        <p className="mt-2">De calculator verlaagt de ingevulde declarabele uren per maand met de vrije of lege weken die je apart invult. Je kunt daarom op twee consistente manieren rekenen.</p>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li><strong>Werk met een maand vóór vrije weken.</strong> Bij 20 factureerbare uren per werkweek is de invoer 20 × 52 ÷ 12 = 86,67 uur per maand. Vul daarnaast 6 vrije weken in. De tool komt dan uit op ongeveer 76,67 effectieve uren per maand.</li>
          <li><strong>Werk met je jaargemiddelde.</strong> Vul ongeveer 76,67 uur per maand in en zet de vrije weken op nul. De vakantie zit dan al in je uren. Door afronding van de invoer kan een klein verschil ontstaan.</li>
        </ol>
        <p className="mt-3">Vul je 76,67 uur én 6 vrije weken in, dan daalt de uitkomst naar ongeveer 67,82 effectieve uren per maand. Dat is een tweede vermindering voor dezelfde vrije weken. Controleer bij een onverwacht hoog tarief daarom eerst hoe je de uren hebt ingevoerd.</p>
      </section>
      <section id="bijhouden" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Gebruik je urenregistratie om de planning te verbeteren</h2>
        <p className="mt-2">Noteer per dag de opdrachtgever, het werk en de bestede tijd. Houd ook bij welk deel je werkelijk factureert. Vergelijk aan het einde van de maand je begroting met je facturen. Zo zie je of lege plekken, extra voorbereidingen of werk voor je eigen bedrijf meer tijd kosten dan verwacht.</p>
        <h3 className="mt-4 font-bold text-ink">Ondernemingsuren en het fiscale urencriterium</h3>
        <p className="mt-2">De Belastingdienst rekent bij het urencriterium ook werkelijk bestede ondernemingsuren mee waarvoor je geen rekening stuurt, zoals offertes en administratie. Je moet de bestede tijd aannemelijk kunnen maken. Alleen bereikbaar zijn zonder werkzaamheden levert daarvoor geen gewerkte uren op. Bekijk de volledige voorwaarden bij de primaire bron hieronder voordat je in de calculator aangeeft dat je aan het urencriterium voldoet.</p>
      </section>
    </ArtikelLayout>
  );
}
