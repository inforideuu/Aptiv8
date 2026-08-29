import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, FileText, Video, Calendar, ArrowRight, Eye } from 'lucide-react';
import { svgs } from '../data/websiteData';
import Reveal3D from '../components/Reveal3D';

import { API_BASE_URL } from '../config';

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [dbResources, setDbResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/cms/`);
        if (response.ok) {
          const data = await response.json();
          setDbResources(data.resources || []);
        }
      } catch (err) {
        console.error('Error fetching CMS resources:', err);
      }
    };
    fetchResources();
  }, []);

  const resources = [
    {
      id: 'res-1',
      title: 'Singapore BCA Green Mark Platinum: A Design Guide using AI Advisors',
      category: 'White Papers',
      summary: 'An in-depth guide demonstrating how model orientation variables and glass envelope ratios are checked dynamically to achieve BCA Platinum parameters.',
      image: svgs.sustainability,
      date: 'Aug 12, 2026',
      trending: true,
      featured: true,
      readTime: '12 min read'
    },
    {
      id: 'res-2',
      title: 'Automated Fire Evacuation Routing in Dense Urban Commercial Spans',
      category: 'Research Papers',
      summary: 'Research paper simulating evacuation pathing dynamically inside Autodesk layouts, flagging bottleneck exits prior to final structural approval.',
      image: svgs.fireSafety,
      date: 'Aug 08, 2026',
      trending: true,
      featured: false,
      readTime: '18 min read'
    },
    {
      id: 'res-3',
      title: 'Integrating CodeCheck API with Native Revit Workspaces',
      category: 'Tech Docs',
      summary: 'Technical documentation detailing endpoints, validation payload structures, and element mapping schemas for professional engineers.',
      image: svgs.compliance,
      date: 'Jul 28, 2026',
      trending: false,
      featured: false,
      readTime: '6 min read'
    },
    {
      id: 'res-4',
      title: 'The Future of Strata Governance: AI share valuations and Bylaws Audits',
      category: 'Articles',
      summary: 'Exploring how property managers deploy natural language models to extract unit share metrics and flag council audit anomalies.',
      image: svgs.strata,
      date: 'Jul 15, 2026',
      trending: false,
      featured: false,
      readTime: '8 min read'
    },
    {
      id: 'res-5',
      title: 'Aptiv8 Cortex Sensor Twin Integration Guidelines',
      category: 'Tech Docs',
      summary: 'How to register telemetry endpoints and connect thermal/vibration sensors directly to the active operational twin.',
      image: svgs.cortex,
      date: 'Jun 30, 2026',
      trending: true,
      featured: false,
      readTime: '10 min read'
    },
    {
      id: 'res-6',
      title: 'Securing Public Infrastructure Tenders with AI Bid Estimation',
      category: 'Insights',
      summary: 'Evaluating how bidding teams run historical takeoffs to identify pricing anomalies and cost estimations in SG GovTech proposals.',
      image: svgs.bidPrep,
      date: 'Jun 12, 2026',
      trending: false,
      featured: false,
      readTime: '5 min read'
    }
  ];

  const mapResourceSvg = (imgKey) => {
    if (imgKey === 'sustainability') return svgs.sustainability;
    if (imgKey === 'fireSafety') return svgs.fireSafety;
    if (imgKey === 'compliance') return svgs.compliance;
    if (imgKey === 'strata') return svgs.strata;
    if (imgKey === 'cortex') return svgs.cortex;
    if (imgKey === 'bidPrep') return svgs.bidPrep;
    return svgs.sustainability;
  };

  const activeResources = dbResources.length > 0
    ? dbResources.map(r => ({
        id: r.resource_id,
        title: r.title,
        category: r.category,
        summary: r.summary,
        image: mapResourceSvg(r.image),
        date: r.date,
        trending: r.trending,
        featured: r.featured,
        readTime: r.read_time
      }))
    : resources;

  const categories = ['All', 'Articles', 'White Papers', 'Research Papers', 'Tech Docs', 'Insights'];

  // Filters
  const filteredResources = activeResources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'All' || res.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const featured = filteredResources.find(r => r.featured) || filteredResources[0];
  const trendingList = filteredResources.filter(r => r.trending);

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-slate-950/75 z-0 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full flex flex-col items-center justify-center my-auto">
          {/* Subtitle in Gold/Amber uppercase */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold font-mono tracking-[0.25em] text-[#c5a880] uppercase mb-4 block"
          >
            SINGAPORE HUB & RESOURCES. INSIGHTS.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Knowledge & Insights
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            GEO-optimized publications, research papers, and technical documentations on BCA Green Mark, building codes, and AI integration.
          </motion.p>
        </div>
      </section>

      {/* SEARCH & FILTER BAR */}
      <section className="py-6 px-4 bg-bg-secondary border-b border-border-color sticky top-20 z-20 backdrop-blur-md bg-bg-secondary/90">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories Horizontal Selector */}
          <div className="flex flex-wrap gap-2 items-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-sm'
                    : 'bg-bg-primary text-text-secondary border border-border-color hover:border-accent/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full bg-bg-primary text-text-primary border border-border-color rounded-full pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-accent"
            />
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-text-secondary" />
          </div>
        </div>
      </section>

      {/* EDITORIAL CONTENT LAYOUT */}
      <section className="py-16 px-4 bg-bg-primary">
        <Reveal3D>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Main Editorial Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Featured Post (Hero Article Card) */}
            {featured && (
              <div className="bg-bg-secondary border border-border-color rounded-[32px] overflow-hidden group hover:border-accent transition-colors shadow-sm">
                <div className="aspect-[21/9] overflow-hidden relative">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-accent text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                    Featured {featured.category}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-text-secondary mb-3">
                    <span>{featured.date}</span>
                    <span>•</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-display text-text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {featured.summary}
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline uppercase tracking-wider">
                    Read Document <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}

            {/* Recently Published Resources Grid */}
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-text-secondary mb-6">
                Recently Published Resources
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredResources.filter(r => r.id !== (featured ? featured.id : null)).map(res => (
                  <div key={res.id} className="bg-bg-secondary border border-border-color rounded-3xl overflow-hidden group hover:border-accent transition-colors flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img src={res.image} alt={res.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500" />
                        <span className="absolute top-3 left-3 bg-bg-secondary/95 border border-border-color text-text-primary text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
                          {res.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-[10px] text-text-secondary mb-2">
                          <span>{res.date}</span>
                          <span>•</span>
                          <span>{res.readTime}</span>
                        </div>
                        <h4 className="font-display font-bold text-lg text-text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                          {res.title}
                        </h4>
                        <p className="text-xs text-text-secondary line-clamp-3 leading-relaxed">
                          {res.summary}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 pt-0">
                      <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline uppercase tracking-wider">
                        Read More <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {filteredResources.length === 0 && (
                <div className="text-center py-20 bg-bg-secondary border border-border-color rounded-3xl">
                  <p className="text-text-secondary text-sm">No resources match your search or filter parameters.</p>
                </div>
              )}
            </div>

          </div>

          {/* RIGHT COLUMN: Sidebar Filters & Trending */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-56 self-start">
            
            {/* Trending Resources list */}
            <div className="p-6 bg-bg-secondary border border-border-color rounded-3xl shadow-sm">
              <h4 className="font-display font-bold text-sm text-text-primary mb-6 flex items-center gap-1.5">
                <Eye className="h-4.5 w-4.5 text-accent" /> Trending Publications
              </h4>
              <div className="flex flex-col gap-6">
                {trendingList.map((tr, i) => (
                  <div key={tr.id} className="flex gap-4 items-start group cursor-pointer">
                    <span className="text-2xl font-extrabold text-accent/20 group-hover:text-accent font-display">
                      0{i + 1}
                    </span>
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-accent font-semibold">{tr.category}</span>
                      <h5 className="font-display font-bold text-xs text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2 mt-0.5">
                        {tr.title}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
        </Reveal3D>
      </section>

    </div>
  );
}

// Small UI icon helper
function CheckCircleIcon() {
  return (
    <svg className="h-4 w-4 text-accent fill-current" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
    </svg>
  );
}
