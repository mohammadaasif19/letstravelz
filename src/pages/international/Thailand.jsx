import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Thailand = () => {
  const activities = [
    {
      title: "Grand Palace",
      image: "/thailand_palace.png"
    },
    {
      title: "Full Moon Party",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Jungle Safari",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/88/be/d4.jpg"
    },
    {
      title: "Scuba Diving",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const places = [
    {
      name: "Krabi",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=2000",
      type: "Coastal Paradise"
    },
    {
      name: "Koh Samui",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&q=80&w=2000",
      type: "Luxury Escape"
    },
    {
      name: "Bangkok",
      image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&q=80&w=2000",
      type: "Metropolitan Soul"
    },
    {
      name: "Phi Phi Islands",
      image: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/2024/01/Main-Image-1-scaled-optimize.jpg",
      type: "Exotic Haven"
    },
    {
      name: "Phuket",
      image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=2000",
      type: "Cultural Gem"
    }
  ];

  return (
    <InfoLayout
      heroImage="/thailand_hero.png"
      heroTitle="Explore"
      heroSubtitle="Thailand With Us"
      heroBadge="Land of Smiles"
      ctaImage="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience In Thailand Today!"
    >
      {/* About Thailand Section */}
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img
                src="/thailand_about.png"
                alt="Golden Thai Temple"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-left">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-white/90">Cultural Wonder</p>
                <h4 className="text-3xl font-black tracking-tighter text-white">Golden Heritage</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12 text-left">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">The Land of Smiles</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Siam's Eternal <br />
                <span className="text-brand-gold italic">Sun-Kissed Charm</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Thailand, fondly known as the Land of Smiles, is where golden temples, tropical islands, and bustling cities create an irresistible charm. From the dazzling neon-lit streets of Bangkok to the serene, limestone-framed beaches of Krabi, every corner of this kingdom bursts with life, spirituality, and vibrant color.
              </p>
              <p>
                At Let’s Travelz, we bring you the best of Thailand—from floating markets tucked in hidden canals to world-class traditional spas that redefine relaxation. We curate scenic island-hopping odysseys and culinary adventures heart-crafted to awaken every sense.
              </p>
              <div className="relative pt-12">
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-gold rounded-full" />
                <p className="italic font-bold text-brand-dark text-2xl leading-relaxed">
                  "Let the legendary warmth of the Thai people and the incomparable beauty of its landscapes write a story of wonder in your heart."
                </p>
              </div>
            </div>

            <div className="gsap-reveal pt-8">
              <HashLink
                to="/contact"
                className="bg-brand-dark text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl"
              >
                Contact Now
              </HashLink>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-40 bg-brand-dark relative overflow-hidden text-center">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Unforgettable Experiences</div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Activities You Can <span className="text-brand-gold">Do In Thailand</span>
            </h3>
          </div>

          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Famous Places Section */}
      <section className="py-40 bg-white overflow-hidden text-left">
        <div className="container mx-auto px-6">
          <div className="gsap-reveal mb-24 space-y-6 max-w-4xl">
            <div className="w-20 h-2 bg-brand-gold rounded-full" />
            <h3 className="text-5xl md:text-8xl font-black text-brand-dark leading-[0.9] tracking-tighter">
              Famous Places <br />
              <span className="text-brand-gold italic">To Visit In Thailand</span>
            </h3>
            <p className="text-neutral-400 font-bold uppercase tracking-[0.4em] text-xs">Explore the hottest travel spots around the globe.</p>
          </div>

          <div className="gsap-reveal-stagger grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[0].image} alt={places[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-3">{places[0].type}</p>
                  <h4 className="text-white text-5xl font-black tracking-tighter">{places[0].name}</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="gsap-reveal-item group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-2 border-neutral-50">
                <img src={places[1].image} alt={places[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[1].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[1].name}</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[2].image} alt={places[2].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[2].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[2].name}</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[3].image} alt={places[3].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[3].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[3].name}</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="gsap-reveal-item group relative h-[350px] rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={places[4].image} alt={places[4].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-brand-gold font-black uppercase tracking-widest text-[10px] mb-2">{places[4].type}</p>
                  <h4 className="text-white text-3xl font-black tracking-tighter">{places[4].name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </InfoLayout>
  );
};

export default Thailand;
