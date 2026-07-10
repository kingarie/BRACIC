import React, { useState } from 'react';
import { ResourceItem } from '../types';
import { Search, BookOpen, Clock, Tag, ExternalLink, HelpCircle, Check, X, ShieldAlert, Award } from 'lucide-react';

export default function ResourcesView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'youth' | 'parents' | 'educators' | 'cyberbullying' | 'general'>('all');

  // Interactive Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const quizQuestions = [
    {
      question: 'What is the most effective immediate action if you are targeted by online cyberbullying?',
      options: [
        'Engage with the harasser to defend yourself and clear your name.',
        'Document and screenshot all messages, block the accounts, and notify a trusted advocate.',
        'Delete your account instantly and ignore the situation.',
        'Report the users but keep arguing to prevent them from targeting others.'
      ],
      correctIndex: 1,
      explanation: 'Argumentative engagement often escalates cyberbullying. Collecting evidence (with timestamps) and utilizing strict blocking tools is critical for reporting.'
    },
    {
      question: 'What constitutes an "active bystander" during an active bullying incident?',
      options: [
        'Recording the incident silently to upload as evidence later.',
        'Standing nearby to ensure the physical fight doesn\'t spiral out of control.',
        'Intervening safely if possible, or immediately reporting the incident to an authority figure.',
        'Ignoring the situation to deny the bully an audience.'
      ],
      correctIndex: 2,
      explanation: 'An active ally either intervenes safely to disrupt the situation (by shifting focus) or coordinates with authorities to stop the harassment promptly.'
    },
    {
      question: 'What is the main legal obligation of a school under state anti-bullying regulations?',
      options: [
        'To investigate and respond to documented harassment promptly, establishing a safe learning environment.',
        'To expel any student accused of verbal arguments instantly without trial.',
        'To monitor students\' personal private home messages on weekends.',
        'To offer psychological treatment to both parties outside the school district.'
      ],
      correctIndex: 0,
      explanation: 'Schools are legally bound to investigate documented peer bullying and implement actionable safety measures to protect targeted students.'
    }
  ];

  const resources: ResourceItem[] = [
    {
      id: 'r1',
      title: 'The Teen Safety Guide to Digital Spaces',
      category: 'cyberbullying',
      description: 'Step-by-step techniques to lock down social profiles, collect admissible screenshot logs of digital harassment, and escalate complaints directly to major web hosts.',
      readTime: '6 min read',
      content: 'This guide covers private settings, recording formats, and legal processes to safely mitigate online cyberbullying.',
      links: [
        { label: 'Download PDF Toolkit', url: '#' },
        { label: 'View Platform Report List', url: '#' }
      ]
    },
    {
      id: 'r2',
      title: "A Parent's Guide to Silent Peer Exclusion",
      category: 'parents',
      description: 'Understanding the non-verbal signs of relational bullying. How to prompt healthy, open conversations with your child without interrogation, and standard emails to send teachers.',
      readTime: '9 min read',
      content: 'Learn to identify signs of silent school exclusion, build communication avenues, and organize collaborative educational actions.',
      links: [
        { label: 'School Board Email Drafts', url: '#' },
        { label: 'Download Parent Checklist', url: '#' }
      ]
    },
    {
      id: 'r3',
      title: 'Restorative Justice Curriculums for Middle Schools',
      category: 'educators',
      description: 'A structural handbook for principals and educators to transition from punitive suspensions to empathetic peer-led restorative panels and mutual safety plans.',
      readTime: '12 min read',
      content: 'A comprehensive curriculum enabling student-led conflict mediation, anti-bystander workshops, and classroom safety checklists.',
      links: [
        { label: 'Download Curriculum Packet', url: '#' },
        { label: 'Restorative Panel Templates', url: '#' }
      ]
    },
    {
      id: 'r4',
      title: 'Student Rights Explained: Legals & Title IX',
      category: 'general',
      description: 'An objective briefing on the civil rights obligations school administrations hold regarding peer-led physical or digital harassment, and how to file formal grievances.',
      readTime: '8 min read',
      content: 'Review civil statutes, reporting guidelines, and legal templates protecting students experiencing identity-related harassment.',
      links: [
        { label: 'View State Statutes Guide', url: '#' },
        { label: 'Title IX Complaint Template', url: '#' }
      ]
    },
    {
      id: 'r5',
      title: 'Rebuilding Confidence: Recovery Post-Trauma',
      category: 'youth',
      description: 'Written by clinical child psychologists. Grounding techniques, journaling outlines, and advice on re-establishing boundaries and choosing positive friend circles.',
      readTime: '7 min read',
      content: 'Tips to recover personal autonomy, process panic triggers safely, and rebuild robust self-value inside supportive micro-communities.',
      links: [
        { label: 'Coping Journal Outline', url: '#' },
        { label: 'Youth Support Circle Registry', url: '#' }
      ]
    }
  ];

  // Filters
  const filteredResources = resources.filter((r) => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Quiz helper functions
  const handleAnswerSelect = (optionIdx: number) => {
    if (selectedAnswer !== null) return; // already answered
    setSelectedAnswer(optionIdx);
    if (optionIdx === quizQuestions[currentQuestion].correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion === quizQuestions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setQuizStarted(true);
  };

  const categories = [
    { id: 'all', label: 'All Guides' },
    { id: 'cyberbullying', label: 'Cyberbullying' },
    { id: 'parents', label: 'For Parents' },
    { id: 'educators', label: 'For Educators' },
    { id: 'youth', label: 'For Youth' },
    { id: 'general', label: 'Legal & Policy' }
  ];

  return (
    <div id="resources-view" className="py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-16 relative z-10 animate-fade-in text-[#222523]">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-mono uppercase tracking-widest text-[#3D5647] font-semibold bg-[#E9EFEA] border border-[#C5D7CC] px-3 py-1 rounded-full">
          Resource Library
        </span>
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-[#222523] leading-tight">
          Equipping you with knowledge and toolkits.
        </h1>
        <p className="text-[#4A504C] text-sm md:text-base leading-relaxed">
          Search downloadable handbooks, state legislative guides, school curriculum checklists, and test your understanding with our interactive self-defense quiz.
        </p>
      </div>

      {/* Grid: Searchable Guides & Interactive Quiz */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Resources and Search */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-[#E4DFD3] pb-5">
            <h2 className="font-display text-xl font-bold text-[#222523] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#3D5647]" /> Guides &amp; Handbooks
            </h2>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5D7A68]/40" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search resources..."
                className="bg-white focus:bg-[#FAF9F6] border border-[#D9D4C7] focus:border-[#3D5647] rounded-xl py-2 pl-9 pr-4 text-xs text-[#222523] focus:outline-none w-full md:w-56 placeholder-[#8C938D] transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide shrink-0 transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3D5647] text-white font-semibold shadow-sm'
                    : 'text-[#555C57] hover:text-[#222523] hover:bg-[#FAF9F6] border border-[#E4DFD3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Resource list */}
          <div className="space-y-4">
            {filteredResources.length > 0 ? (
              filteredResources.map((res) => (
                <div
                  key={res.id}
                  id={`resource-card-${res.id}`}
                  className="glass-panel rounded-2xl p-5 md:p-6 space-y-4 hover:border-[#3D5647]/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#3D5647] uppercase tracking-widest bg-[#E9EFEA] px-2.5 py-0.5 rounded border border-[#C5D7CC]">
                      {res.category}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] text-[#8C938D] font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{res.readTime}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-base md:text-lg font-bold text-[#222523] hover:text-[#3D5647] transition-colors">
                      {res.title}
                    </h3>
                    <p className="text-[#555C57] text-xs md:text-sm leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-2.5 border-t border-[#E4DFD3]">
                    {res.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Simulating document access: "${res.title} - ${link.label}". The PDF will download to your system.`);
                        }}
                        className="text-xs text-[#3D5647] hover:text-[#2c3f34] font-medium flex items-center gap-1 hover:underline underline-offset-4 decoration-[#3D5647]/20"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-[#FAF9F6] border border-[#E4DFD3] rounded-2xl py-12 text-center text-[#8C938D]">
                <p className="text-xs font-mono">No resources match your search keywords or active filter.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Quiz Box */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden h-full flex flex-col justify-between">
            {/* Ambient lighting */}
            <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-[#E9EFEA]/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5 mb-2">
                <HelpCircle className="w-5.5 h-5.5 text-[#3D5647]" />
                <h2 className="font-display text-xl font-bold text-[#222523]">
                  Safe Ally &amp; Prevention Quiz
                </h2>
              </div>
              <p className="text-[#555C57] text-xs leading-relaxed">
                Check your understanding of anti-bullying legislation, student safety rights, and safe digital intervention strategies.
              </p>
            </div>

            {/* Quiz Screen Rendering */}
            {!quizStarted && !quizFinished ? (
              <div className="bg-[#FAF9F6] border border-[#E4DFD3] rounded-2xl p-6 text-center space-y-5 my-4">
                <div className="w-12 h-12 rounded-xl bg-[#E9EFEA] border border-[#C5D7CC] flex items-center justify-center text-[#3D5647] mx-auto">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-sm font-bold text-[#222523]">Interactive Assessment</h3>
                  <p className="text-[#555C57] text-[11px] max-w-xs mx-auto leading-normal">
                    Answer 3 clinical-grade situational questions on reporting cyberbullying, school obligations, and bystander support.
                  </p>
                </div>
                <button
                  id="btn-start-quiz"
                  onClick={() => setQuizStarted(true)}
                  className="bg-[#3D5647] hover:bg-[#32473a] text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors cursor-pointer w-full"
                >
                  Start Assessment
                </button>
              </div>
            ) : quizStarted && !quizFinished ? (
              <div className="space-y-5 my-2 flex-1">
                <div className="flex justify-between items-center text-[10px] font-mono text-[#8C938D] border-b border-[#E4DFD3] pb-2">
                  <span>QUESTION {currentQuestion + 1} OF {quizQuestions.length}</span>
                  <span className="text-[#3D5647] font-bold">SCORE: {score}</span>
                </div>

                <h3 className="font-display text-sm md:text-base font-bold text-[#222523] leading-normal">
                  {quizQuestions[currentQuestion].question}
                </h3>

                <div className="space-y-2.5">
                  {quizQuestions[currentQuestion].options.map((option, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === quizQuestions[currentQuestion].correctIndex;
                    const hasAnswered = selectedAnswer !== null;

                    let btnStyles = 'bg-white border-[#D9D4C7] hover:border-[#3D5647]/50 text-[#4A504C]';
                    if (hasAnswered) {
                      if (isCorrect) {
                        btnStyles = 'bg-[#E9EFEA] border-[#3D5647] text-[#222523] font-medium';
                      } else if (isSelected) {
                        btnStyles = 'bg-[#FAF3F0] border-[#B85C40] text-[#222523] font-medium';
                      } else {
                        btnStyles = 'bg-[#FAF9F6]/50 border-transparent text-[#8C938D] cursor-not-allowed';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        id={`quiz-option-btn-${idx}`}
                        disabled={hasAnswered}
                        onClick={() => handleAnswerSelect(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs leading-normal transition-all flex gap-3 items-start cursor-pointer ${btnStyles}`}
                      >
                        <span className="font-mono text-[#3D5647] font-bold mt-0.5">{String.fromCharCode(65 + idx)}.</span>
                        <span className="flex-1">{option}</span>
                        {hasAnswered && isCorrect && <Check className="w-4 h-4 text-[#3D5647] shrink-0 mt-0.5" />}
                        {hasAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-[#B85C40] shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer !== null && (
                  <div className="bg-[#E9EFEA]/45 border border-[#C5D7CC] rounded-2xl p-4 text-[11px] md:text-xs text-[#4A504C] leading-relaxed animate-fade-in">
                    <span className="font-mono text-[#3D5647] font-bold block mb-1 uppercase tracking-wider">Advocacy Feedback</span>
                    {quizQuestions[currentQuestion].explanation}
                  </div>
                )}

                {selectedAnswer !== null && (
                  <button
                    id="btn-quiz-next"
                    onClick={handleNextQuestion}
                    className="w-full bg-[#3D5647] hover:bg-[#32473a] text-white py-2.5 rounded-xl text-xs font-semibold transition-all mt-4 cursor-pointer"
                  >
                    {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question &rarr;'}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-[#FAF9F6] border border-[#E4DFD3] rounded-2xl p-6 text-center space-y-6 my-4">
                <div className="w-14 h-14 rounded-full bg-[#E9EFEA] border border-[#C5D7CC] flex items-center justify-center text-[#3D5647] mx-auto">
                  <Award className="w-7 h-7" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display text-base font-bold text-[#222523]">Assessment Complete!</h3>
                  <p className="text-[#3D5647] font-mono text-xs font-bold uppercase tracking-wider">
                    Your Score: {score} out of {quizQuestions.length} correct
                  </p>
                  <p className="text-[#555C57] text-xs max-w-xs mx-auto leading-relaxed pt-2">
                    {score === quizQuestions.length
                       ? 'Incredible! You have robust understanding of student safety laws, active bystander techniques, and digital protection frameworks.'
                       : 'Good effort! Understanding the nuance of safe bystander disruption and legislative rights helps build a safer community for everyone.'}
                  </p>
                </div>
                <button
                  id="btn-restart-quiz"
                  onClick={resetQuiz}
                  className="bg-[#3D5647] hover:bg-[#32473a] text-white font-bold py-2.5 px-6 rounded-xl text-xs transition-colors cursor-pointer w-full flex items-center justify-center gap-1.5"
                >
                  <span>Retake Assessment</span>
                </button>
              </div>
            )}

            <div className="text-[10px] text-[#8C938D] font-mono text-center border-t border-[#E4DFD3] pt-4">
              All quiz feedback is clinically reviewed by child safety practitioners.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
