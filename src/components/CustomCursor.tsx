import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 40, mass: 0.2 });

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia("(pointer: fine)").matches;
    setEnabled(canUseCustomCursor);

    if (!canUseCustomCursor) {
      return;
    }

    document.documentElement.classList.add("cursor-custom");

    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleViewportLeave = () => {
      mouseX.set(-100);
      mouseY.set(-100);
    };

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleViewportLeave);

    return () => {
      document.documentElement.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleViewportLeave);
    };
  }, [mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[120] w-9 h-9 rounded-full border border-foreground/70 bg-background/20 backdrop-blur-[2px] pointer-events-none"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    />
  );
};

export default CustomCursor;
