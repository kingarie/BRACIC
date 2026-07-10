import React, { useState, useEffect } from 'react';
import { Phone, Shield, Clipboard, CheckCircle, RefreshCw, Eye, EyeOff, Save, Trash2, Heart, Sparkles, Smile, Info } from 'lucide-react';

interface Contact {
  name: string;
  contact: string;
}

export default function GetHelpView() {
  // Breathing circle states
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold-in' | 'exhale' | 'hold-out'>('inhale');
  const [breathSeconds, setBreathSeconds] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathSeconds((prev) => {
        if (prev <= 1) {
          // Transition phase
          setBreathPhase((currentPhase) => {
            switch (currentPhase) {
              case 'inhale':
                return 'hold-in';
              case 'hold-in':
                return 'exhale';
              case 'exhale':
                return 'hold-out';
              case 'hold-out':
                return 'inhale';
              default:
                return 'inhale';
            }
          });
          // Phase timings: Inhale 4s, Hold 4s, Exhale 4s, Hold 4s
          return 4;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Hotlines Data
  const hotlines = [
    { country: 'United States', name: 'National Suicide & Crisis Lifeline', number: '988', hours: '24/7', notes: 'Call or Text, Free & Confidential' },
    { country: 'United States', name: 'The Trevor Project (LGBTQ+)', number: '1-866-488-7386', hours: '24/7', notes: 'Text START to 678-678' },
    { country: 'United Kingdom', name: 'National Bullying Helpline', number: '0300 323 0169', hours: '9am - 5pm', notes: 'Support for school & workplace' },
    { country: 'United Kingdom', name: 'Childline', number: '0800 1111', hours: '24/7', notes: 'For children and young people under 19' },
    { country: 'Canada', name: 'Kids Help Phone', number: '1-800-668-6868', hours: '24/7', notes: 'Or text CONNECT to 686868' },
    { country: 'International', name: 'Befrienders Worldwide', number: 'Online Finder', hours: 'Varies', notes: 'Connect to local hotlines worldwide' }
  ];

  // Safety Plan state (Persisted in LocalStorage)
  const [safetyPlan, setSafetyPlan] = useState<{
    triggers: string;
    coping: string;
    contacts: Contact[];
    places: string;
  }>({
    triggers: '',
    coping: '',
    contacts: [{ name: '', contact: '' }],
    places: ''
  });

  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isPlanVisible, setIsPlanVisible] = useState(true);

  // Load safety plan from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('bra_safety_plan');
    if (saved) {
      try {
        setSafetyPlan(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse safety plan', e);
      }
    }
  }, []);

  const handleSavePlan = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('bra_safety_plan', JSON.stringify(safetyPlan));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  const handleClearPlan = () => {
    if (window.confirm('Are you sure you want to delete your private safety plan? All local details will be permanently wiped for safety.')) {
      localStorage.removeItem('bra_safety_plan');
      setSafetyPlan({
        triggers: '',
        coping: '',
        contacts: [{ name: '', contact: '' }],
        places: ''
      });
    }
  };

  const handleContactChange = (index: number, field: keyof Contact, value: string) => {
    const updatedContacts = [...safetyPlan.contacts];
    updatedContacts[index][field] = value;
    setSafetyPlan({ ...safetyPlan, contacts: updatedContacts });
  };

  const addContactField = () => {
    setSafetyPlan({
      ...safetyPlan,
      contacts: [...safetyPlan.contacts, { name: '', contact: '' }]
    });
  };

  const removeContactField = (index: number) => {
    const updatedContacts = safetyPlan.contacts.filter((_, i) => i !== index);
    setSafetyPlan({ ...safetyPlan, contacts: updatedContacts });
  };

  // Grounding exercise text
  const groundingSteps = [
    { label: '5 THINGS YOU CAN SEE', desc: 'Look around. Find five small details: a shadow, a painting, a pen, a light fixture, or a tile pattern.' },
    { label: '4 THINGS YOU CAN TOUCH', desc: 'Feel four sensations: the texture of your chair, the cool air, a wooden desk, or the fabric of your sleeves.' },
    { label: '3 THINGS YOU CAN HEAR', desc: 'Listen to three sounds: distant traffic, the hum of an appliance, wind rustling, or your own breathing.' },
    { label: '2 THINGS YOU CAN SMELL', desc: 'Identify two scents: a coffee cup, soap on your hands, clean laundry, or a scented candle.' },
    { label: '1 THING YOU CAN TASTE', desc: 'Savor one taste: a mint, a sip of water, or simply focus on the air on your tongue.' }
  ];

  return (
    <div id="get-help-view" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in text-[#222523]">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B85C40] font-semibold bg-[#FAF3F0] border border-[#EACEC5] px-3 py-1 rounded-full">
          Crisis Support &amp; Healing
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#222523] leading-tight">
          You do not have to carry this alone.
        </h1>
        <p className="text-[#4A504C] text-sm md:text-base leading-relaxed">
          Access immediate helpline coordinates, center yourself with interactive mindfulness loops, and construct a private safety plan to keep you protected.
        </p>
      </div>

      {/* Grid: Immediate Hotlines & Coping Corner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Helplines */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <Phone className="w-5.5 h-5.5 text-[#B85C40]" />
            <h2 className="font-display text-xl md:text-2xl font-bold text-[#222523]">
              Emergency Hotlines
            </h2>
          </div>
          <p className="text-[#555C57] text-xs md:text-sm leading-relaxed mb-4">
            If you or a loved one are in immediate danger or distress, please dial your local emergency services (like 911 or 999) or contact one of these secure support hotlines.
          </p>

          <div className="space-y-4">
            {hotlines.map((line, idx) => (
              <div
                key={idx}
                id={`hotline-card-${idx}`}
                className="glass-panel rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-l-4 border-l-[#B85C40]/50 hover:border-l-[#B85C40] transition-all"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#B85C40] bg-[#FAF3F0] px-2 py-0.5 rounded border border-[#EACEC5] uppercase tracking-wider">
                    {line.country}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-[#222523]">
                    {line.name}
                  </h3>
                  <p className="text-[#555C57] text-xs leading-relaxed">{line.notes}</p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto border-t md:border-t-0 border-[#EACEC5]/30 pt-3 md:pt-0">
                  <span className="text-xs font-mono text-[#8C938D]">{line.hours}</span>
                  <a
                    href={`tel:${line.number}`}
                    className="bg-[#FAF3F0] hover:bg-[#B85C40] text-[#B85C40] hover:text-white border border-[#EACEC5] hover:border-[#B85C40] text-xs font-mono font-bold px-4 py-2 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{line.number}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Coping Corner */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-8 flex flex-col items-center text-center relative overflow-hidden h-full">
            <div className="absolute top-4 left-4 flex items-center gap-1 text-[10px] font-mono text-[#3D5647]">
              <Smile className="w-3.5 h-3.5" /> Grounding Zone
            </div>

            <div className="space-y-2 mt-4">
              <h2 className="font-display text-lg md:text-xl font-bold text-[#222523]">
                Guided Breathing Circle
              </h2>
              <p className="text-[#555C57] text-xs max-w-xs mx-auto">
                Sync your breathing with the circle to trigger parasympathetic calming. Equal inhale, hold, exhale sequence.
              </p>
            </div>

            {/* Breathing Circle Widget */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              {/* Outer Glow ring */}
              <div
                className={`absolute rounded-full border-2 border-[#3D5647]/15 blur-sm transition-all duration-1000 ${
                  breathPhase === 'inhale' || breathPhase === 'hold-in' ? 'w-44 h-44 scale-110' : 'w-32 h-32 scale-95'
                }`}
              ></div>

              {/* Glowing animated visual circle */}
              <div
                className={`absolute rounded-full bg-gradient-to-tr from-[#E9EFEA] via-[#FAF9F6] to-[#FAF9F6] border-2 border-[#5D7A68]/40 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
                  breathPhase === 'inhale'
                    ? 'w-40 h-40 shadow-[0_4px_30px_rgba(61,86,71,0.08)]'
                    : breathPhase === 'hold-in'
                    ? 'w-44 h-44 shadow-[0_4px_45px_rgba(61,86,71,0.15)]'
                    : breathPhase === 'exhale'
                    ? 'w-36 h-36 shadow-[0_2px_20px_rgba(61,86,71,0.04)]'
                    : 'w-32 h-32 shadow-[0_2px_10px_rgba(61,86,71,0.02)]'
                }`}
              >
                <span className="text-xs font-mono font-bold tracking-widest text-[#5D7A68] uppercase">
                  {breathPhase === 'hold-in' ? 'Hold' : breathPhase === 'hold-out' ? 'Hold' : breathPhase}
                </span>
                <span className="text-2xl font-display font-extrabold text-[#222523] mt-1">
                  {breathSeconds}s
                </span>
              </div>
            </div>

            {/* Instruction Footer */}
            <div className="w-full bg-[#E9EFEA]/65 border border-[#C5D7CC] rounded-2xl p-4 text-xs text-[#222523] leading-relaxed flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#3D5647] shrink-0 mt-0.5" />
              <p className="text-left">
                {breathPhase === 'inhale' && 'Breathe in slowly through your nose, expanding your stomach.'}
                {breathPhase === 'hold-in' && 'Hold your breath gently, letting the calm fill your body.'}
                {breathPhase === 'exhale' && 'Exhale slowly through pursed lips, releasing all tension.'}
                {breathPhase === 'hold-out' && 'Rest quietly before the next deep breath starts.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Plan segment */}
      <div className="glass-panel rounded-3xl p-6 md:p-10 space-y-8 relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-[#E9EFEA]/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#E4DFD3] pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <Clipboard className="w-5.5 h-5.5 text-[#3D5647]" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-[#222523]">
                Private Safety Plan Creator
              </h2>
            </div>
            <p className="text-[#555C57] text-xs md:text-sm">
              Construct your private safety guidelines. Your information is processed <strong>locally inside your browser</strong> and never uploaded to any external server.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              id="btn-toggle-plan-visibility"
              onClick={() => setIsPlanVisible(!isPlanVisible)}
              className="flex items-center gap-1.5 bg-[#F4F1EC] text-[#3D5647] border border-[#E4DFD3] hover:bg-[#FAF9F6] px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer"
            >
              {isPlanVisible ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Hide Details</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Show Details</span>
                </>
              )}
            </button>
            <button
              id="btn-clear-plan"
              onClick={handleClearPlan}
              className="flex items-center gap-1.5 bg-[#FAF3F0] text-[#B85C40] border border-[#EACEC5] hover:bg-white px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Reset Plan</span>
            </button>
          </div>
        </div>

        {isPlanVisible ? (
          <form onSubmit={handleSavePlan} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Triggers Field */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-semibold block">
                1. My Warning Signs or Triggers
              </label>
              <textarea
                value={safetyPlan.triggers}
                onChange={(e) => setSafetyPlan({ ...safetyPlan, triggers: e.target.value })}
                placeholder="What situations, words, or digital activities trigger feelings of fear, severe stress, or helplessness?"
                className="w-full bg-white border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl p-4 text-xs md:text-sm text-[#222523] placeholder-[#8C938D] focus:outline-none min-h-[110px] focus:bg-[#FAF9F6]"
              />
            </div>

            {/* Coping Strategies Field */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-semibold block">
                2. My Internal Coping Strategies
              </label>
              <textarea
                value={safetyPlan.coping}
                onChange={(e) => setSafetyPlan({ ...safetyPlan, coping: e.target.value })}
                placeholder="What activities can I do independently to distract and calm myself? (e.g. journaling, going for walks, drawing, the 5-4-3-2-1 grounding exercise...)"
                className="w-full bg-white border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl p-4 text-xs md:text-sm text-[#222523] placeholder-[#8C938D] focus:outline-none min-h-[110px] focus:bg-[#FAF9F6]"
              />
            </div>

            {/* Safe Places Field */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-semibold block">
                3. Safe Environments &amp; Positive Distractions
              </label>
              <textarea
                value={safetyPlan.places}
                onChange={(e) => setSafetyPlan({ ...safetyPlan, places: e.target.value })}
                placeholder="Where can I go to feel physically safe and welcomed? (e.g. library, local support group, counselor's lounge, specific public parks...)"
                className="w-full bg-white border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl p-4 text-xs md:text-sm text-[#222523] placeholder-[#8C938D] focus:outline-none min-h-[110px] focus:bg-[#FAF9F6]"
              />
            </div>

            {/* Safe Contacts Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono uppercase tracking-wider text-[#3D5647] font-semibold block">
                  4. Trusted People &amp; Supports
                </label>
                <button
                  type="button"
                  onClick={addContactField}
                  className="text-[10px] font-mono text-[#3D5647] hover:text-white hover:bg-[#3D5647] border border-[#E4DFD3] px-2.5 py-1 rounded transition-colors"
                >
                  + Add Person
                </button>
              </div>

              <div className="space-y-3.5 max-h-[150px] overflow-y-auto no-scrollbar pr-1">
                {safetyPlan.contacts.map((c, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center">
                    <input
                      type="text"
                      value={c.name}
                      onChange={(e) => handleContactChange(idx, 'name', e.target.value)}
                      placeholder="Name"
                      className="flex-1 bg-white border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-3 py-2 text-xs text-[#222523] placeholder-[#8C938D] focus:outline-none focus:bg-[#FAF9F6]"
                    />
                    <input
                      type="text"
                      value={c.contact}
                      onChange={(e) => handleContactChange(idx, 'contact', e.target.value)}
                      placeholder="Contact details"
                      className="flex-1 bg-white border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl px-3 py-2 text-xs text-[#222523] placeholder-[#8C938D] focus:outline-none focus:bg-[#FAF9F6]"
                    />
                    {safetyPlan.contacts.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeContactField(idx)}
                        className="text-[#B85C40] hover:text-[#A0452C] w-8 h-8 rounded-lg bg-[#FAF3F0] border border-[#EACEC5] flex items-center justify-center shrink-0"
                      >
                        &times;
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 border-t border-[#E4DFD3] pt-5 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-[#8C938D] flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-[#3D5647]" /> Locked Locally in Browser Storage
              </span>

              <button
                type="submit"
                className="bg-[#3D5647] hover:bg-[#32473a] text-white font-semibold py-2.5 px-6 rounded-xl text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#3D5647]/15"
              >
                {savedSuccess ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span>Saved Successfully!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save My Plan</span>
                  </>
                )}
              </button>
            </div>

          </form>
        ) : (
          <div className="bg-[#FAF9F6] border border-[#E4DFD3] rounded-2xl py-12 text-center text-[#8C938D]">
            <p className="text-xs font-mono">
              Your safety plan is currently hidden for privacy. Click &ldquo;Show Details&rdquo; above to view or update your plan.
            </p>
          </div>
        )}
      </div>

      {/* Grounding Technique Panel */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#222523]">
            The 5-4-3-2-1 Grounding Method
          </h2>
          <p className="text-[#555C57] text-xs md:text-sm mt-2 max-w-xl mx-auto">
            Use this cognitive exercise whenever you feel overwhelmed, panicked, or isolated. It helps re-anchor your awareness in the present physical space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {groundingSteps.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border-t-4 border-t-[#5D7A68] flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-[#3D5647] block mb-2 font-bold leading-tight">
                  {step.label}
                </span>
                <p className="text-[#555C57] text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <span className="text-2xl font-display font-extrabold text-[#D9D4C7] self-end mt-4 select-none">
                0{5 - idx}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
