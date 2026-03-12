import AnimateOnScroll from "./AnimateOnScroll";
import { MessageSquare, Ruler, HardHat, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Initial Consultation",
    description: "We visit your site, listen to your vision, and discuss scope, budget, and timelines. No pressure, no commitment.",
  },
  {
    icon: Ruler,
    step: "02",
    title: "Detailed Quote",
    description: "You receive an itemised, transparent quote within 5 working days. Every line explained, no hidden costs.",
  },
  {
    icon: HardHat,
    step: "03",
    title: "Build Phase",
    description: "Your dedicated site manager coordinates all trades. Weekly updates, clean site, minimal disruption.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Handover & Aftercare",
    description: "Final walkthrough, snagging resolved, and a 12-month workmanship guarantee on everything we do.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-36 px-5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />
      
      <div className="relative max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-5">
            How we work
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-5">
            From first call to finished project
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A clear, structured process so you always know what's happening and what comes next.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {steps.map((step, i) => (
            <AnimateOnScroll key={step.step} animation="animate-slide-up" delay={i * 120}>
              <div className="relative text-center group">
                {/* Step number + icon circle */}
                <div className="relative mx-auto w-32 h-32 mb-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />
                  <div className="absolute inset-3 rounded-full bg-background flex items-center justify-center shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)]">
                    <step.icon size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-heading text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
