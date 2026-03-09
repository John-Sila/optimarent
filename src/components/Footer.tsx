import React from 'react';
import { LucideFacebook, LucideTwitter, LucideInstagram, LucideMapPin, LucidePhone, LucideMail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <footer className={`
      ${theme === 'dark' 
        ? 'bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white' 
        : 'bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 text-slate-900'
      }
      backdrop-blur-xl py-16 border-t ${
        theme === 'dark' 
          ? 'border-indigo-500/30' 
          : 'border-amber-200/50'
      }
    `}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent'
          }`}>
            <span>🏙️</span>
            <span>OptimaRent</span>
          </h3>
          <p className={`mb-6 leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
          }`}>
            Luxury apartments in New York City. Manhattan, Brooklyn, Williamsburg. 
            Premium rentals with fast approvals.
          </p>
          <div className={`flex items-center space-x-4 text-sm ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <LucideMapPin className="w-5 h-5" />
            <span>Manhattan, NY 10001</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={`text-xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="/" className={`group inline-flex items-center space-x-2 ${
                theme === 'dark' 
                  ? 'text-slate-400 hover:text-white' 
                  : 'text-slate-600 hover:text-amber-700'
              } hover:translate-x-2 transition-all duration-300 font-medium`}>Home</a>
            </li>
            <li>
              <a href="/apply" className={`group inline-flex items-center space-x-2 ${
                theme === 'dark' 
                  ? 'text-slate-400 hover:text-white' 
                  : 'text-slate-600 hover:text-amber-700'
              } hover:translate-x-2 transition-all duration-300 font-medium`}>Apply for Lease</a>
            </li>
            <li>
              <a href="#" className={`group inline-flex items-center space-x-2 ${
                theme === 'dark' 
                  ? 'text-slate-400 hover:text-white' 
                  : 'text-slate-600 hover:text-amber-700'
              } hover:translate-x-2 transition-all duration-300 font-medium`}>View Properties</a>
            </li>
            <li>
              <a href="#" className={`group inline-flex items-center space-x-2 ${
                theme === 'dark' 
                  ? 'text-slate-400 hover:text-white' 
                  : 'text-slate-600 hover:text-amber-700'
              } hover:translate-x-2 transition-all duration-300 font-medium`}>Tour Bookings</a>
            </li>
          </ul>
        </div>

        {/* NYC Neighborhoods */}
        <div>
          <h4 className={`text-xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>NYC Neighborhoods</h4>
          <ul className="space-y-3">
            <li className={`group flex items-center space-x-3 ${
              theme === 'dark' 
                ? 'text-slate-400 hover:text-sky-400' 
                : 'text-slate-600 hover:text-orange-600'
            } hover:translate-x-2 transition-all duration-300`}>
              <span className={`w-2.5 h-2.5 rounded-full group-hover:scale-110 transition ${
                theme === 'dark' ? 'bg-sky-400' : 'bg-orange-400'
              }`} />
              Manhattan
            </li>
            <li className={`group flex items-center space-x-3 ${
              theme === 'dark' 
                ? 'text-slate-400 hover:text-emerald-400' 
                : 'text-slate-600 hover:text-rose-500'
            } hover:translate-x-2 transition-all duration-300`}>
              <span className={`w-2.5 h-2.5 rounded-full group-hover:scale-110 transition ${
                theme === 'dark' ? 'bg-emerald-400' : 'bg-rose-400'
              }`} />
              Brooklyn
            </li>
            <li className={`group flex items-center space-x-3 ${
              theme === 'dark' 
                ? 'text-slate-400 hover:text-purple-400' 
                : 'text-slate-600 hover:text-amber-500'
            } hover:translate-x-2 transition-all duration-300`}>
              <span className={`w-2.5 h-2.5 rounded-full group-hover:scale-110 transition ${
                theme === 'dark' ? 'bg-purple-400' : 'bg-amber-400'
              }`} />
              Williamsburg
            </li>
            <li className={`group flex items-center space-x-3 ${
              theme === 'dark' 
                ? 'text-slate-400 hover:text-orange-400' 
                : 'text-slate-600 hover:text-emerald-500'
            } hover:translate-x-2 transition-all duration-300`}>
              <span className={`w-2.5 h-2.5 rounded-full group-hover:scale-110 transition ${
                theme === 'dark' ? 'bg-orange-400' : 'bg-emerald-400'
              }`} />
              Chelsea
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className={`text-xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>Contact Info</h4>
          <div className="space-y-4 mb-8">
            <div className={`flex items-center space-x-3 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <LucideMail className={`w-5 h-5 ${theme === 'dark' ? 'text-sky-400' : 'text-orange-500'}`} />
              <a href="mailto:rentals@optimarent.com" className="hover:text-slate-900 dark:hover:text-white transition font-medium">rentals@optimarent.com</a>
            </div>
            <div className={`flex items-center space-x-3 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <LucidePhone className={`w-5 h-5 ${theme === 'dark' ? 'text-emerald-400' : 'text-rose-500'}`} />
              <a href="tel:+12125550123" className="hover:text-slate-900 dark:hover:text-white transition font-medium">(212) 555-0123</a>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-2">
            <a href="#" className={`group w-14 h-14 ${
              theme === 'dark' 
                ? 'bg-white/10 border border-white/20 hover:bg-blue-600' 
                : 'bg-white/20 border border-slate-200/50 hover:bg-blue-500'
            } backdrop-blur-sm rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300`}>
              <LucideFacebook size={20} className="group-hover:scale-110 transition" />
            </a>
            <a href="#" className={`group w-14 h-14 ${
              theme === 'dark' 
                ? 'bg-white/10 border border-white/20 hover:bg-sky-500' 
                : 'bg-white/20 border border-slate-200/50 hover:bg-sky-400'
            } backdrop-blur-sm rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300`}>
              <LucideTwitter size={20} className="group-hover:scale-110 transition" />
            </a>
            <a href="#" className={`group w-14 h-14 ${
              theme === 'dark' 
                ? 'bg-white/10 border border-white/20 hover:bg-pink-600' 
                : 'bg-white/20 border border-slate-200/50 hover:bg-pink-500'
            } backdrop-blur-sm rounded-2xl flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300`}>
              <LucideInstagram size={20} className="group-hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className={`border-t mt-12 pt-8 text-center text-sm ${
        theme === 'dark' 
          ? 'border-slate-800/50 text-slate-400' 
          : 'border-slate-200/50 text-slate-500'
      }`}>
        <p>© 2026 OptimaRent. All rights reserved. | Licensed NYC Real Estate Broker | Manhattan, New York 10001</p>
      </div>
    </footer>
  );
};

export default Footer;
