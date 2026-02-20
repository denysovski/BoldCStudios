import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const ref = useRef(null);
  const [email, setEmail] = useState("");
  const [isDark, setIsDark] = useState(false);
  const marqueeItems = Array.from({ length: 8 }, () => "· Let's Create Together");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <section id="contact" ref={ref}>
      {/* Scrolling marquee */}
      <div className="py-12 md:py-20 overflow-hidden border-t border-foreground/10">
        <div className="flex w-max animate-scroll-text whitespace-nowrap">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0">
              {marqueeItems.map((text, i) => (
                <span key={`${group}-${i}`} className="text-[8vw] md:text-[6vw] font-medium tracking-[-0.03em] mx-6 shrink-0 text-foreground">
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter + CTA */}
      <motion.div style={{ y, opacity }} className="section-padding py-20 md:py-32 border-t border-foreground/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
          <div>
            <ScrollReveal>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Stay in the loop</p>
              <h3 className="display-medium mb-6">Get updates on our latest work and thinking.</h3>
              <p className="body-large text-muted-foreground max-w-md mb-8">
                No spam. Just occasional dispatches from the studio — new projects, essays, and behind-the-scenes process.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border border-foreground/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
                <motion.button
                  className="bg-foreground text-primary-foreground px-6 py-3 text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col justify-between">
            <ScrollReveal delay={0.15}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Get in touch</p>
              <a
                href="mailto:hello@fragment.studio"
                className="text-[5vw] md:text-[2.5vw] font-medium leading-tight tracking-[-0.02em] text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@fragment.studio
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                +1 (323) 555-0190<br />
                Los Angeles, CA — New York, NY
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Appearance</p>
                <motion.button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 border border-foreground/20 px-4 py-2.5 text-sm text-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                    {isDark ? (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                    )}
                  </span>
                  {isDark ? "Light Mode" : "Dark Mode"}
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="section-padding py-8 border-t border-foreground/10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <span className="text-sm font-semibold text-foreground">●● Fragment</span>
            <div className="flex gap-6">
              {["Instagram", "Behance", "LinkedIn", "Twitter"].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-muted-foreground"
          >
            © 2024 Fragment Studio. Built with intent.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
