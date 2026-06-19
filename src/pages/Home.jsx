import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons.jsx";
import SignalPath from "../components/SignalPath.jsx";
import portrait from "../assets/angelica-portrait.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-(--container-page) items-center gap-16 px-6 py-16 sm:px-10 lg:grid-cols-5 lg:gap-12 lg:py-24">
        <div className="order-2 lg:order-1 lg:col-span-3">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent-dim"
          >
            Paid Media &middot; Marketing Operations &middot; UX/UI &middot; Data Analysis
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.08}
            className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] font-black leading-[0.98] tracking-tight text-primary text-balance"
          >
            <span>Angélica</span>{" "}
            <span className="text-accent">Tarazona</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.16}
            className="mt-6 font-display text-xl font-medium text-primary/80 sm:text-2xl"
          >
            Growth Marketing &amp; Marketing Operations
          </motion.p>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.24}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Building scalable acquisition systems, revenue engines and growth
            experiments.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0.32}
            className="mt-9"
          >
            <SocialIcons className="-ml-1.5" />
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[420px]"
          >
            <div
              className="absolute inset-[-12%] rounded-full bg-accent/25 blur-3xl"
              aria-hidden="true"
            />
            <SignalPath className="absolute inset-[-18%] h-[136%] w-[136%]" />
            <img
              src={portrait}
              alt="Portrait of Angélica Tarazona"
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_28px_45px_rgba(22,28,52,0.28)]"
              width={800}
              height={800}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
