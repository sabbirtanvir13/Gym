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
import ProteinCalculator from "@/components/ProteinCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Transformation from "@/components/Transformation";
import Contact from "@/components/Contact";
// Footer moved to shared layout
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <CustomCursor />

      <main className="noise-texture">
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Schedule />
        <ProteinCalculator />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Transformation />
        <Contact />
      </main>
      // Footer rendered in layout
      <FloatingContactButtons />
    </>
  );
}
