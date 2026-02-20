import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, CheckCircle2, Gauge, Layers3, Sparkles } from "lucide-react";

const work1 = "https://images.unsplash.com/photo-1669295384050-a1d4357bd1d7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const work2 = "https://images.unsplash.com/photo-1704895390342-b52a2f45786c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const work3 = "https://images.unsplash.com/photo-1668450433152-e56d7e8fe4ee?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const work4 = "https://images.unsplash.com/photo-1638438134099-a91e5373aaf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface ShowcaseItemProps {
  src: string;
  title: string;
  subtitle: string;
  align: "left" | "right";
  highlights?: string[];
  indicators?: { label: string; value: string }[];
  ctaLabel?: string;
  ctaHref?: string;
}

const ShowcaseItem = ({ src, title, subtitle, align, highlights, indicators, ctaLabel, ctaHref }: ShowcaseItemProps) => {
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

          {highlights && highlights.length > 0 && (
            <div className="mt-8 grid gap-3 max-w-md">
              {highlights.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-foreground" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          )}

          {indicators && indicators.length > 0 && (
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
              {indicators.map((item, idx) => {
                const Icon = idx === 0 ? Layers3 : idx === 1 ? Gauge : Sparkles;
                return (
                  <div key={item.label} className="border border-foreground/10 p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-3.5 h-3.5 text-foreground" />
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
                    </div>
                    <p className="text-sm md:text-base font-medium text-foreground">{item.value}</p>
                  </div>
                );
              })}
            </div>
          )}

          {ctaLabel && ctaHref && (
            <div className="mt-8">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-3 text-xs md:text-sm uppercase tracking-[0.14em]"
              >
                {ctaLabel}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
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
            className="w-full h-[50vh] md:h-[70vh] object-cover grayscale"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="absolute inset-0 bg-foreground/10"
            animate={{ opacity: hovered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-6 md:p-8 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/75 mb-2">Case Snapshot</p>
              <p className="text-white text-sm md:text-base max-w-sm leading-relaxed">
                Systemized identity architecture across web, editorial, and campaign touchpoints.
              </p>
            </div>
          </motion.div>
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
      highlights: [
        "Cross-channel component library for consistent brand expression.",
        "Editorial-grade typography system tuned for web and motion.",
        "Conversion-oriented layouts with clear narrative hierarchy.",
      ],
      indicators: [
        { label: "Modules", value: "24" },
        { label: "Clarity", value: "+38%" },
        { label: "Lift", value: "2.3x" },
      ],
      ctaLabel: "View Visual System",
      ctaHref: "#work",
    },
    {
      src: work2,
      title: "Editorial Craft",
      subtitle: "Where typography meets narrative — publications that demand attention and reward the curious.",
      align: "right",
      highlights: [
        "Magazine layouts and editorial design systems optimized for print and digital publication.",
        "Typography-driven narratives that guide readers through complex information hierarchies.",
        "Art direction for long-form content spanning web, PDF, and interactive formats.",
      ],
      indicators: [
        { label: "Publications", value: "12" },
        { label: "Readability", value: "+42%" },
        { label: "Engagement", value: "3.1x" },
      ],
      ctaLabel: "Explore Editorial Work",
      ctaHref: "#work",
    },
    {
      src: work3,
      title: "Digital Spaces",
      subtitle: "Immersive web experiences built at the intersection of art direction and engineering precision.",
      align: "left",
      highlights: [
        "Performance-optimized web platforms with pixel-perfect design execution across devices.",
        "Interactive storytelling through scroll-triggered animations and gesture-based interactions.",
        "Accessibility-first design systems that balance aesthetic ambition with usability.",
      ],
      indicators: [
        { label: "Platforms", value: "8" },
        { label: "Performance", value: "98" },
        { label: "Conversion", value: "+67%" },
      ],
      ctaLabel: "View Digital Projects",
      ctaHref: "#work",
    },
    {
      src: work4,
      title: "Motion & Film",
      subtitle: "Kinetic storytelling that captures the essence of a brand in movement and time.",
      align: "right",
      highlights: [
        "Broadcast-quality motion graphics and video production for brand storytelling and campaigns.",
        "Cinematic direction and color grading that amplifies emotional resonance and brand identity.",
        "Seamless integration of motion design across digital products and interactive experiences.",
      ],
      indicators: [
        { label: "Productions", value: "15" },
        { label: "Reach", value: "2.4M" },
        { label: "Duration", value: "50h" },
      ],
      ctaLabel: "Watch Motion Reel",
      ctaHref: "#work",
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
