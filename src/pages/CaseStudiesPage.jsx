import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, FileText, TrendingUp, CheckCircle, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

function AnimatedCounterCard({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const [hoverTrigger, setHoverTrigger] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(target);
    if (isNaN(end)) return;
    
    const duration = 1200; // Animation duration in ms
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula
      const easeOutQuad = progress * (2 - progress);
      const current = end * easeOutQuad;

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(current);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [target, hoverTrigger]);

  const isDecimal = target.toString().includes('.');
  const displayVal = isDecimal ? count.toFixed(1) : Math.floor(count);

  return (
    <div 
      onMouseEnter={() => setHoverTrigger(prev => prev + 1)}
      className="p-8 bg-bg-primary border border-border-color rounded-2xl shadow-sm hover:shadow-[0_15px_30px_rgba(239,68,68,0.15),_0_5px_0_0_#ef4444] hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1.5 group cursor-pointer"
    >
      <span className="text-4xl md:text-5xl font-extrabold font-display text-accent block mb-2 transition-colors group-hover:text-red-500">
        {displayVal}{suffix}
      </span>
      <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-text-secondary transition-colors group-hover:text-text-primary">
        {label}
      </span>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  const caseStudiesData = [
    {
      id: 'case-arch',
      industry: 'Architecture',
      title: 'Automating BCA Code Compliance for Marina Bay High-Rises',
      problem: 'Architectural checks for Singapore BCA compliance consumed up to 6 weeks per design iteration, delaying approvals and inflating engineer billable hours.',
      solution: 'Deployed the Aptiv8 Gen AI Chatbot & Assistant for Regulatory Compliance integrated directly with design elements.',
      implementation: 'Trained model on SG regulatory documents to verify structural dimensions and ventilation clearance dynamically in IFC layers.',
      results: 'Compliance check times reduced from 6 weeks to 4 hours with 99.8% verification accuracy.',
      impact: 'Saved $240K in developer drafting overheads and fast-tracked final BCA design permits by 45 days.',
      before: '6 Weeks Manual Check',
      after: '4 Hours Automated Check',
      image: svgs.planning,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // placeholder sample
    },
    {
      id: 'case-eng',
      industry: 'Engineering',
      title: 'Fire Safety Evacuation Simulations in Dense Urban Infrastructure',
      problem: 'Traditional layout checks struggled to anticipate crowd congestion during emergencies, requiring expensive architectural changes late in pre-construction.',
      solution: 'Configured the Gen AI Advisor for Fire Safety & Protection simulation engine.',
      implementation: 'Calculated crowd dynamics using spatial density grids, highlighting bottlenecks and advising exit door widths.',
      results: 'Identified 3 major compliance failures during early planning stages.',
      impact: 'Secured structural safety approval on first filing, eliminating $180K in potential rebuild costs.',
      before: 'High Congestion Risks',
      after: 'Zero Fire Code Failures',
      image: svgs.fireSafety,
      videoUrl: 'https://www.w3schools.com/html/movie.mp4'
    },
    {
      id: 'case-const',
      industry: 'Construction',
      title: 'Accelerating Tender Preparation for Public Works Bids',
      problem: 'Quantity takeoffs and structural specifications estimates took weeks, introducing cost variances that threatened margins.',
      solution: 'Deployed the AI Assistant for Bid & Tender Evaluation.',
      implementation: 'Parsed historical public contracts to output line items, matching unit cost averages against live raw material markets.',
      results: 'Variance dropped from 8% down to 0.8%, reducing compilation time to 2 days.',
      impact: 'Secured a $42M public infrastructure tender with high confidence margins.',
      before: '8% Price Estimate Variance',
      after: '0.8% Accurate Takeoffs',
      image: svgs.bidPrep,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 'case-fac',
      industry: 'Facilities Management',
      title: 'Predictive CMMS & Sensory Twin Link for Chiller Operations',
      problem: 'Commercial building Chillers suffered frequent breakdowns, resulting in tenant complaints and high emergency maintenance rates.',
      solution: 'Linked Cryotos — Agentic AI-Powered CMMS Platform with Gen AI Integration with CMMS sensor arrays.',
      implementation: 'Tracked live vibration and heat signals to predict failures 72 hours before operational threshold breach.',
      results: 'Downtime decreased by 42%, while preventative repair tickets were scheduled automatically.',
      impact: 'Saved $160K in annual chiller utility bills and extended asset life by 5 years.',
      before: 'Frequent Chiller Failures',
      after: '42% Operational Uptime Gain',
      image: svgs.operations,
      videoUrl: 'https://www.w3schools.com/html/movie.mp4'
    },
    {
      id: 'case-real',
      industry: 'Real Estate',
      title: 'NLP Lease Scanning and Strata Compliance Automation',
      problem: 'Managing 400+ lease renewals manually led to missed rent review dates and compliance errors in strata governance filings.',
      solution: 'Integrated Lease Management Assistant and Strata Title & Maintenance Assistant.',
      implementation: 'Scanned legal agreements to extract dates, indexing units against local strata governance schedules.',
      results: 'Automated 100% of rent reviews, sending alerts 30 days ahead.',
      impact: 'Eliminated rental review oversights, boosting portfolio revenue by 7.4%.',
      before: 'Missed Review Milestones',
      after: '100% On-Time Lease Alerts',
      image: svgs.realEstate,
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const industriesList = ['All', 'Architecture', 'Engineering', 'Construction', 'Facilities Management', 'Real Estate'];

  const filteredStudies = activeIndustry === 'All'
    ? caseStudiesData
    : caseStudiesData.filter(cs => cs.industry === activeIndustry);

  // Ensure index remains in bounds after filter change
  const currentStudy = filteredStudies[currentIndex] || filteredStudies[0];

  const handleNext = () => {
    setPlayVideo(false);
    setCurrentIndex(prev => (prev === filteredStudies.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setPlayVideo(false);
    setCurrentIndex(prev => (prev === 0 ? filteredStudies.length - 1 : prev - 1));
  };

  const handleFilterChange = (ind) => {
    setActiveIndustry(ind);
    setCurrentIndex(0);
    setPlayVideo(false);
  };

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
            Proven Case Studies
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            Real-World Impact
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Discover how developers, engineers, and property managers use Aptiv8 AI to achieve compliance, reduce design times, and cut overhead costs.
          </p>
        </motion.div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="py-6 bg-bg-primary border-b border-border-color sticky top-20 z-20 backdrop-blur-md bg-bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {industriesList.map(ind => (
            <button
              key={ind}
              onClick={() => handleFilterChange(ind)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeIndustry === ind
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-bg-secondary text-text-secondary border border-border-color hover:border-accent/40'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      {/* CAROUSEL SECTION */}
      <section className="py-16 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-6xl mx-auto">
          {filteredStudies.length > 0 ? (
            <div className="relative bg-bg-secondary border border-border-color rounded-[32px] p-8 md:p-12 shadow-xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Side: Storytelling Text */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{y: -6,boxShadow:'0 30px 70px rgba(15, 23, 42, 0.10), 0 10px 30px rgba(239, 68, 68, 0.06)',}}transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1],}}
                className=" group relative flex flex-col justify-between gap-6 bg-white dark:bg-bg-primary border border-border-color rounded-[24px] p-6 md:p-8 overflow-hidden cursor-default transition-colors duration-500">
  {/* Premium accent border */}
  <div className="pointer-events-none absolute inset-0 rounded-[24px] border-t-2 border-l-2 border-accent/0 group-hover:border-accent/70 transition-all duration-500"/>

  {/* Soft hover spotlight */}
  <div className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"/>

  {/* Main content */}
  <div className="relative z-10">

    {/* Industry label */}
    <motion.span className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold font-display mb-2 block" whileHover={{x: 3}} transition={{ duration: 0.3 }}>
      {currentStudy.industry} Case Study
    </motion.span>

    {/* Title */}
    <motion.h2 className="text-2xl md:text-3xl font-bold font-display text-text-primary mb-6 leading-tight" style={{transformStyle: 'preserve-3d',}} whileHover={{ x: 3 }} transition={{ duration: 0.35 }}>
      {currentStudy.title}
    </motion.h2>

    {/* Case study content */}
    <div className="flex flex-col gap-5 text-sm text-text-secondary leading-relaxed">

      {/* Challenge */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
        className="
          pl-4
          border-l-2
          border-border-color
          group-hover:border-accent/40
          transition-colors
          duration-500
        "
      >
        <strong className="text-text-primary font-display block mb-1">
          The Challenge
        </strong>

        <p>{currentStudy.problem}</p>
      </motion.div>

      {/* AI Deployment */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
        className="
          pl-4
          border-l-2
          border-border-color
          group-hover:border-accent/40
          transition-colors
          duration-500
        "
      >
        <strong className="text-text-primary font-display block mb-1">
          Aptiv8 AI Deployment
        </strong>

        <p>{currentStudy.solution}</p>
      </motion.div>

      {/* Implementation */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
        className="
          pl-4
          border-l-2
          border-border-color
          group-hover:border-accent/40
          transition-colors
          duration-500
        "
      >
        <strong className="text-text-primary font-display block mb-1">
          Implementation Workflow
        </strong>

        <p>{currentStudy.implementation}</p>
      </motion.div>

    </div>
  </div>


  {/* Before & After */}
  <div className="
    relative
    z-10
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    mt-4
    pt-6
    border-t
    border-border-color/60
  ">

    {/* BEFORE */}
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
      className="
        relative
        overflow-hidden
        p-4
        bg-slate-50
        dark:bg-slate-900/60
        border
        border-border-color
        rounded-xl
        transition-all
        duration-500
        hover:border-red-400/40
        hover:shadow-lg
      "
    >
      {/* Red indicator */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-[2px]
        bg-red-500
        scale-x-0
        origin-left
        hover:scale-x-100
        transition-transform
        duration-500
      " />

      <span className="
        text-[10px]
        text-text-secondary
        font-semibold
        uppercase
        tracking-wider
        block
      ">
        Before Deployment
      </span>

      <span className="
        text-sm
        font-bold
        text-red-500
        font-display
        mt-1
        block
      ">
        {currentStudy.before}
      </span>
    </motion.div>


    {/* AFTER */}
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
      }}
      className="
        relative
        overflow-hidden
        p-4
        bg-accent/5
        dark:bg-accent/10
        border
        border-accent/20
        rounded-xl
        transition-all
        duration-500
        hover:border-accent/50
        hover:shadow-lg
      "
    >
      {/* Accent indicator */}
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-[2px]
        bg-accent
        scale-x-0
        origin-left
        group-hover:scale-x-100
        transition-transform
        duration-500
      " />

      <span className="
        text-[10px]
        text-accent
        font-semibold
        uppercase
        tracking-wider
        block
      ">
        After Aptiv8 AI
      </span>

      <span className="
        text-sm
        font-bold
        text-accent
        font-display
        mt-1
        block
      ">
        {currentStudy.after}
      </span>
    </motion.div>

  </div>

  {/* Bottom animated line */}
  <div className="
    absolute
    bottom-0
    left-8
    right-8
    h-[2px]
    bg-accent
    origin-left
    scale-x-0
    group-hover:scale-x-100
    transition-transform
    duration-700
  " />

</motion.div>

                {/* Right Side: Media Container (Image / Video Preview & Stats) */}
                <div className="flex flex-col justify-between gap-8">
                  {/* Media Frame */}
                  <div className="rounded-[24px] overflow-hidden border border-border-color aspect-[16/10] relative shadow-lg bg-black">
                    {!playVideo ? (
                      <>
                        <img src={currentStudy.image} alt={currentStudy.title} className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <button
                            onClick={() => setPlayVideo(true)}
                            className="p-5 rounded-full bg-white text-accent hover:scale-110 transition-transform shadow-lg cursor-pointer"
                            aria-label="Play video simulation preview"
                          >
                            <Play className="h-6 w-6 fill-current" />
                          </button>
                        </div>
                        <span className="absolute bottom-4 left-4 text-xs font-semibold text-white bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                          Click to play 3D path simulation
                        </span>
                      </>
                    ) : (
                      <video
                        src={currentStudy.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                        onEnded={() => setPlayVideo(false)}
                      />
                    )}
                  </div>

                  {/* Results & Business Impact */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} whileHover={{y: -6,boxShadow:'0 24px 50px rgba(15, 23, 42, 0.10), 0 8px 24px rgba(239, 68, 68, 0.06)',}} transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1],}}
  className="group relative overflow-hidden bg-white dark:bg-bg-tertiary/40 border border-border-color rounded-2xl p-6 flex flex-col gap-6 justify-center transition-colors duration-500">
  {/* Premium accent edge */}
  <div className="absolute inset-0 rounded-2xl border-t-2 border-l-2 border-accent/0 group-hover:border-accent/60 pointer-events-none transition-all duration-500"/>

  {/* Subtle spotlight */}
  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700"/>

  {/* Results */}
  <motion.div className="relative z-10" whileHover={{ x: 4 }} transition={{ duration: 0.3 }}>
    <span className="text-xs uppercase tracking-[0.16em] text-accent font-bold mb-2 block">
      Results & Verification
    </span>

    <p className="text-lg font-bold font-display text-text-primary leading-snug">{currentStudy.results}</p>
  </motion.div>

  {/* Divider */}
  <div className="relative z-10 h-px bg-border-color/60 overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-0 bg-accent group-hover:w-full transition-all duration-700" />
  </div>

  {/* Business Impact */}
  <motion.div
    className="relative z-10" 
    whileHover={{ x: 4 }}
    transition={{ duration: 0.3 }}
  >
    <span className="text-xs uppercase tracking-[0.16em] text-accent font-bold mb-2 flex items-center gap-2">
      <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 group-hover:bg-accent transition-all duration-500">
        <TrendingUp className="h-4 w-4 text-accent transition-colors duration-500"/>
      </span>

      Total Business Impact
    </span>

    <p className="text-lg font-bold font-display text-text-primary leading-snug ">
      {currentStudy.impact}
    </p>
  </motion.div>


  {/* Bottom accent */}
  <div className="
    absolute
    bottom-0
    left-6
    right-6
    h-[2px]
    bg-accent
    origin-left
    scale-x-0
    group-hover:scale-x-100
    transition-transform
    duration-700
  " />

</motion.div>

                </div>

              </div>

              {/* Navigation Controllers */}
              <div className="flex justify-between items-center mt-10 pt-6 border-t border-border-color/60">
                <span className="text-xs text-text-secondary">
                  Showing Case {currentIndex + 1} of {filteredStudies.length}
                </span>
                
                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3.5 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-primary transition-colors cursor-pointer"
                    aria-label="Previous Case Study"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3.5 rounded-full border border-border-color bg-bg-secondary hover:bg-bg-tertiary text-text-primary transition-colors cursor-pointer"
                    aria-label="Next Case Study"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center py-20 bg-bg-secondary border border-border-color rounded-[32px]">
              <p className="text-text-secondary text-sm">No case studies found for the selected industry.</p>
            </div>
          )}
        </div>
        </Reveal3D>
      </section>

      {/* GLOBAL ENTERPRISE METRICS */}
      <section className="py-20 px-4 bg-bg-secondary">
        <Reveal3D>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounterCard target="99.8" suffix="%" label="Check Validation Accuracy" />
            <AnimatedCounterCard target="42" suffix="%" label="Reduction in Equipment Downtime" />
            <AnimatedCounterCard target="5" suffix="x" label="Faster Tender Spec Prep" />
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}
