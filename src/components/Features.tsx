import { motion } from "framer-motion";
import featureQuality from "@/assets/feature-quality.png";
import featureMetrics from "@/assets/feature-metrics.png";
import featureReports from "@/assets/feature-reports.png";
import featureYield from "@/assets/feature-yield.png";
import featureCycle from "@/assets/feature-cycle.png";
import featureBottleneck from "@/assets/feature-bottleneck.png";

const features = [
  { img: featureQuality, title: "Operational Intelligence", desc: "Gain structured Operational Intelligence into workflows as they happen — every station, every shift, in real time" },
  { img: featureMetrics, title: "OEE & Line Performance", desc: "Measure Overall Equipment Effectiveness and compare shift-level Production Efficiency with precise, station-specific metrics" },
  { img: featureReports, title: "Automated Production Reports", desc: "Align your team with daily automated WhatsApp and dashboard production efficiency reports" },
  { img: featureYield, title: "Production Efficiency Gains", desc: "Most manufacturing companies run at only 65% of true capacity — unlock the remaining potential with Manufacturing AI" },
  { img: featureCycle, title: "Industry 4.0 Process Analysis", desc: "Precise Industry 4.0-grade measurement of production process times and cycle efficiency for each station" },
  { img: featureBottleneck, title: "Bottleneck Detection", desc: "Automatically surface bottlenecks and balance your line in minutes using structured Compliance Management insights" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Features = () => (
  <section id="capabilities" className="py-20 md:py-28 bg-background px-6">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
        Manufacturing AI capabilities that drive Industry 4.0 factories
      </h2>
    </motion.div>

    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
    >
      {features.map(({ img, title, desc }) => (
        <motion.div key={title} variants={item} className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto mb-6">{desc}</p>
          <img src={img} alt={`${title} — Zedral Manufacturing AI & Operational Intelligence Platform`} width="280" height="280" className="w-full max-w-[280px] mx-auto h-auto mix-blend-multiply" loading="lazy" />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Features;
