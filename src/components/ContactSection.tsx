import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { Send, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClasses =
    "w-full bg-background border border-border px-5 py-3.5 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all duration-300";

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "020 7946 0958" },
    { icon: Mail, label: "Email", value: "info@groundworkandgauge.co.uk" },
    { icon: MapPin, label: "Coverage", value: "London, Surrey, Kent & surrounds" },
    { icon: Clock, label: "Hours", value: "Mon–Fri 07:00–18:00 · Sat 08:00–13:00" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-5">
            Get in touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Let's discuss your project
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a no-obligation quote.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <AnimateOnScroll className="lg:col-span-3" animation="animate-fade-in-left">
            <form
              onSubmit={handleSubmit}
              className="bg-secondary rounded-3xl p-7 md:p-10 space-y-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.04)]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} placeholder="Your phone number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Project details</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Tell us about your project — type of work, location, rough timeline…" />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-2xl shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.4)] hover:shadow-[0_14px_40px_-4px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send size={15} />
                Send enquiry
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </AnimateOnScroll>

          <AnimateOnScroll className="lg:col-span-2" animation="animate-fade-in-right">
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-foreground">{item.value}</p>
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
