import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Layers, TrendingUp, Settings, ShieldCheck, 
  ChevronRight, Sparkles, Cpu, Code2, Network, ArrowUpRight
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function ServicesPage() {
  const services = [
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
      description: 'Aptiv8 converges digital twin modelling, agentic AI (Cryotos Cortex), IoT and building-management-system (BMS) data, smart energy management (Retragreen), and thermal comfort / building performance monitoring into a single integrated operations-and-maintenance service for building owners and FM operators — moving beyond disconnected point solutions toward one converged operating layer across a building\'s operational life.',
      icon: Layers,
      color: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      highlights: ['Cryotos Cortex reasoning', 'Retragreen energy optimization', 'BMS & IoT telemetry', 'Thermal comfort monitoring']
    },
    {
      id: 'advisory',
      title: 'AI Advisory & Roadmapping',
      badge: 'Strategic Planning',
      description: 'Advisory engagements that assess an existing operational platform (e.g. a CMMS) and produce a phased AI adoption roadmap — as delivered for Cryotos Cortex — sequencing quick-win agents ahead of more complex predictive and compliance capabilities.',
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

  return (
    <div className="relative pt-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-28 px-4 hero-mesh-bg border-b border-border-color overflow-hidden">
        {/* Floating gradient blobs */}
        <motion.div
          animate={{
            y: [-20, 20, -20],
            x: [-15, 15, -15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [30, -30, 30],
            x: [20, -20, 20],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
        />

        {/* Blueprint Grid Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Pinging blueprint node lights */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-accent/60 animate-ping pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 rounded-full bg-indigo-400/60 animate-ping pointer-events-none [animation-delay:2s]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6 font-display"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Capabilities & Deliverables
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6 leading-tight"
          >
            Services Aptiv8 Offers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">
              Co-Development & Deployment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            We partner with industry leaders to design, scope, structure, and bundle advanced Generative AI and Agentic AI architectures.
          </motion.p>
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
        <Reveal3D>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-text-primary mb-6">
              Co-Develop Your AI Pipeline
            </h2>
            <p className="text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm">
              Schedule an advisory audit or discuss co-development opportunities for your proprietary workflows.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white hover:bg-accent-hover rounded-full font-semibold transition-all shadow-lg hover:shadow-accent-glow"
            >
              Start Your Advisory Engagement <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}
