import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Network, ArrowRight, Building, Award, CheckCircle } from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: 'Technology Partners',
      description: 'Integrators extending our model distributions into Revit, IFC, and Autodesk environments.',
      partners: ['Autodesk Developer', 'Bentley Systems Dev', 'OpenAI API Network', 'Microsoft Cloud Partner']
    },
    {
      title: 'Industry Partners',
      description: 'Built Environment operators implementing smart code checking on tier-1 developments.',
      partners: ['Singapore Land Authority', 'BCA SG Registered Providers', 'Sands Expo Holdings', 'CapitalLand Group']
    },
    {
      title: 'Research & Government Initiatives',
      description: 'Academic and government agencies co-developing Green Mark and structural fatigue standards.',
      partners: ['NUS Cognitive Architecture', 'GovTech Singapore', 'IMDA SGDigital', 'A*STAR Research']
    }
  ];

  const benefits = [
    { title: 'Data Sovereignty', desc: 'Secure custom-trained local nodes deployed in private sandboxes.' },
    { title: 'BCA Compliance Sync', desc: 'Real-time updates mapped directly to Singapore regulatory code changes.' },
    { title: 'Extended Uptime', desc: 'CMMS APIs linking directly to active IoT hardware and digital twins.' }
  ];

  const stories = [
    {
      partner: 'NUS Smart Systems Lab',
      role: 'Research Collaboration',
      story: 'Collaborated with the National University of Singapore to train fire evacuation simulations on complex spatial grids, achieving absolute path compliance.',
      result: 'Evacuation simulation check time reduced by 95%.'
    },
    {
      partner: 'BIM SG Integrators',
      role: 'Technology Integration',
      story: 'Built custom API bridges that allow developers to check IFC drawings against building codes within their local CAD workspaces.',
      result: 'Launched automated CodeCheck API plugins.'
    }
  ];

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section className="relative py-28 px-4 bg-gradient-to-b from-white via-red-100 to-red-500 dark:bg-none dark:bg-bg-secondary border-b border-border-color overflow-hidden">
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
            Global Network
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            Our Partners Ecosystem
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Collaborating with leading cloud providers, government authorities, and research labs to standardise AI in construction.
          </p>
        </motion.div>
      </section>

      {/* INFINITE LOGO SLIDER */}
      <section className="py-12 bg-bg-primary border-b border-border-color overflow-hidden">
        <div className="animate-marquee flex gap-16 py-4">
          {['Autodesk Developer', 'Bentley Systems', 'NUS Research', 'GovTech SG', 'OpenAI Network', 'Microsoft Cloud', 'IMDA SGDigital', 'BCA SG'].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 font-display text-sm font-bold text-text-secondary/40 shrink-0">
              <Building className="h-5 w-5" />
              <span>{logo}</span>
            </div>
          ))}
          {['Autodesk Developer', 'Bentley Systems', 'NUS Research', 'GovTech SG', 'OpenAI Network', 'Microsoft Cloud', 'IMDA SGDigital', 'BCA SG'].map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 font-display text-sm font-bold text-text-secondary/40 shrink-0">
              <Building className="h-5 w-5" />
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS CATEGORIES GRID */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Collaborations Across the Vertical
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              We group partners into three distinct fields to streamline engineering research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerTypes.map((type, idx) => (
              <div key={idx} className="p-8 bg-bg-primary border border-border-color rounded-3xl flex flex-col justify-between group hover:border-accent transition-colors duration-300">
                <div>
                  <div className="p-3 rounded-xl bg-accent-glow text-accent w-max mb-6">
                    <Network className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-text-primary mb-3 group-hover:text-accent transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    {type.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-border-color flex flex-wrap gap-2">
                  {type.partners.map((p, i) => (
                    <span key={i} className="text-[10px] font-semibold text-text-primary bg-bg-secondary border border-border-color px-2.5 py-1 rounded-md">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* PARTNER STORIES */}
      <section className="py-24 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Partner Integration Stories
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Real-world success stories driving building innovation together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {stories.map((s, idx) => (
              <div key={idx} className="bg-bg-secondary border border-border-color rounded-3xl p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-accent font-bold mb-2 block">
                    {s.role}
                  </span>
                  <h3 className="text-xl font-bold font-display text-text-primary mb-4">
                    {s.partner}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {s.story}
                  </p>
                </div>
                <div className="pt-4 border-t border-border-color flex items-center justify-between text-xs">
                  <span className="text-text-secondary">Key Accomplishment</span>
                  <span className="font-bold text-accent">{s.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* PARTNERSHIP BENEFITS */}
      <section className="py-24 px-4 bg-bg-secondary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
              Partnership Benefits
            </h2>
            <p className="text-text-secondary max-w-md mx-auto">
              Access modular compliance suites, cloud scaling credits, and standard API frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, idx) => (
              <div key={idx} className="p-6 bg-bg-primary border border-border-color rounded-2xl">
                <h4 className="font-display font-bold text-sm text-text-primary mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4.5 w-4.5 text-accent" /> {b.title}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-bg-primary text-center">
        <Reveal3D>
          <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-text-primary mb-6">
            Accelerate city standardisation with us
          </h2>
          <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Partner with Aptiv8 to deploy specialized AI engines to your clients, enhancing design safety and regulatory checking speeds.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white hover:bg-accent-hover rounded-full font-semibold transition-all shadow-md"
          >
            Become a Partner <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
        </Reveal3D>
      </section>

    </div>
  );
}
