import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS, SITE } from "@/lib/site";
import ToolCard from "@/components/ToolCard";
import FAQ from "@/components/FAQ";
import AdPlaceholderTop from "@/components/AdPlaceholderTop";
import DisclaimerBox from "@/components/DisclaimerBox";

export const metadata: Metadata = {
  title: "Gratis zzp calculators 2026 | Btw, uurtarief en netto inkomen",
  description:
    "Gratis rekentools voor zzp'ers met de echte tarieven van 2026: btw, uurtarief, bruto-netto, belastingreserve, kilometervergoeding en offertes. Zonder account.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gratis zzp calculators | ZZP Calculator Hub",
    description: SITE.description,
    url: "/",
  },
};

const faq = [
  {
    vraag: "Zijn deze calculators gratis?",
    antwoord: "Ja, alle tools op deze site zijn gratis te gebruiken. Je hebt geen account nodig en we slaan je invoer niet op.",
  },
  {
    vraag: "Zijn de uitkomsten exact?",
    antwoord: "De btw-, marge- en offerteberekeningen zijn rekenkundig exact. De belasting-tools rekenen met de echte schijven, aftrekposten en heffingskortingen van 2026, maar gaan uit van een standaardsituatie; de uitkomst is daarmee een onderbouwde indicatie. Wijkt je situatie af, bijvoorbeeld door een fiscale partner of extra aftrekposten, vraag dan advies aan een boekhouder.",
  },
  {
    vraag: "Zijn de calculators actueel voor 2026?",
    antwoord: "Ja. De belastingcalculators gebruiken de tarieven van 2026: de box 1-schijven, de zelfstandigenaftrek van €1.200, de mkb-winstvrijstelling van 12,7%, de heffingskortingen en de Zvw-bijdrage van 4,85%. Ook de kilometervergoeding staat op het 2026-tarief van €0,25.",
  },
  {
    vraag: "Voor wie zijn deze tools bedoeld?",
    antwoord: "Voor zzp'ers, freelancers en kleine ondernemers in Nederland die snel een praktische berekening willen maken zonder ingewikkelde software.",
  },
  {
    vraag: "Wordt mijn invoer opgeslagen?",
    antwoord: "Nee. Alle berekeningen gebeuren in je eigen browser. Er is geen login en er wordt geen invoer naar een server gestuurd.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-petrol-50 to-white">
        <div className="container-page py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-petrol-700">
            Gratis · Zonder account · Direct resultaat
          </p>
          <h1 className="mt-2 max-w-3xl text-3xl font-extrabold sm:text-5xl">
            Gratis zzp calculators voor btw, uurtarief en netto inkomen
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Snel een praktisch cijfer nodig? Bereken btw, je uurtarief, je netto inkomen of hoeveel belasting je apart zet. De belasting-tools rekenen met de echte tarieven en heffingskortingen van 2026, niet met een vuistregel.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/btw-berekenen" className="btn-primary">Btw berekenen</Link>
            <Link href="/uurtarief-berekenen" className="btn-secondary">Uurtarief berekenen</Link>
          </div>
        </div>
      </section>

      <AdPlaceholderTop />

      {/* Tools */}
      <section id="tools" className="container-page py-12" aria-labelledby="tools-titel">
        <h2 id="tools-titel" className="text-2xl font-bold">Alle tools</h2>
        <p className="mt-1 text-slate-600">Kies een calculator of generator en zie direct je resultaat.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="bg-mist py-12" aria-labelledby="hoe-titel">
        <div className="container-page">
          <h2 id="hoe-titel" className="text-2xl font-bold">Hoe werkt het?</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-card">
              <p className="text-2xl">1️⃣</p>
              <h3 className="mt-2 font-bold">Kies een tool</h3>
              <p className="mt-1 text-sm text-slate-600">Selecteer de calculator of generator die past bij je vraag.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-card">
              <p className="text-2xl">2️⃣</p>
              <h3 className="mt-2 font-bold">Vul je cijfers in</h3>
              <p className="mt-1 text-sm text-slate-600">Voer je bedragen of gegevens in. Geen account, geen opslag.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-card">
              <p className="text-2xl">3️⃣</p>
              <h3 className="mt-2 font-bold">Zie direct je resultaat</h3>
              <p className="mt-1 text-sm text-slate-600">Je krijgt een duidelijke uitkomst met korte uitleg. Kopieer of download waar handig.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie + waarom */}
      <section className="container-page grid gap-10 py-12 sm:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Voor wie is deze site?</h2>
          <p className="mt-3 text-slate-600">
            Voor zzp&apos;ers, freelancers en kleine ondernemers in Nederland. Of je nu net begint of al jaren onderneemt: soms wil je gewoon snel een cijfer. Wat kost dit inclusief btw? Welk uurtarief past bij mijn doel? Hoeveel zet ik apart voor de Belastingdienst? Daar zijn deze tools voor.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Waarom deze calculators gebruiken?</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>• Gratis en zonder account</li>
            <li>• Rekent met de echte belastingtarieven van 2026</li>
            <li>• Werkt direct in je browser, ook op je telefoon</li>
            <li>• Duidelijke uitkomsten met uitleg en bronvermelding</li>
            <li>• Geen opslag van je invoer</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page pb-12">
        <div className="max-w-2xl"><FAQ items={faq} /></div>
        <div className="mt-8 max-w-2xl">
          <DisclaimerBox>
            De tools op deze site geven een algemene indicatie en zijn geen financieel, juridisch of fiscaal advies. Controleer altijd je eigen situatie. Voor persoonlijk belastingadvies kun je contact opnemen met een boekhouder of belastingadviseur.
          </DisclaimerBox>
        </div>
      </section>
    </>
  );
}
