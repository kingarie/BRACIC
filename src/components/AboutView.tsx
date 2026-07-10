import React from 'react';
import { Shield, Sparkles, Handshake, Landmark, Heart } from 'lucide-react';

export default function AboutView() {
  const values = [
    {
      title: 'Confidentiality First',
      description: 'Your identity and stories are fully protected. Our digital platforms use state-of-the-art secure protocols and provide direct, unlogged access.',
      icon: Shield,
    },
    {
      title: 'Active Compassion',
      description: 'We listen without judgment. Every victim, family member, or professional who contacts us is met with warmth and tailored human guidance.',
      icon: Heart,
    },
    {
      title: 'Institutional Action',
      description: 'We do not just comfort victims—we advocate to eliminate the root causes of bullying through legislative reform and corporate training programs.',
      icon: Landmark,
    },
    {
      title: 'Empowered Recovery',
      description: 'We help survivors reclaim their narrative, transition from victim to advocate, and rebuild self-esteem through mutual-aid circles.',
      icon: Sparkles,
    },
  ];

  const team = [
    {
      name: 'Shirley Fafounne',
      role: 'Founder & Executive Director',
      bio: 'Trauma-informed counselor with 15+ years advocating for school restorative justice and cyberbullying mitigation programs.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Dr. Evelyn Carter',
      role: 'Clinical Counseling Director',
      bio: 'Licensed clinical psychologist specializing in childhood relational trauma and adolescent self-esteem recovery.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=300'
    },
    {
      name: 'Michael Lin, Esq.',
      role: 'Policy & Legal Counsel',
      bio: 'Civil rights attorney who drafts anti-harassment regulations and represents students in major civil educational lawsuits.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div id="about-view" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in text-[#222523]">
      {/* Intro Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#3D5647] font-semibold bg-[#E9EFEA] border border-[#C5D7CC] px-3 py-1 rounded-full">
          Who We Are
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#222523] leading-tight">
          Pioneering a world free from fear, harassment, and isolation.
        </h1>
        <p className="text-[#4A504C] text-sm md:text-base leading-relaxed">
          Founded in 2018, Bullying Recovery &amp; Awareness (BRA) is a non-profit dedicated to providing immediate, anonymous crisis tools, clinical resources, and institutional advocacy for bullying survivors.
        </p>
      </div>

      {/* Grid: Core Values */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#222523]">Our Core Values</h2>
          <p className="text-[#555C57] text-xs md:text-sm mt-2">The principles guiding our counseling, outreach, and public policy advocacy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                id={`about-value-card-${idx}`}
                className="glass-panel rounded-2xl p-6 flex flex-col items-start relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E9EFEA] border border-[#C5D7CC] flex items-center justify-center text-[#3D5647] mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-[#222523] mb-2.5">
                  {val.title}
                </h3>
                <p className="text-[#555C57] text-xs leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Founders Journey Segment */}
      <div className="glass-panel rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-square max-w-sm mx-auto w-full border border-[#E4DFD3] shadow-md shadow-[#3D5647]/5">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
            alt="Shirley Fafounne"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-8 space-y-4">
          <h2 className="font-display text-xl md:text-2xl font-bold text-[#222523]">
            The Story Behind BRA
          </h2>
          <div className="space-y-3.5 text-xs md:text-sm text-[#4A504C] leading-relaxed">
            <p>
              &ldquo;I spent years working inside public school divisions, witnessing first-hand how conventional bureaucratic reporting mechanisms repeatedly failed children who were targeted by peer bullying. Victims were frequently treated as a secondary priority or isolated further, while the cyberbullying expanded without oversight.&rdquo;
            </p>
            <p>
              &ldquo;I founded Bullying Recovery &amp; Awareness (BRA) to give victims a quiet, anonymous shelter that operates outside bureaucratic delays. We wanted to build immediate tools—like private safety plans, live crisis resources, and trauma recovery peer circles—that any student or corporate professional can access instantly, without requiring approval.&rdquo;
            </p>
          </div>
          <cite className="block not-italic">
            <span className="font-bold text-[#3D5647]">- Shirley Fafounne</span>
            <span className="text-xs text-[#8C938D] block">Founder of BRA</span>
          </cite>
        </div>
      </div>

      {/* Team Grid */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#222523]">Our Leadership</h2>
          <p className="text-[#555C57] text-xs md:text-sm mt-2">Clinical directors, legal advocates, and survivors steering our direction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              id={`team-member-card-${idx}`}
              className="glass-panel rounded-2xl p-5 flex flex-col items-center text-center relative overflow-hidden group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#E4DFD3] mb-4 group-hover:border-[#3D5647] transition-colors">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-base font-bold text-[#222523] leading-tight">
                {member.name}
              </h3>
              <p className="text-[11px] font-mono text-[#5D7A68] mb-3">{member.role}</p>
              <p className="text-[#555C57] text-xs leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
