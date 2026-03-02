import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () =>
<section id="cta" className="py-20 md:py-28 px-6">
    <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="max-w-5xl mx-auto">

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[hsl(160,45%,22%)] to-[hsl(160,50%,12%)] px-8 py-16 md:px-16 md:py-24 text-center">
        <p className="text-sm font-medium text-[hsl(160,30%,70%)] mb-4 tracking-wide">Connect With Us</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight leading-tight text-balance max-w-3xl mx-auto md:text-2xl">
          Operational Intelligence. Structured Efficiency. Sustainable Growth.
        </h2>
        <p className="mt-4 text-primary-foreground/80 text-base max-w-xl mx-auto md:text-base">
          Zedral empowers modern industry to operate with greater precision, visibility, and strategic control.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-lg bg-primary-foreground text-primary hover:opacity-90 transition-opacity">
            Contact Us
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:brightness-110 transition-all">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  </section>;


export default CTA;