import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingContactButtons from "@/components/ui/WhatsAppButton";
// Navbar moved to shared layout
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import Schedule from "@/components/sections/Schedule";
import ProteinCalculatorPromo from "@/components/ui/ProteinCalculatorPromo";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
// Footer moved to shared layout

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />

      <main className="noise-texture">
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Schedule />

        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <ProteinCalculatorPromo />
        <Contact />
      </main>

      <FloatingContactButtons />
    </>
  );
}
