import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import MonitoringToIntelligence from "@/components/MonitoringToIntelligence";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Security from "@/components/Security";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Zedral Operational Intelligence Platform",
  "serviceType": "Manufacturing AI Software",
  "description": "AI-powered shopfloor monitoring using computer vision on existing cameras. Real-time workstation activity tracking, bottleneck detection, and SOP compliance for Indian manufacturing.",
  "provider": {
    "@type": "Organization",
    "name": "Zedral",
    "url": "https://zedral.com",
    "sameAs": ["https://linkedin.com/company/zedral"]
  },
  "areaServed": { "@type": "Country", "name": "India" },
  "url": "https://zedral.com"
};

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Zedral — Operational Efficiency Intelligence for Modern Industry"
        description="Zedral uses AI and computer vision on your existing CCTV cameras to monitor workstations, detect production bottlenecks, and track SOP compliance in real time. No new hardware required."
        keywords="operational efficiency platform, manufacturing intelligence India, AI shopfloor monitoring, production bottleneck detection, SOP compliance tracking, workstation efficiency AI, factory floor AI India, Industry 4.0 manufacturing, computer vision shopfloor, real-time production monitoring India, manufacturing analytics software, shopfloor monitoring system"
        url="https://zedral.com/"
        jsonLd={homepageSchema}
      />
      <Navbar />
      <Hero />
      <ValueProp />
      <MonitoringToIntelligence />
      <HowItWorks />
      <Features />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
