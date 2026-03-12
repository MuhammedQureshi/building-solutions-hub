import AnimateOnScroll from "./AnimateOnScroll";
import type { LucideIcon } from "lucide-react";
import { Home, Hammer, ChefHat, Bath, Wrench, Zap, Paintbrush } from "lucide-react";

import serviceNewbuild from "@/assets/service-newbuild.jpg";
import serviceRefurbishment from "@/assets/service-refurbishment.jpg";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";
import servicePlumbing from "@/assets/service-plumbing.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceBuilding from "@/assets/service-building.jpg";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  { icon: Home, title: "New Builds", description: "Ground-up residential and commercial construction, from foundations to final finishes.", image: serviceNewbuild },
  { icon: Hammer, title: "Refurbishment", description: "Structural alterations, extensions, and complete property renovations.", image: serviceRefurbishment },
  { icon: ChefHat, title: "Kitchens", description: "Full installations including cabinetry, worktops, tiling, plumbing and electrical.", image: serviceKitchen },
  { icon: Bath, title: "Bathrooms", description: "Wet rooms, suites, waterproofing, underfloor heating — every detail considered.", image: serviceBathroom },
  { icon: Wrench, title: "Plumbing", description: "Central heating, boiler installations, and pipework. Certified to current regulations.", image: servicePlumbing },
  { icon: Zap, title: "Electrical", description: "Consumer units, rewiring, lighting design, and smart home integration.", image: serviceElectrical },
  { icon: Paintbrush, title: "General Building", description: "Brickwork, plastering, roofing, flooring, painting and decorating.", image: serviceBuilding },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-5 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-5">
            Our services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Everything your project needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            All trades under one roof. One team, one point of contact, one standard of quality.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} animation="animate-slide-up" delay={i * 80}>
              <div className="group bg-background rounded-2xl overflow-hidden h-full border border-transparent hover:border-border hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                <div className="overflow-hidden h-44">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="w-10 h-10 rounded-xl bg-primary/[0.07] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/[0.12] transition-all duration-300">
                    <service.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
