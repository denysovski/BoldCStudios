import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const imageSets = [
  { left: project1, right: work1, label: "Identity Systems", sub: "Building visual foundations" },
  { left: project2, right: work2, label: "Editorial Design", sub: "Print meets digital" },
  { left: project3, right: work3, label: "Campaign Work", sub: "Stories that move people" },
  { left: project4, right: project5, label: "Spatial Design", sub: "Environments with intent" },
];

const DualImageScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const activeIndex = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);

  return (
    <section>
      {/* Sticky image scroll */}
      <div ref={ref} className="relative" style={{ height: `${imageSets.length * 80}vh` }}>
        <div className="sticky top-0 h-screen flex items-stretch overflow-hidden">
          <div className="relative w-1/2 overflow-hidden">
            {imageSets.map((set, i) => (
              <ImageLayer key={`l-${i}`} src={set.left} index={i} activeIndex={activeIndex} />
            ))}
          </div>
          <div className="relative w-1/2 overflow-hidden">
            {imageSets.map((set, i) => (
              <ImageLayer key={`r-${i}`} src={set.right} index={i} activeIndex={activeIndex} />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
            {imageSets.map((set, i) => (
              <TextOverlay key={`t-${i}`} label={set.label} sub={set.sub} index={i} activeIndex={activeIndex} />
            ))}
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-background/20 z-10" />
        </div>
      </div>

      {/* Asymmetric text section below */}
      <div className="section-padding py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          <ScrollReveal className="md:col-span-7">
            <h2 className="text-[12vw] md:text-[7vw] font-medium leading-[0.9] tracking-[-0.04em] text-foreground">
              We don't
              <br />
              follow rules.
            </h2>
          </ScrollReveal>

          <div className="md:col-span-5 md:col-start-8 flex flex-col justify-end">
            <ScrollReveal delay={0.15}>
              <p className="body-large text-muted-foreground max-w-md">
                Convention is comfortable. We prefer the edges — where new ideas 
                live and expectations dissolve into possibility.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
          <div className="md:col-span-4">
            <ScrollReveal delay={0.05}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Philosophy</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every pixel carries weight. Every choice is deliberate. 
                We strip away the unnecessary until only the essential remains.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="md:col-span-8 md:col-start-5" delay={0.1}>
            <h3 className="text-[9vw] md:text-[5vw] font-medium leading-[0.95] tracking-[-0.03em] text-foreground text-right">
              Precision is
              <br />
              <span className="text-muted-foreground">our language.</span>
            </h3>
          </ScrollReveal>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
          <ScrollReveal className="md:col-span-6 md:col-start-4" delay={0.08}>
            <div className="border-t border-foreground/10 pt-8">
              <p className="text-[6vw] md:text-[3vw] font-medium leading-[1.1] tracking-[-0.02em] text-foreground text-center">
                "Design is not what it looks like. 
                Design is how it works."
              </p>
              <p className="text-xs text-muted-foreground text-center mt-6 uppercase tracking-[0.2em]">
                — Studio Manifesto
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

interface ImageLayerProps {
  src: string;
  index: number;
  activeIndex: any;
}

const ImageLayer = ({ src, index, activeIndex }: ImageLayerProps) => {
  const opacity = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.6 ? 1 : 0;
  });

  const scale = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.6 ? 1.05 : 1.15;
  });

  return (
    <motion.img
      src={src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      style={{ opacity, scale }}
    />
  );
};

interface TextOverlayProps {
  label: string;
  sub: string;
  index: number;
  activeIndex: any;
}

const TextOverlay = ({ label, sub, index, activeIndex }: TextOverlayProps) => {
  const opacity = useTransform(activeIndex, (v: number) => {
    const dist = Math.abs(v - index);
    return dist < 0.4 ? 1 : 0;
  });

  const y = useTransform(activeIndex, (v: number) => {
    return (v - index) * -40;
  });

  return (
    <motion.div className="absolute text-center" style={{ opacity, y }}>
      <h3
        className="text-[10vw] md:text-[6vw] font-medium leading-[0.95] tracking-[-0.04em]"
        style={{
          color: "white",
          textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)",
        }}
      >
        {label}
      </h3>
      <p
        className="text-sm md:text-base mt-4 uppercase tracking-[0.2em]"
        style={{
          color: "rgba(255,255,255,0.8)",
          textShadow: "0 1px 10px rgba(0,0,0,0.6)",
        }}
      >
        {sub}
      </p>
    </motion.div>
  );
};

export default DualImageScroll;
