import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from './ui/button';

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
  const location = useLocation();

  const isPathActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return false;
    return location.pathname === path;
  };

  const isCategoryActive = link.subItems && link.subItems.some(item => location.pathname === getPath(item, link.path));
  const isActive = isPathActive(link.path) || isCategoryActive;

  const textColor = isActive
    ? 'text-brand-gold'
    : (isScrolled || !isHome ? 'text-brand-dark/80' : 'text-white/90');

  return (
    <div className="relative group flex items-center h-full">
      <HashLink
        smooth
        to={link.path}
        className={`${textColor} hover:text-brand-gold transition-all duration-300 flex items-center gap-1.5 py-4 relative font-black whitespace-nowrap`}
      >
        {link.name}
        {link.subItems && (
          <svg className="w-2.5 h-2.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        )}
        <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-gold rounded-full transition-all duration-500 mt-1 ${isActive ? 'opacity-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`} />
      </HashLink>

      {link.subItems && (
        <div className="absolute top-full -left-4 w-72 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto">
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

const MobileMenu = ({ isOpen, navLinks, onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const location = useLocation();

  const toggleExpand = (name) => {
    setExpandedItem(prev => prev === name ? null : name);
  };

  return (
    <div className={`fixed inset-0 z-[999] lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neutral-950" onClick={onClose} />

      {/* Menu Panel */}
      <div className={`absolute inset-0 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>

        {/* Close button at top right */}
        <div className="flex justify-end px-6 pt-6 pb-2 shrink-0">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-90"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav links */}
        <div className="flex-1 overflow-y-auto px-8 py-4">
          <div className="space-y-1">
            {navLinks.map((link, i) => {
              const isExpanded = expandedItem === link.name;
              return (
                <div
                  key={link.name}
                  style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                  className={`transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                >
                  <div className="flex items-center justify-between">
                    <HashLink
                      to={link.path}
                      onClick={!link.subItems ? onClose : undefined}
                      className="text-3xl font-bold text-white hover:text-brand-gold transition-colors tracking-tighter py-3 block flex-1"
                    >
                      {link.name}.
                    </HashLink>
                    {link.subItems && (
                      <button
                        onClick={() => toggleExpand(link.name)}
                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-gold/20 hover:text-brand-gold transition-all ml-3 shrink-0"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Expandable sub-items */}
                  {link.subItems && (
                    <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                      <div className="grid grid-cols-2 gap-2 pt-2 pb-3 pl-2">
                        {link.subItems.map(sub => {
                          const subPath = getPath(sub, link.path);
                          const isActive = location.pathname === subPath;
                          return (
                            <HashLink
                              key={sub}
                              to={subPath}
                              onClick={onClose}
                              className={`text-[11px] font-bold uppercase tracking-wider px-3 py-2.5 rounded-xl transition-all flex items-center justify-between gap-1
                                ${isActive
                                  ? 'text-brand-gold bg-brand-gold/10'
                                  : 'text-white/50 hover:text-brand-gold hover:bg-white/5'
                                }`}
                            >
                              {sub}
                              <svg className="w-2.5 h-2.5 shrink-0 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
                              </svg>
                            </HashLink>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-8 pb-10 pt-4 border-t border-white/10">
          <p className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.4em] mb-4">Connect With Us</p>
          <div className="flex gap-6 text-white text-xs font-semibold">
            <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-brand-gold transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

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
    <>
      <header className={`fixed top-0 w-full z-50 flex justify-center pointer-events-none px-4 lg:px-0 transition-all duration-500 ${isScrolled || !isHome ? 'py-3' : 'py-0'}`}>
        <nav
          className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-4 lg:px-8 flex items-center justify-between border shadow-2xl
            ${isScrolled || !isHome
              ? 'w-full lg:w-[85%] bg-white/80 backdrop-blur-2xl py-1.5 rounded-[2rem] lg:rounded-full border-white/20 shadow-brand-dark/5'
              : 'w-full lg:w-[98%] bg-transparent py-1 border-transparent shadow-none'
            }`}
        >
          <div className="flex items-center gap-4">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full transition-all active:scale-90
                ${isScrolled || !isHome ? 'bg-black/5 text-black' : 'bg-white/10 text-white'}`}
            >
              <span className="w-5 h-0.5 bg-current transition-all duration-300" />
              <span className="w-5 h-0.5 bg-current transition-all duration-300" />
              <span className="w-5 h-0.5 bg-current transition-all duration-300" />
            </button>

            <Link to="/" className="flex items-center group">
              <img
                src="/logo-main.png"
                alt="Let's Travelz"
                className={`transition-all duration-500 object-contain ${isScrolled || !isHome ? 'h-10 lg:h-12' : 'h-16 lg:h-24'}`}
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-10 text-[13px] font-black uppercase tracking-[0.15em] items-center">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} isScrolled={isScrolled} isHome={isHome} />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="brand"
              className={`font-black text-[9px] lg:text-[10px] uppercase tracking-widest transition-all duration-500 shadow-xl border-none
                ${isScrolled || !isHome
                  ? 'bg-brand-dark hover:bg-brand-gold'
                  : 'bg-brand-gold ring-4 ring-white/10 hover:bg-brand-dark'
                }`}
            >
              <a href="mailto:info@letstravelz.com" className="px-5 lg:px-8 py-2.5 lg:py-4 rounded-full">
                Get In Touch
              </a>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — rendered outside nav so it fills the full screen */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navLinks={navLinks}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
