import { Link } from "react-router-dom";

export default function CaseStudies() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-(--container-page) flex-col items-start justify-center px-6 py-20 sm:px-10">
      <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent-dim">
        UX &amp; Product Design
      </p>
      <h1 className="mt-5 max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] font-black leading-[1.04] tracking-tight text-primary text-balance">
        Case studies are being prepared
      </h1>
      <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
        Each case study will walk through research, flows and interface
        decisions end to end. This section is being built out and will be
        added soon.
      </p>
      <Link
        to="/selected-work"
        className="mt-9 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-200 hover:text-accent"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-4">
          <path
            d="M20 12H4M4 12L10 6M4 12L10 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back to Selected Work
      </Link>
    </section>
  );
}
