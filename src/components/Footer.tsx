import { Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-grey-dark text-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              C. Benjamin Logging & Trucking LLC
            </h3>
            <p className="text-steel-grey-light mb-6 max-w-md">
              Professional logging and trucking services in New York. 
              Over 25 years of experience in timber harvesting, heavy hauling, 
              and forest management.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Lanesville-New-York-112890455391840/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-steel-grey-light hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-steel-grey-light hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-steel-grey-light hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-steel-grey-light hover:text-primary transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-steel-grey-light hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-steel-grey-light">(518) 734-XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-steel-grey-light">info@cbenjaminlogging.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-steel-grey-light">Lanesville, New York</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-grey mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-steel-grey text-sm">
            © 2024 C. Benjamin Logging & Trucking LLC. All rights reserved.
          </p>
          <p className="text-steel-grey text-sm mt-2 md:mt-0">
            Licensed & Insured • Professional Logging Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;