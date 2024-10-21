import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-green-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="w-8 h-8 mr-2" />
          <span className="text-2xl font-bold">TalaS</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-green-200">About Us</a></li>
            <li><a href="#services" className="hover:text-green-200">Services</a></li>
            <li><a href="#contact" className="hover:text-green-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;