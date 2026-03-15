import React from 'react';
import { HashLink } from 'react-router-hash-link';
import InfoLayout from '../../components/layout/InfoLayout';

const Lakshadweep = () => {
  const activities = [
    { title: "Snorkeling", image: "https://seawatersports.com/images/activies/slide/snorkeling-in-lakshadweep-price.jpg" },
    { title: "Kayaking", image: "https://seawatersports.com/images/activies/slide/kayaking-in-lakshadweep-price.jpg" },
    { title: "Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" },
    { title: "Glass Bottom Boat", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=1000" }
  ];

  const places = [
    { name: "Minicoy Island", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1000", type: "Pristine Lagoon" },
    { name: "Kadmat Island", image: "https://www.trawell.in/admin/images/upload/388932466Kadmat_Island_Main.jpg", type: "Coral Paradise" },
    { name: "Kavaratti Island", image: "https://media.viacation.com/blogs/3ac6477860909b613beb9.jpg", type: "Capital Gem" },
    { name: "Agatti Island", image: "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Agatti_Island_4542a62573.webp", type: "Gateway Island" },
    { name: "Bangaram Island", image: "https://hblimg.mmtcdn.com/content/hubble/img/lakshadweep/mmt/activities/m_Bangaram-1_l_425_640.jpg", type: "Teardrop Island" }
  ];

  return (
    <InfoLayout
      heroImage="https://www.emperortraveline.com/wp-content/uploads/2024/02/Agatti-Lakshadweep-1024x676.jpg"
      heroTitle="Explore"
      heroSubtitle="Lakshadweep With Us"
      heroBadge="Pristine Beauty"
      ctaImage="https://theroamingshoes.com/wp-content/uploads/2024/12/IMG_7728_TIF-1024x683.jpg"
      ctaTitle="Plan an Unforgettable"
      ctaSubtitle="Experience in Lakshadweep Today!"
    >
      <section id="about" className="py-40 container mx-auto px-6 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 gsap-reveal relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] h-[600px] border-[12px] border-white group">
              <img src="https://www.setmytrip.in/wp-content/uploads/2024/12/PSX_20241206_233414-scaled.jpg" alt="Lakshadweep" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="font-black text-xs uppercase tracking-widest mb-2 text-brand-gold">Lagoon Life</p>
                <h4 className="text-3xl font-black tracking-tighter">Azure Depths</h4>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-12">
            <div className="gsap-reveal space-y-6">
              <div className="inline-block px-6 py-2 rounded-full bg-brand-surface text-brand-gold text-[10px] font-black uppercase tracking-widest border border-brand-gold/20">Destination Profile</div>
              <h3 className="text-5xl md:text-7xl font-black text-brand-dark leading-[1.1] tracking-tighter">
                Turquoise Waters <br />
                <span className="text-brand-gold italic">& Coconut Palms</span>
              </h3>
            </div>

            <div className="gsap-reveal space-y-8 text-neutral-600 font-medium text-xl leading-relaxed">
              <p>
                At Let’s Travelz, we go beyond the ordinary to help you explore Lakshadweep’s pristine beauty in comfort and style. Whether you’re seeking a romantic getaway, an adventurous dive beneath turquoise waters, or a peaceful retreat surrounded by coconut palms, our expertly designed packages ensure every moment feels magical and personal.
              </p>
              <p>
                From the mesmerizing lagoons of Kadmat to the serene sunsets of Minicoy, every island tells a story waiting to be lived. We ensure your journey through Lakshadweep is seamless—from travel assistance to guided tours—so you can simply unwind and let the ocean waves set the rhythm of your soul.
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
              Activities You Can <span className="text-brand-gold">Do In Lakshadweep</span>
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
              <span className="text-brand-gold italic">To Visit In Lakshadweep</span>
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

export default Lakshadweep;
