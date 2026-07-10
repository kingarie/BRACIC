import React, { useState } from 'react';
import { Volume2, Landmark, HelpCircle, Heart, ArrowRight, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export default function WhatWeDoView() {
  const [selectedCampaign, setSelectedCampaign] = useState<number>(1);

  const stats = [
    { label: 'Support Sessions', value: '14,832', icon: HelpCircle, color: 'text-[#3D5647]' },
    { label: 'Schools Partnered', value: '412', icon: Landmark, color: 'text-[#5D7A68]' },
    { label: 'Laws Influenced', value: '23', icon: ShieldCheck, color: 'text-[#3D5647]' },
    { label: 'Community Mentors', value: '2,950', icon: Heart, color: 'text-[#B85C40]' },
  ];

  const campaigns = [
    {
      id: 1,
      tag: 'Awareness',
      title: 'Speak Up, Stand Out 2026',
      description: 'A national school-wide curriculum integrating active-bystander workshops and anonymous cyberbullying reporting buttons.',
      progress: 88,
      goal: '500 Schools Adopted',
      reached: '440 Adopted',
      icon: Volume2,
      impact: 'Educated over 120,000 students on healthy digital dialogue and reporting safety this year.'
    },
    {
      id: 2,
      tag: 'Legislation',
      title: 'Safe Digital Learning Bill',
      description: 'Drafting model legislative text requiring academic institutions to respond to online peer harassment within 24 hours.',
      progress: 65,
      goal: 'Passed in 15 State chambers',
      reached: '10 State Chambers Passed',
      icon: Landmark,
      impact: 'Enacted enforceable protective guidelines guaranteeing student safety plans state-wide.'
    },
    {
      id: 3,
      tag: 'Protection',
      title: 'Youth Safe Spaces Initiative',
      description: 'Coordinating with clinical health practitioners to offer emergency counseling vouchers bypassing financial hurdles.',
      progress: 94,
      goal: '10,000 Vouchers Funded',
      reached: '9,420 Vouchers Redeemed',
      icon: HelpCircle,
      impact: 'Connected highly isolated youth to accredited clinical child therapists for urgent healing.'
    },
    {
      id: 4,
      tag: 'Kindness',
      title: 'The Peer-Mentorship Circles',
      description: 'Establishing volunteer-led peer circles across campuses where survivors guide younger peers through bullying recovery.',
      progress: 72,
      goal: '200 Chapters Formed',
      reached: '144 Active Chapters',
      icon: Heart,
      impact: 'Rebuilt self-confidence, trust, and deep friendships for thousands of vulnerable children.'
    }
  ];

  return (
    <div id="what-we-do-view" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in text-[#222523]">
      {/* View Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#3D5647] font-semibold bg-[#E9EFEA] border border-[#C5D7CC] px-3 py-1 rounded-full">
          Our Impact &amp; Work
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#222523] leading-tight">
          Translating empathy into systematic protection.
        </h1>
        <p className="text-[#4A504C] text-sm md:text-base leading-relaxed">
          Through classroom training, legal draftsmanship, rapid crisis responses, and student mentorship, we tackle bullying from every angle.
        </p>
      </div>

      {/* Grid: Live Metrics Dashboard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="glass-panel rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#555C57] tracking-wide uppercase">
                  {stat.label}
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#E9EFEA] flex items-center justify-center border border-[#C5D7CC]">
                  <Icon className={`w-4 h-4 ${stat.color}`} />
                </div>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-extrabold text-[#222523] block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-[#3D5647] mt-1 block flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Live global impact counter
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Campaigns interactive layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: campaign tabs */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#222523] mb-2">
              Active Campaigns
            </h2>
            <p className="text-[#555C57] text-xs md:text-sm">
              Select an ongoing initiative to view its real-time development, funding milestones, and community impact goals.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {campaigns.map((camp) => {
              const Icon = camp.icon;
              const isSelected = selectedCampaign === camp.id;
              return (
                <button
                  key={camp.id}
                  id={`campaign-tab-btn-${camp.id}`}
                  onClick={() => setSelectedCampaign(camp.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'glass-panel border-[#3D5647]/20 bg-white text-[#222523] shadow-md shadow-[#3D5647]/5'
                      : 'border-transparent text-[#555C57] hover:text-[#222523] hover:bg-[#FAF9F6]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    isSelected
                      ? 'bg-[#3D5647] text-white border-[#3D5647]'
                      : 'bg-[#E9EFEA] text-[#3D5647] border-[#C5D7CC]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-[#3D5647] uppercase tracking-wider block">
                      {camp.tag}
                    </span>
                    <span className="font-display text-sm font-bold truncate block">
                      {camp.title}
                    </span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-[#3D5647]' : 'text-gray-400'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: campaign details card */}
        <div className="lg:col-span-7">
          {(() => {
            const camp = campaigns.find((c) => c.id === selectedCampaign);
            if (!camp) return null;
            const Icon = camp.icon;
            return (
              <div
                id="campaign-detail-card"
                className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 h-full flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background ambient glow inside card */}
                <div className="absolute -right-20 -top-20 w-52 h-52 bg-[#E9EFEA]/30 rounded-full blur-3xl pointer-events-none"></div>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono bg-[#FAF3F0] border border-[#EACEC5] text-[#B85C40] px-3 py-1 rounded-full uppercase tracking-wider">
                      {camp.tag} Campaign
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#3D5647] font-mono">
                      <Trophy className="w-4 h-4" /> Active Goal
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-[#222523] leading-tight">
                      {camp.title}
                    </h3>
                    <p className="text-[#4A504C] text-xs md:text-sm leading-relaxed">
                      {camp.description}
                    </p>
                  </div>

                  {/* HTML Custom Progress Bar */}
                  <div className="space-y-2.5 bg-[#FAF9F6] border border-[#E4DFD3] rounded-2xl p-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-[#555C57]">Campaign Milestones</span>
                      <span className="text-[#3D5647] font-bold">{camp.progress}% Achieved</span>
                    </div>
                    <div className="w-full bg-[#E4DFD3] h-2.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#3D5647] to-[#5D7A68] h-full rounded-full transition-all duration-700"
                        style={{ width: `${camp.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#8C938D] font-mono">
                      <span>Reached: {camp.reached}</span>
                      <span>Target: {camp.goal}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#E4DFD3] pt-5 mt-6 space-y-2.5">
                  <h4 className="text-xs font-mono text-[#3D5647] uppercase tracking-wider">
                    Recent Impact Output
                  </h4>
                  <p className="text-[#222523] text-xs md:text-sm leading-relaxed font-medium bg-[#E9EFEA]/40 border border-[#C5D7CC] p-3.5 rounded-xl">
                    &ldquo;{camp.impact}&rdquo;
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
