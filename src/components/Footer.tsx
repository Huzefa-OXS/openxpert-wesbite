import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary to-primary-medium text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">OX</span>
              </div>
              <span className="text-xl font-bold">OpenXpert Solutions</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering businesses through modern technology solutions. Your trusted IT partner.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors duration-300">Products</Link></li>
              <li><Link to="/portfolio" className="text-white/80 hover:text-white transition-colors duration-300">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300">AMC Services</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300">Web Development</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300">App Development</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors duration-300">IT Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">Ajman Free Zone – Neuventures</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">+971 XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">info@openxpert.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} OpenXpert Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
