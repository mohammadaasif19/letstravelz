import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const getPath = (item, base) => {
  const mapping = {
    'New Zealand': '/visa/new-zealand',
    'United Kingdom': '/visa/united-kingdom',
    'Australia': '/visa/australia',
    'Germany': '/visa/germany',
    'Canada': '/visa/canada',
    'Bali': '/international/bali',
    'Thailand': '/international/thailand',
    'Dubai': '/international/dubai',
    'Malaysia': '/international/malaysia',
    'Vietnam': '/international/vietnam',
    'Cambodia': '/international/cambodia',
    'Maldives': '/international/maldives',
    'Switzerland': '/international/switzerland',
    'Singapore': '/international/singapore',
    'Sri Lanka': '/international/sri-lanka',
    'Rajasthan': '/domestic/rajasthan',
    'Kerela': '/domestic/kerala',
    'Jammu and Kashmir': '/domestic/jammu-and-kashmir',
    'Uttarakhand': '/domestic/uttarakhand',
    'Himachal Pradesh': '/domestic/himachal-pradesh',
    'Goa': '/domestic/goa',
    'Lakshadweep': '/domestic/lakshadweep',
    'Andaman and Nicobar Islands': '/domestic/andaman-and-nicobar-islands',
    'Leh Ladakh': '/domestic/leh-ladakh',
    'North East': '/domestic/north-east',
  };
  return mapping[item] || `${base}-${item.toLowerCase().replace(/ /g, '-')}`;
};

const NavItem = ({ link, isScrolled, isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = React.useRef(null);
  const location = useLocation();
  
  const isPathActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  const isCategoryActive = link.subItems && link.subItems.some(item => location.pathname === getPath(item, link.path));
  const isActive = isPathActive(link.path) || isCategoryActive;

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    // Add a 100ms delay to verify intent
    timeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // Wait a bit before closing to allow moving to the menu
  };

  const textColor = isActive 
    ? 'text-brand-gold' 
    : (isScrolled || !isHome ? 'text-brand-dark/80' : 'text-white/90');

  return (
    <div 
      className="relative flex items-center h-full"
      onMouseLeave={handleMouseLeave}
    >
      <HashLink 
        smooth 
        to={link.path} 
        onMouseEnter={handleMouseEnter}
        className={`${textColor} hover:text-brand-gold transition-all duration-300 flex items-center gap-1.5 py-2 relative group font-black whitespace-nowrap`}
      >
        {link.name}
        {link.subItems && (
          <svg className={`w-2.5 h-2.5 transition-transform duration-500 ${isOpen ? 'rotate-180 text-brand-gold' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        )}
        
        {/* Modern Active Indicator */}
        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full transition-all duration-500 mt-1 ${isActive ? 'opacity-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`} />
      </HashLink>

      {link.subItems && (
        <div 
          onMouseEnter={handleMouseEnter} // Keep open when mouse enters dropdown
          className={`absolute top-[80%] -left-4 w-72 pt-6 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}`}
        >
          <div className="bg-white/95 backdrop-blur-2xl border border-neutral-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-5 overflow-hidden">
            <div className="grid gap-1">
              <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-2 px-4 italic border-b border-neutral-50 pb-2">Select Destination</p>
              {link.subItems.map((item) => {
                const itemPath = getPath(item, link.path);
                const isItemActive = location.pathname === itemPath;
                return (
                  <HashLink
                    key={item}
                    smooth
                    to={itemPath}
                    className={`text-[11px] font-black uppercase tracking-wider px-4 py-3 rounded-2xl transition-all flex justify-between items-center group/item ${isItemActive ? 'text-brand-gold bg-brand-surface' : 'text-neutral-500 hover:text-brand-gold hover:bg-brand-surface'}`}
                  >
                    {item}
                    <svg className={`w-3 h-3 transition-all duration-300 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 ${isItemActive ? 'opacity-100 translate-x-0 text-brand-gold' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                    </svg>
                  </HashLink>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Domestic', 
      path: '/#domestic',
      subItems: ['Rajasthan', 'Kerela', 'Jammu and Kashmir', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Lakshadweep', 'Andaman and Nicobar Islands', 'Leh Ladakh', 'North East']
    },
    { 
      name: 'International', 
      path: '/#international',
      subItems: ['Bali', 'Thailand', 'Dubai', 'Malaysia', 'Vietnam', 'Cambodia', 'Maldives', 'Switzerland', 'Singapore', 'Sri Lanka']
    },
    { 
      name: 'Visa', 
      path: '/#visa',
      subItems: ['New Zealand', 'United Kingdom', 'Australia', 'Germany', 'Canada']
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center py-6 pointer-events-none px-4 lg:px-0">
      <nav 
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-4 lg:px-8 flex items-center justify-between border shadow-2xl
          ${isScrolled || !isHome 
            ? 'w-full lg:w-[85%] bg-white/80 backdrop-blur-2xl py-3 rounded-[2rem] lg:rounded-[2.5rem] border-white/20 shadow-brand-dark/5' 
            : 'w-full lg:w-[98%] bg-transparent py-4 border-transparent shadow-none'
          }`}
      >
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full transition-all
              ${isScrolled || !isHome ? 'bg-brand-dark/5 text-brand-dark' : 'bg-white/10 text-white'}`}
          >
            <span className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        <Link to="/" className="flex items-center group">
          <div className="relative overflow-hidden">
            <img src="/logo-main.png" alt="Let's Travelz" className={`transition-all duration-500 object-contain ${isScrolled ? 'h-11 lg:h-12' : 'h-14 lg:h-20'}`} />
          </div>
        </Link>
        </div>

        <div className="hidden lg:flex gap-10 text-[13px] font-black uppercase tracking-[0.15em] items-center">
          {navLinks.map((link) => (
            <NavItem key={link.name} link={link} isScrolled={isScrolled} isHome={isHome} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:info@letstravelz.com" className={`group relative flex items-center justify-center overflow-hidden rounded-full font-black text-[9px] lg:text-[10px] uppercase tracking-widest transition-all duration-500 shadow-xl
            ${isScrolled || !isHome 
              ? 'bg-brand-dark text-white px-5 lg:px-8 py-2.5 lg:py-3' 
              : 'bg-brand-gold text-white px-5 lg:px-8 py-2.5 lg:py-3 ring-4 ring-white/10'
            }`}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-brand-gold transition-transform duration-500 translate-y-full group-hover:translate-y-0" />
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-brand-dark z-[-1] lg:hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col h-full pt-32 px-10">
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <div key={link.name} className={`transition-all duration-700 delay-[${i * 100}ms] ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <HashLink 
                    to={link.path}
                    className="text-4xl font-black text-white hover:text-brand-gold transition-colors block"
                  >
                    {link.name}
                  </HashLink>
                  {link.subItems && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {link.subItems.slice(0, 4).map(sub => (
                        <HashLink key={sub} to={getPath(sub, link.path)} className="text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-brand-gold">
                          {sub}
                        </HashLink>
                      ))}
                      <span className="text-[10px] font-black text-brand-gold/60 lowercase italic">and more...</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-auto mb-20 space-y-4">
              <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.5em]">Social Media</p>
              <div className="flex gap-6 text-white text-sm font-bold">
                <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-8 decoration-brand-gold/20">Instagram</a>
                <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-8 decoration-brand-gold/20">Facebook</a>
                <a href="#" className="hover:text-brand-gold transition-colors underline underline-offset-8 decoration-brand-gold/20">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
