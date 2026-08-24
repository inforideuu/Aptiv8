import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Sparkles, Building, ChevronLeft, ChevronRight, 
  MessageSquare, User, HelpCircle, Layers, CheckCircle2 
} from 'lucide-react';

import ThreeWireframe from '../components/ThreeWireframe';
import Card from '../components/Card';
import Reveal3D from '../components/Reveal3D';
import { 
  featuredSolutions, 
  bentoProducts, 
  lifecycleStages, 
  industries, 
  caseStudies, 
  chatbotAnswers 
} from '../data/websiteData';

export default function HomePage({ theme }) {
  const navigate = useNavigate();

  const homeProducts = [
    {
      id: 'compliance-chatbot',
      title: 'Gen AI Chatbot & Assistant for Regulatory Compliance',
      category: 'Planning & Design',
      description: "Helps consultants navigate 6,300+ rules, regulations, codes and circulars across seven government agencies under Singapore's CORENET X regime.",
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'greensip',
      title: 'GreenSIP — BCA Green Mark V7 Co-Pilot',
      category: 'Planning & Design',
      description: "Extends Aptiv8's Sustainable Design Smart Advisor (SDSA) into a full BCA Green Mark V7 co-pilot, mapping energy, ETTV, and thermal comfort metrics.",
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'bid-tender-prep',
      title: 'AI Assistant for Bid & Tender Evaluation',
      category: 'Pre-Construction',
      description: 'Helps contractors assemble compliant, competitive bids and helps clients/consultants evaluate submissions fairly against tendering criteria.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'site-supervisor-assistant',
      title: 'Site Supervisor / Manager Assistant',
      category: 'Construction',
      description: 'Supports workplace safety and health (WSH), safety monitoring, and productivity on site through real-time logistics and hazard detection.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'aptiv8-cortex-cmms',
      title: 'Aptiv8 — Agentic AI-Powered CMMS Platform',
      category: 'Operations & Maintenance',
      description: "Adds an intelligent orchestrator directing nine specialist AI agents within Aptiv8's Singapore-based, CSA-STAR-certified AWS environment.",
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'strata-assistant',
      title: 'Strata Title & Maintenance Management',
      category: 'Real Estate',
      description: 'Supports Managing Agents with drafting correspondence, tracking maintenance schedules, and ensuring compliance with bylaws.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Section 2: AI Solution Finder State
  const [role, setRole] = useState('');
  const [problem, setProblem] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Section 3: Horizontal Timeline State
  const [activeStage, setActiveStage] = useState(lifecycleStages[0].id);
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleTiltMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Max 8 degrees tilt for natural 3D look
    setTiltX(-y / (box.height / 16));
    setTiltY(x / (box.width / 16));
  };

  const handleTiltMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  // Section 7: Case Studies Carousel State
  const [currentCase, setCurrentCase] = useState(0);

  // Section 10: AI Chatbot State
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Welcome to the Aptiv8 AI Assistant. Ask me anything about our solutions, Green Mark compliance, or CMMS.' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // AI Solution Finder Handler
  const handleFindSolution = () => {
    if (!role || !problem) return;
    
    // Filter solutions based on role & problem matching description keywords
    const filtered = featuredSolutions.filter(sol => {
      const desc = sol.description.toLowerCase() + ' ' + sol.category.toLowerCase() + ' ' + sol.title.toLowerCase();
      
      const probMap = {
        'Compliance': ['compliance', 'safety', 'regulatory', 'code', 'fire'],
        'Sustainability': ['sustainability', 'green mark', 'carbon', 'energy'],
        'BIM': ['bim', 'revit', 'ifc', 'metadata'],
        'Tender Preparation': ['bid', 'tender', 'cost', 'spec'],
        'Maintenance': ['cmms', 'maintenance', 'cortex', 'sensor'],
        'Lease Management': ['lease', 'strata', 'real estate', 'property']
      };

      const keywords = probMap[problem] || [];
      return keywords.some(kw => desc.includes(kw));
    });

    setRecommendations(filtered.length > 0 ? filtered : featuredSolutions.slice(0, 2));
  };

  // Chatbot Handler
  const handleChatSend = (customText = '') => {
    const text = customText || chatInput;
    if (!text.trim()) return;

    const newMessages = [...chatMessages, { sender: 'user', text }];
    setChatMessages(newMessages);
    setChatInput('');

    // Process answer
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      const match = chatbotAnswers.find(ans => 
        ans.keywords.some(kw => lowerText.includes(kw))
      );

      const response = match 
        ? match.answer 
        : "Thank you for your question. I recommend speaking directly with our BIM and AI advisors. You can schedule a session using the 'Book a Demo' button above.";

      setChatMessages(prev => [...prev, { sender: 'bot', text: response }]);
    }, 6000); // 600ms simulation delay
  };

  return (
    <div className="relative pt-20">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden border-b border-border-color">
        {/* Background video overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-black/45 via-black/20 to-red-950/10" />        <ThreeWireframe theme={theme} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-6 font-display"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Introducing Enterprise-Grade AI
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-6 leading-[1.1]"
          >
            AI-Powered Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              for the Built Environment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transforming architecture, engineering, construction, facilities management, infrastructure, and real estate through custom-trained artificial intelligence models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="/solutions" className="group relative w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-full font-semibold transition-all duration-500 ease-out text-center flex items-center justify-center gap-3 overflow-hidden shadow-[0_8px_30px_rgba(239,68,68,0.18)] hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_45px_rgba(239,68,68,0.32)] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full before:skew-x-[-20deg] before:transition-transform before:duration-700 hover:before:translate-x-full">
              <span className="relative z-10">Explore Solutions</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:-rotate-6" />
            </a>
            <a href="/contact" className="group relative w-full sm:w-auto px-8 py-4 bg-bg-secondary text-text-primary border border-border-color rounded-full font-semibold transition-all duration-500 ease-out text-center flex items-center justify-center gap-2 overflow-hidden hover:-translate-y-1 hover:border-accent/60 hover:text-accent hover:bg-accent/[0.04] hover:shadow-[0_14px_40px_rgba(239,68,68,0.12)] before:absolute before:inset-0 before:rounded-full before:border before:border-accent/0 before:scale-90 before:transition-all before:duration-500 group-hover:before:scale-100 group-hover:before:border-accent/20">
              <span className="relative z-10">Book a Demo</span>
              <span className="relative z-10 w-1.5 h-1.5 rounded-full bg-current opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: AI SOLUTION FINDER */}
      <section id="solution-finder" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <Reveal3D>
          <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              AI Solution Finder
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Select your role and key operational challenges below. Our matcher will select the relevant Aptiv8 solutions.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start hover:shadow-[0_20px_45px_rgba(227,6,19,0.35),0_8px_20px_rgba(227,6,19,0.12)]
dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.30),0_8px_20px_rgba(255,59,71,0.10)]
hover:border-accent/60
transition-all duration-500">
            {/* Steps & Selection */}
            <div className="flex flex-col gap-8">
              {/* Question 1 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 rounded-xl bg-accent-glow text-accent font-bold text-sm shrink-0">01</span>
                  <label className="font-display font-bold text-lg text-text-primary">Who are you?</label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Architect', 'Engineer', 'Contractor', 'Facility Manager', 'Building Owner', 'Real Estate Developer'].map(item => (
                    <button
                      key={item}
                      onClick={() => setRole(item)}
                      className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        role === item
                          ? 'border-accent bg-accent text-white shadow-md'
                          : 'border-border-color text-text-secondary bg-bg-primary hover:border-accent/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="p-2 rounded-xl bg-accent-glow text-accent font-bold text-sm shrink-0">02</span>
                  <label className="font-display font-bold text-lg text-text-primary">What problem are you trying to solve?</label>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['Compliance', 'Sustainability', 'BIM', 'Tender Preparation', 'Maintenance', 'Lease Management'].map(item => (
                    <button
                      key={item}
                      onClick={() => setProblem(item)}
                      className={`px-4 py-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                        problem === item
                          ? 'border-accent bg-accent text-white shadow-md'
                          : 'border-border-color text-text-secondary bg-bg-primary hover:border-accent/40'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Match CTA */}
              <button
                onClick={handleFindSolution}
                disabled={!role || !problem}
                className="w-full py-4 rounded-xl bg-accent text-white font-semibold hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2"
              >
                Match AI Solution <Sparkles className="h-4 w-4" />
              </button>
            </div>

            {/* Results */}
            <div className="border border-border-color bg-bg-primary/50 rounded-2xl p-6 min-h-[350px] flex flex-col justify-between">
              <h3 className="font-display font-bold text-lg text-text-primary mb-4 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent animate-pulse" />
                Recommended Aptiv8 Solutions
              </h3>

              <div className="flex-grow">
                {recommendations.length > 0 ? (
                  <div className="flex flex-col gap-4">
                    {recommendations.map(sol => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={sol.id}
                        className="p-4 rounded-xl bg-bg-secondary border border-border-color flex items-start gap-4 hover:border-accent transition-colors"
                      >
                        <img src={sol.image} alt={sol.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                        <div>
                          <span className="text-[9px] uppercase tracking-wider text-accent font-semibold">{sol.category}</span>
                          <h4 className="font-bold text-sm text-text-primary mb-1">{sol.title}</h4>
                          <p className="text-xs text-text-secondary line-clamp-2">{sol.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center text-text-secondary py-12">
                    <HelpCircle className="h-10 w-10 text-text-secondary/50 mb-3" />
                    <p className="text-sm max-w-xs">Select your profile and operations challenges on the left to review recommended solutions.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 3: BUILT ENVIRONMENT LIFECYCLE (Timeline) */}
      <section id="lifecycle" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              Built Environment Lifecycle
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Explore how Aptiv8 solutions integrate into every single phase of your building asset timeline.
            </p>
          </div>

          {/* Interactive Horizontal Timeline */}
          <div className="flex flex-col gap-12">
            {/* Timeline Header bar */}
            <div className="relative border-b border-border-color pb-4 flex overflow-x-auto gap-8 justify-between scrollbar-thin">
              <div className="relative flex items-stretch overflow-x-auto pt-3 pb-5 scrollbar-hide">
                {lifecycleStages.map((stage, idx) => (
                  <div key={stage.id} className="flex items-center shrink-0">
      
                    {/* Phase Button */}
                    <button
                      onClick={() => setActiveStage(stage.id)}
                      className={`group relative min-w-[190px] px-6 py-5 rounded-2xl text-left overflow-hidden transition-all duration-500 ease-out ${
                      activeStage === stage.id
                        ? 'bg-bg-primary border border-accent/50 shadow-[0_12px_35px_rgba(239,68,68,0.16)] -translate-y-1'
                        : 'bg-bg-secondary/60 border border-border-color hover:border-accent/30 hover:bg-bg-primary hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(239,68,68,0.08)]'
                      }`}
                    >
                      {/* Active / hover glow */}
                      <div
                      className={`absolute -top-16 -right-16 w-32 h-32 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 ${
                        activeStage === stage.id
                        ? 'opacity-100'
                        : 'opacity-0 group-hover:opacity-100'
                      }`}
                      />

                      {/* Phase number */}
                      <div className="relative z-10 flex items-center justify-between mb-4">
                        <span className={`text-[9px] font-mono font-bold tracking-[0.2em] transition-colors duration-300 ${
                          activeStage === stage.id
                          ? 'text-accent'
                          : 'text-text-secondary/50 group-hover:text-accent'
                        }`}
                        >
                          PHASE 0{idx + 1}
                        </span>

                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-500 ${
                            activeStage === stage.id
                              ? 'bg-accent shadow-[0_0_12px_rgba(239,68,68,0.7)] scale-110'
                              : 'bg-border-color group-hover:bg-accent/60'
                          }`}
                        />
                      </div>

                      {/* Phase name */}
                      <span
                        className={`relative z-10 block font-display font-bold text-sm transition-all duration-300 ${
                          activeStage === stage.id
                          ? 'text-text-primary'
                          : 'text-text-secondary/80 group-hover:text-text-primary'
                        }`}>
                        {stage.name}
                      </span>

                      {/* Bottom active indicator */}
                      <motion.div
                        layoutId="activeTimelineBorder"
                        className={`absolute bottom-0 left-5 right-5 h-[2px] rounded-full ${
                          activeStage === stage.id
                          ? 'bg-accent shadow-[0_0_12px_rgba(239,68,68,0.45)]'
                          : 'bg-transparent'
                        }`}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30
                        }}
                      />

                        {/* Hover sweep */}
                        <div className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] transition-all duration-700 group-hover:left-[130%] "
                        />
                          </button>

      {/* Arrow between phases */}
      {idx < lifecycleStages.length - 1 && (
        <div className="relative w-14 shrink-0 flex items-center justify-center">
          <div className="absolute left-0 right-0 h-px bg-border-color" />

          <div
            className={`
              relative z-10
              w-8 h-8
              rounded-full
              flex items-center justify-center
              bg-bg-secondary
              border
              transition-all
              duration-500
              ${
                activeStage === stage.id
                  ? 'border-accent/50 text-accent shadow-[0_0_18px_rgba(239,68,68,0.15)]'
                  : 'border-border-color text-text-secondary/50'
              }
            `}
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </div>
      )}
    </div>
  ))}
</div>
            </div>

            {/* Dynamic Stage Details */}
            <AnimatePresence mode="wait">
              {lifecycleStages.filter(stage => stage.id === activeStage).map(stage => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                   {/* Left content description styled in premium card with interactive 3D tilt effect */}
                  <div 
                    onMouseMove={handleTiltMouseMove}
                    onMouseLeave={handleTiltMouseLeave}
                    style={{
                      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.1s ease-out, background-color 0.4s, border-color 0.4s, box-shadow 0.3s'
                    }}
                    className="bg-bg-primary/40 dark:bg-bg-secondary/30 backdrop-blur-md border border-border-color/80 p-6 sm:p-8 md:p-10 rounded-[28px] shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] relative overflow-hidden group hover:shadow-[0_16px_48px_0_rgba(227,6,19,0.06)] hover:border-accent/40 transition-all duration-500"
                  >
                    {/* Premium Ambient Light Glow */}
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/4 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/8 transition-colors duration-500" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-display font-extrabold text-text-primary mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                        {stage.name} Solutions
                      </h3>
                      <p className="text-text-secondary mb-8 leading-relaxed text-sm md:text-base">
                        {stage.description}
                      </p>
                      
                      <div className="pt-6 border-t border-border-color/50">
                        <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
                          <Layers className="h-4.5 w-4.5 text-accent animate-pulse" /> Installed Products & Engine Integrations
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {stage.products.map((prod, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-text-secondary hover:text-text-primary transition-colors">
                              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                              <span className="font-medium">{prod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right large image */}
                  <div className="rounded-[24px] overflow-hidden border border-border-color aspect-[16/10] relative shadow-lg">
                    <img src={stage.image} alt={stage.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 4: FEATURED AI SOLUTIONS */}
      <section id="solutions" className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              Featured AI Solutions
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Highly specialized artificial intelligence components engineered to optimize operations across standard industry pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions
              .filter(sol => sol.id !== 'cortex')
              .map(sol => (
                <Card
                  key={sol.id}
                  image={sol.image}
                  category={sol.category}
                  title={sol.title}
                  description={sol.description}
                  isCoreProduct={sol.id === 'sdsa'}
                  onClick={() => navigate('/solutions')}
                />
              ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 5: PRODUCTS BENTO GRID */}
      <section id="products-bento" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              AI Products Ecosystem
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our core modular software offerings rendered in an asymmetrical grid highlighting efficiency metrics.
            </p>
          </div>

          {/* 3-Column Grid layout (2 rows and 3 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeProducts.map((prod, idx) => (
              <div
                key={prod.id}
                onClick={() => navigate('/products')}
                style={{ animationDelay: `${idx * 0.4}s` }}
                className="group relative bg-gradient-to-br from-bg-secondary via-bg-secondary to-bg-tertiary/40 border border-accent/30 hover:border-accent rounded-[28px] overflow-hidden flex flex-col transition-all duration-700 ease-out hover:-translate-y-1.5 hover:scale-[1.01] shadow-[0_8px_30px_rgba(227,6,19,0.05)] hover:shadow-[0_20px_50px_rgba(227,6,19,0.22)] ring-4 ring-accent/5 hover:ring-accent/20 cursor-pointer h-auto animate-slow-bounce"
              >
                {/* Hover Background Image Layer */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100"
                  />
                  {/* Dark overlay for readability on hover background image */}
                  <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Floating hover arrow indicator */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm border border-white flex items-center justify-center text-slate-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <ArrowUpRight className="h-4 w-4" />
                </div>

                {/* Content Layer (z-10 to stay on top of background image) */}
                <div className="relative z-10 p-7 flex flex-col h-full">
                  <div>
                    {/* Category Capsule Tag */}
                    <div className="flex items-center mb-4">
                      <span className="text-[9px] uppercase tracking-[0.16em] text-accent group-hover:text-white group-hover:bg-accent/20 group-hover:border-white/20 transition-all duration-500 font-bold font-mono px-3 py-1 rounded-full bg-accent-glow border border-accent/15 shadow-sm">
                        {prod.category}
                      </span>
                    </div>

                    {/* Premium Accent Line Indicator */}
                    <div className="w-8 h-[2px] bg-accent/40 group-hover:w-16 group-hover:bg-accent transition-all duration-500 rounded-full mb-3.5" />

                    {/* Title */}
                    <h3 className="font-display font-bold text-base text-text-primary mb-2 transition-all duration-400 group-hover:translate-x-1 group-hover:text-white line-clamp-2 leading-snug">
                      {prod.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-text-secondary group-hover:text-slate-200 leading-relaxed line-clamp-3 transition-colors duration-500">
                      {prod.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center mt-5 pt-3.5 border-t border-border-color/70 group-hover:border-white/10 transition-colors duration-500">
                    <span
                      className="text-[10px] uppercase tracking-[0.16em] font-bold text-text-secondary transition-colors duration-300 group-hover:text-white"
                    >
                      Explore Product
                    </span>

                    <div className="w-7 h-7 rounded-full border border-border-color flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-accent">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our AI solutions are purpose-built to navigate specifications across the entire vertical.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <a
                key={ind.name}
                href="/industries"
                className="bg-bg-primary border border-border-color hover:border-accent hover:shadow-lg rounded-2xl overflow-hidden group flex flex-col transition-all cursor-pointer block"
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-text-primary group-hover:text-accent transition-colors">
                    {ind.name}
                  </span>
                  <ArrowRight className="h-4 w-4 text-text-secondary group-hover:text-accent transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 7: CASE STUDIES CAROUSEL */}
      <section id="case-studies" className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              Proven Results
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Read how leading firms deployed Aptiv8 AI models to save costs and reduce review timelines.
            </p>
          </div>

          <div className="bg-bg-secondary dark:bg-bg-primary border border-border-color/80 p-6 sm:p-8 md:p-10 rounded-[28px] shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] relative overflow-hidden group hover:shadow-[0_16px_48px_0_rgba(227,6,19,0.06)] hover:border-accent/40 transition-all duration-500"
                  >
            <AnimatePresence mode="wait">
              {caseStudies.map((cs, idx) => {
                if (idx !== currentCase) return null;
                return (
                  <motion.div
                    key={cs.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                  >
                    {/* Problem / Solution details - Standard Card */}
                    <div className="border border-border-color bg-bg-primary/40 dark:bg-bg-secondary/30 rounded-2xl p-6 flex flex-col justify-center gap-2 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white dark:hover:bg-bg-secondary hover:shadow-[0_15px_30px_rgba(239,68,68,0.5)] hover:border-red-500/30 cursor-pointer">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold font-display mb-1 block">
                          Case Study 0{idx + 1}
                        </span>
                        <h3 className="text-2xl font-bold font-display text-text-primary mb-4">
                          Optimizing Built Operations
                        </h3>
                      </div>

                      <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]"> 
                        <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">The Challenge</h4>
                        <p className="text-sm text-text-secondary">{cs.problem}</p>
                      </div>

                      <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">Aptiv8 AI Solution</h4>
                        <p className="text-sm text-text-secondary">{cs.solution}</p>
                      </div>

                      <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">Implementation</h4>
                        <p className="text-sm text-text-secondary">{cs.implementation}</p>
                      </div>
                    </div>

                    {/* Results / Business Impact - Standard Card */}
                    <div className="border border-border-color bg-bg-primary/40 dark:bg-bg-secondary/30 rounded-2xl p-6 flex flex-col justify-center gap-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white dark:hover:bg-bg-secondary hover:shadow-[0_15px_30px_rgba(239,68,68,0.5)] hover:border-red-500/30 cursor-pointer">
                      <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                        <span className="text-xs uppercase tracking-wider text-accent font-bold font-display">Results & Verification</span>
                        <p className="text-xl font-bold font-display text-text-primary mt-2">{cs.results}</p>
                      </div>
                      <div className="group relative p-5 rounded-2xl bg-bg-secondary/60 border border-border-color/70 overflow-hidden transition-all duration-500 hover:border-accent/40 hover:bg-bg-secondary hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(239,68,68,0.10)]">
                        <span className="text-xs uppercase tracking-wider text-accent font-bold font-display">Total Business Impact</span>
                        <p className="text-xl font-bold font-display text-text-primary mt-2">{cs.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-3 mt-3">
              <button
                onClick={() => setCurrentCase(prev => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
                className="p-3 rounded-full border border-blue-800/40 bg-white/5 hover:bg-white/15 text-black transition-colors cursor-pointer"
                aria-label="Previous Case Study"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentCase(prev => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
                className="p-3 rounded-full border border-blue-800/40 bg-white/5 hover:bg-white/15 text-black transition-colors cursor-pointer"
                aria-label="Next Case Study"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 8: BEXASIA 2026 EVENT */}
      <section id="bexasia" className="py-24 px-4 bg-bg-secondary border-b border-border-color relative overflow-hidden">
        <Reveal3D>
          {/* Architectural backdrop line */}
          <div className="absolute top-0 right-0 w-96 h-96 border border-accent/10 rounded-full -mr-20 -mt-20 pointer-events-none" />
          
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-accent to-accent-hover rounded-[32px] p-8 md:p-12 text-white relative shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-3 relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold uppercase tracking-wider mb-2 w-max">
              Featured Event
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight">
              Meet Aptiv8 at BexAsia 2026
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Join our BIM & AI engineers in Singapore from **September 2–4, 2026** for live demonstrations, architecture code validation previews, and strategic partnership planning.
            </p>
          </div>
          <div className="shrink-0 relative z-10 w-full md:w-auto flex flex-col gap-3 items-center">
            <span className="text-white font-display text-sm tracking-widest uppercase bg-white/20 px-4 py-2 rounded-xl">
              Sands Expo, Singapore
            </span>
            <a
              href="/contact"
              className="w-full md:w-auto px-8 py-4 bg-white text-accent hover:bg-white/90 rounded-full font-bold transition-all text-center"
            >
              Book a Meeting
            </a>
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 9: PARTNERS SLIDER */}
      <section className="py-12 bg-bg-primary border-b border-border-color overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-xs uppercase tracking-widest font-semibold text-text-secondary text-center">
            Trusted by modern leaders in construction & engineering
          </p>
        </div>
        
        {/* Infinite sliding marquee */}
        <div className="relative w-full flex items-center overflow-hidden">
          <div className="animate-marquee flex gap-12 py-4">
            {/* Set 1 */}
            {['Autodesk partner', 'Bentley dev', 'BCA SG registered', 'Notion for Enterprise', 'OpenAI partner', 'Sands Expo 2026', 'GovTech SG'].map((partner, idx) => (
              <div key={idx} className="flex items-center gap-2 font-display text-base font-bold text-text-secondary/50 shrink-0 transition-all duration-300 hover:text-accent hover:scale-[1.08] cursor-pointer">
                <Building className="h-5 w-5" />
                <span>{partner}</span>
              </div>
            ))}
            {/* Set 2 */}
            {['Autodesk partner', 'Bentley dev', 'BCA SG registered', 'Notion for Enterprise', 'OpenAI partner', 'Sands Expo 2026', 'GovTech SG'].map((partner, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 font-display text-base font-bold text-text-secondary/50 shrink-0 transition-all duration-300 hover:text-accent hover:scale-[1.08] cursor-pointer">
                <Building className="h-5 w-5" />
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: AI KNOWLEDGE ASSISTANT (Chatbot) */}
      <section id="chatbot-section" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              AI Knowledge Assistant
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Ask our virtual advisor detailed questions about compliance automation, energy designs, and facilities.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-color rounded-[24px] shadow-xl overflow-hidden flex flex-col h-[500px] hover:shadow-[0_20px_45px_rgba(227,6,19,0.35),0_8px_20px_rgba(227,6,19,0.12)]
dark:hover:shadow-[0_20px_45px_rgba(255,59,71,0.30),0_8px_20px_rgba(255,59,71,0.10)]
hover:border-accent/60
transition-all duration-500">
             {/* Header */}
             <div className="bg-bg-primary border-b border-border-color p-4.5 flex items-center justify-between relative overflow-hidden">
               {/* Tech scanline background effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.02] to-transparent pointer-events-none" />
               
               <div className="flex items-center gap-3.5 relative z-10">
                 <div className="relative p-2.5 rounded-xl bg-gradient-to-tr from-accent to-[#ff6a75] text-white shadow-[0_0_20px_rgba(227,6,19,0.3)] dark:shadow-[0_0_20px_rgba(255,59,71,0.35)] flex items-center justify-center">
                   <MessageSquare className="h-5 w-5 animate-pulse" />
                   <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-bg-primary rounded-full" />
                 </div>
                 <div>
                   <h3 className="font-display font-extrabold text-sm tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-accent via-[#ff6a75] to-amber-500 uppercase">
                     Aptiv8 AI Engine
                   </h3>
                   <div className="flex items-center gap-1.5 mt-0.5">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     <span className="text-[9px] text-emerald-500 dark:text-emerald-400 font-extrabold uppercase tracking-widest">
                       Cognitive Core Active
                     </span>
                   </div>
                 </div>
               </div>
             </div>

            {/* Chat list */}
            <div className="flex-grow p-6 overflow-y-auto flex flex-col gap-4">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 max-w-[80%] ${
                    msg.sender === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      msg.sender === 'user' ? 'bg-accent text-white' : 'bg-bg-primary text-text-secondary'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                  </div>
                  <div
                    className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white rounded-tr-none'
                        : 'bg-bg-primary text-text-primary border border-border-color rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Sample questions suggestions */}
            <div className="p-4 bg-bg-primary/50 border-t border-border-color flex flex-wrap gap-2">
              {[
                'How can I improve Green Mark compliance?',
                'How can AI improve facility management?',
                'How can I automate bid preparation?',
              ].map(q => (
                <button
                  key={q}
                  onClick={() => handleChatSend(q)}
                  className="text-xs bg-bg-secondary hover:border-accent border border-border-color text-text-secondary hover:text-accent px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Chat Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleChatSend();
              }}
              className="p-4 bg-bg-primary border-t border-border-color flex gap-3"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about compliance code, BIM, Strata management..."
                className="flex-grow bg-bg-secondary text-text-primary border border-border-color rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
