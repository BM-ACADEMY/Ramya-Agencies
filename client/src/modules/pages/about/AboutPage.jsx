import React from 'react';
import { ShieldCheck, Wrench, Headphones, Settings, Award, Users, Cog, Droplet } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 flex flex-col">
      
      {/* 1. Feature Points Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <span className="text-[#28A7FF] font-bold text-sm tracking-widest uppercase block mb-2">Our Capabilities</span>
             <h2 className="text-[#0B1F3A] text-3xl md:text-4xl font-bold">Comprehensive Water Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(40,167,255,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Settings className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 leading-tight">Multi Brand RO Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete sales and service support for leading RO water purifier brands.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(40,167,255,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Wrench className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 leading-tight">Expert Installation Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional installation solutions for homes, offices, and commercial spaces.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(40,167,255,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 leading-tight">RO AMC & Maintenance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Affordable AMC plans, filter replacement, and regular maintenance support.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(40,167,255,0.12)] hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Headphones className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 leading-tight">Fast Customer Support</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Quick response and reliable after-sales service from experienced technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature / Brand Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-[#0B1F3A] via-[#0D2E5B] to-[#124285]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[120px] mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3DB7FF] rounded-full blur-[100px] mix-blend-overlay"></div>
          <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
             <defs>
               <pattern id="watermark" width="300" height="300" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
                 <text x="0" y="50" fill="white" opacity="0.15" fontSize="32" fontWeight="800" fontFamily="sans-serif" className="tracking-widest">RAMYA AGENCIES</text>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#watermark)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#3DB7FF] font-semibold text-lg lg:text-xl tracking-widest uppercase mb-6 drop-shadow-md">
            Ramya Agencies
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg font-serif">
            Trusted RO Water Solutions Since <span className="text-[#3DB7FF]">18+ Years</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#3DB7FF] to-transparent mx-auto rounded-full opacity-80"></div>
        </div>
      </section>

      {/* 3. Statistics Section */}
      <section className="py-16 md:py-24 bg-white relative -mt-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Stat 1 */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_15px_40px_rgba(11,31,58,0.08)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EEF5FF] rounded-bl-[100px] -z-10 transition-transform duration-300 group-hover:scale-125"></div>
              <div className="mx-auto w-16 h-16 bg-[#F5FBFF] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#0B1F3A] transition-colors duration-300 shadow-sm">
                 <Award className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-2 tracking-tight">18+ Years</h3>
              <h4 className="text-xs font-bold text-[#28A7FF] uppercase tracking-wider mb-4">Experience</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Trusted expertise in RO water purifier sales and service solutions.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_15px_40px_rgba(11,31,58,0.08)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EEF5FF] rounded-bl-[100px] -z-10 transition-transform duration-300 group-hover:scale-125"></div>
              <div className="mx-auto w-16 h-16 bg-[#F5FBFF] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#0B1F3A] transition-colors duration-300 shadow-sm">
                 <Users className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-2 tracking-tight">5000+</h3>
              <h4 className="text-xs font-bold text-[#28A7FF] uppercase tracking-wider mb-4">Happy Customers</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Reliable service and customer satisfaction across multiple locations.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_15px_40px_rgba(11,31,58,0.08)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EEF5FF] rounded-bl-[100px] -z-10 transition-transform duration-300 group-hover:scale-125"></div>
              <div className="mx-auto w-16 h-16 bg-[#F5FBFF] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#0B1F3A] transition-colors duration-300 shadow-sm">
                 <Cog className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-2 tracking-tight">1000+</h3>
              <h4 className="text-xs font-bold text-[#28A7FF] uppercase tracking-wider mb-4">RO Installations</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Professional installation support for residential and commercial needs.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-3xl p-8 text-center shadow-[0_15px_40px_rgba(11,31,58,0.08)] border border-gray-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EEF5FF] rounded-bl-[100px] -z-10 transition-transform duration-300 group-hover:scale-125"></div>
              <div className="mx-auto w-16 h-16 bg-[#F5FBFF] rounded-full flex items-center justify-center mb-5 group-hover:bg-[#0B1F3A] transition-colors duration-300 shadow-sm">
                 <Droplet className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] mb-2 tracking-tight">Multi Brand</h3>
              <h4 className="text-xs font-bold text-[#28A7FF] uppercase tracking-wider mb-4">Support</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Sales, repair, and AMC services for multiple RO water purifier brands.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
