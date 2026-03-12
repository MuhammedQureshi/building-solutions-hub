import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground/70 pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-heading text-2xl text-primary-foreground mb-4">
              Groundwork<span className="text-accent"> & </span>Gauge
            </p>
            <p className="text-sm leading-relaxed max-w-sm mb-6">
              Multi-trade construction firm serving London, Surrey, Kent and the South East. All trades in-house, one team, one standard.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              Get a free quote
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm text-primary-foreground uppercase tracking-widest mb-5">Navigate</h4>
            <div className="space-y-3">
              {[
                { label: "Services", href: "#services" },
                { label: "How We Work", href: "#process" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm text-primary-foreground uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:02079460958" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone size={14} /> 020 7946 0958
              </a>
              <a href="mailto:info@groundworkandgauge.co.uk" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={14} /> info@groundworkandgauge.co.uk
              </a>
              <p className="flex items-center gap-2">
                <MapPin size={14} /> London & South East
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {currentYear} Groundwork & Gauge. All rights reserved.</p>
          <p className="text-xs text-primary-foreground/40">
            Built with quality. Just like your project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
