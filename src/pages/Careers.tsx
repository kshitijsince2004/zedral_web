import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import domainMl from "@/assets/domain-ml.png";
import domainVision from "@/assets/domain-vision.png";
import domainBackend from "@/assets/domain-backend.png";
import domainFrontend from "@/assets/domain-frontend.png";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import valueIntent from "@/assets/value-intent.png";
import valueOwnership from "@/assets/value-ownership.png";
import valuePrecision from "@/assets/value-precision.png";
import valueTeam from "@/assets/value-team.png";
import valueCustomer from "@/assets/value-customer.png";
import valueGrowth from "@/assets/value-growth.png";

const stats = [
  { label: "Early Stage", icon: "🚀" },
  { label: "4 Open Domains", icon: "📂" },
  { label: "India Based", icon: "🇮🇳" },
];

const values = [
  { img: valueIntent, title: "Move with intent", desc: "We move fast but never thoughtlessly. Every decision at this stage compounds — so we think clearly and ship deliberately.", maxW: "280px" },
  { img: valueOwnership, title: "Own the problem", desc: "We do not hand things off and forget them. You own your work end to end, from whiteboard to production to customer impact.", maxW: "340px" },
  { img: valuePrecision, title: "Precision over noise", desc: "We are building for industrial environments where accuracy is not optional. We hold our work to that same standard.", maxW: "280px" },
  { img: valueTeam, title: "Small team, full trust", desc: "At this stage, everyone knows everyone. There are no layers. You will work directly with founders and have real influence on the product.", maxW: "340px" },
  { img: valueCustomer, title: "Customer obsession", desc: "Our customers run factories. Understanding their world — the floor, the shift, the pressure — shapes everything we build.", maxW: "220px" },
  { img: valueGrowth, title: "Grow with the company", desc: "The people who join now will define the culture, the architecture, and the trajectory of Zedral for years to come.", maxW: "280px" },
];

interface DomainDetail {
  title: string;
  subtitle: string;
  icon: string;
  tags: string[];
  role: string;
  tasks: string[];
  coreSkills: string[];
  bonusSkills: string[];
  fitIf: string[];
}

