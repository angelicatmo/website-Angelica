import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons.jsx";
import portrait from "../assets/angelica-portrait.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const keywords = [
  "Growth Marketing",
  "UX/UI Design",
  "Automatización con IA",
  "Estrategia creativa",
];

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 px-6 py-20 md:flex-row md:py-28">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 text-center md:text-left"
        >
          {/* Keywords Pills */}
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            {keywords.map((kw) => (
              <span
                key={kw}
                className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent"
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Name: First + Last (color distinction, no italic) */}
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-6xl md:text-7xl">
            <span>Angélica</span>{" "}
            <span className="text-accent">Tarazona</span>
          </h1>

          {/* Location + Status */}
          <div className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-ink-muted md:mx-0 md:justify-start">
            <span>📍 Bogotá, Colombia</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Disponible para nuevos proyectos
            </span>
          </div>

          {/* Personalized Headline (italic, with left border) */}
          <p className="relative mx-auto mt-6 max-w-xl border-l-2 border-accent/60 pl-4 text-left font-display text-xl italic leading-snug text-primary sm:text-2xl md:mx-0">
            Empecé optimizando el clic. Hoy diseño todo lo que pasa antes de él.
          </p>

          {/* Bio */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-muted md:mx-0">
            Building scalable acquisition systems, revenue engines and growth experiments.
          </p>

          {/* Social Icons */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.32}
            className="mt-9"
          >
            <SocialIcons className="-ml-1.5" />
          </motion.div>
        </motion.div>

        {/* Right: Photo - Layered Offset Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative flex-shrink-0"
        >
          {/* Glow background */}
          <div className="absolute inset-0 -z-10 scale-110 rounded-2xl bg-accent/20 blur-3xl" />

          {/* Back panel - rotated */}
          <div
            aria-hidden="true"
            className="absolute -right-3 -top-3 h-full w-full rotate-6 rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/10 to-accent/5"
          />

          {/* Front photo card - rotated opposite */}
          <div className="relative aspect-[4/5] w-60 -rotate-2 overflow-hidden rounded-2xl border-2 border-accent/50 bg-white shadow-lg sm:w-72 md:w-80">
            <img
              src={portrait}
              alt="Portrait of Angélica Tarazona"
              className="h-full w-full object-cover"
              width={800}
              height={800}
            />
          </div>

          {/* Poster-stamp caption */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 -rotate-3 whitespace-nowrap rounded-full border border-accent/40 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent shadow-md sm:left-6 sm:translate-x-0">
            ✦ Bogotá, Colombia
          </div>
        </motion.div>
      </div>
    </section>
  );
}
