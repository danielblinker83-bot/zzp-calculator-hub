import type { Metadata } from "next";
import Link from "next/link";
import CalculatorLayout from "@/components/CalculatorLayout";
import LoondienstZzpCalculator from "./LoondienstZzpCalculator";

export const metadata: Metadata = {
  title: "Van loondienst naar zzp: welk uurtarief evenaart je salaris? (2026)",
  description:
    "Reken je bruto jaarsalaris om naar het zzp-uurtarief en de winst die je nodig hebt om hetzelfde over te houden. Met de belastingtarieven van 2026.",
  alternates: { canonical: "/loondienst-naar-zzp" },
  openGraph: {
    title: "Van loondienst naar zzp berekenen (2026)",
    description: "Welk uurtarief en welke winst evenaren je huidige salaris?",
    url: "/loondienst-naar-zzp",
  },
};

const faq = [
  {
    vraag: "Wat moet ik als zzp'er verdienen om mijn salaris te evenaren?",
    antwoord:
      "Minder winst dan je brutosalaris, maar een hoger bedrag dan je nettoloon. Met een bruto jaarsalaris van €50.000 houd je netto ongeveer €39.140 over. Als zzp'er heb je daarvoor zo'n €47.607 winst nodig, omdat de zelfstandigenaftrek en mkb-winstvrijstelling je belastingdruk verlagen. Reken je pensioen, arbeidsongeschiktheid en een buffer mee, dan ligt het benodigde bedrag flink hoger. Vul je eigen salaris in de calculator in voor jouw cijfers.",
  },
  {
    vraag: "Hoe reken ik mijn salaris om naar een zzp-uurtarief?",
    antwoord:
      "Bepaal eerst het nettoloon dat je nu overhoudt, zoek de zzp-winst die datzelfde netto oplevert, tel je zakelijke kosten erbij op voor je omzetdoel, en deel dat door je declarabele uren per jaar. Bij €50.000 bruto en 1.400 declarabele uren komt het kale uurtarief op ongeveer €34 exclusief btw. De calculator doet die stappen met de tarieven van 2026 automatisch.",
  },
  {
    vraag: "Waarom heb ik als zzp'er minder winst nodig dan mijn brutosalaris?",
    antwoord:
      "Omdat je als ondernemer belastingvoordelen hebt die een werknemer niet heeft: de zelfstandigenaftrek (€1.200 in 2026) en de mkb-winstvrijstelling (12,7% van de winst). Daardoor betaal je over dezelfde winst minder inkomstenbelasting dan een werknemer over hetzelfde brutobedrag. Let op: dat voordeel wordt kleiner nu de zelfstandigenaftrek jaarlijks daalt.",
  },
  {
    vraag: "Is een gelijk nettoloon genoeg om over te stappen?",
    antwoord:
      "Nee, en dat is de belangrijkste valkuil. Een werkgever betaalt dingen die je als zzp'er zelf moet regelen: pensioenopbouw, doorbetaling bij ziekte en vakantie, en werkgeverspremies. Match je alleen je nettoloon, dan ga je er in werkelijkheid op achteruit. Tel daarom een bedrag voor pensioen, een arbeidsongeschiktheidsverzekering en een buffer op bij het te evenaren inkomen. In de calculator zie je meteen hoeveel je uurtarief daardoor stijgt.",
  },
  {
    vraag: "Hoeveel declarabele uren moet ik per jaar rekenen?",
    antwoord:
      "Veel minder dan de 2.080 uur van een fulltime baan. Als zzp'er besteed je tijd aan acquisitie, administratie en offertes die je niet factureert. 1.200 tot 1.500 declarabele uren per jaar is voor de meeste fulltime zzp'ers realistisch. Reken je met te veel uren, dan komt je uurtarief te laag uit en haal je je inkomensdoel niet.",
  },
  {
    vraag: "Houdt deze berekening rekening met de Zvw-bijdrage?",
    antwoord:
      "Ja, aan de zzp-kant. Als ondernemer betaal je zelf de inkomensafhankelijke bijdrage Zvw (4,85% in 2026) via de aanslag; die zit in de benodigde winst verwerkt. Bij een werknemer betaalt de werkgever die bijdrage, dus die is niet van het nettoloon afgetrokken. Daardoor is de vergelijking op nettoloon eerlijk.",
  },
  {
    vraag: "Klopt de berekening als ik parttime blijf werken naast mijn onderneming?",
    antwoord:
      "Dan is de uitkomst een startpunt, geen exact bedrag. De calculator gaat uit van je inkomen als enige bron. Blijf je daarnaast in loondienst, dan stapelen de inkomens en val je eerder in een hogere belastingschijf. Vraag in dat geval een voorlopige aanslag aan waarin je beide inkomens opgeeft.",
  },
];

