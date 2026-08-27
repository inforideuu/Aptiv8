import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowUpRight, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';
import { svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function IndustriesPage() {
  const industriesList = [
    {
      id: 'architecture',
      name: 'Architecture',
      image: svgs.architecture,
      overview: 'Transforming creative designs into buildable, compliant architectural models with automated regulation checks.',
      challenges: 'Manual standard verification, slow building plan approvals, and high coordination errors in design layers.',
      solutions: ['Sustainability Design Smart Advisor (SDSA)', 'Compliance Chatbot', 'Fire Safety AI Mentor'],
      caseStudy: ' Marina Bay high-rise design approvals fast-tracked by 45 days.'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      overview: 'Enhancing structural design calculations, stress modeling, and loading simulation accuracy.',
      challenges: 'Complex fatigue analyses, manual load calculation reviews, and matching design specs with raw materials parameters.',
      solutions: ['AI Mentor for Professional Engineers', 'AI Specification Manager'],
      caseStudy: 'Zero structural evacuation checks failures achieved on dense urban sites.'
    },
    {
      id: 'construction',
      name: 'Construction',
      image: svgs.construction,
      overview: 'Accelerating bid preparations, managing site materials, and optimizing quantity takeoff valuations.',
      challenges: 'Cost estimation variations, slow contract processing, and structural defects during brickwork/concrete phases.',
      solutions: ['AI Assistant for Bid Preparation', 'Open BIM AI', 'AI Specification Manager'],
      caseStudy: 'Won $42M public tender with 0.8% cost takeoff variance.'
    },
    {
      id: 'facilities-management',
      name: 'Facilities Management',
      image: svgs.operations,
      overview: 'Deploying sensory twin analytics and predictive maintenance orders to secure high facility uptime.',
      challenges: 'High reactive equipment repairs, rising energy costs, and disorganized asset manuals.',
      solutions: ['AI-Enhanced CMMS', 'Aptiv8 Cortex'],
      caseStudy: 'Reduced commercial chiller downtime by 42%, saving $160K in utilities.'
    },

    {
      id: 'real-estate',
      name: 'Real Estate',
      image: svgs.realEstate,
      overview: 'Automating unit share allocations, lease scanning review pipelines, and strata resolution logs.',
      challenges: 'Missed lease review deadlines, manual tenant paperwork, and complex strata council governance checks.',
      solutions: ['AI Lease Management', 'Strata Title Management AI'],
      caseStudy: 'Boosted portfolio revenue by 7.4% by automating lease alerts.'
    },
    {
      id: 'data-centers',
      name: 'Data Centers',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      overview: 'Predictive thermal management and continuous telemetry mapping for enterprise server farms.',
      challenges: 'High power usage effectiveness (PUE), cooling equipment failures, and strict security compliance requirements.',
      solutions: ['A8 Cortex', 'AI-Enhanced CMMS'],
      caseStudy: 'Secured smart cooling adjustments mapping server loads, decreasing PUE by 12%.'
    }
  ];

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/50 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          {/* Subtitle in Gold/Amber uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            SECTOR INNOVATION. TAILORED SYSTEMS.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Industries We Serve
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Tailored AI systems addressing specific zoning, structural safety, and operational challenges across the physical asset spectrum.
          </motion.p>
        </div>
      </section>

      {/* QUICK NAV BAR */}
      <section className="py-4 bg-bg-primary border-b border-border-color sticky top-20 z-20 backdrop-blur-md bg-bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center scrollbar-none">
          {industriesList.map(ind => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="px-4 py-2 bg-bg-secondary text-text-secondary border border-border-color hover:border-accent rounded-full text-xs font-semibold uppercase transition-colors"
            >
              {ind.name}
            </a>
          ))}
        </div>
      </section>

      {/* ALTERNATING INDUSTRIES LIST */}
      <section className="bg-bg-primary">
        <Reveal3D>
          {industriesList.map((ind, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={ind.id}
              id={ind.id}
              className="py-24 px-4 border-b border-border-color last:border-b-0 bg-bg-secondary/40 odd:bg-bg-primary/20 scroll-mt-32"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image Section (Alternating placement) */}
                <div className={`lg:col-span-6 overflow-hidden rounded-[32px] border border-border-color shadow-lg aspect-[16/10] relative group ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  <img src={ind.image} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest font-semibold bg-accent px-3 py-1 rounded-full">
                      Built Environment
                    </span>
                    <h3 className="text-2xl font-bold font-display mt-2">{ind.name}</h3>
                  </div>
                </div>

                {/* Details Section wrapped in Card with 3D hover border and slow bounce */}
                <motion.div 
                  whileHover={{ 
                    y: [0, -8, 0]
                  }}
                  transition={{
                    y: {
                      repeat: Infinity,
                      duration: 1.6,
                      ease: "easeInOut"
                    }
                  }}
                  className={`lg:col-span-6 p-8 bg-bg-primary hover:bg-white border border-border-color rounded-[24px] shadow-sm hover:shadow-[0_15px_30px_rgba(239,68,68,0.15),_0_5px_0_0_#ef4444] hover:border-red-500 transition-all duration-300 flex flex-col gap-6 cursor-default ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <h2 className="text-3xl font-bold font-display text-text-primary mb-3">
                      {ind.name}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {ind.overview}
                    </p>
                  </div>

                  {/* Challenge block */}
                  <div className="p-5 bg-bg-secondary border border-border-color rounded-2xl">
                    <h4 className="text-xs uppercase tracking-wider font-bold text-red-500 mb-1 flex items-center gap-1.5">
                      <HelpCircle className="h-4 w-4" /> Core Challenges
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {ind.challenges}
                    </p>
                  </div>

                  {/* Recommended solutions */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-text-primary mb-3 flex items-center gap-1.5">
                      <Layers className="h-4 w-4 text-accent" /> Recommended AI Modules
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {ind.solutions.map((sol, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs text-text-secondary">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                          {sol}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mapped Case Study */}
                  <div className="pt-6 border-t border-border-color/60 flex items-start gap-3">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent-glow px-2.5 py-1 rounded-md shrink-0">
                      Success Case
                    </span>
                    <p className="text-xs text-text-secondary italic">
                      "{ind.caseStudy}"
                    </p>
                  </div>

                </motion.div>

              </div>
            </section>
          );
        })}
        </Reveal3D>
      </section>

    </div>
  );
}
