import React from 'react';
import InfoLayout from '../../components/layout/InfoLayout';

const NZ = () => {
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
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="New Zealand"
      heroBadge="Official Visa Guide"
      ctaImage="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in New Zealand Today!"
    >
      <section className="py-32 container mx-auto px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <div className="gsap-reveal mb-20 space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/10">Requirement Details</div>
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark tracking-tighter leading-[0.85]">
              New Zealand - <br />
              <span className="text-brand-gold italic">Tourist Visa</span>
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
        </div>
      </section>
    </InfoLayout>
  );
};

export default NZ;
