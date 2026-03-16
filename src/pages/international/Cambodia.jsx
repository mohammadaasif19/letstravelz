import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Cambodia = () => {
  const activities = [
    { title: "Cycling", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/e2/4f/c6/great-countryside-cycling.jpg?w=1200&h=1200&s=1" },
    { title: "Jungle Safari", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/88/be/d4.jpg" },
    { title: "Trekking", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/ea/85/35.jpg" },
    { title: "Angkor Wat", image: "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&q=80&w=1000" }
  ];

  const places = [
    { name: "National Museum", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/71/83/bc/photo1jpg.jpg?w=1200&h=-1&s=1", type: "Cultural Landmark" },
    { name: "Koh Rong", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/42/98.jpg", type: "Island Bliss" },
    { name: "Siem Reap", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Front_porch_of_Wat_Damnak.jpg", type: "Gateway Town" },
    { name: "Bayon Temple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnIidsn3NeGp0wDVpkjZmjIYY3jAMeOnrJyQ&s", type: "Khmer Art" },
    { name: "Song Saa Island", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/a9/73/f1/song-saa-private-island.jpg?w=900&h=-1&s=1", type: "Private Paradise" }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="Cambodia With Us"
      heroBadge="Mystery & Majesty"
      ctaImage="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Cambodia Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://media.licdn.com/dms/image/v2/D5612AQF9RxJamJ6nFQ/article-cover_image-shrink_600_2000/B56ZqbkjOsH8AQ-/0/1763546642192?e=2147483647&v=beta&t=KJg-1uAmAV3oXqy-xvN69Z2ejFRf-r2trpdTsTkSDVc" alt="Cambodia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-white/90">Ancient Heritage</p>
                <h4 className="text-3xl font-black tracking-tighter text-white">Stone & Soul</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12 text-left">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Mystery, Majesty <br />
                <span className="text-brand-gold italic">& Timeless Beauty</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Cambodia is a land of mystery, majesty, and timeless beauty—where every temple stone and riverbank echoes with stories of the past. The world-renowned Angkor Wat, with its magnificent carvings and golden sunrises, stands as a symbol of devotion, artistry, and ancient Khmer glory. Beyond its temples, Cambodia unfolds through serene countryside landscapes, floating villages, and the gentle smiles of its people.
              </p>
              <p>
                At Let’s Travelz, we take you on a journey through Cambodia’s rich heritage and hidden wonders. Witness the magic of sunrise over Angkor Wat, glide along the Mekong River, and wander the lively boulevards of Phnom Penh. Discover the charm of Siem Reap, the tranquility of Tonle Sap Lake, and the authentic flavors of Khmer cuisine that tell their own delicious story.
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
              Activities You Can <span className="text-brand-gold">Do In Cambodia</span>
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
              <span className="text-brand-gold italic">To Visit In Cambodia</span>
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

export default Cambodia;
