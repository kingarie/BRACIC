import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section id="quote-section" className="py-12 px-4 md:px-8 max-w-5xl mx-auto relative z-10">
      <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden text-center neon-border-glow">
        {/* Subtle warm glow effect in the card */}
        <div className="absolute -right-20 -bottom-20 w-60 h-60 bg-[#D1E0D7]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -left-20 -top-20 w-60 h-60 bg-[#E5DFD3]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Decorative Quote Icon */}
        <div className="w-12 h-12 rounded-full bg-[#F4F1EC] border border-[#E4DFD3] flex items-center justify-center text-[#3D5647] mx-auto mb-6">
          <QuoteIcon className="w-5 h-5" />
        </div>

        <span className="text-xs font-mono uppercase tracking-wider text-[#5D7A68] font-semibold block mb-3">
          Founder&apos;s quote
        </span>

        <blockquote className="font-display text-lg md:text-2xl text-[#222523] font-medium leading-relaxed max-w-3xl mx-auto mb-6 italic">
          &ldquo;Raise awareness, make a difference, and put an end to bullying. Together, we can create a world where every individual feels safe, valued, and respected.&rdquo;
        </blockquote>

        <cite className="not-italic block">
          <span className="font-semibold text-[#222523] text-sm md:text-base">Shirley Fafounne</span>
          <span className="text-xs text-[#5D7A68] block mt-0.5">Founder &amp; Executive Director, BRA</span>
        </cite>
      </div>
    </section>
  );
}
