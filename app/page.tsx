import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Schedule from "@/components/Schedule";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Transformation from "@/components/Transformation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
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
        <Transformation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
