import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import Hero from '../components/layout/Hero';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".gsap-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-reveal",
          start: "top 85%"
        }
      });

      // Form & Info Reveal
      gsap.from(".gsap-info-el", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-contact-grid",
          start: "top 80%"
        }
      });

      gsap.from(".gsap-form-el", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-contact-grid",
          start: "top 80%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    alert("Thank you! Your message has been sent. We'll get back to you soon.");
    e.target.reset();
  };

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero */}
      <Hero
        heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2000"
        heroTitle="Contact"
        heroSubtitle="Us"
        heroBadge="Get In Touch"
        heroDescription="Do you want to enquire about our pricing, current offers and arrangements we can help you with? Give us a call or send in your concerns through the form below."
      />

      {/* Main Contact Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="gsap-contact-grid grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-8">
            {/* Card 1: Office Address */}
            <div className="gsap-info-el">
              <div className="p-8 bg-white rounded-[2rem] border border-neutral-100 shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-6 group">
                <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center text-brand-gold shadow-sm shrink-0 border border-neutral-200/30 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold">Our Office</h3>
                  <p className="text-lg font-black text-brand-dark tracking-tight leading-snug">
                    Sco-96, Unit-02, 1st Floor, Sector-40-C Chandigarh
                  </p>
                  <p className="text-xs text-neutral-400 font-semibold pt-1">Visit our reception for visa assistance and direct booking.</p>
                </div>
              </div>
            </div>

            {/* Card 2: Hours & Contact */}
            <div className="gsap-info-el">
              <div className="p-8 bg-white rounded-[2rem] border border-neutral-100 shadow-[0_15px_30px_rgba(0,0,0,0.02)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start gap-6 group">
                <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center text-brand-gold shadow-sm shrink-0 border border-neutral-200/30 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.514 2.018a14.99 14.99 0 0 1-6.843-6.843l2.018-1.514c.362-.272.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div className="space-y-4 w-full">
                  <div className="space-y-1">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-gold">Direct Hotline</h3>
                    <a href="tel:+919090848423" className="block text-xl font-black text-brand-dark hover:text-brand-gold transition-colors tracking-tight">+91 9090 8484 23</a>
                    <a href="mailto:info@letstravelz.com" className="block text-sm font-bold text-neutral-500 hover:text-brand-gold transition-colors">info@letstravelz.com</a>
                  </div>
                  <div className="border-t border-neutral-100 pt-3 flex justify-between items-center text-xs">
                    <span className="text-neutral-400 font-semibold">Reception Hours:</span>
                    <span className="text-brand-dark font-black">7:30 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Global Assistance */}
            <div className="gsap-info-el">
              <div className="p-8 bg-neutral-50/50 rounded-[2.5rem] border border-neutral-100 flex items-center gap-6 shadow-sm">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm shrink-0 border border-neutral-200/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <div>
                  <p className="text-brand-dark font-extrabold text-base">Global Assistance</p>
                  <p className="text-neutral-500 text-xs font-semibold">Available 24/7 for travelers currently on-trip.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="gsap-form-el bg-white p-10 lg:p-12 rounded-[3rem] border border-neutral-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full" />
            <div className="border-t-[4px] border-brand-gold absolute top-0 left-0 w-full" />
            
            <div className="space-y-2 mb-8 text-left">
              <h3 className="text-xl lg:text-2xl font-black text-brand-dark tracking-tight leading-snug">
                Plan Your Escape
              </h3>
              <p className="text-sm text-neutral-500 font-semibold">
                Send us a message and our destination curators will get in touch.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 ml-1">Name <span className="text-brand-gold">*</span></label>
                  <input required type="text" className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-brand-gold/60 focus:ring-4 focus:ring-brand-gold/5 bg-neutral-50/50 focus:bg-white transition-all font-medium text-brand-dark text-sm outline-none" placeholder="Your Name" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 ml-1">Email <span className="text-brand-gold">*</span></label>
                  <input required type="email" className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-brand-gold/60 focus:ring-4 focus:ring-brand-gold/5 bg-neutral-50/50 focus:bg-white transition-all font-medium text-brand-dark text-sm outline-none" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 ml-1">Subject <span className="text-brand-gold">*</span></label>
                <input required type="text" className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-brand-gold/60 focus:ring-4 focus:ring-brand-gold/5 bg-neutral-50/50 focus:bg-white transition-all font-medium text-brand-dark text-sm outline-none" placeholder="How can we help?" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] uppercase font-black tracking-widest text-neutral-400 ml-1">Message <span className="text-brand-gold">*</span></label>
                <textarea required rows="4" className="w-full px-5 py-3.5 rounded-xl border border-neutral-200 focus:border-brand-gold/60 focus:ring-4 focus:ring-brand-gold/5 bg-neutral-50/50 focus:bg-white transition-all font-medium text-brand-dark text-sm outline-none resize-none" placeholder="Your travel requirements..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-brand-gold to-amber-500 hover:from-brand-dark hover:to-brand-dark text-white py-4 rounded-xl font-extrabold text-sm transition-all duration-300 shadow-lg shadow-brand-gold/20 hover:shadow-brand-dark/20 transform active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
                <span>Submit Message</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="h-[600px] w-full bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Office Location"
          src="https://maps.google.com/maps?q=SCO%2096%2C%20Sector%2040C%2C%20Chandigarh&t=&z=16&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
