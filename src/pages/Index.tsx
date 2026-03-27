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
  "serviceType": "Manufacturing AI — Operational Intelligence",
  "description": "Zedral is a Manufacturing AI platform delivering Operational Intelligence, Bottleneck Detection, OEE improvement, and Compliance Management for Indian production floors. No new hardware required.",
  "provider": {
    "@type": "Organization",
    "name": "Zedral",
    "url": "https://zedral.com",
    "sameAs": [
      "https://www.linkedin.com/company/zedral",
      "https://www.instagram.com/zedral.in/",
      "https://twitter.com/ZedralHQ"
    ]
  },
  "areaServed": { "@type": "Country", "name": "India" },
  "url": "https://zedral.com"
};

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Zedral: Operational Intelligence for Indian Manufacturing"
        description="Zedral delivers Operational Intelligence for Indian manufacturing. Improve OEE, detect bottlenecks, ensure Compliance Management — no new hardware."
        keywords="Operational Intelligence India, Manufacturing AI platform, Production Efficiency software, Bottleneck Detection manufacturing, Industry 4.0 India, OEE improvement, Compliance Management manufacturing, factory floor intelligence India, manufacturing analytics software, production performance analysis"
        url="https://zedral.com"
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
