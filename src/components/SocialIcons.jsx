const LINKEDIN_URL = "https://www.linkedin.com/in/angelicatarazona/";
const EMAIL = "kmit_22@hotmail.com";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 6.94C6.35 6.94 7.25 6.04 7.25 4.94C7.25 3.84 6.35 2.94 5.25 2.94C4.15 2.94 3.25 3.84 3.25 4.94C3.25 6.04 4.15 6.94 5.25 6.94Z"
        fill="currentColor"
      />
      <path
        d="M9.5 8.5H12.74V10.03H12.79C13.24 9.17 14.35 8.27 16.01 8.27C19.42 8.27 20.06 10.46 20.06 13.33V20.5H16.69V13.99C16.69 12.74 16.66 11.14 14.94 11.14C13.19 11.14 12.92 12.5 12.92 13.9V20.5H9.5V8.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4 7L11.1 12.4C11.6 12.78 12.4 12.78 12.9 12.4L20 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SocialIcons({ className = "", iconClassName = "size-[18px]" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Angélica Tarazona on LinkedIn (opens in a new tab)"
        className="grid size-9 place-items-center rounded-full text-primary/70 transition-colors duration-200 hover:bg-primary/5 hover:text-accent"
      >
        <LinkedInIcon className={iconClassName} />
      </a>
      <a
        href={`mailto:${EMAIL}`}
        aria-label="Email Angélica Tarazona"
        className="grid size-9 place-items-center rounded-full text-primary/70 transition-colors duration-200 hover:bg-primary/5 hover:text-accent"
      >
        <EmailIcon className={iconClassName} />
      </a>
    </div>
  );
}
