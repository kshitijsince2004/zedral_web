import { motion } from "framer-motion";
import { Eye, Brain, Target, BarChart3 } from "lucide-react";
import valuePropIllustration from "@/assets/value-prop-illustration.png";

const items = [
  {
    icon: Eye,
    title: "Structured Visibility",
    desc: "Gain complete visibility into operational movement and workflow patterns across every line and station.",
  },
  {
    icon: Brain,
    title: "Context-Aware Interpretation",
    desc: "Transform complex on-ground activity into structured, decision-support insights for leadership teams.",
  },
  {
    icon: Target,
    title: "Measured Identification",
    desc: "Identify variability within operational cycles, friction points, and optimization opportunities with clarity.",
  },
  {
    icon: BarChart3,
    title: "Data-Backed Reinforcement",
    desc: "Support managerial oversight with data-driven insights that strengthen operational discipline.",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const ValueProp = () => (
  <section id="about" className="py-20 md:py-28 bg-background px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
          Precision in Operations
        </h2>
        <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Modern manufacturing generates immense activity but limited clarity. Zedral's Operational Intelligence bridges this gap with Operational Intelligence, OEE tracking, and Compliance Management.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} variants={item} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground flex items-center justify-center">
                <Icon size={20} className="text-background" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
            <img
              src={valuePropIllustration}
              alt="Zedral Operational Intelligence platform showing OEE, Production Efficiency, and Bottleneck Detection for Industry 4.0"
              loading="lazy"
              className="w-full max-w-2xl h-auto mix-blend-multiply opacity-90"
            />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ValueProp;
