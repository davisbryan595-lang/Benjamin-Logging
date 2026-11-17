import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sections = ["home", "services", "about", "gallery", "contact"];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    if (window.location.hash) {
      requestAnimationFrame(() => document.getElementById(window.location.hash.slice(1))?.scrollIntoView());
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || pathname !== "/"
        ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-lg"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center mt-6" aria-label="C. Benjamin Logging and Trucking home">
            <img src="/logo.png" alt="C. Benjamin Logging and Trucking" className="h-13 w-24 object-contain" />
          </Link>

          <div className="hidden md:flex items-baseline space-x-8">
            {sections.map((section) => (
              <a
                key={section}
                href={`/#${section}`}
                onClick={(event) => {
                  if (pathname === "/") {
                    event.preventDefault();
                    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors duration-200" aria-current={pathname === "/blog" ? "page" : undefined}>Blog</Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors" aria-current={pathname === "/blog" ? "page" : undefined}>Blog</Link>
            <a href="tel:+15182497069" className="glow-red flex items-center border px-3 py-2 rounded-md hover:bg-red-600 hover:text-white transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
