import { motion } from "framer-motion";
import securityHeader from "@/assets/security-header.png";
import securityEncryption from "@/assets/security-encryption.png";
import securityInfrastructure from "@/assets/security-infrastructure.png";
import securityRetention from "@/assets/security-retention.png";
import securityAccess from "@/assets/security-access.png";

const Security = () => (
  <section id="why-zedral" className="py-20 md:py-28 bg-secondary px-6">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
            Built on Trust, Secured by Design
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-md leading-relaxed">
            Your operational data is always protected. Zedral uses industrial-grade security, enterprise-level encryption, and strict role-based access controls — so your production intelligence stays private and fully under your control.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/80 leading-relaxed max-w-md">
            Compliant with DPDPA 2023 and global standards — your factory's operational telemetry stays under your exclusive control.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
          <img src={securityHeader} alt="Zedral Industrial Security Shield and Trust Icon" className="w-56 h-56 object-contain mix-blend-multiply" loading="lazy" />
        </motion.div>
      </div>

      {/* Row 1: text left, illustration right */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">End-to-End Encryption</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Your data is protected at every step. Zedral encrypts information from the moment it's captured until it reaches your dashboard, ensuring complete confidentiality and compliance.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={securityEncryption} alt="End-to-end data encryption for manufacturing telemetry" className="w-full max-w-sm h-auto mix-blend-multiply" loading="lazy" />
        </div>
      </motion.div>

      {/* Row 2: illustration left, text right */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="flex justify-center order-2 md:order-1">
          <img src={securityInfrastructure} alt="Secure cloud infrastructure for industrial operational intelligence" className="w-full max-w-sm h-auto mix-blend-multiply" loading="lazy" />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Secure Infrastructure</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Built on enterprise-grade cloud systems, Zedral delivers reliability and scale you can trust. Redundant safeguards and continuous oversight keep operations running without disruption.
          </p>
        </div>
      </motion.div>

      {/* Row 3: text left, illustration right */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-3">Minimal Data Retention</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Operational data is processed in real-time with minimal retention. The emphasis is on insight, not storage, giving you full privacy compliance out of the box.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={securityRetention} alt="Privacy-focused minimal data retention policy for factory video streams" className="w-full max-w-sm h-auto mix-blend-multiply" loading="lazy" />
        </div>
      </motion.div>

      {/* Row 4: illustration left, text right */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <img src={securityAccess} alt="Role-based secure access controls for industrial dashboards" className="w-full max-w-sm h-auto mix-blend-multiply" loading="lazy" />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-semibold text-foreground mb-3">Secure Access Controls</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            Role-based access with granular permission management ensures only the right people see the right data. The objective is clarity, not surveillance.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Security;
