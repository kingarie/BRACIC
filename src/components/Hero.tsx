import React from 'react';
import { ActiveTab } from '../types';
import { HeartHandshake, ShieldAlert } from 'lucide-react';

interface HeroProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section id="hero-section" className="relative py-16 md:py-24 px-4 md:px-8 text-center max-w-5xl mx-auto z-10">
      {/* Decorative mini badge */}
      <div className="inline-flex items-center gap-2 bg-[#E9EFEA] border border-[#C5D7CC] px-3 py-1 rounded-full text-xs text-[#3D5647] font-medium mb-6">
        <span className="w-2 h-2 rounded-full bg-[#5D7A68]"></span>
        Safe. Supportive. Anonymous.
      </div>

      <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#222523] leading-tight md:leading-tight lg:leading-tight tracking-tight mb-8">
        Join us in the fight today — <br className="hidden md:inline" />
        together, we can{' '}
        <span className="text-[#3D5647] border-b-2 border-dashed border-[#8BA594]">
          make a difference
        </span>{' '}
        and put an end to bullying for good.
      </h1>

      <p className="text-[#4A504C] text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Providing confidential assistance, educational resources, and a supportive community for individuals recovering from or experiencing bullying. You are not alone.
      </p>

      {/* Hero CTA buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          id="btn-hero-get-help"
          onClick={() => setActiveTab('get-help')}
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#3D5647] hover:bg-[#32473a] text-[#FAF8F6] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-[#3D5647]/15 text-sm tracking-wide"
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Get Help Now</span>
        </button>

        <button
          id="btn-hero-volunteer"
          onClick={() => setActiveTab('contact')}
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white hover:bg-[#FAF9F6] text-[#3D5647] border border-[#E4DFD3] hover:border-[#C5D7CC] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm tracking-wide"
        >
          <HeartHandshake className="w-4 h-4 text-[#5D7A68]" />
          <span>Become a Volunteer</span>
        </button>
      </div>
    </section>
  );
}
