import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Shield, Volume2, Landmark, HelpCircle, Heart, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PillarsProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Pillars({ setActiveTab }: PillarsProps) {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pillars = [
    {
      id: 1,
      title: 'Raise awareness',
      description: 'Dismantle stigmas by sharing survivors stories, educating communities, and speaking out against harassment in classrooms and offices.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400',
      icon: Volume2,
      details: {
        subtitle: 'Dismantling Bullying Culture through Shared Stories',
        bulletPoints: [
          'Monthly local workshops for parents, students, and employees.',
          'Annual "BRA National Awareness Day" mobilizing hundreds of schools.',
          'Comprehensive digital media kits for students to lead school advocacy campaigns.'
        ],
        actionText: 'See our active awareness campaigns',
        actionTab: 'what-we-do' as ActiveTab
      }
    },
    {
      id: 2,
      title: 'Advocate for policy',
      description: 'Lobby for anti-harassment laws, assist school boards in revising safety regulations, and establish standards for safe reporting.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80&w=400',
      icon: Landmark,
      details: {
        subtitle: 'Enacting Durable Protection through Legislation',
        bulletPoints: [
          'Partnering with lawyers to draft standard anti-cyberbullying legislation.',
          'Providing free legal consultation templates for families navigating school board appeals.',
          'Working directly with state-level representatives to strengthen protective regulations.'
        ],
        actionText: 'Explore our legislative efforts',
        actionTab: 'what-we-do' as ActiveTab
      }
    },
    {
      id: 3,
      title: 'Protect those at risk',
      description: 'Establish confidential safety protocols, offer protective support networks, and coordinate with professional counseling channels.',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=400',
      icon: HelpCircle,
      details: {
        subtitle: 'Creating Sanctuary and Immediate Safety Frameworks',
        bulletPoints: [
          'Direct matching program with certified counselors specialized in relational trauma.',
          'Private and secure emergency crisis escape tools and emergency shelter assistance.',
          'Anonymous reporting channels that bypass standard bureaucratic delays.'
        ],
        actionText: 'Access direct safety planning tools',
        actionTab: 'get-help' as ActiveTab
      }
    },
    {
      id: 4,
      title: 'Foster kindness',
      description: 'Facilitate peer-led friendship rings, fund community recovery events, and train peer mentors in active, non-judgmental listening.',
      image: 'https://images.unsplash.com/photo-1521791136368-1a46827d0adb?auto=format&fit=crop&q=80&w=400',
      icon: Heart,
      details: {
        subtitle: 'Cultivating Inclusive and Healing Environments',
        bulletPoints: [
          '"Kindness Coin" programs rewarding inclusive student behaviors.',
          'Free active-listening and trauma-informed support training for volunteers.',
          'Support group networking for survivors to build mutual trust and life-long friendship.'
        ],
        actionText: 'Sign up to foster kindness locally',
        actionTab: 'contact' as ActiveTab
      }
    },
  ];

  return (
    <section id="pillars-section" className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-[#222523] tracking-tight mb-3">
          Four Pillars, one mission.
        </h2>
        <div className="w-12 h-1 bg-[#5D7A68] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              onClick={() => setSelectedPillar(pillar.id)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer group"
            >
              {/* Pillar Image */}
              <div className="relative h-44 overflow-hidden bg-[#FAF9F6]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#3D5647] flex items-center justify-center text-white shadow-md">
                    <Icon className="w-4 h-4 font-bold" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#5D7A68] bg-[#FAF9F6]/90 px-2 py-0.5 rounded border border-[#E4DFD3]/60">
                    Pillar 0{pillar.id}
                  </span>
                </div>
              </div>

              {/* Pillar Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-[#222523] mb-2 group-hover:text-[#3D5647] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-[#555C57] text-xs md:text-sm leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>
                <span className="text-xs text-[#3D5647] font-semibold group-hover:text-[#5D7A68] flex items-center gap-1 mt-auto">
                  <span>Learn more</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pillar Detail Modal */}
      <AnimatePresence>
        {selectedPillar !== null && (() => {
          const pillar = pillars.find((p) => p.id === selectedPillar);
          if (!pillar) return null;
          const Icon = pillar.icon;
          return (
            <div
              id="pillar-modal-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#222523]/55 backdrop-blur-md"
              onClick={() => setSelectedPillar(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                id="pillar-modal-content"
                className="bg-[#F9F8F6] border border-[#E4DFD3] shadow-2xl w-full max-w-2xl rounded-3xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image */}
                <div className="relative h-56">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F9F8F6] via-transparent to-transparent"></div>
                  <button
                    id="btn-close-pillar-modal"
                    onClick={() => setSelectedPillar(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white hover:bg-[#F4F1EC] border border-[#E4DFD3] flex items-center justify-center text-[#222523] hover:text-[#3D5647] transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#3D5647] text-white flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#5D7A68] uppercase tracking-wider block leading-none mb-1">
                        Pillar 0{pillar.id}
                      </span>
                      <h3 className="text-xl font-display font-bold text-[#222523] leading-none">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h4 className="text-[#3D5647] font-display font-medium text-sm md:text-base mb-4">
                    {pillar.details.subtitle}
                  </h4>
                  <p className="text-[#4A504C] text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pillar.details.bulletPoints.map((point, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#5D7A68] shrink-0 mt-0.5" />
                        <span className="text-[#555C57] text-xs md:text-sm leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end gap-3 border-t border-[#E4DFD3] pt-5">
                    <button
                      id="btn-modal-close"
                      onClick={() => setSelectedPillar(null)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-[#555C57] hover:text-[#222523] hover:bg-[#F4F1EC] transition-all"
                    >
                      Close
                    </button>
                    <button
                      id="btn-modal-action"
                      onClick={() => {
                        setActiveTab(pillar.details.actionTab);
                        setSelectedPillar(null);
                      }}
                      className="bg-[#3D5647] hover:bg-[#32473a] text-white font-semibold px-5 py-2 rounded-xl text-xs transition-all shadow-md shadow-[#3D5647]/15"
                    >
                      {pillar.details.actionText}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
