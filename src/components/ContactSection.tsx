import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClasses =
    "w-full bg-background border border-border px-4 py-3 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200";

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "020 7946 0958" },
    { icon: Mail, label: "Email", value: "info@groundworkandgauge.co.uk" },
    { icon: MapPin, label: "Coverage", value: "London, Surrey, Kent & surrounds" },
    { icon: Clock, label: "Hours", value: "Mon–Fri 07:00–18:00 · Sat 08:00–13:00" },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-4">
            Get in touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
            Let's discuss your project
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a no-obligation quote.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <AnimateOnScroll className="lg:col-span-3" animation="animate-fade-in-left">
            <form
              onSubmit={handleSubmit}
              className="bg-secondary rounded-2xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClasses}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Project details
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your project — type of work, location, rough timeline…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={15} />
                Send enquiry
              </button>
            </form>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-2" animation="animate-fade-in-right">
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
