import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Bali = () => {
  const activities = [
    { title: "Scuba diving", image: "/bali_scuba.png" },
    { title: "River rafting", image: "/bali_rafting.png" },
    { title: "Snorkeling", image: "/bali_snorkeling.png" },
    { title: "Bali Swing", image: "/bali_swing.png" },
    { title: "ATV ride", image: "/bali_atv.png" }
  ];

  const places = [
    { name: "Handara Gate", image: "/bali_handara.png" },
    { name: "Ulun Danu", image: "/bali_ulun_danu.png" },
    { name: "Seminyak Beach", image: "/bali_seminyak.png" },
    { name: "Diamond Beach", image: "/bali_diamond.png" },
    { name: "Kelingking Beach", image: "/bali_kelingking.png" },
    { name: "Uluwatu Temple", image: "/bali_uluwatu.png" }
  ];

  return (
    <InfoLayout
      heroImage="/bali_hero.png"
      heroTitle="Explore"
      heroSubtitle="Bali With Us"
      heroBadge="Your Balinese Odyssey"
      ctaImage="/bali_cta.png"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience In Bali Today!"
    >
      {/* About Bali Section */}
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img
                src="/bali_about.png"
                alt="Balinese Temple Gateway"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-white/90">Spiritual Heritage</p>
                <h4 className="text-3xl font-black tracking-tighter text-white">Temple Serenity</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Island of the <br />
                <span className="text-brand-gold italic">Endless Gods</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Bali, the Island of Gods, is where natural beauty, spirituality, and art come together in harmony. With emerald rice terraces, tranquil temples, and pristine beaches, Bali enchants every traveler seeking peace and inspiration. From sunrise at Mount Batur to the calm of Ubud’s forests, the island is pure paradise.
              </p>
              <p>
                At Let’s Travelz, we invite you to experience Bali’s diverse magic—surfing in Kuta, diving in Nusa Penida, exploring the traditional villages, and discovering the island’s vibrant nightlife. Each journey is designed for balance—between adventure and serenity, nature and culture.
              </p>
              <div className="relative pt-12">
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-gold rounded-full" />
                <p className="italic font-bold text-brand-dark text-2xl leading-relaxed">
                  "We believe Bali isn’t just a destination—it’s a feeling of renewal, a spiritual connection, and a story that stays in your heart long after you’ve left."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-40 bg-brand-dark relative overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Adventure & Thrill</div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Activities You Can <span className="text-brand-gold">Do In Bali</span>
            </h3>
          </div>

          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {activities.map((activity, i) => (
              <div key={i} className="gsap-reveal-item group relative overflow-hidden rounded-[3rem] bg-brand-surface aspect-[3/4] shadow-2xl">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-black text-2xl tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{activity.title}</p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-brand-gold transition-all duration-700 mx-auto" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 gsap-reveal">
            <HashLink
              to="/contact"
              className="inline-flex items-center gap-6 bg-brand-gold text-white px-12 py-6 rounded-full font-black text-xl hover:scale-105 hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all"
            >
              Start Your Adventure
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </HashLink>
          </div>
        </div>
      </section>

      {/* Famous Places Section */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6 max-w-4xl text-left">
            <div className="w-20 h-2 bg-brand-gold rounded-full" />
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter">
              Famous Places <br />
              <span className="text-brand-gold italic">To Visit In Bali</span>
            </h3>
            <p className="text-neutral-400 font-bold uppercase tracking-[0.4em] text-xs">Curated Selection Of The Island's Most Iconic Coordinates</p>
          </div>

          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[0].image} alt={places[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-xs mb-4">Historical Monument</p>
                  <h4 className="text-white text-5xl font-black tracking-tighter">{places[0].name}</h4>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={places[1].image} alt={places[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <h4 className="text-white text-3xl font-black tracking-tighter">{places[1].name}</h4>
                  </div>
                </div>
                <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={places[2].image} alt={places[2].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <h4 className="text-white text-3xl font-black tracking-tighter">{places[2].name}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[3].image} alt={places[3].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[3].name}</h4>
                </div>
              </div>
              <div className="gsap-reveal-item group relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl bg-brand-gold p-1 flex flex-col">
                <div className="flex-grow overflow-hidden rounded-[2.8rem]">
                  <img src={places[4].image} alt={places[4].name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                </div>
                <div className="p-6">
                  <h4 className="text-white text-2xl font-black tracking-tighter truncate">{places[4].name}</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-12">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[5].image} alt={places[5].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-12">
                  <h4 className="text-white text-6xl font-black tracking-tighter">{places[5].name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfoLayout>
  );
};

export default Bali;
