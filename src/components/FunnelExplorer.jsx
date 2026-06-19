import { formatNumber } from "../lib/format.js";

export default function FunnelExplorer({ funnel }) {
  const stages = [
    { label: "Clicks", value: funnel.clicks },
    { label: "Leads", value: funnel.leads },
    { label: "MQL", value: funnel.mql },
    { label: "SQL", value: funnel.sql },
    { label: "Opportunities", value: funnel.opportunities },
    { label: "Customers", value: funnel.customers },
  ];
  const max = stages[0].value || 1;

  return (
    <div className="rounded-2xl border border-primary/10 bg-surface-white p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-primary">Funnel Explorer</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Volume at each stage, from first click to closed customer.
      </p>

      <div className="mt-7 space-y-4">
        {stages.map((stage, i) => {
          const widthPct = Math.max((stage.value / max) * 100, 2);
          const prev = i > 0 ? stages[i - 1].value : null;
          const conv = prev ? (stage.value / prev) * 100 : null;

          return (
            <div key={stage.label}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-primary">{stage.label}</span>
                <span className="flex items-baseline gap-2">
                  {conv !== null && (
                    <span className="text-xs text-ink-muted">{formatNumber(conv, 1)}%</span>
                  )}
                  <span className="font-display text-sm font-bold text-primary">
                    {formatNumber(stage.value, stage.value < 100 ? 1 : 0)}
                  </span>
                </span>
              </div>
              <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-primary/5">
                <div
                  className="h-full rounded-full bg-accent transition-[width] duration-500 ease-out"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
