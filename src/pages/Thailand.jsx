import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);

const Thailand = () => {
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

      // Staggered Cards
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

  const activities = [
    { 
      title: "Grand Palace", 
      image: "/thailand_palace.png" 
    },
    { 
      title: "Full Moon Party", 
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000" 
    },
    { 
      title: "Jungle Safari", 
      image: "https://images.unsplash.com/photo-1518709382021-ddec2856f4d2?auto=format&fit=crop&q=80&w=1000" 
    },
    { 
      title: "Scuba Diving", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" 
    }
  ];

  const places = [
    { 
      name: "Krabi", 
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000",
      type: "Coastal Paradise"
    },
    { 
      name: "Koh Samui", 
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=2000",
      type: "Luxury Escape"
    },
    { 
      name: "Bangkok", 
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&q=80&w=2000",
      type: "Metropolitan Soul"
    },
    { 
      name: "Phi Phi Islands", 
      image: "https://images.unsplash.com/photo-1563198031-6e3e59595562?auto=format&fit=crop&q=80&w=2000",
      type: "Exotic Haven"
    },
    { 
      name: "Phuket", 
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=2000",
      type: "Cultural Gem"
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/thailand_hero.png" 
            alt="Explore Thailand Background" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="gsap-reveal inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <h1 className="text-white font-black uppercase tracking-[0.5em] text-[10px]">Land of Smiles</h1>
          </div>
          <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.85] gsap-reveal drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            Explore <br />
            <span className="gold-gradient italic">Thailand With Us</span>
          </h2>
        </div>
      </section>

      {/* About Thailand Section */}
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          {/* Image on the Left */}
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img 
                src="/thailand_about.png" 
                alt="Golden Thai Temple" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-brand-gold">Cultural Wonder</p>
                <h4 className="text-3xl font-black tracking-tighter">Golden Heritage</h4>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-gold/10 rounded-[3rem] -z-10 rotate-12" />
          </div>

          {/* Text Content on the Right */}
          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">The Land of Smiles</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Siam's Eternal <br />
                <span className="text-brand-gold italic">Sun-Kissed Charm</span>
              </h3>
            </div>
            
            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Thailand, fondly known as the Land of Smiles, is where golden temples, tropical islands, and bustling cities create an irresistible charm. From the dazzling neon-lit streets of Bangkok to the serene, limestone-framed beaches of Krabi, every corner of this kingdom bursts with life, spirituality, and vibrant color.
              </p>
              <p>
                At Let’s Travelz, we bring you the best of Thailand—from floating markets tucked in hidden canals to world-class traditional spas that redefine relaxation. We curate scenic island-hopping odysseys and culinary adventures heart-crafted to awaken every sense. Whether you seek the pinnacle of luxury clifftop escapes or the untethered thrill of deep-jungle trekking, our bespoke itineraries are tailored to manifest your distinct travel dreams.
              </p>
              <div className="relative pt-12">
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-gold rounded-full" />
                <p className="italic font-bold text-brand-dark text-2xl leading-relaxed">
                  "Our tours are designed to let you experience Thailand’s rich culture and flavors—from ancient palaces to modern marvels. Let the legendary warmth of the Thai people and the incomparable beauty of its landscapes write a story of wonder in your heart."
                </p>
              </div>
            </div>

            <div className="gsap-reveal pt-8">
              <HashLink 
                to="/contact"
                className="bg-brand-dark text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl"
              >
                Contact Now
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-40 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10" />
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6 text-center">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Unforgettable Experiences</div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Activities You Can <span className="text-brand-gold">Do In Thailand</span>
            </h3>
          </div>

          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, i) => (
              <div key={i} className="gsap-reveal-item group relative overflow-hidden rounded-[3rem] bg-brand-surface aspect-[3/4] shadow-2xl">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <p className="text-white font-black text-2xl tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{activity.title}</p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-brand-gold transition-all duration-700 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Famous Places Section - Unique Staggered Grid */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6 max-w-4xl">
            <div className="w-20 h-2 bg-brand-gold rounded-full" />
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter">
              Famous Places <br />
              <span className="text-brand-gold italic">To Visit In Thailand</span>
            </h3>
            <p className="text-neutral-400 font-bold uppercase tracking-[0.4em] text-xs">Explore the hottest travel spots around the globe.</p>
          </div>

          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Top Row: Large Left, Two Stacked Right */}
            <div className="md:col-span-8 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[0].image} alt={places[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-3">{places[0].type}</p>
                  <h4 className="text-white text-5xl font-black tracking-tighter">{places[0].name}</h4>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[1].image} alt={places[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[1].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[1].name}</h4>
                </div>
              </div>
            </div>

            {/* Bottom Row: Three Equal Cards */}
            <div className="md:col-span-4">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[2].image} alt={places[2].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[2].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[2].name}</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[3].image} alt={places[3].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[3].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[3].name}</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[4].image} alt={places[4].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[4].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[4].name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80&w=2000" 
            alt="Thailand Luxury Sunset" 
            className="w-full h-full object-cover scale-110 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/20 to-brand-dark/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="gsap-reveal max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-2xl">
              Plan an Unforgettable <br />
              <span className="text-brand-gold italic shadow-gold">Experience In Thailand Today!</span>
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

export default Thailand;
