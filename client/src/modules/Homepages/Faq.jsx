import React, { useState } from 'react';
import { ChevronDown, Quote } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do you provide RO installation services?",
      answer: "Yes, we provide professional RO installation services for homes, offices, shops, and commercial spaces."
    },
    {
      question: "Do you offer AMC services?",
      answer: "Yes, we provide affordable AMC plans including periodic maintenance, filter replacement, and servicing support."
    },
    {
      question: "Which RO brands do you support?",
      answer: "We provide multi brand RO sales and service support for various domestic and commercial water purifier brands."
    },
    {
      question: "Do you provide commercial RO solutions?",
      answer: "Yes, we offer commercial and industrial RO water purification solutions for businesses and institutions."
    },
    {
      question: "How quickly can service be scheduled?",
      answer: "Our support team works to provide fast response and quick service scheduling based on your location and requirement."
    }
  ];

  return (
    <section className="bg-[#F5FBFF] py-16 md:py-24 relative overflow-hidden">
      {/* Background blobs for premium look */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3DB7FF] rounded-full blur-[120px] opacity-15 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0B1F3A] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Quote Section */}
        <div className="max-w-4xl mx-auto mb-20 lg:mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_15px_40px_rgba(11,31,58,0.06)] border border-gray-50 relative text-center group hover:-translate-y-1 transition-transform duration-300">
            <Quote className="w-12 h-12 text-[#28A7FF] opacity-10 absolute top-6 left-6 transition-opacity duration-300 group-hover:opacity-20" />
            <Quote className="w-12 h-12 text-[#28A7FF] opacity-10 absolute bottom-6 right-6 rotate-180 transition-opacity duration-300 group-hover:opacity-20" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#0B1F3A] leading-relaxed italic relative z-10 font-serif">
              “Pure water is essential for a healthy life. Our mission is to provide safe and reliable water purification solutions for every customer.”
            </h3>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* FAQ Header (Left Column on Desktop) */}
          <div className="lg:col-span-5 flex flex-col sticky top-32">
            <span className="text-[#28A7FF] font-bold text-sm tracking-widest uppercase block mb-3">FAQ</span>
            <h2 className="text-[#0B1F3A] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Find answers to common questions about RO installation, AMC, maintenance, and water purifier services.
            </p>
            {/* Optional decorative element */}
            <div className="hidden lg:block w-20 h-1.5 bg-gradient-to-r from-[#28A7FF] to-transparent rounded-full mt-4"></div>
          </div>

          {/* FAQ Accordion (Right Column on Desktop) */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-[0_4px_20px_rgba(11,31,58,0.02)] ${openIndex === index ? 'border-[#28A7FF] shadow-[0_10px_30px_rgba(40,167,255,0.12)]' : 'border-gray-100 hover:border-[#3DB7FF]/50'}`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className={`font-semibold text-base md:text-lg transition-colors ${openIndex === index ? 'text-[#28A7FF]' : 'text-[#0B1F3A]'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-[#28A7FF] text-white rotate-180 shadow-md' : 'bg-[#EEF5FF] text-[#0B1F3A]'}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${openIndex === index ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 leading-relaxed border-t border-gray-100 pt-4 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Faq;