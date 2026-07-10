import React, { useEffect } from 'react';
import { ActiveTab } from '../types';
import { Shield, LogOut } from 'lucide-react';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  // Quick Exit function
  const handleQuickExit = () => {
    // Instantly replace window location with a neutral site (e.g. Google Weather)
    window.location.replace('https://www.google.com/search?q=weather');
  };

  // Bind Escape key to Quick Exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleQuickExit();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems: { label: string; id: ActiveTab }[] = [
    { label: 'About', id: 'about' },
    { label: 'What We Do', id: 'what-we-do' },
    { label: 'Get Help', id: 'get-help' },
    { label: 'Resources', id: 'resources' },
    { label: 'News', id: 'news' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full">
      <nav id="nav-container" className="glass-panel rounded-2xl py-3.5 px-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Quick Exit & Logo */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
          <button
            id="btn-quick-exit"
            onClick={handleQuickExit}
            className="group flex items-center gap-2 bg-[#FAF3F0] hover:bg-[#F5E6E1] text-[#B85C40] hover:text-[#A0452C] border border-[#EACEC5] hover:border-[#E1B8AC] px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200"
            title="Press ESC key to exit immediately"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Quick Exit</span>
            <kbd className="hidden sm:inline-block bg-[#F5E6E1] border border-[#EACEC5] px-1 rounded text-[10px] text-[#B85C40]">
              ESC
            </kbd>
          </button>

          <div
            id="logo-brand"
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#3D5647] via-[#5D7A68] to-[#8BA594] p-0.5 flex items-center justify-center shadow-md shadow-[#3D5647]/10 group-hover:scale-105 transition-transform">
              <Shield className="w-4.5 h-4.5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm md:text-base font-bold text-[#222523] tracking-tight leading-tight">
                Bullying Recovery
              </span>
              <span className="text-[10px] md:text-xs text-[#5D7A68] font-medium tracking-wider">
                &amp; Awareness
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Nav Links */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar max-w-full md:max-w-none">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#E9EFEA] text-[#3D5647] border border-[#C5D7CC] shadow-sm shadow-[#3D5647]/5'
                    : 'text-[#555C57] hover:text-[#222523] hover:bg-[#F4F1EC] border border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
