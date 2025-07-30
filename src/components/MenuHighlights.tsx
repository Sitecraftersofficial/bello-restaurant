import { Card, CardContent } from "@/components/ui/card";

const MenuHighlights = () => {
  const signatureDishes = [
    { name: "Ozix Chicken Wings", price: "RWF 4,500", emoji: "🍗" },
    { name: "Mini Quarter Chicken", price: "RWF 4,500", emoji: "🍗" },
    { name: "Grilled Brochettes", price: "Market Price", emoji: "🥩", subtitle: "(beef, goat, or chicken)" },
    { name: "Bello Burger", price: "Market Price", emoji: "🍔" },
    { name: "Chips + Chicken Combo", price: "Market Price", emoji: "🍟" },
  ];

  const drinksAndMore = [
    { name: "Fresh Juices", emoji: "🧃" },
    { name: "Great Coffee", emoji: "☕" },
    { name: "Cocktails, Wine & Beer", emoji: "🍸" },
    { name: "Great Desserts", emoji: "🍰" },
    { name: "Small Plates & Quick Bites", emoji: "🍽" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🍴 Menu Highlights
          </h2>
          <p className="text-xl text-muted-foreground">
            Full menu available in-house
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Signature Dishes */}
          <div>
            <h3 className="text-3xl font-bold text-warm-orange mb-8 text-center">
              Signature Dishes
            </h3>
            <div className="space-y-4">
              {signatureDishes.map((dish, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{dish.emoji}</span>
                        <div>
                          <h4 className="font-semibold text-foreground">{dish.name}</h4>
                          {dish.subtitle && (
                            <p className="text-sm text-muted-foreground">{dish.subtitle}</p>
                          )}
                        </div>
                      </div>
                      <span className="font-bold text-warm-orange">{dish.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Drinks & Offerings */}
          <div>
            <h3 className="text-3xl font-bold text-warm-orange mb-8 text-center">
              Drinks & Offerings
            </h3>
            <div className="space-y-4">
              {drinksAndMore.map((item, index) => (
                <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;