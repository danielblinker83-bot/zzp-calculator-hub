"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE, TOOLS } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function closeOutside(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" onClick={close} className="flex min-h-11 items-center gap-2 font-bold text-petrol-700">
          <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-petrol-700 text-sm font-extrabold text-white">Σ</span>
          <span>{SITE.name}</span>
        </Link>
        <nav aria-label="Hoofdmenu" className="hidden items-center gap-5 text-sm font-medium lg:flex">
          <Link href="/btw-berekenen" className="hover:text-petrol-700">Btw</Link>
          <Link href="/uurtarief-berekenen" className="hover:text-petrol-700">Uurtarief</Link>
          <Link href="/zzp-netto-inkomen-berekenen" className="hover:text-petrol-700">Netto inkomen</Link>
          <Link href="/#tools" className="hover:text-petrol-700">Alle tools</Link>
          <Link href="/kennisbank" className="hover:text-petrol-700">Blogs & kennisbank</Link>
        </nav>
        <button ref={buttonRef} type="button" aria-expanded={open} aria-controls="mobiel-menu"
          onClick={() => setOpen((value) => !value)}
          className="btn-primary min-h-11 gap-2 px-3 py-2 lg:hidden">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
          {open ? "Sluiten" : "Menu"}
        </button>
      </div>
      <nav id="mobiel-menu" aria-label="Mobiel hoofdmenu" hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden">
        <div className="container-page py-3">
          <Link href="/kennisbank" onClick={close} className="mb-2 flex min-h-12 items-center justify-between rounded-xl bg-petrol-50 px-4 font-bold text-petrol-700">
            Blogs & kennisbank <span aria-hidden="true">→</span>
          </Link>
          <Link href="/" onClick={close} className="mobile-menu-link">Home</Link>
          <Link href="/#tools" onClick={close} className="mobile-menu-link">Alle tools</Link>
          <p className="px-4 pb-1 pt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Calculators en generators</p>
          {TOOLS.map((tool) => <Link key={tool.slug} href={`/${tool.slug}`} onClick={close} className="mobile-menu-link">{tool.title}</Link>)}
          <div className="mt-3 border-t border-slate-200 pt-2">
            <Link href="/over-ons" onClick={close} className="mobile-menu-link">Over ons</Link>
            <Link href="/contact" onClick={close} className="mobile-menu-link">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
