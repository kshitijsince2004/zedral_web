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
  "description": "Operational intelligence platform for manufacturing and industrial environments. Real-time production activity tracking, line performance analysis, and process compliance for Indian manufacturing.",
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
        title="Zedral — Operational Efficiency Intelligence for Modern Industry"
        description="Zedral transforms raw operational data from existing industrial infrastructure into actionable insights. Real-time production visibility, line performance analysis, and process compliance for Indian manufacturing."
        keywords="operational efficiency platform, manufacturing intelligence India, production performance analysis, line efficiency tracking, process compliance, factory floor intelligence India, Industry 4.0 manufacturing, real-time production monitoring India, manufacturing analytics software, operational intelligence system"
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
