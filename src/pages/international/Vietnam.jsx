import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Vietnam = () => {
  const activities = [
    { title: "Cruise", image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1000" },
    { title: "Rock Climbing", image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=1000" },
    { title: "Camping", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000" },
    { title: "Cycling", image: "https://wanderon-images.gumlet.io/blogs/new/2024/09/vietnam-cycling-tours.jpg?auto=compress%2Cformat&w=768" }
  ];

  const places = [
    { name: "Da Nang", image: "https://worldmatetravel.com/uploads/da-nang-beach.png-image-ujzgltns.png", type: "Coastal City" },
    { name: "Halong Bay", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000", type: "Natural Wonder" },
    { name: "Sapa", image: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/222595409.jpg?k=438d4696cf22023e0330441f17e9d85227feacbc9992d2c25ce25daf0b4c02bd&o=", type: "Mountain Retreat" },
    { name: "Ho Chi Minh City", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&q=80&w=1000", type: "Economic Hub" },
    { name: "Hoi An", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/r/32/95/49/ab/caption.jpg", type: "Ancient Town" }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="Vietnam With Us"
      heroBadge="Stunning Landscapes"
      ctaImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Vietnam Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2000" alt="Vietnam" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-brand-gold">Timeless Charm</p>
                <h4 className="text-3xl font-black tracking-tighter">Emerald Grace</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12 text-left">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Land of the <br />
                <span className="text-brand-gold italic">Rising Dragon</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Vietnam captivates travelers with its stunning landscapes, timeless charm, and deep cultural heritage. From the emerald waters of Ha Long Bay to the bustling streets of Hanoi, every corner reflects a story of resilience, grace, and natural beauty. Whether it’s mist-covered mountains or tranquil rice terraces, Vietnam is a land that touches the heart and soothes the soul.
              </p>
              <p>
                At Let’s Travelz, we design journeys that take you into the true essence of Vietnam. Sail through the magical limestone caves of Ha Long Bay, wander the lantern-lit lanes of Hoi An, or feel the French charm of Ho Chi Minh City. Savor a bowl of authentic pho on a local street, and experience the warm smiles and welcoming spirit that make Vietnam unforgettable.
              </p>
            </div>

            <div className="gsap-reveal pt-8">
              <HashLink to="/contact" className="bg-brand-dark text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl">Contact Now</HashLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 bg-brand-dark relative overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Unforgettable Experiences</div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Activities You Can <span className="text-brand-gold">Do In Vietnam</span>
            </h3>
          </div>
          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, i) => (
              <div key={i} className="gsap-reveal-item group relative overflow-hidden rounded-[3rem] bg-brand-surface aspect-[3/4] shadow-2xl">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-black text-2xl tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{activity.title}</p>
                  <div className="h-0.5 w-0 group-hover:w-full bg-brand-gold transition-all duration-700 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white overflow-hidden text-left">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6 max-w-4xl">
            <div className="w-20 h-2 bg-brand-gold rounded-full" />
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter">
              Famous Places <br />
              <span className="text-brand-gold italic">To Visit In Vietnam</span>
            </h3>
            <p className="text-neutral-400 font-bold uppercase tracking-[0.4em] text-xs">Explore the hottest travel spots around the globe.</p>
          </div>
          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[0].image} alt={places[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-3">{places[0].type}</p><h4 className="text-white text-5xl font-black tracking-tighter">{places[0].name}</h4></div>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[1].image} alt={places[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[1].type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{places[1].name}</h4></div>
              </div>
            </div>
            <div className="md:col-span-4"><div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={places[2].image} alt={places[2].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[2].type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{places[2].name}</h4></div>
            </div></div>
            <div className="md:col-span-4"><div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={places[3].image} alt={places[3].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[3].type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{places[3].name}</h4></div>
            </div></div>
            <div className="md:col-span-4"><div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
              <img src={places[4].image} alt={places[4].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[4].type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{places[4].name}</h4></div>
            </div></div>
          </div>
        </div>
      </section>
    </InfoLayout>
  );
};

export default Vietnam;
