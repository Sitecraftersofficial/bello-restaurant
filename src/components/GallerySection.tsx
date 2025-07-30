import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      alt: "Signature dish presentation",
      title: "Signature Dishes"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=800&q=80",
      alt: "Cozy restaurant interior",
      title: "Elegant Atmosphere"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80",
      alt: "Chef at work",
      title: "Culinary Excellence"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&w=800&q=80",
      alt: "Fine dining experience",
      title: "Fine Dining"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      alt: "Fresh ingredients",
      title: "Fresh Ingredients"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      alt: "Kitchen craftsmanship",
      title: "Kitchen Craftsmanship"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the ambiance and artistry that defines our restaurant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover-scale"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-lg font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-muted-foreground transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-muted-foreground transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-muted-foreground transition-colors"
            >
              <ChevronRight size={48} />
            </button>

            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-muted-foreground">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;