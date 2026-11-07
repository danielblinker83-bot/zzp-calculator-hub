import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("btw-terugrekenen-gemengde-bon")!;
export const metadata = artikelMetadata(artikel, {
  title: "Btw terugrekenen op een bon met 21% en 9%",
});
const toc = [
  { id: "splitsen", label: "Begin met de bedragen per tarief" },
  { id: "voorbeeld", label: "Een bon met 21% en 9% narekenen" },
  { id: "alleen-totaal", label: "Wat als je alleen het totaal weet?" },
  { id: "afronden", label: "Afronden en centverschillen" },
  { id: "controle", label: "Controleer de bon in vier stappen" },
];
const faq = [
  { vraag: "Kan ik een hele bon door 1,21 delen?", antwoord: "Dat kan alleen als het hele bedrag inclusief 21% btw is. Bevat de bon ook bedragen met 9% btw, splits dan eerst de bedragen per tarief. Deel het 21%-deel door 1,21 en het 9%-deel door 1,09." },
  { vraag: "Hoeveel btw zit in €230 met twee tarieven?", antwoord: "Dat hangt af van de verdeling. Bij €121 inclusief 21% en €109 inclusief 9% is de btw samen €30. Zonder bedragen per tarief kun je uit het totaal van €230 het btw-bedrag niet eenduidig bepalen." },
  { vraag: "Waarom mag ik niet 21% van het totaal aftrekken?", antwoord: "21% btw is berekend over het bedrag exclusief btw. In een prijs inclusief btw vertegenwoordigt de btw daarom 21 van de 121 delen. Gebruik totaal × 21 / 121 voor de btw of totaal / 1,21 voor het bedrag exclusief btw." },
  { vraag: "Mag ik de nagerekende btw automatisch aftrekken?", antwoord: "Een berekening zegt alleen hoeveel btw in de prijs zit. Of je die mag aftrekken, hangt onder meer af van het zakelijke gebruik en de factuurvoorwaarden. Controleer daarvoor de voorwaarden van de Belastingdienst en gebruik de gegevens op de factuur." },
];
const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout artikel={artikel} inhoudsopgave={toc} faq={faq}
      intro="Staan er 21% en 9% btw op één bon? Splits het totaal eerst per tarief. Deel het bedrag inclusief 21% btw door 1,21 en het bedrag inclusief 9% door 1,09. Het verschil met elk inclusief-bedrag is de btw. Met alleen het eindtotaal kun je de verdeling niet bepalen."
    >
      <section id="splitsen" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Begin met de bedragen per btw-tarief</h2>
        <p className="mt-2">Zoek op je bon of factuur welke regels onder hetzelfde tarief vallen. Kijk of de getoonde subtotalen inclusief of exclusief btw zijn. De voorbeelden hier beginnen bij bedragen inclusief btw. Als er al bedragen exclusief btw en een btw-specificatie staan, kun je die gebruiken voor je controle.</p>
        <p className="mt-2">Voor gewone facturen met verschillende tarieven vraagt de Belastingdienst om aparte bedragen exclusief btw. Gebruik die uitsplitsing als die beschikbaar is. Staat alleen een eindbedrag vermeld en ontbreken de tarieven of deelbedragen, vraag de leverancier dan om de specificatie.</p>
        <h3 className="mt-4 font-bold text-ink">De formules per tarief</h3>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li><strong>21% btw</strong> — exclusief = inclusief ÷ 1,21. Btw = inclusief × 21 ÷ 121.</li>
          <li><strong>9% btw</strong> — exclusief = inclusief ÷ 1,09. Btw = inclusief × 9 ÷ 109.</li>
        </ul>
        <p className="mt-3">Het tarief volgt uit de levering of dienst. Neem het toepasselijke tarief van de specificatie over. Een bon met verschillende producten is op zichzelf geen reden om een gemiddelde te kiezen. Deze uitleg gaat over bedragen waarop daadwerkelijk 21% of 9% btw is berekend.</p>
      </section>
      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Voorbeeld van een bon met 21% en 9%</h2>
        <p className="mt-2">Stel dat je bon twee gespecificeerde subtotalen heeft. Eén is €121 inclusief 21% btw en het andere €109 inclusief 9% btw. Je betaalt samen €230. Reken beide delen apart terug.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Rekenvoorbeeld met twee btw-tarieven" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Btw-specificatie bij een totaal van €230</caption>
            <thead><tr className="border-b border-slate-200">
              <th scope="col" className="p-2">Tarief</th><th scope="col" className="p-2">Inclusief</th><th scope="col" className="p-2">Exclusief</th><th scope="col" className="p-2">Btw</th>
            </tr></thead>
            <tbody>{[["21%", "€121", "€100", "€21"], ["9%", "€109", "€100", "€9"], ["Totaal", "€230", "€200", "€30"]].map(([tarief, inclusief, exclusief, btw]) => (
              <tr key={tarief} className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">{tarief}</th><td className="p-2">{inclusief}</td><td className="p-2">{exclusief}</td><td className="p-2">{btw}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <p className="mt-3">De controle is €100 + €100 + €21 + €9 = €230. Als je het hele bedrag door 1,21 deelt, kom je afgerond op €190,08 exclusief btw en €39,92 btw. Dat overschat de btw in dit voorbeeld met €9,92.</p>
        <p className="mt-2">Gebruik de <Link href="/btw-berekenen" className={link}>btwcalculator</Link> twee keer met de richting inclusief naar exclusief. Voer eerst €121 met 21% in en daarna €109 met 9%. Tel vervolgens de twee btw-uitkomsten bij elkaar op.</p>
      </section>
      <section id="alleen-totaal" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat als je alleen het eindtotaal kent?</h2>
        <p className="mt-2">Bij een totaal van €230 zijn meerdere verdelingen mogelijk. Bij €121 tegen 21% en €109 tegen 9% zit er €30 btw in. Bij €60,50 tegen 21% en €169,50 tegen 9% zit er afgerond €24,50 btw in. Beide bonnen komen op €230 uit.</p>
        <p className="mt-2">Het gemiddelde van 21% en 9% is 15%, maar dat percentage helpt hier niet om de juiste btw te vinden. Je moet weten welk deel bij welk tarief hoort. Controleer ook of er bedragen zonder berekende btw in het totaal zitten. De specificatie van de leverancier geeft je de benodigde gegevens.</p>
      </section>
      <section id="afronden" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Hoe ontstaan centverschillen bij het afronden?</h2>
        <p className="mt-2">De Belastingdienst schrijft voor btw-bedragen rekenkundig afronden op centen voor. Een derde decimaal onder 5 rond je naar beneden af, vanaf 5 naar boven. Je kunt afronden per levering of prestatie, of op het totaal. Daarbij moet je een vaste lijn volgen.</p>
        <h3 className="mt-4 font-bold text-ink">Twee regels van €0,03 exclusief btw</h3>
        <p className="mt-2">Bij 21% is de btw per regel €0,0063. Afgerond is dat €0,01, dus samen €0,02. Bereken je de btw over het subtotaal van €0,06, dan krijg je €0,0126, afgerond €0,01. De twee methoden leveren hier één cent verschil op. Controleer daarom welke methode de factuur gebruikt.</p>
        <p className="mt-2">Rond tussentijdse delingen zo laat mogelijk af en vergelijk daarna met de factuurspecificatie. Neem bij een bestaande factuur de vermelde btw als uitgangspunt en bespreek een onverklaard verschil met de leverancier.</p>
      </section>
      <section id="controle" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Controleer een gemengde bon in vier stappen</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Verzamel per tarief de bedragen en controleer of die inclusief of exclusief btw zijn.</li>
          <li>Bereken elk tarief afzonderlijk. Gebruik bij inclusief-bedragen de formules hierboven.</li>
          <li>Tel de bedragen exclusief btw en de btw bij elkaar op. De som moet aansluiten bij het totaal, rekening houdend met afronding.</li>
          <li>Controleer een verschil aan de hand van de regels en de afrondingsmethode op de factuur.</li>
        </ol>
        <p className="mt-3">Ga je daarna je opbrengst of productprijs beoordelen? Gebruik de <Link href="/marge-berekenen" className={link}>margecalculator</Link> met de juiste opbrengsten en kosten. Btw die je mag aftrekken laat je buiten je kosten. De voorwaarden voor aftrek staan bij de primaire bronnen hieronder.</p>
      </section>
    </ArtikelLayout>
  );
}
