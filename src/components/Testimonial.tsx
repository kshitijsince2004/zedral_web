import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Brooklyn Simmons",
    company: "Nintendo",
    initials: "BS",
    quote: "Zedral's operational intelligence has transformed how we observe and improve our production lines. The structured visibility into workflows gave us insights we never had before.",
  },
  {
    name: "Jenny Wilson",
    company: "Starbucks",
    initials: "JW",
    quote: "The seamless integration into our existing systems was impressive. Within weeks, we identified bottlenecks that had been costing us 15% throughput efficiency.",
  },
  {
    name: "Albert Flores",
    company: "Bank of America",
    initials: "AF",
    quote: "Zedral doesn't disrupt; it refines. Our teams embraced it because it focuses on process enhancement, not personnel scrutiny. Exactly what modern industry needs.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={14} className="fill-accent text-accent" />
    ))}
  </div>
);

const Testimonial = () => (
  <section className="py-20 md:py-28 bg-background px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-foreground" />
            <span className="text-sm text-muted-foreground tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            What our clients say about us
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-md">
            Organizations across industries trust Zedral to deliver structured operational intelligence, measurable efficiency gains, and sustainable process improvement.
          </p>
        </motion.div>

        {/* Right side — stacked cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              viewport={{ once: true }}
              className="bg-background border border-border rounded-2xl p-6 shadow-sm"
              style={{ marginLeft: idx * 16 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.company}</p>
                  </div>
                </div>
                <Stars />
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">{t.quote}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Testimonial;
