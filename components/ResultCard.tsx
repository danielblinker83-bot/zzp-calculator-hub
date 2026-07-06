export default function ResultCard({
  label,
  value,
  highlight = false,
  sub,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  sub?: string;
}) {
  return (
    <div
      className={
        highlight
          ? "rounded-2xl bg-petrol-700 p-4 text-white shadow-card"
          : "rounded-2xl border border-slate-200 bg-white p-4 shadow-card"
      }
    >
      <p className={highlight ? "text-sm text-petrol-100" : "text-sm text-slate-500"}>{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums">{value}</p>
      {sub && <p className={highlight ? "mt-1 text-xs text-petrol-100" : "mt-1 text-xs text-slate-500"}>{sub}</p>}
    </div>
  );
}
