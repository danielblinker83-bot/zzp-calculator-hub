import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import UurtariefCalculator from "./UurtariefCalculator";

export const metadata: Metadata = {
  title: "Uurtarief berekenen als zzp'er (2026) | Met echte belastingtarieven",
  description:
    "Bereken je minimale uurtarief als zzp'er met de belastingtarieven van 2026. Vanuit je gewenste netto inkomen, kosten en declarabele uren naar een richtprijs per uur.",
  alternates: { canonical: "/uurtarief-berekenen" },
  openGraph: {
    title: "Uurtarief berekenen als zzp'er (2026)",
    description: "Bereken een realistisch uurtarief met de belastingtarieven van 2026.",
    url: "/uurtarief-berekenen",
  },
};

const faq = [
  {
    vraag: "Wat is een goed uurtarief voor een zzp'er?",
    antwoord:
      "Dat verschilt sterk per branche en ervaring: een timmerman rekent andere tarieven dan een IT-consultant. Deze calculator rekent terug vanuit wat jij netto wilt overhouden, met de echte belastingtarieven van 2026. Zo ken je je ondergrens. Vergelijk daarnaast tarieven in jouw vakgebied, want de markt bepaalt de bovengrens.",
  },
  {
    vraag: "Hoe bereken ik mijn uurtarief vanuit een gewenst netto inkomen?",
    antwoord:
      "Bepaal eerst welke winst je nodig hebt om na inkomstenbelasting en Zvw-bijdrage je netto doel over te houden. Tel daar je zakelijke kosten bij op voor je omzetdoel, en deel dat door je effectieve declarabele uren per maand. Deze calculator doet die stappen automatisch met de tarieven van 2026.",
  },
  {
    vraag: "Waarom rekent de tool met declarabele uren en niet met gewerkte uren?",
    antwoord:
      "Niet elk gewerkt uur is factureerbaar. Administratie, acquisitie, offertes schrijven en reistijd betaal je zelf. De meeste zzp'ers factureren 50 tot 70 procent van hun werktijd. Reken daarom alleen met uren die je echt aan klanten kunt factureren, anders komt je tarief structureel te laag uit.",
  },
  {
    vraag: "Hoeveel belasting betaal ik als zzp'er in 2026?",
    antwoord:
      "Dat hangt af van je winst. In 2026 betaal je in box 1 35,75% tot €38.883, 37,56% tot €78.426 en 49,50% daarboven, plus 4,85% Zvw-bijdrage. Daar staan de zelfstandigenaftrek (€1.200), de mkb-winstvrijstelling (12,7%) en de heffingskortingen tegenover. Bij een winst van €60.000 kom je effectief op zo'n 23% uit; bij €30.000 op ongeveer 7%.",
  },
  {
    vraag: "Wat is het urencriterium en waarom vraagt de calculator ernaar?",
    antwoord:
      "Het urencriterium betekent dat je minimaal 1.225 uur per jaar aan je onderneming besteedt. Alleen dan heb je recht op de zelfstandigenaftrek van €1.200 (2026) en eventueel de startersaftrek van €2.123. Voldoe je er niet aan, dan betaal je meer belasting en moet je uurtarief dus iets hoger liggen om hetzelfde netto over te houden.",
  },
  {
    vraag: "Moet ik vakantie en ziekte meenemen in mijn uurtarief?",
    antwoord:
      "Ja. Als zzp'er heb je geen doorbetaalde vakantie of ziektedagen. Vul bij vrije weken het aantal weken in dat je per jaar niet factureert, bijvoorbeeld 5 weken vakantie plus 1 week uitloop. De calculator verhoogt je tarief dan zo dat je jaardoel toch haalbaar blijft.",
  },
  {
    vraag: "Is de uitkomst van deze calculator financieel advies?",
    antwoord:
      "Nee. De berekening gebruikt de echte tarieven en kortingen van 2026, maar gaat uit van een standaardsituatie: winst als enig inkomen, geen fiscale partner en geen extra aftrekposten. Je werkelijke situatie kan afwijken. Gebruik de uitkomst als onderbouwde richtprijs en leg je definitieve tarief voor aan je boekhouder als je twijfelt.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="uurtarief-berekenen"
      h1="Uurtarief berekenen als zzp'er"
      intro="Wat moet je per uur vragen om netto over te houden wat jij wilt? Vul je gewenste inkomen, kosten en declarabele uren in. De calculator rekent met de echte belastingtarieven van 2026 en geeft direct een richtprijs per uur, exclusief en inclusief btw."
      tool={<UurtariefCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe de berekening werkt</h2>
            <p className="mt-2">
              De calculator rekent terug vanuit je doel. Stel dat je netto €3.500 per maand wilt
              overhouden, ofwel €42.000 per jaar. De calculator zoekt dan eerst uit welke winst je
              daarvoor nodig hebt, rekening houdend met de inkomstenbelasting en de Zvw-bijdrage
              van 2026. Bij dit voorbeeld komt dat uit op een winst van ongeveer €52.400 per jaar,
              omdat je over die winst zo'n €10.400 aan belasting en premies kwijt bent.
            </p>
            <p className="mt-2">
              Bij die winst tel je je zakelijke kosten op. Reken je €500 kosten per maand, dan wordt
              je omzetdoel ongeveer €58.400 per jaar, ofwel zo'n €4.870 per maand. Werk je 100
              declarabele uren per maand, dan is je minimale uurtarief dus ongeveer €49 exclusief
              btw. Neem je 6 vrije weken per jaar op, dan stijgt dat naar zo'n €55, omdat je
              hetzelfde jaardoel in minder factureerbare uren moet halen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">De belastingcijfers van 2026 in deze berekening</h2>
            <p className="mt-2">
              Anders dan calculators die met een vast reserveringspercentage werken, rekent deze
              tool met de werkelijke tarieven en kortingen van 2026:
            </p>
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
                    <td className="py-2">€1.200 (bij urencriterium)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Startersaftrek</td>
                    <td className="py-2">€2.123 (maximaal 3x in eerste 5 jaar)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Mkb-winstvrijstelling</td>
                    <td className="py-2">12,7% van de winst na ondernemersaftrek</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Algemene heffingskorting</td>
                    <td className="py-2">maximaal €3.115</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">Arbeidskorting</td>
                    <td className="py-2">maximaal €5.685</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Zvw-bijdrage zelfstandigen</td>
                    <td className="py-2">4,85% (tot een inkomen van €79.409)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Wat is er in 2026 veranderd?</h2>
            <p className="mt-2">
              De grootste verandering voor zzp'ers is de zelfstandigenaftrek: die daalde van €2.470
              in 2025 naar €1.200 in 2026, en zakt in 2027 verder naar €900. Daarmee betaal je bij
              gelijke winst meer belasting dan vorig jaar. De Zvw-bijdrage daalde juist van 5,26%
              naar 4,85%. Het tarief in de eerste schijf ging licht omlaag (van 35,82% naar 35,75%)
              en dat in de tweede schijf licht omhoog (van 37,48% naar 37,56%). De heffingskortingen
              stegen mee met de inflatie. Per saldo houdt een gemiddelde zzp'er iets minder over dan
              in 2025; reden te meer om je uurtarief opnieuw door te rekenen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Vergeet de onzichtbare kosten niet</h2>
            <p className="mt-2">
              Een uurtarief moet meer dekken dan alleen je inkomen. Denk aan een
              arbeidsongeschiktheidsverzekering of broodfonds (al snel €100 tot €400 per maand),
              pensioenopbouw, een telefoon- en software-abonnement, een werkplek, vervoer en
              opleidingen. Zet die posten bij de zakelijke kosten in de calculator. En reken jezelf
              niet rijk met declarabele uren: wie fulltime werkt, factureert zelden meer dan 100 tot
              120 uur per maand, omdat acquisitie en administratie ook tijd kosten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij het bepalen van een uurtarief</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Je oude bruto maandsalaris delen door 160 uur. Daarmee vergeet je belasting, kosten, vakantie en niet-declarabele tijd.</li>
              <li>Rekenen met te veel declarabele uren, waardoor het tarief op papier laag genoeg lijkt maar het jaardoel nooit gehaald wordt.</li>
              <li>Vakantie en ziekte niet meerekenen. Zes weken niet factureren betekent ruim 10% minder omzet in dat jaar.</li>
              <li>De verzekeringen en pensioenopbouw vergeten die een werkgever normaal betaalt.</li>
              <li>Het tarief jaren niet aanpassen terwijl de kosten en de belastingdruk wel veranderen, zoals de gedaalde zelfstandigenaftrek in 2026.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Wil je zien wat een bepaalde omzet je netto per maand oplevert, in plaats van andersom
              te rekenen? Gebruik dan de{" "}
              <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
                netto inkomen calculator
              </Link>
              . Weet je je tarief en wil je bepalen hoeveel je maandelijks opzij moet zetten voor de
              aangifte, kijk dan bij{" "}
              <Link href="/belasting-reserveren-zzp" className="font-medium text-petrol-700 underline">
                belasting reserveren
              </Link>
              . En ga je met je nieuwe tarief een prijsvoorstel maken, dan rekent de{" "}
              <Link href="/offerte-calculator" className="font-medium text-petrol-700 underline">
                offerte calculator
              </Link>{" "}
              uren, materiaal en btw voor je om naar een compleet voorstel.
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="De belastingberekening gebruikt de tarieven en heffingskortingen van 2026 en gaat uit van winst uit onderneming als enig inkomen, zonder fiscale partner of aanvullende aftrekposten. De uitkomst is een onderbouwde indicatie, geen belastingaangifte of financieel advies."
    />
  );
}
