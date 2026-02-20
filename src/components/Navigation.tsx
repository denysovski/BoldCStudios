import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const Navigation = () => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 section-padding flex items-center justify-between h-16 md:h-20"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-background/95 backdrop-blur-sm"
      />
      <a href="#" className="relative z-10 text-sm font-semibold tracking-[-0.01em] text-foreground">
        ●● Fragment
      </a>
      <span className="relative z-10 hidden md:block text-sm text-muted-foreground">
        LA.CA {time}
      </span>
      <div className="relative z-10 flex items-center gap-8">
        <a href="#work" className="hidden md:inline nav-link">Build with us</a>
        <button className="text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="8" x2="21" y2="8" />
            <line x1="3" y1="16" x2="21" y2="16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
