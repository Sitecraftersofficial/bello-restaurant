import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            📞 Contact Us
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ready to book a table, plan an event, or ask a question?
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+250 XXX XXX XXX</p>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">hello@bellorestaurant.rw</p>
              </CardContent>
            </Card>
            
            <Card className="border-border hover:shadow-soft transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">📸</div>
                <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                <p className="text-muted-foreground">@the_bello__restaurant</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <ContactForm />
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-lg text-muted-foreground mb-4">
              🗣️ Don't just take our word for it — see what our guests say!
            </p>
            <a 
              href="https://maps.app.goo.gl/7CmyR4qdaDpYSdYc8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-warm-orange hover:text-terracotta font-semibold transition-colors duration-300"
            >
              🌍 Read Reviews on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;