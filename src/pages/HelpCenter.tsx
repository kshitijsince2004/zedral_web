import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Search, Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    title: "Getting Started",
    faqs: [
      {
        q: "How do I set up Zedral?",
        a: "Connect your existing infrastructure, let our system calibrate for 3 days, then access your live dashboard. Our onboarding team guides you through every step. Email hello@zedral.com to begin.",
      },
      {
        q: "How long does system calibration take?",
        a: "Approximately 3 working days from the moment your data streams are connected. No changes to your operations are needed during this period.",
      },
      {
        q: "What infrastructure does Zedral support?",
        a: "Zedral integrates with standard industrial infrastructure and manufacturing execution systems. Send us your setup details and we'll confirm compatibility.",
      },
    ],
  },
  {
    title: "Dashboard & Reports",
    faqs: [
      {
        q: "What does the dashboard show?",
        a: "Live line efficiency, operator output, constraint detection, process compliance rate, production count, and shift-level comparisons — all updated in real time.",
      },
      {
        q: "How do automated reports work?",
        a: "Zedral sends daily production summaries via WhatsApp or email at the end of each shift. Configure recipients and frequency under Settings → Reports.",
      },
      {
        q: "Can I export data?",
        a: "Yes. Export any metric as CSV or Excel from any dashboard view using the Export button.",
      },
    ],
  },
  {
    title: "Data & Privacy",
    faqs: [
      {
        q: "Does Zedral store raw operational data?",
        a: "No. Data streams are processed in real time and deleted within 10 minutes. Only structured operational metrics are retained — never raw feeds.",
      },
      {
        q: "Does Zedral identify individual workers?",
        a: "No. Zedral focuses on station-level activity only. We do not use identification or track individuals by identity.",
      },
      {
        q: "We changed our process — do we need to recalibrate?",
        a: "Minor changes adapt automatically. For major workflow or layout changes, notify us at hello@zedral.com and we will run a recalibration cycle at no extra cost.",
      },
    ],
  },
  {
    title: "Billing & Account",
    faqs: [
      {
        q: "What plans are available?",
        a: "Monthly and annual subscriptions, priced by number of lines. Annual plans include a discount. Contact hello@zedral.com for a quote.",
      },
      {
        q: "How do I cancel?",
        a: "Email hello@zedral.com or go to Settings → Billing → Cancel. You keep full access until the end of your billing period. No penalties.",
      },
      {
        q: "What happens to my data if I leave?",
        a: "Your data is retained for 30 days after account closure so you can request an export. After that, it is permanently deleted.",
      },
    ],
  },
];

const quickFilters = ["Setup", "Dashboard", "Reports", "Billing", "Data & privacy", "Calibration"];

const helpSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I set up Zedral?", "acceptedAnswer": { "@type": "Answer", "text": "Connect your existing infrastructure, let our system calibrate for 3 days, then access your live dashboard. Email hello@zedral.com to begin." } },
    { "@type": "Question", "name": "What infrastructure does Zedral support?", "acceptedAnswer": { "@type": "Answer", "text": "Zedral integrates with standard industrial infrastructure and manufacturing execution systems. Send us your setup details and we'll confirm compatibility." } },
    { "@type": "Question", "name": "Does Zedral store raw operational data?", "acceptedAnswer": { "@type": "Answer", "text": "No. Data streams are processed in real time and deleted within 10 minutes. Only structured operational metrics are retained." } },
    { "@type": "Question", "name": "How do automated reports work?", "acceptedAnswer": { "@type": "Answer", "text": "Zedral sends daily production summaries via WhatsApp or email at the end of each shift. Configure recipients under Settings → Reports." } }
  ]
};

const HelpCenter = () => {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const term = search.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) => f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [search]);

  return (
    <div className="bg-background min-h-screen">
      <SEO
        title="Help Center: Zedral Support & FAQs"
        description="Find answers to common questions about setting up Zedral, using the dashboard, understanding your data, and managing your account. Support for Indian manufacturing intelligence platform."
        keywords="Zedral help center, Zedral support, manufacturing intelligence FAQ, production platform setup, Zedral dashboard help, operational intelligence support"
        url="https://zedral.com/help"
        jsonLd={[helpSchema, {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zedral.com" },
          { "@type": "ListItem", "position": 2, "name": "Help Center", "item": "https://zedral.com/help" }
        ]
      }]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[hsl(160,40%,10%)] to-[hsl(160,40%,14%)] text-primary-foreground pt-20 pb-16 md:pt-28 md:pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2.5 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/70">Help Center</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4"
          >
            How can we help?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/60 text-base md:text-lg max-w-xl mx-auto mb-10"
          >
            Find answers, guides, and everything you need to get the most out of Zedral.
          </motion.p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <div className="flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/15 rounded-full px-5 py-3">
              <Search size={18} className="text-primary-foreground/40 flex-shrink-0" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search: e.g. camera setup, reports, billing..."
                className="flex-1 bg-transparent text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none"
              />
            </div>
          </motion.div>

          {/* Quick filters */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex flex-wrap justify-center gap-2"
          >
            {quickFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSearch(filter)}
                className="px-4 py-1.5 text-xs font-medium rounded-full border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {filteredCategories.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No results found. Try a different search term.</p>
          )}
          {filteredCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.05 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-4">{cat.title}</h2>
              <Accordion type="single" collapsible className="w-full">
                {cat.faqs.map((faq, fi) => (
                  <AccordionItem key={fi} value={`${ci}-${fi}`}>
                    <AccordionTrigger className="text-left text-foreground font-medium text-sm">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still need help */}
      <section className="pb-20 md:pb-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-2xl bg-secondary border border-border p-8 text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">Still Need Help?</h3>
          <p className="text-sm text-muted-foreground mb-5">
            Our team is here to help. Reach out and we'll get back to you within 1 business day.
          </p>
          <a
            href="mailto:hello@zedral.com"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-accent text-accent-foreground hover:brightness-110 transition-all"
          >
            <Mail size={16} /> hello@zedral.com
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
