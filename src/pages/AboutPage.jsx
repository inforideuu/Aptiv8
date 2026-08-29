import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, Award, ShieldCheck, Heart, 
  Lightbulb, Zap, TrendingUp, ChevronRight, HelpCircle,
  Briefcase, Cpu, Settings, Sparkles, ArrowRight
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

// Motion variants for line-by-line reveal on hover
const containerVariants = {
  hidden: {},
  hover: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 10,
    height: 0,
    marginTop: 0,
    overflow: 'hidden'
  },
  hover: { 
    opacity: 1, 
    y: 0, 
    height: 'auto',
    marginTop: 8,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 15
    } 
  }
};

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
      className={`${className} hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(239,68,68,0.08)] dark:hover:shadow-[0_20px_40px_rgba(255,59,71,0.08)] hover:border-accent hover:bg-bg-secondary`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  const [aboutData, setAboutData] = useState({ hero: null, items: [] });

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/about/');
        if (response.ok) {
          const data = await response.json();
          setAboutData(data);
        }
      } catch (err) {
        console.error('Error fetching dynamic about data:', err);
      }
    };
    fetchAboutData();
  }, []);

  const iconMap = {
    Building2, Users, Award, ShieldCheck, Heart, Lightbulb, Zap, TrendingUp, Briefcase, Cpu, Settings
  };

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
      description: 'Launched our dedicated AI research group to develop advanced predictive algorithms tailored for BCA code checking and construction risk classification.',
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
      description: 'Positioned as the leading, trusted AI partner in Southeast Asia, proudly presenting our full software suite at the Sands Expo BexAsia event.',
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

  const defaultOverview = {
    overview: {
      title: 'AI-Powered Innovation for the Built Environment',
      paragraph_1: '• Aptiv8 IT Solutions Pte Ltd builds and commercializes Generative AI and Agentic AI advisor products for the Built Environment (BE) sector.',
      paragraph_2: '• Our tools automate compliance, optimize engineering, and elevate facilities management across Singapore and Malaysia.',
      paragraph_3: '• Our priority is delivering widely adopted, revenue-generating tools that practitioners use in their daily work.'
    },
    challenges: {
      title: 'Unlocking Efficiency Across the Built Environment Value Chain',
      paragraph_1: '• The BE value chain — from design, through tendering, construction, operations & maintenance, and real estate management — is characterized by significant pain points.',
      paragraph_2: '• They are regulatory complexity, fragmented and non-standardized data, abortive work from late-stage rejections, and low productivity in compliance.',
      paragraph_3: '• Aptiv8 positions Agentic AI to relieve these bottlenecks at scale.'
    },
    adaptability: {
      title: 'Building Industry-Ready Gen AI & Agentic AI Solutions',
      paragraph_1: '• Aptiv8 acts as an engineering delivery partner, co-developing Gen AI / Agentic AI projects with domain experts.',
      paragraph_2: '• Some projects are proofs-of-concept already built by Aptiv8; others are in active development or seeking partners.',
      paragraph_3: '• We also apply our Agentic platform to customer service, telecommunications, and aerospace MRO solutions.'
    }
  };

  const ovBlocks = { ...defaultOverview };
  (aboutData.overview || []).forEach(item => {
    if (ovBlocks[item.block_key]) {
      ovBlocks[item.block_key] = {
        title: item.title,
        paragraph_1: item.paragraph_1 ? `• ${item.paragraph_1}` : '',
        paragraph_2: item.paragraph_2 ? `• ${item.paragraph_2}` : '',
        paragraph_3: item.paragraph_3 ? `• ${item.paragraph_3}` : ''
      };
    }
  });

  const timelineToRender = aboutData.timeline && aboutData.timeline.length > 0
    ? aboutData.timeline.map(item => ({
        year: item.year,
        title: item.title,
        description: item.description,
        icon: iconMap[item.icon_name] || Award
      }))
    : timelineEvents;

  const visionText = aboutData.mission_vision?.vision_text || "To be the trusted AI partner in the AEC and FM sectors in Singapore and SE Asia.";
  const missionText = aboutData.mission_vision?.mission_text || "To drive AI transformation and innovation in the built environment.";

  const statsToRender = aboutData.stats && aboutData.stats.length > 0
    ? aboutData.stats
    : [
        { label: 'Projects Completed', value: '150+' },
        { label: 'AI Solutions', value: '12+' },
        { label: 'Industries Served', value: '7' },
        { label: 'Years Experience', value: '8' }
      ];

  const leadershipToRender = aboutData.leadership && aboutData.leadership.length > 0
    ? aboutData.leadership.map(item => ({
        name: item.name,
        role: item.role,
        bio: item.bio,
        icon: iconMap[item.icon_name] || Briefcase
      }))
    : leadership;

  return (
    <div className="relative pt-20">
      
      {/* SECTION 1: HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[580px]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark blue/black overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
          {/* Subtitle in Gold/Amber uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            INTELLIGENT INFRASTRUCTURE. SMARTER BUILT ENVIRONMENT.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Engineering the Future <br />
            of Built Environment
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Aptiv8 IT Solutions Pte Ltd builds and commercializes Generative AI and Agentic AI advisor products to automate compliance, optimize engineering, and elevate facilities management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Get Started Gold Button */}
            <a 
              href="/contact" 
              
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#c5a059] hover:bg-[#e30613] hover:text-white text-slate-950 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>

            {/* Explore Services Transparent Outline Button */}
            <a 
              href="/services" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
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
              
              <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
                {/* Block 1 Card */}
                <motion.div
                  initial="hidden"
                  whileHover="hover"
                  variants={containerVariants}
                  className="p-6 rounded-2xl border border-border-color bg-white/40 dark:bg-bg-primary/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_12px_30px_rgba(239,68,68,0.06)] cursor-default"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider font-display mb-3">
                    <Sparkles className="h-3 w-3 animate-pulse" /> Overview
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary leading-tight mb-2">
                    {ovBlocks.overview.title}
                  </h3>
                  <div className="flex flex-col text-xs md:text-sm text-text-secondary leading-relaxed text-justify">
                    <p className="text-text-primary font-semibold mb-2">Hover card to reveal details:</p>
                    {ovBlocks.overview.paragraph_1 && <motion.p variants={itemVariants}>{ovBlocks.overview.paragraph_1}</motion.p>}
                    {ovBlocks.overview.paragraph_2 && <motion.p variants={itemVariants}>{ovBlocks.overview.paragraph_2}</motion.p>}
                    {ovBlocks.overview.paragraph_3 && <motion.p variants={itemVariants}>{ovBlocks.overview.paragraph_3}</motion.p>}
                  </div>
                </motion.div>

                {/* Block 2 Card */}
                <motion.div
                  initial="hidden"
                  whileHover="hover"
                  variants={containerVariants}
                  className="p-6 rounded-2xl border border-border-color bg-white/40 dark:bg-bg-primary/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_12px_30px_rgba(239,68,68,0.06)] cursor-default"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider font-display mb-3">
                    <Cpu className="h-3 w-3 animate-pulse" /> Challenges
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary leading-tight mb-2">
                    {ovBlocks.challenges.title}
                  </h3>
                  <div className="flex flex-col text-xs md:text-sm text-text-secondary leading-relaxed text-justify">
                    <p className="text-text-primary font-semibold mb-2">Hover card to reveal details:</p>
                    {ovBlocks.challenges.paragraph_1 && <motion.p variants={itemVariants}>{ovBlocks.challenges.paragraph_1}</motion.p>}
                    {ovBlocks.challenges.paragraph_2 && <motion.p variants={itemVariants}>{ovBlocks.challenges.paragraph_2}</motion.p>}
                    {ovBlocks.challenges.paragraph_3 && <motion.p variants={itemVariants}>{ovBlocks.challenges.paragraph_3}</motion.p>}
                  </div>
                </motion.div>

                {/* Block 3 Card */}
                <motion.div
                  initial="hidden"
                  whileHover="hover"
                  variants={containerVariants}
                  className="p-6 rounded-2xl border border-border-color bg-white/40 dark:bg-bg-primary/20 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-[0_12px_30px_rgba(239,68,68,0.06)] cursor-default"
                >
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase tracking-wider font-display mb-3">
                    <Briefcase className="h-3 w-3 animate-pulse" /> Adaptability
                  </div>
                  <h3 className="text-xl font-bold font-display text-text-primary leading-tight mb-2">
                    {ovBlocks.adaptability.title}
                  </h3>
                  <div className="flex flex-col text-xs md:text-sm text-text-secondary leading-relaxed text-justify">
                    <p className="text-text-primary font-semibold mb-2">Hover card to reveal details:</p>
                    {ovBlocks.adaptability.paragraph_1 && <motion.p variants={itemVariants}>{ovBlocks.adaptability.paragraph_1}</motion.p>}
                    {ovBlocks.adaptability.paragraph_2 && <motion.p variants={itemVariants}>{ovBlocks.adaptability.paragraph_2}</motion.p>}
                    {ovBlocks.adaptability.paragraph_3 && <motion.p variants={itemVariants}>{ovBlocks.adaptability.paragraph_3}</motion.p>}
                  </div>
                </motion.div>
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
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent/70 to-transparent hidden md:block shadow-[0_0_18px_rgba(239,68,68,0.18)]" />
              
              {/* Left track line (visible on mobile) */}
              <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full md:hidden" />

              <div className="space-y-8 relative">
                {timelineToRender.map((event, idx) => {
                  const IconComponent = event.icon || Award;
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
                      <div className="w-full md:w-[35%] hidden md:block" />

                      {/* Timeline Card */}
                      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-60px' }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  whileHover={{
    y: -4,
    scale: 1.01
  }}
  className={`group relative w-full md:w-[45%] ml-12 md:ml-0 rounded-2xl bg-white dark:bg-slate-900 border overflow-hidden transition-all duration-500 ${
    isRedTheme
      ? 'border-slate-200 dark:border-slate-800 hover:border-red-500/60 hover:shadow-[0_12px_35px_rgba(239,68,68,0.12)]'
      : 'border-slate-200 dark:border-slate-800 hover:border-blue-500/60 hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)]'
  }`}
>
  {/* Animated top accent */}
  <div
    className={`absolute top-0 left-0 right-0 h-[2px] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ${
      isRedTheme
        ? 'bg-gradient-to-r from-transparent via-red-500 to-transparent'
        : 'bg-gradient-to-r from-transparent via-blue-500 to-transparent'
    }`}
  />

  {/* Pointer */}
  {isLeft ? (
    <div
      className={`absolute right-[-5px] top-1/2 -translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-white dark:bg-slate-900 border-t border-r hidden md:block ${
        isRedTheme
          ? 'border-red-500/40'
          : 'border-blue-500/40'
      }`}
    />
  ) : (
    <div
      className={`absolute left-[-5px] top-1/2 -translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-white dark:bg-slate-900 border-b border-l hidden md:block ${
        isRedTheme
          ? 'border-red-500/40'
          : 'border-blue-500/40'
      }`}
    />
  )}

  {/* Compact content */}
  <div className="px-5 py-5">

    {/* Header */}
    <div className="flex items-center justify-between mb-4">

      {/* Year */}
      <span
        className={`text-[10px] font-bold tracking-[0.18em] uppercase ${
          isRedTheme
            ? 'text-red-500'
            : 'text-blue-500'
        }`}
      >
        {event.year}
      </span>

      {/* Small indicator */}
      <span
        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover:scale-150 ${
          isRedTheme
            ? 'bg-red-500 group-hover:shadow-[0_0_10px_rgba(239,68,68,0.6)]'
            : 'bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.6)]'
        }`}
      />
    </div>

    {/* Main content */}
    <div className="flex items-start gap-4">

      {/* Icon */}
      <div
        className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center border transition-all duration-500 ${
          isRedTheme
            ? 'bg-red-50 dark:bg-red-950/20 border-red-500/15 text-red-500 group-hover:bg-red-500 group-hover:text-white'
            : 'bg-blue-50 dark:bg-blue-950/20 border-blue-500/15 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'
        }`}
      >
        <IconComponent className="h-5 w-5" />
      </div>

      {/* Text */}
      <div className="min-w-0">

        <h3
          className={`font-display font-bold text-sm md:text-base text-text-primary mb-1.5 transition-colors duration-300 ${
            isRedTheme
              ? 'group-hover:text-red-500'
              : 'group-hover:text-blue-500'
          }`}
        >
          {event.title}
        </h3>

        <p className="text-xs text-text-secondary leading-5 font-light">
          {event.description}
        </p>

      </div>
    </div>

    {/* Bottom micro detail */}
    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
      <span className="text-[8px] uppercase tracking-[0.2em] text-text-secondary">
        Aptiv8 Milestone
      </span>

      <ArrowRight
        className={`h-3.5 w-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ${
          isRedTheme ? 'text-red-500' : 'text-blue-500'
        }`}
      />
    </div>
  </div>
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
            {/* Inner White Border Frame */}
            <div className="absolute inset-6 border border-white/30 rounded-2xl pointer-events-none z-10" />
            
            <div className="relative z-10 max-w-md">
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4 tracking-tight">
                Our Vision
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed font-light">
                {visionText}
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
            {/* Inner White Border Frame */}
            <div className="absolute inset-6 border border-white/30 rounded-2xl pointer-events-none z-10" />
            
            <div className="relative z-10 max-w-md">
              <h3 className="text-3xl md:text-4xl font-extrabold font-display text-white mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed font-light">
                {missionText}
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
                  <div className="p-3 rounded-xl bg-accent-glow text-accent w-max mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <ValIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors">
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
            {statsToRender.map((stat, idx) => (
              <Counter key={idx} endValue={stat.value} label={stat.label} />
            ))}
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
            {leadershipToRender.map((l, idx) => {
              const LeaderIcon = l.icon;
              return (
                <div key={idx} className="bg-bg-secondary border border-border-color rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-2xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <LeaderIcon className="h-7 w-7" />
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
            );
          })}
        </div>
        </div>
        </Reveal3D>
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-24 px-4 bg-bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none " />
        <Reveal3D>
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
             className="group bg-white/80 dark:bg-[#0b1528] border border-red-500/50 dark:border-[#c5a880]/50 rounded-[32px] p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden hover:bg-[#0b1528] dark:hover:bg-slate-900/60 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-500 cursor-default"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-text-primary dark:text-[#D4AF37] group-hover:text-[#D4AF37] dark:group-hover:text-text-primary mb-6 transition-colors duration-500">
              Let's Build the Future Together
            </h2>
            <p className="text-text-secondary dark:text-blue-100/70 group-hover:text-blue-100/70 dark:group-hover:text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm transition-colors duration-500">
              Configure custom-trained compliance checker instances and green-planning modules for your organization today.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent dark:bg-[#D4AF37] text-white dark:text-[#0b1528] group-hover:bg-[#D4AF37] dark:group-hover:bg-accent group-hover:text-[#0b1528] dark:group-hover:text-white rounded-full font-semibold transition-all duration-500 shadow-lg group-hover:shadow-accent-glow"
            >
              Connect With Our AI Advisors <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Reveal3D>
      </section>

    </div>
  );
}
