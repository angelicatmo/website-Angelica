import { useMemo, useState } from "react";
import NumberField from "../components/NumberField.jsx";
import FunnelExplorer from "../components/FunnelExplorer.jsx";
import PipelineSimulator from "../components/PipelineSimulator.jsx";
import FunnelAnalyzer from "../components/FunnelAnalyzer.jsx";
import { DEFAULT_INPUTS, computeFunnel } from "../lib/funnel.js";

const FIELDS = [
  { key: "budget", label: "Monthly Budget", min: 1000, max: 100000, step: 500, prefix: "$" },
  { key: "cpc", label: "Cost per Click", min: 0.2, max: 15, step: 0.1, prefix: "$" },
  { key: "cvr", label: "Click → Lead", min: 1, max: 40, step: 1, suffix: "%" },
  { key: "leadToMql", label: "Lead → MQL", min: 1, max: 100, step: 1, suffix: "%" },
  { key: "mqlToSql", label: "MQL → SQL", min: 1, max: 100, step: 1, suffix: "%" },
  { key: "sqlToOpp", label: "SQL → Opportunity", min: 1, max: 100, step: 1, suffix: "%" },
  { key: "oppToCustomer", label: "Opportunity → Customer", min: 1, max: 100, step: 1, suffix: "%" },
  { key: "avgDealSize", label: "Average Deal Size", min: 200, max: 50000, step: 100, prefix: "$" },
];

export default function MarketingLab() {
  const [activeTab, setActiveTab] = useState("simulator");
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);
  const funnel = useMemo(() => computeFunnel(inputs), [inputs]);

  const update = (key) => (value) => setInputs((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="mx-auto max-w-(--container-page) px-6 py-16 sm:px-10 sm:py-20">
      <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent-dim">
        Growth Marketing Lab
      </p>
      <h1 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-black leading-[1.04] tracking-tight text-primary text-balance">
        {activeTab === "simulator" ? "Model the funnel before you spend the budget." : "Explore marketing flows by industry and channel."}
      </h1>
      <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
        {activeTab === "simulator"
          ? "Adjust the assumptions below to see how budget and conversion rates move volume, revenue, CAC and ROAS through the pipeline."
          : "Select an industry, stage, and platform to explore the corresponding marketing flow."}
      </p>

      {/* Tabs */}
      <div className="mt-8 flex gap-4 border-b border-primary/10">
        <button
          onClick={() => setActiveTab("simulator")}
          className={`px-4 py-3 text-sm font-semibold transition-colors ${
            activeTab === "simulator"
              ? "border-b-2 border-accent text-accent"
              : "text-ink-muted hover:text-primary"
          }`}
        >
          Simulator
        </button>
        <button
          onClick={() => setActiveTab("explorer")}
          className={`px-4 py-3 text-sm font-semibold transition-colors ${
            activeTab === "explorer"
              ? "border-b-2 border-accent text-accent"
              : "text-ink-muted hover:text-primary"
          }`}
        >
          Funnel Explorer
        </button>
      </div>

      {/* Simulator Tab */}
      {activeTab === "simulator" && (
        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="rounded-2xl border border-primary/10 bg-surface-white p-6 sm:p-7">
            <h2 className="font-display text-base font-bold text-primary">Assumptions</h2>
            <div className="mt-6 space-y-6">
              {FIELDS.map((field) => (
                <NumberField
                  key={field.key}
                  label={field.label}
                  value={inputs[field.key]}
                  onChange={update(field.key)}
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  prefix={field.prefix}
                  suffix={field.suffix}
                />
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <FunnelAnalyzer funnel={funnel} />
            <PipelineSimulator inputs={inputs} funnel={funnel} />
          </div>
        </div>
      )}

      {/* Funnel Explorer Tab */}
      {activeTab === "explorer" && (
        <div className="mt-12">
          <FunnelExplorer />
        </div>
      )}
    </section>
  );
}
