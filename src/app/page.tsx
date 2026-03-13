import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import NewsSection from "@/components/NewsSection";
import AccessSection from "@/components/AccessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <AboutSection />
        <ServiceSection />
        <NewsSection />
        <AccessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
