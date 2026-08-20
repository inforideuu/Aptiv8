import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, Layers, LayoutGrid, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import { featuredSolutions, svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function SolutionsPage() {
  const [selectedStage, setSelectedStage] = useState('planning-design');

  const lifecycleStages = [
    {
      id: 'planning-design',
      title: 'Planning & Design',
      description: 'Optimize building geometry, validate codes, and simulate compliance before breaking ground.',
      image: svgs.planning,
      solutions: ['sdsa', 'compliance', 'fire-safety', 'bim-data'] // Open BIM AI mapped to bim-data
    },
    {
      id: 'pre-construction',
      title: 'Pre-Construction',
      description: 'Streamline bid parsing, estimate costs, and format specifications automatically.',
      image: svgs.preCon,
      solutions: ['bid-prep', 'spec-manager']
    },
    {
      id: 'construction',
      title: 'Construction Coordination',
      description: 'Cleanse Revit datasets, monitor concrete properties, and manage materials on site.',
      image: svgs.construction,
      solutions: ['bim-data', 'cortex']
    },
    {
      id: 'operations-maintenance',
      title: 'Operations & Maintenance',
      description: 'Orchestrate preventive tickets and track facility sensors in active digital twins.',
      image: svgs.operations,
      solutions: ['cmms', 'cortex']
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Strata',
      description: 'Extract lease financials, verify tenancy clauses, and manage strata bylaws.',
      image: svgs.realEstate,
      solutions: ['strata', 'lease']
    }
  ];

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section className="relative py-28 px-4 hero-mesh-bg border-b border-border-color overflow-hidden">
        {/* Floating background decorative blobs */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [15, -15, 15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-10 w-44 h-44 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
        />
        
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />
        
        {/* Futuristic Blueprint Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Pinging blueprint node lights */}
        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/60 animate-ping pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-indigo-400/60 animate-ping pointer-events-none [animation-delay:1.5s]" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-accent/40 animate-ping pointer-events-none [animation-delay:0.8s]" />

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6 font-display">
            Interactive Navigator
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            AI Solutions Journey
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Navigate the Built Environment lifecycle to explore how our specialized AI models optimize every stage of development.
          </p>
        </motion.div>
      </section>

      {/* LIFECYCLE HORIZONTAL JOURNEY NAVIGATOR */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          
          {/* Stage Progress Tracker */}
          <div className="relative flex items-center justify-between gap-4 mb-16 overflow-x-auto pb-6 scrollbar-thin">
            {lifecycleStages.map((stage, index) => {
              const isActive = selectedStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage.id)}
                  className={`flex items-center gap-4 text-left p-4 rounded-2xl border transition-all cursor-pointer min-w-[280px] shrink-0 ${
                    isActive 
                      ? 'bg-bg-secondary border-accent shadow-md' 
                      : 'bg-bg-secondary/40 border-border-color hover:border-accent/40'
                  }`}
                >
                  <span className={`p-3 rounded-xl font-bold text-sm shrink-0 ${
                    isActive ? 'bg-accent text-white' : 'bg-bg-tertiary text-text-secondary'
                  }`}>
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className={`font-display font-bold text-sm ${isActive ? 'text-text-primary' : 'text-text-secondary/70'}`}>
                      {stage.title}
                    </h3>
                    <span className="text-[10px] text-text-secondary tracking-tight block line-clamp-1">
                      {stage.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail & Solutions Scroll */}
          <AnimatePresence mode="wait">
            {lifecycleStages.filter(s => s.id === selectedStage).map(stage => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
              >
                
                {/* 1. Stage Info Card */}
                <div className="lg:col-span-1 bg-bg-secondary border border-border-color rounded-3xl overflow-hidden shadow-sm sticky top-28">
                  <div className="h-48 overflow-hidden relative">
                    <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-widest text-accent font-bold font-display mb-1 block">
                      Active Lifecycle Stage
                    </span>
                    <h2 className="text-2xl font-bold font-display text-text-primary mb-3">
                      {stage.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed mb-6">
                      {stage.description}
                    </p>
                    <div className="pt-4 border-t border-border-color flex items-center justify-between text-xs text-text-secondary">
                      <span>Mapped Products</span>
                      <span className="font-bold text-text-primary">{stage.solutions.length} Solutions</span>
                    </div>
                  </div>
                </div>

                {/* 2 & 3. Mapped Solutions - AWS-Inspired Cards */}
                <div className="lg:col-span-2">
                  <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-6 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-accent" /> Available AI Modules for {stage.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featuredSolutions
                      .filter(sol => stage.solutions.includes(sol.id))
                      .map(sol => (
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

              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        </Reveal3D>
      </section>

      {/* HORIZONTAL TIMELINE ROADMAP OF DATA INGESTION */}
      <section className="py-24 px-4 bg-bg-secondary overflow-hidden border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Integrated Data Pipeline
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              How model outputs carry forward across the entire lifecycle journey.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row gap-8 items-stretch justify-between">
            {[
              { title: 'Revit BIM Upload', desc: 'Auto-checks specifications and local building code standard compliance.' },
              { title: 'Contract Est. Match', desc: 'Analyzes quantity takeoffs and flags subcontractor bidding anomalies.' },
              { title: 'Sensor Twin Link', desc: 'Links site temperature/acoustic data directly to operational twin.' },
              { title: 'Predictive CMMS', desc: 'Drives facility uptime and scans legal lease reviewing logs.' }
            ].map((step, idx) => (
              <motion.div 
                key={idx} 
                style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                whileHover={{
                  rotateY: 8,
                  rotateX: -4,
                  y: -5,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.06)'
                }}
                className="flex-1 bg-bg-primary border border-border-color rounded-2xl p-6 relative flex flex-col justify-between group hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div>
                  <span className="text-3xl font-extrabold text-accent/20 group-hover:text-accent/40 font-display block mb-4">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-sm text-text-primary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-[-24px] transform -translate-y-1/2 z-10 text-accent">
                    <ChevronRight className="h-6 w-6 animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* FINAL PAGE ACTION CTA */}
      <section className="py-20 px-4 bg-bg-primary text-center">
        <Reveal3D>
          <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-display text-text-primary mb-4">
            Need a custom integration check?
          </h2>
          <p className="text-text-secondary text-sm mb-8 leading-relaxed">
            We train neural models on specialized local datasets, allowing builders to run private instances complying with Singapore regulations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white hover:bg-accent-hover rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-accent-glow"
          >
            Request API Documentations <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
        </Reveal3D>
      </section>

    </div>
  );
}
