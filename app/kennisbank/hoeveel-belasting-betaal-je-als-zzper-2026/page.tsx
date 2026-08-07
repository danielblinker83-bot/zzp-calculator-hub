import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug } from "@/lib/kennisbank";

const artikel = artikelBySlug("hoeveel-belasting-betaal-je-als-zzper-2026")!;

export const metadata: Metadata = {
  title: "Hoeveel belasting betaal je als zzp'er in 2026? | Uitleg met voorbeelden",
  description: artikel.description,
  alternates: { canonical: `/kennisbank/${artikel.slug}` },
  openGraph: {
    title: "Hoeveel belasting betaal je als zzp'er in 2026?",
    description: artikel.description,
    url: `/kennisbank/${artikel.slug}`,
    type: "article",
  },
};

const faq = [
  {
    vraag: "Hoeveel procent belasting betaal je als zzp'er?",
    antwoord:
      "Niet het schijftarief, maar een veel lager effectief percentage. Door de zelfstandigenaftrek, de mkb-winstvrijstelling en de heffingskortingen betaal je in 2026 bij €30.000 winst effectief zo'n 7%, bij €60.000 ongeveer 23% en bij €100.000 rond de 33%. Je werkelijke druk hangt af van je winst en je persoonlijke situatie.",
  },
  {
    vraag: "Betaal je als zzp'er inkomstenbelasting of vennootschapsbelasting?",
    antwoord:
      "Als eenmanszaak of zzp'er betaal je inkomstenbelasting in box 1 over je winst uit onderneming. Vennootschapsbelasting geldt alleen voor een bv. Zolang je onderneming een eenmanszaak is, loopt alles via je aangifte inkomstenbelasting.",
  },
  {
    vraag: "Tot welk bedrag betaal je als zzp'er geen belasting?",
    antwoord:
      "Een harde grens is er niet, maar door de aftrekposten en heffingskortingen betaal je bij een lage winst weinig inkomstenbelasting. Bij ongeveer €25.000 winst kom je in 2026 op zo'n €580 inkomstenbelasting uit; de Zvw-bijdrage van 4,85% betaal je wel altijd over je belastbare winst.",
  },
  {
    vraag: "Wat is de zelfstandigenaftrek in 2026?",
    antwoord:
      "€1.200, mits je aan het urencriterium van 1.225 uur per jaar voldoet. Dat is fors lager dan de €2.470 in 2025, en de aftrek daalt in 2027 verder naar €900. Startende ondernemers kunnen daar de startersaftrek van €2.123 bovenop krijgen, maximaal drie keer in de eerste vijf jaar.",
  },
];

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      intro="Als zzp'er betaal je geen loonbelasting, maar inkomstenbelasting over je winst. Hoeveel dat precies is, valt bijna altijd mee dankzij drie voordelen die een werknemer niet heeft. Dit artikel legt uit hoe de berekening werkt in 2026, met rekenvoorbeelden per winstniveau."
      faq={faq}
      disclaimerTekst="Dit artikel gebruikt de tarieven en heffingskortingen van 2026 en gaat uit van winst uit onderneming als enig inkomen, zonder fiscale partner of aanvullende aftrekposten. De genoemde bedragen zijn onderbouwde indicaties, geen belastingaangifte of financieel advies."
    >
      <section>
        <h2 className="text-xl font-bold text-ink">De route van winst naar belasting</h2>
        <p className="mt-2">
          Je betaalt als zzp'er geen belasting over je omzet en ook niet over je brutosalaris, want
          dat bestaat niet. Je betaalt over je winst: omzet min zakelijke kosten. Over die winst
          rekent de Belastingdienst niet meteen het schijftarief. Er gaan eerst twee ondernemers-
          voordelen af, en aan het eind komen er kortingen bij. De volgorde is:
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>Winst uit onderneming</li>
          <li>Min de zelfstandigenaftrek (€1.200 in 2026, bij het urencriterium)</li>
          <li>Min de mkb-winstvrijstelling (12,7% van wat er dan overblijft)</li>
          <li>Over die belastbare winst bereken je de inkomstenbelasting per schijf</li>
          <li>Daar gaan de algemene heffingskorting en de arbeidskorting vanaf</li>
          <li>En je betaalt de inkomensafhankelijke bijdrage Zvw van 4,85%</li>
        </ol>
        <p className="mt-2">
          Die aftrekposten en kortingen zorgen ervoor dat je effectieve belastingdruk veel lager
          ligt dan het schijftarief van 35,75% of 37,56% doet vermoeden.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ink">De cijfers van 2026</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[440px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-ink">Onderdeel</th>
                <th className="py-2 font-semibold text-ink">2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Schijf 1 (t/m €38.883)</td><td className="py-2">35,75%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Schijf 2 (€38.883 – €78.426)</td><td className="py-2">37,56%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Schijf 3 (vanaf €78.426)</td><td className="py-2">49,50%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Zelfstandigenaftrek</td><td className="py-2">€1.200</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Startersaftrek</td><td className="py-2">€2.123</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Mkb-winstvrijstelling</td><td className="py-2">12,7%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Algemene heffingskorting</td><td className="py-2">max. €3.115</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">Arbeidskorting</td><td className="py-2">max. €5.685</td></tr>
              <tr><td className="py-2 pr-4">Bijdrage Zvw</td><td className="py-2">4,85% (tot €79.409)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ink">Wat je effectief betaalt per winstniveau</h2>
        <p className="mt-2">
          Onderstaande tabel laat zien wat een zzp'er die aan het urencriterium voldoet in 2026
          kwijt is aan inkomstenbelasting plus Zvw-bijdrage, en wat er netto overblijft. Het gaat om
          winst als enig inkomen, zonder startersaftrek.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-ink">Winst per jaar</th>
                <th className="py-2 pr-4 font-semibold text-ink">Belasting + Zvw</th>
                <th className="py-2 pr-4 font-semibold text-ink">Netto</th>
                <th className="py-2 font-semibold text-ink">Effectieve druk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€25.000</td><td className="py-2 pr-4">€1.592</td><td className="py-2 pr-4">€23.408</td><td className="py-2">6,4%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€40.000</td><td className="py-2 pr-4">€5.445</td><td className="py-2 pr-4">€34.555</td><td className="py-2">13,6%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€60.000</td><td className="py-2 pr-4">€14.022</td><td className="py-2 pr-4">€45.978</td><td className="py-2">23,4%</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€80.000</td><td className="py-2 pr-4">€23.680</td><td className="py-2 pr-4">€56.320</td><td className="py-2">29,6%</td></tr>
              <tr><td className="py-2 pr-4">€100.000</td><td className="py-2 pr-4">€33.440</td><td className="py-2 pr-4">€66.560</td><td className="py-2">33,4%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2">
          De druk loopt op met je winst, omdat de heffingskortingen bij een hoger inkomen worden
          afgebouwd en een groter deel in de tweede schijf valt. Toch blijf je ook bij €100.000
          winst ruim onder het schijftarief, dankzij de aftrekposten.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ink">Waarom je effectieve druk lager is dan de schijf</h2>
        <p className="mt-2">
          Neem een winst van €60.000. Na de zelfstandigenaftrek van €1.200 en de mkb-winstvrijstelling
          van 12,7% blijft er een belastbare winst over van ongeveer €51.332. Daarover betaal je
          €11.532 inkomstenbelasting nadat de algemene heffingskorting en de arbeidskorting eraf zijn,
          plus €2.490 bijdrage Zvw. Samen €14.022, oftewel 23,4% van je winst. Het toptarief dat je
          aan die winst raakt is 37,56%, maar door de aftrekposten en kortingen betaal je effectief
          dus veel minder.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ink">Wat er in 2026 is veranderd</h2>
        <p className="mt-2">
          De grootste verandering is de zelfstandigenaftrek. Die daalde van €2.470 in 2025 naar
          €1.200 in 2026, en zakt in 2027 verder naar €900. Bij gelijke winst betaal je dit jaar dus
          iets meer belasting dan vorig jaar. Daar staat tegenover dat de bijdrage Zvw daalde van
          5,26% naar 4,85% en dat de heffingskortingen licht stegen met de inflatie. Het tarief in
          de eerste schijf ging minimaal omlaag naar 35,75%, dat in de tweede schijf iets omhoog naar
          37,56%. Per saldo houdt een gemiddelde zzp'er netto enkele tientjes per maand minder over
          dan in 2025.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-ink">Reserveer op tijd, want de aanslag komt laat</h2>
        <p className="mt-2">
          Je betaalt de inkomstenbelasting pas na je aangifte, vaak ruim een jaar nadat je het geld
          hebt verdiend. Zet daarom bij elke betaalde factuur direct een deel opzij op een aparte
          rekening. Het exacte percentage hangt af van je winst: bij €30.000 winst is 7% genoeg, bij
          €80.000 heb je bijna 30% nodig. Reken je eigen situatie na met de{" "}
          <Link href="/belasting-reserveren-zzp" className="font-medium text-petrol-700 underline">
            belasting reserveren
          </Link>{" "}
          tool, en gebruik de{" "}
          <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
            netto inkomen calculator
          </Link>{" "}
          om te zien wat je uiteindelijk overhoudt. Overweeg ook een voorlopige aanslag, dan betaal je
          maandelijks en voorkom je belastingrente.
        </p>
      </section>
    </ArtikelLayout>
  );
}
