import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("uurtarief-indexeren")!;
export const metadata = artikelMetadata(artikel);

const inhoudsopgave = [
  { id: "afspraak", label: "Controleer de prijsafspraak" },
  { id: "formule", label: "Bereken het nieuwe uurtarief" },
  { id: "omzet", label: "Reken het effect op je omzet door" },
  { id: "melden", label: "Geef je klant de nieuwe prijs door" },
];

const faq = [
  {
    vraag: "Welke CBS-index gebruik ik voor mijn uurtarief?",
    antwoord: "Neem de reeks en de meetperiode uit je overeenkomst. Dat kan de consumentenprijsindex zijn of een index voor een bepaalde bedrijfstak. Is er geen index afgesproken, bespreek dan met je klant welke prijsaanpassing jullie willen toepassen.",
  },
  {
    vraag: "Kan ik indexcijfers met verschillende basisjaren delen?",
    antwoord: "Neem voor deze berekening beide cijfers uit dezelfde reeks met hetzelfde basisjaar. Als het CBS een nieuw basisjaar invoert, volg dan de overgangsinstructies voor de afgesproken reeks. Soms heb je voor de overgang een andere berekeningswijze nodig.",
  },
  {
    vraag: "Is een geïndexeerd tarief voldoende als mijn kosten harder stijgen?",
    antwoord: "Dat hangt af van je kosten en het aantal uren dat je verwacht te factureren. Bereken opnieuw welk uurtarief je nodig hebt. Een hoger tarief dan de afgesproken indexering vraagt om een afzonderlijke prijsafspraak met je klant.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Vermenigvuldig je huidige uurtarief met het nieuwe indexcijfer gedeeld door het oude. Gebruik de index en meetperiodes die jullie hebben afgesproken. Bij €80 per uur en een index die stijgt van 105 naar 108,15 wordt het nieuwe tarief €82,40."
    >
      <section id="afspraak" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke index en periode staan in je afspraak?</h2>
        <p className="mt-2">Lees vóór het rekenen welke CBS-reeks jullie gebruiken, welke maanden of jaren je vergelijkt en wanneer het nieuwe tarief ingaat. Gebruik bij deze berekening twee cijfers uit dezelfde reeks en met hetzelfde basisjaar. In de afspraak kan ook staan of je voorlopige of definitieve cijfers gebruikt en welke afronding of grens geldt.</p>
        <p className="mt-2">Is er nog geen indexering afgesproken? Bespreek een nieuwe prijs met je opdrachtgever en leg vast wanneer die ingaat en op welke opdrachten die van toepassing is.</p>
      </section>
      <section id="formule" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Zo reken je van indexcijfer naar tarief</h2>
        <p className="mt-2 font-semibold text-ink">Nieuw uurtarief = huidig uurtarief × (nieuw indexcijfer ÷ oud indexcijfer).</p>
        <p className="mt-2">Met de fictieve cijfers 105 en 108,15 is de factor 108,15 ÷ 105 = 1,03. Dat is 3% hoger. Bij een tarief van €80 exclusief btw komt er €2,40 per uur bij. Rond het eindbedrag volgens de afspraak af. Houd de tussenuitkomsten zo nauwkeurig mogelijk.</p>
        <h3 className="mt-4 font-bold text-ink">Waarom 3,15 indexpunten geen 3,15% zijn</h3>
        <p className="mt-2">Het verschil tussen de twee indexcijfers is 3,15 punten. Je deelt dat verschil door het oude cijfer, 105, en vermenigvuldigt met 100. Zo kom je op 3% verandering. Krijg je al een afgesproken percentage, dan kun je rechtstreeks rekenen met 1 plus dat percentage als decimaal.</p>
      </section>
      <section id="omzet" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat merk je ervan op je factuur?</h2>
        <p className="mt-2">Bij 60 factureerbare uren per maand levert €2,40 per uur extra €144 meer omzet op, zolang het aantal uren gelijk blijft. Begroot je minder uren, reken beide scenario’s door.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Maandomzet vóór en na indexering" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Maandomzet exclusief btw</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Tarief en uren</th><th scope="col" className="p-2 text-right">Omzet</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">€80 × 60 uur</th><td className="p-2 text-right">€4.800</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">€82,40 × 60 uur</th><td className="p-2 text-right">€4.944</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">€82,40 × 58 uur</th><td className="p-2 text-right">€4.779,20</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Wil je nagaan of je nieuwe tarief ook past bij je kosten en het inkomen dat je nodig hebt? Werk je begroting en factureerbare uren bij in de <Link href="/uurtarief-berekenen" className={link}>uurtariefcalculator</Link>.</p>
      </section>
      <section id="melden" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Maak de ingangsdatum duidelijk</h2>
        <p className="mt-2">Vermeld het oude tarief, het nieuwe tarief en de ingangsdatum. Volg de afgesproken termijn en manier van aankondigen. Wees duidelijk over werk dat rond de ingangsdatum begint of doorloopt. Gebruik daarna de tool voor een <Link href="/prijsverhoging-mail-maken" className={link}>prijsverhogingsmail</Link> om je toelichting op te stellen.</p>
      </section>
    </ArtikelLayout>
  );
}
