import Link from "next/link";
import { SITE } from "@/lib/site";

export interface Crumb { label: string; href: string; }

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const items = [{ label: "Home", href: "/" }, ...crumbs];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
  return (
    <nav aria-label="Kruimelpad" className="text-xs text-slate-500">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link href={c.href} className="hover:text-petrol-700">{c.label}</Link>
            ) : (
              <span aria-current="page" className="text-slate-700">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
