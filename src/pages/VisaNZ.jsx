import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);

const VisaNZ = () => {
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
    "Valid passport with at least 6 month validity from the date of travel.",
    "2 Fresh Photograph (35 X 45 MM size, WHITE background, matt finish, non-edited). Mandatory: Must not have been used for any previous visa.",
    "Personal Covering Letter to The New Zealand High Commission mentioning duration, purpose, and expenses clause for all applicants.",
    "Personal original updated bank statement for last 6 months with bank seal and signature from an authorized officer.",
    "Personal Income Tax Returns (ITR) for the last 03 years.",
    "Confirmed Hotel Booking for the entire duration of stay.",
    "Detailed Tour Itinerary showing your planned travel across the islands.",
    "Return Flight Ticket (Confirmed or reserved).",
    "Occupation Proof (Refer to the specific categories below)."
  ];

  const categories = [
    { 
      title: "In case of Employee", 
      items: ["Proof of employment (employment certificate / NOC)", "Pay slips of last 3 months"] 
    },
    { 
      title: "Proprietor / Owner", 
      items: ["Cover letter on company letterhead", "Company's Original 06 month bank statement", "Proof of paid income tax (3 years)", "Company memo / Partnership deal / License"] 
    },
    { 
      title: "For Students", 
      items: ["Leave letter / Report card issued from School", "Student ID card copy"] 
    },
    { 
      title: "If Sponsored", 
      items: ["Proof of sponsorship and/or private accommodation", "Completed national form of the High Commission"] 
    },
    { 
      title: "If Retired", 
      items: ["Proof of retirement", "Pension statements for the last 6 months", "Proof of regular income from property or business"] 
    }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000" 
            alt="New Zealand Alps" 
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
            <span className="gold-gradient italic">New Zealand</span>
          </h2>
          <p className="gsap-reveal text-white/80 text-lg md:text-xl font-medium mt-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Guiding you through the visa process to experience the world's most breathtaking landscapes.
          </p>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              New Zealand - <br />
              <span className="text-brand-gold italic">Tourist Visa</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-stretch">
            {/* Details on the Left */}
            <div className="space-y-12">
              <div className="gsap-reveal bg-brand-surface p-10 rounded-[3rem] border border-brand-gold/10">
                <h4 className="text-3xl font-black text-brand-dark tracking-tighter leading-tight">
                  Application <br />
                  <span className="text-brand-gold">Requirements:</span>
                </h4>
                <div className="h-1 w-20 bg-brand-gold mt-6 mb-4 rounded-full" />
                <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nationality: India | 2024 Protocol</p>
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
                  src="/nz_milford.png" 
                  alt="Milford Sound, New Zealand" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">Unforgettable Escapes</span>
                  <p className="text-white font-black text-5xl tracking-tighter leading-none mb-4">Milford Sound</p>
                  <p className="text-white/70 font-bold text-lg max-w-sm leading-relaxed">Experience the eighth wonder of the world in total elegance.</p>
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
          <img src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60" alt="Lake Tekapo, New Zealand" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="gsap-reveal max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">Plan an Unforgettable Experience in <span className="text-brand-gold">New Zealand Today!</span></h2>
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

export default VisaNZ;
