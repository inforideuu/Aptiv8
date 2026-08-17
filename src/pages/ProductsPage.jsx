import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, ArrowRight, LayoutGrid, CheckCircle } from 'lucide-react';
import Card from '../components/Card';
import { svgs } from '../data/websiteData';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');

  const productsList = [
    {
      id: 'sdsa',
      title: 'Sustainability Design Smart Advisor (SDSA)',
      category: 'Design',
      description: 'Reviews envelope thermal elements, window orientation, and mechanical systems to maximize Green Mark scoring parameters.',
      image: svgs.sustainability,
      size: 'lg'
    },
    {
      id: 'compliance',
      title: 'Compliance Chatbot',
      category: 'Design',
      description: 'Checks architectural drawings instantly against building regulatory codes and local Singapore specifications.',
      image: svgs.compliance,
      size: 'md'
    },
    {
      id: 'fire-safety',
      title: 'Fire Safety AI Mentor',
      category: 'Design',
      description: 'Models egress simulation parameters and validates ventilation regulations in complex blueprints.',
      image: svgs.fireSafety,
      size: 'sm'
    },
    {
      id: 'bim-data',
      title: 'Open BIM AI',
      category: 'Design',
      description: 'Cleanses and auto-populates metadata schemas on Revit elements to match international standard exchanges.',
      image: svgs.bimData,
      size: 'md'
    },
    {
      id: 'pe-mentor',
      title: 'AI Mentor for Professional Engineers',
      category: 'Construction',
      description: 'Advises engineers on structural loading, safety metrics, and concrete stress fatigue calculations.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      size: 'lg'
    },
    {
      id: 'bid-prep',
      title: 'AI Assistant for Bid Preparation',
      category: 'Construction',
      description: 'Parses complex public tenders to output precise quantity takeoffs, cost estimates, and risk parameters.',
      image: svgs.bidPrep,
      size: 'sm'
    },
    {
      id: 'spec-manager',
      title: 'AI Specification Manager',
      category: 'Construction',
      description: 'Automates specification formatting and coordinates building regulations changes dynamically.',
      image: svgs.specManager,
      size: 'md'
    },
    {
      id: 'cmms',
      title: 'AI-Enhanced CMMS',
      category: 'Maintenance',
      description: 'Orchestrates reactive work orders, schedules maintenance timelines, and manages parts logs.',
      image: svgs.cmms,
      size: 'lg'
    },
    {
      id: 'cortex',
      title: 'Cryotos Cortex',
      category: 'Maintenance',
      description: 'Applies deep learning models to infrastructure sensor grids, forecasting fatigue in structural concrete.',
      image: svgs.cortex,
      size: 'sm'
    },
    {
      id: 'strata',
      title: 'Strata Title Management AI',
      category: 'Real Estate',
      description: 'Manages share valuations, resident request routing, and strata council bylaw compliance audits.',
      image: svgs.strata,
      size: 'md'
    },
    {
      id: 'lease',
      title: 'AI Lease Management',
      category: 'Real Estate',
      description: 'Scans financial agreements to extract schedules, rental reviews, and occupancy projections.',
      image: svgs.lease,
      size: 'md'
    }
  ];

  const categories = ['All', 'Design', 'Construction', 'Maintenance', 'Real Estate'];

  const filteredProducts = filter === 'All' 
    ? productsList 
    : productsList.filter(p => p.category === filter);

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 bg-bg-secondary border-b border-border-color overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-glow border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6 font-display">
            Built Environment Ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            Our AI Products Suite
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Enterprise software solutions purpose-built for smart infrastructure engineering, design checking, and asset operation.
          </p>
        </div>
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
                    description={prod.description}
                    onClick={() => {}}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* FOOTER ACTION BANNER */}
      <section className="py-20 px-4 bg-bg-secondary text-center border-t border-border-color">
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
      </section>

    </div>
  );
}
