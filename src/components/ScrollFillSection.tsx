import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

interface FillWordProps {
  text: string;
  progress: any;
  start: number;
  end: number;
}

const FillWord = ({ text, progress, start, end }: FillWordProps) => {
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.3em]">
      {text}
    </motion.span>
  );
};

interface FillParagraphProps {
  text: string;
  className?: string;
}

const FillParagraph = ({ text, className = "" }: FillParagraphProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <FillWord
          key={i}
          text={word}
          progress={scrollYProgress}
          start={i / words.length}
          end={(i + 1) / words.length}
        />
      ))}
    </p>
  );
};

const capabilities = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Strategy",
    text: "Research, positioning, market analysis",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Design",
    text: "Identity, UI/UX, art direction",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Development",
    text: "Web, mobile, immersive experiences",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    title: "Motion",
    text: "Film, animation, 3D visuals",
  },
];

const ScrollFillSection = () => {
  return (
    <section className="py-24 md:py-40">
      {/* Scroll fill text block */}
      <div className="section-padding mb-24 md:mb-40">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">About the Studio</p>
        </ScrollReveal>

        <FillParagraph
          text="Fragment is a multidisciplinary creative studio born from the conviction that design is not decoration — it is intention made visible. We operate at the crossroads of culture, commerce, and craft, building brands and digital experiences that endure beyond trends."
          className="text-[6vw] md:text-[3.5vw] lg:text-[2.8vw] font-medium leading-[1.2] tracking-[-0.02em] text-foreground max-w-6xl"
        />
      </div>

      {/* Second fill block */}
      <div className="section-padding mb-24 md:mb-40">
        <FillParagraph
          text="Every project begins with listening. We immerse ourselves in the problem before reaching for the solution. Our process is iterative, collaborative, and relentlessly focused on outcomes that matter — for the brand, the audience, and the culture at large."
          className="text-[5vw] md:text-[2.5vw] lg:text-[2vw] font-light leading-[1.4] tracking-[-0.01em] text-foreground max-w-5xl"
        />
      </div>

      {/* Capabilities with icons */}
      <div className="section-padding">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">What We Do</p>
          <h2 className="display-large mb-16">Core Capabilities</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.title} delay={i * 0.1}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -8 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="w-16 h-16 rounded-full border border-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-primary-foreground transition-all duration-500">
                  <div className="group-hover:invert transition-all duration-500">
                    {cap.icon}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Big statement */}
      <div className="section-padding mt-24 md:mt-40">
        <ScrollReveal>
          <div className="border-t border-foreground/10 pt-16">
            <FillParagraph
              text="We don't chase trends. We set the standard. Every pixel, every frame, every word — crafted with purpose."
              className="text-[7vw] md:text-[4vw] lg:text-[3vw] font-medium leading-[1.1] tracking-[-0.03em] text-foreground"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScrollFillSection;
