import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "./ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Vragen, feedback of een idee voor een nieuwe calculator? Neem contact op met ZZP Calculator Hub.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <div className="container-page max-w-2xl py-8">
      <Breadcrumbs crumbs={[{ label: "Contact", href: "/contact" }]} />
      <h1 className="mt-4 text-3xl font-extrabold">Contact</h1>
      <p className="mt-3 text-slate-600">
        Heb je een vraag, feedback of een idee voor een nieuwe calculator? Laat het weten. Je kunt ook rechtstreeks mailen naar {SITE.email}.
      </p>
      <div className="mt-6"><ContactForm /></div>
    </div>
  );
}
