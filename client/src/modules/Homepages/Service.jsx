import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

const Service = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EEF5FF] rounded-full blur-[100px] opacity-60 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#EEF5FF] rounded-full blur-[80px] opacity-60 -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block text-[#28A7FF] font-bold text-sm tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-[#0B1F3A] text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Professional RO Water Purifier Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Ramya Agencies provides trusted RO water purifier sales, installation, AMC, repair, and maintenance services for homes, offices, and commercial spaces across Tamil Nadu.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.06)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="w-16 h-16 bg-[#F5FBFF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] group-hover:scale-110 transition-all duration-300">
              <ShoppingCart className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#28A7FF] transition-colors duration-300">
              RO Water Purifier Sales
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Multi brand domestic and commercial RO purifier solutions with reliable product support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.06)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="w-16 h-16 bg-[#F5FBFF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] group-hover:scale-110 transition-all duration-300">
              <Wrench className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#28A7FF] transition-colors duration-300">
              RO Installation Service
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Professional installation support for homes, offices, shops, and commercial spaces.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.06)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-default">
            <div className="w-16 h-16 bg-[#F5FBFF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] group-hover:scale-110 transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-[#0B1F3A] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4 group-hover:text-[#28A7FF] transition-colors duration-300">
              AMC & RO Maintenance
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Affordable AMC plans, repair support, filter replacement, and periodic maintenance services.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Link 
            to="/services" 
            className="group inline-flex items-center gap-3 bg-[#0B1F3A] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#28A7FF] hover:shadow-[0_10px_20px_rgba(40,167,255,0.3)] transition-all duration-300"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Service;
