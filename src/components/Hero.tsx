import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { trackEmailSignup } from "@/utils/analytics";

const badges = ["OEE Improvement", "Bottleneck Detection", "Compliance Management"];

// Floating particles (no mouse interaction)
const FloatingParticles = () => {
  const particles = useMemo(() =>
    Array.from({ length: 65 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3.5 + 1,
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 4,
    })), []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "hsl(var(--primary-foreground) / 0.25)",
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.15, 0.6, 0.3, 0.5, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated grid pattern
const GridPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M 60 0 L 0 0 0 60"
          fill="none"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="0.5"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hero-grid)" />
  </svg>
);

const Hero = () => {
  const [heroEmail, setHeroEmail] = useState("");
  const navigate = useNavigate();

  const handleGetInTouch = async () => {
    if (!heroEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(heroEmail.trim())) return;
    
    // Track email signup
    trackEmailSignup('Hero Section');
    
    // Save email to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbyhYnHHuXnKGFu2n9-h3GAsCvFHKQfHnJaNu8BtcMBFDV0dglG4fPIdswmQ1xywXQ6g/exec", {
      method: "POST",
      body: JSON.stringify({ email: heroEmail.trim() }),
    }).catch(() => {});
    navigate("/contact");
  };
  return (
    <section className="relative bg-background pt-6 px-4 md:px-6">
      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          background: "linear-gradient(135deg, hsl(var(--hero-from)), hsl(var(--hero-to)))",
        }}
      >
        {/* Background illustration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <img
            src={heroIllustration}
            alt="Zedral Operational Intelligence platform dashboard — Operational Intelligence for OEE, Bottleneck Detection, and Compliance Management in Indian manufacturing"
            loading="eager"
            className="w-full h-full object-cover opacity-[0.10]"
          />
        </div>

        <GridPattern />
        <FloatingParticles />

        {/* Decorative arc/glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] rounded-[50%] opacity-[0.12] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, hsl(var(--accent) / 0.3), transparent 70%)" }}
        />

        {/* Animated orbiting rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/[0.06] pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary-foreground/[0.04] pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 md:pt-36 pb-24 md:pb-36 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary-foreground leading-[1.08]"
          >
            Operational Efficiency Intelligence for Modern Industry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto leading-relaxed"
          >
            Operational efficiency is no longer a reporting metric. It is a competitive advantage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex justify-center"
          >
            <div className="flex w-full max-w-md bg-primary-foreground rounded-full overflow-hidden shadow-lg p-1.5 pl-4 sm:pl-5">
              <input
                type="email"
                value={heroEmail}
                onChange={(e) => setHeroEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 min-w-0 py-3 text-sm text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
                onKeyDown={(e) => e.key === "Enter" && handleGetInTouch()}
              />
              <button
                onClick={handleGetInTouch}
                disabled={!heroEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(heroEmail.trim())}
                className={`flex-shrink-0 px-4 sm:px-7 py-3 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                  heroEmail.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(heroEmail.trim())
                    ? "bg-accent text-foreground hover:brightness-110"
                    : "bg-primary text-primary-foreground cursor-not-allowed"
                }`}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80">
                <CheckCircle size={15} /> {badge}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="h-16 md:h-20" />
      </div>
    </section>
  );
};

export default Hero;
