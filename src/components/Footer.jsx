import React from 'react';
import { Mail, Clock, MapPin, Send, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-footer-bg dark:bg-slate-950 text-white border-t border-red-700/40 dark:border-slate-800/80 pt-16 pb-0 rounded-t-[48px] md:rounded-t-[64px] relative overflow-hidden">
      {/* Subtle overlay grid for tech feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand and Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="bg-white p-2.5 rounded-2xl inline-flex items-center justify-center shadow-sm">
                <img src="/logo.png" alt="Aptiv8 IT Solutions" className="h-12 w-auto object-contain" />
              </div>
            </div>
            <p className="text-sm text-white leading-relaxed text-justify">
              The Trusted AI Partner for the Built Environment. Developing advanced, globally recognized, international-level, custom-trained AI solutions for modern design, engineering, construction, and property operations worldwide across Southeast Asia.
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
              <li><a href="/admin" className="text-red-400 hover:text-red-300 font-semibold transition-colors">Admin Console</a></li>
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-2">
              Contact & Hours
            </h4>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-white/90 mt-0.5 shrink-0" />
              <span>
                8 Burn Rd, #04-08 Trivex,<br />
                Singapore 369977
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white/90 shrink-0" />
              <span>+65 6282 1436</span>
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
              {/* <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display mb-4">
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
              </form> */}
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display mb-2">
                Our Location
              </h4>
              <div className="h-28 w-full rounded-xl overflow-hidden border border-white/20 relative">
                <iframe
                  title="Aptiv8 Office Map"
                  src="https://maps.google.com/maps?q=8%20Burn%20Rd%2C%20%2304-08%20Trivex%2C%20Singapore%20369977&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 opacity-90"
                ></iframe>
              </div>
              <div style={{
                marginTop: '20px',
                color: '#e30613',
                fontSize: '12px',
                fontFamily: 'Arial',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display mb-2">
                  Powered by
                </h4>
                <a href="https://zenelaitinfotech.com/" target='__blank'><img src="/zenelaitinfotech_logo.png" alt="zenelait infotech" style={{ height: '60px', borderRadius:'8px'}} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="w-full border-t border-white/20" />

      {/* Bottom copyright - bg to white and color to red */}
      <div className="bg-white dark:bg-slate-900 text-[#e30613] dark:text-accent py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <p>© {currentYear} Aptiv8 IT Solutions Pte Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:underline transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:underline transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
