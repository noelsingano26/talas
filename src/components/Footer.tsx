import React from 'react';
import { Phone, MapPin, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-green-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About TalaS</h3>
              <p className="text-sm">Providing innovative solutions for farmers, focusing on livestock health and productivity.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-green-200">About Us</a></li>
                <li><a href="#services" className="hover:text-green-200">Services</a></li>
                <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Office 6 LaPierre House, Goba Rd, Goba, Dar es Salaam</li>
                <li className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +255688891988 / +255688897449</li>
                <li className="flex items-center"><Mail className="w-4 h-4 mr-2" /> info@talassolutions.com</li>
                <li className="flex items-center"><Globe className="w-4 h-4 mr-2" /> www.talassolutions.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="py-2 px-3 w-full text-gray-700 rounded-l" />
                <button type="submit" className="bg-green-600 hover:bg-green-700 py-2 px-4 rounded-r">Subscribe</button>
              </form>
            </div>
          </div>
          <div className="w-full h-64 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.8754543254!2d39.2079871!3d-6.7929444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4e9f0a5c7e3d%3A0x8f6c7c3f2f2f2f2f!2sGoba%20Rd%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p>&copy; 2023 TalaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;