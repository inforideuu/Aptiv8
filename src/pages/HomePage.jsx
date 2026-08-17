import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Sparkles, Building, ChevronLeft, ChevronRight, 
  MessageSquare, User, HelpCircle, Layers, CheckCircle2 
} from 'lucide-react';

import ThreeWireframe from '../components/ThreeWireframe';
import Card from '../components/Card';
import { 
  featuredSolutions, 
  bentoProducts, 
  lifecycleStages, 
  industries, 
  caseStudies, 
  chatbotAnswers 
} from '../data/websiteData';

export default function HomePage({ theme }) {
  // Section 2: AI Solution Finder State
  const [role, setRole] = useState('');
  const [problem, setProblem] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Section 3: Horizontal Timeline State
  const [activeStage, setActiveStage] = useState(lifecycleStages[0].id);

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
          className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none"
        >
          <source src="/hero_video.mp4" type="video/mp4" />
        </video>
        <ThreeWireframe theme={theme} />
        
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
            className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-text-primary mb-6 leading-[1.1]"
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
            className="text-lg md:text-xl text-text-primary max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transforming architecture, engineering, construction, facilities management, infrastructure, and real estate through custom-trained artificial intelligence models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#solutions"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white hover:bg-accent-hover rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-accent-glow"
            >
              Explore Solutions <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-bg-secondary text-text-primary border border-border-color hover:border-accent rounded-full font-semibold transition-all text-center"
            >
              Book a Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: AI SOLUTION FINDER */}
      <section id="solution-finder" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              AI Solution Finder
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Select your role and key operational challenges below. Our matcher will select the relevant Aptiv8 solutions.
            </p>
          </div>

          <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
      </section>

      {/* SECTION 3: BUILT ENVIRONMENT LIFECYCLE (Timeline) */}
      <section id="lifecycle" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
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
              {lifecycleStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`flex flex-col items-start gap-2 min-w-[160px] pb-4 relative transition-all cursor-pointer`}
                >
                  <span className={`text-xs font-semibold uppercase tracking-wider ${activeStage === stage.id ? 'text-accent' : 'text-text-secondary'}`}>
                    Phase 0{idx + 1}
                  </span>
                  <span className={`font-display font-bold text-sm ${activeStage === stage.id ? 'text-text-primary' : 'text-text-secondary/70'}`}>
                    {stage.name}
                  </span>
                  {activeStage === stage.id && (
                    <motion.div
                      layoutId="activeTimelineBorder"
                      className="absolute bottom-[-17px] left-0 right-0 h-1 bg-accent"
                    />
                  )}
                </button>
              ))}
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
                  {/* Left content description */}
                  <div>
                    <h3 className="text-3xl font-display font-bold text-text-primary mb-4">
                      {stage.name} Solutions
                    </h3>
                    <p className="text-text-secondary mb-8 leading-relaxed">
                      {stage.description}
                    </p>
                    
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-accent" /> Installed Products & Engine Integrations
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {stage.products.map((prod, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                          <CheckCircle2 className="h-4.5 w-4.5 text-accent shrink-0" />
                          {prod}
                        </li>
                      ))}
                    </ul>
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
      </section>

      {/* SECTION 4: FEATURED AI SOLUTIONS */}
      <section id="solutions" className="py-24 px-4 bg-bg-primary border-b border-border-color">
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
            {featuredSolutions.map(sol => (
              <Card
                key={sol.id}
                image={sol.image}
                category={sol.category}
                title={sol.title}
                description={sol.description}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCTS BENTO GRID */}
      <section id="products-bento" className="py-24 px-4 bg-bg-tertiary/50 border-b border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              AI Products Ecosystem
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our core modular software offerings rendered in an asymmetrical grid highlighting efficiency metrics.
            </p>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 grid-flow-row-dense">
            {bentoProducts.map((prod, idx) => {
              // Map sizes to grid columns
              let gridClass = 'md:col-span-3 h-[400px]';
              if (prod.size === 'lg') gridClass = 'md:col-span-4 h-[400px]';
              else if (prod.size === 'sm') gridClass = 'md:col-span-2 h-[400px]';
              else if (prod.size === 'md') gridClass = 'md:col-span-3 h-[400px]';

              return (
                <div
                  key={prod.id}
                  className={`${gridClass} bg-bg-secondary border border-border-color rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-accent transition-all duration-300 relative shadow-sm`}
                >
                  <div className="h-1/2 overflow-hidden relative">
                    <img src={prod.image} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                        {prod.title}
                      </h3>
                      <p className="text-xs text-text-secondary line-clamp-2">
                        {prod.description}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <a href="#solutions" className="text-xs font-semibold text-accent hover:underline">
                        Explore Product
                      </a>
                      <ArrowRight className="h-4 w-4 text-text-secondary group-hover:text-accent transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: INDUSTRIES WE SERVE */}
      <section id="industries" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
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
              <div
                key={ind.name}
                className="bg-bg-primary border border-border-color hover:border-accent hover:shadow-lg rounded-2xl overflow-hidden group flex flex-col transition-all cursor-pointer"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CASE STUDIES CAROUSEL */}
      <section id="case-studies" className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
              Proven Results
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Read how leading firms deployed Aptiv8 AI models to save costs and reduce review timelines.
            </p>
          </div>

          <div className="relative bg-bg-secondary border border-border-color rounded-[32px] p-8 md:p-12 shadow-2xl">
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
                    {/* Problem / Solution details */}
                    <div className="border border-border-color bg-bg-tertiary/40 rounded-2xl p-6 flex flex-col justify-center gap-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-accent font-bold font-display mb-1 block">
                          Case Study 0{idx + 1}
                        </span>
                        <h3 className="text-2xl font-bold font-display text-text-primary mb-4">
                          Optimizing Built Operations
                        </h3>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">The Challenge</h4>
                        <p className="text-sm text-text-secondary">{cs.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">Aptiv8 AI Solution</h4>
                        <p className="text-sm text-text-secondary">{cs.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-1">Implementation</h4>
                        <p className="text-sm text-text-secondary">{cs.implementation}</p>
                      </div>
                    </div>

                    {/* Results / Business Impact */}
                    <div className="border border-border-color bg-bg-tertiary/40 rounded-2xl p-6 flex flex-col justify-center gap-6">
                      <div className="border-b border-border-color/60 pb-6">
                        <span className="text-xs uppercase tracking-wider text-accent font-semibold">Results & Verification</span>
                        <p className="text-xl font-bold font-display text-text-primary mt-2">{cs.results}</p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-accent font-semibold">Total Business Impact</span>
                        <p className="text-xl font-bold font-display text-text-primary mt-2">{cs.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setCurrentCase(prev => (prev === 0 ? caseStudies.length - 1 : prev - 1))}
                className="p-3 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-primary transition-colors cursor-pointer"
                aria-label="Previous Case Study"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentCase(prev => (prev === caseStudies.length - 1 ? 0 : prev + 1))}
                className="p-3 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-primary transition-colors cursor-pointer"
                aria-label="Next Case Study"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: BEXASIA 2026 EVENT */}
      <section id="bexasia" className="py-24 px-4 bg-bg-secondary border-b border-border-color relative overflow-hidden">
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
              href="#contact"
              className="w-full md:w-auto px-8 py-4 bg-white text-accent hover:bg-white/90 rounded-full font-bold transition-all text-center"
            >
              Book a Meeting
            </a>
          </div>
        </div>
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
              <div key={idx} className="flex items-center gap-2 font-display text-base font-bold text-text-secondary/50 shrink-0">
                <Building className="h-5 w-5" />
                <span>{partner}</span>
              </div>
            ))}
            {/* Set 2 */}
            {['Autodesk partner', 'Bentley dev', 'BCA SG registered', 'Notion for Enterprise', 'OpenAI partner', 'Sands Expo 2026', 'GovTech SG'].map((partner, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-2 font-display text-base font-bold text-text-secondary/50 shrink-0">
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

          <div className="bg-bg-secondary border border-border-color rounded-[24px] shadow-xl overflow-hidden flex flex-col h-[500px]">
            {/* Header */}
            <div className="bg-bg-primary border-b border-border-color p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-accent text-white">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-text-primary">Aptiv8 AI Engine</h3>
                  <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">Online</span>
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
