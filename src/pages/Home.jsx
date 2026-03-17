import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 3D Parallax Image paths
const CLOUDS = "/home/clouds.jpg";
const MOUNTAIN_MAIN = "/home/mountain-bg-main-2.jpg";
const MOUNTAIN_LEFT = "/home/mountain-bg-left.png";
const MOUNTAIN_RIGHT = "/home/mountain-bg-right.png";
const BALI_IMAGE = "/bali_culture_1773394455093.png";

const FeatureCard = ({ icon, title, description, index }) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 hover:border-brand-gold/20 hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl group-hover:bg-brand-gold/10 transition-colors" />
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 bg-brand-surface rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-sm">
          {icon}
        </div>
        <span className="text-4xl font-black text-neutral-50/80 group-hover:text-brand-gold/10 transition-colors duration-500">
          0{index + 1}
        </span>
      </div>
      <h3 className="text-2xl font-black mb-4 text-brand-dark tracking-tight">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed font-medium mb-6">{description}</p>
      <div className="flex items-center gap-2 text-brand-gold text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </div>
    </div>
  </div>
);

const DestinationCard = ({ image, title, price, tag }) => (
  <div className="relative group overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer shadow-lg">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
    <div className="absolute top-4 left-4">
      <span className="bg-white text-brand-dark px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">{tag}</span>
    </div>
    <div className="absolute bottom-6 left-6 right-6">
      <h4 className="text-2xl font-bold mb-1 text-white">{title}</h4>
      <p className="text-neutral-200 text-sm">Packages from <span className="text-brand-gold font-bold">{price}</span></p>
    </div>
  </div>
);

