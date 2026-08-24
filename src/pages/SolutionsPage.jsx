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
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark blue/black overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          {/* Subtitle in Gold/Amber uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            INTELLIGENT DECISIONS. SMARTER BUILT ENVIRONMENT.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            AI Solutions
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Navigate the Built Environment lifecycle to explore how our specialized AI models optimize every stage of development, planning, and operations.
          </motion.p>
        </div>
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
                          href="/contact"
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
  style={{
    transformStyle: 'preserve-3d',
    perspective: 1600,
    willChange: 'transform',
  }}
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  whileHover={{
    y: -10,
    scale: 1.025,
    boxShadow:
      '0 30px 60px rgba(15, 23, 42, 0.12), 0 10px 25px rgba(239, 68, 68, 0.08)',
  }}
  transition={{
    duration: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    flex-1
    bg-white dark:bg-bg-primary
    border border-border-color
    rounded-2xl
    p-6
    relative
    flex flex-col
    justify-between
    group
    cursor-pointer
    overflow-hidden
    transition-colors
    duration-500
    hover:border-accent/60
  "
>
  {/* 3D accent edge */}
  <div
    className="
      absolute inset-0
      rounded-2xl
      pointer-events-none
      border-t-2
      border-l-2
      border-accent/0
      group-hover:border-accent/70
      transition-all
      duration-500
    "
  />

  {/* Cursor/hover spotlight */}
  <div
    className="
      absolute
      -inset-24
      pointer-events-none
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-700
      bg-[radial-gradient(circle,rgba(239,68,68,0.08),transparent_65%)]
    "
  />

  {/* Card content */}
  <motion.div
    style={{
      transformStyle: 'preserve-3d',
    }}
    className="relative z-10"
  >
    {/* Number */}
    <motion.span
      className="
        text-3xl
        font-extrabold
        text-accent/20
        group-hover:text-accent/50
        font-display
        block
        mb-4
        transition-colors
        duration-500
      "
      whileHover={{
        translateZ: 25,
        y: -3,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      0{idx + 1}
    </motion.span>

    {/* Title */}
    <motion.h4
      className="
        font-display
        font-bold
        text-sm
        text-text-primary
        mb-2
      "
      whileHover={{
        translateZ: 18,
      }}
    >
      {step.title}
    </motion.h4>

    {/* Description */}
    <p className="text-xs text-text-secondary leading-relaxed">
      {step.desc}
    </p>
  </motion.div>

  {/* Bottom accent line */}
  <div
    className="
      absolute
      bottom-0
      left-6
      right-6
      h-[2px]
      bg-accent
      scale-x-0
      origin-left
      group-hover:scale-x-100
      transition-transform
      duration-500
    "
  />

  {/* Arrow */}
  {idx < 3 && (
    <motion.div
      className="
        hidden
        md:block
        absolute
        top-1/2
        right-[-24px]
        z-20
        text-accent
      "
      animate={{
        x: [0, 4, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <ChevronRight className="h-6 w-6" />
    </motion.div>
  )}
</motion.div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* FINAL PAGE ACTION CTA */}
      <section className="py-20 px-4 bg-bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
        <Reveal3D>
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className="group bg-[#0b1528] border border-[#c5a880]/50 rounded-[32px] p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden hover:bg-white/80 dark:hover:bg-slate-900/60 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] hover:border-red-500/50 transition-all duration-500 cursor-default"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#D4AF37] group-hover:text-text-primary mb-6 transition-colors duration-500">
              Need a custom integration check?
            </h2>
            <p className="text-blue-100/70 group-hover:text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm transition-colors duration-500">
              We train neural models on specialized local datasets, allowing builders to run private instances complying with Singapore regulations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0b1528] group-hover:bg-accent group-hover:text-white rounded-full font-semibold transition-all duration-500 shadow-lg group-hover:shadow-accent-glow"
            >
              Request API Documentations <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Reveal3D>
      </section>

    </div>
  );
}
