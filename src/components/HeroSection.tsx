import heroImage from "@/assets/hero-kitchen.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="animate-fade-in">
            <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-6">
              Trusted builders in London & South East
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-5 leading-tight">
              Quality building work you can rely on
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-md">
              From new builds to bathroom refits — we handle every trade in-house so your project runs smoothly, on time, and on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Get a free quote
                <ArrowRight size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors duration-200"
              >
                View our work
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                15+ years
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                200+ projects
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Fully insured
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern kitchen renovation with exposed brick and copper fixtures"
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                loading="eager"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-md">
                <p className="text-2xl font-heading">100%</p>
                <p className="text-xs opacity-80">Satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
