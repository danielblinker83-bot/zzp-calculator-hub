import Link from "next/link";
import { relatedTools } from "@/lib/site";

export default function InternalLinks({ currentSlug }: { currentSlug: string }) {
  const tools = relatedTools(currentSlug);
  return (
    <section aria-labelledby="gerelateerd">
      <h2 id="gerelateerd" className="text-xl font-bold">Gerelateerde tools</h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {tools.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/${t.slug}`}
              className="block rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium hover:border-petrol-600 hover:text-petrol-700"
            >
              {t.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
