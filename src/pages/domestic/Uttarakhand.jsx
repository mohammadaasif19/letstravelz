import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Uttarakhand = () => {
  const activities = [
    { title: "Hill Trekking", image: "https://www.swantour.com/blogs/wp-content/uploads/2018/12/Kuari-Pass-Trekking-in-Uttarakhand.jpg" },
    { title: "Wildlife Safari", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000" },
    { title: "River Rafting", image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&q=80&w=1000" },
    { title: "Cable Cars", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Cable_car_to_Mansa_Devi_Temple,_Haridwar,_Uttarakhand,_India.jpg?width=1000" }
  ];

  const places = [
    { name: "Kedarnath", image: "https://www.chardham-pilgrimage-tour.com/assets/images/top-tourist-places-enroute-kedarnath-dham.webp", type: "Quiet Woods" },
    { name: "Nainital", image: "https://www.swantour.com/blogs/wp-content/uploads/2018/12/Nainital-Lake.jpg", type: "City of Lakes" },
    { name: "Mussoorie", image: "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1746526797mussorroe.jpg", type: "Queen of Hills" },
    { name: "Chopta Valley", image: "https://uttarakhandtourism.gov.in/assets/media/UTDB_media_logo1745916342a5160ff72b8591a242f1fe76dc5fe7f3.jpg", type: "Mini Switzerland" },
    { name: "Rishikesh", image: "/rishikesh.jpg", type: "Yoga Capital" }
  ];

  return (
    <InfoLayout
      heroImage="https://www.peakadventuretour.com/assets/imgs/uttarakhand-tourism-01.webp"
      heroTitle="Explore"
      heroSubtitle="Uttarakhand With Us"
      heroBadge="Land of Gods"
      ctaImage="https://myuniversaldiary.com/wp-content/uploads/2024/12/Mussorie-Uttarkhand.jpg"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Uttarakhand Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=2000" alt="Uttarakhand" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-white/90">Spiritual Peaks</p>
                <h4 className="text-3xl font-black tracking-tighter text-white">Divine Valleys</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Adventure & <br />
                <span className="text-brand-gold italic">Spirituality</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                At Let’s Travelz, we believe travel is about balancing adventure with spirituality. Uttarakhand, the Land of Gods, offers divine temples, river valleys, and serene hill towns.
              </p>
              <p>
                At Let’s Travelz, we take you from the peaceful banks of Rishikesh and Haridwar to the snowy beauty of Auli and Nainital’s lakeside charm.
              </p>
              <p className="italic font-bold text-brand-dark">"At Let’s Travelz, we believe Uttarakhand is not just a journey-it’s a soulful retreat."</p>
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
              Activities You Can <span className="text-brand-gold">Do In Uttarakhand</span>
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
              <span className="text-brand-gold italic">To Visit In Uttarakhand</span>
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

export default Uttarakhand;
