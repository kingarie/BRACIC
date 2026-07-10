import React from 'react';
import { ActiveTab } from '../types';
import { Headphones, Heart, Users, BookOpen, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Services({ setActiveTab }: ServicesProps) {
  const items = [
    {
      id: 'need-help',
      title: 'I need help',
      description: 'Find immediate, confidential support, safety planning tools, and professional crisis resources tailored to your safety.',
      buttonText: 'I need help',
      icon: Headphones,
      targetTab: 'get-help' as ActiveTab,
      badge: 'Urgent'
    },
    {
      id: 'want-to-help',
      title: 'I want to help',
      description: 'Discover pathways to support others, lend an empathetic ear, or become an online recovery companion.',
      buttonText: 'I want to help',
      icon: Heart,
      targetTab: 'contact' as ActiveTab,
      badge: 'Supportive'
    },
    {
      id: 'get-involved',
      title: 'Get involved',
      description: 'Join local advocacy chapters, assist with awareness events, and help drive anti-bullying policies in your community.',
      buttonText: 'Get involved',
      icon: Users,
      targetTab: 'contact' as ActiveTab,
      badge: 'Community'
    },
    {
      id: 'learn',
      title: 'Learn',
      description: 'Access school cyberbullying kits, workplace harassment guides, and workshops about healthy conflict resolution.',
      buttonText: 'Learn more',
      icon: BookOpen,
      targetTab: 'resources' as ActiveTab,
      badge: 'Guides'
    },
  ];

  return (
    <section id="services-section" className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-12">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-[#222523] tracking-tight mb-3">
          How can we help?
        </h2>
        <div className="w-12 h-1 bg-[#5D7A68] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              id={`service-card-${item.id}`}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group h-full relative overflow-hidden"
            >
              {/* Top organic decoration */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#5D7A68]/35 to-transparent group-hover:via-[#3D5647] transition-all duration-300"></div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F4F1EC] border border-[#E4DFD3] flex items-center justify-center text-[#3D5647] group-hover:text-[#3D5647] group-hover:bg-[#E9EFEA] group-hover:border-[#C5D7CC] transition-colors">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-[#5D7A68] bg-[#E9EFEA] border border-[#C5D7CC] px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#222523] mb-2.5 group-hover:text-[#3D5647] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#555C57] text-xs md:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <button
                id={`btn-service-action-${item.id}`}
                onClick={() => setActiveTab(item.targetTab)}
                className="w-full flex items-center justify-center gap-1.5 bg-[#F4F1EC] hover:bg-[#3D5647] text-[#3D5647] hover:text-white border border-[#D9D4C7] hover:border-[#3D5647] text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-300"
              >
                <span>{item.buttonText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
