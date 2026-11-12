import Link from "next/link";
import ArtikelLayout from "@/components/ArtikelLayout";
import { artikelBySlug, artikelMetadata } from "@/lib/kennisbank";

const artikel = artikelBySlug("voorlopige-aanslag-belastingreserve")!;
export const metadata = artikelMetadata(artikel, {
  title: "Voorlopige aanslag zzp en je extra belastingreserve",
});

const inhoudsopgave = [
  { id: "aanslag", label: "Wat betaal je via een voorlopige aanslag?" },
  { id: "voorbeeld", label: "Rekenvoorbeeld met betaalde en open termijnen" },
  { id: "wijzigen", label: "Wat doe je als je winst wijzigt?" },
  { id: "controle", label: "Controleer je reserve en betaalplanning" },
];

const faq = [
  {
    vraag: "Moet ik na een voorlopige aanslag nog belasting reserveren?",
    antwoord: "Reserveer extra als je actuele jaarraming hoger is dan wat je voor dat jaar al hebt betaald en nog via de voorlopige aanslag betaalt. Houd de geplande termijnen zelf ook in je betaalplanning.",
  },
  {
    vraag: "Kan ik inkomstenbelasting en de bijdrage Zvw samenvoegen?",
    antwoord: "Tel ze bij elkaar op voor je begroting, maar controleer de ramingen en betalingen per aanslag. De bijdrage Zorgverzekeringswet kan op een afzonderlijke aanslag staan.",
  },
  {
    vraag: "Wat als ik al geld heb gereserveerd voor het verschil?",
    antwoord: "Trek dat bedrag af van wat je nog extra moet opbouwen. Gebruik hiervoor alleen geld dat voor het verschil beschikbaar is. Een bedrag dat al bestemd is voor open termijnen blijft in je betaalplanning staan.",
  },
  {
    vraag: "Waar wijzig ik mijn voorlopige aanslag bij een andere winst?",
    antwoord: "Je kunt je verwachte jaarwinst bijwerken via Mijn Belastingdienst. Zodra je een aangepaste aanslag krijgt, controleer je het nieuwe bedrag en de betaalgegevens en werk je je reserve bij.",
  },
];

const link = "font-medium text-petrol-700 underline";

export default function Page() {
  return (
    <ArtikelLayout
      artikel={artikel}
      inhoudsopgave={inhoudsopgave}
      faq={faq}
      intro="Schat je inkomstenbelasting en bijdrage Zorgverzekeringswet voor het hele jaar. Trek per aanslag af wat je al hebt betaald en wat je volgens het huidige betaalschema nog betaalt. Een positief verschil is het bedrag waarvoor je extra reserveert. Houd ook geld beschikbaar voor de termijnen die nog openstaan."
    >
      <section id="aanslag" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat betaal je via een voorlopige aanslag?</h2>
        <p className="mt-2">De Belastingdienst baseert een voorlopige aanslag op geschatte gegevens, zoals je verwachte jaarwinst. Een voorlopige aanslag inkomstenbelasting over het lopende jaar kun je onder voorwaarden in termijnen betalen. Controleer het bedrag en de betaaldata op je aanslag. Bij de definitieve aanslag verrekent de Belastingdienst de voorlopige aanslag over hetzelfde jaar.</p>
        <h3 className="mt-4 font-bold text-ink">Houd ook de bijdrage Zvw bij</h3>
        <p className="mt-2">Over winst uit onderneming kan de Belastingdienst een afzonderlijke aanslag voor de inkomensafhankelijke bijdrage Zorgverzekeringswet sturen. Houd ook voor die aanslag bij wat je verwacht, hebt betaald en nog moet betalen. Een overzicht van btw-betalingen houd je apart.</p>
      </section>
      <section id="voorbeeld" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Bereken hoeveel je boven op je termijnen reserveert</h2>
        <p className="mt-2">Stel dat je begin september je jaarwinst hoger inschat. De bedragen hieronder zijn fictief. Er resteren vier maanden waarin je geld kunt opbouwen. Je houdt de betalingen aan die op je huidige aanslagen staan.</p>
        <div className="mt-3 overflow-x-auto" role="region" aria-label="Raming, termijnen en extra reserve" tabIndex={0}>
          <table className="w-full border-collapse text-left text-sm">
            <caption className="pb-2 text-left">Voorbeeld voor één belastingjaar</caption>
            <thead><tr className="border-b border-slate-200"><th scope="col" className="p-2">Onderdeel</th><th scope="col" className="p-2">Inkomstenbelasting</th><th scope="col" className="p-2">Bijdrage Zvw</th></tr></thead>
            <tbody>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Nieuwe jaarraming</th><td className="whitespace-nowrap p-2">€9.600</td><td className="whitespace-nowrap p-2">€2.400</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Al betaald</th><td className="whitespace-nowrap p-2">€6.400</td><td className="whitespace-nowrap p-2">€1.600</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Nog geplande termijnen</th><td className="whitespace-nowrap p-2">€2.400</td><td className="whitespace-nowrap p-2">€400</td></tr>
              <tr className="border-b border-slate-200"><th scope="row" className="p-2 font-medium">Extra te reserveren</th><td className="whitespace-nowrap p-2">€800</td><td className="whitespace-nowrap p-2">€400</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">Voor de inkomstenbelasting is het verschil €9.600 − €6.400 − €2.400 = €800. Voor de bijdrage Zvw is het €2.400 − €1.600 − €400 = €400. Samen zet je nog €1.200 apart. Verdeel je dat over vier maanden, dan is dat €300 extra per maand, naast de geplande betalingen.</p>
        <p className="mt-2">Heb je al €600 beschikbaar voor dit verschil, dan hoef je nog €600 op te bouwen. Dat komt in dit voorbeeld neer op €150 per maand. Controleer daarbij welke bedragen al bestemd zijn voor open termijnen.</p>
      </section>
      <section id="wijzigen" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Wat doe je als je winst wijzigt?</h2>
        <p className="mt-2">Werk je raming bij met de gerealiseerde winst tot nu toe en je verwachte winst voor de rest van het jaar. Kijk ook of ander inkomen is veranderd. De Belastingdienst noemt meer of minder winst als aanleiding om je voorlopige aanslag te controleren en zo nodig te wijzigen via Mijn Belastingdienst.</p>
        <p className="mt-2">Verwerk een aangepaste aanslag zodra je die hebt ontvangen. Kijk opnieuw wat je al hebt betaald, welk bedrag nog openstaat en wanneer je moet betalen. Daarmee kun je bepalen hoeveel extra reserve je daarna nog nodig hebt.</p>
      </section>
      <section id="controle" className="scroll-mt-20">
        <h2 className="text-xl font-bold text-ink">Controleer je reserve en betaalplanning</h2>
        <ol className="mt-2 list-decimal space-y-2 pl-5">
          <li>Gebruik voor je jaarwinst omzet min zakelijke kosten. Zie het <Link href="/kennisbank/omzet-winst-banksaldo" className={link}>voorbeeld met omzet, winst en banksaldo</Link>.</li>
          <li>Schat je jaarbedragen. De <Link href="/belasting-reserveren-zzp" className={link}>belastingcalculator</Link> geeft een indicatie bij winst als enige inkomen. Neem bij meerdere inkomstenbronnen je volledige inkomenssituatie mee in Mijn Belastingdienst.</li>
          <li>Vergelijk je schatting met de betaalde en geplande bedragen voor hetzelfde belastingjaar. Zet zowel de nog te betalen termijnen als de extra reserve in je betaalplanning.</li>
        </ol>
      </section>
    </ArtikelLayout>
  );
}
