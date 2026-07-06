const SHOW_ADS = false;

export default function AdPlaceholderSidebar() {
  if (!SHOW_ADS) return null;
  return (
    <div aria-label="Advertentie" className="hidden lg:block">
      <div className="sticky top-6 flex h-[600px] w-[300px] items-center justify-center rounded-xl border border-dashed border-slate-300 text-xs text-slate-400">
        Advertentieruimte (sidebar)
      </div>
    </div>
  );
}
