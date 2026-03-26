import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/Zicji_logo-2.png";

const legalLinks = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Cookie Policy", to: "/cookies" },
];

const footerColumns = [
  {
    title: "Our Company",
    links: [
      { label: "About", type: "scroll" as const },
      { label: "Careers", type: "route" as const, to: "/careers" },
      { label: "Contact Us", type: "route" as const, to: "/contact" },
    ],
  },
  {
    title: "Zedral Resources",
    links: [
      { label: "Capabilities", type: "scroll" as const },
      { label: "Integration", type: "scroll" as const },
      { label: "Why Zedral", type: "scroll" as const },
    ],
  },
  {
    title: "Zedral Features",
    links: [
      { label: "News & Blogs", type: "route" as const, to: "/news" },
      { label: "Help Center", type: "route" as const, to: "/help" },
    ],
  },
];

const Footer = () => {
  const handleNavClick = (label: string) => {
    const hash = label.toLowerCase().replace(/ /g, "-");
    if (window.location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#" + hash;
    }
  };

  return (
    <footer className="bg-secondary border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top: 4-column grid */}
        <div className="mb-14">
          {/* Logo */}
          <img src={logo} alt="Zedral logo" className="h-24 invert mb-8" />

          {/* 4-column grid aligned */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Zedral column */}
          <div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Zedral is an advanced operational intelligence platform designed to improve efficiency across manufacturing and industrial environments through structured visibility and data-driven optimization.
            </p>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-base font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.type === "route" ? (
                      <Link
                        to={link.to!}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.label)}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {legalLinks.map(({ label, to }) => (
              <Link key={to} to={to} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/zedral"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zedral on LinkedIn"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.instagram.com/zedral.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zedral on Instagram"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://twitter.com/ZedralHQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zedral on X (Twitter)"
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <Twitter size={14} />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            Copyright © {new Date().getFullYear()} Zedral. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
