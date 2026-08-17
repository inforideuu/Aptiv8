import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowUpRight, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';
import { svgs } from '../data/websiteData';

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
      solutions: ['AI-Enhanced CMMS', 'Cryotos Cortex'],
      caseStudy: 'Reduced commercial chiller downtime by 42%, saving $160K in utilities.'
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      image: svgs.infrastructure,
      overview: 'Monitoring public roadways, bridges, transit lines, and deep foundations using continuous AI telemetry.',
      challenges: 'Long inspection intervals, micro-crack fatigue detection, and coordinate data streams from public sensors.',
      solutions: ['Cryotos Cortex', 'Open BIM AI'],
      caseStudy: 'Real-time fatigue updates configured on concrete highway supports.'
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
      solutions: ['Cryotos Cortex', 'AI-Enhanced CMMS'],
      caseStudy: 'Secured smart cooling adjustments mapping server loads, decreasing PUE by 12%.'
    }
  ];

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section className="relative py-28 px-4 bg-bg-secondary border-b border-border-color overflow-hidden">
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
            Target Industries
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Tailored AI systems addressing specific zoning, structural safety, and operational challenges across the physical asset spectrum.
          </p>
        </motion.div>
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

                {/* Details Section */}
                <div className={`lg:col-span-6 flex flex-col gap-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div>
                    <h2 className="text-3xl font-bold font-display text-text-primary mb-3">
                      {ind.name}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {ind.overview}
                    </p>
                  </div>

                  {/* Challenge block */}
                  <div className="p-5 bg-bg-primary border border-border-color rounded-2xl">
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

                </div>

              </div>
            </section>
          );
        })}
      </section>

    </div>
  );
}
