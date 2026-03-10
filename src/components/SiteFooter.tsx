const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-heading text-lg font-bold text-foreground">
            Groundwork<span className="text-primary">&</span>Gauge
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Multi-disciplinary construction
          </p>
        </div>
        <div className="font-mono text-xs text-muted-foreground space-y-1 md:text-right">
          <p>020 7946 0958</p>
          <p>info@groundworkandgauge.co.uk</p>
          <p className="mt-2">© {new Date().getFullYear()} Groundwork & Gauge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
