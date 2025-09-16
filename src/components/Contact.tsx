import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast({
      title: "Appointment Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      preferredDate: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-steel-grey-light max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation 
            and competitive quote on all your logging and trucking needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Book Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-steel-grey-light">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-steel-grey-light">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-steel-grey-light">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div>
                  <Label className="text-steel-grey-light">Service Needed *</Label>
                  <Select onValueChange={handleServiceChange}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="timber-harvesting">Timber Harvesting & Logging</SelectItem>
                      <SelectItem value="trucking">Trucking & Heavy Hauling</SelectItem>
                      <SelectItem value="wood-chips">Wood Chip Deliveries</SelectItem>
                      <SelectItem value="land-clearing">Land Clearing & Forest Management</SelectItem>
                      <SelectItem value="firewood">Firewood Supply</SelectItem>
                      <SelectItem value="equipment">Equipment Contracting</SelectItem>
                      <SelectItem value="other">Other / Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="preferredDate" className="text-steel-grey-light">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-steel-grey-light">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    className="bg-input border-border text-foreground h-24"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg glow-green"
                >
                  Submit Appointment Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="card-gradient border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-steel-grey-light">(518) 734-XXXX</p>
                      <p className="text-sm text-steel-grey">Call for immediate assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-steel-grey-light">info@cbenjaminlogging.com</p>
                      <p className="text-sm text-steel-grey">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-forest-green flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-steel-grey-light">Lanesville, New York</p>
                      <p className="text-sm text-steel-grey">Serving the greater NY region</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-steel-grey flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Hours</h4>
                      <p className="text-steel-grey-light">Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p className="text-steel-grey-light">Saturday: 8:00 AM - 4:00 PM</p>
                      <p className="text-sm text-steel-grey">Emergency services available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media & Quick Contact */}
            <Card className="card-gradient border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Connect With Us</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/Lanesville-New-York-112890455391840/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-steel-grey-light hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span>Follow us on Facebook</span>
                  </a>
                  
                  <div className="pt-4 border-t border-border">
                    <Button 
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 glow-red"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now for Immediate Service
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;