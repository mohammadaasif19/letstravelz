import React from 'react';
import InfoLayout from '../../components/layout/InfoLayout';

const UK = () => {
  const requirements = [
    "Original passport with at least 6 months validity from the date of travel.",
    "Completely filled and signed online filled form (We will handle this for you).",
    "2 latest passport size white background photographs with face close up (do not staple).",
    "Covering letter stating name, passport number and the purpose of travel.",
    "Aadhar card copy of the applicant.",
    "Latest personal bank statement (last 3 months) and ITR for the last 3 years.",
    "All property, Saving papers & documents related to your application."
  ];

  const categories = [
    { 
      title: "If Visiting Someone", 
      items: ["Invitation letter with complete address and contact details", "Passport and valid residence permit copy of the inviter"] 
    },
    { 
      title: "Self Employed / Business", 
      items: ["Relationship proof (MOA / Partnership Deed / Proprietorship Certificate)", "Company's latest bank statement (3 months) and ITR (3 years)"] 
    },
    { 
      title: "Employed / Service person", 
      items: ["No objection certificate (NOC) from the current Employer", "Salary slip for the last 3 months / salary certificate"] 
    },
    { 
      title: "Student / Retired", 
      items: ["Leave sanction letter / School ID card copy", "Retirement proof with specific date of retirement"] 
    }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="United Kingdom"
      heroBadge="Official Visa Guide"
      ctaImage="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in UK Today!"
    >
      <section className="py-32 container mx-auto px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              United Kingdom - <br />
              <span className="text-brand-gold italic">Tourist / Business Visa</span>
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
                <p className="text-neutral-500 font-bold uppercase tracking-[0.2em] text-[10px]">Nationality: India | Standard Visitor</p>
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
                  src="/uk_london.png" 
                  alt="London, United Kingdom" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-16 left-16 right-16">
                  <span className="inline-block px-4 py-1 rounded-full bg-brand-gold text-white text-[10px] font-black uppercase tracking-widest mb-6">British Royal Heritage</span>
                  <p className="text-white font-black text-5xl tracking-tighter leading-none mb-4">Westminster</p>
                  <p className="text-white/70 font-bold text-lg max-w-sm leading-relaxed">Where history and grandeur converge in the heart of London.</p>
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

export default UK;
