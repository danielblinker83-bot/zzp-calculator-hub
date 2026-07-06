import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Lees hoe ZZP Calculator Hub omgaat met privacy. Geen account, geen opslag van invoer. Mogelijk gebruik van cookies bij toekomstige analytics of advertenties.",
  alternates: { canonical: "/privacybeleid" },
};

export default function Page() {
  return (
    <div className="container-page max-w-2xl py-8">
      <Breadcrumbs crumbs={[{ label: "Privacybeleid", href: "/privacybeleid" }]} />
      <h1 className="mt-4 text-3xl font-extrabold">Privacybeleid</h1>
      <div className="mt-6 space-y-5 text-slate-700">
        <p>Laatst bijgewerkt: juli 2026</p>

        <section>
          <h2 className="text-xl font-bold text-ink">Kort samengevat</h2>
          <p className="mt-2">ZZP Calculator Hub is een website met gratis rekentools. Je hebt geen account nodig en we vragen niet om persoonsgegevens om de tools te gebruiken.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Welke gegevens verwerken wij?</h2>
          <p className="mt-2">De cijfers en teksten die je invult in de calculators en generators worden alleen in je eigen browser verwerkt. Ze worden niet naar onze servers gestuurd en niet opgeslagen. Na het sluiten van de pagina is je invoer weg.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Cookies</h2>
          <p className="mt-2">Op dit moment plaatsen wij zelf geen tracking- of advertentiecookies. In de toekomst kunnen wij statistieken (zoals bezoekersaantallen) of advertenties toevoegen. Daarbij kunnen cookies of vergelijkbare technieken worden gebruikt. Als dat gebeurt, informeren wij je daarover op deze pagina en vragen wij waar nodig om toestemming.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Hosting</h2>
          <p className="mt-2">Onze hostingprovider kan technische gegevens verwerken die nodig zijn om de website te tonen, zoals IP-adressen in serverlogs. Deze gegevens gebruiken wij niet om je te identificeren.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Contact</h2>
          <p className="mt-2">Vragen over privacy? Mail naar {SITE.email}.</p>
        </section>
      </div>
    </div>
  );
}
