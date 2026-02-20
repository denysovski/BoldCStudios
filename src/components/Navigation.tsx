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
              className="fixed inset-0 z-[70] bg-black/35 backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className="fixed top-0 right-0 z-[80] h-screen w-[98px] md:w-[118px] bg-black border-l border-white/20 py-6 md:py-8 px-3 md:px-4 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col items-center gap-4 mb-6 md:mb-8">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-white/60 text-center">Menu</p>
                <button
                  type="button"
                  className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/35 text-white/80 hover:text-white hover:border-white transition-colors"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center gap-3 md:gap-4 overflow-y-auto">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[10px] md:text-[11px] leading-[1.1] uppercase tracking-[0.16em] font-medium text-white/80 hover:text-white transition-colors text-center"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.35, delay: 0.04 + index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
