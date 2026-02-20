import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextFillOnScrollProps {
  text: string;
  className?: string;
}

const TextFillOnScroll = ({ text, className = "" }: TextFillOnScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.3"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      <span className="text-outline display-huge">{text}</span>
      <motion.span
        className="text-outline-fill display-huge absolute inset-0"
        style={{ clipPath }}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default TextFillOnScroll;
