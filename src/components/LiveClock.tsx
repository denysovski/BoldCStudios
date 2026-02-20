import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <section className="py-24 md:py-40 overflow-hidden">
      <ScrollReveal className="section-padding mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Time waits for no one</p>
      </ScrollReveal>

      <div className="section-padding">
        <ScrollReveal>
          <h2 className="text-[8vw] md:text-[5vw] font-medium leading-[1.1] tracking-[-0.03em] text-foreground mb-16 max-w-4xl">
            Make a move quick,
            <br />
            <span className="text-muted-foreground">time is running.</span>
          </h2>
        </ScrollReveal>

        {/* Clock display */}
        <div className="flex items-center justify-center py-12 md:py-20">
          <div className="flex items-baseline gap-2 md:gap-4 select-none">
            {[hours, minutes, seconds].map((unit, i) => (
              <div key={i} className="flex items-baseline">
                {i > 0 && (
                  <motion.span
                    className="text-[10vw] md:text-[8vw] font-bold tracking-[-0.04em] text-foreground mx-1 md:mx-3"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    :
                  </motion.span>
                )}
                <motion.span
                  className="text-[14vw] md:text-[10vw] font-bold tracking-[-0.05em] text-foreground"
                  style={{ fontVariantNumeric: "tabular-nums", fontFamily: "'Inter', monospace" }}
                  key={unit}
                  initial={{ y: 10, opacity: 0.5 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {unit}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Labels */}
        <div className="flex items-center justify-center gap-16 md:gap-24 mt-4">
          {["Hours", "Minutes", "Seconds"].map((label) => (
            <p key={label} className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {label}
            </p>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={0.15} className="mt-16 md:mt-24 text-center">
          <motion.a
            href="#contact"
            className="inline-block bg-foreground text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.15em]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start a project now
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LiveClock;
