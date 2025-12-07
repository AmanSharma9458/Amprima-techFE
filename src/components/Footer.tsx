// src/components/Footer.tsx

import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Amprima</span>
                <span className="text-xl font-light text-gray-400"> Tech</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Transforming businesses with cutting-edge digital solutions. Your trusted partner for web and mobile development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Website Development
              </li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Android App Development
              </li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">
                iOS App Development
              </li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">
                Custom Software Solutions
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919675859742"
                  className="flex items-start space-x-3 hover:text-blue-400 transition-colors text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>+91 96758 59742</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sayyedaqib8408@gmail.com"
                  className="flex items-start space-x-3 hover:text-blue-400 transition-colors text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>sayyedaqib8408@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Salem, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Amprima Tech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
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