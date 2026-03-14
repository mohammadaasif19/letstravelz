import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);

const VisaGermany = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
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

      gsap.from(".checklist-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".checklist-container",
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const requirements = [
    "Original passport with at least 3 months validity plus previous passports.",
    "2 Latest passport size white background photographs (Do not staple).",
    "Covering letter stating purpose and duration.",
    "Latest original personal bank statement (3 months) and ITR (3 years).",
    "Overseas travel insurance with minimum coverage of EUR 30,000.",
    "Return air ticket and accommodation details."
  ];

  const categories = [
    { title: "Self Employed / Business", items: ["Relationship proof (MOA/Deed)", "Company bank statement & ITR"] },
    { title: "Employed / Service Person", items: ["NOC from Employer", "Salary slip for last 3 months"] },
    { title: "If Student", items: ["Leave sanction letter", "School ID card copy"] }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000" 
            alt="Germany" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <div className="gsap-reveal inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
            <h1 className="text-white font-black uppercase tracking-[0.5em] text-[10px]">Official Visa Guide</h1>
          </div>
          <h2 className="text-6xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.85] gsap-reveal drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            Explore <br />
            <span className="gold-gradient italic">Germany</span>
          </h2>
          <p className="gsap-reveal text-white/80 text-lg md:text-xl font-medium mt-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Your gateway to the architectural wonders and engineering excellence of Deutschland.
          </p>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              Germany - <br />
              <span className="text-brand-gold italic">Tourist Visa</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-stretch">
            {/* Details on the Left */}
            <div className="space-y-12">
              <div className="gsap-reveal bg-brand-surface p-10 rounded-[3rem] border border-brand-gold/10">
                <h4 className="text-3xl font-black text-brand-dark tracking-tighter leading-tight">
                  Application <br />
                  <span className="text-brand-gold">Details:</span>
                </h4>
                <div className="h-1 w-20 bg-brand-gold mt-6 mb-4 rounded-full" />
                <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nationality: India | Schengen Protocol</p>
              </div>
              
              <div className="space-y-4">
                {requirements.map((req, i) => (
                  <div key={i} className="gsap-reveal flex gap-5 p-5 bg-white border border-neutral-100 rounded-[2rem] hover:shadow-2xl hover:border-brand-gold/20 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center text-brand-gold font-black group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shrink-0 shadow-sm border border-brand-gold/5">
                      {i + 1}
                    </div>
                    <p className="text-neutral-600 font-bold text-sm leading-relaxed pt-2">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expansive Image on the Right */}
            <div className="gsap-reveal sticky top-32">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group h-[850px] border-4 border-white shadow-brand-gold/5">
                <img 
                  src="/de_bavaria.png" 
                  alt="Neuschwanstein Castle, Germany" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">Bavarian Legends</span>
                  <p className="text-white font-black text-5xl tracking-tighter leading-none mb-4">Bavaria</p>
                  <p className="text-white/70 font-bold text-lg max-w-sm leading-relaxed">Where fairytale architecture meets the deep whispers of the Alps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {categories.map((cat, i) => (
              <div key={i} className="gsap-reveal p-10 bg-brand-surface rounded-[3.5rem] border border-neutral-100 space-y-6 flex flex-col">
                <h4 className="text-xl font-black text-brand-dark leading-tight h-12 flex items-center">{cat.title}</h4>
                <ul className="space-y-4 flex-grow">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-neutral-500 font-semibold leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-48 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60" alt="Bavarian Castle, Germany" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="gsap-reveal max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">Plan an Unforgettable Experience in <span className="text-brand-gold">Germany Today!</span></h2>
            <p className="text-xl text-neutral-200 font-medium max-w-2xl mx-auto leading-relaxed">We can help you fit your stay and experience within your allotted budget.</p>
            <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center items-center">
              <HashLink smooth to="/contact" className="bg-brand-gold text-white px-12 py-5 rounded-full font-black text-xl hover:scale-110 hover:shadow-2xl transition-all">Book Your Stay Now</HashLink>
              <HashLink to="/contact" className="text-white hover:text-brand-gold transition-colors font-black text-lg uppercase tracking-widest border-b-2 border-brand-gold/30">Contact Us</HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaGermany;
