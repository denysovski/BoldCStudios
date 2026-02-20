import ScrollReveal from "./ScrollReveal";

const gridImages = [
  "https://images.unsplash.com/photo-1611670502424-232bf030c54b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1571509408199-4da64495bdc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0",
];

const imageRows = [
  gridImages.slice(0, 4),
  gridImages.slice(4, 8),
  gridImages.slice(8, 12),
];

const DualImageScroll = () => {
  return (
    <section>
      <div className="relative h-[88vh] md:h-[96vh] overflow-hidden">
        <div className="absolute inset-0 space-y-4 md:space-y-6 py-5 md:py-8">
          {imageRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex w-max gap-4 md:gap-6 ${rowIndex % 2 === 0 ? "animate-grid-motion" : "animate-grid-motion-reverse"}`}
            >
              {[0, 1].flatMap((group) => row.map((src, index) => (
                <div
                  key={`${rowIndex}-${group}-${index}`}
                  className="w-[42vw] sm:w-[32vw] md:w-[24vw] lg:w-[20vw] xl:w-[17vw] h-[24vh] md:h-[27vh] shrink-0 overflow-hidden rounded-2xl border border-black/15"
                >
                  <img
                    src={src}
                    alt="Design grid"
                    className="w-full h-full object-cover grayscale contrast-125"
                  />
                </div>
              )))}
            </div>
          ))}
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
