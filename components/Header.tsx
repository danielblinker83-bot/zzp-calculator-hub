import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-petrol-700">
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-petrol-700 text-sm font-extrabold text-white">
            Σ
          </span>
          <span>ZZP Calculator Hub</span>
        </Link>
        <nav aria-label="Hoofdmenu" className="hidden gap-6 text-sm font-medium sm:flex">
          <Link href="/btw-berekenen" className="hover:text-petrol-700">Btw</Link>
          <Link href="/uurtarief-berekenen" className="hover:text-petrol-700">Uurtarief</Link>
          <Link href="/zzp-netto-inkomen-berekenen" className="hover:text-petrol-700">Netto inkomen</Link>
          <Link href="/#tools" className="hover:text-petrol-700">Alle tools</Link>
        </nav>
        <Link href="/#tools" className="btn-primary px-4 py-2 sm:hidden">Tools</Link>
      </div>
    </header>
  );
}
