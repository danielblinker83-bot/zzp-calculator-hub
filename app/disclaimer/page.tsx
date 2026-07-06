import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "De calculators op ZZP Calculator Hub geven indicaties, geen financieel, juridisch of fiscaal advies. Lees hier wat dat betekent.",
  alternates: { canonical: "/disclaimer" },
};

export default function Page() {
  return (
    <div className="container-page max-w-2xl py-8">
      <Breadcrumbs crumbs={[{ label: "Disclaimer", href: "/disclaimer" }]} />
      <h1 className="mt-4 text-3xl font-extrabold">Disclaimer</h1>
      <div className="mt-6 space-y-5 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-ink">Indicaties, geen advies</h2>
          <p className="mt-2">Alle calculators en generators op deze website geven een algemene indicatie. De uitkomsten zijn geen financieel, juridisch of fiscaal advies. Je persoonlijke situatie, actuele wet- en regelgeving, tarieven en aftrekposten kunnen tot andere uitkomsten leiden.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink">Controleer je eigen situatie</h2>
          <p className="mt-2">Gebruik de uitkomsten als richtlijn of schatting en controleer altijd je eigen situatie. Voor persoonlijk belastingadvies of financieel advies kun je contact opnemen met een boekhouder, accountant of belastingadviseur.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink">Geen aansprakelijkheid</h2>
          <p className="mt-2">Wij besteden zorg aan de juistheid van de formules en teksten op deze site, maar kunnen fouten of verouderde informatie niet volledig uitsluiten. Aan de uitkomsten en teksten kunnen geen rechten worden ontleend. Het gebruik van deze website is voor eigen risico.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink">Wijzigingen</h2>
          <p className="mt-2">Wet- en regelgeving verandert regelmatig. Wij kunnen de inhoud van deze website op elk moment aanpassen zonder aankondiging.</p>
        </section>
      </div>
    </div>
  );
}