const TourSection = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 432;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        // Direction reversed to move "forward"
        if (current.scrollLeft <= 0) {
          current.scrollTo({ left: current.scrollWidth, behavior: 'smooth' });
        } else {
          current.scrollBy({ left: -432, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Modern smooth scroll-linked movement
    gsap.to(scrollRef.current, {
      scrollLeft: scrollRef.current.scrollWidth / 4,
      scrollTrigger: {
        trigger: scrollRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2
      }
    });
  }, []);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <h2 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm">Our Global Reach</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-brand-dark">Our National & <br />International Trips !!!</h3>
          </div>
          <div className="flex gap-4 mb-4">
            <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-brand-dark hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-all active:scale-95 shadow-sm">←</button>
            <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-brand-dark hover:border-brand-gold hover:text-brand-gold cursor-pointer transition-all active:scale-95 shadow-sm">→</button>
          </div>
        </div>
      </div>
      <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="gsap-reveal">
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-6 md:px-[calc((100vw-1280px)/2)] pb-10">
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((num, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] h-[550px] relative group overflow-hidden rounded-[3rem] shadow-2xl">
              <img
                src={[
                  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
                  "/thailand_about.png",
                  "/bali_hero.png",
                  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
                  "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
                  "/luxury_travel_hero_1773394416882.png"
                ][i % 6]}
                alt="Destination"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-10 left-10 right-10">
                <h4 className="text-2xl font-black text-white mb-2 tracking-tight">
                  {["Dubai Luxury", "Exotic Thailand", "Bali Dreams", "Swiss Alps", "Vietnam Wonders", "Global Getaways"][i % 6]}
                </h4>
                <div className="w-10 h-1 bg-brand-gold rounded-full transform origin-left transition-transform duration-500 scale-x-50 group-hover:scale-x-100" />
                <p className="text-neutral-300 text-xs mt-4 uppercase tracking-[0.2em] font-bold">Curated Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const mainRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          }
        });
  
        // Background layers scale slowly
        tl.to(".parallax-clouds", { scale: 1.1, ease: "none" }, 0);
        tl.to(".parallax-mt-main", { scale: 1.05, ease: "none" }, 0);
  
        // Text center lands at ~30% from the top
        tl.fromTo(".parallax-text",
          { y: "60vh" },
          { y: "-20vh", ease: "none" },
          0
        );
  
        // Mountains slide outward — left goes left, right goes right (minimal movement)
        tl.to(".parallax-mt-left", { x: "-3%", ease: "none" }, 0);
        tl.fromTo(".parallax-mt-right", 
          { x: -150 }, 
          { x: "3%", ease: "none" }, 
          0
        );
      }
  
      // Entry animations (unchanged)
      gsap.from(".gsap-hero-el", {
        y: 100,
        duration: 2,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.5
      });
  
      gsap.utils.toArray(".gsap-reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
  
      [".gsap-card-stagger", ".gsap-feature-stagger", ".gsap-stat-card", ".gsap-bento-stagger"].forEach(selector => {
        gsap.from(`${selector} > *`, {
          scrollTrigger: { trigger: selector, start: "top 85%" },
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "all"
        });
      });
  
    }, mainRef);
  
    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef}>
      <section ref={heroRef} id="home" className="relative h-[120vh] flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Layer 0: Clouds (Far Background) */}
        <div className="absolute inset-0 z-0">
          <img src={CLOUDS} alt="Background Clouds" className="parallax-clouds w-full h-[140%] object-cover opacity-80" />
        </div>

        {/* Layer 1: Mountain Main (Mid Background) */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <img src={MOUNTAIN_MAIN} alt="Main Mountain" className="parallax-mt-main w-full h-[140%] object-cover" />
        </div>

        {/* Layer 2: Hero Text content (Middle Layer - Look 3D) */}
        <div className="parallax-text absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center pointer-events-none">
          <div className="max-w-4xl space-y-8 mt-[-10vh] pointer-events-auto relative">
            <h1 className="gsap-hero-el text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="text-white">From Dreams to</span> <br />
              <span className="gold-gradient">Destinations</span>
            </h1>
          </div>
        </div>

        {/* Layer 3: Mountain Background Left (Foreground) */}
        <div className="absolute inset-y-0 left-[-15%] z-30 flex items-end w-[80%] pointer-events-none">
          <img src={MOUNTAIN_LEFT} alt="Front Mountain Left" className="parallax-mt-left w-full h-[130%] object-contain object-bottom pointer-events-none" />
        </div>
        
        {/* Layer 4: Mountain Background Right (Foreground) */}
        <div className="absolute inset-y-0 right-[-15%] z-40 flex items-end w-[80%] pointer-events-none">
          <img src={MOUNTAIN_RIGHT} alt="Front Mountain Right" className="parallax-mt-right w-full h-[130%] object-contain object-bottom pointer-events-none" />
        </div>

        {/* Bottom Overlay to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-[45]" />
      </section>

      <section className="py-32 container mx-auto px-6">
        <div className="gsap-reveal text-center mb-20 space-y-4">
          <h2 className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm">Hottest Spots</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tight text-brand-dark">Top Trending Destinations</h3>
          <p className="text-neutral-500 max-w-xl mx-auto font-medium">Explore the hottest travel spots around the globe.</p>
        </div>
        <div className="gsap-card-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <DestinationCard image={BALI_IMAGE} title="Bali" price="$899" tag="Tropical" />
          <DestinationCard image="/thailand_hero.png" title="Thailand" price="$749" tag="Exotic" />
          <DestinationCard image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800" title="Dubai" price="$999" tag="Modern" />
          <DestinationCard image="/kerala_backwaters_1773395005447.png" title="Kerala" price="$499" tag="Serene" />
          <DestinationCard image="/rajasthan_fort_1773395021365.png" title="Rajasthan" price="$549" tag="Heritage" />
        </div>
      </section>

      <section id="domestic" className="py-32 bg-brand-surface border-y border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm">We Provide</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-brand-dark">Your Trusted Partner for Seamless Travel Experiences Worldwide</h3>
              <p className="text-neutral-500 font-medium">With Let’s Travelz, every route becomes a smooth, memorable, and truly enjoyable travel experience.</p>
            </div>
            <a href="#contact" className="px-8 py-3 rounded-full border-2 border-brand-gold text-brand-gold font-bold hover:bg-brand-gold hover:text-white transition-all uppercase tracking-tighter text-sm">View All</a>
          </div>
          <div className="gsap-card-stagger grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-neutral-100 p-8 flex flex-col justify-end min-h-[400px] shadow-sm hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1200" alt="Family Tour" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 space-y-4"><h4 className="text-3xl font-black text-white">Family Tour</h4><p className="text-neutral-200 text-sm font-medium">Personalized family travel experiences designed for comfort and adventure.</p></div>
            </div>
            <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-neutral-100 p-8 flex flex-col justify-end min-h-[400px] shadow-sm hover:shadow-xl transition-shadow">
              <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&q=80&w=1200" alt="Group Tour" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 space-y-4"><h4 className="text-3xl font-black text-white">Group Tour</h4><p className="text-neutral-200 text-sm font-medium">Hassle-free international journeys for your entire group with expert documentation.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="visa" className="py-32 container mx-auto px-6 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full" />
        <div className="gsap-reveal relative z-10 flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-[0.4em] text-sm mb-4">Our Elite Offerings</h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-brand-dark">Deals in Travel and <br />Visa Services</h3>
          </div>
          <div className="bg-brand-surface p-6 rounded-2xl border-l-4 border-brand-gold max-w-sm">
            <p className="text-neutral-600 text-sm font-bold leading-relaxed italic">"We redefine global travel by blending professional expertise with personalized care."</p>
          </div>
        </div>
        <div className="gsap-feature-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            { title: "Air Tickets", desc: "Quick flight bookings worldwide.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg> },
            { title: "Land Transport", desc: "Luxury chauffeur-driven fleet.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m1-4h1" /></svg> },
            { title: "Hotels", desc: "5-star stays at exclusive rates.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
            { title: "Visa Expert", desc: "Precision-led documentation.", icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
          ].map((item, idx) => (
            <FeatureCard key={idx} icon={item.icon} title={item.title} description={item.desc} index={idx} />
          ))}
        </div>
      </section>

      <section id="international" className="py-32 container mx-auto px-6">
        <div className="gsap-reveal mb-20 text-center"><h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark">Top Tourist Destinations</h3></div>
        <div className="gsap-bento-stagger grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[1000px]">
          {/* Main Featured: Dubai */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 z-10">
              <h4 className="text-4xl font-black mb-2 text-white">Dubai</h4>
              <p className="text-brand-gold font-bold uppercase tracking-widest text-xs">From $999</p>
            </div>
          </div>

          {/* Thailand */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="/thailand_about.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl text-center px-4">Thailand</div>
          </div>

          {/* Bali */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="/bali_hero.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl">Bali</div>
          </div>

          {/* Switzerland */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl">Switzerland</div>
          </div>

          {/* Singapore */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="/singapore_skyline.png" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl">Singapore</div>
          </div>

          {/* Vietnam - Wide Card */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent p-10 flex flex-col justify-end">
              <h4 className="text-3xl font-black text-white">Vietnam</h4>
              <p className="text-brand-gold font-bold">Nature's Wonder</p>
            </div>
          </div>

          {/* Maldives */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl text-center px-4">Maldives</div>
          </div>

          {/* Malaysia */}
          <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2.5rem] shadow-lg">
            <img src="https://www.eyeonasia.gov.sg/images/asean-countries/Malaysia%20snapshot%20cover%20iso.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-black text-xl text-center px-4">Malaysia</div>
          </div>
        </div>
      </section>

      <TourSection />

      <section id="contact" className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Why Travelers <span className="text-brand-gold">Choose Us</span></h2>
          <div className="gsap-stat-card bg-neutral-900/50 backdrop-blur-2xl p-16 rounded-[4rem] border border-white/5 inline-block">
            <h3 className="text-9xl font-black text-brand-gold tracking-tighter leading-none">500+</h3>
            <p className="text-2xl font-bold text-white mt-4 uppercase tracking-widest">Active Clients Trust Us</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
