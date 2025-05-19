import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Brew Origin</h3>
            <p className="mb-4 text-amber-200">
              Connecting coffee lovers with exceptional beans from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#shop" className="text-amber-200 hover:text-white transition-colors">Shop</a>
              </li>
              <li>
                <a href="#about" className="text-amber-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">Brewing Guides</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Coffee Lane<br />San Francisco, CA 94110</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>hello@breworigin.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="mb-4 text-amber-200">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 bg-amber-800 text-amber-50 rounded-l focus:outline-none focus:ring-2 focus:ring-amber-500 border-none placeholder-amber-300 flex-grow"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-12 pt-8 text-center text-amber-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Brew Origin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;