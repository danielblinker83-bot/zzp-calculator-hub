import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Over ons",
  description: "ZZP Calculator Hub helpt Nederlandse zzp'ers en kleine ondernemers snel praktische bedrijfsberekeningen te maken met simpele, gratis tools.",
  alternates: { canonical: "/over-ons" },
};

export default function Page() {
  return (
    <div className="container-page max-w-2xl py-8">
      <Breadcrumbs crumbs={[{ label: "Over ons", href: "/over-ons" }]} />
      <h1 className="mt-4 text-3xl font-extrabold">Over ons</h1>
      <div className="mt-6 space-y-4 text-slate-700">
        <p>
          ZZP Calculator Hub is gemaakt voor zzp&apos;ers en kleine ondernemers in Nederland die snel een praktisch cijfer nodig hebben. Geen ingewikkelde software, geen account, geen gedoe: je vult je gegevens in en ziet direct het resultaat.
        </p>
        <p>
          Van btw en uurtarief tot netto inkomen en betalingsherinneringen: elke tool is gebouwd om één vraag simpel te beantwoorden. De uitkomsten zijn altijd een indicatie. Voor persoonlijk belastingadvies of financieel advies verwijzen we je naar een boekhouder of belastingadviseur.
        </p>
        <p>
          We breiden de site stap voor stap uit met nieuwe calculators en generators. Mis je een tool? <Link href="/contact" className="font-semibold text-petrol-700 hover:underline">Laat het ons weten</Link>.
        </p>
      </div>
    </div>
  );
}
