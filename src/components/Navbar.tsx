import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/Zicji_logo-2.png";

const navLinks = ["About", "Capabilities", "Integration", "Why Zedral"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (hash: string) => {
    setOpen(false);
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#" + hash);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Zedral logo" className="h-16" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const hash = link.toLowerCase().replace(/ /g, "-");
            return (
              <button key={link} onClick={() => handleNavClick(hash)} className="text-sm text-nav-foreground/70 hover:text-nav-foreground transition-colors">
                {link}
              </button>
            );
          })}
        </div>

        <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 text-sm font-medium text-nav-foreground hover:text-nav-foreground/80 transition-colors">
          Get in Touch <ArrowRight size={16} />
        </Link>

        <button className="lg:hidden text-nav-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className="lg:hidden bg-nav overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px" }}
      >
        <div className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => {
            const hash = link.toLowerCase().replace(/ /g, "-");
            return (
              <button key={link} onClick={() => handleNavClick(hash)} className="text-sm text-nav-foreground/70 text-left">
                {link}
              </button>
            );
          })}
          <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-sm font-medium text-nav-foreground">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
