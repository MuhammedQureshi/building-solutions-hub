import AnimateOnScroll from "./AnimateOnScroll";
import { Shield, Award, FileText } from "lucide-react";

const credentials = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Public liability and professional indemnity cover on every job.",
  },
  {
    icon: Award,
    title: "Certified Trades",
    description: "Gas Safe, NICEIC, and Part P registered where required.",
  },
  {
    icon: FileText,
    title: "Transparent Pricing",
    description: "Itemised quotes with no hidden costs. You see every line.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-5 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1.5 rounded-full mb-4">
              About us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-5">
              One team for your entire project
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Groundwork & Gauge is a multi-disciplinary construction firm.
              We bring together plumbers, electricians, carpenters, and
              bricklayers under one managed team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every project gets a dedicated site manager, a clear schedule,
              and transparent pricing. No subcontracting surprises, no hidden
              costs, no shortcuts.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right">
            <div className="space-y-4">
              {credentials.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-background rounded-xl p-5 hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base text-foreground mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
