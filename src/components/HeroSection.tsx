import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-5 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="animate-fade-in">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-8">
            Trusted builders in London & South East
          </span>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.05] tracking-tight">
            Quality building work you can{" "}
            <span className="relative inline-block">
              rely on
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 rounded-full -z-10" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            From new builds to bathroom refits — we handle every trade in-house so your project runs smoothly, on time, and on budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-2xl shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.4)] hover:shadow-[0_14px_40px_-4px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a free quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-border text-foreground text-sm font-semibold rounded-2xl hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
            >
              View our work
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-16 flex items-center justify-center gap-12 text-sm text-muted-foreground">
            {[
              { label: "15+ years", value: "Experience" },
              { label: "200+", value: "Projects" },
              { label: "100%", value: "Insured" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-heading text-3xl text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
