import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 128, 128]} scale={1.4}>
      <MeshDistortMaterial
        color="#141414"
        roughness={0.1}
        metalness={0.9}
        distort={0.3}
        speed={1.5}
      />
    </Sphere>
  );
};

const SphereSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

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

      {/* 3D Sphere */}
      <motion.div style={{ scale }} className="relative z-10 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw]">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 35 }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -3, -5]} intensity={0.4} />
          <pointLight position={[0, 0, 3]} intensity={0.5} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
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
