import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="font-heading text-xl text-foreground">
          Groundwork & Gauge
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="tel:02079460958"
            className="flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Phone size={14} />
            Call us
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-5 py-6 space-y-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:02079460958"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-5 py-2.5 rounded-lg"
          >
            <Phone size={14} />
            Call us
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
