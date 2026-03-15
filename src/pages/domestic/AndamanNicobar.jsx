import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const AndamanNicobar = () => {
  const activities = [
    { title: "Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" },
    { title: "Island Hopping", image: "https://seahawksscuba.in/wp-content/uploads/2023/03/Island-Hopping-in-Andaman-scaled.jpg" },
    { title: "Snorkeling", image: "https://www.diveandaman.com/storage/blogs/180425093200-CostofSnorkellingintheAndamanIslands.jpg" },
    { title: "Parasailing", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1000" }
  ];

  const places = [
    { name: "Elephant Beach", image: "https://www.andamantourism.org/wp-content/uploads/2025/02/Elephant-beach-2.jpg", type: "Coral Wonders" },
    { name: "Havelock Island", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4d/47/0e/havelock-island.jpg?w=1200&h=700&s=1", type: "Pristine Sands" },
    { name: "Baratang Island", image: "https://www.andamanisland.in/storage/blogs/271224035001-baratang-limestone-caves.webp", type: "Limestone Caves" },
    { name: "Cellular Jail", image: "https://s7ap1.scene7.com/is/image/incredibleindia/cellular-jail-port-blair-andaman-and-nicobar-islands-1-attr-hero?qlt=82&ts=1726816912863", type: "Historic Landmark" },
    { name: "Radhanagar Beach", image: "https://cdn.prod.website-files.com/5b56319971ac8c7475a9d877/5ee481817da4561eb9621b3e_Radhanagar-.JPG", type: "Asia's Best" }
  ];

  return (
    <InfoLayout
      heroImage="https://www.tourmyindia.com/blog/wp-content/uploads/2021/09/Best-Places-to-Visit-in-Andaman.jpg"
      heroTitle="Explore"
      heroSubtitle="Andaman & Nicobar With Us"
      heroBadge="Tropical Escape"
      ctaImage="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Andaman Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://static.toiimg.com/photo/104400974.cms" alt="Andaman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-brand-gold">Island Life</p>
                <h4 className="text-3xl font-black tracking-tighter">Crystal Seas</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Turquoise Seas <br />
                <span className="text-brand-gold italic">& White Sands</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                At Let’s Travelz, we believe travel is about blending adventure with peace. The Andaman & Nicobar Islands offer turquoise seas, white-sand beaches, and vibrant marine life that capture every traveler’s heart.
              </p>
              <p>
                At Let’s Travelz, we take you diving in Havelock, exploring Cellular Jail’s history, and cruising through Port Blair’s beauty—crafting the perfect tropical escape.
              </p>
              <p className="italic font-bold text-brand-dark">"We believe the Andamans aren’t just islands—they’re a world of wonder waiting to be explored."</p>
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
              Activities You Can <span className="text-brand-gold">Do In Andaman</span>
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
              <span className="text-brand-gold italic">To Visit In Andaman</span>
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
            {places.slice(2).map((place, i) => (
              <div key={i} className="md:col-span-4">
                <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{place.type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{place.name}</h4></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InfoLayout>
  );
};

export default AndamanNicobar;
