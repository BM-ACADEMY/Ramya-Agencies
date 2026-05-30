import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, ChevronDown, Droplet, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const location = useLocation();

  // Handle sticky header on scroll and active tab scroll-spying
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for sections on the home page
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'whychoose'];
        let currentSection = 'home';
        
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && window.scrollY >= element.offsetTop - 180) { // 180px offset for header
            currentSection = section;
          }
        }
        setActiveTab(currentSection);
      }
    };
    
    // Initial check and add listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Route-based active tab (for separate pages)
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveTab(location.pathname.substring(1) || 'home');
    }
  }, [location.pathname]);

  return (
    <>
      {/* Spacer to prevent layout shift when header becomes fixed */}
      {isScrolled && <div className="h-[156px] lg:h-[164px] w-full" />}
      
      <header 
        className={`w-full bg-white transition-all duration-300 z-50 ${
          isScrolled ? 'fixed top-0 left-0 w-full shadow-md animate-in slide-in-from-top-4' : 'relative'
        }`}
      >
        {/* Top Header Section (Hidden on Mobile) */}
        <div className="hidden lg:flex justify-between items-center px-8 py-5 border-b border-gray-100 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/logo.png" alt="Ramya Agencies" className="h-12 w-auto object-contain" />
          </Link>

          {/* Contact Info Blocks */}
          <div className="flex items-center gap-12">
            {/* Block 1 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#28A7FF] flex items-center justify-center rounded-md transition-transform hover:scale-105 shrink-0">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#022B87] font-semibold text-[15px]">Our Location</span>
                <span className="text-[#8A8A8A] text-xs mt-0.5 leading-[1.3] max-w-[170px]">No: 33/1, Mailam Main Rd,<br/>Thiruchitrambalam, TN 605111</span>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#28A7FF] flex items-center justify-center rounded-md transition-transform hover:scale-105 shrink-0">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#022B87] font-semibold text-[15px]">Phone Number</span>
                <a href="tel:9786597966" className="text-[#8A8A8A] text-sm mt-0.5 hover:text-[#28A7FF] transition-colors">97865 97966</a>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#28A7FF] flex items-center justify-center rounded-md transition-transform hover:scale-105 shrink-0">
                <InstagramIcon className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#022B87] font-semibold text-[15px]">Follow Us</span>
                <a href="https://www.instagram.com/ramya_aquafier" target="_blank" rel="noreferrer" className="text-[#8A8A8A] text-sm mt-0.5 hover:text-[#28A7FF] transition-colors">@ramya_aquafier</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Section */}
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] w-full">
          
          {/* Mobile Logo (Visible only on mobile) */}
          <Link 
            to="/" 
            className="flex items-center gap-2 lg:hidden px-4 group"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <img src="/logo.png" alt="Ramya Agencies" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center h-full gap-8 px-8">
            <a 
              href="/#home" 
              className={`font-medium transition-colors ${activeTab === 'home' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`}
            >
              Home
            </a>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${activeTab === 'about' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`}
            >
              About Us
            </Link>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `font-medium transition-all duration-300 relative ${isActive || activeTab === 'services' ? 'text-[#3DB7FF] font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#3DB7FF] after:rounded-full' : 'text-[#022B87] hover:text-[#28A7FF]'}`}
            >
              Services
            </NavLink>
            {/* <a 
              href="/#whychoose" 
              className={`font-medium transition-colors ${activeTab === 'whychoose' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`}
            >
              Why Choose Us
            </a> */}

            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${activeTab === 'contact' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Side: CTA & Mobile Toggle */}
          <div className="flex items-center h-full">
            {/* Desktop Full-Height Block CTA */}
            <a href="tel:9786597966" className="hidden lg:flex h-full bg-[#022B87] text-white px-10 items-center gap-2 hover:bg-[#001D5C] transition-colors font-medium">
              <Phone className="w-5 h-5 fill-current" />
              <span className="text-base whitespace-nowrap">Contact Sales</span>
            </a>
            
            {/* Hamburger Button */}
            <button 
              className="lg:hidden text-[#022B87] p-4 mr-2 hover:bg-gray-100 transition-colors rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[700px] opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
          }`}
        >
          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-5 border-b border-gray-100 pb-6">
            <a 
              href="/#home" 
              className={`font-medium transition-colors text-lg ${activeTab === 'home' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <Link 
              to="/about" 
              className={`font-medium transition-colors text-lg ${activeTab === 'about' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `font-medium transition-all duration-300 text-lg ${isActive || activeTab === 'services' ? 'text-[#3DB7FF] font-semibold' : 'text-[#022B87] hover:text-[#28A7FF]'}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            <a 
              href="/#whychoose" 
              className={`font-medium transition-colors text-lg ${activeTab === 'whychoose' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Why Choose Us
            </a>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors text-lg ${activeTab === 'contact' ? 'text-[#28A7FF]' : 'text-[#022B87] hover:text-[#28A7FF]'}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
          
          {/* Stacked Mobile Contact Info */}
          <div className="flex flex-col gap-5 pt-6 pb-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#28A7FF] flex items-center justify-center rounded-md shrink-0">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#022B87] font-semibold">Our Location</span>
                <span className="text-[#8A8A8A] text-xs mt-0.5 leading-[1.3]">No: 33/1, Mailam Main Rd, Taluk, Vanur<br/>Thiruchitrambalam, TN 605111</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#28A7FF] flex items-center justify-center rounded-md shrink-0">
                <Phone className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#022B87] font-semibold">Phone Number</span>
                <a href="tel:9786597966" className="text-[#8A8A8A] text-sm mt-0.5 hover:text-[#28A7FF]">97865 97966</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#28A7FF] flex items-center justify-center rounded-md shrink-0">
                <InstagramIcon className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#022B87] font-semibold">Follow Us</span>
                <a href="https://www.instagram.com/ramya_aquafier" target="_blank" rel="noreferrer" className="text-[#8A8A8A] text-sm mt-0.5 hover:text-[#28A7FF]">@ramya_aquafier</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;