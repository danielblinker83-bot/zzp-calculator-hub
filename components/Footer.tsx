import Link from "next/link";
import { TOOLS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-mist">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-3">
        <div>
          <p className="font-bold text-petrol-700">ZZP Calculator Hub</p>
          <p className="mt-2 text-sm text-slate-600">
            Gratis rekentools voor zzp&apos;ers en kleine ondernemers in Nederland. Alle uitkomsten zijn een indicatie, geen advies.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Tools</p>
          <ul className="mt-2 space-y-1 text-sm">
            {TOOLS.slice(0, 6).map((t) => (
              <li key={t.slug}>
                <Link href={`/${t.slug}`} className="text-slate-600 hover:text-petrol-700">{t.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Informatie</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><Link href="/over-ons" className="text-slate-600 hover:text-petrol-700">Over ons</Link></li>
            <li><Link href="/contact" className="text-slate-600 hover:text-petrol-700">Contact</Link></li>
            <li><Link href="/privacybeleid" className="text-slate-600 hover:text-petrol-700">Privacybeleid</Link></li>
            <li><Link href="/disclaimer" className="text-slate-600 hover:text-petrol-700">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} ZZP Calculator Hub · Indicatieve berekeningen, geen financieel of fiscaal advies.
      </div>
    </footer>
  );
}
