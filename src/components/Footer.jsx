import SocialIcons from "./SocialIcons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-primary/10">
      <div className="mx-auto flex max-w-(--container-page) flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.1em] text-primary">
            ANGÉLICA TARAZONA
          </p>
          <p className="mt-1 text-sm text-ink-muted">
            Growth Marketing &amp; Marketing Operations
          </p>
        </div>
        <SocialIcons />
      </div>
    </footer>
  );
}
