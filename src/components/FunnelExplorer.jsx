import { useState } from "react";
import saasdemandgenFB from "../assets/marketing-flows/saas-demand-gen-facebook.png";
import saasdemandcapLI from "../assets/marketing-flows/saas-demand-captured-linkedin.png";
import saasdemandcapFB from "../assets/marketing-flows/saas-demand-captured-facebook.png";
import servicesdemandcap from "../assets/marketing-flows/services-demand-captured.png";

const INDUSTRIES = [
  { id: "saas", label: "SaaS B2B Software" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "fintech", label: "Fintech" },
  { id: "services", label: "B2B Services" },
];

const STAGES = [
  { id: "awareness", label: "Awareness" },
  { id: "demandGen", label: "Demand Generation" },
  { id: "demandCap", label: "Demand Captured" },
];

const PLATFORMS = [
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
];

const FLOWS = {
  saas: {
    awareness: {},
    demandGen: {
      facebook: { type: "image", path: saasdemandgenFB },
      linkedin: { type: "figma", figmaUrl: "https://www.figma.com/proto/mF4LailAQVGF7swEoKlnhT/SaaS-Demand-Generation?node-id=0-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2" },
    },
    demandCap: {
      facebook: { type: "image", path: saasdemandcapFB },
      linkedin: { type: "image", path: saasdemandcapLI },
    },
  },
  ecommerce: {
    awareness: {},
    demandGen: {},
    demandCap: {},
  },
  fintech: {
    awareness: {},
    demandGen: {},
    demandCap: {},
  },
  services: {
    awareness: {},
    demandGen: {},
    demandCap: { linkedin: { type: "image", path: servicesdemandcap }, facebook: {} },
  },
};

export default function FunnelExplorer() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const showPlatforms = selectedStage === "demandGen" || selectedStage === "demandCap";
  const flow = selectedIndustry && selectedStage ? FLOWS[selectedIndustry][selectedStage] : null;
  const content = selectedPlatform ? flow?.[selectedPlatform] : flow?.linkedin || flow?.facebook;
  const isReady = selectedIndustry && selectedStage && (!showPlatforms || selectedPlatform);

  return (
    <div className="rounded-2xl border border-primary/10 bg-surface-white p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-primary">Marketing Flow Explorer</h3>
      <p className="mt-1 text-sm text-ink-muted">
        Select an industry and stage to explore the corresponding marketing flow.
      </p>

      {/* Industry Selector */}
      <div className="mt-7">
        <p className="text-xs font-bold uppercase tracking-widest text-accent-dim">1. Choose an industry</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind.id}
              onClick={() => {
                setSelectedIndustry(ind.id);
                setSelectedStage(null);
                setSelectedPlatform(null);
              }}
              className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                selectedIndustry === ind.id
                  ? "border-accent bg-accent text-primary"
                  : "border-primary/20 bg-primary/5 text-primary hover:border-accent/50"
              }`}
            >
              {ind.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stage Selector */}
      {selectedIndustry && (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-dim">2. Choose a stage</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {STAGES.map((stage) => (
              <button
                key={stage.id}
                onClick={() => {
                  setSelectedStage(stage.id);
                  setSelectedPlatform(null);
                }}
                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                  selectedStage === stage.id
                    ? "border-accent bg-accent text-primary"
                    : "border-primary/20 bg-primary/5 text-primary hover:border-accent/50"
                }`}
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Platform Selector (only if Demand Gen or Demand Captured) */}
      {selectedStage && showPlatforms && (
        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-dim">3. Choose a platform</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {PLATFORMS.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setSelectedPlatform(platform.id)}
                className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${
                  selectedPlatform === platform.id
                    ? "border-accent bg-accent text-primary"
                    : "border-primary/20 bg-primary/5 text-primary hover:border-accent/50"
                }`}
              >
                {platform.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content Display */}
      {isReady && (
        <div className="mt-8">
          {!content ? (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 text-center">
              <p className="font-display text-base font-semibold text-primary">En construcción</p>
              <p className="mt-2 text-sm text-ink-muted">Este flujo aún está siendo diseñado.</p>
            </div>
          ) : content.type === "image" ? (
            <img src={content.path} alt="Marketing Flow" className="w-full rounded-xl border border-primary/20" />
          ) : content.type === "figma" ? (
            <iframe
              style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              width="100%"
              height="800"
              src={content.figmaUrl}
              allowFullScreen
              title="Marketing Flow"
              className="rounded-xl"
            />
          ) : null}
        </div>
      )}

      {!isReady && selectedIndustry && (
        <div className="mt-8 text-center text-sm text-ink-muted">
          {showPlatforms && !selectedPlatform
            ? "Selecciona una plataforma para continuar."
            : "Selecciona una industria y un stage para continuar."}
        </div>
      )}
    </div>
  );
}
