import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, MapPin, Send, HelpCircle, Sparkles, Calendar, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import Reveal3D from '../components/Reveal3D';

export default function ContactPage() {
  // Requirement Analyzer State
  const [industry, setIndustry] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [projectGoals, setProjectGoals] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loadingAnalysis, setLoadingAnalysis] = useState(false);

  // Meeting Booking State
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [booked, setBooked] = useState(false);

  // FAQ Accordion State
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      q: 'How long does a standard custom model training pipeline take?',
      a: 'Depending on dataset cleanliness (IFC/Revit structural schemas), initial training and sandbox validation take 4 to 8 weeks before integration.'
    },
    {
      q: 'Does Aptiv8 guarantee Singapore BCA Green Mark scoring compliance?',
      a: 'Our Sustainability Design Smart Advisor (SDSA) provides recommendations and checks drawings against Green Mark rules, helping projects secure Platinum/Gold permissions.'
    },
    {
      q: 'Is my proprietary building model data secure?',
      a: 'Yes. We deploy custom sandboxed instances in local private clouds (Singapore regions). We enforce strict data boundaries and do not mix datasets.'
    }
  ];

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!industry || !budget || !timeline) return;

    setLoadingAnalysis(true);
    setAnalysisResult(null);

    setTimeout(() => {
      // Custom heuristic analysis output
      let recommendation = '';
      let components = [];

      if (industry === 'Architecture' || industry === 'Engineering') {
        recommendation = 'Deploy Sustainability Design Smart Advisor (SDSA) and the Compliance Chatbot.';
        components = ['Revit CodeCheck API integration', 'Green Mark carbon envelope validation', 'SG BCA regulations package'];
      } else if (industry === 'Construction') {
        recommendation = 'Deploy AI Assistant for Bid Preparation and Open BIM AI.';
        components = ['Historical tender scanning algorithms', 'Quantity takeoffs compiler', 'IFC metadata cleanser'];
      } else {
        recommendation = 'Deploy AI-Enhanced CMMS and Cryotos Cortex sensory twin interfaces.';
        components = ['Vibration/Thermal sensor endpoints', 'Predictive ticket dispatch systems', 'strata title allocation automation'];
      }

      setAnalysisResult({
        recommendation,
        components,
        estSetupTime: timeline === 'Under 3 Months' ? '6-8 Weeks' : '10-12 Weeks',
        sovereignty: 'Private Local Sandbox Sandbox Deployment recommended.'
      });
      setLoadingAnalysis(false);
    }, 1500);
  };

  const handleBookMeeting = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      setBooked(true);
    }
  };

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
            Enterprise Consultation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display tracking-tight text-text-primary mb-6">
            Consult Our AI Advisors
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Outline your Built Environment challenges using our requirement analyzer or schedule a direct BIM integration consultation.
          </p>
        </motion.div>
      </section>

      {/* CORE CONSULTATION COLUMNS */}
      <section className="py-20 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Project Requirement Analyzer */}
          <div className="lg:col-span-7 bg-bg-secondary border border-border-color rounded-[32px] p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-display text-text-primary mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent animate-pulse" /> Project Requirement Analyzer
            </h2>
            <p className="text-xs text-text-secondary mb-8 leading-relaxed">
              Select your development parameters to generate an automated recommendation brief.
            </p>

            <form onSubmit={handleAnalyze} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Industry Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-primary uppercase tracking-wider">Industry</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                    required
                  >
                    <option value="">Select Industry</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Construction">Construction</option>
                    <option value="Facilities Management">Facilities Management</option>
                    <option value="Real Estate">Real Estate</option>
                  </select>
                </div>

                {/* Budget Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-primary uppercase tracking-wider">Budget Range</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                    required
                  >
                    <option value="">Select Budget</option>
                    <option value="Under $50K">Under $50K</option>
                    <option value="$50K - $150K">$50K - $150K</option>
                    <option value="Over $150K">Over $150K</option>
                  </select>
                </div>

                {/* Timeline Selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-text-primary uppercase tracking-wider">Target Timeline</label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                    required
                  >
                    <option value="">Select Timeline</option>
                    <option value="Under 3 Months">Under 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="Over 6 Months">Over 6 Months</option>
                  </select>
                </div>

              </div>

              {/* Goals Textarea */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-text-primary uppercase tracking-wider">Specific Project Goals</label>
                <textarea
                  value={projectGoals}
                  onChange={(e) => setProjectGoals(e.target.value)}
                  placeholder="E.g., Automate Green Mark compliance auditing, or trace thermal sensors into active twins..."
                  className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-4 text-xs h-28 focus:outline-none focus:border-accent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
              >
                Analyze Requirements <Sparkles className="h-4 w-4" />
              </button>
            </form>

            {/* Analysis Results Display */}
            <AnimatePresence>
              {loadingAnalysis && (
                <div className="mt-8 text-center py-6 text-xs text-text-secondary animate-pulse">
                  Analyzing specifications against Aptiv8 model configurations...
                </div>
              )}

              {analysisResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-8 p-6 bg-bg-primary border border-border-color rounded-2xl flex flex-col gap-4 text-xs"
                >
                  <h3 className="font-display font-bold text-sm text-accent flex items-center gap-1.5">
                    <CheckCircle2 className="h-4.5 w-4.5" /> Generated AI Recommendation Brief
                  </h3>
                  <div className="flex flex-col gap-2">
                    <p><strong>Primary Integration:</strong> {analysisResult.recommendation}</p>
                    <p><strong>Estimated Sandbox Setup:</strong> {analysisResult.estSetupTime}</p>
                    <p><strong>Deployment Standard:</strong> {analysisResult.sovereignty}</p>
                  </div>
                  <div className="pt-4 border-t border-border-color/60">
                    <strong className="text-text-primary block mb-2 uppercase tracking-wide">Suggested Components:</strong>
                    <ul className="flex flex-col gap-1.5 pl-4 list-disc text-text-secondary">
                      {analysisResult.components.map((comp, idx) => (
                        <li key={idx}>{comp}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* RIGHT: Office Info & Book a Meeting */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Office Details */}
            <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 shadow-sm text-xs flex flex-col gap-4">
              <h3 className="font-display font-bold text-sm text-text-primary">Corporate Office</h3>
              <div className="flex items-start gap-3 text-text-secondary">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>10 Ubi Cres, Ubi Techpark, Singapore 408564</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span>09:00 AM – 06:00 PM (SGT)</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:Admin@Aptiveight.com" className="hover:underline">Admin@Aptiveight.com</a>
              </div>

              {/* Map embed */}
              <div className="h-40 rounded-xl overflow-hidden border border-border-color mt-2 relative">
                <iframe
                  title="Aptiv8 Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7907577579124!2d103.89669527588764!3d1.3003887617478065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17dc00609d57%3A0xc3191f0a35ee124!2sUbi%20Techpark!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute inset-0 grayscale opacity-80 dark:invert"
                ></iframe>
              </div>
            </div>

            {/* Book a Meeting slot */}
            <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 shadow-sm text-xs">
              <h3 className="font-display font-bold text-sm text-text-primary mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" /> Book Integration Consultation
              </h3>

              {!booked ? (
                <form onSubmit={handleBookMeeting} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-text-secondary uppercase">Select Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 focus:outline-none focus:border-accent w-full"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-text-secondary uppercase">Select Time Slot</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 focus:outline-none focus:border-accent w-full"
                      required
                    >
                      <option value="">Select Time Slot</option>
                      <option value="10:00 AM SGT">10:00 AM SGT</option>
                      <option value="02:00 PM SGT">02:00 PM SGT</option>
                      <option value="04:00 PM SGT">04:00 PM SGT</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 text-accent font-bold flex flex-col items-center gap-2">
                  <CheckCircle2 className="h-8 w-8 text-accent animate-bounce" />
                  <span>Consultation Booked for {selectedDate} at {selectedTime}!</span>
                  <span className="text-[10px] text-text-secondary font-normal">A confirmation calendar invite has been sent to your email.</span>
                </div>
              )}
            </div>

          </div>

        </div>
        </Reveal3D>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4 bg-bg-secondary">
        <Reveal3D>
          <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display text-text-primary mb-4">FAQ</h2>
            <p className="text-text-secondary text-sm max-w-xs mx-auto">
              Answers regarding deployment scope, sandbox access, and security data policies.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-border-color rounded-xl overflow-hidden bg-bg-primary/50">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full text-left p-5 font-bold font-display text-sm text-text-primary hover:text-accent transition-colors flex justify-between items-center cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-accent">{openFAQ === idx ? '−' : '+'}</span>
                </button>
                
                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5 text-xs text-text-secondary leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
        </Reveal3D>
      </section>

    </div>
  );
}
