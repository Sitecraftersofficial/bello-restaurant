import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reservationType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      reservationType: 'general'
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="border-border shadow-soft">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Send className="text-warm-orange" size={24} />
          Send us a message
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your full name"
                className="border-border focus:border-warm-orange focus:ring-warm-orange"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="border-border focus:border-warm-orange focus:ring-warm-orange"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+250 XXX XXX XXX"
              className="border-border focus:border-warm-orange focus:ring-warm-orange"
            />
          </div>

          <div>
            <label htmlFor="reservationType" className="block text-sm font-medium text-foreground mb-2">
              Type of Inquiry
            </label>
            <select
              id="reservationType"
              name="reservationType"
              value={formData.reservationType}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-md focus:border-warm-orange focus:ring-warm-orange bg-background text-foreground"
            >
              <option value="general">General Inquiry</option>
              <option value="reservation">Table Reservation</option>
              <option value="event">Private Event</option>
              <option value="catering">Catering Service</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your reservation, event, or any questions you have..."
              rows={4}
              className="border-border focus:border-warm-orange focus:ring-warm-orange resize-none"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-warm-orange hover:bg-terracotta text-cream font-semibold py-3 rounded-lg shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            <Send size={18} className="mr-2" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;