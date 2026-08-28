import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Layers, LayoutGrid, CheckCircle,
  Calendar, TrendingUp, ClipboardList, AlertTriangle, Users,
  Boxes, MessageSquare, Maximize2, Clock, Archive, Cpu,
  Briefcase, DollarSign, ShieldCheck, FileText, BarChart3,
  Award, Truck, Leaf, Activity, Upload, GitBranch, CheckSquare,
  QrCode, Wrench, AlertOctagon, FileSpreadsheet, History, WifiOff,
  MailCheck, Link2, Database, Key, MessageCircle, PieChart, Gauge, Radio, MapPin, Tv, Play, Eye
} from 'lucide-react';
import Card from '../components/Card';
import { featuredSolutions, svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function SolutionsPage() {
  const [selectedStage, setSelectedStage] = useState('planning-design');
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, []);

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
            Aptiv8 CMMS & ACMV
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Empower smarter facility operations with AI-driven CMMS, integrating maintenance intelligence, IoT connectivity, and Digital Twin technologies.
          </motion.p>
        </div>
      </section>

      {/* LIFECYCLE HORIZONTAL JOURNEY NAVIGATOR */}
      {/* <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto"> */}
          
          {/* Stage Progress Tracker */}
          {/* <div className="relative flex items-center justify-between gap-4 mb-16 overflow-x-auto pb-6 scrollbar-thin">
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
          </div> */}

          {/* Active Stage Detail & Solutions Scroll */}
          {/* <AnimatePresence mode="wait">
            {lifecycleStages.filter(s => s.id === selectedStage).map(stage => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
              > */}
                
                {/* 1. Stage Info Card */}
                {/* <div className="lg:col-span-1 bg-bg-secondary border border-border-color rounded-3xl overflow-hidden shadow-sm sticky top-28">
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
                </div> */}

                {/* 2 & 3. Mapped Solutions - AWS-Inspired Cards */}
                {/* <div className="lg:col-span-2">
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
      </section> */}

      

      {/* HORIZONTAL TIMELINE ROADMAP OF DATA INGESTION */}
      {/* <section className="py-24 px-4 bg-bg-secondary overflow-hidden border-b border-border-color">
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
> */}
  {/* 3D accent edge */}
  {/* <div
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
  /> */}

  {/* Cursor/hover spotlight */}
  {/* <div
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
  /> */}

  {/* Card content */}
  {/* <motion.div
    style={{
      transformStyle: 'preserve-3d',
    }}
    className="relative z-10"
  > */}
    {/* Number */}
    {/* <motion.span
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
    </motion.span> */}

    {/* Title */}
    {/* <motion.h4
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
    </motion.h4> */}

    {/* Description */}
    {/* <p className="text-xs text-text-secondary leading-relaxed">
      {step.desc}
    </p>
  </motion.div> */}

  {/* Bottom accent line */}
  {/* <div
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
  /> */}

  {/* Arrow */}
  {/* {idx < 3 && (
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
      </section> */}

      {/* APTIV8 CMMS MODULES SECTION */}
      <section id="cmms-modules" className="py-24 px-4 bg-bg-primary border-b border-border-color scroll-mt-24">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Enterprise Operations
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Aptiv8 CMMS Modules
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                A comprehensive suite of modules designed to automate facility operations, predictive maintenance, and asset lifecycle management.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: 'Scheduled Maintenance (PM and CM)', icon: Calendar, description: 'Automate preventive and corrective maintenance task scheduling and dispatch.' },
                { title: 'Predictive Maintenance (condition based)', icon: TrendingUp, description: 'Utilize continuous IoT sensor telemetry to predict asset faults ahead of schedule.' },
                { title: 'Work Request Management', icon: ClipboardList, description: 'Streamline request creation, priority assignment, and technician queue management.' },
                { title: 'Fault Reporting Management', icon: AlertTriangle, description: 'Report, track, and classify structural and operational anomalies in real-time.' },
                { title: 'Tenant Management', icon: Users, description: 'Coordinate lease agreements, tenancy feedback, and communication logs dynamically.' },
                { title: 'Asset Management', icon: Boxes, description: 'Keep a complete database of equipment specifications, runtime histories, and depreciations.' },
                { title: 'Public/Customer Feedback Management', icon: MessageSquare, description: 'Structure multi-channel feedback workflows to resolve client queries automatically.' },
                { title: 'Space management', icon: Maximize2, description: 'Map unit allocations, department occupancy bounds, and layout usage efficiency.' },
                ].map((module, idx) => {
                const Icon = module.icon;
                return (
                  <motion.div key={idx} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: idx * 0.1
                      },
                      opacity: { duration: 0.6, delay: idx * 0.08 }
                    }}
                    whileHover={{y: -12,scale: 1.025,transition: {duration: 0.35,ease: [0.22, 1, 0.36, 1]}}}
                    className="relative p-6 bg-bg-secondary border border-border-color rounded-2xl flex flex-col gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-accent/50 hover:shadow-[0_20px_50px_rgba(239,68,68,0.16)] transition-all duration-500 group cursor-default overflow-hidden">
                {/* Premium animated light sweep */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="absolute -inset-y-full -left-1/2 w-[35%] rotate-[20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[450%] transition-all duration-1000 ease-out" />
                  </div>

                {/* Top accent line */}
                   <motion.div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>

                {/* Icon */}
                  <motion.div whileHover={{scale: 1.12,rotate: -4,y: -2}}
                     transition={{type: "spring",stiffness: 300,damping: 15}}
                    className="relative p-3 rounded-xl bg-accent-glow text-accent w-max group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_8px_25px_rgba(239,68,68,0.28)] transition-all duration-500">
                    <Icon className="h-6 w-6" />

                 {/* Icon glow */}
                    <span className="absolute inset-0 rounded-xl bg-accent opacity-0 blur-md group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>

  {/* Content */}
  <div className="relative z-10">
    <h3 className="font-display font-bold text-sm text-text-primary mb-1 group-hover:text-accent transition-colors duration-300">
      {module.title}
    </h3>

    <p className="text-xs text-text-secondary leading-relaxed group-hover:text-text-primary/80 transition-colors duration-500">
      {module.description}
    </p>
  </div>

  {/* Bottom decorative accent */}
  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700 ease-out" />
</motion.div>
                );
              })}
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* DYNAMIC WORKFLOW CONFIGURATION DIAGRAM SECTION */}
      <section id="cmms-workflow" className="py-24 px-4 bg-bg-primary border-b border-border-color scroll-mt-24">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Operational Lifecycle
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Dynamic Workflow Configuration
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                Visualizing the step-by-step breakdown and verification pipelines within the A8 CMMS operational matrix.
              </p>
            </div>

            {/* Interactive 3D Stepper Layout */}
            <div className="bg-[#0b1528] border border-[#c5a880]/30 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(212,175,55,0.1)] transition-all duration-500">
              {/* Background ambient light */}
              <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Left side: Interactive flowchart map */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  <h3 className="text-lg font-bold font-display text-[#D4AF37] mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Activity className="h-5 w-5 animate-pulse" /> Live Workflow Map
                  </h3>
                  
                  {/* Grid showing steps mapping the image layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
                    {[
                      { id: '1', title: 'Received by Helpdesk', desc: 'Helpdesk will review request & validate', action: 'Validate' },
                      { id: '2', title: 'Breakdown Form', desc: 'Case submitted to tech for restoration', action: 'Fault Restored' },
                      { id: '2a', title: 'Pending with Reason', desc: 'Tech submits pending if parts are needed', action: 'Awaiting Supply' },
                      { id: '3', title: 'Rectification Form', desc: 'Case assigned to tech for rectification', action: 'Fault Rectified' },
                      { id: '4', title: 'Pending TO/Engineer', desc: 'Case pending TO/Engineer approval', action: 'Review' },
                      { id: '5', title: 'Pending Manager', desc: 'Case pending Manager approval', action: 'Approve Cost' },
                      { id: '6', title: 'Pending Client Approval', desc: 'Case pending final Client approval', action: 'Client Signoff' },
                      { id: '7', title: 'Closed', desc: 'Case closed by Client', action: 'Complete' }
                    ].map((step, idx) => (
                      <motion.div
                        key={step.id}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="bg-slate-900/60 border border-slate-800 hover:border-[#D4AF37]/50 rounded-xl p-4 transition-all flex flex-col justify-between h-36 cursor-default relative overflow-hidden group/item"
                      >
                        <div className="flex justify-between items-start">
                          <span className="text-[10px] font-mono text-[#D4AF37]/60 font-bold">0{idx + 1}</span>
                          <span className="text-[9px] uppercase tracking-wider font-bold bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-0.5 rounded-md">{step.action}</span>
                        </div>
                        <div className="mt-2">
                          <h4 className="font-display font-bold text-xs text-white mb-1 group-hover/item:text-[#D4AF37] transition-colors">{step.title}</h4>
                          <p className="text-[10px] text-slate-400 leading-normal line-clamp-2">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Horizontal flow line logic indicator on desktop */}
                  <div className="hidden md:flex items-center justify-between px-6 pt-4 text-[10px] text-[#D4AF37]/40 font-mono border-t border-slate-800">
                    <span>[Helpdesk Review]</span>
                    <span>→</span>
                    <span>[Restoration SLA]</span>
                    <span>→</span>
                    <span>[Rectification SLA]</span>
                    <span>→</span>
                    <span>[Compliance Checks]</span>
                    <span>→</span>
                    <span>[Closed & Archived]</span>
                  </div>
                </div>

                {/* Right side: 3D interactive preview showcase */}
                <div className="lg:col-span-4 flex flex-col justify-center h-full">
                  <motion.div
                    whileHover={{ rotateY: -12, rotateX: 6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="bg-[#0b1528] border-2 border-[#c5a880]/50 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-center flex flex-col justify-center items-center gap-6 min-h-[300px]"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  >
                    {/* Golden accent ambient light inside preview */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.08),transparent_50%)] pointer-events-none" />

                    <div className="p-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
                      <GitBranch className="h-10 w-10 animate-spin-slow" />
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-lg text-white mb-2">Automated SLA Routing</h3>
                      <p className="text-xs text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Our workflow automatically redirects tickets to the next approval layer in real-time, calculating response metrics and capturing timestamps at every stage.
                      </p>
                    </div>
                    <div className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-around text-[10px] font-mono text-[#D4AF37]">
                      <span>● Real-time Clocking</span>
                      <span>● Loop Prevention</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* APTIV8 CMMS PREMIUM KEY FEATURES SECTION */}
      <section id="cmms-features" className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Advanced Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display text-text-primary mb-4">
                Aptiv8 CMMS Key Features
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                Explore the premium operational modules and integrations powering advanced, real-time maintenance efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { title: 'Bulk import – assets, users, inventories etc.', icon: Upload, description: 'Effortlessly ingest assets, user profiles, and catalog inventories in bulk from spreadsheet formats.' },
                { title: 'Dynamic Workflow Configuration', icon: GitBranch, description: 'Create and route maintenance workflows based on custom business logic and priority.' },
                { title: 'Asset Downtime Tracking with Failure Analysis', icon: Activity, description: 'Analyze asset operational outages with root-cause failure coding and impact logs.' },
                { title: 'Customizable Checklist', icon: CheckSquare, description: 'Build detailed validation procedures and compliance check sheets for technicians.' },
                { title: 'Customizable QR code format', icon: QrCode, description: 'Generate and format asset QR codes directly linked to instant work order actions.' },
                { title: 'Parts Replaced List', icon: Wrench, description: 'Audit and track spare parts consumption histories per asset maintenance ticket.' },
                { title: 'Breakdown Maintenance', icon: AlertOctagon, description: 'Trigger and log rapid reactive maintenance runs to resolve unexpected shutdowns.' },
                { title: 'Report Builder', icon: FileSpreadsheet, description: 'Structure custom data fields and layout designs to generate tailored performance briefs.' },
                { title: 'Maintenance History', icon: History, description: 'Access full service and audit logs to track the complete lifecycle of each asset.' },
                { title: 'Mobile Offline Support', icon: WifiOff, description: 'Perform updates, view checklists, and log data without active network coverage.' },
                { title: 'Schedule Reports', icon: Calendar, description: 'Configure automated reports to generate and send to key stakeholders on custom schedules.' },
                { title: 'API Integration', icon: Link2, description: 'Connect seamlessly with third-party software and systems using standardized APIs.' },
                { title: 'Integration with ERP', icon: Database, description: 'Sync inventories, procurement, and asset costs directly with corporate ERP suites.' },
                { title: 'SSO Login', icon: Key, description: 'Secure access utilizing single sign-on integrations with active enterprise directories.' },
                { title: 'WhatsApp & Other Social Media Integration', icon: MessageCircle, description: 'Receive instant alerts, submit requests, and update order statuses via messaging apps.' },
                { title: 'AI Integration', icon: Cpu, description: 'Leverage predictive analytics and smart agent suggestions to automate dispatch actions.' },
                { title: 'Dynamic Reports', icon: PieChart, description: 'Build interactive reports with real-time filters and custom fields for instant insight.' },
                { title: 'Customizable Analytical Dashboard', icon: Gauge, description: 'Personalize widgets, metrics, and chart views to track department KPIs in real-time.' },
                { title: 'NFC and Beacon Support', icon: Radio, description: 'Deploy near-field communication or BLE beacons to verify physical technician presence.' },
                { title: 'User Location Tracking', icon: MapPin, description: 'Track work location footprints and route dispatches using geofenced tracking.' },
              ].slice(0, showAllFeatures ? 20 : 8).map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      y: {
                        repeat: Infinity,
                        duration: 4.5,
                        ease: "easeInOut",
                        delay: idx * 0.15
                      }
                    }}
                    whileHover={{ y: -12, rotateY: 12, rotateX: 6, scale: 1.03, z: 20 }}
                    className="p-6 bg-bg-secondary dark:bg-[#0b1528] border border-border-color dark:border-[#c5a880]/30 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-[0_15px_30px_rgba(239,68,68,0.12)] dark:hover:shadow-[0_15px_30px_rgba(212,175,55,0.15)] hover:border-accent dark:hover:border-[#D4AF37]/85 transition-all duration-300 group cursor-default relative overflow-hidden"
                    style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                  >
                    {/* Background accent glow */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-accent/3 dark:bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/8 dark:group-hover:bg-[#D4AF37]/15 transition-all duration-500" />
                    
                    <div className="p-3 rounded-xl bg-accent-glow dark:bg-[#D4AF37]/10 text-accent dark:text-[#D4AF37] w-max group-hover:bg-accent dark:group-hover:bg-[#D4AF37] group-hover:text-white dark:group-hover:text-[#0b1528] transition-all duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-text-primary dark:text-[#D4AF37] mb-1 group-hover:text-accent dark:group-hover:text-white transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-text-secondary dark:text-blue-100/60 leading-relaxed group-hover:text-text-primary dark:group-hover:text-blue-100/90 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-end mt-10">
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="group relative px-6 py-3 bg-bg-secondary dark:bg-[#0b1528] text-text-primary dark:text-[#D4AF37] border border-border-color dark:border-[#c5a880]/30 hover:border-accent dark:hover:border-[#D4AF37] hover:text-accent dark:hover:text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer text-sm shadow-sm hover:shadow-[0_8px_25px_rgba(239,68,68,0.1)] dark:hover:shadow-[0_8px_25px_rgba(212,175,55,0.1)]"
              >
                <span>{showAllFeatures ? 'Show Less' : 'More'}</span>
                <ChevronRight className={`h-4.5 w-4.5 transition-transform duration-300 ${showAllFeatures ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* NEW SECTION: APTIV8 ACMV OPERATIONAL INTELLIGENCE PLATFORM */}
      <section id="aptiv8-acmv" className="py-28 px-4 bg-white dark:bg-gradient-to-br dark:from-[#070b19] dark:via-[#0b1528] dark:to-[#040812] border-t border-border-color dark:border-[#c5a880]/30 overflow-hidden relative">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

        <Reveal3D>
          <div className="max-w-7xl mx-auto space-y-20 relative z-10">
            {/* Header Block */}
            <div className="text-center space-y-4">
              <span className="text-accent dark:text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-[0.3em] block">
                Enterprise Building Decarbonization
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                A8 ACMV Operational <span className="text-accent">Intelligence Platform</span>
              </h2>
              <p className="text-slate-600 dark:text-blue-100/60 max-w-2xl mx-auto text-sm leading-relaxed">
                AI-powered insights. Smarter operations. Better outcomes.
              </p>
            </div>

            {/* Quick Benefits Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Lower Energy Use', desc: 'Real-time load matching and optimization algorithms.' },
                { title: 'Improve Asset Performance', desc: 'Extend lifecycle limits through early signature diagnostics.' },
                { title: 'Boost Engineering Productivity', desc: 'Automate manual dispatch orders and alert triage.' },
                { title: 'Sustainability Outcomes', desc: 'Direct mapping to carbon reductions and ESG benchmarks.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md hover:border-accent dark:hover:border-[#D4AF37]/50 hover:shadow-[0_15px_30px_rgba(212,175,55,0.08)] transition-all duration-300">
                  <h4 className="text-accent dark:text-[#D4AF37] font-bold text-base mb-2 font-display">{item.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-blue-100/50 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* TECHNICAL SOLUTION OVERVIEW */}
            <div className="space-y-8">
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white text-center">
                Technical Solution Overview
              </h3>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {[
                  { step: '01', title: 'Data Sources', icon: Database, items: ['BMS / BAS', 'ACMV Equipment', 'Meters & Sensors', '3rd Party Systems'] },
                  { step: '02', title: 'Connect & Ingest', icon: Upload, items: ['Secure Gateway', 'Standard Protocols', 'Secure Data Transfer'] },
                  { step: '03', title: 'Secure Cloud Platform', icon: ShieldCheck, items: ['ISO 27001 Security', 'Role-Based Access', 'Data Encryption', 'Scalable Architecture'] },
                  { step: '04', title: 'AI & Analytics Engine', icon: Cpu, items: ['AI Modeling', 'Anomaly Detection', 'Performance Analytics', 'Root Cause Analysis'] },
                  { step: '05', title: 'Insights & Applications', icon: BarChart3, items: ['Performance Dashboards', 'Anomaly Alerts', 'Energy & Cost Analytics', 'What-if Analysis'] }
                ].map((phase, idx) => {
                  const IconComp = phase.icon;
                  return (
                    <React.Fragment key={idx}>
                      <div className="flex-1 w-full p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl space-y-4 hover:shadow-lg transition-all duration-300">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-mono font-bold text-accent">{phase.step}</span>
                          <IconComp className="h-5 w-5 text-accent" />
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-sm font-display">{phase.title}</h4>
                        <ul className="space-y-1 text-[11px] text-slate-600 dark:text-blue-100/50">
                          {phase.items.map((li, lidx) => (
                            <li key={lidx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-accent" />
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {idx < 4 && (
                        <ChevronRight className="hidden lg:block h-6 w-6 text-slate-300 dark:text-slate-700 shrink-0" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* TWO COLUMN CAPABILITIES & VALUE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Capabilities Column */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                  Key Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Real-time Monitoring & Visualisation', desc: 'Live visibility of ACMV performance and key metrics.', icon: Eye },
                    { title: 'AI-powered Anomaly Detection', desc: 'Early detection of faults and unusual behaviour.', icon: Cpu },
                    { title: 'Energy & Cost Analytics', desc: 'Identify wastage and optimisation opportunities.', icon: BarChart3 },
                    { title: 'Root Cause Diagnostics', desc: 'Drill down to the cause, not just the symptoms.', icon: AlertOctagon },
                    { title: 'Predictive Insights & Forecasting', desc: 'Anticipate issues and optimise operations.', icon: TrendingUp },
                    { title: 'Actionable Recommendations', desc: 'Clear actions with expected impact.', icon: CheckCircle },
                    { title: 'Custom Reporting & Compliance', desc: 'Automated reports for management & ESG.', icon: FileText },
                    { title: 'Secure, Scalable & Enterprise-grade', desc: 'ISO 27001, role-based access, encrypted data.', icon: ShieldCheck }
                  ].map((cap, idx) => {
                    const CapIcon = cap.icon;
                    return (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="p-2 rounded-lg bg-accent/5 text-accent mt-0.5 shrink-0">
                          <CapIcon className="h-4 w-4" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-blue-600 dark:text-blue-400 text-xs font-bold font-display">{cap.title}</h4>
                          <p className="text-[11px] text-slate-600 dark:text-blue-100/50 leading-relaxed">{cap.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Value & Outcomes Column */}
              <div className="lg:col-span-5 space-y-6">
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-3">
                  Value & Outcomes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: 'Engineering Productivity', val: '30-60 hrs/month', desc: 'saved per FTE typical', color: 'border-blue-200 bg-blue-50/20 text-blue-600' },
                    { title: 'Energy Savings', val: '5% - 10%', desc: 'of total electricity costs', color: 'border-green-200 bg-green-50/20 text-green-600' },
                    { title: 'Asset Life Extension', val: '$10k - $50k', desc: 'annually saved', color: 'border-purple-200 bg-purple-50/20 text-purple-600' },
                    { title: 'Total Value', val: '$100k - $250k', desc: 'annually contributed', color: 'border-amber-200 bg-amber-50/20 text-amber-600' },
                    { title: 'ROI', val: '~4x - 10x', desc: 'return on investment value', color: 'border-teal-200 bg-teal-50/20 text-teal-600' },
                    { title: 'Payback Period', val: '1 - 3 months', desc: 'average value recovery time', color: 'border-rose-200 bg-rose-50/20 text-rose-600' }
                  ].map((val, idx) => (
                    <div key={idx} className={`p-4 border rounded-xl hover:shadow-md transition-all ${val.color}`}>
                      <span className="text-[9px] uppercase tracking-wider font-bold block mb-1 opacity-85">{val.title}</span>
                      <strong className="text-xl font-extrabold block font-display mb-0.5">{val.val}</strong>
                      <span className="text-[10px] opacity-75 block">{val.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RAPID ASSESSMENT PANEL */}
            <div className="p-8 bg-slate-50 dark:bg-gradient-to-br dark:from-[#0c162f] dark:to-[#060a16] border border-slate-200 dark:border-[#c5a880]/30 rounded-[32px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 space-y-4">
                <span className="text-accent dark:text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-wider block">
                  Pilot Engagement
                </span>
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">Rapid Assessment</h3>
                <p className="text-xs text-slate-650 dark:text-blue-100/50 leading-relaxed">
                  A quick 2-3 week engagement to uncover savings potential and improvement opportunities.
                </p>
                <div className="pt-4 border-t border-slate-200 dark:border-white/5 text-[11px] text-slate-500 dark:text-blue-100/40">
                  Assessment Fee: <strong className="text-accent dark:text-white text-sm font-bold">SGD 695</strong> (one-off fee)
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: 'Data Collection', desc: 'We collect historical logs, track raw data with minimal site impact.', icon: Database },
                  { step: 'AI Analysis', desc: 'Our AI engine analyzes performance, energy use, efficiency, and operational patterns.', icon: Cpu },
                  { step: 'Key Findings', desc: 'We identify issues, opportunities, and priority areas for improvement.', icon: CheckCircle },
                  { step: 'Report & Recommendations', desc: 'You receive a concise report with quantified savings potential and next steps.', icon: FileText }
                ].map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={idx} className="p-4 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-xl space-y-2 flex gap-3 items-start">
                      <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 mt-1">
                        <ItemIcon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-xs font-display mb-0.5">{item.step}</h4>
                        <p className="text-[10px] text-slate-500 dark:text-blue-100/40 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </Reveal3D>
      </section>

      {/* NEW SECTION: A8 ACMV CO-PILOT */}
      <section id="a8-acmv-copilot" className="py-28 px-4 bg-white dark:bg-gradient-to-br dark:from-[#0b1528] dark:to-[#040812] border-t border-border-color dark:border-[#c5a880]/30 overflow-hidden relative">
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <Reveal3D>
          <div className="max-w-7xl mx-auto space-y-20 relative z-10">
            {/* Header Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono font-bold uppercase tracking-wider w-max block">
                  Interactive AI Assistant
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold font-display text-slate-900 dark:text-white leading-tight">
                  Your <span className="text-accent">AI Co-Pilot</span> for ACMV Excellence
                </h2>
                <p className="text-sm text-accent dark:text-[#D4AF37] font-bold font-mono tracking-wide uppercase">
                  Smarter Operations. Confident Decisions.
                </p>
                <p className="text-sm text-slate-650 dark:text-blue-100/60 leading-relaxed">
                  A8 Co-Pilot is your always-on ACMV AI assistant that turns complex building data into clear answers and actionable recommendations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: 'Ask. Get answers.', desc: 'Natural language answers in seconds.', icon: MessageSquare },
                    { title: 'See. Understand.', desc: 'Instant insights and trend summaries.', icon: Eye },
                    { title: 'Act. Improve.', desc: 'Personalized recommendations.', icon: CheckCircle },
                    { title: 'Stay in Control.', desc: 'Facts, risks and performance at fingertips.', icon: ShieldCheck }
                  ].map((act, idx) => {
                    const ActIcon = act.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className="flex gap-3 items-start p-3 rounded-xl hover:bg-slate-100/30 dark:hover:bg-white/[0.02] transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-accent/5 text-accent mt-0.5 shrink-0">
                          <ActIcon className="h-4 w-4" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-slate-900 dark:text-white font-bold text-xs font-display">{act.title}</h4>
                          <p className="text-[10px] text-slate-500 dark:text-blue-100/50 leading-relaxed">{act.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Chat Mockup */}
              <motion.div
                whileHover={{ rotateX: 6, rotateY: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                className="bg-slate-50 dark:bg-[#070b19]/80 border border-slate-200 dark:border-white/10 rounded-[32px] p-6 shadow-xl space-y-6 group/chat cursor-default hover:shadow-2xl hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">A8 Co-Pilot Chat</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-400">v1.2.0</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-end">
                    <motion.div
                      whileHover={{ translateZ: 15 }}
                      className="bg-accent text-white px-4 py-3 rounded-2xl rounded-tr-none text-xs max-w-[85%] font-medium shadow-md"
                    >
                      How is my ACMV system performing today?
                    </motion.div>
                  </div>

                  <div className="flex justify-start">
                    <motion.div
                      whileHover={{ translateZ: 20 }}
                      className="bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-slate-850 dark:text-blue-100/80 px-4 py-3 rounded-2xl rounded-tl-none text-xs max-w-[85%] space-y-2 shadow-sm"
                    >
                      <p className="font-medium text-slate-900 dark:text-white">Today, your ACMV system is performing well.</p>
                      <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-slate-200/50 dark:border-white/5">
                        <div>
                          <span className="text-[9px] text-slate-500 block">Energy Use</span>
                          <strong className="text-green-600 font-bold text-xs">↓ 12%</strong>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500 block">Comfort Index</span>
                          <strong className="text-slate-800 dark:text-white font-bold text-xs">72% Optimal</strong>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500 block">System Status</span>
                          <strong className="text-green-600 font-bold text-xs">Normal</strong>
                        </div>
                      </div>
                      <p className="text-[10px] text-accent font-bold mt-1">Top Recommendation: Optimize AHU-3 supply air temperature setpoint to improve efficiency.</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Benefits Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-b border-slate-200 dark:border-white/10 py-8">
              {[
                { title: 'Reports in Minutes', desc: 'Instant answers, not days.', icon: FileText },
                { title: 'No Site Visits', desc: '100% remote, secure & efficient.', icon: MapPin },
                { title: 'No Retrofitting', desc: 'Works with your existing BMS.', icon: Wrench },
                { title: 'No Disruption', desc: 'Fits into your operations.', icon: ShieldCheck }
              ].map((b, idx) => {
                const BenefitIcon = b.icon;
                return (
                  <div key={idx} className="space-y-2 flex flex-col items-center">
                    <div className="p-3 rounded-full bg-accent/5 text-accent">
                      <BenefitIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-bold text-sm font-display">{b.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-blue-100/50">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Control Capabilities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 p-8 rounded-3xl">
                <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/5 pb-3">One Product. Complete Control.</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Natural Language Q&A', desc: 'Ask anything about your ACMV system in plain English. Get instant, accurate answers.', icon: MessageSquare },
                    { title: 'Instant Insights & Trends', desc: 'Understand what\'s happening with your systems through automated summaries and visual trends.', icon: TrendingUp },
                    { title: 'Alerts & Anomaly Detection', desc: 'Proactive alerts for issues, risks and unusual patterns before they impact operations.', icon: AlertTriangle },
                    { title: 'Action Recommendations', desc: 'AI-powered recommendations to improve efficiency, comfort and reliability.', icon: Leaf },
                    { title: 'Knowledge On-Demand', desc: 'Access SOPs, technical docs and system knowledge whenever you need it.', icon: ClipboardList }
                  ].map((cap, idx) => {
                    const CapIcon = cap.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 6, scale: 1.01 }}
                        className="flex gap-4 items-start p-3 rounded-2xl hover:bg-white dark:hover:bg-white/[0.02] hover:shadow-md transition-all duration-300"
                      >
                        <span className="w-8 h-8 rounded-lg bg-accent/5 border border-accent/15 text-accent flex items-center justify-center text-xs font-bold font-mono shrink-0">
                          <CapIcon className="h-4 w-4" />
                        </span>
                        <div>
                          <h4 className="text-slate-900 dark:text-white font-bold text-sm mb-1">{cap.title}</h4>
                          <p className="text-xs text-slate-500 dark:text-blue-100/50 leading-relaxed">{cap.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Built for ACMV Teams */}
                <div className="p-6 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm font-display border-b border-slate-200/50 dark:border-white/5 pb-2">Built for ACMV Teams</h4>
                  <ul className="space-y-2 text-xs text-slate-650 dark:text-blue-100/60 font-medium">
                    {['Operations Managers', 'Facility Engineers', 'Building Technicians', 'Energy Managers', 'Maintenance Teams'].map((t, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Works with what you have */}
                <div className="p-6 bg-slate-50/50 dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-3xl space-y-4">
                  <h4 className="text-slate-900 dark:text-white font-bold text-sm font-display border-b border-slate-200/50 dark:border-white/5 pb-2">Works With What You Have</h4>
                  <ul className="space-y-2.5 text-xs text-slate-650 dark:text-blue-100/60">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Existing BMS (BACnet / Modbus)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      <span>Secure Cloud or On-Premise</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* STRATEGIC PARTNERSHIP REFERENCE (AMPOTECH) */}
            {/* <div className="p-8 bg-slate-50/40 dark:bg-[#0c162f]/60 border border-slate-200 dark:border-white/5 rounded-[32px] space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200/50 dark:border-white/5 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-accent dark:text-[#D4AF37] font-bold uppercase tracking-wider block mb-1">Launch Partnership Reference</span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">Ampotech – Proposed First Singapore Copilot Buyer</h3>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-blue-100/65 leading-relaxed">
                We are proud to collaborate with Ampotech in Singapore as our proposed first buyer of A8 Co-Pilot. A strategic partnership to set the benchmark for intelligent ACMV operations in Singapore.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {[
                  { title: 'Launch Partner', desc: 'Leading the way in AI-powered ACMV operations.', icon: Award },
                  { title: 'Real-World Impact', desc: 'Driving measurable outcomes across their facilities.', icon: TrendingUp },
                  { title: 'Future-Ready', desc: 'Building a smarter, more efficient and sustainable future together.', icon: Leaf }
                ].map((ref, idx) => {
                  const RefIcon = ref.icon;
                  return (
                    <div key={idx} className="space-y-2 p-5 bg-white dark:bg-white/[0.01] border border-slate-200 dark:border-white/5 rounded-xl hover:shadow-md transition-all">
                      <div className="p-2 rounded-lg bg-accent/5 text-accent w-max">
                        <RefIcon className="h-4 w-4" />
                      </div>
                      <h4 className="text-slate-950 dark:text-white text-xs font-bold font-display">{ref.title}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-blue-100/40 leading-relaxed">{ref.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div> */}

          </div>
        </Reveal3D>
      </section>

      {/* FINAL PAGE ACTION CTA */}
      {/* <section className="py-20 px-4 bg-bg-secondary text-center relative overflow-hidden">
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
      </section> */}

    </div>
  );
}
