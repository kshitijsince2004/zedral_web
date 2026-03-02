import { motion } from "framer-motion";
import stepIntegrate from "@/assets/step-integrate.png";
import stepAnalyze from "@/assets/step-analyze.png";
import stepRefine from "@/assets/step-refine.png";

const steps = [
  { step: "Step 1", img: stepIntegrate, title: "Integrate Seamlessly", desc: "Zedral integrates within existing industrial ecosystems — manufacturing execution systems, monitoring infrastructure, and process control environments — with minimal structural change." },
  { step: "Step 2", img: stepAnalyze, title: "Interpret & Analyze", desc: "Complex on-ground activity is transformed into structured, decision-support insights. Context-aware interpretation of process flow identifies improvement opportunities." },
  { step: "Step 3", img: stepRefine, title: "Refine & Improve", desc: "Gain real-time operational visibility and data-backed insights to strengthen production discipline, improve alignment, and build long-term operational resilience." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const HowItWorks = () => (
  <section id="integration" className="py-20 md:py-28 bg-background px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
          Seamless Integration into Existing Operations
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          The goal is structured clarity, not operational overhaul.
        </p>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-8">
        {steps.map(({ step, img, title, desc }) => (
          <motion.div key={step} variants={item} className="text-center">
            <img src={img} alt={title} className="w-full max-w-[280px] mx-auto h-auto mix-blend-multiply mb-6" loading="lazy" />
            <span className="inline-block text-xs font-medium bg-foreground text-background px-3 py-1 rounded-md mb-3">
              {step}
            </span>
            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
