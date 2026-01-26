export function SpecTable({ specs }: { specs: Record<string, string> }) {
  return (
    <div className="border border-black/5 bg-white">
      <div className="bg-alabaster px-6 py-4 border-b border-black/5">
        <h3 className="text-[11px] font-bold uppercase tracking-widest">Technical Specifications</h3>
      </div>
      <dl className="divide-y divide-black/5">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="grid grid-cols-1 md:grid-cols-3 px-6 py-4">
            <dt className="text-sm font-medium text-muted">{key}</dt>
            <dd className="text-sm text-black md:col-span-2">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function FitGuardrails({ warnings }: { warnings: string[] }) {
  if (!warnings || warnings.length === 0) return null;

  return (
    <div className="border border-red-100 bg-red-50/30 p-6 mt-8">
      <h3 className="text-[11px] font-bold uppercase tracking-widest text-red-900 mb-4 flex items-center gap-2">
        Fit & Suitability Checks
      </h3>
      <ul className="space-y-2">
        {warnings.map((warning, idx) => (
          <li key={idx} className="text-sm text-red-900/80 flex items-start gap-2">
            <span className="text-red-900 block mt-1">•</span>
            {warning}
          </li>
        ))}
      </ul>
    </div>
  );
}
