import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent page scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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

          {/* Mobile Menu - Sidebar */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-foreground hover:text-warm-orange transition-colors duration-300">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-black border-border">
              <div className="flex flex-col gap-6 pt-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl">🍽</span>
                  <span className="text-xl font-bold text-white">The Bello Restaurant</span>
                </div>
                
                <nav className="flex flex-col gap-6">
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-left text-lg text-white hover:text-warm-orange transition-colors duration-300"
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-left text-lg text-white hover:text-warm-orange transition-colors duration-300"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('menu')}
                    className="text-left text-lg text-white hover:text-warm-orange transition-colors duration-300"
                  >
                    Menu
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-left text-lg text-white hover:text-warm-orange transition-colors duration-300"
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => scrollToSection('location')}
                    className="text-left text-lg text-white hover:text-warm-orange transition-colors duration-300"
                  >
                    Location
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-left text-lg text-white hover:text-warm-orange transition-colors duration-300"
                  >
                    Contact
                  </button>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-warm-orange hover:bg-terracotta text-cream mt-4 w-full"
                  >
                    Reserve Table
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;