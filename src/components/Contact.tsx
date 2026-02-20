import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <section id="contact">
      {/* Scrolling "Start A Project" banner */}
      <div className="py-16 md:py-24 overflow-hidden border-t border-foreground/10 bg-foreground text-primary-foreground">
        <div className="flex animate-scroll-text whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-[10vw] md:text-[8vw] font-medium tracking-[-0.03em] mx-8 shrink-0">
              · Start A Project
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="section-padding py-16 md:py-24 bg-foreground text-primary-foreground">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Location</p>
            <p className="text-sm">Atelier Creative Studio</p>
            <p className="text-sm text-primary-foreground/60">Los Angeles, CA</p>
            <p className="text-sm text-primary-foreground/60">New York, NY</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Contact</p>
            <a href="mailto:hello@atelier.studio" className="text-sm hover:text-primary-foreground/70 transition-colors">
              hello@atelier.studio
            </a>
            <p className="text-sm text-primary-foreground/60 mt-1">+1 (323) 555-0190</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Social</p>
            <div className="flex gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="editorial-divider border-primary-foreground/10 mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2024 Fragment Studio. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Built with intent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
