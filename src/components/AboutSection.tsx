const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About
        </h2>
        <p className="font-mono text-sm text-muted-foreground mb-12">
          // The team behind the work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Groundwork & Gauge is a multi-disciplinary construction firm
              built on the principle that good work speaks for itself. We
              bring together skilled tradespeople — plumbers, electricians,
              carpenters, bricklayers — under one managed team.
            </p>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Every project gets a dedicated site manager, a clear schedule,
              and transparent pricing. No subcontracting surprises, no
              hidden costs, no shortcuts.
            </p>
          </div>

          <div className="space-y-6 border-l border-border pl-8">
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Fully Insured
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                Public liability and professional indemnity cover on every job.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Certified Trades
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                Gas Safe, NICEIC, and Part P registered where required.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold mb-1">
                Transparent Pricing
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                Itemised quotes with no hidden costs. You see every line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
