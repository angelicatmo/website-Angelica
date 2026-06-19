import { Link } from "react-router-dom";

export default function WorkPanel({ eyebrow, title, description, cta, to, badge }) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden border-b border-primary/10 px-6 py-16 transition-colors duration-300 last:border-b-0 hover:bg-primary/[0.03] sm:px-10 sm:py-24"
    >
      <span
        className="pointer-events-none absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-(--container-page)">
        <div className="flex items-baseline justify-between gap-6">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent-dim">
            {eyebrow}
          </p>
          {badge && (
            <span className="rounded-full border border-accent/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-dim">
              {badge}
            </span>
          )}
        </div>

        <h2 className="mt-5 font-display text-[clamp(2rem,5.5vw,4.25rem)] font-black leading-[1.02] tracking-tight text-primary text-balance">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>

        <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-primary">
          {cta}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
          >
            <path
              d="M4 12H20M20 12L14 6M20 12L14 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
