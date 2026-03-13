import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MessageSection from "@/components/MessageSection";
import ServiceSection from "@/components/ServiceSection";
import NewsSection from "@/components/NewsSection";
import AccessSection from "@/components/AccessSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <div id="snap-root" className="snap-container">
        <HeroSection />
        <AboutSection />
        <MessageSection />
        <ServiceSection />
        <NewsSection />
        <AccessSection />
        <ContactSection />
      </div>
    </>
  );
}
