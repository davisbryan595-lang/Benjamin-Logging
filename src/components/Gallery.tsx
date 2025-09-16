import { useState } from 'react';
import { Card } from '@/components/ui/card';

// Placeholder images - in production these would be actual photos
const galleryImages = [
  {
    id: 1,
    title: "Logging Truck in Action",
    description: "Our heavy-duty logging truck transporting fresh timber",
    category: "Trucking"
  },
  {
    id: 2,
    title: "Timber Harvesting",
    description: "Professional timber harvesting with selective cutting",
    category: "Logging"
  },
  {
    id: 3,
    title: "Wood Chip Loading",
    description: "Loading wood chips for delivery - 30-yard loads available",
    category: "Wood Chips"
  },
  {
    id: 4,
    title: "Forest Management",
    description: "Land clearing and forest management services",
    category: "Management"
  },
  {
    id: 5,
    title: "Heavy Equipment",
    description: "Modern logging equipment in operation",
    category: "Equipment"
  },
  {
    id: 6,
    title: "Completed Project",
    description: "Before and after land clearing project",
    category: "Projects"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Trucking", "Logging", "Wood Chips", "Management", "Equipment", "Projects"];

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Work</span> in Action
          </h2>
          <p className="text-xl text-steel-grey-light max-w-3xl mx-auto">
            See our professional logging and trucking equipment in action. 
            Every project showcases our commitment to quality and safety.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-steel-grey-light hover:bg-primary/20 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id}
              className="hover-lift card-gradient border-border overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video bg-steel-grey-dark flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gradient-to-br from-steel-grey-dark to-steel-grey opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">🚛</span>
                    </div>
                    <p className="text-steel-grey-light">Photo Coming Soon</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {image.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-steel-grey-light">
                  {image.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-border p-8 inline-block">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see your project featured here?
            </h3>
            <p className="text-steel-grey-light mb-6">
              Contact us today to discuss your logging and trucking needs.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;