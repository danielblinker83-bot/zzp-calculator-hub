import Breadcrumbs from "@/components/Breadcrumbs";
import DisclaimerBox from "@/components/DisclaimerBox";
import FAQ, { FaqItem } from "@/components/FAQ";
import InternalLinks from "@/components/InternalLinks";
import AdPlaceholderInline from "@/components/AdPlaceholderInline";
import AdPlaceholderSidebar from "@/components/AdPlaceholderSidebar";
import { SITE } from "@/lib/site";

export default function CalculatorLayout({
  slug,
  h1,
  intro,
  tool,
  uitleg,
  faq,
  disclaimerTekst,
}: {
  slug: string;
  h1: string;
  intro: string; // 40-60 woorden
  tool: React.ReactNode;
  uitleg: React.ReactNode;
  faq: FaqItem[];
  disclaimerTekst?: string;
}) {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: h1,
    url: `${SITE.url}/${slug}`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    inLanguage: "nl-NL",
  };

  return (
    <div className="container-page py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <Breadcrumbs crumbs={[{ label: h1, href: `/${slug}` }]} />
      <div className="mt-4 flex gap-8">
        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-extrabold sm:text-4xl">{h1}</h1>
          <p className="mt-2 max-w-2xl text-slate-600">{intro}</p>

          {/* Tool boven de vouw */}
          <div className="mt-6 rounded-3xl border border-petrol-100 bg-petrol-50/50 p-4 sm:p-6">{tool}</div>

          <div className="prose-sm mt-10 max-w-2xl">{uitleg}</div>

          <AdPlaceholderInline />

          <div className="mt-10 max-w-2xl">
            <DisclaimerBox>{disclaimerTekst}</DisclaimerBox>
          </div>

          <div className="mt-10 max-w-2xl"><FAQ items={faq} /></div>
          <div className="mt-10 max-w-2xl"><InternalLinks currentSlug={slug} /></div>
        </div>
        <AdPlaceholderSidebar />
      </div>
    </div>
  );
}
