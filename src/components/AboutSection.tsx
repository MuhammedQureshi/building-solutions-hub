import AnimateOnScroll from "./AnimateOnScroll";
import { Shield, Award, FileText, Users, Clock, ThumbsUp } from "lucide-react";

const credentials = [
  { icon: Shield, title: "Fully Insured", description: "Public liability and professional indemnity cover on every job." },
  { icon: Award, title: "Certified Trades", description: "Gas Safe, NICEIC, and Part P registered where required." },
  { icon: FileText, title: "Transparent Pricing", description: "Itemised quotes with no hidden costs. You see every line." },
];

const stats = [
  { icon: Users, value: "50+", label: "Skilled tradespeople" },
  { icon: Clock, value: "98%", label: "On-time completion" },
  { icon: ThumbsUp, value: "4.9★", label: "Average review score" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 px-5 bg-secondary relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <AnimateOnScroll animation="animate-fade-in-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-4 py-2 rounded-full mb-6">
              About us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
              One team for your <span className="text-accent">entire</span> project
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Groundwork & Gauge is a multi-disciplinary construction firm.
              We bring together plumbers, electricians, carpenters, and
              bricklayers under one managed team.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Every project gets a dedicated site manager, a clear schedule,
              and transparent pricing. No subcontracting surprises, no hidden
              costs, no shortcuts.
            </p>

            {/* Mini stats row */}
            <div className="flex gap-8 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <stat.icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl text-foreground leading-none">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="animate-fade-in-right">
            <div className="space-y-5">
              {credentials.map((item, i) => (
                <div
                  key={item.title}
                  className="group flex gap-5 bg-background rounded-2xl p-6 border border-transparent hover:border-accent/20 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} className="text-primary" strokeWidth={1.5} />
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
