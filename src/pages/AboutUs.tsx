import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { 
  ArrowLeft, 
  Users, 
  Building2, 
  Award, 
  Calendar, 
  MapPin,
  CheckCircle 
} from 'lucide-react';

const AboutUs: React.FC = () => {
  const { theme } = useTheme();

  const milestones = [
    { year: '2018', title: 'Founded', desc: 'OptimaRent launched in NYC with 12 luxury listings' },
    { year: '2019', title: '300+ Units', desc: 'Expanded to Manhattan & Brooklyn, 300+ active rentals' },
    { year: '2020', title: 'Digital First', desc: 'Pioneered online-only applications during pandemic' },
    { year: '2021', title: '500+ Tenants', desc: 'Reached 500 successful placements' },
    { year: '2022', title: 'Williamsburg', desc: 'Entered premium Williamsburg market' },
    { year: '2023', title: '600+ Leases', desc: 'Milestone: 600+ apartments leased' },
    { year: '2024', title: 'Airtm Payments', desc: 'Global payment integration for international renters' },
    { year: '2026', title: '1000+ Happy', desc: 'Serving 1000+ residents across the US' }
  ];

  const stats = [
    { num: '908', label: 'Apartments Leased', icon: Building2 },
    { num: '1092', label: 'Happy Residents', icon: Users },
    { num: '98%', label: 'Approval Rate', icon: Award },
    { num: '8', label: 'Years Experience', icon: Calendar }
  ];

  return (
    <div className={`
      min-h-screen
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900/50 to-blue-900' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50/50 to-rose-50'
      }
    `}>
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(600px_50%_at_20%_80%,rgba(120,119,198,0.3),transparent)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            to="/"
            className={`
              inline-flex items-center mb-8 font-semibold transition-all group
              ${theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-orange-600'}
            `}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition" />
            Back to Properties
          </Link>
          
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-black mb-6 leading-tight ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white via-cyan-300 to-sky-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-slate-900 via-amber-900 to-orange-900 bg-clip-text text-transparent'
            }`}>
              About OptimaRent
            </h1>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto mb-12 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Serving American renters since 2018 with transparent pricing, fast approvals, and 
              premium apartments in Manhattan, Brooklyn, Williamsburg etc.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(400px_50%_at_50%_20%,rgba(255,255,255,0.1),transparent)]" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className={`
                group relative p-8 rounded-3xl text-center backdrop-blur-xl border transition-all duration-500 hover:scale-105
                ${theme === 'dark' 
                  ? 'bg-slate-800/50 border-slate-700/50 hover:border-sky-400/50 hover:bg-sky-500/5' 
                  : 'bg-white/80 border-amber-200/50 hover:border-orange-400/60 hover:bg-orange-50'
                }
              `}>
                <Icon className={`w-12 h-12 mx-auto mb-4 ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-orange-500'
                }`} />
                <div className={`text-4xl md:text-5xl font-black mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.num}
                </div>
                <p className={`font-semibold ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-emerald-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-orange-500 via-amber-700 to-rose-600 bg-clip-text text-transparent'
            }`}>
              Our Journey Since 2018
            </h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              From 12 listings to serving thousands of renters with cutting-edge technology.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`
              absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b
              ${theme === 'dark' 
                ? 'from-slate-700 via-sky-500 to-emerald-500' 
                : 'from-amber-400 via-orange-500 to-rose-500'
              }
            `} />
            
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`
                  relative flex items-center
                  ${idx % 2 === 0 ? 'flex-row-reverse justify-end' : 'justify-start'}
                `}>
                  <div className={`
                    w-1/2 p-8 rounded-3xl backdrop-blur-xl shadow-2xl border
                    ${theme === 'dark'
                      ? 'bg-slate-800/60 border-slate-700/50'
                      : 'bg-white/80 border-amber-200/50'
                    }
                  `}>
                    <div className="flex items-baseline space-x-4 mb-4">
                      <span className={`text-4xl font-black ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>
                        {milestone.year}
                      </span>
                      <h3 className={`text-2xl font-bold ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent'
                          : 'text-orange-600'
                      }`}>
                        {milestone.title}
                      </h3>
                    </div>
                    <p className={`text-lg ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {milestone.desc}
                    </p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className={`
                    w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl absolute left-1/2 transform -translate-x-1/2 z-10 border-4
                    ${theme === 'dark'
                      ? 'bg-gradient-to-r from-sky-500 to-emerald-500 border-sky-400'
                      : 'bg-gradient-to-r from-orange-500 to-rose-500 border-orange-400'
                    }
                  `}>
                    <CheckCircle className={`w-10 h-10 text-white`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* U.S. Nationwide Focus */}
      <section className={`
        py-24 relative
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-900/80 to-indigo-900/80' 
          : 'bg-gradient-to-r from-orange-50/80 to-amber-50/80'
        }
      `}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className={`text-4xl md:text-5xl font-black mb-8 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-slate-900 to-orange-900 bg-clip-text text-transparent'
              }`}>
                America's Most Trusted Rental Platform
              </h3>
              <div className="space-y-6 text-xl">
                <div className={`flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white/70 border-amber-200/50'
                }`}>
                  <MapPin className="w-8 h-8 mt-1 text-orange-500 flex-shrink-0" />
                  <span className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    NYC • Chicago • Miami • LA • Austin • Seattle • Denver
                  </span>
                </div>
                <div className={`flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm border ${
                  theme === 'dark' 
                    ? 'bg-slate-800/50 border-slate-700/50' 
                    : 'bg-white/70 border-amber-200/50'
                }`}>
                  <Award className="w-8 h-8 mt-1 text-emerald-500 flex-shrink-0" />
                  <span className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    8+ years perfecting luxury rentals nationwide
                  </span>
                </div>
              </div>
            </div>
            <div className={`relative h-96 rounded-3xl overflow-hidden shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-slate-800 to-indigo-900 border-2 border-slate-700/50' 
                : 'bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-amber-200/50'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🇺🇸</div>
              </div>
              <div className="absolute bottom-8 left-8 text-white text-4xl font-bold bg-black/60 px-6 py-3 rounded-2xl backdrop-blur-sm">
                Premium Rentals Across America Since 2018
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`
        py-24 text-center
        ${theme === 'dark' 
          ? 'bg-gradient-to-r from-slate-900 via-indigo-900 to-blue-900' 
          : 'bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600'
        }
      `}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <h2 className={`text-5xl md:text-6xl font-black mb-8 leading-tight ${
            theme === 'dark' ? 'text-white' : 'from-white via-amber-100'
          }`}>
            Ready to Experience
            <span className="block bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              American Living Excellence?
            </span>
          </h2>
          <Link
            to="/apply"
            className={`
              inline-flex items-center px-12 py-6 rounded-3xl text-2xl font-black shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 backdrop-blur-xl border-2
              ${theme === 'dark' 
                ? 'bg-white text-slate-900 border-white/30 hover:bg-white/90' 
                : 'bg-white text-orange-600 border-orange-400 hover:bg-orange-50'
              }
            `}
          >
            Find Your Apartment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
