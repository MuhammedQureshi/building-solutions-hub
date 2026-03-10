import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern kitchen renovation with exposed brick and copper fixtures"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">
            Construction · Renovation · Design
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-500 text-foreground mb-6">
            Built with
            <br />
            <span className="text-gradient italic">precision.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10">
            New builds, renovations, kitchens, bathrooms, and every trade
            in between — delivered by one team, on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-medium hover:opacity-90 transition-opacity"
            >
              View our work
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-4 border border-foreground/20 text-foreground text-xs uppercase tracking-[0.2em] font-medium hover:border-primary hover:text-primary transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 pt-8 border-t border-foreground/10 grid grid-cols-3 gap-8 max-w-lg">
          <div>
            <p className="font-heading text-3xl md:text-4xl text-foreground">15+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years</p>
          </div>
          <div>
            <p className="font-heading text-3xl md:text-4xl text-foreground">200+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects</p>
          </div>
          <div>
            <p className="font-heading text-3xl md:text-4xl text-foreground">100%</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
