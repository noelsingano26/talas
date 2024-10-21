import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          We help our farmers solve their challenges through providing customized services and inputs. We bring a wide range of solutions focusing on the reproduction and health of livestock: animal identification, animal monitoring on heat and health, bovine semen, different types of mineral boluses for goats, sheep, calves and cattle, artificial insemination equipment and inputs for cattle and pigs, concentrates for pigs.
        </p>
        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Farmer Focused</h3>
            <p className="text-gray-600">Tailored solutions for farmers</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">Cutting-edge agricultural technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;