import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Expert tax professionals with years of experience",
    "Comprehensive understanding of current tax laws",
    "Personalized service tailored to your needs",
    "Transparent pricing with no hidden fees",
    "Timely filing and compliance management",
    "Strategic tax planning for optimal savings",
    "Dedicated client support throughout the year",
    "Proven track record of client satisfaction"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Think About Tax?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              When it comes to tax consultation and financial planning, experience and expertise matter. 
              Our commitment to excellence and client satisfaction sets us apart in the industry.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-primary-light mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get Expert Tax Consultation</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Free Initial Consultation</h4>
                  <p className="text-sm text-gray-200">
                    Schedule a complimentary consultation to discuss your tax needs and explore our services.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Comprehensive Tax Review</h4>
                  <p className="text-sm text-gray-200">
                    We'll review your current tax situation and identify opportunities for optimization.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Ongoing Support</h4>
                  <p className="text-sm text-gray-200">
                    Year-round support for all your tax-related questions and compliance needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;