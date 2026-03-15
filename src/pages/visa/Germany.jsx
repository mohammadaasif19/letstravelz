import React from 'react';
import InfoLayout from '../../components/layout/InfoLayout';

const Germany = () => {
  const requirements = [
    "Original passport with at least 6 months validity.",
    "2 latest Biometric photographs (35x45mm, white background).",
    "Schengen Visa application form fully completed and signed.",
    "Personal covering letter stating travel plan and purpose.",
    "Personal bank statement (last 6 months) with bank seal.",
    "ITR for the last 3 years.",
    "Confirmed hotel booking and flight reservations.",
    "Travel health insurance (Minimum coverage €30,000)."
  ];

  const categories = [
    { 
      title: "Self Employed", 
      items: ["Business registration copy", "Company bank statement (6 months)", "Company ITR (3 years)"] 
    },
    { 
      title: "Employed", 
      items: ["Employment contract/NOC", "Salary slips for last 3 months"] 
    },
    { 
      title: "Student", 
      items: ["School/College ID copy", "No objection letter from institution"] 
    },
    { 
      title: "Retired", 
      items: ["Pension statement (6 months)", "Retirement certificate copy"] 
    }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="Germany"
      heroBadge="Official Visa Guide"
      ctaImage="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Germany Today!"
    >
      <section className="py-32 container mx-auto px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              Germany - <br />
              <span className="text-brand-gold italic">Schengen Visa</span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24 items-start">
            <div className="space-y-12">
              <div className="gsap-reveal bg-brand-surface p-10 rounded-[3rem] border border-brand-gold/10">
                <h4 className="text-3xl font-black text-brand-dark tracking-tighter leading-tight">
                  Application <br />
                  <span className="text-brand-gold">Details:</span>
                </h4>
                <div className="h-1 w-20 bg-brand-gold mt-6 mb-4 rounded-full" />
                <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nationality: India | Schengen Area</p>
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
                  src="/de_bavaria.png" 
                  alt="Neuschwanstein Castle, Germany" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">Bavarian Legends</span>
                  <p className="text-white font-black text-5xl tracking-tighter leading-none mb-4">Neuschwanstein</p>
                  <p className="text-white/70 font-bold text-lg max-w-sm leading-relaxed">A fairytale escape into the heart of Europe's most enchanting forests.</p>
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

export default Germany;
