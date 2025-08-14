import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-rundag-blue text-rundag-blue-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo & Bio */}
          <div className="lg:col-span-1">
            <img 
              src="/lovable-uploads/b59e6ba8-3fde-435c-9459-d31683cabebf.png" 
              alt="Rundag Business Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-rundag-blue-foreground/80 leading-relaxed">
              With peis itseatonly save, gauntmalind to deres, fore and money cam services. 
              Professional tax and finance solutions for your business success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-rundag-blue-foreground/80 hover:text-rundag-blue-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-rundag-blue-foreground/80 hover:text-rundag-blue-foreground transition-colors">About</a></li>
              <li><a href="#services" className="text-rundag-blue-foreground/80 hover:text-rundag-blue-foreground transition-colors">Services</a></li>
              <li><a href="#contact" className="text-rundag-blue-foreground/80 hover:text-rundag-blue-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-rundag-blue-foreground/80">
              <li>Tax Planning</li>
              <li>Audit Services</li>
              <li>Business Consulting</li>
              <li>Payroll Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rundag-red" />
                <span className="text-rundag-blue-foreground/80">+1-528-738-7830</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rundag-red" />
                <span className="text-rundag-blue-foreground/80">info@rundagbusiness.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-rundag-blue-foreground/20 mt-12 pt-8 text-center">
          <p className="text-rundag-blue-foreground/60">
            © 2024 Rundag Business. All rights reserved. | Professional Tax & Finance Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;