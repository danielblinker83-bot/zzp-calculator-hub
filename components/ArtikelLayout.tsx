import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBox from "@/components/DisclaimerBox";
import FAQ, { FaqItem } from "@/components/FAQ";
import AdPlaceholderInline from "@/components/AdPlaceholderInline";
import { SITE, toolBySlug } from "@/lib/site";
import { Artikel } from "@/lib/kennisbank";

function datumNL(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArtikelLayout({
  artikel,
  intro,
  children,
  faq,
  disclaimerTekst,
}: {
  artikel: Artikel;
  intro: string;
  children: React.ReactNode;
  faq?: FaqItem[];
  disclaimerTekst?: string;
}) {
  const url = `${SITE.url}/kennisbank/${artikel.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.title,
    description: artikel.description,
    datePublished: artikel.datum,
    dateModified: artikel.bijgewerkt ?? artikel.datum,
    inLanguage: "nl-NL",
    mainEntityOfPage: url,
    ...(artikel.afbeelding ? { image: `${SITE.url}${artikel.afbeelding}` } : {}),
    author: { "@type": "Person", name: "Daniel Blinker", url: `${SITE.url}/over-ons` },
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const tools = (artikel.gerelateerdeTools ?? [])
    .map((s) => toolBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="container-page py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Breadcrumbs
        crumbs={[
          { label: "Kennisbank", href: "/kennisbank" },
          { label: artikel.title, href: `/kennisbank/${artikel.slug}` },
        ]}
      />
      <article className="mt-4 max-w-2xl">
        {artikel.afbeelding && (
          <Image
            src={artikel.afbeelding}
            alt={artikel.afbeeldingAlt ?? artikel.title}
            width={1672}
            height={941}
            priority
            className="h-auto w-full rounded-2xl border border-slate-200"
          />
        )}

        <h1 className="mt-6 text-3xl font-extrabold sm:text-4xl">{artikel.title}</h1>
        <p className="mt-3 text-sm text-slate-500">
          Door Daniel Blinker, zelf zzp'er · {datumNL(artikel.datum)} · {artikel.leestijd} min lezen
          {artikel.bijgewerkt && artikel.bijgewerkt !== artikel.datum ? ` · bijgewerkt ${datumNL(artikel.bijgewerkt)}` : ""}
        </p>
        <p className="mt-4 text-lg text-slate-600">{intro}</p>

        <div className="mt-8 space-y-6 text-slate-600">{children}</div>

        <AdPlaceholderInline />

        {tools.length > 0 && (
          <div className="mt-10 rounded-2xl border border-petrol-100 bg-petrol-50/50 p-5">
            <p className="font-semibold text-ink">Reken het zelf uit</p>
            <ul className="mt-2 space-y-1 text-sm">
              {tools.map((t) => (
                <li key={t.slug}>
                  <Link href={`/${t.slug}`} className="font-medium text-petrol-700 underline">
                    {t.title}
                  </Link>{" "}
                  <span className="text-slate-600">— {t.short}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {artikel.bronnen && artikel.bronnen.length > 0 && (
          <div className="mt-10">
            <h2 className="text-base font-bold text-ink">Bronnen</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {artikel.bronnen.map((b) => (
                <li key={b.url}>
                  <a href={b.url} target="_blank" rel="noopener noreferrer" className="text-petrol-700 underline">
                    {b.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {disclaimerTekst && (
          <div className="mt-10">
            <DisclaimerBox>{disclaimerTekst}</DisclaimerBox>
          </div>
        )}

        {faq && faq.length > 0 && (
          <div className="mt-10">
            <FAQ items={faq} />
          </div>
        )}

        <aside className="mt-10 rounded-2xl border border-slate-200 bg-mist p-5">
          <p className="font-semibold text-ink">Over de maker</p>
          <p className="mt-2 text-sm text-slate-600">
            berekenzzp.nl is gemaakt door Daniel Blinker, zelf ondernemer met een eenmanszaak. Uit
            ergernis over rekentools met verouderde of verkeerde cijfers bouwde hij deze calculators
            en artikelen, en controleerde alle bedragen tegen de Belastingdienst en Rijksoverheid.
            Geen belastingadviseur, wel een zzp'er die zijn cijfers op orde wil hebben.{" "}
            <Link href="/over-ons" className="font-medium text-petrol-700 underline">
              Meer over ons
            </Link>
            .
          </p>
        </aside>

        <div className="mt-8">
          <Link href="/kennisbank" className="text-sm font-medium text-petrol-700 hover:underline">
            ← Terug naar de kennisbank
          </Link>
        </div>
      </article>
    </div>
  );
}
