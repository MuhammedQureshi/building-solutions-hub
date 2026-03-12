import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <CTABanner />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
