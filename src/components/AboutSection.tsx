import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rundag-blue/20 to-rundag-red/20 rounded-2xl blur-2xl"></div>
            <img 
              src={teamPhoto}
              alt="Rundag Business Professional Team" 
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-rundag-blue">
              About Rundag
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Laser in puritatas professionales, resports at in noticia morning forwm hat invested 
              in ovarianing, general, streetit, mocielor und meuwifor. Our team brings decades of 
              combined experience in tax planning, financial consulting, and business advisory services.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We pride ourselves on delivering personalized, professional service that helps our clients 
              navigate complex financial challenges and achieve their business goals. Our expertise spans 
              tax preparation, audit services, compliance management, and strategic financial planning.
            </p>

            <div className="pt-4">
              <Button variant="rundag" size="lg" className="px-8">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;