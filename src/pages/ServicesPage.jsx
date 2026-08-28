import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Users, Layers, TrendingUp, Settings, ShieldCheck,
  ChevronRight, Sparkles, Cpu, Code2, Network, ArrowUpRight, ArrowRight
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function ServicesPage() {
  const [dbServices, setDbServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/cms/');
        if (response.ok) {
          const data = await response.json();
          setDbServices(data.services || []);
        }
      } catch (err) {
        console.error('Error fetching CMS services:', err);
      }
    };
    fetchServices();
  }, []);

  const iconMap = {
    Users, Layers, TrendingUp, Settings, ShieldCheck, Cpu, Code2, Network
  };

  const servicesStatic = [
    {
      id: 'co-development',
      title: 'Gen AI / Agentic AI Co-Development Partnership',
      badge: 'Joint Innovation',
      description: 'Aptiv8 works as an engineering delivery partner alongside domain experts (consultants, contractors, FM operators, Institutes of Higher Learning, government agencies) to scope, build, and validate Gen AI advisors for real workflows, from proof-of-concept through to deployment.',
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Proof-of-concept validation', 'Domain expert collaboration', 'Custom workflow mapping', 'Scale-ready deployment']
    },
    {
      id: 'om-bundling',
      title: 'Operations & Maintenance Solution Bundling — Digital Twin, AI, IoT, Smart Energy & Thermal Comfort',
      badge: 'Converged Infrastructure',
      description: 'Aptiv8 converges digital twin modelling, agentic AI (Aptiv8 Cortex), IoT and building-management-system (BMS) data, smart energy management (Aptiv8), and thermal comfort / building performance monitoring into a single integrated operations-and-maintenance service for building owners and FM operators — moving beyond disconnected point solutions toward one converged operating layer across a building\'s operational life.',
      icon: Layers,
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      highlights: ['Aptiv8 Cortex reasoning', 'Aptiv8 energy optimization', 'BMS & IoT telemetry', 'Thermal comfort monitoring']
    },
    {
      id: 'advisory',
      title: 'AI Advisory & Roadmapping',
      badge: 'Strategic Planning',
      description: 'Advisory engagements that assess an existing operational platform (e.g. a CMMS) and produce a phased AI adoption roadmap — as delivered for Aptiv8 Cortex — sequencing quick-win agents ahead of more complex predictive and compliance capabilities.',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      highlights: ['Operational platform audit', 'Adoption roadmap sequencing', 'Quick-win agent identification', 'Predictive feasibility scoring']
    },
    {
      id: 'enterprise-dev',
      title: 'Enterprise Generative AI Application Development',
      badge: 'Low-Code & Custom Code',
      description: 'Design and build of enterprise Gen AI applications on a low-code orchestration platform: LLM orchestration flows (“Chatflow”), autonomous agents and assistants, connection to enterprise data via Cognitive Search / vector databases, and integration into client applications via APIs, SDKs, and embeddable chat widgets.',
      icon: Settings,
      color: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      highlights: ['LLM Chatflow orchestration', 'Cognitive Search integration', 'Vector database configuration', 'API, SDK & Widget exports']
    },
    {
      id: 'compliance',
      title: 'Compliance & Regulatory Data Structuring',
      badge: 'Deterministic Reasoning',
      description: 'Building deterministic-plus-agentic systems that ingest and structure regulatory content (codes, directives, bulletins, standards) so it can be reasoned over reliably — the common architecture behind Aptiv8\'s compliance chatbots, fire-safety mentor, and MRO compliance agents.',
      icon: ShieldCheck,
      color: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      highlights: ['Regulatory content ingestion', 'BCA code mapping', 'Fire-safety mentor backend', 'MRO compliance integration']
    }
  ];

  const services = dbServices.length > 0
    ? dbServices.map(s => ({
        id: s.service_id,
        title: s.title,
        badge: s.badge,
        description: s.description,
        icon: iconMap[s.service_id] || Users,
        color: s.color || 'from-blue-500 to-cyan-500',
        image: s.image,
        highlights: s.highlights ? s.highlights.split(',') : []
      }))
    : servicesStatic;

  return (
    <div className="relative pt-20 overflow-hidden">

      {/* 1. HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)]"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/60 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center">
          {/* Subtitle in Red uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-bold font-mono tracking-[0.25em] text-[#ef4444] uppercase mb-4 block"
          >
            CAPABILITIES & DELIVERABLES. CO-DEVELOPMENT PARTNERSHIP.
          </motion.span>

          {/* Main Headline in Times New Roman with White and Neon Red */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Services <span className="text-[#ef4444]">Aptiv8</span> Offers
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We partner with industry leaders to design, scope, structure, and bundle advanced Generative AI and Agentic AI architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Get Started Red Button */}
            <a 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#e30613] hover:bg-white text-white hover:text-[#e30613] font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>

            {/* Explore Solutions Transparent Outline Button */}
            <a 
              href="/solutions" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center"
            >
              Explore Solutions
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES LIST */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-20">
            {services.map((svc, idx) => {
              const IconComponent = svc.icon;
              const isEven = idx % 2 === 0;

              return (
                <Reveal3D key={svc.id}>
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>

                    {/* Visual Container (Displays Service Image) */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border-color shadow-lg group">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${svc.color} text-white shadow-md`}>
                            <IconComponent className="h-6 w-6" />
                          </div>
                          <span className="text-white text-sm font-bold font-display tracking-wider">
                            {svc.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Container (Displays Description in a Bouncing Card) */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <motion.div
                        whileHover={{
                          y: [0, -12, 0],
                          transition: {
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                        className="bg-bg-secondary border border-border-color rounded-3xl p-8 shadow-sm hover:border-accent hover:shadow-lg transition-all duration-300 relative group cursor-pointer"
                      >
                        <h4 className="text-xs uppercase tracking-widest text-accent font-bold mb-3 flex items-center gap-2">
                          <Cpu className="h-4 w-4" /> Service Breakdown
                        </h4>

                        <h3 className="text-xl md:text-2xl font-bold font-display text-text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                          {svc.title}
                        </h3>

                        <p className="text-text-secondary leading-relaxed mb-6 text-xs md:text-sm">
                          {svc.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border-color/60">
                          {svc.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              <span className="text-xs text-text-primary font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                  </div>
                </Reveal3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
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
              Co-Develop Your AI Pipeline
            </h2>
            <p className="text-text-secondary dark:text-blue-100/70 group-hover:text-blue-100/70 dark:group-hover:text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm transition-colors duration-500">
              Schedule an advisory audit or discuss co-development opportunities for your proprietary workflows.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent dark:bg-[#D4AF37] text-white dark:text-[#0b1528] group-hover:bg-[#D4AF37] dark:group-hover:bg-accent group-hover:text-[#0b1528] dark:group-hover:text-white rounded-full font-semibold transition-all duration-500 shadow-lg group-hover:shadow-accent-glow"
            >
              Start Your Advisory Engagement <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Reveal3D>
      </section>

    </div>
  );
}
