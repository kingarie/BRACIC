import React, { useState } from 'react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Mr. Okafor',
      role: 'Corporate Professional',
      quote: 'The resources and immediate safety plan provided by BRA gave me the courage to speak up and address workplace harassment. I finally feel seen, supported, and safe.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: '2',
      name: 'Mrs. Adebayo',
      role: 'School Principal',
      quote: 'The digital kits and workshops provided by BRA transformed our high school campus culture. Students now active-listen, respect each other, and report incidents with confidence.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: '3',
      name: 'Amara',
      role: 'University Student',
      quote: 'When cyberbullying isolated me, the online support circles at BRA welcomed me with open arms. They helped me rebuild my self-esteem and find true community.',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: '4',
      name: 'Sarah K.',
      role: 'Grateful Parent',
      quote: 'BRA changed the trajectory of my son\'s school life. The parent cyberbullying guides gave us actionable steps to collaborate with teachers and end the trauma.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
    },
    {
      id: '5',
      name: 'Marcus G.',
      role: 'Active Volunteer',
      quote: 'Volunteering with BRA has been an incredibly rewarding journey. The free active-listening and trauma-informed support training has taught me deep empathy.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
    }
  ];

  // Carousel index tracking
  // In order to show 3 cards on desktop and 1 on mobile, we can track the starting index.
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get active items to display (handling wraparound)
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      items.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return items;
  };

  return (
    <section id="testimonials-section" className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-[#222523] tracking-tight mb-3">
          What people say about BRA
        </h2>
        <div className="w-12 h-1 bg-[#5D7A68] mx-auto rounded-full"></div>
      </div>

      <div className="relative flex items-center gap-4">
        {/* Left Arrow */}
        <button
          id="btn-testimonial-prev"
          onClick={handlePrev}
          className="absolute -left-2 md:-left-6 z-20 w-10 h-10 rounded-full bg-white hover:bg-[#3D5647] text-[#222523] hover:text-white border border-[#E4DFD3] hover:border-[#3D5647] flex items-center justify-center transition-all shadow-md cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Desktop View (Show 3 cards with slide/fade) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-8 overflow-hidden">
          {getVisibleItems().map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              id={`testimonial-card-${item.id}`}
              className="glass-panel rounded-2xl p-6 flex flex-col justify-between relative h-80 transition-all duration-300"
            >
              {/* Decorative top quote */}
              <div className="absolute top-4 right-4 text-[#3D5647]/10">
                <Quote className="w-8 h-8" />
              </div>

              {/* Quote text */}
              <p className="text-[#4A504C] text-xs md:text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 border-t border-[#E4DFD3] pt-4 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#E4DFD3]"
                />
                <div>
                  <h4 className="font-display text-sm font-bold text-[#222523]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#5D7A68] font-mono">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          id="btn-testimonial-next"
          onClick={handleNext}
          className="absolute -right-2 md:-right-6 z-20 w-10 h-10 rounded-full bg-white hover:bg-[#3D5647] text-[#222523] hover:text-white border border-[#E4DFD3] hover:border-[#3D5647] flex items-center justify-center transition-all shadow-md cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              startIndex === idx
                ? 'bg-[#3D5647] w-6'
                : 'bg-[#E4DFD3] hover:bg-[#D4CEBF]'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
