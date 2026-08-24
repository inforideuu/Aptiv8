import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Network, ArrowRight, Building, Award, CheckCircle, ChevronRight } from 'lucide-react';
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
    { title: 'Data Sovereignty', desc: 'Secure custom-trained local nodes deployed in private sandboxes for enhanced data privacy and enterprise security.' },
    { title: 'BCA Compliance Sync', desc: 'Real-time updates mapped directly to the latest Singapore regulatory code changes.' },
    { title: 'Extended Uptime', desc: 'CMMS APIs linking directly to active IoT hardware and real-time digital twin environments for intelligent monitoring.' }
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
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')" }}
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
            GLOBAL NETWORK. STRATEGIC COLLABORATION.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Our Partners Ecosystem
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Collaborating with leading cloud providers, government authorities, and research labs to standardise AI in construction.
          </motion.p>
        </div>
      </section>

      {/* INFINITE LOGO SLIDER */}
      <section className="py-12 bg-bg-primary border-b border-border-color overflow-hidden">
        <div className="animate-marquee flex gap-16 py-4">
          {['Autodesk Developer', 'Bentley Systems', 'NUS Research', 'GovTech SG', 'OpenAI Network', 'Microsoft Cloud', 'IMDA SGDigital', 'BCA SG'].map((logo, idx) => (
            <div key={idx} className="flex items-center gap-2 font-display text-sm font-bold text-text-secondary/40 hover:text-red-500 transition-colors shrink-0 cursor-default">
              <Building className="h-5 w-5" />
              <span>{logo}</span>
            </div>
          ))}
          {['Autodesk Developer', 'Bentley Systems', 'NUS Research', 'GovTech SG', 'OpenAI Network', 'Microsoft Cloud', 'IMDA SGDigital', 'BCA SG'].map((logo, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-2 font-display text-sm font-bold text-text-secondary/40 hover:text-red-500 transition-colors shrink-0 cursor-default">
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
    <div
      key={idx}
      className="
        group
        relative
        p-8
        bg-white
        dark:bg-bg-primary
        border
        border-border-color
        rounded-3xl
        flex
        flex-col
        justify-between
        overflow-hidden
        cursor-pointer
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
        hover:border-accent/40
      "
    >
      {/* Top animated line */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-accent
          to-transparent
          scale-x-0
          group-hover:scale-x-100
          transition-transform
          duration-700
        "
      />

      <div>
        {/* Icon */}
        <div
          className="
            p-3
            rounded-xl
            bg-accent-glow
            text-accent
            w-max
            mb-6
            border
            border-accent/10
            transition-all
            duration-500
            group-hover:bg-accent
            group-hover:text-white
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <Network className="h-6 w-6" />
        </div>

        {/* Title */}
        <h3
          className="
            font-display
            font-bold
            text-xl
            text-text-primary
            mb-3
            transition-all
            duration-300
            group-hover:text-accent
            group-hover:translate-x-1
          "
        >
          {type.title}
        </h3>

        {/* Description */}
        <p
          className="
            text-xs
            text-text-secondary
            leading-relaxed
            mb-6
          "
        >
          {type.description}
        </p>
      </div>

      {/* Partner section */}
      <div
        className="
          pt-6
          border-t
          border-border-color
          transition-colors
          duration-500
          group-hover:border-accent/30
        "
      >
        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-text-secondary
            font-bold
            block
            mb-3
          "
        >
          Partner Network
        </span>

        <div className="flex flex-wrap gap-2">
          {type.partners.map((p, i) => (
            <span
              key={i}
              className="
                text-[10px]
                font-semibold
                text-text-primary
                bg-bg-secondary
                border
                border-border-color
                px-2.5
                py-1
                rounded-md
                cursor-default
                transition-all
                duration-300
                hover:text-accent
                hover:border-accent/30
                hover:bg-accent/5
                hover:-translate-y-1
              "
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom animated line */}
      <div
        className="
          absolute
          bottom-0
          left-8
          right-8
          h-[2px]
          bg-accent
          scale-x-0
          group-hover:scale-x-100
          transition-transform
          duration-700
          origin-center
        "
      />
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

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {stories.map((s, idx) => (
      <div
        key={idx}
        className="
          group
          relative
          min-h-[330px]
          bg-white
          dark:bg-bg-secondary
          border
          border-border-color
          rounded-[28px]
          p-8
          overflow-hidden
          flex
          flex-col
          justify-between
          transition-all
          duration-700
          hover:border-accent/30
          hover:shadow-[0_30px_80px_rgba(220,38,38,0.16),0_10px_30px_rgba(220,38,38,0.08)]
        "
      >

        {/* Large background number */}
        <span
          className="
            absolute
            -top-8
            -right-3
            text-[140px]
            leading-none
            font-display
            font-black
            text-text-primary/[0.025]
            dark:text-white/[0.025]
            select-none
            pointer-events-none
            transition-all
            duration-700
            group-hover:text-accent/[0.07]
            group-hover:scale-110
          "
        >
          0{idx + 1}
        </span>


        {/* Vertical accent line */}
        <div
          className="
            absolute
            left-0
            top-8
            bottom-8
            w-[3px]
            bg-accent
            scale-y-0
            origin-bottom
            group-hover:scale-y-100
            transition-transform
            duration-700
          "
        />


        {/* Content */}
        <div className="relative z-10">

          {/* Role */}
          <div className="flex items-center gap-3 mb-5">

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-accent
                font-bold
                font-display
              "
            >
              {s.role}
            </span>

            <span
              className="
                h-px
                w-8
                bg-border-color
                group-hover:w-16
                group-hover:bg-accent/50
                transition-all
                duration-500
              "
            />

          </div>


          {/* Partner */}
          <h3
            className="
              text-2xl
              font-bold
              font-display
              text-text-primary
              mb-5
              transition-transform
              duration-500
              group-hover:translate-x-1
            "
          >
            {s.partner}
          </h3>


          {/* Story */}
          <p
            className="
              text-sm
              text-text-secondary
              leading-[1.8]
              max-w-[90%]
            "
          >
            {s.story}
          </p>

        </div>


        {/* Result panel */}
        <div
          className="
            relative
            z-10
            mt-8
            pt-5
            border-t
            border-border-color
            flex
            items-end
            justify-between
            gap-5
          "
        >

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              font-bold
              text-text-secondary
              whitespace-nowrap
            "
          >
            Key Accomplishment
          </span>


          <div className="text-right">

            <span
              className="
                block
                text-lg
                md:text-xl
                font-bold
                font-display
                text-accent
                transition-transform
                duration-500
                group-hover:-translate-y-1
              "
            >
              {s.result}
            </span>

            {/* Animated result underline */}
            <span
              className="
                block
                ml-auto
                mt-2
                h-[2px]
                bg-accent
                w-0
                group-hover:w-full
                transition-all
                duration-700
              "
            />

          </div>

        </div>


        {/* Corner detail */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-16
            h-16
            border-l
            border-b
            border-accent/0
            rounded-bl-[28px]
            group-hover:border-accent/30
            transition-all
            duration-700
          "
        />

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {benefits.map((b, idx) => (
    <div
      key={idx}
      className="
        group
        relative
        p-6
        bg-white
        dark:bg-bg-primary
        border
        border-border-color
        rounded-2xl
        overflow-hidden
        transition-all
        duration-500
        hover:border-accent/30
      "
    >
      {/* Number */}
      <span
        className="
          absolute
          top-4
          right-5
          text-[11px]
          font-mono
          font-bold
          text-text-secondary/40
          group-hover:text-accent/60
          transition-colors
          duration-500
        "
      >
        0{idx + 1}
      </span>

      {/* Check icon */}
      <div
        className="
          relative
          w-9
          h-9
          rounded-full
          border
          border-accent/20
          flex
          items-center
          justify-center
          mb-5
          transition-all
          duration-500
          group-hover:bg-accent
          group-hover:border-accent
        "
      >
        <CheckCircle
          className="
            h-4.5
            w-4.5
            text-accent
            group-hover:text-white
            transition-colors
            duration-500
          "
        />
      </div>

      {/* Content */}
      <h4
        className="
          font-display
          font-bold
          text-sm
          text-text-primary
          mb-2
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        {b.title}
      </h4>

      <p
        className="
          text-xs
          text-text-secondary
          leading-relaxed
        "
      >
        {b.desc}
      </p>

      {/* Bottom progress line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          bg-accent
          w-0
          group-hover:w-full
          transition-all
          duration-700
        "
      />
    </div>
  ))}
</div>
        </div>
        </Reveal3D>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-bg-secondary text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.08),transparent_25%)] pointer-events-none" />
        <Reveal3D>
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            className="group bg-[#0b1528] border border-[#c5a880]/50 rounded-[32px] p-10 md:p-16 max-w-4xl mx-auto shadow-2xl relative overflow-hidden hover:bg-white/80 dark:hover:bg-slate-900/60 hover:shadow-[0_30px_60px_rgba(239,68,68,0.15)] hover:border-red-500/50 transition-all duration-500 cursor-default"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold font-display text-[#D4AF37] group-hover:text-text-primary mb-6 transition-colors duration-500">
              Accelerate city standardisation with us
            </h2>
            <p className="text-blue-100/70 group-hover:text-text-secondary max-w-md mx-auto mb-8 leading-relaxed text-sm transition-colors duration-500">
              Partner with Aptiv8 to deploy specialized AI engines to your clients, enhancing design safety and regulatory checking speeds.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0b1528] group-hover:bg-accent group-hover:text-white rounded-full font-semibold transition-all duration-500 shadow-lg group-hover:shadow-accent-glow"
            >
              Become a Partner <ChevronRight className="h-5 w-5" />
            </a>
          </motion.div>
        </Reveal3D>
      </section>

    </div>
  );
}
