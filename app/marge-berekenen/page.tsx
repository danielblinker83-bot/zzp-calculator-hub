import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import MargeCalculator from "./MargeCalculator";

export const metadata: Metadata = {
  title: "Marge berekenen | Winstmarge en opslag calculator (2026)",
  description:
    "Bereken je winst, winstmarge en opslagpercentage per verkoop. Vul inkoop- en verkoopprijs in en zie direct wat je verdient en welk percentage dat is.",
  alternates: { canonical: "/marge-berekenen" },
  openGraph: {
    title: "Marge berekenen | Winstmarge en opslag calculator",
    description: "Bereken je winst, marge en opslag op inkoop en verkoop.",
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
      "Altijd exclusief btw. De btw op je verkoopfactuur draag je af aan de Belastingdienst en de btw op je inkoop vraag je terug; beide zijn geen omzet of kosten. Reken je per ongeluk met inclusief-bedragen, dan lijkt je marge hoger dan hij is.",
  },
  {
    vraag: "Wat is een gezonde winstmarge?",
    antwoord:
      "Dat verschilt sterk per branche. Handel en e-commerce werken vaak met brutomarges van 20 tot 50% en hoog volume; dienstverleners rekenen doorgaans hogere marges omdat hun uren de kostprijs zijn. Belangrijker dan een benchmark: uit je marge moeten ook je vaste lasten, je eigen inkomen en je belasting betaald worden.",
  },
  {
    vraag: "Wat vul ik in bij extra kosten?",
    antwoord:
      "Alle directe kosten per verkoop naast de inkoopprijs: verzendkosten, verpakking, transactiekosten van je betaalprovider, platformcommissie of inhuur. Vaste lasten zoals huur of software horen er niet in; die verdeel je niet per verkoop maar bewaak je op maandniveau.",
  },
  {
    vraag: "Hoe bereken ik of een korting nog rendabel is?",
    antwoord:
      "Vul je inkoopprijs en de verlaagde verkoopprijs in de calculator in. Zie je de winst per verkoop, dan weet je meteen hoeveel extra stuks je moet verkopen om de korting terug te verdienen. Bij een marge van 40% kost 10% korting je een kwart van je winst per verkoop.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="marge-berekenen"
      h1="Marge berekenen"
      intro="Weet precies wat je verdient per verkoop. Vul je inkoopprijs, verkoopprijs en eventuele extra kosten in en zie direct je winst in euro's, je winstmarge en je opslagpercentage. Handig bij het bepalen van prijzen en het doorrekenen van kortingen."
      tool={<MargeCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe je marge en opslag berekent</h2>
            <p className="mt-2">
              Winst per verkoop is je verkoopprijs min al je directe kosten. Stel: je koopt een
              product in voor €60, betaalt €5 aan verzending en verkoopt het voor €100 exclusief
              btw. Je winst is dan €35. De marge zet die winst af tegen de verkoopprijs: 35 / 100
              = 35%. Van elke euro omzet houd je dus 35 cent over. De opslag zet dezelfde winst af
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
            <h2 className="text-xl font-bold text-ink">Van gewenste marge naar verkoopprijs</h2>
            <p className="mt-2">
              De omgekeerde route gaat vaak mis. Wil je een marge van 40% op een kostprijs van
              €60, dan deel je door 1 min de marge: 60 / (1 − 0,40) = €100. De veelgemaakte fout
              is vermenigvuldigen met 1,40: dan kom je op €84, en daarin zit maar 28,6% marge. Hoe
              hoger de gewenste marge, hoe groter het gat: bij 50% is het verschil tussen delen en
              vermenigvuldigen al €30 op diezelfde kostprijs van €60.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[440px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-ink">Gewenste marge</th>
                    <th className="py-2 pr-4 font-semibold text-ink">Verkoopprijs bij €60 kosten</th>
                    <th className="py-2 font-semibold text-ink">Bijbehorende opslag</th>
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
              Reken je marge altijd met bedragen exclusief btw. De 21% (of 9%) die je op je
              factuur zet, is geen omzet: die draag je af bij de kwartaalaangifte. Andersom is de
              btw op je inkoopfactuur geen kostenpost, want die vraag je als voorbelasting terug.
              De btw-tarieven zijn in 2026 ongewijzigd (21%, 9% en 0%), maar dat verandert niets
              aan het principe: marge is een verhaal exclusief btw. Verkoop je aan particulieren,
              onthoud dan dat de prijs die de klant ziet inclusief btw is; jouw marge zit in het
              exclusieve deel.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij marge berekenen</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Marge en opslag door elkaar halen, waardoor de prijs structureel te laag uitvalt.</li>
              <li>Een gewenste marge omrekenen door te vermenigvuldigen in plaats van te delen.</li>
              <li>Rekenen met bedragen inclusief btw, waardoor de marge op papier hoger lijkt.</li>
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
