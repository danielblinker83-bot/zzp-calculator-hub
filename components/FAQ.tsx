export interface FaqItem { vraag: string; antwoord: string; }

export default function FAQ({ items, withSchema = true }: { items: FaqItem[]; withSchema?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.vraag,
      acceptedAnswer: { "@type": "Answer", text: f.antwoord },
    })),
  };
  return (
    <section aria-labelledby="faq">
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <h2 id="faq" className="text-xl font-bold">Veelgestelde vragen</h2>
      <div className="mt-3 space-y-2">
        {items.map((f) => (
          <details key={f.vraag} className="group rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none font-semibold marker:content-none">
              <span className="flex items-center justify-between gap-2">
                {f.vraag}
                <span aria-hidden className="text-petrol-700 transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-2 text-sm text-slate-600">{f.antwoord}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
