import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);

const InfoLayout = ({ 
  heroImage, 
  heroTitle, 
  heroSubtitle, 
  heroBadge,
  ctaImage,
  ctaTitle,
  ctaSubtitle,
  children 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // General Reveal
      gsap.utils.toArray(".gsap-reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // Staggered Items (for grids/lists)
      gsap.utils.toArray(".gsap-reveal-stagger").forEach((container) => {
        gsap.from(container.querySelectorAll(".gsap-reveal-item"), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      {/* Universal Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={heroTitle} 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="gsap-reveal inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <h1 className="text-white font-black uppercase tracking-[0.5em] text-[10px]">{heroBadge}</h1>
          </div>
          <h2 className="text-6xl md:text-[8rem] xl:text-[10rem] font-black text-white tracking-tighter leading-[0.85] gsap-reveal drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {heroTitle} <br />
            <span className="gold-gradient italic">{heroSubtitle}</span>
          </h2>
        </div>
      </section>

      {/* Unique Page Content */}
      {children}

      {/* Universal CTA Section */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={ctaImage} 
            alt="CTA Background" 
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/20 to-brand-dark/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="gsap-reveal max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
              {ctaTitle} <br />
              <span className="text-brand-gold italic shadow-gold">{ctaSubtitle}</span>
            </h2>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed shadow-lg">
              We can help you fit your stay and experience within your allotted budget.
            </p>
            <div className="pt-10 flex flex-col items-center gap-8">
              <HashLink 
                smooth 
                to="/contact"
                className="group bg-white text-brand-dark px-16 py-6 rounded-full font-black text-xl hover:bg-brand-gold hover:text-white transition-all transform hover:scale-110 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex items-center gap-4"
              >
                Book Your Stay Now
                <span className="bg-brand-dark text-white w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand-gold transition-colors text-sm">→</span>
              </HashLink>
              
              <div className="flex flex-col items-center gap-3 bg-black/40 backdrop-blur-xl px-10 py-5 rounded-[2rem] border border-white/10 shadow-2xl">
                <p className="text-brand-gold font-black uppercase tracking-[0.4em] text-[10px]">Concierge & Support</p>
                <a 
                  href="tel:+919090848423" 
                  className="text-white text-2xl md:text-4xl font-black tracking-tighter hover:text-brand-gold transition-colors flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/></svg>
                  </div>
                  +91 9090 8484 23
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoLayout;
