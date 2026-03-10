import heroImage from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20">
      <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt="Modern kitchen renovation with exposed brick and copper fixtures"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-6 pb-12 w-full">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
              We build it right.
            </h1>
            <p className="font-mono text-sm md:text-base text-primary-foreground/80 max-w-lg">
              New builds, refurbishments, kitchens, bathrooms, plumbing,
              electrical — every trade under one roof, delivered with precision.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
