import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import NettoCalculator from "./NettoCalculator";

export const metadata: Metadata = {
  title: "Bruto netto zzp: netto inkomen berekenen (2026) | Gratis calculator",
  description:
    "Van bruto naar netto als zzp'er: bereken met de tarieven van 2026 wat je van je omzet overhoudt na kosten, inkomstenbelasting en Zvw-bijdrage.",
  alternates: { canonical: "/zzp-netto-inkomen-berekenen" },
  openGraph: {
    title: "Bruto netto zzp: netto inkomen berekenen (2026)",
    description: "Bereken wat je als zzp'er netto overhoudt van je omzet, met de tarieven van 2026.",
    url: "/zzp-netto-inkomen-berekenen",
  },
};

const faq = [
  {
    vraag: "Hoe bereken ik als zzp'er mijn netto inkomen uit mijn omzet?",
    antwoord:
      "Trek eerst je zakelijke kosten van je omzet af: dat is je winst. Over die winst betaal je inkomstenbelasting (na zelfstandigenaftrek, mkb-winstvrijstelling en heffingskortingen) en de bijdrage Zvw. Wat overblijft is je netto inkomen. Deze calculator doet die hele berekening met de tarieven van 2026.",
  },
  {
    vraag: "Wat is het verschil tussen bruto-netto in loondienst en als zzp'er?",
    antwoord:
      "In loondienst houdt je werkgever loonheffing in op een vast brutosalaris; wat op je rekening komt is netto. Als zzp'er bestaat een brutosalaris niet: je hebt omzet, daar gaan kosten vanaf, en over de winst betaal je zelf inkomstenbelasting en Zvw-bijdrage via de aangifte. Niemand houdt iets voor je in, dus je moet zelf reserveren.",
  },
  {
    vraag: "Hoeveel houd ik netto over van €5.000 omzet per maand?",
    antwoord:
      "Dat hangt af van je kosten. Stel dat je €500 kosten hebt, dan is je winst €4.500 per maand ofwel €54.000 per jaar. Met de tarieven van 2026 (zelfstandigenaftrek, mkb-winstvrijstelling en heffingskortingen meegerekend) betaal je daarover ongeveer €11.100 belasting en Zvw, en houd je netto zo'n €3.570 per maand over.",
  },
  {
    vraag: "Moet ik omzet inclusief of exclusief btw invullen?",
    antwoord:
      "Exclusief btw. De btw die je aan klanten rekent is niet van jou; die draag je af bij de btw-aangifte. Reken voor je inkomen dus altijd met bedragen exclusief btw.",
  },
  {
    vraag: "Waarom is de uitkomst een indicatie en geen exact bedrag?",
    antwoord:
      "De calculator rekent met de echte tarieven en kortingen van 2026, maar gaat uit van een standaardsituatie: winst als enig inkomen, geen fiscale partner en geen extra aftrekposten zoals hypotheekrente of lijfrente. Wijkt jouw situatie af, dan wijkt ook je aanslag af. De richting en orde van grootte kloppen wel.",
  },
  {
    vraag: "Wat is de bijdrage Zvw en waarom betaal ik die als zzp'er zelf?",
    antwoord:
      "De inkomensafhankelijke bijdrage Zorgverzekeringswet betaalt een werkgever normaal voor zijn werknemers. Als ondernemer betaal je hem zelf via de aanslag: in 2026 is dat 4,85% van je belastbare winst, tot een maximum inkomen van €79.409. Dit staat los van de premie die je maandelijks aan je zorgverzekeraar betaalt.",
  },
  {
    vraag: "Wat valt er onder zakelijke kosten?",
    antwoord:
      "Alles wat je uitgeeft om je omzet te kunnen draaien: software, telefoon, werkruimte, vervoer, verzekeringen, administratie, inkoop en opleidingen. Deze kosten verlagen je winst en dus je belasting. Privéuitgaven horen er niet bij.",
  },
  {
    vraag: "Hoeveel moet ik reserveren voor pensioen en arbeidsongeschiktheid?",
    antwoord:
      "Dat is persoonlijk en staat los van de belastingberekening. Veel zzp'ers zetten hiervoor een vast maandbedrag opzij, bijvoorbeeld via een lijfrente of arbeidsongeschiktheidsverzekering. Vul dat bedrag in bij het veld verzekering of pensioen, dan wordt het van je netto indicatie afgetrokken.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="zzp-netto-inkomen-berekenen"
      h1="Bruto netto berekenen als zzp'er"
      intro="Hoeveel houd je als zzp'er netto over van je omzet? Vul je maandomzet en kosten in en zie direct wat je na inkomstenbelasting en Zvw-bijdrage overhoudt, berekend met de echte tarieven en kortingen van 2026."
      tool={<NettoCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Waarom bruto-netto voor een zzp'er anders werkt</h2>
            <p className="mt-2">
              Wie uit loondienst komt, is gewend aan een brutosalaris waar de werkgever loonheffing
              op inhoudt: wat op je rekening verschijnt is netto. Als zzp'er bestaat die route niet.
              Er is geen brutosalaris en niemand houdt iets voor je in. De route is: omzet, min
              zakelijke kosten, is winst. Over die winst betaal je zelf inkomstenbelasting en de
              bijdrage Zvw, achteraf via de aangifte. Wat daarna overblijft is je netto inkomen.
              Zoek je dus op "bruto netto zzp", dan is dit de berekening die je nodig hebt.
            </p>
            <p className="mt-2">
              Een rekenvoorbeeld met de cijfers van 2026. Stel: je factureert €6.000 per maand
              exclusief btw en hebt €800 aan zakelijke kosten. Je winst is dan €5.200 per maand,
              ofwel €62.400 per jaar. Na de zelfstandigenaftrek van €1.200 en de mkb-winstvrijstelling
              van 12,7% blijft er een belastbare winst over van €53.428. Daarover betaal je in 2026
              ongeveer €12.590 inkomstenbelasting (na aftrek van de heffingskortingen) plus €2.591
              bijdrage Zvw: samen zo'n €15.181 per jaar, ofwel €1.265 per maand. Netto houd je dan
              ongeveer €3.935 per maand over. De calculator toont deze hele opbouw onder het resultaat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">De cijfers van 2026 in deze berekening</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-ink">Onderdeel</th>
                    <th className="py-2 font-semibold text-ink">2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Box 1, schijf 1 (t/m €38.883)</td>
                    <td className="py-2">35,75%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Box 1, schijf 2 (€38.883 – €78.426)</td>
                    <td className="py-2">37,56%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Box 1, schijf 3 (vanaf €78.426)</td>
                    <td className="py-2">49,50%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Zelfstandigenaftrek</td>
                    <td className="py-2">€1.200 (bij minimaal 1.225 uur per jaar)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Startersaftrek</td>
                    <td className="py-2">€2.123 (maximaal 3x in de eerste 5 jaar)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Mkb-winstvrijstelling</td>
                    <td className="py-2">12,7% van de winst na ondernemersaftrek</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Algemene heffingskorting</td>
                    <td className="py-2">max. €3.115, afbouw vanaf €29.736</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Arbeidskorting</td>
                    <td className="py-2">max. €5.685, afbouw vanaf €45.592</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Bijdrage Zvw</td>
                    <td className="py-2">4,85% over maximaal €79.409</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Wat is er in 2026 veranderd?</h2>
            <p className="mt-2">
              De zelfstandigenaftrek daalde fors: van €2.470 in 2025 naar €1.200 in 2026, en de
              afbouw gaat door naar €900 in 2027. Bij een gelijkblijvende winst betaal je in 2026
              dus meer belasting dan vorig jaar. Daar staat tegenover dat de Zvw-bijdrage daalde
              van 5,26% naar 4,85% en dat de heffingskortingen iets stegen (algemene
              heffingskorting van €3.068 naar €3.115, arbeidskorting van €5.599 naar €5.685). Het
              tarief in de eerste schijf zakte licht naar 35,75%, dat in de tweede schijf steeg
              licht naar 37,56%. Per saldo verandert er voor de meeste zzp'ers netto enkele
              tientjes per maand, vooral door de lagere zelfstandigenaftrek.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij bruto-netto rekenen als zzp'er</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>De omzet inclusief btw als inkomen zien. De btw is van de Belastingdienst en gaat er bij de kwartaalaangifte weer af.</li>
              <li>Vergeten dat je zelf moet reserveren. De aanslag komt pas na de aangifte, soms anderhalf jaar na het verdiende geld.</li>
              <li>Het netto bedrag van een loondienstbaan een op een vergelijken met winst. Als zzp'er betaal je zelf verzekeringen en pensioen die een werkgever normaal (deels) draagt.</li>
              <li>Rekenen met het toptarief over de hele winst. De schijven en kortingen zorgen ervoor dat de effectieve druk veel lager ligt: bij €62.400 winst zo'n 24%, bij €30.000 rond de 7%.</li>
              <li>De zelfstandigenaftrek meerekenen zonder aan het urencriterium van 1.225 uur te voldoen.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Wil je andersom rekenen, dus vanuit een gewenst netto inkomen naar het tarief dat je
              daarvoor moet vragen? Gebruik dan de{" "}
              <Link href="/uurtarief-berekenen" className="font-medium text-petrol-700 underline">
                uurtarief calculator
              </Link>
              . Weet je je winst en wil je vooral weten hoeveel je maandelijks opzij moet zetten
              voor de aanslag, dan is{" "}
              <Link href="/belasting-reserveren-zzp" className="font-medium text-petrol-700 underline">
                belasting reserveren
              </Link>{" "}
              de handigste tool. En check met de{" "}
              <Link href="/btw-berekenen" className="font-medium text-petrol-700 underline">
                btw calculator
              </Link>{" "}
              welk deel van je facturen btw is die je moet afdragen.
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="De berekening gebruikt de tarieven en heffingskortingen van 2026 en gaat uit van winst uit onderneming als enig inkomen, zonder fiscale partner of aanvullende aftrekposten. De uitkomst is een onderbouwde indicatie, geen belastingaangifte of financieel advies."
    />
  );
}
