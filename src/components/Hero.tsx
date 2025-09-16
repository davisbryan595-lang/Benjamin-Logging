import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-foreground">
            Reliable Logging & Trucking Services in New York
          </h2>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl mb-8 text-steel-grey-light max-w-3xl mx-auto">
            From timber hauling to wood chip delivery, we've got you covered.
          </p>
        </div>

        <div
          className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          style={{ animationDelay: '0.8s' }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg glow-green"
            onClick={scrollToContact}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-4 text-lg glow-red"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now
          </Button>
        </div>

        <div className="fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 inline-block border border-border">
            <p className="text-steel-grey-light mb-2">Call us directly:</p>
            <p className="text-3xl font-bold text-secondary">(518) 734-XXXX</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-steel-grey-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-steel-grey-light rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
