import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍽</span>
              <span className="text-xl font-bold text-foreground">The Bello Restaurant</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Where every bite tells a story. Experience the finest dining in Kigali with our signature dishes and warm hospitality.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock size={16} />
              <span>Open Daily • 11:00 AM - 10:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-muted-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-warm-orange transition-colors duration-300"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="block text-muted-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-muted-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-warm-orange transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span className="text-sm">Kicukiro, Kigali</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span className="text-sm">+250 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span className="text-sm">hello@bellorestaurant.rw</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Instagram size={16} />
                <a 
                  href="https://instagram.com/the_bello__restaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-warm-orange transition-colors duration-300"
                >
                  @the_bello__restaurant
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2025 The Bello Restaurant. All rights reserved.
            </p>
            <p className="text-accent text-sm">
              Made with ❤️ in Rwanda by the{" "}
              <a 
                href="https://www.sitecraftersz.co/" 
                className="underline hover:text-warm-orange transition-colors duration-300" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Sitecrafters Team
              </a>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://maps.app.goo.gl/7CmyR4qdaDpYSdYc8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-warm-orange transition-colors duration-300 text-sm"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;