import RestaurantHero from "@/components/RestaurantHero";
import AboutSection from "@/components/AboutSection";
import MenuHighlights from "@/components/MenuHighlights";
import LocationSection from "@/components/LocationSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <RestaurantHero />
      <AboutSection />
      <MenuHighlights />
      <ServicesSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
};

export default Index;