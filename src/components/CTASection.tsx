import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-rundag-red text-rundag-red-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">
            Let's Make Your Finances Work for You — 
            <span className="block">Book Your Free Consultation Today!</span>
          </h2>
          
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Take the first step towards financial success with our expert guidance and personalized solutions.
          </p>

          <Button 
            variant="rundag-outline" 
            size="lg" 
            className="bg-rundag-red-foreground text-rundag-red border-rundag-red-foreground hover:bg-transparent hover:text-rundag-red-foreground hover:border-rundag-red-foreground text-lg px-12 py-6 font-semibold"
            onClick={() => window.open("tel:+251988743535", "_self")}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;