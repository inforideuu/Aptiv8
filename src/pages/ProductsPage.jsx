import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, LayoutGrid, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import { svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');

  const productsList = [
    // Built Environment — Planning & Design
    {
      id: 'compliance-chatbot',
      title: 'Gen AI Chatbot & Assistant for Regulatory and Codes Compliance',
      category: 'Planning & Design',
      status: 'Proof-of-concept completed',
      description: 'Helps consultants navigate 6,300+ rules, regulations, codes and circulars across seven government agencies under Singapore\'s CORENET X digital submission regime — retrieving, interpreting and contextualizing relevant clauses to reduce Plan Reject Letters.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'fire-safety-advisor',
      title: 'Gen AI Specialist Advisor for Fire Safety and Protection Compliance',
      category: 'Planning & Design',
      status: 'Exploring with partner',
      description: 'A mentor-style tool guiding project teams through SCDF fire-safety regulatory requirements, reflecting real enforcement practice rather than a literal code reading. Anchored by a former SCDF Director of Fire Safety.',
      image: 'gen_ai.png'
    },
    {
      id: 'open-bim-agent',
      title: 'Gen AI Agent for Open BIM Standardized Data Management',
      category: 'Planning & Design',
      status: 'Proof-of-concept completed',
      description: 'Automates mapping of native BIM data to the IFC-SG schema and validates it against Design Gateway submission requirements under CORENET X, extending to other Open BIM standards and Model Content Requirements (MCRs).',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'pe-ge-checker-mentor',
      title: 'Gen AI Mentor for Professional Engineers, Geotechnical Engineers and Accredited Checkers',
      category: 'Planning & Design',
      status: 'Seeking partners',
      description: 'Combines CORENET X submission-process coaching with technical guidance grounded in the Eurocodes and Singapore National Annexes, for structural and geotechnical designs.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'greensip',
      title: 'GreenSIP — Green Mark Sustainability Intelligence Platform',
      category: 'Planning & Design',
      status: 'Phase 1 live; Phase 2 in progress',
      description: 'Extends Aptiv8\'s Sustainable Design Smart Advisor (SDSA) into a full BCA Green Mark V7 co-pilot, with a Malaysia market extension (GreenRE, MyCREST, GBI) planned. Seeking SIT POD as engineering delivery partner.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sdsa',
      title: 'Sustainability Design Smart Advisor (SDSA)',
      category: 'Planning & Design',
      status: 'Video in production',
      description: 'The design-stage sustainability advisor underpinning Green Mark Sustainability Intelligence Platform; a video is being produced for BEXAsia 2026.',
      image: '/sdsa.png'
    },

    // Built Environment — Pre-Construction
    {
      id: 'bid-tender-prep',
      title: 'AI Assistant for Bid Preparation & Tender Evaluation',
      category: 'Pre-Construction',
      status: 'In development',
      description: 'Helps contractors assemble compliant, competitive bids and helps clients/consultants evaluate submissions fairly against technical and commercial criteria.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'specs-manager',
      title: 'AI Assistant for Managing Specifications',
      category: 'Pre-Construction',
      status: 'Conceptual stage',
      description: 'Helps draft, cross-check and maintain construction and FM specifications, flagging inconsistencies and supporting handover of specification intent into FM contracts.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    },

    // Built Environment — Construction
    {
      id: 'site-supervisor-assistant',
      title: 'Site Supervisor / Manager Assistant',
      category: 'Construction',
      status: 'Active',
      description: 'Supports workplace safety and health (WSH), safety monitoring, and productivity on site (e.g. real-time logistics, hazard detection from live video, weather-impact prediction).',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },

    // Built Environment — Operations & Maintenance
    {
      id: 'cryotos-cortex-cmms',
      title: 'Cryotos — Agentic AI-Powered CMMS Platform',
      category: 'Operations & Maintenance',
      status: 'Advisory roadmap completed',
      description: 'Adds an agentic AI layer to Cryotos, Aptiv8\'s CMMS already live across 200+ sites and 2,000+ users. An orchestrator directs nine specialist agents — work-order triage, asset onboarding, vendor/inventory reconciliation, compliance & certification tracking, predictive maintenance, energy monitoring, technician troubleshooting copilot, multilingual document parsing, and a conversational FM assistant — each with a human-approval checkpoint by default. Hosted within Cryotos\' Singapore-based, CSA-STAR-certified AWS environment.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cmms-integration',
      title: 'Gen AI Integration with CMMS',
      category: 'Operations & Maintenance',
      status: 'Under direct development',
      description: 'Three components: a dynamic Gen AI dashboard summarizing maintenance/asset/fault data in plain language; AI-enhanced natural-language fault reporting with automatic classification and routing; and an AI knowledge-base assistant giving technicians instant access to manuals and troubleshooting guidance.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'retragreen-copilots',
      title: 'Retragreen Co-Pilots for Smart Energy Management & Thermal Comfort Optimization',
      category: 'Operations & Maintenance',
      status: 'Videos available',
      description: 'Optimizes thermal comfort and smart energy management. Short YouTube demonstration videos are already available.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dragonfly-controller',
      title: 'Dragonfly — Robotic Mosquito Controller',
      category: 'Operations & Maintenance',
      status: 'Marketed by Uniqix',
      description: 'A robotic solution for vector control. Product demonstration videos and brochure are already available. Marketed by Uniqix, our sister company.',
      image: 'dragon.png'
    },
    {
      id: 'mro-ai-aero',
      title: 'MRO AI (Aeronautics Proof-of-concept)',
      category: 'Operations & Maintenance',
      status: 'Proof-of-concept completed',
      description: 'Specialist aviation maintenance, repair, and overhaul compliance system. See also the dedicated Aerospace MRO solution under other sectors.',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sor-pricing',
      title: 'AI Assistant for SOR (Schedule of Rates) Pricing and Bid Preparation',
      category: 'Operations & Maintenance',
      status: 'Video planned',
      description: 'Automates pricing evaluation and schedule of rates calculations. Demonstration video is planned.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    },

    // Built Environment — Real Estate
    {
      id: 'strata-assistant',
      title: 'Strata Title & Maintenance Management Assistant',
      category: 'Real Estate',
      status: 'Exploratory stage',
      description: 'Supports Managing Agents with drafting notices/correspondence, tracking maintenance schedules and by-law compliance, and resolving common subsidiary-proprietor queries. Conducted with a leading Managing Agent.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'lease-assistant',
      title: 'Lease Management Assistant (incorporating Green Lease and Out-fitting)',
      category: 'Real Estate',
      status: 'Seeking partners',
      description: 'Tracks landlord/tenant obligations, flags upcoming lease events, and supports Green Lease clause administration.',
      image: '/lead.png'
    },

    // Other Sectors — Customer Service, Telco, Hospitality, Aerospace
    {
      id: 'customer-service-ai',
      title: 'Autonomous AI Customer Service (multi-channel AI Concierge)',
      category: 'Other Sectors',
      status: 'Production-ready',
      description: 'Autonomous AI agents handling customer chat, voice, and email across industries — instant resolution of routine requests, with escalation to a human for what needs one. Positioned around industry data showing $350B spent annually on CX labor versus $50B on CX technology, with clear opportunity to automate routine tasks and reallocate resources.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'telco-support-concierge',
      title: 'AI Concierge for Telco Mobile Support',
      category: 'Other Sectors',
      status: 'Production-ready',
      description: 'A conversational concierge handling mobile plan guidance, network troubleshooting/support, personalized upgrade and add-on recommendations, and general account support — designed as a starting-point framework for a telco\'s own AI Agent Services Concierge.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'airbnb-rental-ecosystem',
      title: 'AI Agent Ecosystem for Airbnb-style Short-Term Rentals',
      category: 'Other Sectors',
      status: 'Production-ready',
      description: 'Six coordinated agents: Guest Interaction Agent (24/7 concierge), Dynamic Pricing Agent (nightly-rate optimization), Smart Listing Agent (high-conversion listing generation), Host Operations Agent (back-office automation), Guest Experience Agent (stay/review enhancement), and Compliance Agent (regulatory adherence).',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'aerospace-mro-agent',
      title: 'AI Agent for Aerospace MRO (Maintenance, Repair and Overhaul)',
      category: 'Other Sectors',
      status: 'Production-ready',
      description: 'A suite of specialist agents — Compliance Ingestion & Classification, Aircraft Data & Scheduling, Work Card Generation, Inventory & Parts Forecasting, Technician Assistant, Compliance Closure & Audit, Reporting & Analytics, and Knowledge/Chatbot — addressing high fleet complexity, frequent regulatory updates (CAAM, with FAA/EASA for international operations), manual work-card generation, and compliance-gap risk in MRO operations.',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = [
    'All',
    'Planning & Design',
    'Pre-Construction',
    'Construction',
    'Operations & Maintenance',
    'Real Estate',
    'Other Sectors'
  ];

  const filteredProducts = filter === 'All' 
    ? productsList 
    : productsList.filter(p => p.category === filter);

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
            Built Environment Ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            Our AI Products Suite
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Enterprise software solutions purpose-built for smart infrastructure engineering, design checking, and asset operation.
          </p>
        </motion.div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="py-8 bg-bg-primary border-b border-border-color sticky top-20 z-20 backdrop-blur-md bg-bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-accent text-white shadow-md'
                  : 'bg-bg-secondary text-text-secondary border border-border-color hover:border-accent/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCTS BENTO GRID */}
      <section className="py-16 px-4 bg-bg-primary">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            
            <motion.div 
              layout 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((prod) => (
                  <motion.div
                    key={prod.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <Card
                      image={prod.image}
                      category={prod.category}
                      title={prod.title}
                      status={prod.status}
                      description={prod.description}
                      onClick={() => {}}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </Reveal3D>
      </section>

      {/* UNDERLYING PLATFORM / TECHNOLOGY SECTION */}
      <section className="py-24 px-4 bg-bg-secondary border-t border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                Technology Architecture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
                Underlying Platform & Technology
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                The enterprise foundation powering all Aptiv8 custom-trained agents, low-code orchestrations, and secure cloud operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ 
                  y: [0, -10, 0],
                  backgroundColor: '#ffffff',
                  borderColor: 'rgba(239, 68, 68, 0.8)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-bg-primary p-8 rounded-3xl border border-border-color transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-bold font-display text-text-primary mb-4 group-hover:text-slate-900 transition-colors">Aptiv8 GenAI Low-Code Platform</h3>
                <ul className="space-y-4 text-xs text-text-secondary group-hover:text-slate-600 transition-colors">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Chatflow Orchestration:</strong> LLM orchestration connecting models with custom memory, data loaders, caching layers, and moderation guardrails.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Agents & Assistants:</strong> Autonomous agent models utilizing custom external tools, OpenAI Assistant API, and functional routing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Developer Toolkits:</strong> Developer-friendly APIs, SDK integrations, and secure embeddable chat widgets for client web apps.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ 
                  y: [0, -10, 0],
                  backgroundColor: '#ffffff',
                  borderColor: 'rgba(239, 68, 68, 0.8)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-bg-primary p-8 rounded-3xl border border-border-color transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-bold font-display text-text-primary mb-4 group-hover:text-slate-900 transition-colors">Platform-Agnostic Deployment</h3>
                <ul className="space-y-4 text-xs text-text-secondary group-hover:text-slate-600 transition-colors">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Open-Source LLMs:</strong> Native support for models like Llama 2, Mistral, Vicuna, Orca, and Llava hosted via HuggingFace, Ollama, LocalAI, or Replicate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Infrastructure Sovereignty:</strong> Secure self-hosting configurations across AWS, Microsoft Azure, or Google Cloud.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Air-Gapped Deployments:</strong> Fully isolated local hosting solutions for secure defense, public government, or enterprise requirements.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                whileHover={{ 
                  y: [0, -10, 0],
                  backgroundColor: '#ffffff',
                  borderColor: 'rgba(239, 68, 68, 0.8)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)'
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-bg-primary p-8 rounded-3xl border border-border-color transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-bold font-display text-text-primary mb-4 group-hover:text-slate-900 transition-colors">Enterprise Architecture Components</h3>
                <ul className="space-y-4 text-xs text-text-secondary group-hover:text-slate-600 transition-colors">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Cognitive Retrieval:</strong> Vector/graph database engines and Cognitive Search for grounding models in enterprise manuals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Fine-Tuning Services:</strong> Custom fine-tuning and training services supporting specialized domain models (e.g. MRO, Fleet, and Work Order Domain Models).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-slate-900 transition-colors">Guardrail Services:</strong> Advanced prompt validation, safety boundaries, PII redactors, and token optimization filters.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* FOOTER ACTION BANNER */}
      <section className="py-20 px-4 bg-bg-secondary text-center border-t border-border-color">
        <Reveal3D>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-display text-text-primary mb-4">
              Custom Local Dataset Training
            </h2>
            <p className="text-text-secondary text-sm mb-8 leading-relaxed max-w-lg mx-auto">
              We provide private sandboxed deployments configured with custom datasets, giving architecture firms full model data sovereignty.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white hover:bg-accent-hover rounded-full font-semibold transition-all shadow-md"
            >
              Request Sandbox Trial <ArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </Reveal3D>
      </section>

    </div>
  );
}
