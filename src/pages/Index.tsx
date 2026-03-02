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

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <SEO 
        url="https://zedral.com/"
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
