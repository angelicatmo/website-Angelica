import WorkPanel from "../components/WorkPanel.jsx";

export default function SelectedWork() {
  return (
    <section>
      <div className="mx-auto max-w-(--container-page) px-6 pt-16 pb-4 sm:px-10 sm:pt-24">
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent-dim">
          Selected Work
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-black leading-[1.04] tracking-tight text-primary text-balance">
          Three disciplines, one growth practice.
        </h1>
      </div>

      <div className="mt-6">
        <WorkPanel
          eyebrow="UX &amp; Product Design"
          title="UX/UI Case Studies"
          description="End-to-end product design work — research, flows, interface decisions and the reasoning behind them."
          cta="Explore"
          to="/selected-work/case-studies"
        />
        <WorkPanel
          eyebrow="Automation"
          title="AI Automation"
          description="Systems that remove manual work from acquisition and operations using AI-driven workflows."
          cta="Work In Progress"
          to="/selected-work/ai-automation"
          badge="In Progress"
        />
        <WorkPanel
          eyebrow="Growth"
          title="Growth Marketing Lab"
          description="Interactive tools for modeling funnels and pipelines — built from the same logic used to run real budgets."
          cta="Launch Lab"
          to="/marketing-lab"
        />
      </div>
    </section>
  );
}
