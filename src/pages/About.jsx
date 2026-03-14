import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ label, value, unit = "" }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const target = { val: 0 };
    gsap.to(target, {
      val: parseInt(value),
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 90%",
      },
      onUpdate: () => {
        if (countRef.current) countRef.current.innerText = Math.ceil(target.val);
      }
    });
  }, [value]);

  return (
    <div className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center group">
      <div className="text-6xl font-black text-brand-dark mb-2 group-hover:text-brand-gold transition-colors flex justify-center items-baseline gap-1">
        <span ref={countRef}>0</span><span className="text-brand-gold text-3xl">{unit}</span>
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-400 group-hover:text-brand-dark transition-colors">
        {label}
      </div>
    </div>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className="space-y-3 p-8 bg-brand-surface rounded-[2rem] border border-neutral-100 hover:border-brand-gold/30 transition-all group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
      </div>
      <h4 className="text-xl font-black text-brand-dark">{title}</h4>
    </div>
    <p className="text-neutral-500 text-sm font-medium leading-relaxed">{desc}</p>
  </div>
);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from(".gsap-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-reveal",
          start: "top 85%"
        }
      });

      gsap.from(".gsap-stat", {
        y: 100,
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".gsap-stat-grid",
          start: "top 80%"
        }
      });

      gsap.from(".gsap-feature-card", {
        x: (i) => (i % 2 === 0 ? -50 : 50),
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gsap-feature-grid",
          start: "top 80%"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Sub-header */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Travel background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm mb-6 gsap-reveal">About Us</h1>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight gsap-reveal">
            Your Journey Starts <br />with <span className="gold-gradient">Let’s Travelz!!</span>
          </h2>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 gsap-reveal">
            <p className="text-2xl text-brand-dark font-black leading-tight">
              Travel is more than just moving from one place to another—it’s about experiences, stories, and moments that stay with us forever.
            </p>
            <div className="space-y-6 text-neutral-600 text-lg font-medium leading-relaxed">
              <p>
                At Let’s Travelz, we are passionate about turning travel dreams into reality. Whether you are planning a relaxing family holiday, a romantic honeymoon, a business trip, or a grand adventure to discover the world, our team is dedicated to making every journey smooth, enjoyable, and worry-free.
              </p>
              <p>
                We understand that planning a trip can feel overwhelming—researching destinations, comparing prices, arranging transport, finding accommodation, securing visas, and ensuring everything fits within budget.
              </p>
              <p>
                That’s where we step in. With years of expertise, trusted networks, and a commitment to personalized service, Let’s Travelz takes the stress out of travel, so you can focus on what really matters—exploring, experiencing, and enjoying.
              </p>
            </div>
            <div className="pt-4">
               <Link to="/#contact" className="inline-flex items-center gap-3 bg-brand-gold text-white px-10 py-5 rounded-full font-black text-lg hover:bg-brand-dark transition-all group shadow-xl shadow-brand-gold/20">
                 Contact Now
                 <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
               </Link>
            </div>
          </div>
          <div className="gsap-reveal relative">
            <div className="rounded-[4rem] overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200" alt="Travel Experience" className="w-full h-[600px] object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-xl border border-neutral-100 max-w-sm">
               <p className="text-brand-gold font-black text-4xl mb-2">10+</p>
               <p className="text-brand-dark font-bold text-sm uppercase tracking-widest">Years of Travel Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-brand-surface border-y border-neutral-100">
        <div className="container mx-auto px-6 text-center max-w-4xl space-y-12">
          <div className="gsap-reveal">
            <h3 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm mb-4">Our Mission</h3>
            <h4 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-tight">
              To make travel effortless and accessible for everyone.
            </h4>
          </div>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed gsap-reveal">
            We believe every journey—whether short or long—should be filled with joy, comfort, and peace of mind. By offering carefully designed travel services, we aim to help people spend less time worrying about logistics and more time creating unforgettable memories with their loved ones.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="gsap-stat-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           <div className="gsap-stat"><StatCard label="Happy Travelers" value="156" unit="+" /></div>
           <div className="gsap-stat"><StatCard label="Miles Travelled" value="856" unit="k" /></div>
           <div className="gsap-stat"><StatCard label="Customized Tours" value="65" unit="+" /></div>
           <div className="gsap-stat"><StatCard label="Exciting Destinations" value="15" unit="+" /></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 container mx-auto px-6 bg-brand-dark rounded-[4rem] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] rounded-full" />
        <div className="relative z-10">
          <div className="gsap-reveal mb-20">
            <h3 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm mb-4">Why Choose Us</h3>
            <h4 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
              Adventure is Just <br /><span className="text-brand-gold">One Click Away</span>
            </h4>
            <p className="text-neutral-400 mt-6 max-w-xl text-lg font-medium">
              Curated luxury escapes designed to recharge your soul. From serene beaches to five-star retreats, we’ll get you there in style.
            </p>
          </div>
          <div className="gsap-feature-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="gsap-feature-card text-brand-dark col-span-1">
              <FeatureItem title="100% Transparency" desc="No hidden costs. No surprises. Every deal is clear and honest." />
            </div>
            <div className="gsap-feature-card text-brand-dark col-span-1">
              <FeatureItem title="24/7 Support" desc="We’re with you every step of the way, at any time, anywhere." />
            </div>
            <div className="gsap-feature-card text-brand-dark col-span-1">
              <FeatureItem title="Affordable Luxury" desc="Premium experiences and stunning stays that suit your budget." />
            </div>
            <div className="gsap-feature-card text-brand-dark col-span-1">
              <FeatureItem title="Personalized Service" desc="Every traveler is unique, and so are our tailor-made packages." />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 text-center container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="gsap-reveal">
            <h3 className="text-4xl md:text-6xl font-black text-brand-dark tracking-tighter leading-tight mb-6">
              Connecting You to Your <br />Next Destination
            </h3>
            <p className="text-xl text-neutral-500 font-medium">
              We can help you fit your stay and experience within your allotted budget.
            </p>
          </div>
          <div className="gsap-reveal flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="bg-brand-gold text-white px-12 py-5 rounded-full font-black text-xl hover:scale-110 hover:shadow-2xl hover:shadow-brand-gold/40 transition-all">
              Book Your Stay Now
            </button>
            <div className="flex flex-col items-center sm:items-start text-left">
              <p className="text-neutral-400 text-[10px] font-black uppercase tracking-widest mb-1">Direct Assistance</p>
              <a href="tel:+919090848423" className="text-3xl font-black text-brand-dark hover:text-brand-gold transition-colors">+91 9090 8484 23</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
