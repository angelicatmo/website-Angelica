import { useState } from "react";
import saasdemandgenFB from "../assets/marketing-flows/saas-demand-gen-facebook.png";
import saasdemandcapLI from "../assets/marketing-flows/saas-demand-captured-linkedin.png";
import saasdemandcapFB from "../assets/marketing-flows/saas-demand-captured-facebook.png";
import servicesdemandcap from "../assets/marketing-flows/services-demand-captured.png";
import saasdemandgenLI1 from "../assets/marketing-flows/ 1 saas-demand-gen-linkedin.png";
import saasdemandgenLI2 from "../assets/marketing-flows/ 2saas-demand-gen-linkedin..png";
import saasdemandgenLI3 from "../assets/marketing-flows/ 3 saas-demand-gen-linkedin..png";
import saasdemandgenLI4 from "../assets/marketing-flows/ 4 saas-demand-gen-linkedin..png";

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
      linkedin: {
        type: "accordion",
        main: saasdemandgenLI1,
        sections: [
          { title: "Download Guide", image: saasdemandgenLI2 },
          { title: "Request Demo", image: saasdemandgenLI3 },
          { title: "Book a Meeting", image: saasdemandgenLI4 }
        ]
      },
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

function FullscreenModal({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div className="relative max-h-screen max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-2xl font-bold hover:opacity-70 transition-opacity"
        >
          ✕
        </button>
        <img src={image} alt="Full screen" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
}

function AccordionFlow({ content }) {
  const [expandedIdx, setExpandedIdx] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <button
        onClick={() => setFullscreenImage(content.main)}
        className="w-full group relative overflow-hidden rounded-xl border border-primary/20 transition-transform hover:scale-102"
      >
        <img src={content.main} alt="Main Flow" className="w-full group-hover:opacity-75 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
          <span className="text-white text-sm font-semibold">Click to expand</span>
        </div>
      </button>

      {/* Accordion Sections */}
      <div className="mt-6 space-y-3">
        {content.sections.map((section, idx) => (
          <div key={idx} className="rounded-xl border border-primary/20">
            <button
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="w-full bg-primary/5 px-5 py-3 text-left font-semibold text-primary transition-colors hover:bg-primary/10 flex justify-between items-center rounded-xl"
            >
              <span>{section.title}</span>
              <span className={`transition-transform ${expandedIdx === idx ? "rotate-180" : ""}`}>▼</span>
            </button>
            {expandedIdx === idx && (
              <div className="border-t border-primary/20 p-4">
                <button
                  onClick={() => setFullscreenImage(section.image)}
                  className="w-full group relative overflow-hidden rounded-lg transition-transform hover:scale-102"
                >
                  <img src={section.image} alt={section.title} className="w-full group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="text-white text-sm font-semibold">Click to expand</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <FullscreenModal image={fullscreenImage} onClose={() => setFullscreenImage(null)} />
      )}
    </div>
  );
}

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
          ) : content.type === "accordion" ? (
            <AccordionFlow content={content} />
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
