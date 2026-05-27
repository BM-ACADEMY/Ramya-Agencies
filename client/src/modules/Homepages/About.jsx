import React from 'react';
import { Check, MapPin } from 'lucide-react';
import ramya3 from '../../assets/ramya3.png';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* --- Left Column: Image Composition --- */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px]">
          
          {/* Main Background Image (Right/Bottom aligned) */}
          <img 
            src={ramya3} 
            alt="Water bottle filling process" 
            className="absolute right-0 bottom-0 w-[80%] h-[90%] object-cover bg-gray-200"
          />



          {/* Floating Trust Badge */}
          <div className="absolute left-[5%] top-[5%] z-20 bg-[#022B87] text-white p-6 w-[130px] h-[130px] flex flex-col items-center justify-center shadow-lg">
            <span className="text-4xl font-bold flex items-start">
              18<span className="text-xl mt-1">+</span>
            </span>
            <span className="text-xs text-center leading-snug mt-1">
              Years<br />Experience
            </span>
          </div>
        </div>

        {/* --- Right Column: Content & Features --- */}
        <div className="flex flex-col">
          
          {/* Section Kicker */}
          <span className="text-[#28A7FF] font-semibold text-base mb-2">
            About Us
          </span>

          {/* Main Headline */}
          <h2 className="text-[#022B87] text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] mb-5">
            Healthy Mineral Water for You & Your Family
          </h2>

          {/* Intro Paragraph */}
          <p className="text-[#8A8A8A] text-sm sm:text-base leading-relaxed mb-8">
            With over 18 years of dedicated experience in the water purifier industry, we have built our reputation on trusted service and unwavering customer satisfaction. We are committed to delivering premium, safe, and hygienic drinking water solutions for your home and business.
          </p>

          {/* Branches Section */}
          <div className="mb-8">
            <h3 className="text-[#022B87] font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#28A7FF]" />
              Our 2 Branches
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#28A7FF] text-xs font-bold uppercase tracking-wider mb-1 block">Branch 1</span>
                <h4 className="text-[#022B87] font-bold text-lg mb-1">CIGA</h4>
                <p className="text-[#8A8A8A] text-sm flex items-center gap-1.5 mt-2 font-medium">
                  <MapPin className="w-4 h-4 text-[#28A7FF]" /> Panruti
                </p>
              </div>
              <div className="bg-white border border-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-[#28A7FF] text-xs font-bold uppercase tracking-wider mb-1 block">Branch 2</span>
                <h4 className="text-[#022B87] font-bold text-lg mb-1">Ramya Agencies</h4>
                <p className="text-[#8A8A8A] text-sm flex items-center gap-1.5 mt-2 font-medium">
                  <MapPin className="w-4 h-4 text-[#28A7FF]" /> Panruti
                </p>
              </div>
            </div>
          </div>

          {/* 2x2 Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 mb-10">
            
            {/* Feature 1 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#28A7FF] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[#022B87] font-bold text-base">Hygienic Mineral water</h3>
              </div>
              <p className="text-[#8A8A8A] text-sm leading-relaxed pl-9">
                Ensuring the highest standards of purity and safety in every drop.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#28A7FF] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[#022B87] font-bold text-base">Water Bottle Delivery</h3>
              </div>
              <p className="text-[#8A8A8A] text-sm leading-relaxed pl-9">
                Prompt and reliable delivery service right to your doorstep.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#28A7FF] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[#022B87] font-bold text-base">Water Filtration</h3>
              </div>
              <p className="text-[#8A8A8A] text-sm leading-relaxed pl-9">
                Advanced RO and UV filtration systems for ultimate protection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-[#28A7FF] w-6 h-6 rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-white w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-[#022B87] font-bold text-base">Water Refilling</h3>
              </div>
              <p className="text-[#8A8A8A] text-sm leading-relaxed pl-9">
                Eco-friendly and convenient refilling stations for your daily needs.
              </p>
            </div>

          </div>

          {/* CTA Button */}
          <div>
            <a 
              href="#about" 
              className="inline-block bg-[#28A7FF] hover:bg-[#022B87] text-white font-medium px-8 py-3.5 rounded-full transition-colors duration-300"
            >
              More About Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;