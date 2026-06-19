/**
 * Signature decorative motif: a converging signal/funnel diagram, drawn from
 * the same visual language as the Funnel Explorer and Pipeline Simulator —
 * paths feeding into a single line, nodes marking each stage. Purely
 * ambient and decorative; hidden from assistive tech.
 */
export default function SignalPath({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 640"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g stroke="var(--color-accent)" strokeWidth="1.4" strokeLinecap="round">
        <path
          className="signal-path-line"
          d="M40 50 C150 140 190 250 262 322"
          strokeDasharray="6 12"
          opacity="0.55"
        />
        <path
          className="signal-path-line"
          d="M482 36 C372 128 330 240 262 322"
          strokeDasharray="6 12"
          opacity="0.45"
          style={{ animationDelay: "-3s" }}
        />
        <path
          className="signal-path-line"
          d="M16 320 C120 318 186 320 262 322"
          strokeDasharray="5 10"
          opacity="0.4"
          style={{ animationDelay: "-6s" }}
        />
        <path
          className="signal-path-line"
          d="M506 312 C404 316 332 320 262 322"
          strokeDasharray="5 10"
          opacity="0.4"
          style={{ animationDelay: "-9s" }}
        />
        <path
          className="signal-path-line"
          d="M262 322 C268 410 274 500 286 600"
          strokeDasharray="7 14"
          opacity="0.6"
          style={{ animationDelay: "-1.5s" }}
        />
      </g>
      <g fill="var(--color-accent)">
        <circle className="signal-path-node" cx="40" cy="50" r="3.5" />
        <circle className="signal-path-node" cx="482" cy="36" r="3.5" style={{ animationDelay: "-1s" }} />
        <circle className="signal-path-node" cx="16" cy="320" r="3" style={{ animationDelay: "-2s" }} />
        <circle className="signal-path-node" cx="506" cy="312" r="3" style={{ animationDelay: "-2.6s" }} />
        <circle className="signal-path-node" cx="262" cy="322" r="5" style={{ animationDelay: "-0.5s" }} />
        <circle className="signal-path-node" cx="286" cy="600" r="4" style={{ animationDelay: "-1.8s" }} />
      </g>
    </svg>
  );
}
