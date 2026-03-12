import AnimateOnScroll from "./AnimateOnScroll";
import { ArrowRight, Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 md:py-28 px-5">
      <AnimateOnScroll>
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent via-accent to-accent/90 p-10 md:p-16 text-center shadow-[0_30px_80px_-20px_hsl(var(--accent)/0.4)]">
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-accent-foreground/10 rounded-full" />
          <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-accent-foreground/10 rounded-full" />
          
          <div className="relative">
            <h2 className="font-heading text-3xl md:text-5xl text-accent-foreground mb-4">
              Ready to start your project?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-10 max-w-md mx-auto">
              Get a free, no-obligation quote. We'll visit your site and have a detailed estimate to you within 5 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-2xl shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Request a quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:02079460958"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-foreground/20 text-accent-foreground text-sm font-semibold rounded-2xl hover:bg-accent-foreground/30 backdrop-blur-sm transition-all duration-300"
              >
                <Phone size={15} />
                020 7946 0958
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default CTABanner;
