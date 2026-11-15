import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("vaste-projectprijs-berekenen")!;
export const metadata = artikelMetadata(artikel);

const inhoudsopgave = [
  { id: "uren", label: "Schat het werk dat onder de vaste prijs valt" },
  { id: "prijs", label: "Bereken de projectprijs" },
  { id: "tegenvaller", label: "Reken een tegenvaller door" },
  { id: "afspraken", label: "Leg de afspraak vast in je offerte" },
];

const faq = [
  {
    vraag: "Wanneer kies je als zzp’er voor een vaste projectprijs?",
    antwoord: "Een vaste prijs past als je vooraf kunt beschrijven wat je aflevert en hoeveel tijd en kosten daarbij horen. Bij veel onzekerheid kun je eerst een afgebakende onderzoeksfase offreren. Daarna bepaal je op basis van die uitkomst de prijs voor de uitvoering.",
  },
  {
    vraag: "Hoe bereken je je werkelijke uurtarief bij een vaste projectprijs?",
    antwoord: "Trek de directe projectkosten af van de afgesproken prijs exclusief btw. Deel het resultaat door alle uren die je werkelijk aan de opdracht besteedde. Dat is je opbrengst per uur vóór eventuele overige bedrijfskosten en belastingen.",
  },
  {
    vraag: "Hoe voorkom je dat je dezelfde kosten twee keer meetelt?",
    antwoord: "Controleer wat al in je interne uurtarief zit. Zit je gewone softwareabonnement daar al in? Tel het dan niet nog eens op in je projectprijs. Een extra licentie die je alleen voor deze opdracht aanschaft, kun je wel apart meenemen.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Vermenigvuldig de tijd die je voor de hele opdracht reserveert met je interne uurtarief. Tel de directe projectkosten op die nog niet in dat tarief zitten. Reserveer ook tijd voor het werk waarvan je vooraf weet dat het kan uitlopen. Reken vervolgens uit wat je per uur overhoudt als je meer tijd nodig hebt."
    >
      <section id="uren" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke uren horen bij een vaste prijs?</h2>
        <p className="mt-2">Verdeel de opdracht in concrete stappen. Bij het maken van een brochure kun je bijvoorbeeld tijd reserveren voor de intake, het ontwerp, feedback en de oplevering. Tel ook werk mee dat de klant niet ziet, zoals het verzamelen van bestanden, het verwerken van feedback en de controle vóór oplevering.</p>
        <h3 className="mt-4 font-bold text-ink">Bepaal waar je schatting kan uitlopen</h3>
        <p className="mt-2">Bij een herhaalopdracht kun je je vorige urenregistratie gebruiken. Bij een nieuwe opdracht schat je per stap wat kan tegenvallen. Verwacht je extra afstemming binnen de afgesproken feedbackronde? Reserveer daar dan tijd voor. Gebruik de <Link href="/uurtarief-berekenen" className={link}>uurtariefcalculator</Link> als je nog moet bepalen welke opbrengst per gewerkt uur je nodig hebt.</p>
      </section>
      <section id="prijs" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Voorbeeld van een vaste projectprijs</h2>
        <p className="mt-2">Voor een brochure schat je 16 uur werk en reserveer je 2 uur extra voor afstemming. Je interne rekentarief is €80 per uur. Een beeldlicentie voor deze specifieke opdracht kost €120. Dit zijn fictieve bedragen exclusief btw.</p>
        <p className="mt-2 font-semibold text-ink">Vaste prijs = 18 uur × €80 + €120 = €1.560.</p>
        <p className="mt-2">Gebruik de <Link href="/offerte-calculator" className={link}>offertecalculator</Link> om de totaalprijs op te bouwen. Vul in dit voorbeeld 18 uur, €80 per uur en €120 aan extra kosten in. Als je één vaste prijs aanbiedt, kun je de klant het totaal geven met een duidelijke omschrijving van wat inbegrepen is.</p>
      </section>
      <section id="tegenvaller" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat houd je per uur over als het project uitloopt?</h2>
        <p className="mt-2">Na aftrek van €120 licentiekosten blijft €1.440 over voor je tijd en de overige bedrijfskosten die in je tarief zitten. Als de prijs en de directe kosten gelijk blijven, verandert je opbrengst per uur met het aantal uren dat je werkelijk werkt.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Uuropbrengst bij verschillende aantallen uren" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Opbrengst per uur bij een vaste prijs van €1.560</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Gewerkte uren</th><th scope="col" className="p-2">Na licentie</th><th scope="col" className="p-2 text-right">Per uur</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">16 uur</th><td className="p-2">€1.440</td><td className="p-2 text-right">€90</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">18 uur</th><td className="p-2">€1.440</td><td className="p-2 text-right">€80</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">22 uur</th><td className="p-2">€1.440</td><td className="p-2 text-right">€65,45</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Is €65,45 per uur te laag voor je bedrijf en is 22 uur goed mogelijk? Maak de opdracht kleiner, verhoog de prijs of werk met een aparte fase. Houd tijdens de opdracht je uren bij. Gebruik die registratie om volgende offertes nauwkeuriger te begroten.</p>
      </section>
      <section id="afspraken" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Welke afspraken zet je in de offerte?</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Beschrijf het resultaat. Bijvoorbeeld een brochure van acht pagina’s als drukklaar pdf-bestand.</li>
          <li>Maak concreet wat inbegrepen is, zoals één gebundelde feedbackronde en oplevering binnen vijf werkdagen nadat alle teksten zijn aangeleverd.</li>
          <li>Geef aan hoe je omgaat met wijzigingen. Spreek bijvoorbeeld af dat je bij extra pagina’s eerst een prijs en planning voorstelt en pas na akkoord begint.</li>
        </ul>
        <p className="mt-3">Is bij de start nog onduidelijk wat je gaat opleveren? Bespreek vooraf of een prijs per gewerkt uur of een vaste prijs voor een eerste, duidelijk omschreven fase beter bij de opdracht past.</p>
      </section>
    </ArtikelLayout>
  );
}
