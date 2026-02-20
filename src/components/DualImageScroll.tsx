import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const identityLeftImage = "https://images.unsplash.com/photo-1611670502424-232bf030c54b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const identityRightImage = "https://images.unsplash.com/photo-1571509408199-4da64495bdc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8";

const DualImageScroll = () => {
  return (
    <section>
      <div className="relative h-[85vh] md:h-[95vh]">
        <div className="absolute inset-0 flex items-stretch overflow-hidden">
          <div className="relative w-1/2 overflow-hidden">
            <motion.img
              src={identityLeftImage}
              alt="Identity Systems left"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="relative w-1/2 overflow-hidden">
            <motion.img
              src={identityRightImage}
              alt="Identity Systems right"
              className="absolute inset-0 w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-background/20 z-10" />

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
            <div className="inline-flex items-center justify-center px-10 md:px-20 py-4 md:py-6 border border-white/75 rounded-[60px] bg-black/25 backdrop-blur-sm">
              <h3
                className="text-[10vw] md:text-[6vw] font-medium leading-[0.95] tracking-[-0.04em] text-center"
                style={{
                  color: "white",
                  textShadow: "0 2px 20px rgba(0,0,0,0.5), 0 4px 40px rgba(0,0,0,0.3)",
                }}
              >
                Identity Systems
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <ScrollReveal className="md:col-span-8">
            <h2 className="text-[14vw] md:text-[8vw] lg:text-[6vw] font-medium leading-[0.88] tracking-[-0.05em] text-foreground">
              We build brands
              <br />
              that outlive trends.
            </h2>
          </ScrollReveal>

          <div className="md:col-span-4 flex flex-col justify-end">
            <ScrollReveal delay={0.15}>
              <p className="body-large text-muted-foreground max-w-md">
                Strategy, visual identity, and execution under one roof. Every element is deliberate. Every rollout is built to perform.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mt-14 md:mt-20 border-t border-foreground/10 pt-10 md:pt-14">
          <ScrollReveal>
            <p className="text-[11vw] md:text-[6vw] lg:text-[4.5vw] font-medium leading-[0.92] tracking-[-0.04em] text-foreground">
              Maximal impact.
              <span className="text-muted-foreground"> Minimal compromise.</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 text-sm md:text-base text-muted-foreground max-w-3xl">
              We are the best fit when ambition is high and shortcuts are off the table. Our studio couples editorial-level craft with production-grade delivery so your brand scales without losing its voice.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default DualImageScroll;
