import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import PresentationVideo from "@/components/PresentationVideo";
import Services from "@/components/Services";
import AdminWorks from "@/components/AdminWorks";
import Process from "@/components/Process";
import PortfolioPreview from "@/components/PortfolioPreview";
import Bastidores from "@/components/Bastidores";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Numbers />
      <PresentationVideo />
      <Services />
      <AdminWorks />
      <Process />
      <PortfolioPreview />
      <Bastidores />
      <Testimonials />
      <VideoTestimonials />
      <About />
      <FAQ />
      <ContactSection />
    </>
  );
}
