import React from 'react';
import { Leaf, Phone, MapPin, Mail, Globe } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;