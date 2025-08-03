import { Card, CardContent } from "@/components/ui/card";
import taxIcon1 from "@/assets/tax-icon-1.jpg";
import taxIcon2 from "@/assets/tax-icon-2.jpg";
import taxIcon3 from "@/assets/tax-icon-3.jpg";

const Services = () => {
  const services = [
    {
      icon: taxIcon1,
      title: "Tax Consultation & Compliance",
      description: "Comprehensive tax planning and compliance services to navigate complex tax environments with confidence and accuracy."
    },
    {
      icon: taxIcon2,
      title: "Direct & Indirect Taxes",
      description: "Expert guidance on income tax, GST, and other tax matters to ensure full compliance and optimal tax efficiency."
    },
    {
      icon: taxIcon3,
      title: "Financial Advisory Services",
      description: "Strategic financial planning and investment advisory tailored to help you achieve your financial goals."
    },
    {
      icon: taxIcon1,
      title: "Business Tax Planning",
      description: "Specialized tax strategies for businesses to minimize tax liability while maintaining full regulatory compliance."
    },
    {
      icon: taxIcon2,
      title: "Audit & Assurance",
      description: "Professional audit services and statutory compliance to ensure transparency and trust in financial reporting."
    },
    {
      icon: taxIcon3,
      title: "Corporate Advisory",
      description: "Expert corporate advisory services for business restructuring, mergers, and strategic financial decisions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of services designed to address the diverse tax and financial needs of 
            our clients, including comprehensive solutions for individuals and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-0 shadow-professional hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-primary p-4 group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={service.icon} 
                      alt={service.title}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;