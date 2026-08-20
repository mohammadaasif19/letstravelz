import React from 'react';

const Hero = ({ heroImage, heroTitle, heroSubtitle, heroBadge, heroDescription }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-brand-dark overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={heroTitle}
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/80" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="gsap-reveal inline-flex items-center gap-3 px-6 py-2 rounded-full glass border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)]" />
          <h1 className="text-white font-black uppercase tracking-[0.5em] text-[10px]">{heroBadge}</h1>
        </div>
        <h2 className="text-5xl md:text-[5.5rem] xl:text-[7rem] font-black text-white tracking-tighter leading-[0.85] gsap-reveal drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {heroTitle}
          <span className="gold-gradient italic block mt-3 md:mt-5 pr-3 md:pr-5">{heroSubtitle}</span>
        </h2>
        {heroDescription && (
          <p className="gsap-reveal text-lg md:text-xl text-neutral-300 font-medium leading-relaxed max-w-2xl mt-8">
            {heroDescription}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
