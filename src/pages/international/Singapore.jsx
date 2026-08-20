import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Singapore = () => {
  const activities = [
    { title: "Orchid Road", image: "/orchid%20road.jpg" },
    { title: "Cycling", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/42/d3/fe.jpg" },
    { title: "Marina Bay Sands", image: "https://hiddenxp.com/cdn/shop/articles/marina_bay_skyline_daytime.jpg?v=1713930741&width=1600" },
    { title: "Singapore Flyer", image: "https://ik.imagekit.io/travalot/development/resources/attachments/2025/7/5/d16193c0-71ce-11f0-9418-51a68a0fa9a1.jpg?tr=w-1260,h-800" }
  ];

  const places = [
    { name: "Botanic Garden", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/7f/e5/ce/beautiful-botanic-gardens.jpg?w=700&h=-1&s=1", type: "Lush Greenery" },
    { name: "Singapore Flyer", image: "https://cdn-imgix.headout.com/media/images/0f5fbdd30e8b79ff759de569134e65f1-25410---Singapore---165-Sky-Dining-by-Singapore-Flyer---09.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&ar=14%3A9&crop=faces&fit=crop", type: "City Observation" },
    { name: "Sri Mariamman Temple", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1000", type: "Heritage Site" },
    { name: "Chinatown", image: "/Chinatown.jpg", type: "Cultural District" },
    { name: "Night Safari", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000", type: "Nocturnal Wildlife" }
  ];

  return (
    <InfoLayout
      heroImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/b1/singapore.jpg?w=1200&h=700&s=1"
      heroTitle="Explore"
      heroSubtitle="Singapore With Us"
      heroBadge="Modern Innovation"
      ctaImage="https://www.travelxp.com/_next/image?url=https%3A%2F%2Fimages.travelxp.com%2Fimages%2Fsingapore%2Fsingapore%2Fmerlion.jpg&w=1920&q=75"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Singapore Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80&w=1000" alt="Singapore" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-white/90">Futuristic Gardens</p>
                <h4 className="text-3xl font-black tracking-tighter text-white">Island Harmony</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Innovation & <br />
                <span className="text-brand-gold italic">Cultural Richness</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Singapore is a shining example of modern innovation wrapped in cultural richness. This island nation beautifully blends futuristic architecture, lush gardens, and vibrant neighborhoods to create an experience that feels both global and deeply rooted in tradition. From the dazzling skyline of Marina Bay to the heritage streets of Chinatown and Little India, every corner tells a story of harmony and progress.
              </p>
              <p>
                At Let’s Travelz, we bring you the best of Singapore-Gardens by the Bay’s surreal beauty, the thrill of Sentosa Island, Marina Bay Sands’ luxury, and the mouthwatering delights of hawker centers that define the city’s food culture. Our Singapore itineraries are thoughtfully curated to capture its contrasts-where skyscrapers rise beside temples, and innovation coexists with heritage.
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
              Activities You Can <span className="text-brand-gold">Do In Singapore</span>
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
              <span className="text-brand-gold italic">To Visit In Singapore</span>
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
                  <div className="absolute bottom-10 left-10">{places[0].type && <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-3">{places[0].type}</p>}<h4 className="text-white text-5xl font-black tracking-tighter">{places[0].name}</h4></div>
                </div>
              </div>
              <div className="flex-[1] hover:flex-[2] relative group overflow-hidden rounded-[3rem] shadow-xl block transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/places:opacity-50 group-hover/places:saturate-[0.7] hover:!opacity-100 hover:!scale-[1.02] hover:!saturate-100 hover:shadow-[0_30px_60px_rgba(26,28,35,0.25)] hover:z-10">
                <div className="gsap-reveal-item w-full h-full relative">
                  <img src={places[1].image} alt={places[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">{places[1].type && <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[1].type}</p>}<h4 className="text-white text-3xl font-black tracking-tighter">{places[1].name}</h4></div>
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
                    <div className="absolute bottom-8 left-8">{place.type && <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{place.type}</p>}<h4 className="text-white text-3xl font-black tracking-tighter">{place.name}</h4></div>
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

export default Singapore;
