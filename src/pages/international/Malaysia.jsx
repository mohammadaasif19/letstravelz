import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Malaysia = () => {
  const activities = [
    { title: "Cycling", image: "https://www.extravelmoney.com/blog/wp-content/uploads/2017/05/cycling-in-kuala-lumpur.jpg" },
    { title: "Wildlife Safari", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000" },
    { title: "Trekking", image: "https://media4.thrillophilia.com/images/photos/000/080/560/original/1627550018_shutterstock_1405028546.jpg?aio=w-753;h-450;crop&dpr=2" },
    { title: "Scuba diving", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" }
  ];

  const places = [
    { name: "Malacca", image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/ea/85/35.jpg", type: "Historic Town" },
    { name: "Petronas Twin Towers", image: "https://cdn.britannica.com/65/3465-050-AA5092D6/Petronas-Twin-Towers-Malaysia-Kuala-Lumpur-Associates.jpg", type: "City Icon" },
    { name: "Langkawi Island", image: "https://gommts3.mmtcdn.com/htl-imgs/htl-imgs/201603100722201228-c5cd7348_z.jpg", type: "Tropical Retreat" },
    { name: "Penang", image: "https://media.cntraveller.com/photos/6989e6347f118c28b914212f/master/w_1600%2Cc_limit/Flavourhunter-Penang-CNTuk-March2026-Lauryn-Ishak-Global-DSC08700.jpg", type: "Culture & Food" },
    { name: "Cameron Highlands", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/74/8c/41.jpg", type: "Cool Highlands" }
  ];

  return (
    <InfoLayout
      heroImage="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000"
      heroTitle="Explore"
      heroSubtitle="Malaysia With Us"
      heroBadge="Truly Asia"
      ctaImage="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Malaysia Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative text-left">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=2000" alt="Malaysia View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-brand-gold">Nature and City</p>
                <h4 className="text-3xl font-black tracking-tighter">Truly Asia</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12 text-left">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Symphony of <br />
                <span className="text-brand-gold italic">Multiculturalism</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                Malaysia, truly Asia, is a captivating land where modernity and tradition coexist in perfect harmony. From dazzling skyscrapers to sacred temples, from lush rainforests to pristine beaches — Malaysia welcomes every traveler with warmth and wonder. Its vibrant culture, tropical beauty, and rich heritage make it one of Asia’s most diverse and unforgettable destinations.
              </p>
              <p>
                At Let’s Travelz, we take you beyond the ordinary — from exploring Kuala Lumpur’s iconic Petronas Towers to wandering through Penang’s colorful street art and relaxing on Langkawi’s sun-kissed shores. Whether you seek city adventures, cultural discoveries, or peaceful island escapes, Malaysia offers an experience tailored for every kind of traveler.
              </p>
              <div className="relative pt-12">
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-gold rounded-full" />
                <p className="italic font-bold text-brand-dark text-2xl leading-relaxed">
                  "Malaysia offers an experience heart-crafted for every kind of traveler."
                </p>
              </div>
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
              Activities You Can <span className="text-brand-gold">Do In Malaysia</span>
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
              <span className="text-brand-gold italic">To Visit In Malaysia</span>
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

export default Malaysia;
