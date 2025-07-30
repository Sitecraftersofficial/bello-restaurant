import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🍴 Menu Highlights
          </h2>
          <p className="text-xl text-muted-foreground">
            Full menu available in-house
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="signature" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="signature" className="text-lg py-3">
                🍗 Signature Dishes
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-lg py-3">
                🍸 Drinks & Offerings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="signature" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </TabsContent>
            
            <TabsContent value="drinks" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;