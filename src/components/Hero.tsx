import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const heroImage = "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="section-padding pt-32 pb-16">
        <motion.h1
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-medium leading-[1.05] tracking-[-0.03em] max-w-[85vw]"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          We serve early stage & established businesses through future-proof brand development & digital creative.
        </motion.h1>
      </motion.div>

      {/* Full-width hero image */}
      <motion.div
        style={{ y: imageY }}
        className="w-full"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-muted">
          <motion.img
            src={heroImage}
            alt="Featured work"
            className="w-full h-full object-cover grayscale contrast-125"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute bottom-0 left-0 right-0 section-padding py-6">
            <p className="text-xs text-background/70 uppercase tracking-widest">
              This is what future-proof applications that define, validate & grow your business look like.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
