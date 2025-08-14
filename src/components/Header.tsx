import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top Bar */}
      <div className="bg-rundag-blue text-rundag-blue-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+1-528-738-7830</span>
          </div>
          <Button variant="rundag" size="sm">
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
          <a href="#resources" className="text-foreground hover:text-rundag-blue transition-colors font-medium">
            Resources
          </a>
          <a href="#contact" className="text-foreground hover:text-rundag-blue transition-colors font-medium">
            Contact
          </a>
        </nav>

        <Button variant="rundag" className="hidden md:inline-flex">
          Book Consultation
        </Button>
      </div>
    </div>
  );
};

export default Header;