import Link from "next/link";
import type { Tool } from "@/lib/site";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition hover:border-petrol-600"
    >
      <span className="inline-block rounded-full bg-petrol-50 px-3 py-1 text-xs font-semibold text-petrol-700">
        {tool.category}
      </span>
      <h3 className="mt-3 text-lg font-bold group-hover:text-petrol-700">{tool.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{tool.short}</p>
      <span className="mt-3 inline-block text-sm font-semibold text-petrol-700">
        Open tool →
      </span>
    </Link>
  );
}
