import plumbingImg from "@/assets/plumbing-detail.jpg";
import electricalImg from "@/assets/electrical-detail.jpg";

const services = [
  {
    title: "New Builds",
    description:
      "Ground-up residential and commercial construction. From foundations to final finishes, we manage every phase of the build with rigorous planning and skilled tradespeople.",
    image: null,
  },
  {
    title: "Refurbishment",
    description:
      "Structural alterations, extensions, and complete property renovations. We strip back to the bones and rebuild with care, preserving character where it matters.",
    image: null,
  },
  {
    title: "Kitchens",
    description:
      "Full kitchen installations including cabinetry, worktops, tiling, plumbing, and electrical. Designed around how you actually cook and live.",
    image: null,
  },
  {
    title: "Bathrooms",
    description:
      "From wet rooms to traditional suites. Waterproofing, plumbing, tiling, underfloor heating — every detail considered for longevity and comfort.",
    image: null,
  },
  {
    title: "Plumbing",
    description:
      "Central heating systems, boiler installations, pipe work, and radiators. Clean, tested, and certified to current regulations.",
    image: plumbingImg,
    imageAlt: "Precision copper pipe soldering joint",
  },
  {
    title: "Electrical",
    description:
      "Consumer units, rewiring, lighting design, and smart home integration. All work carried out by qualified electricians and certified on completion.",
    image: electricalImg,
    imageAlt: "Professionally wired electrical junction box",
  },
  {
    title: "General Building",
    description:
      "Brickwork, plastering, roofing, flooring, painting and decorating. Whatever the job requires, we have the trade skills in-house.",
    image: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Services
        </h2>
        <p className="font-mono text-sm text-muted-foreground mb-16">
          // Every trade, one team.
        </p>

        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.title} className="border-t border-border pt-8">
              <h3 className="font-heading text-xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground max-w-2xl leading-relaxed">
                {service.description}
              </p>
              {service.image && (
                <div className="mt-6 max-w-sm">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <p className="font-mono text-xs text-muted-foreground mt-2">
                    {service.imageAlt}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
