import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, Award, ShieldCheck, Heart, 
  Lightbulb, Zap, TrendingUp, ChevronRight, HelpCircle,
  Briefcase, Cpu, Settings
} from 'lucide-react';

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

export default function AboutPage() {
  // Timeline State
  const [activeYear, setActiveYear] = useState('2018');

  const timelineEvents = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Aptiv8 IT Solutions was established in Singapore, building the foundations for digitalization in construction and architectural workflows.',
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
      <section className="relative py-28 px-4 bg-gradient-to-b from-white via-red-100 to-red-500 dark:bg-none dark:bg-bg-secondary border-b border-border-color overflow-hidden"
>
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6 font-display"
          >
            About Aptiv8 IT Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6"
          >
            Engineering the Future of the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
              Built Environment Through AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Since 2018, Aptiv8 has been helping organizations accelerate digital transformation through industry-first, custom-trained AI solutions.
          </motion.p>
        </motion.div>
      </section>

      {/* SECTION 2: COMPANY STORY (Interactive Timeline) */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              How we scaled from a Singapore tech startup to Southeast Asia's trusted AI partner.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Timeline Year selector */}
            <div className="relative flex justify-between border-b border-border-color pb-4 overflow-x-auto gap-4">
              {timelineEvents.map(event => (
                <button
                  key={event.year}
                  onClick={() => setActiveYear(event.year)}
                  className={`flex flex-col items-center gap-2 min-w-[100px] pb-2 relative transition-all cursor-pointer`}
                >
                  <span className={`text-lg font-bold font-display ${activeYear === event.year ? 'text-accent scale-110' : 'text-text-secondary/60'}`}>
                    {event.year}
                  </span>
                  {activeYear === event.year && (
                    <motion.div
                      layoutId="aboutTimelineBorder"
                      className="absolute bottom-[-17px] left-0 right-0 h-1 bg-accent"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Timeline details output */}
            <AnimatePresence mode="wait">
              {timelineEvents.filter(e => e.year === activeYear).map(event => {
                const IconComponent = event.icon;
                return (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-bg-secondary border border-border-color rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-sm"
                  >
                    <div className="p-5 rounded-2xl bg-accent-glow text-accent shrink-0">
                      <IconComponent className="h-10 w-10" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                        {event.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: MISSION & VISION (Split Screen Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden border-b border-border-color">
        {/* Our Vision (Left Side) */}
        <div 
          className="relative min-h-[380px] flex items-center justify-center p-8 md:p-16 text-center bg-cover bg-center"
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
              To be the go-to digital tech company of the Built Environment in Singapore and SE Asia.
            </p>
          </div>
        </div>

        {/* Our Mission (Right Side) */}
        <div 
          className="relative min-h-[380px] flex items-center justify-center p-8 md:p-16 text-center bg-cover bg-center"
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
              To use digital technology to drive sustainability, productivity and value for our stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CORE VALUES */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
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
                <div key={idx} className="p-6 bg-bg-primary border border-border-color rounded-2xl hover:border-accent transition-colors group">
                  <div className="p-3 rounded-xl bg-accent-glow text-accent w-max mb-4">
                    <ValIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: STATISTICS (Animated Counters) */}
      <section className="py-20 px-4 bg-bg-primary border-b border-border-color">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter endValue="150+" label="Projects Completed" />
            <Counter endValue="12+" label="AI Solutions" />
            <Counter endValue="7" label="Industries Served" />
            <Counter endValue="8" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE APTIV8 */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
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
      </section>

      {/* SECTION 8: LEADERSHIP SECTION */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
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
      </section>

      {/* SECTION 9: CTA */}
      <section className="py-24 px-4 bg-bg-secondary text-center relative overflow-hidden">
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
      </section>

    </div>
  );
}
