import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import BtwCalculator from "./BtwCalculator";

export const metadata: Metadata = {
  title: "Btw berekenen 2026 | Van exclusief naar inclusief (en terug)",
  description:
    "Bereken je btw voor 2026: 21%, 9% of 0%, van exclusief naar inclusief en omgekeerd. Gratis rekentool met direct het btw-bedrag en het totaalbedrag.",
  alternates: { canonical: "/btw-berekenen" },
  openGraph: {
    title: "Btw berekenen 2026 | Van exclusief naar inclusief (en terug)",
    description: "Bereken snel 21%, 9% of 0% btw, van en naar inclusief. Actueel voor 2026.",
    url: "/btw-berekenen",
  },
};

const faq = [
  {
    vraag: "Hoeveel is 21 procent btw over een bedrag?",
    antwoord:
      "Je vermenigvuldigt het bedrag exclusief btw met 0,21 om het btw-bedrag te krijgen, of met 1,21 om direct het totaal inclusief btw te krijgen. Bij €500 exclusief is de btw dus €105 en het totaal €605.",
  },
  {
    vraag: "Hoe bereken ik btw over een bedrag inclusief btw?",
    antwoord:
      "Deel het bedrag inclusief btw door 1,21 (bij 21%) of door 1,09 (bij 9%) om het bedrag exclusief btw te vinden. Trek dat af van het inclusief-bedrag voor het btw-bedrag zelf. Bij €605 inclusief en 21% btw kom je zo uit op €500 exclusief en €105 btw.",
  },
  {
    vraag: "Welk btw-tarief geldt voor mijn dienst of product?",
    antwoord:
      "De meeste zzp-diensten en producten vallen onder het algemene tarief van 21%. Het verlaagde tarief van 9% geldt voor een beperkte lijst, waaronder voedingsmiddelen, boeken, tijdschriften, kappersdiensten en enkele andere posten die de Belastingdienst met naam noemt. Het nultarief geldt vooral bij export naar landen buiten de EU en bij leveringen aan ondernemers in andere EU-landen. Twijfel je, raadpleeg dan de tarieventabel van de Belastingdienst of je boekhouder.",
  },
  {
    vraag: "Moet ik als zzp'er altijd btw op mijn factuur zetten?",
    antwoord:
      "Alleen als je btw-plichtig bent en niet onder de kleineondernemersregeling (KOR) valt. Val je wel onder de KOR, dan breng je geen btw in rekening en vermeld je op je factuur dat de KOR van toepassing is.",
  },
  {
    vraag: "Wat is het verschil tussen btw en omzetbelasting?",
    antwoord:
      "Geen verschil: btw (belasting toegevoegde waarde) en omzetbelasting zijn twee namen voor dezelfde belasting. De Belastingdienst gebruikt in officiële stukken vaak de term omzetbelasting, in de spreektaal hoor je vrijwel altijd btw.",
  },
  {
    vraag: "Reken ik btw over de kortingen die ik geef?",
    antwoord:
      "Nee, je berekent btw over het bedrag na aftrek van korting. Geef je bijvoorbeeld 10% korting op een factuur van €1.000 exclusief btw, dan reken je 21% btw over €900, niet over €1.000.",
  },
  {
    vraag: "Wat gebeurt er met de btw als mijn klant in het buitenland zit?",
    antwoord:
      "Bij een zakelijke klant binnen de EU verleg je de btw meestal naar de klant (0% op je factuur, met vermelding 'btw verlegd' en het btw-nummer van je klant). Bij een particuliere klant in de EU gelden vaak andere regels, en bij export buiten de EU geldt doorgaans het nultarief. Check per situatie de regels van de Belastingdienst, want dit hangt af van het type klant en het land.",
  },
  {
    vraag: "Is het bedrag dat deze calculator toont exact genoeg voor mijn btw-aangifte?",
    antwoord:
      "De rekenkundige uitkomst klopt tot op de cent. Of het toegepaste tarief (21%, 9% of 0%) voor jouw dienst het juiste is, blijft je eigen verantwoordelijkheid. Gebruik de uitkomst als betrouwbare basis, maar laat je btw-aangifte bij twijfel controleren door je boekhouder.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="btw-berekenen"
      h1="Btw berekenen"
      intro="Bereken in een paar seconden hoeveel btw je moet rekenen of hebt betaald. Kies of je van exclusief naar inclusief rekent of andersom, selecteer 21%, 9% of 0% en zie direct het btw-bedrag en het totaal, actueel voor 2026."
      tool={<BtwCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe je btw berekent</h2>
            <p className="mt-2">
              Btw, voluit belasting toegevoegde waarde, reken je als ondernemer bovenop je prijs.
              Je int het geld namens de Belastingdienst en draagt het af bij je btw-aangifte. Er
              zijn daarbij twee rekenrichtingen, en de meeste verwarring ontstaat doordat mensen ze
              door elkaar halen.
            </p>
            <p className="mt-2">
              Ga je van exclusief naar inclusief, dan vermenigvuldig je je bedrag met de factor 1
              plus het tarief. Bij 21% is die factor 1,21, bij 9% is dat 1,09. Vraag je €1.000
              exclusief btw voor een klus, dan reken je 1.000 × 1,21 = €1.210 inclusief btw. Het
              btw-bedrag zelf is dan €210.
            </p>
            <p className="mt-2">
              Ga je de andere kant op, van inclusief naar exclusief, dan deel je door diezelfde
              factor. Ontvang je een factuur van €1.210 inclusief 21% btw, dan is het bedrag
              exclusief btw 1.210 ÷ 1,21 = €1.000. Een veelgemaakte fout is dan 21% van €1.210
              aftrekken in plaats van door 1,21 te delen; dat geeft een verkeerde uitkomst van
              €254,10 in plaats van de juiste €210.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">De btw-tarieven in 2026</h2>
            <p className="mt-2">
              Nederland kent drie btw-tarieven. Deze tarieven zijn in 2026 niet gewijzigd ten
              opzichte van voorgaande jaren.
            </p>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-ink">Tarief</th>
                    <th className="py-2 font-semibold text-ink">Van toepassing op</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">21% (algemeen)</td>
                    <td className="py-2">De meeste diensten en producten, waaronder de meeste zzp-diensten.</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">9% (verlaagd)</td>
                    <td className="py-2">Voedingsmiddelen, boeken, tijdschriften, kappersdiensten en enkele andere posten uit de tarieventabel.</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">0% (nultarief)</td>
                    <td className="py-2">Export buiten de EU en, onder voorwaarden, leveringen aan btw-plichtige ondernemers in andere EU-landen.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Wat is er in 2026 veranderd?</h2>
            <p className="mt-2">
              De hoogte van de btw-tarieven zelf is voor 2026 ongewijzigd gebleven: 21%, 9% en 0%.
              Wel is de omzetgrens van de kleineondernemersregeling (KOR) voor 2026 gelijk
              gebleven op €20.000 per kalenderjaar, terwijl sinds 2025 de verplichte deelnametermijn
              van drie jaar is vervallen. Je kunt je dus op elk moment weer afmelden voor de KOR als
              je omzet groeit of je situatie verandert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Btw en de kleineondernemersregeling</h2>
            <p className="mt-2">
              Val je onder de KOR, dan reken je geen btw over je omzet en vermeld je op je factuur
              dat de KOR van toepassing is. Deze calculator blijft dan nuttig om te controleren wat
              een klant zou betalen zónder KOR, of om een inkoopfactuur van een leverancier na te
              rekenen. Voor deelname aan de KOR geldt een omzetgrens van €20.000 per kalenderjaar,
              zowel voor het lopende jaar als het jaar ervoor. Meld je je aan bij Mijn Belastingdienst
              Zakelijk, dan geldt de regeling vanaf de eerstvolgende mogelijke datum.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij het rekenen met btw</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Een percentage van het inclusief-bedrag aftrekken in plaats van door de factor (1,21 of 1,09) te delen.</li>
              <li>Btw berekenen over het bedrag vóór korting in plaats van erna.</li>
              <li>Bij verlegde btw naar het buitenland toch 21% in rekening brengen in plaats van het btw-nummer van de klant te vermelden en 0% te rekenen.</li>
              <li>Vergeten dat je onder de KOR geen btw mag vermelden, ook niet 0%, maar juist een verwijzing naar de KOR-vrijstelling.</li>
              <li>Het verlaagde tarief van 9% toepassen op een dienst die daar niet onder valt, omdat de tarieventabel per productgroep verschilt.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Ga je de uitkomst van deze berekening verwerken in een offerte, gebruik dan de{" "}
              <Link href="/offerte-calculator" className="font-medium text-petrol-700 underline">
                offerte calculator
              </Link>{" "}
              om uren, materiaal en btw in één keer om te rekenen naar een duidelijk voorstel. Moet
              je de bedragen daarna in een nette omschrijving op je factuur zetten, dan helpt{" "}
              <Link href="/factuurtekst-maken" className="font-medium text-petrol-700 underline">
                factuurtekst maken
              </Link>{" "}
              je daarbij. En wil je weten wat er van je omzet, na aftrek van btw en kosten,
              uiteindelijk netto overblijft, bekijk dan de{" "}
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
