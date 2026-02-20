import ScrollReveal from "./ScrollReveal";

const clients = [
  "Nike", "Apple", "Adidas", "Lexus", "Beats", "Grey Goose",
  "Drift", "Palm", "Massiv", "Pierre York", "Theranos", "Fragment"
];

const ClientMarquee = () => {
  const reversedClients = clients.slice().reverse();

  const Row = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
    <div className={`flex w-max whitespace-nowrap ${reverse ? "animate-marquee-reverse-slow" : "animate-marquee-slow"}`}>
      {[0, 1].map((group) => (
        <div key={group} className="flex shrink-0">
          {items.map((client, i) => (
            <div
              key={`${group}-${client}-${i}`}
              className="flex items-center justify-center mx-4 md:mx-8 shrink-0"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-foreground/10 flex items-center justify-center bg-background hover:bg-foreground hover:text-primary-foreground transition-all duration-500 cursor-pointer group">
                <span className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-muted-foreground group-hover:text-primary-foreground transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-24 md:py-40 overflow-hidden">
      <ScrollReveal className="section-padding mb-12">
        <h2 className="display-large">Clients</h2>
      </ScrollReveal>

      {/* Row 1 - scrolling left */}
      <div className="mb-6">
        <Row items={clients} />
      </div>

      {/* Row 2 - scrolling right */}
      <div>
        <Row items={reversedClients} reverse />
      </div>

      <ScrollReveal className="section-padding mt-16">
        <p className="body-large text-muted-foreground max-w-lg">
          ...and our eyes on the world.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default ClientMarquee;
