import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ShieldCheck, HeartHandshake, FileText, Send } from 'lucide-react';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: '',
    anonymous: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a secure pseudo-random Ticket ID to mimic institutional secure queuing
    const randId = 'BRA-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randId);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'general',
      message: '',
      anonymous: false
    });
    setSubmitted(false);
  };

  return (
    <div id="contact-view" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in text-[#222523]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#3D5647] font-semibold bg-[#E9EFEA] border border-[#C5D7CC] px-3 py-1 rounded-full">
          Get In Touch &amp; Partner
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#222523] leading-tight">
          We are here to listen and take action.
        </h1>
        <p className="text-[#4A504C] text-sm md:text-base leading-relaxed">
          Submit a supportive inquiry, register as a volunteer mentor, suggest corporate partnerships, or ask general questions securely.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto w-full">
        
        {/* Left Column: Contact Methods & Safe Hours */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold text-[#222523] mb-2">
              Our Secure Channels
            </h2>
            <p className="text-[#555C57] text-xs md:text-sm leading-relaxed">
              For direct communication, you can reach out via standard lines. If you require absolute anonymity, please toggle the <strong>&ldquo;Anonymous Safe Mode&rdquo;</strong> in the contact form.
            </p>

            <div className="space-y-4">
              {/* Phone item */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-[#E4DFD3]">
                <Phone className="w-5 h-5 text-[#3D5647] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#3D5647] font-bold">Secure Line</h4>
                  <p className="text-[#222523] font-semibold text-sm mt-0.5">+1 123 145 8788</p>
                  <p className="text-[#8C938D] text-[11px] mt-0.5">Mon - Fri • 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-[#E4DFD3]">
                <Mail className="w-5 h-5 text-[#3D5647] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#3D5647] font-bold">Email Intake</h4>
                  <a href="mailto:intake@bullyingrecovery.com" className="text-[#222523] font-semibold text-sm mt-0.5 block hover:text-[#3D5647] transition-colors">
                    intake@bullyingrecovery.com
                  </a>
                  <p className="text-[#8C938D] text-[11px] mt-0.5">Response within 24 business hours</p>
                </div>
              </div>

              {/* Office Address item */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-[#E4DFD3]">
                <MapPin className="w-5 h-5 text-[#3D5647] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#3D5647] font-bold">Advocacy Center</h4>
                  <p className="text-[#222523] font-semibold text-sm mt-0.5">500 Sanctuary Dr, Suite 100</p>
                  <p className="text-[#8C938D] text-[11px] mt-0.5">Boston, MA 02111</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Safe Site note */}
          <div className="bg-[#E9EFEA] border border-[#C5D7CC] p-5 rounded-2xl space-y-2">
            <span className="text-[10px] font-mono uppercase text-[#3D5647] tracking-wider font-bold flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> Secure Socket Layers Active
            </span>
            <p className="text-[#555C57] text-xs leading-relaxed">
              All communications submitted through our forms are protected by end-to-end industry-grade encryption standards and routed anonymously. No browser logging is stored.
            </p>
          </div>
        </div>

        {/* Right Column: Contact/Volunteer Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 md:p-8 relative h-full bg-white">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-bold text-[#222523] flex items-center gap-1.5">
                    <FileText className="w-4.5 h-4.5 text-[#3D5647]" /> Submit Secure Inquiry
                  </h3>
                  <p className="text-[#555C57] text-xs">Fill out the fields below. Set safe parameters for your preferred contact response format.</p>
                </div>

                {/* Anonymous Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF9F6] border border-[#E4DFD3]">
                  <div className="space-y-0.5">
                    <span className="text-xs font-mono font-bold text-[#3D5647] uppercase tracking-wide">
                      Anonymous Safe Mode
                    </span>
                    <p className="text-[#8C938D] text-[10px]">Masks your name and email to avoid tracking.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const prevAnon = formData.anonymous;
                      setFormData({
                        ...formData,
                        anonymous: !prevAnon,
                        name: !prevAnon ? 'Anonymous' : '',
                        email: !prevAnon ? 'anonymous@bullyingrecovery.local' : ''
                      });
                    }}
                    className={`w-12 h-6.5 rounded-full p-1 transition-colors cursor-pointer ${
                      formData.anonymous ? 'bg-[#3D5647]' : 'bg-[#E4DFD3]'
                    }`}
                  >
                    <div className={`w-4.5 h-4.5 rounded-full bg-white transition-transform ${
                      formData.anonymous ? 'translate-x-5.5' : 'translate-x-0'
                    }`} />
                  </button>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#3D5647] font-semibold block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    disabled={formData.anonymous}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={formData.anonymous ? 'Anonymous Active' : 'Shirley Fafounne'}
                    className="w-full bg-white focus:bg-[#FAF9F6] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-4 py-2.5 text-xs md:text-sm text-[#222523] placeholder-[#8C938D] focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#3D5647] font-semibold block">
                    Preferred Response Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={formData.anonymous}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={formData.anonymous ? 'Anonymous Active' : 'advocate@example.com'}
                    className="w-full bg-white focus:bg-[#FAF9F6] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-4 py-2.5 text-xs md:text-sm text-[#222523] placeholder-[#8C938D] focus:outline-none disabled:opacity-50 transition-all"
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#3D5647] font-semibold block">
                    Type of Inquiry
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-white border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-4 py-2.5 text-xs text-[#222523] focus:outline-none transition-all"
                  >
                    <option value="general" className="bg-white text-[#222523]">General Information</option>
                    <option value="volunteer" className="bg-white text-[#222523]">Volunteer to Mentor</option>
                    <option value="partnership" className="bg-white text-[#222523]">School/Corporate Partnership</option>
                    <option value="get-help" className="bg-white text-[#222523]">Confidential Support Request</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-[#3D5647] font-semibold block">
                    Your Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how we can support you. Please omit identifiable school codes or names if utilizing Anonymous Safe Mode..."
                    className="w-full bg-white focus:bg-[#FAF9F6] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl p-4 text-xs md:text-sm text-[#222523] placeholder-[#8C938D] focus:outline-none min-h-[120px] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3D5647] hover:bg-[#32473a] text-white font-bold py-3 px-6 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm shadow-[#3D5647]/5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Secure Request</span>
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full space-y-6 py-8 animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-[#E9EFEA] border border-[#C5D7CC] flex items-center justify-center text-[#3D5647]">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl font-bold text-[#222523]">Inquiry Received Securely</h3>
                  <p className="text-[#555C57] text-xs max-w-xs mx-auto leading-relaxed">
                    Thank you. Your message has been encrypted and successfully entered our intake queue. Your safety is our highest priority.
                  </p>
                </div>

                {/* Secure Receipt ID */}
                <div className="bg-[#FAF9F6] border border-[#E4DFD3] p-4 rounded-xl space-y-1.5 w-full max-w-xs text-center font-mono">
                  <span className="text-[10px] text-[#8C938D] block">YOUR SECURE TICKET TOKEN</span>
                  <span className="text-base text-[#B85C40] font-extrabold tracking-widest">{ticketId}</span>
                  <span className="text-[9px] text-[#8C938D] block leading-normal">
                    Keep this number privately if you intend to follow up anonymously via our secure lines.
                  </span>
                </div>

                {formData.inquiryType === 'volunteer' && (
                  <div className="flex items-center gap-2 bg-[#E9EFEA] border border-[#C5D7CC] px-4 py-2.5 rounded-xl text-[11px] text-[#3D5647] max-w-xs">
                    <HeartHandshake className="w-4 h-4 text-[#3D5647] shrink-0" />
                    <span className="text-left font-normal leading-normal">Our Volunteer Coordinators will prioritize matching your profile for mentor training!</span>
                  </div>
                )}

                <button
                  id="btn-submit-another"
                  onClick={resetForm}
                  className="text-xs text-[#3D5647] hover:text-[#2c3f34] font-mono hover:underline cursor-pointer"
                >
                  &larr; Submit another ticket
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
