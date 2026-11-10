import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("omzet-winst-banksaldo")!;
export const metadata = artikelMetadata(artikel, {
  title: "Omzet, winst en banksaldo als zzp’er uitgelegd",
});

const inhoudsopgave = [
  { id: "omzet", label: "Omzet en kosten op dezelfde basis" },
  { id: "voorbeeld", label: "Voorbeeld met een openstaande factuur" },
  { id: "netto", label: "Van winst naar een netto-indicatie" },
  { id: "maandcontrole", label: "Drie controles bij het afsluiten van je maand" },
];

const faq = [
  {
    vraag: "Wat is het verschil tussen omzet en winst?",
    antwoord: "Omzet is de opbrengst van je verkopen of opdrachten. Voor de winstberekening neem je de omzet exclusief btw en trek je de zakelijke kosten die bij dezelfde periode horen af. Zo geeft €4.000 omzet min €700 kosten €3.300 winst vóór inkomstenbelasting.",
  },
  {
    vraag: "Kan ik winst maken terwijl mijn banksaldo daalt?",
    antwoord: "Ja. Als klanten later betalen dan jij je kosten betaalt, kan je saldo dalen terwijl je opdrachten winst opleveren. Houd daarom ook bij wanneer je facturen betaald worden en welke betalingen eraan komen.",
  },
  {
    vraag: "Welke btw neem ik mee bij mijn zakelijke kosten?",
    antwoord: "Btw die je kunt aftrekken laat je buiten je kosten. Btw die je niet kunt aftrekken kan onderdeel zijn van de kosten, voor zover de uitgave zelf zakelijk aftrekbaar is.",
  },
  {
    vraag: "Vul ik mijn winst of mijn omzet in bij de nettocalculator?",
    antwoord: "Vul je omzet exclusief btw in bij omzet en geef je zakelijke kosten afzonderlijk op. Gebruik dezelfde periode voor beide. Bij sterk wisselende maanden kun je voor een jaarinschatting de verwachte jaarbedragen elk door twaalf delen.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Je winst vóór inkomstenbelasting is je omzet exclusief btw min je zakelijke kosten. Je banksaldo volgt de betalingen die al binnen of afgeschreven zijn. Een openstaande klantfactuur kan dus wel meetellen in je omzet, terwijl het geld nog onderweg is. Gebruik je omzet en kosten voor de nettocalculator en je betalingen voor je kasplanning."
    >
      <section id="omzet" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Zet omzet en kosten op dezelfde basis</h2>
        <p className="mt-2">Begin bij de opbrengst van het werk of de producten die bij je periode horen. Laat de btw die je aan klanten in rekening brengt buiten je omzet. Tel daarna de zakelijke kosten voor diezelfde periode op. Zo vergelijk je de opbrengsten met de uitgaven die aan dat werk zijn toe te rekenen.</p>
        <h3 className="mt-4 font-bold text-ink">Btw bij kosten en investeringen</h3>
        <p className="mt-2">Btw die je kunt aftrekken telt niet mee als kosten. Bij een uitgave met deels of volledig niet-aftrekbare btw kan die btw wel in de kosten zitten. De Belastingdienst maakt ook onderscheid tussen kosten die direct aftrekbaar zijn en investeringen waarvan je de kosten over meerdere jaren verdeelt. Gebruik de bedragen uit je boekhouding als uitgangspunt.</p>
      </section>
      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Een openstaande factuur verandert je banksaldo</h2>
        <p className="mt-2">Stel dat je in één maand twee opdrachten afrondt en factureert voor €2.500 en €1.500 exclusief btw. Beide vallen in dit voorbeeld onder 21% btw. Je hebt €700 aan zakelijke kosten exclusief btw en mag de €147 btw daarop volledig aftrekken. Alleen de eerste klant betaalt deze maand. Je betaalt wel alle kosten.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Winst en banksaldo in het voorbeeld" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Dezelfde maand bekeken vanuit je resultaten en betalingen</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Overzicht</th><th scope="col" className="p-2">Berekening</th><th scope="col" className="p-2 text-right">Uitkomst</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Omzet excl. btw</th><td className="p-2">€2.500 + €1.500</td><td className="whitespace-nowrap p-2 text-right">€4.000</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Winst vóór belasting</th><td className="p-2">€4.000 − €700</td><td className="whitespace-nowrap p-2 text-right">€3.300</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Banksaldo einde maand</th><td className="p-2">€1.000 beginsaldo + €3.025 ontvangen − €847 betaald</td><td className="whitespace-nowrap p-2 text-right">€3.178</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Het banksaldo bevat de btw uit de ontvangen en betaalde bedragen. In deze maand zijn er verder geen betalingen, ook geen btw-afdracht. De tweede klantfactuur van €1.815 inclusief btw staat nog open. Zodra die klant betaalt, stijgt je saldo. De opbrengst van de opdracht zit al in de resultaten van deze maand.</p>
        <p className="mt-2">KVK noemt het overzicht van verwachte ontvangsten en betalingen een liquiditeitsbegroting. Zet daarin per maand wanneer klanten vermoedelijk betalen en wanneer je kosten en belastingen van je rekening gaan.</p>
      </section>
      <section id="netto" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke cijfers vul je in bij de nettocalculator?</h2>
        <p className="mt-2">Voor dit voorbeeld gebruik je €4.000 bij omzet en €700 bij zakelijke kosten. De <Link href="/zzp-netto-inkomen-berekenen" className={link}>nettocalculator</Link> begint daarmee op €3.300 winst per maand. Daarna schat hij inkomstenbelasting en de inkomensafhankelijke bijdrage Zorgverzekeringswet. Een ingevulde buffer of een bedrag voor verzekering en pensioen vermindert wat de tool als netto-indicatie toont.</p>
        <p className="mt-2">De tool rekent maandwinst door naar een heel jaar. Heb je rustige en drukke maanden, tel dan eerst je verwachte omzet en kosten voor het hele jaar op. Deel beide totalen door twaalf. Zo baseer je de indicatie op je verwachte jaarwinst.</p>
      </section>
      <section id="maandcontrole" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Drie controles bij het afsluiten van je maand</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Controleer welke omzet en zakelijke kosten in de maand thuishoren.</li>
          <li>Vergelijk je facturen met je bankmutaties. Noteer welke klanten nog moeten betalen.</li>
          <li>Zet verwachte betalingen voor de komende maanden op een rij. Gebruik de <Link href="/belasting-reserveren-zzp" className={link}>calculator voor je belastingreservering</Link> als je een indicatie wilt toevoegen.</li>
        </ol>
      </section>
    </ArtikelLayout>
  );
}
