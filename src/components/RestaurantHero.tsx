import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-restaurant.jpg";

const RestaurantHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-deep-brown/80 via-deep-brown/60 to-warm-orange/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-cream px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            🍽 The Bello<br />
            <span className="text-gold-accent">Restaurant</span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-cream/90 font-medium">
            Ozix Beverage & Food – Kicukiro, Kigali
          </p>
          <p className="text-lg md:text-xl text-cream/80 italic">
            Where every bite tells a story
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('menu')}
            className="bg-warm-orange hover:bg-terracotta text-cream font-semibold px-8 py-3 rounded-full shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            View Full Menu
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="border-2 border-cream text-cream hover:bg-cream hover:text-deep-brown font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default RestaurantHero;