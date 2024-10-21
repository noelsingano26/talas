import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Innovative Solutions for Farmers</h1>
          <p className="text-xl mb-8">Empowering agriculture through technology and expertise</p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;