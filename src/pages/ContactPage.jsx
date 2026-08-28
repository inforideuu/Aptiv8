import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, MapPin, Send, HelpCircle, Sparkles, Calendar, BookOpen, Layers, CheckCircle2, Phone } from 'lucide-react';
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
  const [bookingForm, setBookingForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    details: ''
  });
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

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!industry || !budget || !timeline) return;

    setLoadingAnalysis(true);
    setAnalysisResult(null);

    try {
      const response = await fetch('http://localhost:8000/api/analyze/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          industry,
          budget,
          timeline,
          projectGoals
        })
      });
      if (response.ok) {
        const data = await response.json();
        setAnalysisResult({
          recommendation: data.recommendation,
          components: data.components,
          estSetupTime: data.estSetupTime,
          sovereignty: data.sovereignty
        });
      } else {
        console.error('Failed to run requirement analysis');
      }
    } catch (err) {
      console.error('Error connecting to backend:', err);
    } finally {
      setLoadingAnalysis(false);
    }
  };

  const handleBookMeeting = async (e) => {
    e.preventDefault();
    const { name, company, email, phone, date, time, details } = bookingForm;
    if (name && company && email && phone && date && time) {
      try {
        const response = await fetch('http://localhost:8000/api/book/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            company,
            email,
            phone,
            date,
            time,
            details
          })
        });
        if (response.ok) {
          setBooked(true);
        } else {
          console.error('Failed to book meeting');
        }
      } catch (err) {
        console.error('Error connecting to backend:', err);
      }
    }
  };

  return (
    <div className="relative pt-20">
      
      {/* HERO SECTION */}
      <section 
        className="relative py-36 px-4 bg-cover bg-center overflow-hidden flex items-center justify-center min-h-[calc(100vh-80px)] w-full"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80')" }}
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
            ENTERPRISE CONSULTATION. CONNECT.
          </motion.span>

          {/* Main Headline in Times New Roman */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            Consult Our AI Advisors
          </motion.h1>

          {/* Centered description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Outline your Built Environment challenges using our requirement analyzer or schedule a direct BIM integration consultation.
          </motion.p>
        </div>
      </section>

      {/* CORE CONSULTATION COLUMNS */}
      <section className="py-20 px-4 bg-bg-primary border-b border-border-color">
        <Reveal3D>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Corporate Office & Map Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            {/* Corporate Office details moved to left column below analyzer */}
            <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 shadow-sm text-xs flex flex-col gap-4 hover:shadow-[0_15px_30px_rgba(239,68,68,0.15),_0_5px_0_0_#ef4444] hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1.5 h-full justify-between">
              <h3 className="font-display font-bold text-sm text-text-primary">Corporate Office</h3>
              <div className="flex items-start gap-3 text-text-secondary">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>8 Burn Rd, #04-08 Trivex, Singapore 369977</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+65 6282 1436</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Clock className="h-5 w-5 text-accent shrink-0" />
                <span>09:00 AM – 06:00 PM (SGT)</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:Admin@Aptiveight.com" className="hover:underline">Admin@Aptiveight.com</a>
              </div>
            </div>

            {/* Office Location Map card */}
            <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 shadow-sm text-xs flex flex-col gap-4 hover:shadow-[0_15px_30px_rgba(239,68,68,0.15),_0_5px_0_0_#ef4444] hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1.5 h-full">
              <h3 className="font-display font-bold text-sm text-text-primary">Office Location Map</h3>
              <div className="h-48 rounded-2xl overflow-hidden border border-border-color relative shadow-inner flex-grow">
                <iframe
                  title="Aptiv8 Office Map"
                  src="https://maps.google.com/maps?q=8%20Burn%20Rd%2C%20%2304-08%20Trivex%2C%20Singapore%20369977&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="absolute inset-0 opacity-90"
                ></iframe>
              </div>
            </div>

          </div>

          {/* RIGHT: Book a Meeting Column */}
          <div className="lg:col-span-6 flex flex-col gap-8">

            {/* Book a Meeting slot */}
            <div className="bg-bg-secondary border border-border-color rounded-[32px] p-8 shadow-sm text-xs hover:shadow-[0_15px_30px_rgba(239,68,68,0.15),_0_5px_0_0_#ef4444] hover:border-red-500 transition-all duration-300 transform hover:-translate-y-1.5">
              <h3 className="font-display font-bold text-sm text-text-primary mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" /> Book Integration Consultation
              </h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Choose a date and SGT time slot to review structural verification scopes with our engineering advisors.
              </p>
              
              {!booked ? (
                <form onSubmit={handleBookMeeting} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Company Name</label>
                      <input
                        type="text"
                        value={bookingForm.company}
                        onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                        className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                        placeholder="Company Ltd"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Work Email</label>
                      <input
                        type="email"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                        placeholder="+65 1234 5678"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Date</label>
                      <input
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Time Slot</label>
                    <select
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                      className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs focus:outline-none focus:border-accent"
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="09:00 AM">09:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-text-primary uppercase tracking-wider">Consultation Details</label>
                    <textarea
                      value={bookingForm.details}
                      onChange={(e) => setBookingForm({ ...bookingForm, details: e.target.value })}
                      placeholder="Tell us more about your project needs..."
                      className="bg-bg-primary text-text-primary border border-border-color rounded-xl p-3 text-xs h-20 focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
                  >
                    Confirm Booking <Send className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <div className="p-5 bg-accent/5 border border-accent/20 rounded-xl text-left text-text-primary font-semibold flex flex-col gap-3">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <CheckCircle2 className="h-8 w-8 text-accent animate-bounce" />
                    <span className="text-sm">Consultation Booked Successfully!</span>
                  </div>
                  <div className="border-t border-border-color/60 pt-3 text-xs text-text-secondary flex flex-col gap-1.5">
                    <p><strong>Name:</strong> {bookingForm.name}</p>
                    <p><strong>Company:</strong> {bookingForm.company}</p>
                    <p><strong>Email:</strong> {bookingForm.email}</p>
                    <p><strong>Phone:</strong> {bookingForm.phone}</p>
                    <p><strong>Date & Time:</strong> {bookingForm.date} at {bookingForm.time}</p>
                    {bookingForm.details && <p><strong>Details:</strong> {bookingForm.details}</p>}
                  </div>
                  <span className="text-[10px] text-text-secondary font-normal text-center mt-2">A confirmation calendar invite has been sent to your email.</span>
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
              <div key={idx} className="border border-border-color rounded-xl overflow-hidden bg-bg-primary/50 hover:bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-sm">
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
