import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("verschil-marge-en-opslag")!;
export const metadata = artikelMetadata(artikel, {
  title: "Verschil marge en opslag: formules en voorbeelden",
});
const toc = [
  { id: "verschil", label: "Het verschil in één voorbeeld" },
  { id: "verkoopprijs", label: "Een verkoopprijs met de juiste marge" },
  { id: "omrekentabel", label: "Omrekentabel marge en opslag" },
  { id: "kosten", label: "Welke kosten neem je mee?" },
  { id: "korting", label: "Wat doet korting met je opbrengst?" },
  { id: "controle", label: "Controleer je prijs in vijf stappen" },
];
const faq = [
  { vraag: "Is 30% opslag hetzelfde als 30% marge?", antwoord: "Nee. Bij €100 kosten en 30% opslag wordt de verkoopprijs €130. De marge is €30 gedeeld door €130: ongeveer 23,1%. Voor 30% marge is een verkoopprijs van €100 / 0,70 = €142,86 nodig, afgerond op centen." },
  { vraag: "Hoeveel opslag heb ik nodig voor 40% marge?", antwoord: "Ongeveer 66,7%. De formule is opslag = marge / (100 − marge) × 100. Bij 40% marge wordt dat 40 / 60 × 100 = 66,7%. Dat geldt voor dezelfde kostenbasis en een positieve verkoopprijs." },
  { vraag: "Kan ik 100% marge hebben?", antwoord: "Alleen wanneer de meegenomen kosten nul zijn en de verkoopprijs positief is. Bij positieve kosten kun je 100% marge niet bereiken met een eindige verkoopprijs. 100% opslag kan wel: je verdubbelt dan de kosten en hebt 50% marge." },
  { vraag: "Kan mijn marge negatief zijn?", antwoord: "Ja. Bij €100 kosten en €80 verkoopprijs is het verschil min €20. De marge is −20 / 80 × 100 = −25%. Je verkoopt dan onder de meegenomen kosten. Bij een verkoopprijs van nul is de marge als percentage niet gedefinieerd." },
  { vraag: "Is de uitkomst van de margecalculator mijn nettowinst?", antwoord: "Niet automatisch. De calculator trekt de ingevulde inkoop en extra kosten af van de verkoopprijs. Niet-ingevulde kosten worden niet meegenomen. Neem je alleen directe kosten mee, dan moeten daaruit ook je vaste lasten en andere uitgaven nog worden gedekt." },
];
const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout artikel={artikel} inhoudsopgave={toc} faq={faq}
      intro="Marge is het verschil tussen verkoopprijs en kosten als percentage van de verkoopprijs. Opslag zet hetzelfde verschil af tegen de kosten. Bij €100 kosten en €150 verkoopprijs is de marge 33,3% en de opslag 50%. Dezelfde verkoop, twee verschillende percentages: de noemer bepaalt de uitkomst."
    >
      <section id="verschil" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Marge en opslag: waar deel je door?</h2>
        <p className="mt-2">Stel: je koopt een product in voor €100 en verkoopt het voor €150. In dit eenvoudige voorbeeld zijn er geen andere kosten. Er blijft €50 over vóór eventuele vaste lasten en belasting. Voor het margepercentage deel je die €50 door €150. Voor het opslagpercentage deel je door €100.</p>
        <div className="mt-3 rounded-2xl border border-petrol-100 bg-petrol-50/50 p-4">
          <p><strong>Marge (%)</strong> = (verkoopprijs − kosten) / verkoopprijs × 100</p>
          <p className="mt-2"><strong>Opslag (%)</strong> = (verkoopprijs − kosten) / kosten × 100</p>
        </div>
        <p className="mt-3">Bij een winstgevende verkoop met positieve kosten is het opslagpercentage dus hoger dan het margepercentage. De teller is gelijk, maar je deelt bij opslag door een kleiner bedrag. Spreek bij offertes en onderhandelingen daarom altijd af welk percentage je bedoelt en welke kosten erin zitten.</p>
        <p className="mt-2">Wil je direct met je eigen bedragen rekenen? De <Link href="/marge-berekenen" className={link}>margecalculator toont marge en opslag naast elkaar</Link>.</p>
      </section>

      <section id="verkoopprijs" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Waarom 30% erbij geen 30% marge geeft</h2>
        <p className="mt-2">Je kosten zijn €100 en je wilt 30% marge. Je zou €30 kunnen optellen en €130 vragen. Maar €30 is slechts 23,1% van €130. Je hebt dan 30% opslag toegepast. Bij 100 verkopen ontvang je ongeveer €1.286 minder dan bij een prijs die wel op 30% marge is gebaseerd.</p>
        <h3 className="mt-4 font-bold text-ink">Terugrekenen vanuit de gewenste marge</h3>
        <p className="mt-2">Gebruik: verkoopprijs = kosten / (1 − marge als decimaal). Voor 30% marge en €100 kosten wordt dat €100 / 0,70 = €142,857… Afgerond vraag je €142,86. Er blijft €42,86 over: ongeveer 30% van de verkoopprijs.</p>
        <p className="mt-2">Wil je juist 30% opslag? Dan is de formule verkoopprijs = kosten × (1 + opslag als decimaal). Dat geeft €100 × 1,30 = €130. Beide berekeningen zijn goed, zolang ze passen bij het doel dat je hebt gekozen.</p>
      </section>

      <section id="omrekentabel" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Omrekentabel: van gewenste marge naar opslag</h2>
        <p className="mt-2">Deze voorbeelden gebruiken steeds €100 kosten. Prijzen zijn afgerond op centen en percentages op één decimaal waar nodig. Dit zijn rekenvoorbeelden, geen aanbevolen marges voor een branche.</p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Verkoopprijs en opslag bij €100 kosten</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Gewenste marge</th><th scope="col" className="p-2">Verkoopprijs</th><th scope="col" className="p-2">Opslag</th></tr></thead>
            <tbody>{[["20%", "€125,00", "25%"], ["30%", "€142,86", "42,9%"], ["40%", "€166,67", "66,7%"], ["50%", "€200,00", "100%"], ["60%", "€250,00", "150%"]].map(([marge, prijs, opslag]) => (
              <tr key={marge} className="border-b border-slate-100"><td className="p-2">{marge}</td><td className="p-2">{prijs}</td><td className="p-2">{opslag}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-3">Omrekenen zonder bedragen kan ook. Gebruik voor opslag naar marge: opslag / (100 + opslag) × 100. Andersom is het marge / (100 − marge) × 100. Vul hierbij percentages als hele getallen in: bijvoorbeeld 30 voor 30%.</p>
      </section>

      <section id="kosten" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Je percentage is zo compleet als je kostenbasis</h2>
        <p className="mt-2">Een inkoopprijs van €100 vertelt niet altijd het hele verhaal. Betaal je per verkoop ook €5 verzending, €2 verpakking en €3 transactiekosten, dan kost die verkoop €110. Bij een verkoopprijs van €150 blijft €40 over. De marge is dan 26,7% in plaats van 33,3%.</p>
        <p className="mt-2">Betaal je een percentage van je verkoopprijs aan een platform? In het artikel over <Link href="/kennisbank/verkoopprijs-platformkosten" className={link}>verkoopprijzen met platformkosten</Link> zie je hoe je die commissie al bij je prijsbepaling meerekent.</p>
        <p className="mt-2">Gebruik consequent dezelfde grondslag voor inkoop en verkoop. De voorbeelden hier laten btw buiten beschouwing en gaan uit van bedragen exclusief btw en kosten zonder aftrekbare btw. Bij een andere btw-situatie moet je eerst vaststellen welke bedragen daadwerkelijk je kosten en opbrengsten zijn.</p>
        <h3 className="mt-4 font-bold text-ink">Vergeet de vaste lasten niet</h3>
        <p className="mt-2">KVK en Ondernemersplein onderscheiden onder meer vaste en variabele kosten bij prijsbepaling. De bedragen hierboven tonen de bijdrage per verkoop na de meegenomen kosten. Huur en andere vaste lasten moeten ook worden terugverdiend. Verdeel je die voor je prijsplanning over een verwacht aantal verkopen, tel ze dan niet nogmaals als extra kosten mee.</p>
        <p className="mt-2">Voor een opdracht kun je uren en materiaal samenbrengen in de <Link href="/offerte-calculator" className={link}>offertecalculator</Link>. Verkoop je vooral je eigen tijd, gebruik dan ook de <Link href="/uurtarief-berekenen" className={link}>uurtariefcalculator</Link> om je tarief te toetsen.</p>
      </section>

      <section id="korting" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">10% korting kan 25% van je bijdrage kosten</h2>
        <p className="mt-2">Neem €60 directe kosten en een verkoopprijs van €100. Je houdt €40 per verkoop over: 40% marge. Bij 10% korting daalt de prijs naar €90. De kosten blijven in dit voorbeeld €60, waardoor nog €30 overblijft. Je marge wordt 33,3% en je bijdrage in euro’s daalt met 25%.</p>
        <p className="mt-2">Om dezelfde totale bijdrage te behalen, moet je 40 / 30 = 1,333… keer zoveel verkopen: ongeveer 33,3% meer. Verkocht je eerst 30 stuks met €40 bijdrage, dan heb je na de korting 40 stuks met €30 bijdrage nodig. Beide leveren €1.200 op vóór vaste lasten en andere niet-meegenomen posten.</p>
        <p className="mt-2">Dat geldt alleen als kosten per stuk en overige omstandigheden gelijk blijven. Extra verzending, werkuren of inhuur kunnen de uitkomst veranderen. Reken een kortingsactie daarom door met de verwachte aantallen én de kosten die daarbij horen.</p>
      </section>

      <section id="controle" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Controleer je verkoopprijs in vijf stappen</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Schrijf op welke kosten je per product of opdracht meeneemt.</li>
          <li>Kies expliciet voor een doelmarge of een opslagpercentage.</li>
          <li>Bereken je verkoopprijs met de bijbehorende formule.</li>
          <li>Controleer het resultaat terug: deel het verschil door de verkoopprijs voor je marge.</li>
          <li>Toets of het verwachte verkoopvolume ook je vaste lasten en inkomensdoel kan dragen.</li>
        </ol>
        <p className="mt-3">De <Link href="/marge-berekenen" className={link}>gratis margecalculator</Link> helpt bij die terugcontrole. Reken eerst je normale prijs door en daarna je kortingsprijs. Zo zie je niet alleen het percentage, maar ook wat er per verkoop in euro’s overblijft.</p>
      </section>
    </ArtikelLayout>
  );
}
