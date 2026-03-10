import AnimateOnScroll from "./AnimateOnScroll";
import { Home, Hammer, ChefHat, Bath, Wrench, Zap, Paintbrush } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "New Builds",
    description: "Ground-up residential and commercial construction, from foundations to final finishes.",
  },
  {
    icon: Hammer,
    title: "Refurbishment",
    description: "Structural alterations, extensions, and complete property renovations.",
  },
  {
    icon: ChefHat,
    title: "Kitchens",
    description: "Full installations including cabinetry, worktops, tiling, plumbing and electrical.",
  },
  {
    icon: Bath,
    title: "Bathrooms",
    description: "Wet rooms, suites, waterproofing, underfloor heating — every detail considered.",
  },
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Central heating, boiler installations, and pipework. Certified to current regulations.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Consumer units, rewiring, lighting design, and smart home integration.",
  },
  {
    icon: Paintbrush,
    title: "General Building",
    description: "Brickwork, plastering, roofing, flooring, painting and decorating.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-5 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-4">
            Our services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
            Everything your project needs
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            All trades under one roof. One team, one point of contact, one standard of quality.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimateOnScroll
              key={service.title}
              animation="animate-slide-up"
              delay={i * 80}
            >
              <div className="bg-background rounded-xl p-6 h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
