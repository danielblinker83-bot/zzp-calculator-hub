// Advertentieplek onder de hero. Nu verborgen; activeer later door SHOW_ADS op true te zetten
// en hier je AdSense-code te plaatsen.
const SHOW_ADS = false;

export default function AdPlaceholderTop() {
  if (!SHOW_ADS) return null;
  return (
    <div aria-label="Advertentie" className="container-page my-6">
      <div className="flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-300 text-xs text-slate-400">
        Advertentieruimte (top)
      </div>
    </div>
  );
}
