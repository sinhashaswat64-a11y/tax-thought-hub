import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tax-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Professional tax consultation" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-tax-gold font-semibold tracking-wide">
                EXPERTISE - PRECISION ALWAYS! DEDICATED TO TRUST. COMMITTED TO QUALITY
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Think About Tax
              </h1>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed">
              At Think About Tax, we are dedicated to providing exceptional tax and financial services 
              tailored to meet your unique needs. Your trusted partner for comprehensive tax solutions 
              and financial planning since our establishment.
            </p>
            
            <Button 
              size="lg" 
              className="bg-tax-gold text-tax-navy hover:bg-tax-gold/90 shadow-glow font-semibold px-8 py-6 text-lg"
            >
              Contact Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src={heroImage} 
                alt="Tax professionals at work" 
                className="w-full rounded-lg shadow-professional"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-tax-gold/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary-glow/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;