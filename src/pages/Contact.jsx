import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".gsap-contact-hero-el", {
        y: 60,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out"
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
      {/* Hero Section */}
      <section className="relative py-48 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518005020250-68594932097c?auto=format&fit=crop&q=80&w=2000" 
            alt="Coastal Town" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <h1 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm mb-6 gsap-contact-hero-el">Get In Touch</h1>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight mb-8 gsap-contact-hero-el">
            Contact <span className="gold-gradient">Us</span>
          </h2>
          <p className="text-xl text-neutral-300 font-medium leading-relaxed gsap-contact-hero-el">
            Do you want to enquire about our pricing, current offers and arrangements we can help you with? 
            Give us a call or send in your concerns through the form below.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="gsap-contact-grid grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-16">
            <div className="gsap-info-el space-y-4">
              <h3 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">Reception Office</h3>
              <p className="text-4xl font-black text-brand-dark tracking-tighter leading-tight">
                Sco-96, Unit-02, 1st Floor, Sector-40-C Chandigarh
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="gsap-info-el space-y-4">
                <h4 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">Reception Hours</h4>
                <p className="text-2xl font-black text-brand-dark uppercase tracking-tight">7:30 AM - 11:00 PM</p>
              </div>
              <div className="gsap-info-el space-y-4">
                <h4 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-xs">Direct Contact</h4>
                <div className="space-y-2">
                  <a href="tel:+919090848423" className="block text-2xl font-black text-brand-dark hover:text-brand-gold transition-colors">+91 9090 8484 23</a>
                  <a href="mailto:info@letstravelz.com" className="block text-xl font-bold text-neutral-500 hover:text-brand-gold transition-colors">info@letstravelz.com</a>
                </div>
              </div>
            </div>

            <div className="gsap-info-el p-10 bg-brand-surface rounded-[3rem] border border-neutral-100 flex items-center gap-8">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <p className="text-brand-dark font-black text-lg">Global Assistance</p>
                <p className="text-neutral-500 text-sm font-medium">Available 24/7 for travelers currently on-trip.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="gsap-form-el bg-white p-12 lg:p-16 rounded-[4rem] border border-neutral-100 shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full" />
            <h3 className="text-3xl font-black text-brand-dark tracking-tighter leading-tight mb-10">
              "Let’s Turn Your Travel Dreams Into Plans — We’re Just a Message Away!"
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-neutral-400 ml-4">Name *</label>
                  <input required type="text" className="w-full px-8 py-5 rounded-2xl bg-brand-surface border-none focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium text-brand-dark" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-neutral-400 ml-4">Email *</label>
                  <input required type="email" className="w-full px-8 py-5 rounded-2xl bg-brand-surface border-none focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium text-brand-dark" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-neutral-400 ml-4">Subject *</label>
                <input required type="text" className="w-full px-8 py-5 rounded-2xl bg-brand-surface border-none focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium text-brand-dark" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-neutral-400 ml-4">Message *</label>
                <textarea required rows="4" className="w-full px-8 py-5 rounded-2xl bg-brand-surface border-none focus:ring-2 focus:ring-brand-gold/20 outline-none transition-all font-medium text-brand-dark resize-none" placeholder="Your travel requirements..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-brand-gold text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-dark transform transition-all active:scale-[0.98] shadow-xl shadow-brand-gold/20">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-neutral-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.228492067576!2d76.74103837542387!3d30.711200174594613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec0000000001%3A0x6b00000000000000!2sSCO-96%2C%20Sector%2040C%2C%20Chandigarh!5e0!3m2!1sen!2sin!4v1710340000000!5m2!1sen!2sin" 
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
