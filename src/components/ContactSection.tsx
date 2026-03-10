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
    alert("Thank you for your enquiry. We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClasses =
    "w-full bg-transparent border-b border-foreground/15 px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-10 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Get in touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              Let's build
              <br />
              <span className="italic text-gradient">together.</span>
            </h2>

            <div className="space-y-6 mt-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
                <p className="text-foreground">020 7946 0958</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                <p className="text-foreground">info@groundworkandgauge.co.uk</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Coverage</p>
                <p className="text-foreground">London, Surrey, Kent & surrounding areas</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Hours</p>
                <p className="text-foreground">
                  Mon–Fri: 07:00–18:00
                  <br />
                  Sat: 08:00–13:00
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="px-10 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
