import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Card({ image, category, title, description, status, onClick, href = '#' }) {
  return (
    <div
      onClick={onClick}
      className="aws-card group flex flex-col h-full cursor-pointer"
    >
      {/* 60% Image Container */}
      <div className="aws-card-image-container relative">
        <img
          src={image}
          alt={title}
          className="aws-card-image w-full h-full object-cover"
        />
        {/* Animated Border Reveal on Hover */}
        <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/100 rounded-t-[23px] transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Text details */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {category && (
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-widest text-accent font-semibold font-display">
                {category}
              </span>
              {status && (
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-accent-glow text-accent border border-accent/10 font-semibold font-display truncate max-w-full">
                  {status}
                </span>
              )}
            </div>
          )}
          <h3 className="text-xl font-bold font-display text-text-primary mb-2 leading-snug group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-3">
            {description}
          </p>
        </div>

        {/* CTA arrow */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border-color/60">
          <span className="text-xs font-semibold text-accent font-display group-hover:underline">
            Explore Solution
          </span>
          <div className="p-2 rounded-full bg-bg-tertiary group-hover:bg-accent group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      {/* Bottom border reveal glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
