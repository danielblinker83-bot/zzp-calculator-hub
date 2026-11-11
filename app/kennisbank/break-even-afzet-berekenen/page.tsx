import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("break-even-afzet-berekenen")!;
export const metadata = artikelMetadata(artikel, {
  title: "Break-even afzet berekenen voor je vaste kosten",
});

const inhoudsopgave = [
  { id: "kosten", label: "Vaste en variabele kosten bepalen" },
  { id: "rekenvoorbeeld", label: "Bereken je minimale aantal verkopen" },
  { id: "scenario", label: "Reken een andere prijs of een winstdoel door" },
  { id: "controle", label: "Controleer je aannames" },
];

const faq = [
  {
    vraag: "Wat is de formule voor break-even afzet?",
    antwoord: "Deel de vaste kosten van de periode door de verkoopprijs per stuk min de variabele kosten per stuk. Rond bij ondeelbare producten naar boven af. De formule werkt als je per verkoop een positieve bijdrage overhoudt.",
  },
  {
    vraag: "Hoe bereken ik mijn omzet bij de minimale afzet?",
    antwoord: "Vermenigvuldig het minimale aantal verkopen met de verkoopprijs per stuk. Bij 71 verkopen van €45 is de omzet €3.195. Door het afronden op hele stuks kan die omzet iets hoger zijn dan het theoretische omslagpunt.",
  },
  {
    vraag: "Wat als mijn variabele kosten hoger zijn dan mijn verkoopprijs?",
    antwoord: "Dan levert elke extra verkoop verlies op vóór de vaste kosten. Bij een bijdrage van nul of minder kun je positieve vaste kosten niet terugverdienen door meer te verkopen. Reken eerst door wat een andere prijs of lagere variabele kosten opleveren.",
  },
  {
    vraag: "Kan ik dit gebruiken als ik meerdere producten verkoop?",
    antwoord: "Je kunt het omslagpunt schatten als je de verwachte verdeling van je verkopen kent. Bereken de bijdrage per product en neem een gemiddelde op basis van de verwachte aantallen. Verandert de verdeling, bereken het omslagpunt opnieuw.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Deel je vaste kosten door wat je per verkoop overhoudt na variabele kosten. Rond naar boven af als je alleen hele stuks verkoopt. Bij €1.200 vaste maandkosten en €17 over per verkoop heb je minstens 71 verkopen per maand nodig om je kosten te dekken."
    >
      <section id="kosten" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke kosten veranderen met je afzet?</h2>
        <p className="mt-2">Kies eerst een periode, bijvoorbeeld één maand. Tel de kosten op die binnen je verwachte verkoopbereik gelijk blijven, zoals huur en een vast softwareabonnement. KVK gebruikt deze indeling ook bij het opstellen van een exploitatiebegroting.</p>
        <h3 className="mt-4 font-bold text-ink">Bereken de bijdrage per verkoop</h3>
        <p className="mt-2">Trek van de verkoopprijs de kosten af die ontstaan door die ene verkoop. Denk aan inkoop, verpakking en eventuele verkoopcommissie. Het bedrag dat overblijft heet de dekkingsbijdrage of contributiemarge. Je gebruikt die bijdrage om je vaste kosten te betalen. Werk op een consistente basis. Laat bij belaste verkopen de verkoop-btw buiten de opbrengst en laat aftrekbare inkoop-btw buiten de kosten.</p>
        <p className="mt-2">Gebruik de <Link href="/marge-berekenen" className={link}>margecalculator</Link> om het bedrag per verkoop uit te rekenen. Vul alleen de variabele kosten in voor deze stap. Houd de vaste kosten apart voor de volgende berekening.</p>
      </section>
      <section id="rekenvoorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Bereken hoeveel producten je minimaal moet verkopen</h2>
        <p className="mt-2">In dit voorbeeld verkoop je één soort product voor €45 per stuk. De variabele kosten zijn €28 per stuk. Elke verkoop draagt dus €17 bij aan je vaste maandkosten van €1.200. Deel €1.200 door €17. De uitkomst is ongeveer 70,59 stuks, dus je hebt 71 hele verkopen nodig.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Resultaat rond het omslagpunt" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Bijdrage en resultaat per maand</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Verkopen</th><th scope="col" className="p-2">Totale bijdrage</th><th scope="col" className="p-2 text-right">Na vaste kosten</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">70 stuks</th><td className="p-2">€1.190</td><td className="p-2 text-right">−€10</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">71 stuks</th><td className="p-2">€1.207</td><td className="p-2 text-right">€7</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">100 stuks</th><td className="p-2">€1.700</td><td className="p-2 text-right">€500</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Bij 71 verkopen dek je de kosten uit het voorbeeld en houd je €7 over vóór belastingen. De bijbehorende omzet is 71 × €45 = €3.195. Bereken je afzet met de kosten en prijzen van dezelfde periode.</p>
      </section>
      <section id="scenario" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat verandert er bij een andere prijs of een winstdoel?</h2>
        <p className="mt-2">Verlaag je de verkoopprijs in het voorbeeld naar €40 en blijven de variabele kosten €28, dan houd je €12 per verkoop over. Je hebt dan €1.200 ÷ €12 = 100 verkopen nodig. Verandert een commissie mee met de prijs, bereken die opnieuw. Het <Link href="/kennisbank/verkoopprijs-platformkosten" className={link}>voorbeeld met platformkosten</Link> laat zien hoe je die vergoeding verwerkt.</p>
        <h3 className="mt-4 font-bold text-ink">Van kostendekkend naar een winstdoel</h3>
        <p className="mt-2">Wil je bij de oorspronkelijke prijs €500 winst vóór belastingen overhouden, tel dat bedrag dan op bij de €1.200 vaste kosten. Deel €1.700 door de bijdrage van €17. Je hebt dan 100 verkopen nodig.</p>
      </section>
      <section id="controle" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Controleer of je afzet haalbaar is</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Vergelijk het benodigde aantal verkopen met je werkelijke afzet en capaciteit.</li>
          <li>Controleer of je bij die hoeveelheid extra ruimte of personeel nodig hebt. Voeg de extra kosten toe en bereken het aantal opnieuw.</li>
          <li>Bereken ook wanneer de betalingen binnenkomen. Voorraad en huur kunnen al betaald zijn terwijl je klanten nog moeten betalen.</li>
        </ol>
        <p className="mt-3">Maak daarnaast een kasplanning om te zien of je rekeningen op tijd kunt betalen. Bekijk het <Link href="/kennisbank/omzet-winst-banksaldo" className={link}>voorbeeld met winst en banksaldo</Link>.</p>
      </section>
    </ArtikelLayout>
  );
}
