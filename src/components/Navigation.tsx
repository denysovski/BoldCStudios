import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [time, setTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Hero", href: "#hero" },
    { label: "Clients", href: "#clients" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Work", href: "#work" },
    { label: "Publications", href: "#publications" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 section-padding flex items-center justify-between h-16 md:h-20"
      >
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-background/95 backdrop-blur-sm"
        />
        <a href="#home" className="relative z-10 text-sm font-semibold tracking-[-0.01em] text-foreground">
          ●● Fragment
        </a>
        <span className="relative z-10 hidden md:block text-sm text-muted-foreground">
          LA.CA {time}
        </span>
        <div className="relative z-10 flex items-center gap-8">
          <a href="#work" className="hidden md:inline nav-link">Build with us</a>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-foreground"
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu backdrop"
              className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="fixed top-0 right-0 z-[80] h-screen w-full md:w-1/2 bg-background border-l border-foreground/10 overflow-y-auto"
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="section-padding pt-20 pb-32">
                <div className="flex items-center justify-between mb-16">
                  <h2 className="text-[8vw] md:text-[5vw] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
                    MENU
                  </h2>
                  <button
                    type="button"
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-2xl text-foreground hover:text-muted-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-2 md:space-y-3">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[6vw] md:text-[4.5vw] font-medium leading-[1.05] tracking-[-0.03em] text-foreground hover:text-muted-foreground transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.08 + index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  className="mt-20 pt-8 border-t border-foreground/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</p>
                  <a href="mailto:hello@fragment.studio" className="text-sm text-foreground hover:text-muted-foreground transition-colors">
                    hello@fragment.studio
                  </a>
                  <p className="text-xs text-muted-foreground mt-4">
                    +1 (323) 555-0190
                  </p>
                </motion.div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
