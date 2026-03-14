import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavItem = ({ link, isScrolled, isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isScrolled || !isHome ? 'text-neutral-500' : 'text-white';

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <HashLink 
        smooth 
        to={link.path} 
        className={`${textColor} hover:text-brand-gold transition-colors flex items-center gap-1 py-4`}
      >
        {link.name}
        {link.subItems && (
          <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </HashLink>

      {link.subItems && (
        <div className={`absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl border border-neutral-100 shadow-2xl rounded-2xl p-4 transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
          <div className="grid gap-1">
            {link.subItems.map((item) => (
              <HashLink
                key={item}
                smooth
                to={
                  item === 'New Zealand' ? '/visa-new-zealand' : 
                  item === 'United Kingdom' ? '/visa-united-kingdom' : 
                  item === 'Australia' ? '/visa-australia' : 
                  item === 'Germany' ? '/visa-germany' : 
                  item === 'Canada' ? '/visa-canada' : 
                  item === 'Bali' ? '/bali' :
                  item === 'Thailand' ? '/thailand' :
                  `${link.path}-${item.toLowerCase().replace(/ /g, '-')}`
                }
                className="text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-brand-gold hover:bg-brand-surface px-4 py-3 rounded-xl transition-all block"
              >
                {item}
              </HashLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Domestic Tours', 
      path: '/#domestic',
      subItems: ['Rajasthan', 'Kerela', 'Jammu and Kashmir', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Lakshadweep', 'Andaman and Nicobar Islands', 'Leh Ladakh', 'North East']
    },
    { 
      name: 'International Tours', 
      path: '/#international',
      subItems: ['Bali', 'Thailand', 'Dubai', 'Malaysia', 'Vietnam', 'Cambodia', 'Maldives', 'Switzerland', 'Singapore', 'Sri Lanka']
    },
    { 
      name: 'Tourist Visa Checklist', 
      path: '/#visa',
      subItems: ['New Zealand', 'United Kingdom', 'Australia', 'Germany', 'Canada']
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/main_logo.png" alt="Let's Travelz" className="h-16 w-auto object-contain" />
        </Link>
        <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.15em] items-center">
          {navLinks.map((link) => (
            <NavItem key={link.name} link={link} isScrolled={isScrolled} isHome={isHome} />
          ))}
        </div>
        <a href="mailto:info@letstravelz.com" className="bg-brand-gold text-white px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-tighter hover:scale-105 transition-transform shadow-lg shadow-brand-gold/20">
          MAIL US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
