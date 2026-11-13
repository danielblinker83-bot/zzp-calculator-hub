import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("maximale-korting-berekenen")!;
export const metadata = artikelMetadata(artikel, {
  title: "Maximale korting berekenen bij een minimale marge",
});

const inhoudsopgave = [
  { id: "minimumprijs", label: "Van gewenste marge naar minimumprijs" },
  { id: "voorbeeld", label: "Bereken je kortingsruimte" },
  { id: "commissie", label: "Reken met verkoopcommissie" },
  { id: "actie", label: "Controleer je actie vóór publicatie" },
];

const faq = [
  {
    vraag: "Hoeveel korting kan ik geven als ik minimaal 25% marge wil houden?",
    antwoord: "Deel je kosten per verkoop door 0,75. Dat is je minimumprijs als de kosten per stuk gelijk blijven. Trek de minimumprijs af van je normale verkoopprijs en deel het verschil door die normale prijs. Bij €54 kosten en een normale prijs van €90 is de minimumprijs €72. Je kunt dan maximaal 20% korting geven.",
  },
  {
    vraag: "Wat als mijn minimumprijs hoger is dan mijn normale verkoopprijs?",
    antwoord: "Je normale prijs haalt je margedoel dan al niet. Controleer je kosten en margedoel of reken uit welke hogere verkoopprijs je nodig hebt.",
  },
  {
    vraag: "Kan ik een maximale korting naar boven afronden?",
    antwoord: "Rond je kortingspercentage naar beneden af als je je minimale marge wilt halen. Werk je met een actieprijs in euro’s, rond de berekende minimumprijs dan zo nodig omhoog af op hele centen en reken je marge nog één keer na.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Bereken eerst de laagste prijs waarbij je gewenste marge overblijft. Deel je kosten per verkoop door 1 min je margedoel. Vergelijk die minimumprijs met je normale prijs. Bij €54 kosten, een normale prijs van €90 en een minimale marge van 25% kun je maximaal 20% korting geven."
    >
      <section id="minimumprijs" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Van gewenste marge naar minimumprijs</h2>
        <p className="mt-2">Tel je kosten per verkoop op, zoals inkoop en verpakking. Kies vervolgens de marge die na deze kosten moet overblijven als percentage van je actieprijs. Uit dat bedrag betaal je ook de vaste lasten die je nog niet hebt meegenomen. Gebruik voor je normale prijs en actieprijs dezelfde grondslag. Alle bedragen in de voorbeelden zijn exclusief btw.</p>
        <p className="mt-2 font-semibold text-ink">Minimumprijs = kosten per verkoop ÷ (1 − gewenste marge)</p>
        <p className="mt-2">Vul 0,25 in voor een marge van 25%. Heb je kosten die meebewegen met de prijs, zoals een procentuele verkoopcommissie? Gebruik dan de aangepaste formule hieronder.</p>
      </section>
      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Hoeveel korting past binnen je marge?</h2>
        <p className="mt-2">Bij €54 kosten en 25% gewenste marge is je minimumprijs €54 ÷ 0,75 = €72. Je normale prijs is €90. Het verschil is €18 en €18 ÷ €90 × 100 = 20%. Bij 20% korting blijft €18 per stuk over. Dat is precies 25% van de actieprijs van €72.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Vergelijking van drie kortingspercentages" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Actieprijs en marge bij €54 kosten per verkoop</caption>
            <thead>
              <tr className="border-b border-slate-200">
                <th scope="col" className="p-2">Korting</th>
                <th scope="col" className="p-2">Actieprijs</th>
                <th scope="col" className="p-2">Over per stuk</th>
                <th scope="col" className="p-2">Marge</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2">10%</th><td className="p-2">€81</td><td className="p-2">€27</td><td className="p-2">33,3%</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2">20%</th><td className="p-2">€72</td><td className="p-2">€18</td><td className="p-2">25%</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2">25%</th><td className="p-2">€67,50</td><td className="p-2">€13,50</td><td className="p-2">20%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Reken je actieprijs en kosten na met de <Link href="/marge-berekenen" className={link}>margecalculator</Link>. Bij €67,50 blijft er nog geld per verkoop over, maar je haalt je doel van 25% marge niet meer.</p>
      </section>
      <section id="commissie" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat verandert er met verkoopcommissie?</h2>
        <p className="mt-2">Stel dat je naast de €54 kosten ook 5% commissie betaalt over de actieprijs exclusief btw. Van iedere euro verkoopprijs gaat dan vijf cent naar commissie en wil je 25 cent overhouden. Er blijft 70 cent per euro over om de €54 te dekken.</p>
        <h3 className="mt-4 font-bold text-ink">Bereken een minimumprijs met procentuele kosten</h3>
        <p className="mt-2">Deel €54 door (1 − 0,25 − 0,05). De uitkomst is ongeveer €77,1429. Met €77,15 als minimumprijs kun je bij een normale prijs van €90 maximaal 14,27% korting instellen als je twee decimalen gebruikt. Werk je met hele procenten, dan is 14% de hoogste korting die je kunt instellen.</p>
        <p className="mt-2">Controleer waarop het platform de commissie berekent en welke vaste kosten het per bestelling rekent. Het <Link href="/kennisbank/verkoopprijs-platformkosten" className={link}>rekenvoorbeeld met platformkosten</Link> laat zien hoe je een vast bedrag en een percentage combineert.</p>
      </section>
      <section id="actie" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Controleer je kortingsactie vóór je die live zet</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Reken de prijs na die de klant daadwerkelijk betaalt. Controleer ook of een kortingscode boven op de actieprijs kan komen.</li>
          <li>Neem kosten mee die door de actie veranderen, zoals een andere verpakking of verzendbijdrage.</li>
          <li>Vermenigvuldig het bedrag dat je overhoudt per verkoop met je verwachte afzet. Neem eventuele extra campagnekosten apart mee. Wil je weten hoeveel stuks nodig zijn om die kosten te dekken? Gebruik de <Link href="/kennisbank/break-even-afzet-berekenen" className={link}>break-evenformule</Link>.</li>
        </ol>
      </section>
    </ArtikelLayout>
  );
}
