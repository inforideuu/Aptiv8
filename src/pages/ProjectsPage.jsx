import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, Building, Globe, Video, Cpu, Sparkles, ArrowRight, SlidersHorizontal, ChevronDown, ChevronRight
} from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const [dbProjects, setDbProjects] = useState([]);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/cms/');
        if (response.ok) {
          const data = await response.json();
          setDbProjects(data.projects || []);
        }
      } catch (err) {
        console.error('Error fetching CMS projects:', err);
      }
    };
    fetchProjects();
  }, []);

  const categories = [
    { name: 'All', icon: LayoutGrid, value: 'All' },
    { name: 'Built Environment', icon: Building, value: 'Built Environment' },
    { name: 'Public & Other Sectors', icon: Globe, value: 'Public & Other Sectors' },
    { name: 'Media & Storyboards', icon: Video, value: 'Media & Storyboards' }
  ];

  const projectsData = [
    {
      id: 'a8-ai-powered-cmms',
      title: 'A8 AI Powered CMMS',
      category: 'Built Environment',
      status: 'Cost Saving',
      description: 'Aptiv8\'s Computerized Maintenance Management System, empowering data-driven transition for the advanced A8 AI Powered CMMS asset lifecycle.',
      clientIndustry: 'Government (BCA, JTC, HDB), Data Centre, Building (TEL, XJE, ELTE, RP, Tampines Express) Contractors (MURP, Lum Chang)',
      keyFeatures: 'Analyzing maintenance documents, pilot projects proposed for technology reference identification',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'akira-datacenter',
      title: 'Akira – Data Centre Design Assistant',
      category: 'Built Environment',
      status: 'Design',
      description: 'Gen AI assistant specifically tailored for optimizing and efficiently accelerating complex data centre layout and technical designs.',
      clientIndustry: 'Design Consultants / Tier Certified Cloud',
      keyFeatures: 'When online (Natural) on-standby or standby on optional',
      image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'compliance-chatbot',
      title: 'Compliance Chatbot',
      category: 'Built Environment',
      status: 'Future Ready',
      description: 'An AI assistant with Generative AI for immersive and verify design against authority rules under Singapore\'s CORENET X system.',
      clientIndustry: 'BCA / Consultants / AEC works Singapore',
      keyFeatures: 'No inequalities reference identified',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'sdsa-beamp',
      title: 'BEAMP Cycle & Challenge – Sustainability Design Smart Advisor (SDSA)',
      category: 'Built Environment',
      status: 'Featured Solution',
      description: 'Developing sustainability advisor embodiment into the existing BEAMP Cycle & Challenge to enhance Green Mark transitional assessments.',
      clientIndustry: 'Built Environment sustainability consultants',
      keyFeatures: 'New rules to be produced for BEXAsia 2024',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'dragonfly',
      title: 'Dragonfly',
      category: 'Built Environment',
      status: 'Cost Saving',
      description: 'Robotic Mosquito Controller — a vision-of-record robotic solution for intelligent vector control used in modern rental residential 0buildings, designed to automate monitoring, detection, targeted intervention',
      clientIndustry: 'Building Management / Facilities Management (FM)',
      keyFeatures: 'When already available',
      image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-powered-cmms',
      title: 'AI-Powered CMMS',
      category: 'Built Environment',
      status: 'High Performance',
      description: 'Advanced version process of A8 AI Powered CMMS on a wider IoT platform, with integration of Real Time and Thermal Comfort Management Corporation.',
      clientIndustry: 'Built Environment / Facilities Management (FM)',
      keyFeatures: 'When on the cloud. No alter where now considered value to pipeline',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'public-sector-cs',
      title: 'Public Sector Customer Service Center',
      category: 'Public & Other Sectors',
      status: 'Digital',
      description: 'AI-powered customer service platform integrated into a public sector service centres to enhance efficiency, engagement and resident satisfaction.',
      clientIndustry: 'Public sectors / Centralized Operations',
      keyFeatures: 'No inequalities reference identified',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ai-value-be-video',
      title: '"AI Value for the Built Environment" Video',
      category: 'Media & Storyboards',
      status: 'Insights & Analytics',
      description: 'A 60–100 second brand video and storyboard production showcasing how AI, Data Engineering, Crypto + Token + ComplyDrive + CMMS drive solution.',
      clientIndustry: 'Prospective new development partners and clients across APAC',
      keyFeatures: 'Production-ready script & storyboard document',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'gen-ai-other-sectors-video',
      title: '"Gen AI for Other Sectors" Video',
      category: 'Media & Storyboards',
      status: 'Why Aptiv8',
      description: 'AI showcase brand video for Agriculture and Advanced Tech & Creative (Advertise / Short-Film Festival), and Aerospace MRO Agents.',
      clientIndustry: 'Customer service, Sales, Hospitality, Cloud tech core market, Aviation & Aerospace (MRO)',
      keyFeatures: 'Production-ready script & storyboard document',
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const projects = dbProjects.length > 0
    ? dbProjects.map(p => ({
        id: p.project_id,
        title: p.title,
        category: p.category,
        status: p.status,
        description: p.description,
        clientIndustry: p.client_industry,
        keyFeatures: p.key_features,
        image: p.image
      }))
    : projectsData;

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="relative pt-20 pb-16 bg-bg-primary">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full mb-12"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark blue/black overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          {/* Subtitle in Gold/Amber uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            REALIZED PROJECTS. AI IMPACT IN ACTION.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Our Featured Projects
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Explore case studies and live deployments where our specialized AI solutions optimize and accelerate built environment workflows.
          </motion.p>
        </div>
      </section>

      {/* 1. FILTER CONTROLS (Dropdown) */}
      
        <div className="max-w-7xl mx-auto px-4 flex justify-end ">
          <div className="relative">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:border-[#e30613] hover:text-[#e30613] shadow-sm hover:shadow-md cursor-pointer border border-border-color rounded-2xl"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter: {filter}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-30 p-2 overflow-hidden"
                >
                  {categories.map(cat => {
                    const IconComponent = cat.icon;
                    const isActive = filter === cat.value;

                    return (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setFilter(cat.value);
                          setIsOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#e30613] text-white font-extrabold'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                      >
                        <IconComponent className="h-4 w-4 shrink-0" />
                        <span>{cat.name}</span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      

      {/* 2. PROJECTS GRID */}
      <section className="py-16 px-4">
  <Reveal3D>
    <div className="max-w-7xl mx-auto">
      
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
          Our Projects Portfolio
        </h2>
        <p className="text-text-secondary max-w-md mx-auto text-sm">
          Explore our completed works, co-development pilots, and custom-trained AI integrations.
        </p>
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">

          {filteredProjects.map((proj, idx) => {
            const isSDSA = proj.id === 'sdsa-beamp';

            return (
              <motion.article
                key={proj.id}
                layout
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.98
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  scale: 0.97
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.04
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  e.currentTarget.style.setProperty(
                    '--mouse-x',
                    `${x}px`
                  );

                  e.currentTarget.style.setProperty(
                    '--mouse-y',
                    `${y}px`
                  );
                }}
                className={`
                  group
                  relative
                  flex
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  bg-white
                  dark:bg-bg-primary
                  transition-all
                  duration-700

                  ${
                    isSDSA
                      ? `
                        border-red-500/60
                        shadow-[0_15px_50px_rgba(239,68,68,0.10)]
                      `
                      : `
                        border-slate-200
                        dark:border-slate-800
                        hover:border-red-500/30
                      `
                  }

                  hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)]
                  dark:hover:shadow-[0_25px_70px_rgba(0,0,0,0.30)]
                `}
              >

                {/* =========================================
                    CURSOR FOLLOWING RED LIGHT
                ========================================== */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-30
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                  style={{
                    background:
                      'radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.10), transparent 45%)'
                  }}
                />


                {/* =========================================
                    PROJECT VISUAL
                ========================================== */}
                <div
                  className={`
                    relative
                    h-[220px]
                    overflow-hidden
                    ${
                      isSDSA
                        ? 'bg-red-50 dark:bg-red-950/20'
                        : 'bg-slate-100 dark:bg-slate-900'
                    }
                  `}
                >

                  {/* Background architectural grid */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-[0.045]
                      dark:opacity-[0.08]
                      pointer-events-none
                    "
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(0,0,0,0.7) 1px,
                          transparent 1px
                        ),
                        linear-gradient(
                          90deg,
                          rgba(0,0,0,0.7) 1px,
                          transparent 1px
                        )
                      `,
                      backgroundSize: '32px 32px'
                    }}
                  />

                  {/* Large project number */}
                  <span
                    className="
                      absolute
                      top-5
                      left-6
                      z-30
                      text-[11px]
                      font-mono
                      font-bold
                      tracking-[0.25em]
                      text-white
                      drop-shadow-md
                    "
                  >
                    PROJECT / {String(idx + 1).padStart(2, '0')}
                  </span>


                  {/* Category */}
                  <span
                    className="
                      absolute
                      top-5
                      right-5
                      z-20
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/80
                      dark:bg-black/40
                      backdrop-blur-md
                      border
                      border-white/60
                      dark:border-white/10
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      font-bold
                      text-slate-700
                      dark:text-slate-200
                    "
                  >
                    {proj.category}
                  </span>

                  {isSDSA && (
                    <span className="absolute top-5 left-36 z-20 bg-accent text-white text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-lg">
                      ★ Flagship Core
                    </span>
                  )}

                  {/* Image / project visual */}
                  <div
                    className="
                      absolute
                      inset-0
                      transition-transform
                      duration-[900ms]
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:scale-110
                    "
                  >
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>


                  {/* Image gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/35
                      via-transparent
                      to-transparent
                      opacity-50
                      group-hover:opacity-70
                      transition-opacity
                      duration-700
                    "
                  />


                  {/* Bottom visual label */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-6
                      right-6
                      z-20
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        font-bold
                        text-white/80
                      "
                    >
                      Aptiv8 Intelligence
                    </span>

                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-red-500
                        shadow-[0_0_15px_rgba(239,68,68,0.8)]
                      "
                    />
                  </div>


                  {/* Image hover sweep */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-red-500
                      group-hover:w-full
                      transition-all
                      duration-[900ms]
                      ease-out
                    "
                  />

                </div>


                {/* =========================================
                    CONTENT
                ========================================== */}
                <div className="relative flex flex-col flex-1 p-5">

                  {/* Status */}
                  <div className="flex items-center justify-between mb-5">

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.18em]
                        font-bold
                        text-slate-400
                        dark:text-slate-500
                      "
                    >
                      Project Status
                    </span>

                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-[9px]
                        font-bold
                        text-red-500
                      "
                    >
                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-red-500
                          animate-pulse
                        "
                      />

                      {proj.status}
                    </span>

                  </div>


                  {/* Title */}
                  <h3
                    className="
                      text-xl
                      font-bold
                      font-display
                      tracking-tight
                      text-text-primary
                      mb-3
                      transition-transform
                      duration-500
                      group-hover:translate-x-1
                    "
                  >
                    {proj.title}
                  </h3>


                  {/* Description */}
                  <p
                    className="
                      text-sm
                      text-text-secondary
                      leading-relaxed
                      mb-6
                      line-clamp-4
                      min-h-[40px]
                    "
                  >
                    {proj.description}
                  </p>


                  {/* =========================================
                      INFORMATION
                  ========================================== */}
                  <div
                    className="
                      mt-auto
                      grid
                      grid-cols-1
                                          pt-5
                      border-t
                      border-border-color
                    "
                  >

                    <div>
                      <span
                        className="
                          block
                          text-[10px]
                          uppercase
                          tracking-wider
                          font-bold
                          text-text-primary/70
                          mb-1.5
                        "
                      >
                        Clients / Industry
                      </span>

                      <span
                        className="
                          text-xs
                          leading-relaxed
                          text-text-secondary
                          line-clamp-2
                          min-h-[40px]
                          block
                        "
                      >
                        {proj.clientIndustry}
                      </span>
                    </div>


                    <div>
                      <span
                        className="
                          block
                          text-[10px]
                          uppercase
                          tracking-wider
                          font-bold
                          text-text-primary/70
                          mb-1.5
                        "
                      >
                        Key Features
                      </span>

                      <span
                        className="
                          text-xs
                          leading-relaxed
                          text-text-secondary
                          line-clamp-2
                          min-h-[40px]
                          block
                        "
                      >
                        {proj.keyFeatures}
                      </span>
                    </div>

                  </div>


                  {/* =========================================
                      PREMIUM PROJECT LINK
                  ========================================== */}
                  <a
                    href="/contact"
                    className="
                      flex
                      items-center
                      justify-between
                      pt-3
                      border-t
                      border-slate-100
                      dark:border-slate-800
                      cursor-pointer
                      block
                    "
                  >

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        font-bold
                        text-slate-400
                        dark:text-slate-500
                        group-hover:text-red-500
                        transition-colors
                        duration-500
                      "
                    >
                      Explore Project
                    </span>


                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        border
                        border-slate-200
                        dark:border-slate-700
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        transition-all
                        duration-500

                        group-hover:bg-red-500
                        group-hover:border-red-500
                        group-hover:text-white
                      "
                    >
                      <ArrowRight
                        className="
                          h-4
                          w-4
                          transition-transform
                          duration-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-0.5
                        "
                      />
                    </div>

                  </a>

                </div>


                {/* =========================================
                    SDSA FEATURED ACCENT
                ========================================== */}
                {isSDSA && (
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      right-0
                      h-[3px]
                      bg-gradient-to-r
                      from-transparent
                      via-red-500
                      to-transparent
                    "
                  />
                )}

              </motion.article>
            );
          })}

        </AnimatePresence>
      </motion.div>

    </div>
  </Reveal3D>
</section>

    </div>
  );
}
