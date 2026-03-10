const services = [
  {
    number: "01",
    title: "New Builds",
    description: "Ground-up residential and commercial construction. Foundations to final finishes.",
  },
  {
    number: "02",
    title: "Refurbishment",
    description: "Structural alterations, extensions, and complete property renovations.",
  },
  {
    number: "03",
    title: "Kitchens",
    description: "Full installations — cabinetry, worktops, tiling, plumbing and electrical.",
  },
  {
    number: "04",
    title: "Bathrooms",
    description: "Wet rooms, suites, waterproofing, underfloor heating. Every detail considered.",
  },
  {
    number: "05",
    title: "Plumbing",
    description: "Central heating, boiler installations, pipe work. Certified to current regulations.",
  },
  {
    number: "06",
    title: "Electrical",
    description: "Consumer units, rewiring, lighting design, smart home integration.",
  },
  {
    number: "07",
    title: "General Building",
    description: "Brickwork, plastering, roofing, flooring, painting and decorating.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              What we do
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground">
              Every trade,
              <br />
              <span className="italic text-gradient">one team.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-muted-foreground text-base leading-relaxed">
              We bring together skilled tradespeople under one managed team.
              No subcontracting surprises. No hidden costs. Just quality work,
              delivered on schedule.
            </p>
          </div>
        </div>

        <div className="space-y-0">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-t border-border py-7 md:py-8 grid grid-cols-12 gap-4 items-baseline hover:border-primary/30 transition-colors cursor-default"
            >
              <span className="col-span-2 md:col-span-1 text-xs text-muted-foreground">
                {service.number}
              </span>
              <h3 className="col-span-10 md:col-span-4 font-heading text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="col-span-12 md:col-span-6 md:col-start-7 text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
