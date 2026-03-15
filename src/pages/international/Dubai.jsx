import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Dubai = () => {
  const activities = [
    {
      title: "Adventure Park",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/65/88/23/aventura-extreme-spiderweb.jpg?w=1200&h=1200&s=1"
    },
    {
      title: "Dubai Frame",
      image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/g1wfuvte17twcjnltnjb/DubaiFrameTicket.jpg"
    },
    {
      title: "Burj Khalifa",
      image: "https://www.visitdubai.com/-/media/images/app-card-images/sights-and-attractions/burj-khalifa-featured-card-600x910-opt.jpg?rev=c685db5f545446ddb85366e8e86139b1&cx=0.5&cy=0.5"
    },
    {
      title: "Desert Safari",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const places = [
    {
      name: "Dubai Creek",
      image: "https://media.cntravellerme.com/photos/69651c8a34729aa5491469c4/16:9/w_7008,h_3942,c_limit/2209178668",
      type: "Historical Heart"
    },
    {
      name: "Miracle Garden",
      image: "https://gmz.ae/wp-content/uploads/2025/02/Miracle-Garden-Dubai-1200x900.png",
      type: "Floral Wonderland"
    },
    {
      name: "Museum of the Future",
      image: "https://assets.guideofdubai.com/uploads/Museum-of-the-Future-Architect--The-Vision-Behind-Dubai-s-Most-Iconic-Structure.webp-Exxn8Q.webp",
      type: "Architectural Marvel"
    },
    {
      name: "Dubai Frame",
      image: "https://rockingdubai.com/wp-content/uploads/2025/10/ChatGPT-Image-Oct-26-2025-08_44_57-PM.png",
      type: "Golden Gateway"
    },
    {
      name: "Palm Jumeirah",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b3/69/32/the-beach.jpg?w=900&h=500&s=1",
      type: "Island Paradise"
    }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="Dubai With Us"
      heroBadge="City of Dreams"
      ctaImage="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/b3/69/32/the-beach.jpg?w=900&h=500&s=1"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Dubai Today!"
    >
      {/* About Dubai Section */}
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img
                src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=2000"
                alt="Dubai Skyline"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-brand-gold">Innovation Heaven</p>
                <h4 className="text-3xl font-black tracking-tighter">Modern Oasis</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12 text-left">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Innovation Meets <br />
                <span className="text-brand-gold italic">Elegance</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Dubai is where innovation meets elegance—an oasis of luxury in the golden desert. From the world’s tallest tower to vast shopping malls, every experience here redefines grandeur. Yet, beyond the glitter, Dubai’s cultural roots still shine through its souks, cuisine, and hospitality.
              </p>
              <p>
                At Let’s Travelz, we take you beyond the skyline—into thrilling desert safaris, luxury yacht rides, and immersive city experiences. Discover modern attractions like Burj Khalifa and Palm Jumeirah while enjoying authentic Arabian warmth.
              </p>
              <div className="relative pt-12">
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-gold rounded-full" />
                <p className="italic font-bold text-brand-dark text-2xl leading-relaxed">
                  "At Let’s Travelz, we help you uncover both sides of Dubai — its modern marvels and its Arabian heritage."
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
            <div className="inline-block px-4 py-1 rounded-full border border-brand-gold/30 text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Adventure & Thrill</div>
            <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Activities You Can <span className="text-brand-gold">Do In Dubai</span>
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
              <span className="text-brand-gold italic">To Visit In Dubai</span>
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

export default Dubai;
