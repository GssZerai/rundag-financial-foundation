import { Award, DollarSign, Heart, BookOpen } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Professionals",
    description: "Our certified experts bring years of industry experience and stay current with the latest tax laws and financial regulations."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "We believe in clear, upfront pricing with no hidden fees. You'll know exactly what to expect from our professional services."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every client receives tailored solutions designed specifically for their unique financial situation and business needs."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-rundag-blue mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted expertise, transparent service, and personalized solutions for your financial success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-rundag-blue/10 rounded-full p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-rundag-blue group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-10 w-10 text-rundag-blue group-hover:text-rundag-blue-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold text-rundag-blue mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;