const domains: DomainDetail[] = [
  {
    title: "Data & ML Engineering",
    subtitle: "Model development · Training pipelines · Production ML",
    icon: domainMl,
    tags: ["Full-time", "In-person / Hybrid"],
    role: "You will design and train the machine learning models that sit at the core of the Zedral platform. This is not prompt engineering or API wrapping — this is real model development on real industrial data. You will own the full ML lifecycle from data collection through training, evaluation, and production deployment.",
    tasks: [
      "Design and train supervised and unsupervised models on operational and production data",
      "Build and maintain ML training pipelines and experiment tracking infrastructure",
      "Optimise models for inference latency in edge and cloud environments",
      "Work directly with computer vision engineers to integrate perception outputs into ML workflows",
      "Define evaluation metrics that reflect real operational impact, not just benchmark scores",
      "Iterate rapidly with customer feedback to improve model accuracy over time",
    ],
    coreSkills: ["Python", "PyTorch", "Scikit-learn", "Time-Series Analysis", "Anomaly Detection", "TensorFlow", "MLflow / Weights & Biases", "Feature Engineering", "Model Quantisation", "ONNX", "Data Pipelines", "Statistical Modelling"],
    bonusSkills: ["Manufacturing domain knowledge", "Edge inference (Jetson, ONNX Runtime)", "Reinforcement Learning", "Causal inference"],
    fitIf: [
      "You have shipped ML models in production, not just in notebooks",
      "You are comfortable with messy, real-world data",
      "You care about the \"why\" behind model predictions, not just accuracy numbers",
    ],
  },
  {
    title: "Computer Vision Engineer",
    subtitle: "Video understanding · Object detection · Real-time perception",
    icon: domainVision,
    tags: ["Full-time", "In-person / Hybrid"],
    role: "You will build the vision layer that turns raw camera streams into structured operational intelligence. This is the most technically challenging part of Zedral — understanding what workers are doing, detecting process deviations, and counting production output from standard IP camera footage in real time. You will work on problems that have no off-the-shelf solution.",
    tasks: [
      "Build and fine-tune object detection, tracking, and activity recognition models for factory environments",
      "Design video processing pipelines that run efficiently on edge hardware and cloud",
      "Develop annotation strategies and train custom datasets on industrial operations",
      "Implement action recognition and pose estimation for SOP compliance monitoring",
      "Optimise inference pipelines to meet real-time latency requirements (<5 seconds)",
      "Handle challenging conditions: occlusion, low light, camera angle variation, cluttered backgrounds",
    ],
    coreSkills: ["Python", "OpenCV", "PyTorch", "YOLOv8 / YOLO variants", "Object Detection", "Object Tracking", "RTSP / video streaming", "DeepSORT / ByteTrack", "TensorRT", "Action Recognition", "Pose Estimation (MediaPipe / OpenPose)", "Dataset annotation (CVAT, Roboflow)"],
    bonusSkills: ["NVIDIA Jetson deployment", "Multi-camera synchronisation", "Video segmentation", "Optical flow"],
    fitIf: [
      "You have built vision systems that run in real environments, not just benchmark datasets",
      "You obsess over latency, false positive rates, and robustness",
      "You can build your own datasets when none exist",
    ],
  },
  {
    title: "Backend Engineer",
    subtitle: "APIs · Data pipelines · Real-time systems",
    icon: domainBackend,
    tags: ["Full-time", "In-person / Hybrid"],
    role: "You will build the backend systems that power everything Zedral does — from ingesting video-derived events in real time, to storing structured operational data, to serving it through APIs that the dashboard and customer integrations depend on. Performance, reliability, and clean architecture matter here. You will be the first backend engineer at Zedral, which means the decisions you make now will define the system for years.",
    tasks: [
      "Design and build APIs that serve real-time and historical operational intelligence to the frontend",
      "Build event-driven data pipelines that ingest high-frequency operational events from vision systems",
      "Design data schemas for storing time-series production metrics, alerts, and performance records",
      "Implement authentication, role-based access control, and multi-tenancy for enterprise customers",
      "Build automated report generation and WhatsApp/email notification systems",
      "Integrate with manufacturing execution systems and third-party industrial tools",
    ],
    coreSkills: ["Python", "FastAPI / Django", "PostgreSQL", "Redis", "REST API design", "WebSockets", "Docker", "Kafka / RabbitMQ", "TimescaleDB / InfluxDB", "AWS / GCP", "Celery", "JWT / OAuth2"],
    bonusSkills: ["Node.js", "Kubernetes", "gRPC", "MES / SCADA integration"],
    fitIf: [
      "You have built systems that handle high-frequency, real-time event data",
      "You think about data modelling before writing a single line of code",
      "You have strong opinions about API design and are not afraid to defend them",
    ],
  },
  {
    title: "Full-Stack / Frontend Engineer",
    subtitle: "Dashboard · Real-time UI · Data visualisation",
    icon: domainFrontend,
    tags: ["Full-time", "In-person / Hybrid"],
    role: "You will build the Zedral dashboard — the surface through which factory managers, production heads, and operators interact with everything we generate. This is not a simple CRUD app. It is a real-time operational intelligence interface that must be fast, clear, and intuitive enough for a factory floor supervisor to act on in seconds. Design sensibility matters as much as engineering ability here.",
    tasks: [
      "Build the core Zedral dashboard with real-time metrics, charts, and live production feeds",
      "Implement live data visualisations for operator performance, line efficiency, and bottleneck alerts",
      "Build WebSocket-powered real-time update systems that reflect factory state as it happens",
      "Design and implement role-based views for operators, supervisors, production heads, and management",
      "Build responsive interfaces that work on both desktop and large-format factory floor displays",
      "Collaborate directly with customers to refine UX based on how they actually use the product",
    ],
    coreSkills: ["React", "TypeScript", "Tailwind CSS", "Recharts / Chart.js / D3.js", "WebSockets", "REST API integration", "Vite / Next.js", "Zustand / Redux", "Framer Motion", "React Query / TanStack Query", "Figma (design handoff)"],
    bonusSkills: ["Data-heavy dashboard experience", "Canvas / WebGL rendering", "Mobile / PWA", "Performance profiling"],
    fitIf: [
      "You care about how things look and feel as much as how they work",
      "You have built dashboards that display large volumes of live data clearly",
      "You can take a rough wireframe and turn it into something that feels polished and intentional",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const SkillBadge = ({ label, variant = "core" }: { label: string; variant?: "core" | "bonus" }) => (
  <span className={`inline-block px-3 py-1.5 rounded-md text-xs font-mono tracking-wide border ${
    variant === "core"
      ? "border-border text-foreground bg-muted/50"
      : "border-accent/30 text-accent bg-accent/5"
  }`}>
    {label}
  </span>
);

const RoleDetail = ({ domain, onClose }: { domain: DomainDetail; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="overflow-hidden"
  >
    <div className="border border-border rounded-xl bg-card p-8 md:p-10 mt-4">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src={domain.icon} alt={domain.title} className="w-12 h-12 object-contain" />
          <div>
            <h3 className="text-xl font-bold text-foreground">{domain.title}</h3>
            <p className="text-sm text-muted-foreground">{domain.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {domain.tags.map(tag => (
            <span key={tag} className="text-xs font-mono border border-border rounded-full px-3 py-1 text-muted-foreground">{tag}</span>
          ))}
          <button onClick={onClose} className="ml-2 w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors">
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Left column */}
        <div className="space-y-8">
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">The Role</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{domain.role}</p>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">What You Will Do</h4>
            <ul className="space-y-3">
              {domain.tasks.map((task, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent mt-0.5">→</span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <a href={`mailto:hello@zedral.com?subject=Application: ${domain.title}`} className="inline-flex items-center gap-2 bg-[hsl(160,40%,14%)] text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-[hsl(160,40%,18%)] transition-colors text-sm">
            Apply for this role <ArrowRight size={14} />
          </a>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Core Skills Required</h4>
            <div className="flex flex-wrap gap-2">
              {domain.coreSkills.map(s => <SkillBadge key={s} label={s} />)}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">Bonus Knowledge</h4>
            <div className="flex flex-wrap gap-2">
              {domain.bonusSkills.map(s => <SkillBadge key={s} label={s} variant="bonus" />)}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">You Are a Fit If</h4>
            <ul className="space-y-3">
              {domain.fitIf.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Careers = () => {
  const [openDomain, setOpenDomain] = useState<number | null>(null);

  return (
  <div className="min-h-screen bg-background">
    <SEO
      title="Careers at Zedral — Build AI for Indian Manufacturing"
      description="Join Zedral and build AI-powered operational intelligence for Indian manufacturing. Open roles in Machine Learning, Computer Vision, Backend, and Full-Stack engineering. Based in India."
      keywords="careers at Zedral, manufacturing AI jobs India, computer vision engineer jobs India, ML engineer manufacturing startup, AI startup jobs India, operational intelligence careers, machine learning jobs India, backend engineer manufacturing AI, full stack engineer India startup, tech jobs India 2025"
      url="https://zedral.com/careers"
    />
    <Navbar />

    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(160,40%,10%)] to-[hsl(160,40%,14%)] text-primary-foreground pt-20 pb-28 md:pt-28 md:pb-36 px-6">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2.5 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-10">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/70">Careers at Zedral</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
          Build the intelligence<br />layer for <span className="italic font-light text-primary-foreground/50 tracking-tighter">modern industry</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-lg text-primary-foreground/60 max-w-xl leading-relaxed">
          We are a small, focused team solving a hard problem — giving factories the clarity they have never had before. If you want your work to matter from day one, you are in the right place.
        </motion.p>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 md:py-28 px-6">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          We are not building another dashboard. We are redefining how industry sees itself.
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          Manufacturing and industrial operations generate enormous amounts of activity every single day — and almost none of it is captured in a form that drives decisions. Zedral exists to change that. We turn physical operations into structured, actionable intelligence. The engineers who join us now will shape the foundation of what that means.
        </p>
      </motion.div>
    </section>

    {/* How we work */}
    <section className="py-20 md:py-28 bg-background px-6">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-tight">
          How we work
        </h2>
      </motion.div>
      <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {values.map(({ img, title, desc, maxW }) => (
          <motion.div key={title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-center flex flex-col items-center">
            <div className="h-[200px] flex items-end justify-center mb-6">
              <img src={img} alt={title} style={{ maxWidth: maxW }} className="w-full h-auto max-h-[200px] object-contain mix-blend-multiply" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* Open domains */}
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Open domains</h2>
          <p className="text-muted-foreground text-lg">Where we need you</p>
          <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">
            We are looking for first-hire calibre people in four technical domains. Click any domain to see what we need and what you will build.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {domains.map((d, i) => (
            <motion.div key={d.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              onClick={() => setOpenDomain(openDomain === i ? null : i)}
              className={`group border rounded-xl p-6 hover:shadow-md transition-all cursor-pointer flex items-center justify-between ${
                openDomain === i ? "border-accent bg-card" : "border-border hover:border-accent"
              }`}
            >
              <div className="flex items-center gap-5">
                <img src={d.icon} alt={d.title} className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent-foreground">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.subtitle}</p>
                </div>
              </div>
              <ArrowRight size={16} className={`text-muted-foreground transition-transform ${openDomain === i ? "rotate-90" : ""}`} />
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {openDomain !== null && <RoleDetail domain={domains[openDomain]} onClose={() => setOpenDomain(null)} />}
        </AnimatePresence>

        {/* Open application */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center py-8">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">Don't see an exact fit?</h3>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            We are early stage. If you are exceptional and believe in what we are building, we want to hear from you regardless of title. Send us your background and what you would want to build at Zedral.
          </p>
          <a href="mailto:hello@zedral.com?subject=Open Application" className="inline-flex items-center gap-2 bg-[hsl(160,40%,14%)] text-primary-foreground font-medium px-8 py-3.5 rounded-lg hover:bg-[hsl(160,40%,18%)] transition-colors text-base">
            Send an open application <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Bottom CTA */}
    <section className="py-20 md:py-28 px-6 bg-gradient-to-br from-[hsl(var(--cta-from))] to-[hsl(var(--cta-to))] text-primary-foreground">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          The founding team is small. Your impact will not be.
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">
          Every line of code, every model, every design decision shapes what Zedral becomes. We are looking for people who want to build something that lasts — not just fill a role.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-medium px-8 py-3 rounded-lg hover:bg-primary-foreground/90 transition-colors">
          Get in touch <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>

    <Footer />
  </div>
  );
};

export default Careers;
