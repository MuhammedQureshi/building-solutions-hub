import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your enquiry. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Contact
        </h2>
        <p className="font-mono text-sm text-muted-foreground mb-12">
          // Tell us about your project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block font-mono text-xs text-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-foreground mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-foreground mb-1">
                Project details
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-card border border-border px-4 py-3 font-mono text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-opacity"
            >
              Send enquiry
            </button>
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Phone
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                020 7946 0958
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Email
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                info@groundworkandgauge.co.uk
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Coverage
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                London, Surrey, Kent & surrounding areas
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Hours
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                Mon–Fri: 07:00–18:00<br />
                Sat: 08:00–13:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
