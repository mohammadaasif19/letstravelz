import React from 'react';
import InfoLayout from '../../components/layout/InfoLayout';

const Australia = () => {
  const requirements = [
    "Original passport with at least 6 months validity.",
    "Form 1419 and 956 completely filled and signed.",
    "2 latest passport size white background photographs.",
    "Covering letter for the purpose of travel.",
    "Latest personal bank statement (last 6 months) with bank seal.",
    "ITR for the last 3 years.",
    "Aadhar card and Pan card copy.",
    "Confirmed hotel and flight reservations."
  ];

  const categories = [
    { 
      title: "Self Employed", 
      items: ["Shop Act / MOA / Partnership Deed", "Company bank statement (6 months)", "Company ITR (3 years)"] 
    },
    { 
      title: "Employed", 
      items: ["NOC from employer", "Salary slips for last 3 months"] 
    },
    { 
      title: "Student", 
      items: ["ID card copy", "Leave sanction letter"] 
    },
    { 
      title: "Retired", 
      items: ["Pension slips / Retirement proof", "Bank statement of pension account"] 
    }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="Australia"
      heroBadge="Official Visa Guide"
      ctaImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Australia Today!"
    >
      <section className="py-32 container mx-auto px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              Australia - <br />
              <span className="text-brand-gold italic">Tourist / Business Visa</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-start">
            <div className="space-y-12">
              <div className="gsap-reveal bg-brand-surface p-10 rounded-[3rem] border border-brand-gold/10">
                <h4 className="text-3xl font-black text-brand-dark tracking-tighter leading-tight">
                  Application <br />
                  <span className="text-brand-gold">Requirements:</span>
                </h4>
                <div className="h-1 w-20 bg-brand-gold mt-6 mb-4 rounded-full" />
                <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nationality: India | Subclass 600</p>
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

            <div className="gsap-reveal sticky top-32">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group h-[850px] border-4 border-white shadow-brand-gold/5">
                <img 
                  src="/au_sydney.png" 
                  alt="Sydney, Australia" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">Iconic Landmarks</span>
                  <p className="text-white font-black text-5xl tracking-tighter leading-none mb-4">Sydney Opera</p>
                  <p className="text-white/70 font-bold text-lg max-w-sm leading-relaxed">Discover the vibrant soul of Australia's most legendary harbor city.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
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
        </div>
      </section>
    </InfoLayout>
  );
};

export default Australia;
