const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-8 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-foreground">Groundwork & Gauge</p>
        <div className="flex items-center gap-6">
          <a href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Projects</a>
          <a href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Groundwork & Gauge
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
