import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import FloatingContactButtons from "@/components/WhatsAppButton";
// Navbar moved to shared layout
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Schedule from "@/components/Schedule";
import ProteinCalculatorPromo from "@/components/ProteinCalculatorPromo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
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
