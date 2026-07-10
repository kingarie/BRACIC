import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Mail, Check, Shield } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer id="footer-container" className="border-t border-[#E4DFD3] bg-[#F4F1EC] pt-16 pb-8 px-4 md:px-8 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Left Column: Newsletter */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-lg md:text-xl font-bold text-[#222523]">
              One email a month...
            </h3>
            <p className="text-[#555C57] text-xs md:text-sm leading-relaxed max-w-sm">
              Subscribe to our newsletter and receive monthly tools, school guides, legislative summaries, and local outreach news. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5D7A68]/50" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-white focus:bg-[#FAF9F6] text-[#222523] placeholder-[#8C938D] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#3D5647] hover:bg-[#32473a] text-white font-semibold px-5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Subscribed</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] font-mono text-[#3D5647] font-semibold animate-fade-in">
                  ✓ Successfully subscribed! Thank you for staying in touch.
                </p>
              )}
            </form>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Middle Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:col-span-6">
            {/* Contact Info */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-bold">
                Contact
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-[#555C57]">
                <li className="hover:text-[#222523] transition-colors">+11231 458 7880</li>
                <li className="hover:text-[#222523] transition-colors">+180 57558 2887</li>
                <li>
                  <a
                    href="mailto:support@bullyingrecovery.com"
                    className="hover:text-[#3D5647] transition-colors underline decoration-[#3D5647]/30"
                  >
                    bullyingrecovery.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Get Help navigation columns */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-bold">
                Get Help
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-[#555C57]">
                <li>
                  <button
                    onClick={() => setActiveTab('about')}
                    className="hover:text-[#222523] transition-colors cursor-pointer"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('news')}
                    className="hover:text-[#222523] transition-colors cursor-pointer"
                  >
                    News &amp; Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="hover:text-[#222523] transition-colors cursor-pointer"
                  >
                    Contact Support
                  </button>
                </li>
              </ul>
            </div>

            {/* General Policy links */}
            <div className="space-y-3.5 col-span-2 md:col-span-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-bold">
                Links
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-[#555C57]">
                <li className="hover:text-[#222523] transition-colors cursor-pointer">Privacy Policy</li>
                <li className="hover:text-[#222523] transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-[#222523] transition-colors cursor-pointer">Community Standards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment */}
        <div className="border-t border-[#D9D4C7] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4.5 h-4.5 text-[#3D5647]" />
            <span className="text-xs font-mono text-[#8C938D]">
              Bullying Recovery &amp; Awareness (BRA) &copy; 2026. All Rights Reserved.
            </span>
          </div>
          <div className="flex gap-4 text-[11px] font-mono text-[#8C938D]">
            <span>Confidentiality Guaranteed</span>
            <span>•</span>
            <span>GDPR Compliant Secure Site</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
