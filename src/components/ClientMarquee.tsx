import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const clients = [
  "Nike", "Apple", "Adidas", "Lexus", "Beats", "Grey Goose",
  "Drift", "Palm", "Massiv", "Pierre York", "Theranos", "Fragment"
];

const ClientMarquee = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return (
    <section ref={ref} className="py-24 md:py-40 overflow-hidden">
      <ScrollReveal className="section-padding mb-12">
        <h2 className="display-large">Clients</h2>
      </ScrollReveal>

      {/* Row 1 - scrolling left */}
      <motion.div style={{ x: x1 }} className="mb-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-4 md:mx-8 shrink-0"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-foreground/10 flex items-center justify-center bg-background hover:bg-foreground hover:text-primary-foreground transition-all duration-500 cursor-pointer group">
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Row 2 - scrolling right */}
      <motion.div style={{ x: x2 }}>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-4 md:mx-8 shrink-0"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-foreground/10 flex items-center justify-center bg-background hover:bg-foreground hover:text-primary-foreground transition-all duration-500 cursor-pointer group">
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <ScrollReveal className="section-padding mt-16">
        <p className="body-large text-muted-foreground max-w-lg">
          ...and our eyes on the world.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default ClientMarquee;
