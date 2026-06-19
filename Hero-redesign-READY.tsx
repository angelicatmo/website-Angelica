"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import AccentMark from "./AccentMark";

const HAS_PROFILE_PHOTO = true;

export default function Hero() {
  const { t } = useLanguage();
  const [firstName, ...rest] = t.hero.title.split(" ");
  const lastName = rest.join(" ");

  return (
    <section className="noise-grid relative overflow-hidden bg-grad-radial">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-20 md:flex-row md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          {/* Keywords */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {t.hero.keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-line bg-surface2 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent-soft"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Nombre */}
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            <span>{firstName}</span>{" "}
            <span className="italic text-accent-soft">{lastName}</span>
          </h1>

          <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-muted md:mx-0 md:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} />
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.hero.status}
            </span>
          </div>

          {/* Headline personalizado */}
          <p className="relative mx-auto mt-6 max-w-xl border-l-2 border-accent/60 pl-4 text-left font-display text-xl italic leading-snug text-ink sm:text-2xl md:mx-0">
            {t.hero.headline}
          </p>

          {/* Brief / bio */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted/90 md:mx-0">
            {t.hero.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link
              href="/ux-ui"
              className="group inline-flex items-center gap-2 rounded-full bg-grad-accent px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-[1.03]"
            >
              {t.hero.cta1}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/growth-lab"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent/60"
            >
              {t.hero.cta2}
            </Link>
            <a
              href="https://www.linkedin.com/in/angelicatarazona/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line/60 px-4 py-2.5 text-sm text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={16} />
              {t.hero.linkedin}
            </a>
          </div>
        </motion.div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute inset-0 -z-10 scale-110 rounded-xl2 bg-grad-accent opacity-30 blur-2xl" />

          {/* offset back panel */}
          <div
            aria-hidden="true"
            className="noise-grid absolute -right-3 -top-3 h-full w-full rotate-6 rounded-xl2 border border-line/60 bg-grad-accent"
          />

          {/* front photo card */}
          <div className="relative aspect-[4/5] w-60 -rotate-2 overflow-hidden rounded-xl2 border-2 border-line bg-surface shadow-glow sm:w-72 md:w-80">
            {HAS_PROFILE_PHOTO ? (
              <Image
                src="/images/profile.webp"
                alt="Angélica Tarazona"
                fill
                sizes="(min-width: 768px) 320px, 240px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-grad-accent">
                <span className="font-display text-5xl font-semibold italic text-ink">
                  AT
                </span>
              </div>
            )}
          </div>

          {/* poster-stamp caption */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-3 whitespace-nowrap rounded-full border border-line bg-surface2 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-soft shadow-glow sm:left-6 sm:translate-x-0">
            <AccentMark className="mr-1 inline h-2.5 w-2.5" />
            {t.hero.location}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
