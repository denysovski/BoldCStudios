import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SphereSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const ringText = "PRECISION • DECISION • ".repeat(10);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background text */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
      >
        <h2 className="text-[14vw] md:text-[10vw] font-medium leading-[0.9] tracking-[-0.05em] text-foreground/[0.06] text-center whitespace-nowrap select-none">
          Evolution
          <br />
          of Process
        </h2>
      </motion.div>

      {/* Donut */}
      <motion.div style={{ scale }} className="relative z-10 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw]">
        <div className="relative w-full h-full rounded-full border border-foreground/25 bg-foreground/[0.03]">
          <motion.svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path
                id="donut-ring-path"
                d="M 200,200 m -145,0 a 145,145 0 1,1 290,0 a 145,145 0 1,1 -290,0"
              />
            </defs>
            <text
              fill="currentColor"
              className="text-[20px] md:text-[18px] uppercase tracking-[0.28em] text-foreground/90"
            >
              <textPath href="#donut-ring-path" startOffset="0%">
                {ringText}
              </textPath>
            </text>
          </motion.svg>

          <div className="absolute inset-[23%] rounded-full border border-foreground/20 bg-background" />
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        style={{ opacity }}
        className="absolute bottom-16 text-xs uppercase tracking-[0.3em] text-muted-foreground z-20"
      >
        Scroll to explore
      </motion.p>
    </section>
  );
};

export default SphereSection;
