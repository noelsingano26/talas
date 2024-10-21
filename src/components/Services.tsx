import React from 'react';
import { Droplet, Tag, Activity, Zap, Feather, Thermometer } from 'lucide-react';

const services = [
  { icon: Droplet, title: 'Artificial Insemination Inputs', description: 'High quality liquid nitrogen tanks, equipment and inputs (IMV).' },
  { icon: Tag, title: 'Animal Identification', description: 'Identify your animals with high quality ear tags (Datamars).' },
  { icon: Zap, title: 'Minerals', description: 'Five types of mineral boluses to address each cow individually. Mineral boluses for calves in different age groups (Agriprom).' },
  { icon: Activity, title: 'Livestock Monitoring', description: 'Innovative monitoring on heat and health via phone app and website (SenseHub/Allflex).' },
  { icon: Feather, title: 'Concentrates', description: 'High quality pig and dairy concentrates (Trouw Nutrition).' },
  { icon: Thermometer, title: 'Mastitis and Fly Control', description: 'Rapid milk tests, CMT trays, Vitamint cream, Vitesalve cream.' },
];

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="w-12 h-12 text-green-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services and Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;