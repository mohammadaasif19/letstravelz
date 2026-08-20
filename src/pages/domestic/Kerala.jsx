import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Kerala = () => {
  const activities = [
    { title: "Ayurvedic Massage", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000" },
    { title: "Tea Plantations", image: "/tea%20plantation.jpg" },
    { title: "Hill Trekking", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c9/7b/10/ranipuram-hills.jpg?w=500&h=500&s=1" },
    { title: "Houseboat Cruise", image: "https://togethertounknown.com/wp-content/uploads/2023/01/DJI_0318-min.jpg" }
  ];

  const places = [
    { name: "Wayanad", image: "/wayanad.jpg", type: "Nature's Paradise" },
    { name: "Kovalam", image: "https://www.karthitravels.com/images/destinations/kovalam.jpg", type: "Coastal Serenity" },
    { name: "Munnar", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=1000", type: "Misty Hills" },
    { name: "Alleppey", image: "https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Alleppey-Kerala.jpg", type: "Backwater Soul" },
    { name: "Fort Kochi", image: "https://mysimplesojourn.com/wp-content/uploads/2018/09/Feature.jpg", type: "Historic Coast" }
  ];

  return (
    <InfoLayout
      heroImage="https://hblimg.mmtcdn.com/content/hubble/img/kerala_landscape/mmt/activities/m_Kerala_Dec2022_8_l_402_715.jpg"
      heroTitle="Explore"
      heroSubtitle="Kerala With Us"
      heroBadge="God's Own Country"
      ctaImage="https://caleidoscope.in/wp-content/uploads/2025/09/How-to-Plan-a-Kerala-Itinerary-That-Fits-Any-Budget-02.jpg"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Kerala Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="/Liquid%20Heaven%20in%20kerala.jpg" alt="Kerala" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-white/90">Nature's Embrace</p>
                <h4 className="text-3xl font-black tracking-tighter text-white">Liquid Heaven</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Backwaters, Hills <br />
                <span className="text-brand-gold italic">& Soothing Beaches</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                At Let’s Travelz, we believe travel is more than just reaching a destination-it’s about the journey. Kerala, often called God’s Own Country, welcomes you with serene backwaters, lush greenery, and peaceful beaches that soothe your soul.
              </p>
              <p>
                At Let’s Travelz, we bring you the essence of Kerala-from a relaxing houseboat cruise in Alleppey to exploring Munnar’s misty hills and Kochi’s colonial charm. Every trip is crafted with care, comfort, and authenticity.
              </p>
              <p className="italic font-bold text-brand-dark">"At Let’s Travelz, we believe Kerala isn’t just a state-it’s an experience that stays with you forever."</p>
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
              Activities You Can <span className="text-brand-gold">Do In Kerala</span>
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
              <span className="text-brand-gold italic">To Visit In Kerala</span>
            </h3>
            <p className="text-neutral-400 font-bold uppercase tracking-[0.4em] text-xs">Explore the hottest travel spots around the globe.</p>
          </div>
          <div className="gsap-reveal-stagger flex flex-col gap-6 w-full group/places">
            {/* Row 1: Places 0 and 1 */}
            <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px] w-full">
              <div className="flex-[2] hover:flex-[3] relative group overflow-hidden rounded-[3rem] shadow-xl block transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/places:opacity-50 group-hover/places:saturate-[0.7] hover:!opacity-100 hover:!scale-[1.02] hover:!saturate-100 hover:shadow-[0_30px_60px_rgba(26,28,35,0.25)] hover:z-10">
                <div className="gsap-reveal-item w-full h-full relative">
                  <img src={places[0].image} alt={places[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-3">{places[0].type}</p><h4 className="text-white text-5xl font-black tracking-tighter">{places[0].name}</h4></div>
                </div>
              </div>
              <div className="flex-[1] hover:flex-[2] relative group overflow-hidden rounded-[3rem] shadow-xl block transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/places:opacity-50 group-hover/places:saturate-[0.7] hover:!opacity-100 hover:!scale-[1.02] hover:!saturate-100 hover:shadow-[0_30px_60px_rgba(26,28,35,0.25)] hover:z-10">
                <div className="gsap-reveal-item w-full h-full relative">
                  <img src={places[1].image} alt={places[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[1].type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{places[1].name}</h4></div>
                </div>
              </div>
            </div>
            {/* Row 2: Places 2, 3 and 4 */}
            <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[350px] w-full">
              {places.slice(2).map((place, i) => (
                <div key={i} className="flex-[1] hover:flex-[1.5] relative group overflow-hidden rounded-[3rem] shadow-xl block transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/places:opacity-50 group-hover/places:saturate-[0.7] hover:!opacity-100 hover:!scale-[1.02] hover:!saturate-100 hover:shadow-[0_30px_60px_rgba(26,28,35,0.25)] hover:z-10">
                  <div className="gsap-reveal-item w-full h-full relative">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8"><p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{place.type}</p><h4 className="text-white text-3xl font-black tracking-tighter">{place.name}</h4></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </InfoLayout>
  );
};

export default Kerala;
