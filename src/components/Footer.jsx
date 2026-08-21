import React from 'react';
import { Mail, Clock, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-footer-bg dark:bg-slate-950 text-white border-t border-red-700/40 dark:border-slate-800/80 pt-16 pb-8 rounded-t-[48px] md:rounded-t-[64px] relative overflow-hidden">
      {/* Subtle overlay grid for tech feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="Aptiv8 IT Solutions" className="h-15 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              The Trusted AI Partner for the Built Environment. Developing international-level, custom-trained AI solutions for modern design, engineering, construction, and property operations.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://linkedin.com/company/aptiv8"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-all flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 0 0 1.3-1.3A1.37 1.37 0 0 0 6.5 5.8a1.37 1.37 0 0 0-1.3 1.3 1.37 1.37 0 0 0 1.3 1.27m1.4 10.13V10.2h-2.8v8.3H7.9" />
                </svg>
              </a>
              <a
                href="mailto:Admin@Aptiveight.com"
                className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-all flex items-center justify-center"
                aria-label="Email Admin"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-white/80">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Services Offered</a></li>
              <li><a href="/projects" className="hover:text-white transition-colors">Co-Developed Projects</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">AI Products Suite</a></li>
              <li><a href="/case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Industries</a></li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex flex-col gap-4 text-sm text-white/80">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-6">
              Contact & Hours
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-white/90 mt-0.5 shrink-0" />
              <span>
                10 Ubi Cres, Ubi Techpark,<br />
                Singapore 408564
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-white/90 shrink-0" />
              <span>09:00 AM – 06:00 PM (SGT)</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-white/90 shrink-0" />
              <a href="mailto:Admin@Aptiveight.com" className="hover:underline text-white">Admin@Aptiveight.com</a>
            </div>
          </div>

          {/* Map Location & Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-4">
                Newsletter
              </h4>
              <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="bg-white/10 text-white placeholder-white/50 text-xs px-4 py-2 rounded-xl border border-white/25 focus:border-white focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-white text-[#e30613] hover:bg-white/90 transition-colors cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display mb-2">
                Our Location
              </h4>
              <div className="h-28 w-full rounded-xl overflow-hidden border border-white/20 relative">
                <iframe
                  title="Aptiv8 Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7907577579124!2d103.89669527588764!3d1.3003887617478065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17dc00609d57%3A0xc3191f0a35ee124!2sUbi%20Techpark!5e0!3m2!1sen!2ssg!4v1700000000000!5m2!1sen!2ssg"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale filter contrast-125 opacity-70 dark:invert"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>© {currentYear} Aptiv8 IT Solutions Pte Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
