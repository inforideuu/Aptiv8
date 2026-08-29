import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, LayoutGrid, CheckCircle, ChevronRight, Play, Video } from 'lucide-react';
import Card from '../components/Card';
import { svgs, productsList, showcasesList } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [dbProducts, setDbProducts] = useState([]);
  const [dbShowcases, setDbShowcases] = useState([]);

  React.useEffect(() => {
    const fetchCmsData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/cms/');
        if (response.ok) {
          const data = await response.json();
          setDbProducts(data.products || []);
          setDbShowcases(data.showcases || []);
        }
      } catch (err) {
        console.error('Error fetching CMS data:', err);
      }
    };
    fetchCmsData();

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      }
    }
  }, []);

  const categories = [
    'All',
    'Planning & Design',
    'Pre-Construction',
    'Construction',
    'Operations & Maintenance',
    'Real Estate',
    'Other Sectors'
  ];

  const mergedProductsMap = {};
  productsList.forEach(p => {
    mergedProductsMap[p.id] = p;
  });
  dbProducts.forEach(p => {
    mergedProductsMap[p.product_id] = {
      id: p.product_id,
      title: p.title,
      category: p.category,
      status: p.status,
      description: p.description,
      image: p.image
    };
  });
  const products = Object.values(mergedProductsMap).filter(p => p.title !== '__DELETED__');

  const filteredProducts = filter === 'All'
    ? products
    : products.filter(p => p.category === filter);

  const mergedShowcasesMap = {};
  showcasesList.forEach(s => {
    mergedShowcasesMap[s.title] = s;
  });
  dbShowcases.forEach(s => {
    mergedShowcasesMap[s.title] = s;
  });
  const showcases = Object.values(mergedShowcasesMap).filter(s => s.video !== '__DELETED__' && s.title !== '__DELETED__');

  return (
    <div className="relative pt-20">

      {/* HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1600&q=80')" }}
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
            INTELLIGENT AGENTS. ROBUST ECOSYSTEM.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Our AI Products Suite
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Enterprise software solutions purpose-built for smart infrastructure engineering, design checking, and asset operation.
          </motion.p>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="py-8 bg-bg-primary border-b border-border-color sticky top-20 z-20 backdrop-blur-md bg-bg-primary/80">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-2 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${filter === cat
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
                      isCoreProduct={prod.id === 'sdsa'}
                      href="/contact"
                      onClick={() => { }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>
        </Reveal3D>
      </section>

      {/* VIDEO SHOWCASE SECTION */}
      <section id="other-sectors" className="py-24 px-4 bg-bg-primary border-t border-border-color scroll-mt-24">
        <Reveal3D>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3 block font-display">
                AI Solutions in Action
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-text-primary mb-4">
                AI Solutions for other Sectors
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
                Experience our specialized generative AI workflows and platform features in real-world scenarios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {showcases.map((showcase, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-bg-secondary via-bg-secondary to-bg-tertiary/40 border border-border-color/80 hover:border-accent/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(239,68,68,0.06)] hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between"
                >
                  <div>
                    {/* Video Player */}
                    <div className="relative aspect-video bg-black overflow-hidden border-b border-border-color/50">
                      <video
                        src={showcase.video}
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover"
                        poster={showcase.poster}
                      />
                      <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider font-bold flex items-center gap-1.5">
                        <Video className="h-3 w-3 text-accent" /> Video Demo
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                        {showcase.category}
                      </span>
                      <h3 className="text-xl font-bold font-display text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                        {showcase.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {showcase.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle Interactive Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-border-color/30">
                    <span className="text-xs font-semibold text-text-secondary group-hover:text-accent transition-colors">
                      Interactive Showcase
                    </span>
                    <Play className="h-4 w-4 text-text-secondary/50 group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              ))}
            </div>
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
                  y: [0, -10, 0]
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-bg-primary p-8 rounded-3xl border border-border-color hover:bg-bg-secondary hover:border-accent hover:shadow-lg dark:hover:shadow-[0_20px_40px_rgba(255,59,71,0.08)] transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-bold font-display text-text-primary mb-4 group-hover:text-accent transition-colors">Aptiv8 GenAI Low-Code Platform</h3>
                <ul className="space-y-4 text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Chatflow Orchestration:</strong> LLM orchestration connecting models with custom memory, data loaders, caching layers, and moderation guardrails.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Agents & Assistants:</strong> Autonomous agent models utilizing custom external tools, OpenAI Assistant API, and functional routing.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Developer Toolkits:</strong> Developer-friendly APIs, SDK integrations, and secure embeddable chat widgets for client web apps.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{
                  y: [0, -10, 0]
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-bg-primary p-8 rounded-3xl border border-border-color hover:bg-bg-secondary hover:border-accent hover:shadow-lg dark:hover:shadow-[0_20px_40px_rgba(255,59,71,0.08)] transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-bold font-display text-text-primary mb-4 group-hover:text-accent transition-colors">Platform-Agnostic Deployment</h3>
                <ul className="space-y-4 text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Open-Source LLMs:</strong> Native support for models like Llama 2, Mistral, Vicuna, Orca, and Llava hosted via HuggingFace, Ollama, LocalAI, or Replicate.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Infrastructure Sovereignty:</strong> Secure self-hosting configurations across AWS, Microsoft Azure, or Google Cloud.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Air-Gapped Deployments:</strong> Fully isolated local hosting solutions for secure defense, public government, or enterprise requirements.</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{
                  y: [0, -10, 0]
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-bg-primary p-8 rounded-3xl border border-border-color hover:bg-bg-secondary hover:border-accent hover:shadow-lg dark:hover:shadow-[0_20px_40px_rgba(255,59,71,0.08)] transition-all duration-300 group cursor-pointer"
              >
                <h3 className="text-lg font-bold font-display text-text-primary mb-4 group-hover:text-accent transition-colors">Enterprise Architecture Components</h3>
                <ul className="space-y-4 text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Cognitive Retrieval:</strong> Vector/graph database engines and Cognitive Search for grounding models in enterprise manuals.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Fine-Tuning Services:</strong> Custom fine-tuning and training services supporting specialized domain models (e.g. MRO, Fleet, and Work Order Domain Models).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span><strong className="group-hover:text-text-primary transition-colors">Guardrail Services:</strong> Advanced prompt validation, safety boundaries, PII redactors, and token optimization filters.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Reveal3D>
      </section>

      {/* FOOTER ACTION BANNER */}
      <section className="py-20 px-4 bg-bg-secondary text-center border-t border-border-color relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_60%)] pointer-events-none" />
        <Reveal3D>
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className="group bg-white/80 dark:bg-[#0b1528] border border-red-500/50 dark:border-[#c5a880]/50 rounded-[32px] p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden hover:bg-[#0b1528] dark:hover:bg-slate-900/60 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] hover:border-red-500/50 dark:hover:border-red-500/50 transition-all duration-500 cursor-default"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-text-primary dark:text-[#D4AF37] group-hover:text-[#D4AF37] dark:group-hover:text-text-primary mb-6 transition-colors duration-500">
              Custom Local Dataset Training
            </h2>
            <p className="text-text-secondary dark:text-blue-100/70 group-hover:text-blue-100/70 dark:group-hover:text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm transition-colors duration-500">
              We provide private sandboxed deployments configured with custom datasets, giving architecture firms full model data sovereignty.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent dark:bg-[#D4AF37] text-white dark:text-[#0b1528] group-hover:bg-[#D4AF37] dark:group-hover:bg-accent group-hover:text-[#0b1528] dark:group-hover:text-white rounded-full font-semibold transition-all duration-500 shadow-lg group-hover:shadow-accent-glow"
            >
              Request Sandbox Trial <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Reveal3D>
      </section>

    </div>
  );
}
