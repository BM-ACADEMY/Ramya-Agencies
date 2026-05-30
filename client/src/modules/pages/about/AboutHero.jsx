import React from 'react';
import { ChevronRight, ShieldCheck, Droplet, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import premiumImage from '../../../assets/ramya3.png';

const AboutHero = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* Top Banner Section */}
      <section className="bg-gradient-to-r from-[#0B1F3A] to-[#123666] pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        {/* Background Decorative Blob & Wave */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3DB7FF] rounded-full blur-[100px]"></div>
           <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#3DB7FF] rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-[#F5FBFF] text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-8 opacity-90 leading-relaxed font-medium">
            Trusted multi brand RO water purifier sales, installation, AMC, and repair services for homes and businesses across Vanur, Mailam, Panruti, Villupuram, and nearby areas.
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium bg-white/10 w-fit mx-auto px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg">
            <Link to="/" className="text-white hover:text-[#3DB7FF] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#3DB7FF]">About Us</span>
          </div>
        </div>
        
        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[60px] lg:h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden flex-1">
        {/* Subtle Water Pattern Background */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] bg-[radial-gradient(#0B1F3A_2px,_transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.03] bg-[radial-gradient(#0B1F3A_2px,_transparent_2px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Composition */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,31,58,0.1)] group border border-gray-100">
              <img 
                src={premiumImage} 
                alt="RO Water Purifier Service" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Floating Trust Badge */}
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-in slide-in-from-bottom-4 duration-700 border border-white/50">
                <div className="w-14 h-14 bg-[#EEF5FF] rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-[#28A7FF]" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#0B1F3A]">18+ Years</div>
                  <div className="text-sm text-gray-500 font-medium">Trusted Experience</div>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col">
              
              {/* Section Kicker */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-[#28A7FF]"></div>
                <span className="text-[#28A7FF] font-bold text-sm tracking-widest uppercase">
                  About Us
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-[#0B1F3A] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-6">
                Trusted RO Water Solutions for Your Home & Business
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                With over <strong className="text-gray-900 font-semibold">18+ years of experience</strong> in the water purification industry, Ramya Agencies has built a strong reputation for delivering reliable RO sales, installation, AMC, and maintenance services.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10">
                We provide high-quality domestic and commercial water purification solutions with a commitment to customer satisfaction, genuine products, and expert technical support.
              </p>

              {/* Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#EEF5FF] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Droplet className="text-[#28A7FF] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#0B1F3A] font-bold text-lg mb-1">Pure Water</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Advanced multi-stage RO filtration for ultimate safety.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#EEF5FF] w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Star className="text-[#28A7FF] w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#0B1F3A] font-bold text-lg mb-1">Genuine Quality</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">100% authentic spare parts and trusted service guarantees.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutHero;