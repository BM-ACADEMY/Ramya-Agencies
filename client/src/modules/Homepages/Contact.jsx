import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, MessageSquare, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Enquiry sent successfully!');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0B1F3A] py-16 lg:py-24 relative overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#3DB7FF] rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 -left-24 w-64 h-64 bg-[#3DB7FF] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mt-10 lg:mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-[#F5FBFF] text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            Reach out to our expert team for top-quality water purifier sales, reliable maintenance, and dedicated service support.
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <Link to="/" className="text-white hover:text-[#3DB7FF] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#3DB7FF]">Contact</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-24 bg-[#F5FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Side: Contact Information */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="mb-4">
                <span className="text-[#3DB7FF] font-semibold text-base uppercase tracking-wider mb-2 block">Get In Touch</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1F3A] leading-tight">
                  We're Here to Help You
                </h2>
              </div>

              {/* Info Cards */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(11,31,58,0.04)] border border-gray-100 flex items-start gap-5 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-[#F5FBFF] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#3DB7FF] transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-[#3DB7FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Panruti,<br />Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(11,31,58,0.04)] border border-gray-100 flex items-start gap-5 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-[#F5FBFF] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#3DB7FF] transition-colors duration-300">
                  <Phone className="w-6 h-6 text-[#3DB7FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">Phone Number</h3>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-[#3DB7FF] transition-colors block leading-relaxed">
                    (+91) 98765 43210
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(11,31,58,0.04)] border border-gray-100 flex items-start gap-5 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-[#F5FBFF] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#3DB7FF] transition-colors duration-300">
                  <Mail className="w-6 h-6 text-[#3DB7FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">Email Address</h3>
                  <a href="mailto:support@cigawater.com" className="text-gray-600 hover:text-[#3DB7FF] transition-colors block leading-relaxed">
                    support@cigawater.com
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(11,31,58,0.04)] border border-gray-100 flex items-start gap-5 group hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 bg-[#F5FBFF] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#3DB7FF] transition-colors duration-300">
                  <Clock className="w-6 h-6 text-[#3DB7FF] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">Business Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mon - Sat : 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              {/* Mini CTA Section */}
              <div className="mt-4 bg-[#3DB7FF] rounded-2xl p-8 text-white relative overflow-hidden shadow-[0_10px_40px_rgba(61,183,255,0.3)]">
                 <MessageSquare className="absolute -bottom-4 -right-4 w-32 h-32 opacity-20" />
                 <h3 className="text-2xl font-bold mb-2 relative z-10">Need Immediate Support?</h3>
                 <p className="opacity-90 mb-6 relative z-10">Our technicians are on standby for emergency repairs.</p>
                 <a href="tel:+919876543210" className="inline-block bg-[#0B1F3A] hover:bg-gray-900 text-white font-medium px-6 py-3 rounded-lg transition-colors relative z-10 shadow-lg">
                   Call Us Now
                 </a>
              </div>

            </div>

            {/* Right Side: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_20px_50px_rgba(11,31,58,0.08)] border border-gray-50 h-full">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0B1F3A] mb-8">Send an Enquiry</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-[#F5FBFF] border border-transparent rounded-xl focus:bg-white focus:border-[#3DB7FF] focus:ring-2 focus:ring-[#3DB7FF]/20 transition-all outline-none text-gray-700 placeholder-gray-400"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-[#F5FBFF] border border-transparent rounded-xl focus:bg-white focus:border-[#3DB7FF] focus:ring-2 focus:ring-[#3DB7FF]/20 transition-all outline-none text-gray-700 placeholder-gray-400"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-[#F5FBFF] border border-transparent rounded-xl focus:bg-white focus:border-[#3DB7FF] focus:ring-2 focus:ring-[#3DB7FF]/20 transition-all outline-none text-gray-700 placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Service Type Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="serviceType" className="text-sm font-medium text-gray-700">Service Type</label>
                    <div className="relative">
                      <select 
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-[#F5FBFF] border border-transparent rounded-xl focus:bg-white focus:border-[#3DB7FF] focus:ring-2 focus:ring-[#3DB7FF]/20 transition-all outline-none text-gray-700 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Water Purifier Sales">Water Purifier Sales</option>
                        <option value="Installation Service">Installation Service</option>
                        <option value="AMC Service">AMC Service</option>
                        <option value="Repair Service">Repair Service</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-5 py-4 bg-[#F5FBFF] border border-transparent rounded-xl focus:bg-white focus:border-[#3DB7FF] focus:ring-2 focus:ring-[#3DB7FF]/20 transition-all outline-none text-gray-700 placeholder-gray-400 resize-none"
                      placeholder="How can we help you today?"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full bg-[#0B1F3A] hover:bg-[#153461] text-white font-medium py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(11,31,58,0.2)] hover:shadow-[0_15px_30px_rgba(11,31,58,0.3)] hover:-translate-y-1"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-5 h-5" />
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Google Map */}
      <section className="pb-16 lg:pb-24 bg-[#F5FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[400px] lg:h-[500px] w-full relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(11,31,58,0.08)] border border-gray-100 group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.77531783478!2d79.5446!3d11.7753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54b39b55555555%3A0x8888888888888888!2sPanruti%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute top-0 left-0 w-full h-full border-0 transition-transform duration-700 group-hover:scale-[1.02]" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
