import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold">Pagina niet gevonden</h1>
      <p className="mt-3 max-w-xl text-slate-600">
        Zoek je een calculator of een artikel? Kies waar je verder wilt.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/#tools" className="btn-primary">Bekijk alle rekentools</Link>
        <Link href="/kennisbank" className="btn-secondary">Ga naar de kennisbank</Link>
      </div>
    </div>
  );
}
