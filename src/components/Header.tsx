import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍽</span>
            <span className="text-xl font-bold text-foreground">The Bello Restaurant</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-warm-orange transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-warm-orange transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-warm-orange transition-colors duration-300"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-warm-orange transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className="text-foreground hover:text-warm-orange transition-colors duration-300"
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-warm-orange transition-colors duration-300"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-warm-orange hover:bg-terracotta text-cream"
            >
              Reserve Table
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-warm-orange transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-6 gap-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-warm-orange transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-left text-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-left text-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Location
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-warm-orange hover:bg-terracotta text-cream mt-2"
              >
                Reserve Table
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;