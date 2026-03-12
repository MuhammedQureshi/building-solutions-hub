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
    <section id="services" className="py-24 md:py-36 px-5 bg-secondary relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\'%3E%3Cpath d=\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h4v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2H22v-2z\'/%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-5">
            Our services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            Everything your project needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            All trades under one roof. One team, one point of contact, one standard of quality.
          </p>
        </AnimateOnScroll>

        {/* Featured services — first 4 in a 2x2 grid with larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 4).map((service, i) => (
            <AnimateOnScroll key={service.title} animation="animate-slide-up" delay={i * 80}>
              <div className="group bg-background rounded-3xl overflow-hidden h-full border border-transparent hover:border-accent/20 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="overflow-hidden h-52">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <service.icon size={20} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Remaining services — 3 in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.slice(4).map((service, i) => (
            <AnimateOnScroll key={service.title} animation="animate-slide-up" delay={(i + 4) * 80}>
              <div className="group bg-background rounded-3xl overflow-hidden h-full border border-transparent hover:border-accent/20 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="overflow-hidden h-40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <service.icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-lg text-foreground">
                      {service.title}
                    </h3>
                  </div>
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