export default function Page() {
  return (
    <CalculatorLayout
      slug="loondienst-naar-zzp"
      h1="Van loondienst naar zzp: wat moet je verdienen?"
      intro="Overweeg je de stap naar zzp'er en vraag je je af welk uurtarief je nodig hebt om er niet op achteruit te gaan? Vul je huidige bruto jaarsalaris in en zie welke winst en welk uurtarief je oude nettoloon evenaren, berekend met de tarieven van 2026."
      tool={<LoondienstZzpCalculator />}
      uitleg={
        <div className="space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-bold text-ink">Je oude salaris is niet je nieuwe omzet</h2>
            <p className="mt-2">
              De meest gemaakte denkfout bij de overstap naar zzp: je oude brutosalaris delen door
              het aantal werkuren en dat je uurtarief noemen. Zo werkt het niet. Als werknemer
              krijg je een brutosalaris waar loonheffing op wordt ingehouden; wat overblijft is je
              netto. Als zzp'er heb je omzet, daar gaan kosten en belasting vanaf, en je regelt zelf
              wat een werkgever eerst voor je deed. De juiste vraag is daarom niet "wat verdiende
              ik", maar "welke winst levert mij hetzelfde netto op, en wat kost het mij om alles zelf
              te regelen".
            </p>
            <p className="mt-2">
              Een rekenvoorbeeld met de cijfers van 2026. Verdien je nu €50.000 bruto per jaar
              (inclusief vakantiegeld), dan houd je daarvan netto ongeveer €39.140 over, oftewel
              €3.262 per maand. Om datzelfde netto als zzp'er over te houden heb je een winst van
              ongeveer €47.607 nodig. Dat is minder dan je brutosalaris, en dat komt door je
              ondernemersvoordelen. Werk je 1.400 declarabele uren per jaar zonder noemenswaardige
              kosten, dan is je kale uurtarief zo'n €34 exclusief btw.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Waarom je minder winst nodig hebt dan je brutosalaris</h2>
            <p className="mt-2">
              Een ondernemer heeft belastingvoordelen die een werknemer niet heeft. Over je winst
              gaan eerst de zelfstandigenaftrek (€1.200 in 2026) en de mkb-winstvrijstelling van
              12,7% eraf voordat de belasting wordt berekend. Daardoor betaal je over €47.607 winst
              ongeveer evenveel belasting als een werknemer over €50.000 bruto. Bij lagere inkomens
              is het verschil groter, bij hogere inkomens kleiner. Belangrijk: dit voordeel krimpt,
              want de zelfstandigenaftrek daalt van €2.470 in 2025 naar €1.200 in 2026 en €900 in
              2027.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">De eerlijke vergelijking: wat een werkgever stil voor je betaalt</h2>
            <p className="mt-2">
              Hier zit de echte valkuil. Als je alleen je nettoloon evenaart, ga je er in
              werkelijkheid op achteruit, want een werkgever betaalt een hoop dingen die je als
              zzp'er zelf moet regelen:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Pensioenopbouw, vaak deels door de werkgever betaald</li>
              <li>Doorbetaling bij ziekte, waarvoor jij een arbeidsongeschiktheidsverzekering nodig hebt</li>
              <li>Doorbetaalde vakantie en vakantiegeld</li>
              <li>Werkgeverspremies voor werknemersverzekeringen</li>
            </ul>
            <p className="mt-2">
              Tel je bijvoorbeeld €8.000 per jaar op voor pensioen, een AOV en een buffer, plus
              €3.000 aan zakelijke kosten, dan stijgt het benodigde uurtarief in ons voorbeeld van
              €34 naar ruim €46 exclusief btw. Dat is geen luxe, maar de prijs van hetzelfde
              vangnet dat je in loondienst gratis had. Vul die bedragen in de calculator in bij
              "pensioen, AOV en buffer", dan zie je meteen het eerlijke tarief.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten bij de overstap</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Het brutosalaris delen door 2.080 uur en dat je uurtarief noemen; je vergeet belasting, kosten en niet-declarabele tijd.</li>
              <li>Alleen het nettoloon evenaren en pensioen, AOV en vakantie vergeten.</li>
              <li>Rekenen met te veel declarabele uren, waardoor het tarief op papier laag genoeg lijkt.</li>
              <li>Het krimpende ondernemersvoordeel negeren: de zelfstandigenaftrek daalt elk jaar.</li>
              <li>Geen buffer aanhouden voor magere maanden, terwijl je inkomen als zzp'er schommelt.</li>
            </ul>
          </section>

          <section>
            <p className="mt-2">
              Wil je vanuit een gewenst inkomen naar een tarief rekenen in plaats van vanuit je oude
              salaris? Gebruik dan de{" "}
              <Link href="/uurtarief-berekenen" className="font-medium text-petrol-700 underline">
                uurtarief calculator
              </Link>
              . Ben je de stap gemaakt en wil je weten wat een bepaalde omzet netto oplevert, kijk
              dan bij{" "}
              <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
                netto inkomen berekenen
              </Link>
              . En zodra je winst maakt, helpt{" "}
              <Link href="/belasting-reserveren-zzp" className="font-medium text-petrol-700 underline">
                belasting reserveren
              </Link>{" "}
              je bepalen hoeveel je maandelijks opzij zet voor de aanslag.
            </p>
          </section>
        </div>
      }
      faq={faq}
      disclaimerTekst="De berekening gebruikt de tarieven en heffingskortingen van 2026 en gaat uit van je inkomen als enige bron, zonder fiscale partner of aanvullende aftrekposten. Het loondienst-nettoloon is een vereenvoudigde indicatie (brutosalaris als belastbaar inkomen, zonder pensioenpremie of 30%-regeling). De uitkomst is een onderbouwde indicatie, geen financieel advies."
    />
  );
}
