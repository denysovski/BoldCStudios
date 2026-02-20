import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface ServiceProps {
  number: string;
  title: string;
  description: string;
}

const ServiceItem = ({ number, title, description }: ServiceProps) => (
  <motion.div
    className="group border-t border-foreground/10 py-8 md:py-12 cursor-pointer"
    whileHover={{ x: 20 }}
    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="flex items-start justify-between gap-8">
      <div className="flex items-start gap-6 md:gap-12">
        <span className="text-xs text-muted-foreground mt-1">{number}</span>
        <div>
          <h3 className="display-medium group-hover:text-muted-foreground transition-colors duration-300">
            {title}
          </h3>
          <p className="body-large text-muted-foreground mt-2 max-w-md">{description}</p>
        </div>
      </div>
      <motion.span
        className="text-lg text-muted-foreground mt-1 shrink-0"
        whileHover={{ rotate: 45 }}
      >
        ↗
      </motion.span>
    </div>
  </motion.div>
);

const Publications = () => {
  const services = [
    { number: "01", title: "Brand Strategy", description: "Building foundations that scale with your vision." },
    { number: "02", title: "Digital Design", description: "Interfaces that feel as good as they look." },
    { number: "03", title: "3D & Motion", description: "Bringing concepts to life through immersive visuals." },
    { number: "04", title: "Development", description: "Pixel-perfect builds with cutting-edge technology." },
  ];

  return (
    <section id="publications" className="section-padding py-24 md:py-40">
      <ScrollReveal>
        <h2 className="display-large mb-12">Services</h2>
      </ScrollReveal>

      <div>
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 0.08}>
            <ServiceItem {...service} />
          </ScrollReveal>
        ))}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
};

export default Publications;
