import { motion } from "framer-motion";

const MonitoringToIntelligence = () => (
  <section className="py-20 md:py-28 bg-secondary px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-tight">
            A Shift to Operational Intelligence
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-muted-foreground text-base leading-relaxed">
            Traditional systems observe. <span className="text-foreground font-semibold">Zedral interprets.</span>
          </p>
          <p className="text-muted-foreground text-base leading-relaxed underline-offset-4 decoration-primary/30">
            For manufacturing and industrial organisations, operational efficiency is no longer a reporting metric: it is a competitive advantage. Where static metrics provide hindsight, Zedral’s <span className="text-foreground font-medium">Manufacturing AI platform</span> enables forward-looking Operational Intelligence that transforms how production floors operate — delivering measurable OEE improvement and Compliance Management without new hardware.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            By integrating with existing industrial infrastructure, we eliminate the need for expensive new hardware. This approach gives plant managers structured visibility into Production Efficiency — automatically surfacing Bottleneck Detection insights and station-level delay signals before they compromise output.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            Our platform is designed to integrate seamlessly into modern industrial ecosystems, providing the clarity needed to strengthen production discipline and build long-term operational resilience across every line.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto p-8 md:p-12"
      >
        <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed text-center italic">
          "Efficiency is not about pressure. It is about precision. Zedral exists to help organizations operate with greater clarity, better coordination, and measured advancement in operational performance."
        </p>
        <p className="mt-6 text-center text-sm text-muted-foreground">The Zedral Philosophy</p>
      </motion.div>
    </div>
  </section>
);

export default MonitoringToIntelligence;
