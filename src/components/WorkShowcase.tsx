import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import project4 from "@/assets/project-4.jpg";

const project1 = "https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const project2 = "https://images.unsplash.com/photo-1762417582194-7f0978f43fa0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const project3 = "https://images.unsplash.com/photo-1740592755707-5df1c19af6bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const project5 = "https://images.unsplash.com/photo-1476097396421-d542340377d1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

interface ProjectProps {
  src: string;
  title: string;
  categories: string;
  size?: "full" | "half";
}

const ProjectCard = ({ src, title, categories, size = "full" }: ProjectProps) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden cursor-pointer ${size === "full" ? "col-span-2" : "col-span-1"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div style={{ y }} className="w-full">
        <motion.img
          src={src}
          alt={title}
          className={`w-full object-cover ${size === "full" ? "h-[50vh] md:h-[75vh]" : "h-[40vh] md:h-[55vh]"}`}
          animate={{ scale: hovered ? 1.03 : 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground mt-1">{categories}</p>
      </motion.div>
    </motion.div>
  );
};

const WorkShowcase = () => {
  const projects = [
    { src: project1, title: "Nike Adapt BB", categories: "Design, Strategy, 3D + motion", size: "full" as const },
    { src: project2, title: "Reelworks", categories: "Web, Advertising, Print", size: "half" as const },
    { src: project5, title: "Kala Capsule", categories: "Identity, Product", size: "half" as const },
    { src: project3, title: "Seichi", categories: "Kiko, Strategy, Advertising, Print", size: "full" as const },
    { src: project4, title: "Beats Pill+", categories: "BRFX, Cover, Fidjz", size: "full" as const },
  ];

  return (
    <section id="work" className="section-padding py-24 md:py-40">
      <ScrollReveal>
        <h2 className="display-large mb-16">Projects</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 gap-4 md:gap-8">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.1}>
            <ProjectCard {...project} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.2} className="mt-16 text-center">
        <a href="#" className="text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
          View All Projects →
        </a>
      </ScrollReveal>
    </section>
  );
};

export default WorkShowcase;
