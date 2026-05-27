import React from 'react';
import { 
  Droplet, 
  Settings, 
  ShieldCheck, 
  Wrench, 
  Tag, 
  Smile 
} from 'lucide-react';
import premiumImage from '../../assets/premium_water_purification.png';

const WhyChooseUs = () => {
  return (
    <section id="whychoose" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[#28A7FF] font-semibold text-base uppercase tracking-wider mb-2 block">Our Advantages</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#022B87] leading-tight">
            Why Choose Our Water Solutions?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering healthy, safe, and crystal-clear drinking water with advanced purification technology and unwavering commitment to quality.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Column: Value Proposition Grid --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(31,131,240,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center mb-5 group-hover:bg-[#1F83F0] transition-colors duration-300">
                <Droplet className="w-7 h-7 text-[#1F83F0] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#022B87] mb-2">Pure & Safe Drinking Water</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience the highest standard of water purity, completely free from harmful contaminants.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(31,131,240,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center mb-5 group-hover:bg-[#1F83F0] transition-colors duration-300">
                <Settings className="w-7 h-7 text-[#1F83F0] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#022B87] mb-2">Advanced Filtration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                State-of-the-art RO and UV technology engineered for optimal water treatment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(31,131,240,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center mb-5 group-hover:bg-[#1F83F0] transition-colors duration-300">
                <ShieldCheck className="w-7 h-7 text-[#1F83F0] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#022B87] mb-2">18+ Years Trusted</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A proven legacy of reliability and excellence in the water purification industry.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(31,131,240,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center mb-5 group-hover:bg-[#1F83F0] transition-colors duration-300">
                <Wrench className="w-7 h-7 text-[#1F83F0] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#022B87] mb-2">Fast Installation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quick, hassle-free setup and responsive support from our expert technicians.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(31,131,240,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center mb-5 group-hover:bg-[#1F83F0] transition-colors duration-300">
                <Tag className="w-7 h-7 text-[#1F83F0] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#022B87] mb-2">Affordable AMC</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cost-effective annual maintenance contracts to keep your systems running perfectly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(31,131,240,0.1)] transition-all duration-300 border border-gray-100 group">
              <div className="w-14 h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center mb-5 group-hover:bg-[#1F83F0] transition-colors duration-300">
                <Smile className="w-7 h-7 text-[#1F83F0] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#022B87] mb-2">100% Satisfaction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated to exceeding your expectations with every service we provide.
              </p>
            </div>

          </div>

          {/* --- Right Column: Hero Image & Badge --- */}
          <div className="relative flex justify-center items-center h-full w-full mt-8 lg:mt-0">
            {/* Background Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#E1EFFF] rounded-full blur-3xl -z-10 opacity-70"></div>
            
            {/* Premium AI Image */}
            <div className="relative group">
              <img 
                src={premiumImage} 
                alt="Premium Water Purification Technology" 
                className="w-full max-w-[500px] h-auto object-cover rounded-2xl shadow-[0_20px_50px_rgba(2,43,135,0.15)] ring-4 ring-white transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Floating Quality Badge */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-700">
                <div className="w-12 h-12 bg-[#022B87] rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xl font-bold text-[#022B87]">ISO 9001</div>
                  <div className="text-sm text-gray-500 font-medium">Certified Quality</div>
                </div>
              </div>

              {/* Floating Trust Badge */}
              <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 z-20 bg-[#28A7FF] text-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-in slide-in-from-top-4 duration-700 delay-150">
                <div className="flex flex-col text-right">
                  <div className="text-2xl font-bold leading-none">18+</div>
                  <div className="text-xs font-medium uppercase tracking-wider opacity-90 mt-1">Years</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;