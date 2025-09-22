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

    if (!formData.name || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate sending form (here you'd call an API or backend)
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
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-steel-grey-light max-w-3xl mx-auto">
            Ready to start your project? Contact us today for a free consultation 
            and competitive quote on all your logging and trucking needs.
          </p>
        </div>

        {/* Grid Layout */}
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
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="name" className="text-steel-grey-light">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground w-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Label htmlFor="phone" className="text-steel-grey-light">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-border text-foreground w-full"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email" className="text-steel-grey-light">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground w-full"
                  />
                </div>

                {/* Service Select */}
                <div className="flex flex-col space-y-2">
                  <Label className="text-steel-grey-light">Service Needed *</Label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger className="bg-input border-border text-foreground w-full">
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

                {/* Date */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="preferredDate" className="text-steel-grey-light">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground w-full"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="message" className="text-steel-grey-light">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    className="bg-input border-border text-foreground h-24 w-full"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg glow-green"
                >
                  Submit Appointment Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info (unchanged) */}
          <div className="space-y-8">
            {/* Phone / Email / Location / Hours */}
            {/* ... your existing Contact Info and Social cards here ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
