import { Calculator, Shield, TrendingUp, Users } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Tax Planning & Filing",
    description: "Professional tax preparation and strategic planning to minimize your liability while maximizing deductions and compliance."
  },
  {
    icon: Shield,
    title: "Audit & Compliance", 
    description: "Comprehensive audit services and regulatory compliance assistance to ensure your business meets all financial requirements."
  },
  {
    icon: TrendingUp,
    title: "Business Finance Consulting",
    description: "Strategic financial planning and business growth consulting to help you make informed decisions and achieve your goals."
  },
  {
    icon: Users,
    title: "Payroll & VAT/GST Advisory",
    description: "Complete payroll management and tax advisory services to streamline your operations and ensure compliance."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-rundag-blue mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="bg-rundag-blue/10 rounded-lg p-3 w-fit mb-4 group-hover:bg-rundag-blue group-hover:text-rundag-blue-foreground transition-all duration-300">
                <service.icon className="h-8 w-8 text-rundag-blue group-hover:text-rundag-blue-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-rundag-red mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;