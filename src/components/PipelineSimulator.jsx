import { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { computeFunnel } from "../lib/funnel.js";
import { formatCurrency, formatMultiple } from "../lib/format.js";

const STAT_DEFS = [
  { key: "revenue", label: "Revenue", format: formatCurrency },
  { key: "cac", label: "CAC", format: formatCurrency },
  { key: "roas", label: "ROAS", format: formatMultiple },
];

function StatCard({ label, value }) {
  return (
    <div className="min-w-0 rounded-2xl border border-primary/10 bg-surface-white p-4 sm:p-5">
      <p className="truncate text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </p>
      <p className="mt-2 font-display text-[clamp(1.05rem,4.5vw,1.875rem)] font-black text-primary">
        {value}
      </p>
    </div>
  );
}

export default function PipelineSimulator({ inputs, funnel }) {
  const sensitivity = useMemo(() => {
    const steps = 9;
    return Array.from({ length: steps }, (_, i) => {
      const factor = 0.4 + (i * 1.6) / (steps - 1); // 0.4x -> 2.0x current budget
      const budget = Math.round(inputs.budget * factor);
      const result = computeFunnel({ ...inputs, budget });
      return {
        budget,
        revenue: Math.round(result.revenue),
        cac: result.cac ? Math.round(result.cac) : 0,
      };
    });
  }, [inputs]);

  return (
    <div className="rounded-2xl border border-primary/10 bg-surface-white p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-primary">Pipeline Simulator</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Revenue, CAC and ROAS this pipeline produces at the current budget.
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
        {STAT_DEFS.map((stat) => (
          <StatCard key={stat.key} label={stat.label} value={stat.format(funnel[stat.key])} />
        ))}
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Revenue &amp; CAC across budget scenarios
        </p>
        <div className="mt-3 h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sensitivity} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#161c3414" vertical={false} />
              <XAxis
                dataKey="budget"
                tickFormatter={(v) => `$${Math.round(v / 1000)}k`}
                tick={{ fontSize: 11, fill: "#5a6178" }}
                axisLine={{ stroke: "#161c341a" }}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip
                formatter={(value, name) => [
                  `$${Number(value).toLocaleString("en-US")}`,
                  name === "revenue" ? "Revenue" : "CAC",
                ]}
                labelFormatter={(v) => `Budget: $${Number(v).toLocaleString("en-US")}`}
                contentStyle={{
                  borderRadius: 10,
                  border: "1px solid #161c341a",
                  fontSize: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8b76ca"
                strokeWidth={2.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="cac"
                stroke="#161c34"
                strokeWidth={2}
                strokeDasharray="4 4"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-2 flex gap-5 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-3 bg-accent" /> Revenue
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-3 bg-primary" /> CAC
          </span>
        </div>
      </div>
    </div>
  );
}
