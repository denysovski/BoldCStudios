import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

interface ShowcaseItemProps {
  src: string;
  title: string;
  subtitle: string;
  align: "left" | "right";
}

const ShowcaseItem = ({ src, title, subtitle, align }: ShowcaseItemProps) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <div
      ref={ref}
      className={`flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-0`}
    >
      {/* Big text side */}
      <div className={`w-full md:w-1/2 section-padding ${align === "right" ? "md:pl-20" : "md:pr-20"}`}>
        <ScrollReveal direction={align === "left" ? "left" : "right"} distance={40}>
          <h3 className="text-[12vw] md:text-[6vw] font-medium leading-[0.95] tracking-[-0.04em] text-foreground">
            {title}
          </h3>
          <p className="body-large text-muted-foreground mt-6 max-w-md">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>

      {/* Image side */}
      <motion.div
        className="w-full md:w-1/2 overflow-hidden cursor-pointer"
        style={{ y }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div style={{ scale: imgScale }} className="relative">
          <motion.img
            src={src}
            alt={title}
            className="w-full h-[50vh] md:h-[70vh] object-cover"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-foreground/10"
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

const ExtendedShowcase = () => {
  const items: ShowcaseItemProps[] = [
    {
      src: work1,
      title: "Visual Systems",
      subtitle: "Crafting cohesive brand languages that transcend mediums and resonate across every touchpoint.",
      align: "left",
    },
    {
      src: work2,
      title: "Editorial Craft",
      subtitle: "Where typography meets narrative — publications that demand attention and reward the curious.",
      align: "right",
    },
    {
      src: work3,
      title: "Digital Spaces",
      subtitle: "Immersive web experiences built at the intersection of art direction and engineering precision.",
      align: "left",
    },
    {
      src: work4,
      title: "Motion & Film",
      subtitle: "Kinetic storytelling that captures the essence of a brand in movement and time.",
      align: "right",
    },
  ];

  return (
    <section className="py-24 md:py-40">
      <ScrollReveal className="section-padding mb-20">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Selected Work</p>
        <h2 className="display-large">Beyond the surface</h2>
      </ScrollReveal>

      <div className="space-y-16 md:space-y-32">
        {items.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.05}>
            <ShowcaseItem {...item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ExtendedShowcase;
