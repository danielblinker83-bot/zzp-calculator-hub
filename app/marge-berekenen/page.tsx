import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import MargeCalculator from "./MargeCalculator";

export const metadata: Metadata = {
  title: "Marge berekenen | Winstmarge en opslag calculator (2026)",
  description:
    "Bereken marge en opslag uit je verkoopprijs en kosten. Bekijk rekenvoorbeelden en zie welk bedrag per verkoop overblijft voor je overige bedrijfskosten.",
  alternates: { canonical: "/marge-berekenen" },
  openGraph: {
    title: "Marge berekenen | Winstmarge en opslag calculator",
    description: "Bereken marge, opslag en het bedrag dat na je ingevulde kosten per verkoop overblijft. Met rekenvoorbeelden en uitleg over vaste kosten.",
    url: "/marge-berekenen",
  },
};

const faq = [
  {
    vraag: "Hoe bereken ik mijn winstmarge?",
    antwoord:
      "Winstmarge = (verkoopprijs min kosten) gedeeld door de verkoopprijs, keer 100. Verkoop je iets voor €100 dat €60 kostte, dan is je marge (100 − 60) / 100 = 40%. De calculator rekent dit direct voor je uit, inclusief eventuele extra kosten per verkoop.",
  },
  {
    vraag: "Wat is het verschil tussen marge en opslag (markup)?",
    antwoord:
      "Marge is je winst als percentage van de verkoopprijs; opslag is dezelfde winst als percentage van je kosten. Bij inkoop €60 en verkoop €100 is de marge 40%, maar de opslag 66,7%. In prijsgesprekken worden ze vaak verward, en dat scheelt echt geld: wie 40% marge wil en per ongeluk 40% opslag rekent, verkoopt voor €84 in plaats van €100.",
  },
  {
    vraag: "Hoe reken ik van een gewenste marge terug naar een verkoopprijs?",
    antwoord:
      "Deel je kosten door (1 min de gewenste marge als decimaal). Wil je 40% marge op €60 kosten, dan is de verkoopprijs 60 / (1 − 0,40) = €100. Vermenigvuldigen met 1,40 is de klassieke fout; dat geeft €84 en een werkelijke marge van maar 28,6%.",
  },
  {
    vraag: "Reken ik mijn marge met bedragen inclusief of exclusief btw?",
    antwoord:
      "Laat de btw die je over je verkoop berekent buiten je opbrengst. Neem bij inkoop en extra kosten alleen de btw mee die je niet kunt aftrekken. Kun je alle inkoop-btw aftrekken, dan vul je de kosten exclusief btw in.",
  },
  {
    vraag: "Wat is een gezonde winstmarge?",
    antwoord:
      "Dat hangt af van je kosten en hoeveel je verwacht te verkopen. Vermenigvuldig wat je per verkoop overhoudt met je verwachte aantal verkopen. Vergelijk dat bedrag met de vaste lasten en andere kosten die nog niet in je berekening zitten.",
  },
  {
    vraag: "Wat vul ik in bij extra kosten?",
    antwoord:
      "Alle directe kosten per verkoop naast de inkoopprijs: verzendkosten, verpakking, transactiekosten van je betaalprovider, platformcommissie of inhuur. Vaste lasten zoals huur of software horen er niet in; die verdeel je niet per verkoop maar bewaak je op maandniveau.",
  },
  {
    vraag: "Hoe bereken ik of een korting nog rendabel is?",
    antwoord:
      "Vergelijk in de calculator wat je per verkoop overhoudt vóór en na de korting. Bij €100 verkoopprijs en €60 kosten gaat dat bedrag door 10% korting van €40 naar €30 als de kosten gelijk blijven. Bereken prijsafhankelijke kosten zoals commissie opnieuw als je korting geeft.",
  },
  {
    vraag: "Hoe bereken ik mijn winstpercentage?",
    antwoord:
      "Je winstpercentage hangt af van waartegen je afzet. Zet je de winst af tegen de verkoopprijs, dan spreek je van marge; zet je hem af tegen de kostprijs, dan is het opslag. Winst €40 op een verkoop van €100 is 40% marge, maar 66,7% opslag op €60 kosten. Spreek daarom altijd af welk van de twee je bedoelt, want hetzelfde bedrag levert twee heel verschillende percentages op.",
  },
  {
    vraag: "Wat is het verschil tussen brutomarge en nettomarge?",
    antwoord:
      "De brutowinstmarge is de brutowinst (omzet min inkoopwaarde) als percentage van de omzet. Bij de nettowinstmarge zijn ook de overige bedrijfskosten van de winst afgetrokken. Deze calculator trekt alleen de ingevulde inkoopprijs en extra kosten af van de verkoopprijs. Het resultaat laat zien wat er per verkoop overblijft voor kosten die je nog niet hebt meegenomen.",
  },
  {
    vraag: "Hoe bereken ik de marge op een project of opdracht?",
    antwoord:
      "Behandel een project als één verkoop: tel al je directe kosten op (materiaal, inhuur, reiskosten, materieel) en zet die tegenover de projectprijs exclusief btw. Vul beide in de calculator in en je ziet je winst en marge op de klus. Reken je eigen uren als kostenpost mee als je wilt weten wat het project bovenop je eigen loon oplevert; laat ze weg als je puur de dekking op materiaal en inhuur wilt zien.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="marge-berekenen"
      h1="Marge berekenen"
      intro="Je marge bereken je door de verkoopprijs min de kosten te delen door de verkoopprijs en te vermenigvuldigen met 100. Vul je inkoopprijs, verkoopprijs en extra kosten in. Je ziet de marge, de opslag en het bedrag dat per verkoop overblijft voor je overige bedrijfskosten."
      tool={<MargeCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <p>
            Wil je een actieprijs bepalen? Bereken{" "}
            <Link href="/kennisbank/maximale-korting-berekenen" className="font-medium text-petrol-700 underline">
              hoeveel korting je kunt geven bij je gewenste marge
            </Link>.
          </p>
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe je marge en opslag berekent</h2>
            <p className="mt-2">
              Twijfel je welk percentage je moet gebruiken? Lees het{" "}
              <Link href="/kennisbank/verschil-marge-en-opslag" className="font-medium text-petrol-700 underline">
                verschil tussen marge en opslag, met omrekentabel en kortingsvoorbeeld
              </Link>.
            </p>
            <p className="mt-2">
              Verkoop je via een platform? Lees hoe je je{" "}
              <Link href="/kennisbank/verkoopprijs-platformkosten" className="font-medium text-petrol-700 underline">
                verkoopprijs berekent met platformcommissie en vaste kosten
              </Link>.
            </p>
            <p className="mt-2">
              Het bedrag per verkoop is je verkoopprijs min de ingevulde kosten. Stel: je koopt een
              product in voor €60, betaalt €5 aan verzending en verkoopt het voor €100 exclusief
              btw. Er blijft dan €35 over voor je overige bedrijfskosten en winst. De marge zet
              dat bedrag af tegen de verkoopprijs: 35 / 100 = 35%. Van elke euro omzet blijft
              dus 35 cent over na de ingevulde kosten. De opslag zet hetzelfde bedrag af
              tegen je kosten: 35 / 65 = 53,8%. Dat is het percentage dat je bovenop je kostprijs
              rekent.
            </p>
            <p className="mt-2">
              Beide percentages beschrijven dezelfde verkoop, maar ze zijn niet uitwisselbaar. Een
              marge van 50% komt overeen met een opslag van 100%: je verdubbelt je kostprijs. Wie
              in een onderhandeling "50% marge" zegt en "50% opslag" bedoelt, praat over twee heel
              verschillende prijzen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Wat blijft er over voor je vaste kosten?</h2>
            <p className="mt-2">
              Een positieve marge per verkoop betekent nog niet dat je hele bedrijf winst maakt.
              Met €35 per verkoop en 100 verkopen blijft €3.500 over na de ingevulde kosten.
              Zijn je overige bedrijfskosten in dezelfde periode €1.200, dan resteert €2.300.
              Dit fictieve voorbeeld neemt aan dat alle kosten zijn meegenomen; trek dezelfde
              kosten nooit twee keer af.
            </p>
            <p className="mt-2">
              Zet omzet en kosten voor dezelfde periode bij elkaar, zoals in de{" "}
              <a href="https://www.kvk.nl/geldzaken/exploitatiebegroting/" className="font-medium text-petrol-700 underline">
                uitleg van KVK over een exploitatiebegroting
              </a>. Wil je weten hoeveel verkopen je nodig hebt om de vaste kosten te dekken?
              Bereken dan je{" "}
              <Link href="/kennisbank/break-even-afzet-berekenen" className="font-medium text-petrol-700 underline">
                break-even afzet met het bedrag per verkoop
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Van gewenste marge naar verkoopprijs</h2>
            <p className="mt-2">
              De omgekeerde route gaat vaak mis. Wil je een marge van 40% op een kostprijs van
              €60, dan deel je door 1 min de marge: 60 / (1 − 0,40) = €100. De veelgemaakte fout
              is vermenigvuldigen met 1,40: dan kom je op €84, en daarin zit maar 28,6% marge. Hoe
              hoger de gewenste marge, hoe groter het gat: bij 50% is het verschil tussen delen en
              vermenigvuldigen al €30 op diezelfde kostprijs van €60.
            </p>
            <p id="marge-tabel-hulp" className="mt-3 text-sm">Op een smal scherm kun je de tabel opzij schuiven.</p>
            <div role="region" aria-label="Rekentabel marge en opslag" aria-describedby="marge-tabel-hulp" tabIndex={0} className="mt-2 overflow-x-auto rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol-700">
              <table className="w-full min-w-[440px] border-collapse text-sm">
                <caption className="pb-2 text-left text-sm text-slate-600">Verkoopprijs en opslag bij €60 totale kosten per verkoop</caption>
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th scope="col" className="py-2 pr-4 font-semibold text-ink">Gewenste marge</th>
                    <th scope="col" className="py-2 pr-4 font-semibold text-ink">Verkoopprijs bij €60 kosten</th>
                    <th scope="col" className="py-2 font-semibold text-ink">Bijbehorende opslag</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">20%</td>
                    <td className="py-2 pr-4">€75,00</td>
                    <td className="py-2">25%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">30%</td>
                    <td className="py-2 pr-4">€85,71</td>
                    <td className="py-2">42,9%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">40%</td>
                    <td className="py-2 pr-4">€100,00</td>
                    <td className="py-2">66,7%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">50%</td>
                    <td className="py-2 pr-4">€120,00</td>
                    <td className="py-2">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Marge en btw: houd ze uit elkaar</h2>
            <p className="mt-2">
              Bereken je btw over de verkoop, laat die dan buiten de opbrengst in je margeberekening.
              Bij inkoop en extra kosten laat je de btw die je mag aftrekken buiten de berekening.
              Niet-aftrekbare btw neem je mee als kosten. Bekijk de{" "}
              <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aftrekken/welke_btw_is_aftrekbaar/welke_btw_mag_u_aftrekken" className="font-medium text-petrol-700 underline">
                voorwaarden voor btw-aftrek bij de Belastingdienst
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij marge berekenen</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Marge en opslag door elkaar halen, waardoor de prijs structureel te laag uitvalt.</li>
              <li>Een gewenste marge omrekenen door te vermenigvuldigen in plaats van te delen.</li>
              <li>Verkoop-btw als opbrengst behandelen of aftrekbare btw bij je kosten optellen.</li>
              <li>Directe kosten per verkoop vergeten: verzending, verpakking, transactiekosten en platformcommissie eten stilletjes marge op.</li>
              <li>Vergeten dat uit de marge ook vaste lasten, je eigen inkomen en de belasting betaald moeten worden; brutomarge is geen nettowinst.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Wil je een complete prijsopgave maken waarin uren, materiaal en btw samenkomen,
              gebruik dan de{" "}
              <Link href="/offerte-calculator" className="font-medium text-petrol-700 underline">
                offerte calculator
              </Link>
              . Twijfel je welk btw-bedrag er bij je verkoopprijs hoort, reken het na met de{" "}
              <Link href="/btw-berekenen" className="font-medium text-petrol-700 underline">
                btw calculator
              </Link>
              . En wil je weten wat er van al die marges onderaan de streep netto overblijft,
              bekijk dan de{" "}
              <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
                netto inkomen calculator
              </Link>
              .
            </p>
          </section>
        </div>
      }
      faq={faq}
    />
  );
}
