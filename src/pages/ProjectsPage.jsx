import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, Building, Globe, Video, Cpu, Sparkles, ArrowRight
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const categories = [
    { name: 'All', icon: LayoutGrid, value: 'All' },
    { name: 'Built Environment', icon: Building, value: 'Built Environment' },
    { name: 'Public & Other Sectors', icon: Globe, value: 'Public & Other Sectors' },
    { name: 'Media & Storyboards', icon: Video, value: 'Media & Storyboards' }
  ];

  const projectsData = [
    {
      id: 'cyptos-cmms',
      title: 'Cyptos (CMMS)',
      category: 'Built Environment',
      status: 'Cost Saving',
      description: 'Aptiv8\'s Computerized Maintenance Management System, empowering data-driven transition for the advanced Crypto Centre Asset lifecycle.',
      clientIndustry: 'Government (BCA, JTC, HDB), Data Centre, Building (TEL, XJE, ELTE, RP, Tampines Express) Contractors (MURP, Lum Chang)',
      keyFeatures: 'Analyzing maintenance documents, pilot projects proposed for technology reference identification',
      // Inline 3D Server Blocks SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 15 L85 32 L50 49 L15 32 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M15 32 V52 L50 69 V49 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M85 32 V52 L50 69 V49 Z" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M50 43 L85 60 L50 77 L15 60 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M15 60 V75 L50 90 V77 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M85 60 V75 L50 90 V77 Z" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <rect x="42" y="27" width="16" height="16" rx="2" fill="#ef4444" opacity="0.8"/>
        </svg>
      )
    },
    {
      id: 'akira-datacenter',
      title: 'Akira – Data Centre Design Assistant',
      category: 'Built Environment',
      status: 'Design',
      description: 'Gen AI assistant specifically tailored for optimizing and accelerating complex data centre layout and technical designs.',
      clientIndustry: 'Design Consultants / Tier Certified Cloud',
      keyFeatures: 'When online (Natural) on-standby or standby on optional',
      // Inline 3D Geometric Blocks SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 L80 25 L50 40 L20 25 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M20 25 V45 L50 60 V40 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M80 25 V45 L50 60 V40 Z" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M50 50 L80 65 L50 80 L20 65 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M20 65 V80 L50 95 V80 Z" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M80 65 V80 L50 95 V80 Z" fill="#ef4444" stroke="#ef4444" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'compliance-chatbot',
      title: 'Compliance Chatbot',
      category: 'Built Environment',
      status: 'Future Ready',
      description: 'An AI assistant with Generative AI for immersive and verify design against authority rules under Singapore\'s CORENET X system.',
      clientIndustry: 'BCA / Consultants / AEC works Singapore',
      keyFeatures: 'No inequalities reference identified',
      // Inline Robot SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="30" width="50" height="40" rx="20" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5"/>
          <circle cx="40" cy="50" r="6" fill="#ef4444"/>
          <circle cx="60" cy="50" r="6" fill="#ef4444"/>
          <path d="M45 62 H55" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="50" cy="20" r="4" fill="#ef4444"/>
          <line x1="50" y1="20" x2="50" y2="30" stroke="#ef4444" strokeWidth="2"/>
          <rect x="20" y="45" width="6" height="10" rx="3" fill="#ef4444"/>
          <rect x="74" y="45" width="6" height="10" rx="3" fill="#ef4444"/>
        </svg>
      )
    },
    {
      id: 'sdsa-beamp',
      title: 'BEAMP Cycle & Challenge – Sustainability Design Smart Advisor (SDSA)',
      category: 'Built Environment',
      status: 'Featured Solution',
      description: 'Developing sustainability advisor embodiment into the existing BEAMP Cycle & Challenge to enhance Green Mark transitional assessments.',
      clientIndustry: 'Built Environment sustainability consultants',
      keyFeatures: 'New rules to be produced for BEXAsia 2024',
      // Inline Leaf Dial SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="35" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 4"/>
          <circle cx="50" cy="50" r="25" fill="#fff" stroke="#ef4444" strokeWidth="2"/>
          <path d="M50 35 C58 35 65 42 65 50 C65 58 50 65 50 65 C50 65 35 58 35 50 C35 42 42 35 50 35 Z" fill="#ef4444" opacity="0.8"/>
          <path d="M45 50 L48 53 L55 46" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'dragonfly',
      title: 'Dragonfly',
      category: 'Built Environment',
      status: 'Cost Saving',
      description: 'Robotic Mosquito Controller — a vision-of-record robotic solution for vector control used in rental buildings.',
      clientIndustry: 'Building Management / Facilities Management (FM)',
      keyFeatures: 'When already available',
      // Inline Drone/Robotic Insect SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="16" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5"/>
          <ellipse cx="25" cy="50" rx="12" ry="5" fill="#fff" stroke="#ef4444" strokeWidth="2"/>
          <ellipse cx="75" cy="50" rx="12" ry="5" fill="#fff" stroke="#ef4444" strokeWidth="2"/>
          <line x1="50" y1="34" x2="50" y2="20" stroke="#ef4444" strokeWidth="2"/>
          <line x1="50" y1="66" x2="50" y2="80" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="45" cy="47" r="2" fill="#ef4444"/>
          <circle cx="55" cy="47" r="2" fill="#ef4444"/>
        </svg>
      )
    },
    {
      id: 'ai-powered-cmms',
      title: 'AI-Powered CMMS',
      category: 'Built Environment',
      status: 'High Performance',
      description: 'Advanced version process of Cyptos on a wider IoT platform, with integration of Real Time and Thermal Comfort Management Corporation.',
      clientIndustry: 'Built Environment / Facilities Management (FM)',
      keyFeatures: 'When on the cloud. No alter where now considered value to pipeline',
      // Inline Connected IoT Gears SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="40" r="18" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5"/>
          <circle cx="35" cy="70" r="12" fill="#fff" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="65" cy="70" r="12" fill="#fff" stroke="#ef4444" strokeWidth="2"/>
          <line x1="45" y1="55" x2="38" y2="60" stroke="#ef4444" strokeWidth="2"/>
          <line x1="55" y1="55" x2="62" y2="60" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="50" cy="40" r="6" fill="#ef4444"/>
        </svg>
      )
    },
    {
      id: 'public-sector-cs',
      title: 'Public Sector Customer Service Center',
      category: 'Public & Other Sectors',
      status: 'Digital',
      description: 'AI-powered customer service platform integrated into a public sector service centres to enhance efficiency, engagement and resident satisfaction.',
      clientIndustry: 'Public sectors / Centralized Operations',
      keyFeatures: 'No inequalities reference identified',
      // Inline Headset Icon SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 60 C25 35 35 25 50 25 C65 25 75 35 75 60" stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
          <rect x="20" y="52" width="10" height="16" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
          <rect x="70" y="52" width="10" height="16" rx="3" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
          <path d="M70 65 C60 75 40 75 35 70" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      )
    },
    {
      id: 'ai-value-be-video',
      title: '"AI Value for the Built Environment" Video',
      category: 'Media & Storyboards',
      status: 'Insights & Analytics',
      description: 'A 60–100 second brand video and storyboard production showcasing how AI, Data Engineering, Crypto + Token + ComplyDrive + CMMS drive solution.',
      clientIndustry: 'Prospective new development partners and clients across APAC',
      keyFeatures: 'Production-ready script & storyboard document',
      // Inline Clapperboard SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="35" width="60" height="40" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5"/>
          <path d="M20 48 H80" stroke="#ef4444" strokeWidth="2"/>
          <line x1="32" y1="35" x2="42" y2="48" stroke="#ef4444" strokeWidth="2"/>
          <line x1="52" y1="35" x2="62" y2="48" stroke="#ef4444" strokeWidth="2"/>
          <polygon points="45,52 60,60 45,68" fill="#ef4444"/>
        </svg>
      )
    },
    {
      id: 'gen-ai-other-sectors-video',
      title: '"Gen AI for Other Sectors" Video',
      category: 'Media & Storyboards',
      status: 'Why Aptiv8',
      description: 'AI showcase brand video for Agriculture and Tech & Creative (Advertise / Short-Film Festival), and Aerospace MRO Agents.',
      clientIndustry: 'Customer service, Sales, Hospitality, Cloud tech core market, Aviation & Aerospace (MRO)',
      keyFeatures: 'Production-ready script & storyboard document',
      // Inline Film Reel SVG
      svg: (
        <svg className="w-16 h-16 text-red-500 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.5"/>
          <circle cx="50" cy="50" r="10" fill="#fff" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="38" cy="38" r="4" fill="#ef4444"/>
          <circle cx="62" cy="38" r="4" fill="#ef4444"/>
          <circle cx="38" cy="62" r="4" fill="#ef4444"/>
          <circle cx="62" cy="62" r="4" fill="#ef4444"/>
          <path d="M80 50 A30 30 0 0 1 70 75 L85 85" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="relative pt-24 pb-16 bg-[#fafafa]">
      
      {/* 1. FILTER CONTROLS */}
      <section className="py-8 bg-[#fafafa] sticky top-20 z-20 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 justify-center">
          {categories.map(cat => {
            const IconComponent = cat.icon;
            const isActive = filter === cat.value;

            return (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? 'bg-[#e11d48] text-white border-[#e11d48] shadow-md shadow-rose-500/10'
                    : 'bg-white text-slate-700 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. PROJECTS GRID */}
      <section className="py-8 px-4">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((proj) => {
                  const isSDSA = proj.id === 'sdsa-beamp';

                  return (
                    <motion.div
                      key={proj.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className={`relative flex flex-col justify-between bg-white rounded-3xl p-8 border-2 transition-all duration-500 group overflow-hidden ${
                        isSDSA 
                          ? 'border-red-500 shadow-md shadow-rose-500/5' 
                          : 'border-slate-100/90 hover:border-red-500'
                      }`}
                    >
                      <div>
                        {/* Category & Status */}
                        <div className="flex justify-between items-center mb-6">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-800 font-display">
                            {proj.category}
                          </span>
                          <span className="text-[9px] px-2.5 py-1 rounded-full border border-red-500/20 text-red-500 bg-red-50/40 font-extrabold font-display">
                            {proj.status}
                          </span>
                        </div>

                        {/* Title & 3D Isometric Icon Box */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <h3 className="text-xl font-extrabold font-display text-slate-900 leading-snug group-hover:text-red-500 transition-colors">
                            {proj.title}
                          </h3>
                          {proj.svg}
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed mb-6 font-light">
                          {proj.description}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-slate-100 relative z-10">
                        <div>
                          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block mb-1">
                            CLIENTS / INDUSTRY
                          </span>
                          <span className="text-xs text-slate-500 leading-relaxed font-light flex items-start gap-1.5">
                            <span className="text-red-500 shrink-0 mt-0.5 select-none">☑</span>
                            {proj.clientIndustry}
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block mb-1">
                            KEY FEATURES
                          </span>
                          <span className="text-xs text-slate-500 leading-relaxed font-light flex items-start gap-1.5">
                            <span className="text-red-500 shrink-0 mt-0.5 select-none">☑</span>
                            {proj.keyFeatures}
                          </span>
                        </div>
                      </div>

                      {/* Arrow CTA Button at bottom-right */}
                      <div className="absolute bottom-6 right-6 z-20">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSDSA 
                            ? 'bg-red-500 text-white' 
                            : 'bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white'
                        }`}>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </div>
        </Reveal3D>
      </section>

      {/* 3. CALL TO ACTION BANNER */}
      <section className="py-12 px-4 mt-12">
        <Reveal3D>
          <div className="max-w-7xl mx-auto rounded-3xl bg-[#fff1f2] dark:bg-slate-900 border border-red-100 dark:border-slate-800 p-12 text-center relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background pattern */}
            <div className="absolute left-0 bottom-0 top-0 w-1/4 opacity-[0.05] pointer-events-none bg-[url('https://images.unsplash.com/photo-1542362567-b07eac79094d?auto=format&fit=crop&w=400&q=80')] bg-no-repeat bg-left bg-cover" />
            <div className="absolute right-0 bottom-0 top-0 w-1/4 opacity-[0.05] pointer-events-none bg-[linear-gradient(45deg,#f43f5e_1px,transparent_1px)] bg-[size:12px_12px]" />

            <div className="max-w-2xl mx-auto relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
                Bring Your Domain <span className="text-red-600">Expertise</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                We co-develop custom AI solutions for complex domains, designed to solve real-world challenges and create impact.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-red-500/20"
              >
                Propose a Co-Development Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}
