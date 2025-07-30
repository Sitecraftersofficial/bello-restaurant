import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenuHighlights = () => {
  const signatureDishes = [
    { name: "Ozix Chicken Wings", price: "RWF 4,500", emoji: "🍗" },
    { name: "Mini Quarter Chicken", price: "RWF 4,500", emoji: "🍗" },
    { name: "Grilled Brochettes", price: "RWF 4,500", emoji: "🥩", subtitle: "(beef, goat, or chicken)" },
    { name: "Bello Burger", price: "RWF 4,500", emoji: "🍔" },
    { name: "Chips + Chicken Combo", price: "RWF 4,500", emoji: "🍟" },
  ];

  const drinksAndMore = [
    { name: "Fresh Juices", emoji: "🧃", price: "RWF 1,500" },
    { name: "Great Coffee", emoji: "☕", price: "RWF 2,000" },
    { name: "Cocktails, Wine & Beer", emoji: "🍸", price: "RWF 3,000" },
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

        <div className="max-w-6xl mx-auto lg:p-4">
          <Tabs defaultValue="signature" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-0 sm:h-10 mb-10">
              <TabsTrigger value="signature" className="text-base sm:text-lg w-full">
                🍗 Signature Dishes
              </TabsTrigger>
              <TabsTrigger value="drinks" className="text-base sm:text-lg w-full">
                🍸 Drinks & Offerings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="signature" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drinksAndMore.map((item, index) => (
                  <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.emoji}</span>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.name}</h4>
                          </div>
                        </div>
                        <span className="font-bold text-warm-orange">{item.price}</span>
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