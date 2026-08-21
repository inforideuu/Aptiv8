import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, Award, ShieldCheck, Heart, 
  Lightbulb, Zap, TrendingUp, ChevronRight, HelpCircle,
  Briefcase, Cpu, Settings, Sparkles
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

// Reusable animated counter component that counts on scroll visibility and mouse hover
function Counter({ endValue, label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef(null);

  const end = parseInt(endValue.replace(/\D/g, ''), 10);
  const suffix = endValue.replace(/[0-9]/g, '');

  const startCounting = () => {
    let start = 0;
    setCount(0);
    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    const timer = setInterval(() => {
      start += 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, hasTriggered]);

  const handleMouseEnter = () => {
    startCounting();
  };

  return (
    <div
      ref={elementRef}
      onMouseEnter={handleMouseEnter}
      className="flex flex-col items-center justify-center p-6 bg-bg-secondary border border-border-color rounded-2xl shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg cursor-pointer transform hover:-translate-y-1"
    >
      <span className="text-4xl md:text-5xl font-extrabold font-display text-accent mb-2 select-none">
        {count}
        {suffix}
      </span>
      <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider text-center select-none">
        {label}
      </span>
    </div>
  );
}

// Reusable 3D Tilt Wrapper Component for Core Principles
function TiltCard({ children, className }) {
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);

  const handleMouseMove = (e) => {
     const card = e.currentTarget;
    const box = card.getBoundingClientRect();

    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    // Cursor position from -1 to 1
    const mouseX = (x / box.width - 0.5) * 2;
    const mouseY = (y / box.height - 0.5) * 2;

    // Stronger 3D rotation
    const maxTilt = 15;

    setTiltX(-mouseY * maxTilt);
    setTiltY(mouseX * maxTilt);
  };


  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, background-color 0.3s, border-color 0.3s, box-shadow 0.3s'
      }}
      className={`${className} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(239,68,68,0.08)] hover:border-red-500/80 hover:bg-white`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  // Timeline State
  const [activeYear, setActiveYear] = useState('2018');

  const timelineEvents = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Aptiv8 was incorporated in 2018 and Singapore based. It is led by built environment domain experts with decades of experience in the built environment across the value chain and lifecycle.',
      icon: Building2
    },
    {
      year: '2020',
      title: 'Digital Transformation Expansion',
      description: 'Expanded operational scope to assist public and private stakeholders integrate custom cloud systems, metadata standards, and paperless site records.',
      icon: Zap
    },
    {
      year: '2022',
      title: 'AI Product Development Focus',
      description: 'Launched our dedicated AI research group to develop predictive algorithms tailored for BCA code checking and construction risk classification.',
      icon: Lightbulb
    },
    {
      year: '2024',
      title: 'Built Environment AI Integration',
      description: 'Began commercial deployment of our featured AI solutions including Sustainability Advisor (SDSA), Compliance Chatbot, and CMMS sensors.',
      icon: ShieldCheck
    },
    {
      year: '2026',
      title: 'BexAsia Showcase',
      description: 'Positioned as the leading, trusted AI partner in Southeast Asia, presenting our full software suite at the Sands Expo BexAsia event.',
      icon: Award
    }
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Continuously researching and scaling neural networks specifically designed for architectural structures and spatial data.',
      icon: Lightbulb
    },
    {
      title: 'Compliance',
      description: 'Guaranteeing strict alignment with building standards, Singapore BCA codes, and local infrastructure protocols.',
      icon: ShieldCheck
    },
    {
      title: 'Sustainability',
      description: 'Empowering clients to maximize thermal and carbon savings for BCA Green Mark Platinum accreditations.',
      icon: Heart
    },
    {
      title: 'Productivity',
      description: 'Automating repetitive specifications reviews, tendering estimates, and site maintenance calls.',
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      title: 'BCA Code Specialists',
      description: 'Our algorithms are trained on native Singapore building regulatory datasets, ensuring 99.8% compliance accuracy.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Enterprise Integration',
      description: 'We plug directly into your current Revit, IFC, and Autodesk environments. Zero workflow disruption.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modular SaaS Architecture',
      description: 'Deploy what you need. From standalone compliance chatbots to complete IoT sensory twins.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Aaron Chen',
      role: 'Chief Executive Officer',
      bio: 'Former senior BIM director at Bentley Systems with 15+ years engineering expertise.',
      icon: Briefcase
    },
    {
      name: 'Sarah Lim',
      role: 'Chief AI Architect',
      bio: 'PhD in Cognitive Architecture from NUS. Leads training of local building compliance models.',
      icon: Cpu
    },
    {
      name: 'Devin Marcus',
      role: 'Head of Product Operations',
      bio: 'Former Autodesk integration lead. Manages CMMS and BIM pipeline API distributions.',
      icon: Settings
    }
  ];

  return (
    <div className="relative pt-20">
      
      {/* SECTION 1: HERO SECTION */}
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
        
        {/* Main Floating Wrapper */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 dark:bg-red-950/25 border border-red-200 dark:border-red-800/40 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider mb-6 font-display"
          >
            ABOUT APTIV8 IT SOLUTIONS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6"
          >
            Engineering the Future of the <br />
            <span className="text-red-600 dark:text-red-400">
              Built Environment Through AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Aptiv8 IT Solutions Pte Ltd builds and commercializes Generative AI and Agentic AI advisor products for the Built Environment (BE) sector across Singapore and Malaysia.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION: COMPANY OVERVIEW */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color relative overflow-hidden">
        {/* Luxury Background Ambient Glow */}
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

        <Reveal3D>
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Single Consolidate Card with image - Hover 3D Red Border and Shadow */}
            <div className="bg-white/60 dark:bg-bg-primary/40 backdrop-blur-xl p-8 md:p-12 rounded-[32px] border border-border-color shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch hover:shadow-[0_20px_45px_rgba(239,68,68,0.15),_0_6px_0_0_#ef4444] hover:border-red-500 transition-all duration-500 transform hover:-translate-y-2">
              
              {/* Left Side: 3 Content blocks stacked with dividers */}
              <div className="lg:col-span-7 flex flex-col justify-between gap-3">
                {/* Block 1 */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider font-display w-max">
                    <Sparkles className="h-3 w-3 animate-pulse" /> Overview
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold font-display text-text-primary leading-tight tracking-tight">
                    Driving Adoption & <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-indigo-500">
                      Revenue via Agentic AI
                    </span>
                  </h2>
                  <p className="text-text-secondary leading-relaxed text-xs md:text-sm text-justify">
                    Aptiv8 IT Solutions Pte Ltd builds and commercializes Generative AI and Agentic AI advisor products for the Built Environment (BE) sector across Singapore and Malaysia. Its priority is delivering widely adopted, revenue-generating Gen AI tools that practitioners—real estate, buildings and infrastructure developers, building and other asset owners, architects, MEP engineers, quantity surveyors (QS), contractors, specialist trade subcontractors, and Integrated Facilities Management (IFM) companies—use in their daily work.
                  </p>
                </div>

                <hr className="border-border-color/60 dark:border-slate-800/40" />

                {/* Block 2 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-display text-text-primary">
                    Relieving Value Chain Bottlenecks
                  </h3>
                  <div className="text-xs text-text-secondary space-y-3 leading-relaxed text-justify">
                    <p className="text-text-secondary leading-relaxed text-xs md:text-sm text-justify">
                      The BE value chain — from design, through tendering, construction, operations & maintenance, and real estate management — is characterized by significant pain points. They are regulatory complexity, fragmented and non-standardized data, abortive work from late-stage rejections, and low productivity in knowledge-intensive but repetitive compliance and coordination tasks.
                    </p>
                    <p className="text-text-secondary leading-relaxed text-xs md:text-sm text-justify">
                      Aptiv8 positions Agentic AI — where agents reason over deterministic engineering calculations, structured data, and regulatory knowledge — as a path to relieving these bottlenecks at scale.
                    </p>
                  </div>
                </div>

                <hr className="border-border-color/60 dark:border-slate-800/40" />

                {/* Block 3 */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold font-display text-text-primary">
                    Delivery & Cross-Sector Adaptability
                  </h3>
                  <div className="text-xs text-text-secondary space-y-3 leading-relaxed text-justify">
                    <p className="text-text-secondary leading-relaxed text-xs md:text-sm text-justify">
                      Aptiv8 acts as an engineering delivery partner, co-developing Gen AI / Agentic AI projects with domain experts. Some projects are proofs-of-concept already built by Aptiv8; others are in active development or are seeking suitable domain-expert or institutional partners.
                    </p>
                    <p className="text-text-secondary leading-relaxed text-xs md:text-sm text-justify">
                      Aptiv8 also applies the same Generative and Agentic AI platform to other sectors, including customer service, telecommunications, short-term rental/hospitality, and aerospace MRO (Maintenance, Repair and Overhaul).
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side: Image Placeholder Option */}
              <div className="lg:col-span-5 relative group min-h-[350px] lg:min-h-full rounded-2xl overflow-hidden border border-border-color/60 bg-slate-900/5 dark:bg-slate-950/25 flex flex-col justify-end">
                <img 
                  src="/about-overview.jpg" 
                  alt="Aptiv8 AI Overview" 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                {/* Tech blueprint lines overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                
                <div className="relative p-6 z-10 text-white mt-auto">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1 font-display block">APTIV8 AI ENGINE</span>
                  <h4 className="text-base font-bold font-display leading-tight">Built Environment Lifecycle Analytics</h4>
                </div>
              </div>

            </div>
          </div>
        </Reveal3D>
      </section>

      {/* SECTION 2: COMPANY STORY (Interactive Timeline) */}
      <section id="journey" className="py-24 px-4 bg-[#fbfcfe] dark:bg-bg-primary border-b border-border-color relative overflow-hidden">
        {/* Skyline Background on right */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-[0.03] dark:opacity-[0.01] pointer-events-none bg-[url('https://images.unsplash.com/photo-1542362567-b07eac79094d?auto=format&fit=crop&w=800&q=80')] bg-no-repeat bg-right bg-cover" />
        
        {/* Dot patterns */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.04] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-[radial-gradient(#ef4444_1px,transparent_1px)] bg-[size:16px_16px] opacity-[0.04] pointer-events-none" />

        <Reveal3D>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-6 h-[1.5px] bg-red-500/60" />
                <span className="text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-widest font-display">
                  OUR JOURNEY
                </span>
                <div className="w-6 h-[1.5px] bg-red-500/60" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold font-display text-text-primary tracking-tight mb-2">
                Company History
              </h2>
              <div className="flex justify-center items-center gap-0 mt-3 mb-6">
                <div className="w-8 h-[3px] bg-red-500 rounded-l" />
                <div className="w-8 h-[3px] bg-blue-500 rounded-r" />
              </div>
              <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed text-sm">
                Aptiv8 was incorporated in 2018 and Singapore based. It is led by built environment domain experts with decades of experience in the built environment across the value chain and lifecycle.
              </p>
            </div>

            <div className="relative">
              {/* Central vertical track line (visible on desktop) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full hidden md:block" />
              
              {/* Left track line (visible on mobile) */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full md:hidden" />

              <div className="space-y-8 relative">
                {timelineEvents.map((event, idx) => {
                  const IconComponent = event.icon;
                  const isLeft = idx % 2 === 0;

                  // Configure red vs blue theme elements as shown in the user's design image
                  const isRedTheme = event.year !== '2020' && event.year !== '2026';
                  const themeColor = isRedTheme ? 'red' : 'blue';
                  
                  return (
                    <div 
                      key={event.year} 
                      className={`flex flex-col md:flex-row items-center justify-between relative ${
                        isLeft ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Timeline Center Node */}
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-red-500 z-20 shadow-[0_0_8px_rgba(239,68,68,0.3)]" 
                      />

                      {/* Card Spacer Column for Grid Alignment */}
                      <div className="w-full md:w-[45%] hidden md:block" />

                      {/* Timeline Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        whileHover={{ y: -4, scale: 1.01 }}
                        className={`w-full md:w-[45%] bg-white dark:bg-slate-900 rounded-3xl py-6 px-7 shadow-sm ml-12 md:ml-0 relative overflow-hidden transition-all duration-300 group ${
                          isRedTheme
                            ? 'border-t-2 border-l-2 border-red-500 border-r border-b border-slate-200/80 dark:border-slate-800/80 shadow-[4px_4px_0px_rgba(239,68,68,0.12)] hover:bg-[#e30613] hover:border-red-500/20 hover:shadow-[0_15px_30px_rgba(239,68,68,0.25)]'
                            : 'border-t-2 border-l-2 border-blue-500 border-r border-b border-slate-200/80 dark:border-slate-800/80 shadow-[4px_4px_0px_rgba(59,130,246,0.12)] hover:bg-blue-600 hover:border-blue-500/20 hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)]'
                        }`}
                      >
                        {/* Pointer Arrow Bubble Point */}
                        {isLeft ? (
                          <div className={`absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white dark:bg-slate-900 border-t border-r transition-colors ${
                            isRedTheme 
                              ? 'border-red-500/20 group-hover:bg-[#e30613] group-hover:border-red-500/0' 
                              : 'border-blue-500/20 group-hover:bg-blue-600 group-hover:border-blue-500/0'
                          } hidden md:block`} />
                        ) : (
                          <div className={`absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white dark:bg-slate-900 border-b border-l transition-colors ${
                            isRedTheme 
                              ? 'border-red-500/20 group-hover:bg-[#e30613] group-hover:border-red-500/0' 
                              : 'border-blue-500/20 group-hover:bg-blue-600 group-hover:border-blue-500/0'
                          } hidden md:block`} />
                        )}

                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold mb-3 font-display border transition-colors ${
                          isRedTheme 
                            ? 'bg-red-50/50 dark:bg-red-950/20 border-red-500 text-red-500 group-hover:bg-white/25 group-hover:border-white/40 group-hover:text-white' 
                            : 'bg-blue-50/50 dark:bg-blue-950/20 border-blue-500 text-blue-500 group-hover:bg-white/25 group-hover:border-white/40 group-hover:text-white'
                        }`}>
                          {event.year}
                        </div>

                        {/* Title & Description */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 relative z-10">
                          <div className={`p-3.5 rounded-2xl shrink-0 transition-colors ${
                            isRedTheme 
                              ? 'bg-red-50 dark:bg-red-950/30 text-red-500 group-hover:bg-white/20 group-hover:text-white' 
                              : 'bg-blue-50 dark:bg-blue-950/30 text-blue-500 group-hover:bg-white/20 group-hover:text-white'
                          }`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-display font-extrabold text-base text-text-primary group-hover:text-white transition-colors mb-2">
                              {event.title}
                            </h3>
                            <p className="text-text-secondary group-hover:text-white/90 transition-colors leading-relaxed text-xs md:text-sm font-light">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Inline Graphic Faint SVGs to Match bottom card vector drawings exactly */}
                        {event.year === '2018' && (
                          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full text-red-500/5 group-hover:text-white/10 transition-colors pointer-events-none" viewBox="0 0 400 60" fill="currentColor">
                            <path d="M0 60 V50 H10 V45 H20 V50 H40 V35 H50 V40 H60 V42 H80 V50 H100 V30 H110 V25 H120 V30 H140 V50 H180 V42 H190 V45 H200 V42 H220 V30 H230 V35 H250 V50 H280 V35 H290 V25 H300 V35 H320 V50 H400 V60 Z" />
                          </svg>
                        )}
                        {event.year === '2020' && (
                          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full text-blue-500/5 group-hover:text-white/10 transition-colors pointer-events-none" viewBox="0 0 400 60" fill="none" stroke="currentColor" strokeWidth="1">
                            <circle cx="20" cy="50" r="2" fill="currentColor" />
                            <circle cx="80" cy="20" r="2" fill="currentColor" />
                            <circle cx="140" cy="45" r="2" fill="currentColor" />
                            <circle cx="200" cy="15" r="2" fill="currentColor" />
                            <circle cx="280" cy="40" r="2" fill="currentColor" />
                            <circle cx="350" cy="25" r="2" fill="currentColor" />
                            <line x1="20" y1="50" x2="80" y2="20" />
                            <line x1="80" y1="20" x2="140" y2="45" />
                            <line x1="140" y1="45" x2="200" y2="15" />
                            <line x1="200" y1="15" x2="280" y2="40" />
                            <line x1="280" y1="40" x2="350" y2="25" />
                          </svg>
                        )}
                        {event.year === '2022' && (
                          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full text-red-500/5 group-hover:text-white/10 transition-colors pointer-events-none" viewBox="0 0 400 60" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M0 45 Q50 30 100 45 T200 45 T300 45 T400 45" />
                            <path d="M0 50 Q50 35 100 50 T200 50 T300 50 T400 50" strokeDasharray="3 3" />
                          </svg>
                        )}
                        {event.year === '2024' && (
                          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full text-red-500/5 group-hover:text-white/10 transition-colors pointer-events-none" viewBox="0 0 400 60" fill="currentColor">
                            <path d="M50 60 V45 H70 V40 H90 V45 H110 V60 Z M150 60 V35 H180 V60 Z M220 60 V48 H250 V60 Z M300 60 V40 H330 V60 Z" />
                          </svg>
                        )}
                        {event.year === '2026' && (
                          <svg className="absolute bottom-0 left-0 right-0 h-10 w-full text-blue-500/5 group-hover:text-white/10 transition-colors pointer-events-none" viewBox="0 0 400 60" fill="currentColor">
                            <path d="M20 60 V45 H40 V60 Z M50 60 V35 H80 V40 H90 V60 Z M120 60 C120 45 160 45 160 60 Z M200 60 A20 20 0 0 1 240 60 Z M260 60 V48 H280 V60 Z M300 60 V40 H320 V35 H340 V60 Z" />
                          </svg>
                        )}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Chevron Logo Node */}
            <div className="flex flex-col items-center justify-center mt-16 relative z-10">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.15)] flex items-center justify-center z-20">
                <span className="text-red-500 font-extrabold text-base transform rotate-180 select-none">V</span>
              </div>
              <p className="text-center text-text-secondary max-w-sm mt-6 font-display font-medium text-xs leading-relaxed">
                Continuing our journey to engineer <br />
                a smarter, sustainable built environment.
              </p>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* SECTION 3 & 4: MISSION & VISION (Split Screen Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden border-b border-border-color">
        {/* Our Vision (Left Side) */}
        <Reveal3D>
          <div 
            className="relative min-h-[380px] flex items-center justify-center p-8 md:p-16 text-center bg-cover bg-center h-full"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80')` }}
          >
            {/* Dark Red/Crimson Overlay */}
            <div className="absolute inset-0 bg-[#3a0b0d]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-950/40 to-transparent" />
            
            <div className="relative z-10 max-w-md">
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4 tracking-tight">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed font-light">
                To be the trusted AI partner in the AEC and FM sectors in Singapore and SE Asia.
              </p>
            </div>
          </div>
        </Reveal3D>

        {/* Our Mission (Right Side) */}
        <Reveal3D>
          <div 
            className="relative min-h-[380px] flex items-center justify-center p-8 md:p-16 text-center bg-cover bg-center h-full"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80')` }}
          >
            {/* Dark Slate Gray/Black Overlay */}
            <div className="absolute inset-0 bg-neutral-900/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
            
            <div className="relative z-10 max-w-md">
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed font-light">
                To drive AI transformation and innovation in the built environment.
              </p>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* SECTION 5: CORE VALUES */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Core Principles
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Our designs and client integrations are directed by four fundamental values.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <TiltCard 
                  key={idx} 
                  className="p-6 bg-bg-primary border border-border-color rounded-2xl group cursor-pointer transition-colors duration-300"
                >
                  <div className="p-3 rounded-xl bg-accent-glow text-accent w-max mb-4 group-hover:bg-red-50 group-hover:text-red-500 transition-colors">
                    <ValIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-slate-900 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed group-hover:text-slate-600 transition-colors">
                    {val.description}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>
        </Reveal3D>
      </section>



      {/* SECTION 6: STATISTICS (Animated Counters) */}
      <section className="py-20 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter endValue="150+" label="Projects Completed" />
            <Counter endValue="12+" label="AI Solutions" />
            <Counter endValue="7" label="Industries Served" />
            <Counter endValue="8" label="Years Experience" />
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 7: WHY CHOOSE APTIV8 */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Why Enterprise Leaders Partner with Us
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              We coordinate engineering expertise with state-of-the-art neural architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((w, idx) => (
              <div key={idx} className="bg-bg-primary border border-border-color rounded-3xl overflow-hidden group hover:border-accent transition-colors duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={w.image} alt={w.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {w.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 8: LEADERSHIP SECTION */}
      <section id="team" className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Our executive board pairs deep domain experts in BIM systems and machine learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((l, idx) => (
              <div key={idx} className="bg-bg-secondary border border-border-color rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <l.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary">
                  {l.name}
                </h3>
                <span className="text-xs font-semibold text-accent mb-3 uppercase tracking-wider">
                  {l.role}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {l.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-24 px-4 bg-bg-secondary text-center relative overflow-hidden">
        <Reveal3D>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold font-display text-text-primary mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed">
            Configure custom-trained compliance checker instances and green-planning modules for your organization today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white hover:bg-accent-hover rounded-full font-semibold transition-all shadow-lg hover:shadow-accent-glow"
          >
            Connect With Our AI Advisors <ChevronRight className="h-5 w-5" />
          </a>
        </div>
        </Reveal3D>
      </section>

    </div>
  );
}
