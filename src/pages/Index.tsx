import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Philosophy from "@/components/Philosophy";
import WorkShowcase from "@/components/WorkShowcase";
import Publications from "@/components/Publications";
import ExtendedShowcase from "@/components/ExtendedShowcase";
import SphereSection from "@/components/SphereSection";
import ScrollFillSection from "@/components/ScrollFillSection";
import DualImageScroll from "@/components/DualImageScroll";
import LiveClock from "@/components/LiveClock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <ClientMarquee />
      <Philosophy />
      <WorkShowcase />
      <Publications />
      <ExtendedShowcase />
      <SphereSection />
      <ScrollFillSection />
      <DualImageScroll />
      <LiveClock />
      <Footer />
    </div>
  );
};

export default Index;
