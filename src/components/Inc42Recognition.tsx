import { motion } from "framer-motion";
import inc42Badge from "@/assets/inc42-badge.png";

const Inc42Recognition = () => (
  <section
    id="inc42-recognition"
    className="py-16 md:py-24 bg-background px-6 border-t border-border"
    aria-labelledby="inc42-headline"
  >
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Left: Text content ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {/* Label row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Industry Recognition
            </span>
            <span className="inline-block text-xs font-medium bg-foreground text-background px-3 py-1 rounded-md">
              May 2026 Edition
            </span>
          </div>

          {/* Headline */}
          <h2
            id="inc42-headline"
            className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight"
          >
            Recognised By Inc42 Among India's Top Manufacturing Startups To Watch
          </h2>

          {/* Subtext */}
          <p className="text-base text-muted-foreground leading-relaxed max-w-prose">
            Zedral has been featured in Inc42's{" "}
            <a
              href="https://inc42.com/startups/manufacturing-startups-to-watch-5-startups-that-caught-our-eye-in-may/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium underline underline-offset-2 decoration-border hover:decoration-foreground transition-colors"
            >
              5 Manufacturing Startups To Watch – May 2026 Edition
            </a>{" "}
            for driving innovation in AI-powered manufacturing operations and
            industrial intelligence.
          </p>
        </motion.div>

        {/* ── Right: Badge ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={inc42Badge}
            alt="Inc42 Manufacturing Startups To Watch – May 2026 Edition badge awarded to Zedral"
            className="w-52 md:w-64 h-auto"
            width={256}
            height={256}
            loading="eager"
          />
        </motion.div>

      </div>
    </div>
  </section>
);

export default Inc42Recognition;
