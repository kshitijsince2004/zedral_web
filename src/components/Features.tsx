import { motion } from "framer-motion";
import featureQuality from "@/assets/feature-quality.png";
import featureMetrics from "@/assets/feature-metrics.png";
import featureReports from "@/assets/feature-reports.png";
import featureYield from "@/assets/feature-yield.png";
import featureCycle from "@/assets/feature-cycle.png";
import featureBottleneck from "@/assets/feature-bottleneck.png";

const features = [
  { img: featureQuality, title: "Real-time Operational Visibility", desc: "Gain structured visibility into operational workflows as they happen across every station" },
  { img: featureMetrics, title: "Precise Workspace Metrics", desc: "Measure and compare shift-level performance with precise workspace and line-specific metrics" },
  { img: featureReports, title: "Automated Reports", desc: "Align your team by sending out daily automated whatsapp production reports" },
  { img: featureYield, title: "Uncover Ideal Yield", desc: "Most Manufacturing companies run at only 65% of their true production potential" },
  { img: featureCycle, title: "Cycle Time Analysis", desc: "Precise measurement of production cycle times for each workstation" },
  { img: featureBottleneck, title: "Bottleneck Identification", desc: "Find bottlenecks and balance your line in minutes not hours with structured performance insights" },
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
        Capabilities that drive<br className="hidden md:block" /> factories of the future
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
          <img src={img} alt={title} className="w-full max-w-[280px] mx-auto h-auto mix-blend-multiply" loading="lazy" />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Features;
