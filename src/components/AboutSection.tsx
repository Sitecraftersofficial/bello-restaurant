const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            📖 About Us
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-warm-orange mb-8">
            Grilled. Spiced. Served with love.
          </h3>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              At Bello, food is more than a meal — it's a memory in the making. We specialize in local favorites and international twists: juicy brochettes, crispy wings, mini chicken quarters, fresh juices, and more. All made fresh, all packed with flavor.
            </p>
            <p>
              Set in a cozy and casual atmosphere, we're proud to be part of the Kicukiro community — bringing people together, one plate at a time.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-semibold text-foreground mb-2">Casual Dining</h4>
              <p className="text-muted-foreground">Perfect for lunch with friends, solo dining, or dinner with family</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h4 className="font-semibold text-foreground mb-2">Fresh Grilled</h4>
              <p className="text-muted-foreground">Everything made fresh daily with authentic spices and flavors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="font-semibold text-foreground mb-2">Community Heart</h4>
              <p className="text-muted-foreground">Proud to serve the Kicukiro community with warmth and quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;