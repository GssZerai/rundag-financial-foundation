import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top Bar */}
      <div className="bg-rundag-blue text-rundag-blue-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@rundagbusiness.com" 
              className="flex items-center gap-2 hover:text-rundag-blue-foreground/80 transition-colors cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              <span>info@rundagbusiness.com</span>
            </a>
            <a 
              href="tel:+251988743535" 
              className="flex items-center gap-2 hover:text-rundag-blue-foreground/80 transition-colors cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>+251 988743535</span>
            </a>
          </div>
          <Button 
            variant="rundag" 
            size="sm"
            onClick={() => window.open("tel:+251988743535", "_self")}
          >
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/b59e6ba8-3fde-435c-9459-d31683cabebf.png" 
            alt="Rundag Business Logo" 
            className="h-12 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-rundag-blue transition-colors font-medium">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-rundag-blue transition-colors font-medium">
            About
          </a>
          <a href="#services" className="text-foreground hover:text-rundag-blue transition-colors font-medium">
            Services
          </a>
          <a 
            href="#services" 
            className="text-foreground hover:text-rundag-blue transition-colors font-medium cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Resources
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-rundag-blue transition-colors font-medium cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </a>
        </nav>

        <Button 
          variant="rundag" 
          className="hidden md:inline-flex"
          onClick={() => window.open("tel:+251988743535", "_self")}
        >
          Book Consultation
        </Button>
      </div>
    </div>
  );
};

export default Header;