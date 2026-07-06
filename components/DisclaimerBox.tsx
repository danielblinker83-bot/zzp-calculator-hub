export default function DisclaimerBox({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-slate-700">
      <p className="font-semibold">Let op: dit is een indicatie</p>
      <p className="mt-1">
        {children ??
          "Deze calculator geeft een algemene indicatie. De uitkomst kan afwijken van je persoonlijke situatie. Voor belastingadvies of financieel advies kun je contact opnemen met een boekhouder, accountant of belastingadviseur."}
      </p>
    </div>
  );
}
