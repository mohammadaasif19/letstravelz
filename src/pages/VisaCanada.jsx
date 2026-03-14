import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HashLink } from 'react-router-hash-link';

gsap.registerPlugin(ScrollTrigger);

const VisaCanada = () => {
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

  const requirements = [
    "Original passport with at least six months validity from the date of intended travel.",
    "Completely filled and signed online visa application form (IMM5257E) with bar code page.",
    "Completely filled family details sheet (IMM5645E).",
    "Completely filled and signed VFS consent form.",
    "2 passport size white background photographs with face close up.",
    "Covering letter stating name, passport number and the purpose of travel.",
    "Latest personal bank statement for the last six months and ITR of last three years."
  ];

  const categories = [
    {
      title: "Self Employed / Businessman",
      items: [
        "Relationship proof (MOA for Directors, Partnership Deed for Partners, Proprietorship Certificate)",
        "Company’s latest Bank statement (6 months) and ITR (3 years)"
      ]
    },
    {
      title: "Employed / Service Person",
      items: [
        "No objection certificate (NOC) from current Employer",
        "Salary slip for last 3 months / salary certificate from Employer"
      ]
    },
    {
      title: "For Students",
      items: [
        "Leave sanction letter from the School / Institute",
        "School/Institute ID card copy"
      ]
    }
  ];

  const feeDetails = [
    { label: "Visa Fee", value: "CAD 100 (INR equiv. via credit card)" },
    { label: "Biometrics Charges", value: "CAD 85 (INR equiv. via credit card)" },
    { label: "VFS Assisted Services", value: "INR 395/- in cash" },
    { label: "VFS Package Transmission", value: "INR 449/- (for non-biometric)" },
    { label: "Processing Time", value: "Minimum 20-25 working days", highlight: true }
  ];

  return (
    <div ref={containerRef} className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?auto=format&fit=crop&q=80&w=2000" 
            alt="Explore Canada" 
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
            <span className="gold-gradient italic">Canada</span>
          </h2>
          <p className="gsap-reveal text-white/80 text-lg md:text-xl font-medium mt-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Navigating your journey to the Great White North with precision-led expertise.
          </p>
        </div>
      </section>

      {/* High Commission Info */}
      <section className="py-20 bg-brand-surface border-b border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between p-12 bg-white rounded-[3rem] shadow-sm border border-neutral-100">
            <div className="space-y-4">
              <h3 className="text-brand-gold font-black uppercase tracking-widest text-xs">Canadian High Commission</h3>
              <p className="text-2xl font-black text-brand-dark">7/8 Shantipath, Chanakyapuri, New Delhi</p>
              <div className="flex flex-wrap gap-6 text-sm font-medium text-neutral-500">
                <p>Tel: 011-41782000</p>
                <p>Fax: 011-41782020</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 shrink-0">
              <a href="mailto:delhi-im-enquiry@international.gc.ca" className="text-brand-dark hover:text-brand-gold font-bold transition-colors">delhi-im-enquiry@international.gc.ca</a>
              <a href="http://www.canadainternational.gc.ca" target="_blank" rel="noreferrer" className="text-brand-gold font-black uppercase text-[10px] tracking-[0.2em] border-b border-brand-gold/30 pb-1">Visit Website</a>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-32 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              Canada - <br />
              <span className="text-brand-gold italic">Tourist Visa</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-start">
            {/* Details on the Left - Balanced 50% width */}
            <div className="space-y-12">
              <div className="gsap-reveal bg-brand-surface p-10 rounded-[3rem] border border-brand-gold/10">
                <h4 className="text-3xl font-black text-brand-dark tracking-tighter leading-tight">
                  Tourist Visa <br />
                  <span className="text-brand-gold">Application Details:</span>
                </h4>
                <div className="h-1 w-20 bg-brand-gold mt-6 mb-4 rounded-full" />
                <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nationality: India | Checklist</p>
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

            {/* Expansive Image on the Right - Balanced 50% width */}
            <div className="gsap-reveal sticky top-32">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group h-[850px] border-4 border-white shadow-brand-gold/5">
                <img 
                  src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=2000" 
                  alt="Majestic Canada" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">Premium Travel Experience</span>
                  <p className="text-white font-black text-5xl tracking-tighter leading-none mb-4">Vancouver</p>
                  <p className="text-white/70 font-bold text-lg max-w-sm leading-relaxed">Where the mountains meet the sea in seamless luxury.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-reveal-stagger grid md:grid-cols-3 gap-8 mb-24">
            {categories.map((cat, i) => (
              <div key={i} className="gsap-reveal-item p-10 bg-brand-surface rounded-[3.5rem] border border-neutral-100 space-y-6 flex flex-col">
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

          <div className="gsap-reveal grid lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 bg-brand-dark p-16 rounded-[5rem] text-white flex flex-col justify-center">
              <h4 className="text-brand-gold font-black uppercase tracking-widest text-xs mb-12">Financials & Timeline</h4>
              <div className="space-y-8">
                {feeDetails.map((fee, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6">
                    <span className="text-neutral-400 text-sm font-bold uppercase tracking-wider">{fee.label}</span>
                    <span className={`font-black tracking-tight ${fee.highlight ? 'text-brand-gold text-2xl' : 'text-xl text-white'}`}>{fee.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 h-full">
              <div className="p-14 bg-white rounded-[4rem] border border-neutral-100 space-y-10 flex flex-col justify-center">
                <h4 className="text-brand-dark font-black text-3xl tracking-tighter">Important Please Note:</h4>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-3 shrink-0" />
                    <p className="text-neutral-500 font-bold leading-relaxed text-lg">Online form filling charges is <span className="text-brand-dark">INR 300/-</span></p>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-2 h-2 rounded-full bg-brand-gold mt-3 shrink-0" />
                    <p className="text-neutral-500 font-bold leading-relaxed text-lg">VFS Delhi Biometrics <span className="text-brand-dark">requires in-person presence.</span></p>
                  </div>
                  <div className="p-8 bg-brand-surface rounded-3xl border-l-[6px] border-brand-gold italic text-base font-black text-neutral-700 shadow-sm leading-relaxed">
                    "Kindly share your preferred date for the bio-metric process in Delhi."
                  </div>
                </div>
              </div>

              <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[500px] relative">
                <img 
                  src="/canada_vfs.png" 
                  alt="VFS Center Guide" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canada Bottom CTA Section */}
      <section className="relative py-48 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=2000"
            alt="Canada Experience"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-transparent to-brand-dark/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="gsap-reveal max-w-4xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
              Plan an Unforgettable Experience in <span className="text-brand-gold">Canada Today!</span>
            </h2>
            <p className="text-xl text-neutral-200 font-medium max-w-2xl mx-auto leading-relaxed">
              We can help you fit your stay and experience within your allotted budget.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-8 justify-center items-center">
              <HashLink 
                smooth 
                to="/contact"
                className="bg-brand-gold text-white px-12 py-5 rounded-full font-black text-xl hover:scale-110 hover:shadow-2xl hover:shadow-brand-gold/40 transition-all active:scale-95"
              >
                Book Your Stay Now
              </HashLink>
              <HashLink 
                to="/contact"
                className="text-white hover:text-brand-gold transition-colors font-black text-lg uppercase tracking-widest border-b-2 border-brand-gold/30 hover:border-brand-gold"
              >
                Contact Us
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaCanada;
