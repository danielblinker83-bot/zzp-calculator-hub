import type { Metadata } from "next";
import Link from "next/link";
import ArtikelLayout, { TocItem } from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("wat-is-een-goed-uurtarief-als-zzper")!;

export const metadata: Metadata = artikelMetadata(artikel, {
  title: "Wat is een goed uurtarief als zzp'er? | Zo bereken je het (2026)",
});

const toc: TocItem[] = [
  { id: "geen-vast-tarief", label: "Er bestaat geen goed uurtarief, wel een berekening" },
  { id: "terugrekenen", label: "Reken terug vanuit je gewenste inkomen" },
  { id: "tabel", label: "Wat je nodig hebt per inkomenswens" },
  { id: "declarabele-uren", label: "De valkuil van declarabele uren" },
  { id: "onzichtbare-kosten", label: "Vergeet je onzichtbare kosten niet" },
  { id: "markt", label: "De markt bepaalt de bovengrens" },
  { id: "fouten", label: "Veelgemaakte fouten" },
];

const faq = [
  {
    vraag: "Wat is een gemiddeld uurtarief voor een zzp'er?",
    antwoord:
      "Gemiddelden zeggen weinig, want ze lopen uiteen van rond de €35 voor uitvoerende beroepen tot €100 of meer voor gespecialiseerd advieswerk. Belangrijker dan het gemiddelde is je eigen ondergrens: het tarief waaronder je je kosten, belasting en gewenste inkomen niet meer dekt. Die ondergrens reken je uit; de markt bepaalt hoeveel je daarboven kunt vragen.",
  },
  {
    vraag: "Hoe bereken ik mijn minimale uurtarief?",
    antwoord:
      "Bepaal welke winst je nodig hebt om na belasting je gewenste netto over te houden, tel je zakelijke kosten erbij op, en deel dat door je declarabele uren per jaar. Wil je netto €3.000 per maand en werk je 1.400 declarabele uren, dan kom je met de tarieven van 2026 op ongeveer €34 per uur exclusief btw. Reken je eigen situatie na met de uurtarief calculator.",
  },
  {
    vraag: "Is €50 per uur genoeg als zzp'er?",
    antwoord:
      "Dat hangt af van je kosten, je uren en je inkomenswens. Bij €50 per uur en 1.200 declarabele uren haal je een omzet van €60.000. Daar gaan je kosten, je belasting en je reserveringen voor pensioen en arbeidsongeschiktheid nog vanaf. Voor de een is €50 ruim voldoende, voor de ander te weinig; reken het door in plaats van te gokken.",
  },
  {
    vraag: "Moet ik mijn uurtarief inclusief of exclusief btw noemen?",
    antwoord:
      "Naar zakelijke klanten noem je je tarief exclusief btw; die rekenen de btw toch terug. Naar particulieren vermeld je het bedrag inclusief btw, want dat is wat zij betalen. Je verdienste zit in beide gevallen in het bedrag exclusief btw.",
  },
  {
    vraag: "Hoe vaak moet ik mijn uurtarief verhogen?",
    antwoord:
      "Minstens jaarlijks, al is het maar met de inflatie. Je kosten stijgen en je belastingdruk verandert; in 2026 daalde bijvoorbeeld de zelfstandigenaftrek, waardoor je bij hetzelfde tarief netto minder overhoudt. Reken je tarief elk jaar opnieuw door en kondig een verhoging op tijd aan bij vaste klanten.",
  },
];

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      intro="Bijna elke beginnende zzp'er stelt deze vraag, en het eerlijke antwoord is: er bestaat geen vast goed tarief. Wel een goede manier om het te berekenen. Zo bepaal je een uurtarief dat je kosten, je belasting en je gewenste inkomen dekt, met voorbeelden voor 2026."
      inhoudsopgave={toc}
      faq={faq}
      disclaimerTekst="De bedragen in dit artikel zijn berekend met de tarieven en heffingskortingen van 2026, uitgaande van winst als enig inkomen. Het zijn onderbouwde indicaties, geen financieel advies."
    >
      <section id="geen-vast-tarief" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Er bestaat geen goed uurtarief, wel een goede berekening</h2>
        <p className="mt-2">
          Een tarief dat voor de ene zzp'er ruim is, is voor de ander te laag. Dat komt doordat een
          uurtarief geen kwaliteitsstempel is, maar de uitkomst van een rekensom: hoeveel wil je
          netto overhouden, hoeveel kost je onderneming, hoeveel belasting betaal je, en hoeveel uur
          kun je daadwerkelijk factureren. Wie zijn tarief kopieert van een ander, kopieert diens
          kosten en inkomenswens, niet die van zichzelf. Begin daarom niet bij "wat is normaal", maar
          bij "wat heb ik nodig".
        </p>
      </section>

      <section id="terugrekenen" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Reken terug vanuit je gewenste inkomen</h2>
        <p className="mt-2">
          De betrouwbaarste methode werkt van achter naar voren. Stel dat je netto €3.000 per maand
          wilt overhouden. Met de tarieven van 2026 heb je daarvoor een winst van ruim €42.000
          per jaar nodig, want over die winst betaal je zo'n €6.400 aan inkomstenbelasting en
          Zvw-bijdrage. Daar tel je je zakelijke kosten bij op, bijvoorbeeld €400 per maand, wat je
          omzetdoel op ongeveer €47.000 per jaar brengt. Werk je 1.400 declarabele uren per jaar, dan
          is je minimale uurtarief zo'n €34 exclusief btw.
        </p>
      </section>

      <section id="tabel" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat je nodig hebt per inkomenswens</h2>
        <p className="mt-2">
          De volgende tabel laat het minimale uurtarief zien voor een paar veelvoorkomende situaties,
          berekend met de tarieven van 2026 en het urencriterium.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left">
                <th className="py-2 pr-4 font-semibold text-ink">Gewenst netto p/m</th>
                <th className="py-2 pr-4 font-semibold text-ink">Kosten p/m</th>
                <th className="py-2 pr-4 font-semibold text-ink">Declarabele uren p/m</th>
                <th className="py-2 font-semibold text-ink">Uurtarief (excl. btw)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€2.500</td><td className="py-2 pr-4">€300</td><td className="py-2 pr-4">120</td><td className="py-2">± €25</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€3.000</td><td className="py-2 pr-4">€400</td><td className="py-2 pr-4">117</td><td className="py-2">± €34</td></tr>
              <tr className="border-b border-slate-100"><td className="py-2 pr-4">€3.500</td><td className="py-2 pr-4">€500</td><td className="py-2 pr-4">100</td><td className="py-2">± €49</td></tr>
              <tr><td className="py-2 pr-4">€3.000</td><td className="py-2 pr-4">€400</td><td className="py-2 pr-4">80</td><td className="py-2">± €49</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="declarabele-uren" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">De grootste valkuil: te veel declarabele uren</h2>
        <p className="mt-2">
          Kijk naar de laatste twee rijen. Dezelfde inkomenswens van €3.000 netto vraagt €34 per uur
          bij 117 declarabele uren, maar €49 per uur bij 80 uur. Het verschil is enorm, en juist hier
          gaat het vaak mis. Niet elk gewerkt uur is factureerbaar: acquisitie, offertes, administratie
          en reistijd betaal je zelf. De meeste fulltime zzp'ers factureren tussen de 1.000 en 1.500
          uur per jaar, niet de 2.080 uur van een fulltime baan. Reken je met te veel declarabele uren,
          dan lijkt je tarief laag genoeg, maar haal je je jaardoel nooit.
        </p>
      </section>

      <section id="onzichtbare-kosten" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Vergeet je onzichtbare kosten niet</h2>
        <p className="mt-2">
          Een werknemer krijgt pensioen, doorbetaalde vakantie en doorbetaling bij ziekte van de
          werkgever. Als zzp'er betaal je dat zelf. Een arbeidsongeschiktheidsverzekering of broodfonds
          kost al snel €100 tot €400 per maand, en voor een fatsoenlijk pensioen leg je maandelijks
          een bedrag opzij. Tel die posten mee als kosten, anders lijkt je tarief toereikend terwijl je
          in werkelijkheid je eigen vangnet niet betaalt.
        </p>
      </section>

      <section id="markt" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">De markt bepaalt de bovengrens</h2>
        <p className="mt-2">
          Je berekende tarief is je ondergrens: eronder ga je erop achteruit. Hoeveel je daarboven kunt
          vragen, bepaalt je markt. Vergelijk met wat collega's in jouw vakgebied en regio rekenen, en
          weeg je ervaring en specialisatie mee. Een schaars specialisme rechtvaardigt een hoger tarief
          dan werk dat veel mensen kunnen. Begin dus bij de berekening, en gebruik de markt om te bepalen
          hoeveel ruimte je naar boven hebt.
        </p>
      </section>

      <section id="fouten" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Veelgemaakte fouten</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>Je oude brutosalaris delen door 160 uur en dat je tarief noemen.</li>
          <li>Rekenen met te veel declarabele uren, waardoor je jaardoel onhaalbaar wordt.</li>
          <li>Pensioen, arbeidsongeschiktheid en vakantie vergeten mee te rekenen.</li>
          <li>Het tarief jaren niet aanpassen terwijl kosten en belastingdruk oplopen.</li>
          <li>Klakkeloos het tarief van een ander overnemen zonder je eigen cijfers.</li>
        </ul>
      </section>

      <section>
        <p className="mt-2">
          Reken je eigen ondergrens uit met de{" "}
          <Link href="/uurtarief-berekenen" className="font-medium text-petrol-700 underline">
            uurtarief calculator
          </Link>
          . Kom je uit loondienst en wil je weten welk tarief je oude salaris evenaart, gebruik dan de{" "}
          <Link href="/loondienst-naar-zzp" className="font-medium text-petrol-700 underline">
            van loondienst naar zzp
          </Link>{" "}
          tool. En wil je zien wat een bepaald tarief netto oplevert, kijk dan bij{" "}
          <Link href="/zzp-netto-inkomen-berekenen" className="font-medium text-petrol-700 underline">
            netto inkomen berekenen
          </Link>
          .
        </p>
      </section>
    </ArtikelLayout>
  );
}
