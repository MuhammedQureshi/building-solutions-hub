import AnimateOnScroll from "./AnimateOnScroll";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James T.",
    location: "Dulwich, SE London",
    project: "Full house renovation",
    quote: "They turned our tired 1930s semi into a modern family home. Every trade was in-house, the site was always tidy, and the finish is exceptional. We couldn't recommend them highly enough.",
    rating: 5,
  },
  {
    name: "Mark W.",
    location: "Guildford, Surrey",
    project: "Kitchen & bathroom",
    quote: "From the detailed quote to the final snagging list, everything was handled professionally. The kitchen is stunning and the bathroom feels like a boutique hotel. Brilliant team.",
    rating: 5,
  },
  {
    name: "Rachel & Tom P.",
    location: "Bromley, Kent",
    project: "Loft conversion & rewire",
    quote: "We were nervous about a loft conversion but the team made it painless. The project manager kept us updated every step. Finished on time and the quality is outstanding.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-36 px-5 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent bg-accent/20 px-4 py-2 rounded-full mb-5">
            Client reviews
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-5">
            What our clients say
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-lg mx-auto">
            Don't just take our word for it — hear from homeowners who trusted us with their projects.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} animation="animate-slide-up" delay={i * 100}>
              <div className="relative bg-primary-foreground/[0.08] backdrop-blur-sm rounded-3xl p-8 h-full border border-primary-foreground/10 hover:border-primary-foreground/20 hover:bg-primary-foreground/[0.12] transition-all duration-500 group">
                {/* Quote icon */}
                <Quote size={36} className="text-accent/40 mb-5 group-hover:text-accent/60 transition-colors duration-300" strokeWidth={1.5} />
                
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                  "{t.quote}"
                </blockquote>

                <div className="border-t border-primary-foreground/10 pt-5">
                  <p className="font-heading text-lg text-primary-foreground">{t.name}</p>
                  <p className="text-xs text-primary-foreground/50 mt-1">{t.project} · {t.location}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
