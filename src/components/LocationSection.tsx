const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            📍 Location & Hours
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Location Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-warm-orange mb-4">Address</h3>
                <p className="text-lg text-foreground">
                  📌 2499+57P, KK 21 Ave, Kigali
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-warm-orange mb-4">Hours</h3>
                <p className="text-lg text-foreground">
                  🕒 Daily – 09:00 AM to 10:00 PM
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-foreground">
                  <span className="text-green-600">✅</span>
                  <span>Free street parking</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <span className="text-green-600">✅</span>
                  <span>Accepts reservations</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <span className="text-green-600">✅</span>
                  <span>Table service</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <span className="text-green-600">✅</span>
                  <span>Catering available</span>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="bg-card rounded-lg overflow-hidden shadow-soft">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.431334982697!2d30.115612173886763!3d-1.982018036780017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7fa3ec36d9b%3A0xa4977bcc2d298fc0!2sTHE%20BELLO%20RESTAURANT%20%F0%9F%91%8C!5e0!3m2!1sen!2srw!4v1753890339948!5m2!1sen!2srw" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;