import AnimateOnScroll from "./AnimateOnScroll";
import { Shield, Award, FileText } from "lucide-react";

const credentials = [
  { icon: Shield, title: "Fully Insured", description: "Public liability and professional indemnity cover on every job." },
  { icon: Award, title: "Certified Trades", description: "Gas Safe, NICEIC, and Part P registered where required." },
  { icon: FileText, title: "Transparent Pricing", description: "Itemised quotes with no hidden costs. You see every line." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-5 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              About us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              One team for your entire project
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Groundwork & Gauge is a multi-disciplinary construction firm.
              We bring together plumbers, electricians, carpenters, and
              bricklayers under one managed team.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every project gets a dedicated site manager, a clear schedule,
              and transparent pricing. No subcontracting surprises, no hidden
              costs, no shortcuts.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right">
            <div className="space-y-5">
              {credentials.map((item) => (
                <div
                  key={item.title}
                  className="group flex gap-5 bg-background rounded-2xl p-6 border border-transparent hover:border-border hover:shadow-[0_15px_40px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/[0.07] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
