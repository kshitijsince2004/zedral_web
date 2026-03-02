import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import featureMetrics from "@/assets/feature-metrics.png";
import featureBottleneck from "@/assets/feature-bottleneck.png";
import featureYield from "@/assets/feature-yield.png";

const BlogDetail = () => {
  return (
    <div className="min-h-screen">
      {/* Dark header */}
      <div className="bg-primary">
        <Navbar />

        <section className="pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link
                to="/news"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors mb-10"
              >
                <ArrowLeft size={16} />
                Back to Insights
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                Operational Efficiency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-tight text-primary-foreground mb-8"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Why Most Manufacturers Are Operating at 65% of Their True Production Potential
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-sm font-bold text-accent">
                  Z
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-foreground/80">Zedral Team</p>
                  <p className="text-xs text-primary-foreground/40">20 February 2026</p>
                </div>
              </div>
              <span className="text-xs text-primary-foreground/35 ml-auto">8 min read</span>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Light content */}
      <div className="bg-background">
        <article className="px-6 py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto prose-custom"
          >
            {/* Hero illustration */}
            <div className="flex justify-center mb-12">
              <div className="w-full max-w-md rounded-2xl bg-muted p-8 flex items-center justify-center">
                <img
                  src={featureMetrics}
                  alt="Production metrics illustration"
                  className="w-full max-w-[300px] opacity-80 mix-blend-multiply"
                />
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8 font-medium">
              Manufacturing organisations across India consistently underperform against their theoretical capacity — not because of machine limitations, but because of invisible inefficiencies embedded in manual workflows. The gap between what a factory can produce and what it actually produces is often staggering.
            </p>

            <h2
              className="text-2xl font-bold text-foreground mb-4 mt-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              The 65% Reality
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Studies across sectors — garments, electronics assembly, packaging, and automotive components — consistently show that most factories operate at roughly 65% of their theoretical capacity. This is not a failure of machinery. Machines, when maintained, perform at specification. The loss lives in the spaces between: changeover delays, unbalanced workstations, inconsistent operator pacing, and processes that nobody has formally measured in years.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Line supervisors often know where the problems are. But without structured data, their observations remain anecdotal — easy to dismiss in planning meetings, impossible to quantify for leadership.
            </p>

            {/* Inline illustration: bottleneck */}
            <div className="my-10 flex justify-center">
              <div className="w-full rounded-2xl bg-muted p-8 flex items-center justify-center">
                <img
                  src={featureBottleneck}
                  alt="Bottleneck detection illustration"
                  className="w-full max-w-[360px] opacity-80 mix-blend-multiply"
                />
              </div>
            </div>

            <h2
              className="text-2xl font-bold text-foreground mb-4 mt-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Where the Loss Hides
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Production loss rarely announces itself. It accumulates in small, repeated patterns:
            </p>
            <ul className="space-y-3 mb-6 ml-1">
              {[
                "A workstation that takes 20% longer than its neighbours, creating a bottleneck nobody formally tracks.",
                "Changeover procedures that vary by shift, adding 15–30 minutes of unplanned downtime daily.",
                "SOP deviations that go unnoticed because compliance is checked manually, if at all.",
                "Idle time between tasks that compounds across dozens of operators over a full shift.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-base text-muted-foreground leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Each of these individually seems minor. Together, they account for the missing 35%.
            </p>

            <h2
              className="text-2xl font-bold text-foreground mb-4 mt-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              The Visibility Problem
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              The core issue is not that these problems are unsolvable — it is that they are invisible. Traditional monitoring gives you machine uptime and output counts. It does not tell you why Line 3 consistently underperforms on Tuesday afternoons, or why a particular workstation's cycle time drifts upward after lunch.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              This is the gap that operational intelligence fills. By capturing workstation-level activity data continuously and structuring it into actionable metrics, factories gain the ability to see what has always been hidden in plain sight.
            </p>

            <h2
              className="text-2xl font-bold text-foreground mb-4 mt-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              From Data to Action
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Structured visibility changes the conversation. Instead of "we need to improve efficiency," teams can say: "Workstation 7 on Line 2 is our constraint — its average cycle time is 42 seconds against a target of 30, and it affects downstream throughput by 18%."
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              That specificity is what drives real improvement. It moves factories from reactive problem-solving to proactive optimisation — identifying issues before they compound, and measuring the impact of every change.
            </p>

            {/* Inline illustration: yield */}
            <div className="my-10 flex justify-center">
              <div className="w-full rounded-2xl bg-muted p-8 flex items-center justify-center">
                <img
                  src={featureYield}
                  alt="Yield improvement illustration"
                  className="w-full max-w-[360px] opacity-80 mix-blend-multiply"
                />
              </div>
            </div>

            <h2
              className="text-2xl font-bold text-foreground mb-4 mt-12"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              The Path to Full Potential
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              No factory will operate at 100% — some loss is inherent in any physical process. But the jump from 65% to 80% or 85% represents a transformation in output, margin, and competitiveness. And it does not require new machines, new layouts, or more workers. It requires seeing what is actually happening on the line, shift by shift, station by station.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              That is the promise of operational intelligence: not more data, but the right data — structured, contextual, and immediately actionable.
            </p>

            {/* Divider + CTA */}
            <div className="border-t border-border pt-10 mt-16">
              <div className="bg-muted rounded-2xl p-8 md:p-10 text-center">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  See it in action
                </p>
                <h3
                  className="text-xl md:text-2xl font-bold text-foreground mb-3"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  Ready to uncover your factory's hidden potential?
                </h3>
                <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                  Zedral gives you workstation-level visibility from your existing cameras — no new hardware, no disruption.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </article>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
