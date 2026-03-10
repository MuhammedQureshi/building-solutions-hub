const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-heading text-2xl text-foreground tracking-tight">
            G<span className="text-gradient">&</span>G
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
            Groundwork & Gauge
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <a href="#services" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#projects" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            Work
          </a>
          <a href="#about" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Groundwork & Gauge
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
