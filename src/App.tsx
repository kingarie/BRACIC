import React, { useState } from 'react';
import { ActiveTab } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Homepage Sub-components
import Hero from './components/Hero';
import Services from './components/Services';
import Pillars from './components/Pillars';
import Quote from './components/Quote';
import Testimonials from './components/Testimonials';

// Extended Screen Views
import AboutView from './components/AboutView';
import WhatWeDoView from './components/WhatWeDoView';
import GetHelpView from './components/GetHelpView';
import ResourcesView from './components/ResourcesView';
import NewsView from './components/NewsView';
import ContactView from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Page switcher
  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-12 md:space-y-16">
            <Hero setActiveTab={setActiveTab} />
            <Services setActiveTab={setActiveTab} />
            <Pillars setActiveTab={setActiveTab} />
            <Quote />
            <Testimonials />
          </div>
        );
      case 'about':
        return <AboutView />;
      case 'what-we-do':
        return <WhatWeDoView />;
      case 'get-help':
        return <GetHelpView />;
      case 'resources':
        return <ResourcesView />;
      case 'news':
        return <NewsView />;
      case 'contact':
        return <ContactView />;
      default:
        return (
          <div className="py-24 text-center text-[#222523]">
            <p className="text-sm font-mono">View not found.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen text-[#222523] font-sans relative flex flex-col justify-between overflow-x-hidden select-none bg-[#F9F8F6]">
      
      {/* Absolute, fixed organic therapeutic backdrop blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft upper left sand-gold flow */}
        <div className="absolute -top-[15%] -left-[15%] w-[65%] h-[60%] rounded-full bg-[#E5DFD3]/45 blur-[120px] animate-float-slow"></div>
        {/* Mid-right soft sage/moss breathing spot */}
        <div className="absolute top-[35%] -right-[10%] w-[55%] h-[55%] rounded-full bg-[#D1E0D7]/30 blur-[130px] animate-float-delayed"></div>
        {/* Soft bottom left therapeutic clay blush */}
        <div className="absolute -bottom-[15%] left-[10%] w-[60%] h-[55%] rounded-full bg-[#EFECE5]/50 blur-[140px] animate-float-slow"></div>
      </div>

      {/* Primary content layers */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        
        {/* Custom Header Navigation */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Scrollable Main content area */}
        <main className="flex-1 w-full pt-8 pb-16">
          {renderActiveView()}
        </main>

        {/* Footer Navigation Segment */}
        <Footer setActiveTab={setActiveTab} />

      </div>
    </div>
  );
}
