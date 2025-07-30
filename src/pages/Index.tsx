import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RestaurantHero from "@/components/RestaurantHero";
import AboutSection from "@/components/AboutSection";
import MenuHighlights from "@/components/MenuHighlights";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen dark">
      <Header />
      <RestaurantHero />
      <AboutSection />
      <MenuHighlights />
      <GallerySection />
      <ServicesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;