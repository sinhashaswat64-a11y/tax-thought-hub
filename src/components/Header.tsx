import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-gradient-primary text-primary-foreground py-3">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 98320 07515</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>thinkabout.tax@gmail.com</span>
              </div>
            </div>
            <div className="text-xs">
              We are open 10:30 AM - 7:30 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background shadow-professional py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Think About Tax
              </div>
              <div className="text-xs text-muted-foreground">
                <div>TAX CONSULTANTS</div>
                <div>INDIA</div>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Tax Planning</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Knowledge Bank</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
            </div>

            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Get Consultation
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;