import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ARTIKELEN } from "@/lib/kennisbank";

export const metadata: Metadata = {
  title: "Kennisbank voor zzp'ers | Belasting, tarieven en administratie",
  description:
    "Heldere uitleg over belasting, uurtarief, facturen en administratie voor zzp'ers, met de cijfers van 2026. Praktische artikelen die naar de rekentools verwijzen.",
  alternates: { canonical: "/kennisbank" },
  openGraph: {
    title: "Kennisbank voor zzp'ers",
    description: "Heldere uitleg over belasting, tarieven en administratie voor zzp'ers.",
    url: "/kennisbank",
  },
};

function datumNL(iso: string) {
  return new Date(iso).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });
}

export default function Page() {
  const artikelen = [...ARTIKELEN].sort((a, b) => (a.datum < b.datum ? 1 : -1));

  return (
    <div className="container-page py-6">
      <Breadcrumbs crumbs={[{ label: "Kennisbank", href: "/kennisbank" }]} />
      <div className="mt-4 max-w-2xl">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Kennisbank voor zzp'ers</h1>
        <p className="mt-3 text-slate-600">
          Heldere, nuchtere uitleg over belasting, tarieven, facturen en administratie, met de
          cijfers van 2026. Elk artikel verwijst naar de rekentool waarmee je het meteen zelf
          uitrekent.
        </p>
      </div>

      <div className="mt-8 grid max-w-3xl gap-4">
        {artikelen.map((a) => (
          <Link
            key={a.slug}
            href={`/kennisbank/${a.slug}`}
            className="block rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-petrol-300 hover:shadow-card"
          >
            <p className="text-xs text-slate-500">{datumNL(a.datum)} · {a.leestijd} min lezen</p>
            <h2 className="mt-1 text-lg font-bold text-ink">{a.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{a.description}</p>
            <span className="mt-2 inline-block text-sm font-medium text-petrol-700">Lees verder →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
