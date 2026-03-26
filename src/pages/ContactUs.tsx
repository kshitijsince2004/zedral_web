import { useState } from "react";
import { z } from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { trackContactFormSubmit } from "@/utils/analytics";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be under 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be under 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbwxpCFhC59NhSjh-_QCBk0QwEqTdX_Vtfwvi9Jq4qK-Y0C_oeQzpMLsIdSKrfvTDC9R/exec", {
        method: "POST",
        body: JSON.stringify({
          name: result.data.name,
          email: result.data.email,
          subject: result.data.subject,
          message: result.data.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        toast({ title: "Message sent", description: "We'll get back to you within 1–2 business days." });
        trackContactFormSubmit(true); // Track successful submission
      } else {
        toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
        trackContactFormSubmit(false); // Track failed submission
      }
    } catch {
      toast({ title: "Network error", description: "Please check your connection and try again.", variant: "destructive" });
      trackContactFormSubmit(false); // Track error
    } finally {
      setSubmitting(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zedral.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://zedral.com/contact" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Zedral — Request a Demo or Get Support"
        description="Get in touch with Zedral. Request a free product demo, ask a technical question, or get support for your manufacturing intelligence platform. We respond within 1 business day."
        url="https://zedral.com/contact"
        keywords="contact Zedral, request Zedral demo, manufacturing AI demo India, operational efficiency software contact, shopfloor monitoring demo, get in touch Zedral, Zedral support"
        jsonLd={contactSchema}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs tracking-[0.15em] uppercase text-primary-foreground/50 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/40" />
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-[1.15] tracking-tight mb-6">
            Let's talk about<br />
            <span className="italic text-primary-foreground/45">your operation</span>
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/50 max-w-xl leading-relaxed">
            Whether you want to see Zedral in action, have a technical question, or need support — we are here. Every message goes to a real person on our team.
          </p>
        </div>
      </section>

      <main className="max-w-xl mx-auto px-6 py-16 md:py-20">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-foreground text-sm font-medium">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                maxLength={100}
                className={errors.name ? "border-destructive" : ""}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-foreground text-sm font-medium">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@company.com"
                maxLength={255}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="subject" className="text-foreground text-sm font-medium">Subject</Label>
            <Input
              id="subject"
              value={form.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              placeholder="How can we help?"
              maxLength={200}
              className={errors.subject ? "border-destructive" : ""}
            />
            {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-foreground text-sm font-medium">Message</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us more about your enquiry…"
              rows={5}
              maxLength={2000}
              className={errors.message ? "border-destructive" : ""}
            />
            <div className="flex justify-between">
              {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
              <span className="text-xs text-muted-foreground">{form.message.length}/2000</span>
            </div>
          </div>

          <Button type="submit" disabled={submitting} className="w-full sm:w-auto px-8">
            {submitting ? "Sending…" : "Send Message"}
          </Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
