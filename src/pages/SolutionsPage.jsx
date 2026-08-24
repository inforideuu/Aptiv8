import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, ArrowRight, Layers, LayoutGrid, CheckCircle,
  Calendar, TrendingUp, ClipboardList, AlertTriangle, Users,
  Boxes, MessageSquare, Maximize2, Clock, Archive, Cpu,
  Briefcase, DollarSign, ShieldCheck, FileText, BarChart3,
  Award, Truck, Leaf, Activity, Upload, GitBranch, CheckSquare,
  QrCode, Wrench, AlertOctagon, FileSpreadsheet, History, WifiOff,
  MailCheck, Link2, Database, Key, MessageCircle, PieChart, Gauge, Radio, MapPin
} from 'lucide-react';
import Card from '../components/Card';
import { featuredSolutions, svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function SolutionsPage() {
  const [selectedStage, setSelectedStage] = useState('planning-design');

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
                Visualizing the step-by-step breakdown and verification pipelines within the Aptiv8 CMMS operational matrix.
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
                ].map((feature, idx) => {
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
