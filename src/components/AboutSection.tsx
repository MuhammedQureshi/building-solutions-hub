import plumbingImg from "@/assets/plumbing-detail.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Left */}
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              About us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
              The work
              <br />
              <span className="italic text-gradient">speaks.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Groundwork & Gauge is a multi-disciplinary construction firm.
              We bring together plumbers, electricians, carpenters, and
              bricklayers under one managed team.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Every project gets a dedicated site manager, a clear schedule,
              and transparent pricing. No surprises, no shortcuts.
            </p>
          </div>

          {/* Right */}
          <div className="md:col-span-6 md:col-start-7 space-y-8">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={plumbingImg}
                alt="Precision copper pipe work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-t border-primary pt-4">
                <p className="font-heading text-2xl text-foreground mb-1">Insured</p>
                <p className="text-xs text-muted-foreground">Public liability & professional indemnity</p>
              </div>
              <div className="border-t border-primary pt-4">
                <p className="font-heading text-2xl text-foreground mb-1">Certified</p>
                <p className="text-xs text-muted-foreground">Gas Safe, NICEIC & Part P registered</p>
              </div>
              <div className="border-t border-primary pt-4">
                <p className="font-heading text-2xl text-foreground mb-1">Transparent</p>
                <p className="text-xs text-muted-foreground">Itemised quotes, no hidden costs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
