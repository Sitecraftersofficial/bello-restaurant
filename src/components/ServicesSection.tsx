import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "🌟 Accessibility",
      items: [
        "Wheelchair-accessible car park",
        "Wheelchair-accessible toilet"
      ]
    },
    {
      title: "🚀 Service Options",
      items: [
        "Dine-in",
        "Takeaway", 
        "Delivery"
      ]
    },
    {
      title: "🍽 Dining & Atmosphere",
      items: [
        "Lunch & Dinner",
        "Dessert & Small plates",
        "Casual & Cozy",
        "Groups welcome",
        "Solo diners feel at home"
      ]
    },
    {
      title: "✨ Amenities",
      items: [
        "Bar on site",
        "Clean toilets",
        "Great crowd, friendly service"
      ]
    },
    {
      title: "💳 Payments Accepted",
      items: [
        "Credit cards",
        "Debit cards",
        "NFC mobile payments"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need for a perfect dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-warm-orange">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-foreground">
                      <span className="text-green-600 text-sm">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;