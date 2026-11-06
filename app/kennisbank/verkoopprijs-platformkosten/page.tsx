import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("verkoopprijs-platformkosten")!;
export const metadata = artikelMetadata(artikel, {
  title: "Verkoopprijs berekenen met platformkosten en commissie",
});

const toc = [
  { id: "kosten", label: "Welke platformkosten tel je mee?" },
  { id: "formule", label: "Formule voor je verkoopprijs" },
  { id: "voorbeeld", label: "Rekenvoorbeeld met 20% marge" },
  { id: "commissie-inclusief-btw", label: "Commissie over een prijs inclusief btw" },
  { id: "controle", label: "Controleer je prijs en uitbetaling" },
];

const faq = [
  {
    vraag: "Hoe bereken ik mijn marge als ik via bol verkoop?",
    antwoord: "Neem de verkoopprijs exclusief btw en trek inkoop, verzending, verpakking en de relevante platformkosten af. Deel wat overblijft door die verkoopprijs en vermenigvuldig met 100. Bij bol wordt het variabele commissiedeel berekend over de verkoopprijs inclusief btw. Gebruik het actuele bedrag uit je verkoopaccount.",
  },
  {
    vraag: "Wat is mijn verkoopprijs zonder verlies op de meegenomen kosten?",
    antwoord: "Zet de doelmarge op 0%. Bij €35 aan kosten die per verkoop gelijk blijven en 10% commissie over de verkoopprijs exclusief btw, ligt de kostendekkende prijs op €35 / 0,90. Rond naar boven af op €38,89. Eventuele overige bedrijfskosten zijn daarmee nog niet gedekt.",
  },
  {
    vraag: "Hoe neem ik een platformabonnement mee in mijn prijs?",
    antwoord: "Voor je prijsplanning kun je het maandbedrag verdelen over het verwachte aantal verkopen op dat platform. Bij €30 per maand en 60 verkopen reken je €0,50 per verkoop mee. Bij 30 verkopen is dat €1,00. Gebruik een realistische schatting en tel de kosten één keer mee.",
  },
  {
    vraag: "Moet ik bij een korting mijn commissie opnieuw berekenen?",
    antwoord: "Ja, controleer de commissie bij de nieuwe prijs. Het bedrag verandert als de vergoeding een percentage van de prijs is. Ook kan een andere prijs in een andere tariefschijf vallen. Vergelijk daarna wat per verkoop overblijft bij beide prijzen.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={toc}
      faq={faq}
      intro="Tel je kosten per verkoop op, inclusief de vaste commissie. Deel het totaal door 1 min het commissiepercentage min je gewenste marge, beide als decimaal. Dat werkt als de commissie over je verkoopprijs exclusief btw wordt berekend. Bij €35 kosten, 10% commissie en 20% doelmarge kom je uit op €50 exclusief btw."
    >
      <section id="kosten" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke platformkosten tel je mee?</h2>
        <p className="mt-2">Begin bij één product of bestelling. Noteer de inkoop, verpakking, verzending die je zelf betaalt en een eventuele vaste vergoeding per artikel of order. Zet een vergoeding die afhangt van de verkoopprijs apart. Die verandert mee met je prijs.</p>
        <p className="mt-2">Controleer in het tariefoverzicht welke prijs het platform als basis gebruikt en of de vergoeding per stuk of per order geldt. Bij meerdere stuks in één bestelling verdeel je kosten per order over die stuks. Kijk ook of verzending meetelt voor de commissie en hoe het platform retouren verrekent.</p>
        <h3 className="mt-4 font-bold text-ink">Plan je vaste kosten apart</h3>
        <p className="mt-2">KVK onderscheidt vaste en variabele kosten bij het bepalen van je verkoopprijs. Betaal je bijvoorbeeld een vast platformabonnement, dan kun je bij je prijsplanning een deel daarvan per verwachte verkoop rekenen. Neem ook een voorzichtiger scenario met minder verkopen door. Zo zie je hoeveel de kosten per stuk oplopen.</p>
      </section>

      <section id="formule" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Formule voor je verkoopprijs met commissie</h2>
        <p className="mt-2">Deel de kosten die per verkoop gelijk blijven door het deel van de prijs dat overblijft voor die kosten. Als 10% van je prijs naar commissie gaat en je 20% wilt overhouden, is 70% van de prijs beschikbaar om die kosten te dekken.</p>
        <div className="mt-3 rounded-2xl border border-petrol-100 bg-petrol-50/50 p-4">
          <p><strong>Verkoopprijs excl. btw</strong> = kosten per verkoop ÷ (1 − commissie als decimaal − doelmarge als decimaal)</p>
        </div>
        <p className="mt-3">Deze formule gaat uit van een constant commissiepercentage over de verkoopprijs exclusief btw, met een eventueel vast bedrag al in de kosten. Bij positieve kosten moet de uitkomst tussen haakjes groter zijn dan nul. De commissie en doelmarge kunnen samen dus geen 100% of meer bedragen. De doelmarge geeft aan welk deel van de verkoopprijs na de meegenomen kosten overblijft. Lees ook het <Link href="/kennisbank/verschil-marge-en-opslag" className={link}>verschil tussen marge en opslag</Link> als je normaal een percentage boven op je kosten rekent.</p>
      </section>

      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Rekenvoorbeeld met 20% marge</h2>
        <p className="mt-2">Je koopt een product in voor €30 en betaalt €4 voor verpakking en verzending. Een fictief platform rekent €1 per verkoop plus 10% van je verkoopprijs exclusief btw. Je wilt 20% overhouden na deze kosten. Je prijs wordt €35 ÷ 0,70 = €50.</p>
        <table className="mt-3 w-full border-collapse text-left text-sm">
          <caption className="pb-2 text-left font-medium">Terugcontrole per verkoop bij €50 exclusief btw</caption>
          <thead>
            <tr className="border-b border-slate-200">
              <th scope="col" className="p-2">Post</th>
              <th scope="col" className="p-2 text-right">Bedrag</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Verkoopprijs", "€50,00"],
              ["Inkoop", "− €30,00"],
              ["Verpakking en verzending", "− €4,00"],
              ["Vaste commissie", "− €1,00"],
              ["Variabele commissie (10%)", "− €5,00"],
              ["Over na deze kosten", "€10,00"],
            ].map(([post, bedrag]) => (
              <tr key={post} className="border-b border-slate-200">
                <th scope="row" className="p-2 font-medium">{post}</th>
                <td className="whitespace-nowrap p-2 text-right tabular-nums">{bedrag}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-3">€10 ÷ €50 × 100 = 20% marge. De €10 per verkoop is beschikbaar voor bedrijfskosten die je nog niet hebt meegenomen en wat je daarna overhoudt.</p>
      </section>

      <section id="commissie-inclusief-btw" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat als de commissie over de prijs inclusief btw gaat?</h2>
        <p className="mt-2">Bij bol staat in de partnerdocumentatie dat het variabele commissiedeel over de verkoopprijs inclusief btw wordt berekend. Het bedrag en percentage hangen af van het artikel en kunnen ook van de verkoopprijs afhangen. Zoek de kosten voor jouw product op bij de prijs die je overweegt.</p>
        <h3 className="mt-4 font-bold text-ink">Dezelfde prijs, een andere marge</h3>
        <p className="mt-2">Neem weer €50 exclusief btw. Stel dat voor het product 21% btw geldt. Dan betaalt de koper €60,50. Bij een fictieve commissie van 10% over €60,50 is de variabele vergoeding €6,05. Na de €35 overige kosten houd je €8,95 over, oftewel 17,9% van €50.</p>
        <p className="mt-2">Zolang het percentage en vaste bedrag gelijk blijven, is 10% van een prijs inclusief 21% btw gelijk aan 12,1% van die prijs exclusief btw. Gebruik dan 0,121 in de formule. Bij dezelfde doelmarge geeft €35 ÷ (1 − 0,121 − 0,20) afgerond naar boven €51,55 exclusief btw. Controleer de werkelijke commissie bij die nieuwe prijs, inclusief eventuele tariefgrenzen en afronding.</p>
      </section>

      <section id="controle" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Controleer je prijs met de margecalculator</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Reken de platformcommissie in euro’s uit op basis van je gekozen prijs.</li>
          <li>Vul in de <Link href="/marge-berekenen" className={link}>margecalculator</Link> de verkoopprijs exclusief btw en je inkoopprijs in. Voor het eerste voorbeeld zijn dat €50 en €30.</li>
          <li>Vul €10 in bij extra kosten (€4 voor verpakking en verzending, €1 vast en €5 variabel). De calculator geeft €10 over en 20% marge.</li>
          <li>Reken de kosten opnieuw uit als je de prijs aanpast. Gebruik een recente afrekening om te controleren of je alle kosten hebt meegenomen.</li>
        </ol>
        <p className="mt-3">Een uitbetaling kan meerdere verkopen, commissies en retourcorrecties bundelen. Vergelijk daarom de afrekening per bestelling waar dat kan. In de voorbeelden rekenen we kosten zonder aftrekbare btw. Gebruik voor je eigen berekening de kosten die daadwerkelijk voor jouw rekening komen.</p>
      </section>
    </ArtikelLayout>
  );
}
