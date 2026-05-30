import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ramya3 from '../../assets/ramya3.png';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* --- Left Column: Single Large Image --- */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src={ramya3} 
            alt="RO Installation and Service" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Optional: Subtle gradient overlay to make it look premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>

        {/* --- Right Column: All Content --- */}
        <div className="flex flex-col">
          
          {/* Heading & Intro */}
          <h2 className="text-[#022B87] text-4xl sm:text-5xl font-serif font-bold mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            With over 18+ years of experience, Ramya Agencies provides trusted RO sales, installation, AMC, and water purifier service. We specialize in multi-brand RO service, filter replacement, and commercial water purification solutions with reliable customer support and expert technicians.
          </p>
          
          {/* Service Locations */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-700 mb-10 border-b border-gray-100 pb-8">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#28A7FF]" /> Mailam
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#28A7FF]" /> Panruti
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#28A7FF]" /> Vanur
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-[#28A7FF]" /> Villupuram
            </span>
          </div>

          {/* Features (2x2 Grid, Numbers Removed) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
            
            {/* Item 1 */}
            <div className="flex flex-col">
              <h3 className="text-gray-900 font-bold text-lg mb-1">Multi Brand RO</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sales and service support for leading RO water purifier brands.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col">
              <h3 className="text-gray-900 font-bold text-lg mb-1">Expert Install</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional installation for residential and commercial systems.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col">
              <h3 className="text-gray-900 font-bold text-lg mb-1">AMC & Maintenance</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reliable AMC, filter replacement, and periodic maintenance.
              </p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col">
              <h3 className="text-gray-900 font-bold text-lg mb-1">Fast Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Quick response and trusted after-sales service for all needs.
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <div className="mt-2">
            <Link 
              to="/about"
              className="inline-block bg-[#022B87] text-white font-medium px-8 py-3.5 rounded-md shadow-[0_8px_20px_rgba(2,43,135,0.2)] hover:shadow-[0_12px_25px_rgba(2,43,135,0.3)] hover:bg-[#28A7FF] hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;