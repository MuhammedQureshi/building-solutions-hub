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
    { label: "How We Work", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <a href="#" className="font-heading text-2xl text-foreground tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>Groundwork</span>
          <span className={`${scrolled ? "text-accent" : "text-accent"}`}> & </span>
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>Gauge</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`story-link text-sm transition-colors duration-200 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              <span>{item.label}</span>
            </a>
          ))}
          <a
            href="tel:02079460958"
            className="flex items-center gap-2 text-sm font-semibold text-accent-foreground bg-accent px-6 py-3 rounded-xl shadow-[0_4px_15px_-3px_hsl(var(--accent)/0.3)] hover:shadow-[0_8px_25px_-3px_hsl(var(--accent)/0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone size={14} />
            Call us
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            scrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-5 py-8 space-y-5 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:02079460958"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground bg-accent px-6 py-3 rounded-xl"
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
