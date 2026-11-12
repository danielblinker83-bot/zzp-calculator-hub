import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import BelastingCalculator from "./BelastingCalculator";

export const metadata: Metadata = {
  title: "Hoeveel belasting apart zetten als zzp'er? (2026) | Calculator",
  description:
    "Bereken met de tarieven van 2026 hoeveel je als zzp'er per maand, kwartaal en jaar apart zet voor inkomstenbelasting en Zvw. Geen vuistregel maar echt rekenwerk.",
  alternates: { canonical: "/belasting-reserveren-zzp" },
  openGraph: {
    title: "Hoeveel belasting apart zetten als zzp'er? (2026)",
    description: "Bereken je belastingreserve per maand, kwartaal en jaar met de tarieven van 2026.",
    url: "/belasting-reserveren-zzp",
  },
};

const faq = [
  {
    vraag: "Hoeveel procent van mijn winst moet ik apart zetten als zzp'er?",
    antwoord:
      "De veelgehoorde vuistregel van 30 tot 40 procent is voor de meeste zzp'ers te ruim. Met de tarieven van 2026 betaal je bij €30.000 winst effectief zo'n 7%, bij €54.000 ongeveer 21% en bij €90.000 rond de 32%. Deze calculator rekent het exacte percentage voor jouw winst uit; wil je zekerheid inbouwen, voeg dan een veiligheidsmarge van 10% toe.",
  },
  {
    vraag: "Telt btw ook mee als belastingreserve?",
    antwoord:
      "Nee. De btw op je facturen is nooit van jou geweest: je int hem voor de Belastingdienst en draagt hem per kwartaal af. Zet het btw-bedrag van elke factuur direct apart, bovenop je reserve voor inkomstenbelasting en Zvw. De calculator telt beide voor je op als je je btw-afdracht invult.",
  },
  {
    vraag: "Wanneer betaal ik inkomstenbelasting als zzp'er?",
    antwoord:
      "De betaaldata staan op je aanslag. Heb je een voorlopige aanslag voor het lopende jaar, dan kun je onder voorwaarden in maandelijkse termijnen betalen. De Belastingdienst verrekent de voorlopige aanslag bij de definitieve aanslag.",
  },
  {
    vraag: "Wat is een voorlopige aanslag en is die verstandig?",
    antwoord:
      "Een voorlopige aanslag is gebaseerd op een schatting van onder meer je inkomen. Je kunt een voorlopige aanslag aanvragen via Mijn Belastingdienst. Controleer de gegevens als je winst verandert en pas de aanslag zo nodig aan.",
  },
  {
    vraag: "Waar zet ik mijn belastingreserve het beste neer?",
    antwoord:
      "Op een aparte spaar- of tweede zakelijke rekening die je niet voor uitgaven gebruikt. Maak er een gewoonte van om bij elke betaalde factuur direct het gereserveerde deel over te boeken. Wat je niet ziet staan, geef je ook niet uit.",
  },
  {
    vraag: "Moet ik ook reserveren als ik weinig winst maak?",
    antwoord:
      "Bij een lage winst valt de aanslag mee: door de heffingskortingen, zelfstandigenaftrek en mkb-winstvrijstelling betaal je in 2026 bij bijvoorbeeld €22.000 winst maar zo'n €460 inkomstenbelasting; de Zvw-bijdrage van 4,85% komt daar wel altijd bij. Vul je winst in de calculator in en je ziet direct of en hoeveel je opzij moet zetten.",
  },
  {
    vraag: "Wat gebeurt er als ik te weinig heb gereserveerd?",
    antwoord:
      "De betaalverplichting volgt uit je aanslag. Kun je die niet op tijd betalen, kijk dan bij de Belastingdienst welke mogelijkheden er zijn. Controleer je jaarwinst en reservering opnieuw als je winstverwachting verandert.",
  },
  {
    vraag: "Betaal ik als zzp'er loonbelasting?",
    antwoord:
      "Nee. Loonbelasting houdt een werkgever in op het salaris van werknemers. Als zzp'er heb je geen werkgever en dus geen loonbelasting; je betaalt inkomstenbelasting over je winst, plus de inkomensafhankelijke bijdrage Zvw. Die bereken en reserveer je zelf, want er wordt niets voor je ingehouden. Zoek je op 'loonbelasting zzp', dan is dit de berekening die je nodig hebt.",
  },
  {
    vraag: "Klopt deze berekening als ik naast mijn onderneming ook in loondienst werk?",
    antwoord:
      "Dan is de uitkomst een ondergrens. Deze calculator gaat uit van je winst als enig inkomen. Heb je daarnaast een baan, dan stapelt dat inkomen bovenop je winst, waardoor je eerder in een hogere belastingschijf valt en je winst zwaarder wordt belast. Ook zijn de heffingskortingen vaak al (deels) verrekend via je loon. Reserveer in dat geval ruimer, of vraag een voorlopige aanslag aan waarin je beide inkomens opgeeft, zodat de Belastingdienst het totaal goed berekent.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="belasting-reserveren-zzp"
      h1="Hoeveel belasting apart zetten als zzp'er?"
      intro="Voorkom verrassingen bij je aangifte. Vul je gemiddelde maandwinst in en zie direct hoeveel je per maand, kwartaal en jaar opzij zet voor inkomstenbelasting en Zvw-bijdrage, berekend met de echte tarieven van 2026 in plaats van een vuistregel."
      tool={<BelastingCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <p>
            Betaal je al een voorlopige aanslag? Lees hoe je{" "}
            <Link href="/kennisbank/voorlopige-aanslag-belastingreserve" className="font-medium text-petrol-700 underline">
              je extra belastingreserve naast de termijnen berekent
            </Link>.
          </p>
          <section>
            <h2 className="text-xl font-bold text-ink">Hoe de berekening werkt</h2>
            <p className="mt-2">
              Als zzp'er betaal je inkomstenbelasting en de bijdrage Zvw over je winst, vaak pas
              maanden na afloop van het jaar. Deze calculator rekent je maandwinst om naar een
              jaarwinst en berekent daarover de werkelijke heffing van 2026: eerst gaan de
              zelfstandigenaftrek (€1.200) en de mkb-winstvrijstelling (12,7%) van de winst af,
              daarna wordt de belasting per schijf berekend en verminderd met de algemene
              heffingskorting en de arbeidskorting. Daar komt de Zvw-bijdrage van 4,85% bij.
            </p>
            <p className="mt-2">
              Een voorbeeld. Bij een winst van €4.500 per maand (€54.000 per jaar) bedraagt de
              totale heffing in 2026 ongeveer €11.124 per jaar. Dat is €927 per maand, ofwel een
              effectieve druk van zo'n 21% van je winst; flink minder dan de vuistregel van 35%
              die je vaak hoort. Bij een winst van €2.500 per maand is de druk zelfs maar
              ongeveer 7%, dankzij de heffingskortingen. Andersom geldt het ook: boven de
              €78.426 belastbare winst betaal je over elke extra euro 49,5%.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Reserveren in 2026: wat je opzij zet per winstniveau</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-left">
                    <th className="py-2 pr-4 font-semibold text-ink">Winst per maand</th>
                    <th className="py-2 pr-4 font-semibold text-ink">Reserveren per maand (2026)</th>
                    <th className="py-2 font-semibold text-ink">Effectieve druk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">€2.500</td>
                    <td className="py-2 pr-4">± €168</td>
                    <td className="py-2">± 7%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">€4.500</td>
                    <td className="py-2 pr-4">± €927</td>
                    <td className="py-2">± 21%</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-2 pr-4">€6.000</td>
                    <td className="py-2 pr-4">± €1.651</td>
                    <td className="py-2">± 28%</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">€7.500</td>
                    <td className="py-2 pr-4">± €2.376</td>
                    <td className="py-2">± 32%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">
              Uitgangspunten: urencriterium gehaald, geen startersaftrek, winst als enig inkomen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Wat is er in 2026 veranderd?</h2>
            <p className="mt-2">
              De zelfstandigenaftrek daalde van €2.470 (2025) naar €1.200 (2026); bij dezelfde
              winst reserveer je dit jaar dus iets meer dan vorig jaar. De Zvw-bijdrage ging
              omlaag van 5,26% naar 4,85%, de heffingskortingen stegen licht mee met de inflatie
              en de schijfgrenzen schoven op. Reken je reservering daarom elk jaar opnieuw uit,
              zeker nu de zelfstandigenaftrek in 2027 verder daalt naar €900.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij belasting reserveren</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>De btw-ontvangsten als omzet behandelen en uitgeven. Die 21% op je factuur moet er bij de kwartaalaangifte weer uit.</li>
              <li>Een vast percentage blijven hanteren zonder je reservering opnieuw te berekenen als je winstverwachting verandert.</li>
              <li>Reserveren over je omzet in plaats van over je winst, waardoor je onnodig veel vastzet.</li>
              <li>Geen rekening houden met de voorlopige aanslag: wie die maandelijks betaalt, hoeft daarnaast niet ook nog het volle bedrag te reserveren.</li>
              <li>Het gereserveerde geld op de lopende rekening laten staan, waar het ongemerkt opgaat aan uitgaven.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Wil je niet alleen weten wat je opzij zet, maar ook wat je daarna echt overhoudt?
              De{" "}
              <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
                netto inkomen calculator
              </Link>{" "}
              laat de volledige route van omzet naar netto zien. Twijfel je of je tarief hoog
              genoeg is om je doelinkomen én je belasting te dekken, reken het na met de{" "}
              <Link href="/uurtarief-berekenen" className="font-medium text-petrol-700 underline">
                uurtarief calculator
              </Link>
              . En de btw die je dit kwartaal moet afdragen bereken je snel met de{" "}
              <Link href="/btw-berekenen" className="font-medium text-petrol-700 underline">
                btw calculator
              </Link>
              .
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="De berekening gebruikt de tarieven en heffingskortingen van 2026 en gaat uit van winst uit onderneming als enig inkomen, zonder fiscale partner of aanvullende aftrekposten. De uitkomst is een onderbouwde indicatie, geen belastingaangifte of financieel advies."
    />
  );
}
