const SHOW_ADS = false;

export default function AdPlaceholderInline() {
  if (!SHOW_ADS) return null;
  return (
    <div aria-label="Advertentie" className="my-8">
      <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 text-xs text-slate-400">
        Advertentieruimte (inline)
      </div>
    </div>
  );
}
