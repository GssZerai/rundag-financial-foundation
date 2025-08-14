import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-handshake.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-background to-secondary py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-rundag-blue leading-tight">
            Your Trusted Partner in 
            <span className="block text-rundag-red">Tax & Finance Solutions</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Helping businesses and individuals save time, money, and stress with professional tax planning, 
            audit services, and comprehensive financial consulting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="rundag-cta" 
              size="lg" 
              className="text-base px-8 py-6"
              onClick={() => window.open("tel:+251988743535", "_self")}
            >
              Book Free Consultation
            </Button>
            <Button 
              variant="rundag-outline" 
              size="lg" 
              className="text-base px-8 py-6"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rundag-blue/20 to-rundag-red/20 rounded-2xl blur-3xl"></div>
          <img 
            src={heroImage} 
            alt="Professional business consultation" 
            className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;