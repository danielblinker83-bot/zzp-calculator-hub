"use client";

export default function InputField({
  id,
  label,
  value,
  onChange,
  placeholder,
  suffix,
  error,
  optional = false,
  inputMode = "decimal",
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  suffix?: string;
  error?: string;
  optional?: boolean;
  inputMode?: "decimal" | "numeric" | "text";
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium">
        {label} {optional && <span className="font-normal text-slate-400">(optioneel)</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          inputMode={inputMode}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-base outline-none transition focus:ring-2 focus:ring-petrol-600 ${
            error ? "border-red-400" : "border-slate-300"
          } ${suffix ? "pr-16" : ""}`}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
