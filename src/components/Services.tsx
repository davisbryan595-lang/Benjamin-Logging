import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, TreePine, Logs, Zap, Flame, Wrench } from 'lucide-react';

const services = [
  {
    icon: TreePine,
    title: "Timber Harvesting & Logging",
    description: "Professional timber harvesting with sustainable forestry practices and modern equipment.",
    features: ["Selective cutting", "Clear cutting", "Sustainable practices", "Forest management"]
  },
  {
    icon: Truck,
    title: "Trucking & Heavy Hauling",
    description: "Reliable transportation services for all your heavy hauling needs across New York State.",
    features: ["Heavy machinery transport", "Timber hauling", "Equipment delivery", "Licensed & insured"]
  },
  {
    icon: Logs,
    title: "Wood Chip Deliveries",
    description: "High-quality wood chips delivered in 30-yard loads for landscaping and biomass needs.",
    features: ["30-yard loads", "Fresh wood chips", "Bulk pricing", "Scheduled delivery"],
    highlight: true
  },
  {
    icon: Zap,
    title: "Land Clearing & Forest Management",
    description: "Complete land clearing services for development, agriculture, and forest management.",
    features: ["Site preparation", "Brush clearing", "Tree removal", "Stump grinding"]
  },
  {
    icon: Flame,
    title: "Firewood Supply",
    description: "Seasoned hardwood firewood cut and split to your specifications.",
    features: ["Seasoned hardwood", "Cut & split", "Bulk delivery", "Cord measurements"]
  },
  {
    icon: Wrench,
    title: "Equipment Contracting",
    description: "Professional logging equipment and operator services for specialized projects.",
    features: ["Experienced operators", "Modern equipment", "Project consultation", "Flexible scheduling"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-steel-grey-light max-w-3xl mx-auto">
            From forest to market, we provide comprehensive logging and trucking services 
            with decades of experience and modern equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className={`hover-lift card-gradient border-border ${
                  service.highlight ? 'border-secondary glow-red' : ''
                }`}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    service.highlight ? 'bg-secondary' : 'bg-primary'
                  }`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-steel-grey-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-steel-grey-light">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-border inline-block">
            <h3 className="text-2xl font-bold text-secondary mb-4">Wood Chip Deliveries Available!</h3>
            <p className="text-steel-grey-light">
              Fresh wood chips delivered in 30-yard loads. Perfect for landscaping, 
              mulching, and biomass applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;