import React from 'react';
import { ChevronRight, ShoppingCart, Wrench, Settings, Filter, Building2, ShieldCheck, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      
      {/* 1. Top Banner Section */}
      <section className="bg-gradient-to-r from-[#0B1F3A] to-[#123666] pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Background Decorative Blob & Wave */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3DB7FF] rounded-full blur-[100px]"></div>
           <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#3DB7FF] rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Services
          </h1>
          <p className="text-[#F5FBFF] text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 opacity-90 leading-relaxed font-medium">
            Reliable RO water purifier sales, installation, AMC, repair, and maintenance services for homes, offices, and commercial spaces across Vanur, Mailam, Panruti, Villupuram, and nearby areas.
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium bg-white/10 w-fit mx-auto px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
            <Link to="/" className="text-white hover:text-[#3DB7FF] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#3DB7FF]">Services</span>
          </div>
        </div>
        
        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* 2. Main Services Section */}
      <section className="py-16 md:py-24 bg-white relative flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
             <span className="text-[#28A7FF] font-bold text-sm tracking-widest uppercase block mb-3">Our Services</span>
             <h2 className="text-[#0B1F3A] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
               Professional RO Water Purifier Services We Offer
             </h2>
             <p className="text-gray-600 text-base md:text-lg leading-relaxed">
               Ramya Agencies provides complete multi brand RO water purifier solutions including sales, installation, maintenance, AMC, filter replacement, and commercial water purification support with trusted customer service.
             </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <ShoppingCart className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-4">RO Water Purifier Sales</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Wide range of domestic and commercial RO water purifiers from trusted multi brand solutions.
              </p>
              <div className="flex items-center text-[#28A7FF] font-medium text-sm group-hover:text-[#0B1F3A] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Wrench className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-4">RO Installation Service</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Professional RO installation support for homes, offices, shops, and commercial spaces.
              </p>
              <div className="flex items-center text-[#28A7FF] font-medium text-sm group-hover:text-[#0B1F3A] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Settings className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-4">RO Repair & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fast and reliable RO repair services with expert technicians and genuine spare parts.
              </p>
              <div className="flex items-center text-[#28A7FF] font-medium text-sm group-hover:text-[#0B1F3A] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Filter className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-4">Filter Replacement Service</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Timely RO filter and membrane replacement for clean, safe, and healthy drinking water.
              </p>
              <div className="flex items-center text-[#28A7FF] font-medium text-sm group-hover:text-[#0B1F3A] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <Building2 className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-4">Commercial RO Solutions</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Advanced commercial and industrial RO water purification systems for businesses and institutions.
              </p>
              <div className="flex items-center text-[#28A7FF] font-medium text-sm group-hover:text-[#0B1F3A] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(11,31,58,0.04)] border border-gray-100 hover:shadow-[0_15px_40px_rgba(40,167,255,0.12)] hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
              <div className="w-16 h-16 bg-[#EEF5FF] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#28A7FF] transition-colors duration-300">
                <ShieldCheck className="w-8 h-8 text-[#28A7FF] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#0B1F3A] mb-4">AMC & Periodic Service</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Affordable annual maintenance contracts to ensure long-lasting RO system performance.
              </p>
              <div className="flex items-center text-[#28A7FF] font-medium text-sm group-hover:text-[#0B1F3A] transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-16 md:py-24 bg-[#F5FBFF] relative overflow-hidden mt-auto">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3DB7FF] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1F3A] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1F3A] leading-tight mb-6">
            Need Professional RO Service Support?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
            Contact Ramya Agencies for trusted RO installation, repair, AMC, and maintenance services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-[#0B1F3A] hover:bg-[#153461] text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_10px_20px_rgba(11,31,58,0.2)] hover:shadow-[0_15px_30px_rgba(11,31,58,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Settings className="w-5 h-5" />
              <span>Book RO Service</span>
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#0B1F3A] font-medium py-4 px-8 rounded-xl transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-[#28A7FF]" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
