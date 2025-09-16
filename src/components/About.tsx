import { Card, CardContent } from '@/components/ui/card';
import { Shield, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "25+" },
    { icon: Award, label: "Projects Completed", value: "500+" },
    { icon: Users, label: "Satisfied Clients", value: "200+" },
    { icon: Shield, label: "Safety Record", value: "100%" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="text-primary">C. Benjamin</span>
            </h2>
            <p className="text-xl text-steel-grey-light mb-6">
              For over two decades, C. Benjamin Logging & Trucking LLC has been a trusted name 
              in the New York logging and transportation industry. Based in Lanesville, we combine 
              traditional forestry expertise with modern equipment and sustainable practices.
            </p>
            <p className="text-lg text-steel-grey-light mb-8">
              Our commitment to safety, reliability, and environmental responsibility has made us 
              the go-to choice for timber companies, landowners, and contractors across the region. 
              From selective harvesting to heavy hauling, we deliver results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                <h4 className="font-bold text-primary mb-2">Licensed & Insured</h4>
                <p className="text-steel-grey-light text-sm">
                  Fully licensed commercial operation with comprehensive insurance coverage.
                </p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                <h4 className="font-bold text-secondary mb-2">Modern Equipment</h4>
                <p className="text-steel-grey-light text-sm">
                  State-of-the-art logging and trucking equipment maintained to the highest standards.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="fade-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="card-gradient border-border hover-lift">
                    <CardContent className="p-6 text-center">
                      <div className="mx-auto w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-secondary mb-2">
                        {stat.value}
                      </div>
                      <div className="text-steel-grey-light text-sm">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement */}
            <Card className="mt-8 card-gradient border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-steel-grey-light">
                  "To provide reliable, safe, and environmentally responsible logging and 
                  trucking services while building lasting relationships with our clients 
                  and supporting the sustainable management of New York's forests."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;