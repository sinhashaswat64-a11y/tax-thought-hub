import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tax-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-tax-gold">Think About Tax</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for comprehensive tax solutions and financial planning. 
              We're committed to helping you navigate the complex world of taxes with confidence.
            </p>
            <div className="flex items-center gap-2 text-tax-gold">
              <span className="font-semibold">TAX CONSULTANTS</span>
              <span className="text-gray-400">•</span>
              <span className="font-semibold">INDIA</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-tax-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tax Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Knowledge Bank</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-tax-gold">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tax Consultation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Income Tax Filing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GST Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Audit Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Corporate Advisory</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-tax-gold">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-tax-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-semibold">+91 98320 07515</p>
                  <p className="text-gray-300 text-sm">Call us for consultation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="text-tax-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-semibold">thinkabout.tax@gmail.com</p>
                  <p className="text-gray-300 text-sm">Email us your queries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-tax-gold mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-white font-semibold">10:30 AM - 7:30 PM</p>
                  <p className="text-gray-300 text-sm">Monday to Friday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Think About Tax. All rights reserved. | Designed for excellence in tax consultation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;