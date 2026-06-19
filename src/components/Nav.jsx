import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/selected-work", label: "Selected Work" },
  { to: "/marketing-lab", label: "Marketing Lab" },
];

function NavLinks({ onClick = () => {}, className = "" }) {
  return (
    <>
      {LINKS.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          onClick={onClick}
          className={({ isActive }) =>
            `relative text-sm font-medium tracking-wide transition-colors duration-200 ${className} ${
              isActive ? "text-primary" : "text-primary/55 hover:text-primary"
            }`
          }
        >
          {({ isActive }) => (
            <span className="inline-flex flex-col items-center gap-1.5 sm:items-start">
              {link.label}
              <span
                className={`h-px w-full origin-left bg-accent transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </span>
          )}
        </NavLink>
      ))}
    </>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-surface/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-(--container-page) items-center justify-between px-6 py-4 sm:px-10">
        <NavLink
          to="/"
          className="font-display text-sm font-bold tracking-[0.18em] text-primary"
          aria-label="Angélica Tarazona — home"
        >
          A&middot;T
        </NavLink>

        <nav className="hidden items-center gap-9 sm:flex" aria-label="Primary">
          <NavLinks />
        </nav>

        <button
          type="button"
          className="grid size-9 place-items-center rounded-full text-primary sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Primary"
          className="border-t border-primary/10 px-6 py-5 sm:hidden"
        >
          <div className="flex flex-col gap-4">
            <NavLinks onClick={() => setOpen(false)} className="text-base" />
          </div>
        </nav>
      )}
    </header>
  );
}
