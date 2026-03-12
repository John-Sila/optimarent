import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowLeft, Send, CheckCircle, Mail, Home } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Property {
  code: string;
  state: string;
  city: string;
  zipcode: string;
  nature: string;
  monthly_rent: string;
  application_fee: string;
  currency: string;
}

const Application: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [properties] = useState<Property[]>([
    // array[0]
    {
      code: "001",
      state: "Florida,", 
      city: "St. Petersburg",
      zipcode: "10001",
      nature: "1 Bedroom Luxury Apartment",
      monthly_rent: "$1,200",
      application_fee: "$75",
      currency: "USD"
    },
    // array[1]
    {
      code: "002",
      state: "New York", 
      city: "Brooklyn", 
      zipcode: "11211",
      nature: "2 Bedroom Modern Apartment",
      monthly_rent: "$2,200",
      application_fee: "$100",
      currency: "USD"
    },
    // array[2]
    {
      code: "003",
      state: "Maryland",
      city: "Baltimore",
      zipcode: "11249", 
      nature: "3 Bedroom Loft",
      monthly_rent: "$6,800",
      application_fee: "$145",
      currency: "USD"
    },
    // array[3]
    {
      code: "004",
      state: "New York",
      city: "Chelsea",
      zipcode: "10011",
      nature: "Studio Apartment", 
      monthly_rent: "$1,300",
      application_fee: "$60",
      currency: "USD"
    },
    // array[4]
    {
      code: "005",
      state: "Massachusetts",
      city: "Springfield",
      zipcode: "10003",
      nature: "Luxury 2 Bedroom", 
      monthly_rent: "$1,400",
      application_fee: "$85",
      currency: "USD"
    },
    // array[5]
    {
      code: "006",
      state: "Missouri",
      city: "Kansas City",
      zipcode: "65807",
      nature: "Luxury 2 Bedroom", 
      monthly_rent: "$1,450",
      application_fee: "$90",
      currency: "USD"
    },
    // array[6]
    {
      code: "007",
      state: "Minnesota",
      city: "Minneapolis",
      zipcode: "55401",
      nature: "Luxury 2 Bedroom", 
      monthly_rent: "$1,450",
      application_fee: "$90",
      currency: "USD"
    },
  ]);

  const [selectedCode, setSelectedCode] = useState('');
  const [formData, setFormData] = useState({
    code: '',
    state: '',
    city: '',
    zipcode: '',
    nature: '',
    monthly_rent: '',
    application_fee: '',
    currency: '',
    applicantName: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [addInitialRent, setAddInitialRent] = useState(false);
  // Remove fetch useEffect - using hardcoded data
  useEffect(() => {
    if (selectedCode) {
      const prop = properties.find(p => p.code === selectedCode);
      if (prop) {
        setFormData(prev => ({
          ...prev,
          code: prop.code,
          state: prop.state,
          city: prop.city,
          zipcode: prop.zipcode,
          nature: prop.nature,
          monthly_rent: prop.monthly_rent,
          application_fee: prop.application_fee,
          currency: prop.currency,
        }));
      }
    }
  }, [selectedCode, properties]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSubmitted(true);
    setLoading(false);
  };

  const location = useLocation();

  // On first load, read ?code= and preselect
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const codeFromUrl = params.get('code');
    if (codeFromUrl) {
      setSelectedCode(codeFromUrl);
    }
  }, [location.search]);

  const totalAmount = addInitialRent 
      ? parseFloat(formData.application_fee.replace(/[$,]/g, '')) + parseFloat(formData.monthly_rent.replace(/[$,]/g, ''))
      : parseFloat(formData.application_fee.replace(/[$,]/g, ''));

if (submitted) {
  return (
    <div className={`
      min-h-screen flex items-center justify-center py-12 px-4 relative overflow-hidden
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900/80 to-blue-900/90' 
        : 'bg-gradient-to-br from-amber-500/95 via-orange-500/90 to-rose-500/95'
      }
      text-white
    `}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className={`
          absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 animate-blob
          ${theme === 'dark' ? 'bg-cyan-500/30' : 'bg-white/20'}
        `} />
        <div className={`
          absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-20 animate-blob animation-delay-2000
          ${theme === 'dark' ? 'bg-emerald-500/30' : 'bg-amber-100/30'}
        `} />
        <div className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-10 animate-ping
          ${theme === 'dark' ? 'bg-sky-400/20' : 'bg-orange-300/20'}
        `} />
      </div>

      <div className={`
        relative max-w-lg w-full backdrop-blur-3xl rounded-3xl p-12 text-center shadow-2xl border-2 transform hover:scale-[1.02] transition-all duration-500
        ${theme === 'dark' 
          ? 'bg-gradient-to-b from-slate-800/50 to-indigo-900/40 border-indigo-500/40 hover:border-indigo-400/60 hover:shadow-indigo-500/20 hover:shadow-2xl' 
          : 'bg-gradient-to-b from-white/30 to-amber-500/20 border-amber-400/50 hover:border-orange-500/60 hover:shadow-orange-400/30 hover:shadow-3xl'
        }
      `}>
        
        {/* Success Icon with Glow */}
        <div className={`
          relative mx-auto mb-8 p-4 rounded-3xl shadow-2xl
          ${theme === 'dark' 
            ? 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 shadow-emerald-500/50 hover:shadow-emerald-400/70' 
            : 'bg-gradient-to-r from-emerald-400/30 to-emerald-500/30 shadow-emerald-400/60 hover:shadow-emerald-500/80'
          }
        `}>
          <CheckCircle className="w-28 h-28 mx-auto text-emerald-400 animate-pulse" />
          <div className={`
            absolute -inset-2 rounded-3xl blur-xl opacity-70 animate-ping
            ${theme === 'dark' ? 'bg-emerald-500/30' : 'bg-emerald-400/40'}
          `} />
        </div>

        {/* Title */}
        <h2 className={`text-5xl md:text-6xl font-black mb-6 leading-tight bg-gradient-to-r ${
          theme === 'dark' 
            ? 'from-emerald-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent drop-shadow-2xl' 
            : 'from-emerald-500 via-amber-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl'
        }`}>
          Success!
        </h2>

        {/* Subtitle */}
        <div className={`text-2xl mb-2 font-bold ${
          theme === 'dark' ? 'text-cyan-200' : 'text-amber-100/90'
        }`}>
          Application Submitted
        </div>

        {/* Main Message */}
        <div className={`
          text-lg space-y-3 p-6 rounded-xl backdrop-blur-sm border
          ${theme === 'dark' 
            ? 'bg-slate-900/50 border-slate-700/50 text-slate-300' 
            : 'bg-white/40 border-amber-200/50 text-slate-800'
          }
        `}>
          <div className="flex items-start space-x-3 mb-2">
            <CheckCircle className="w-6 h-6 mt-1 text-emerald-400 flex-shrink-0" />
            <span>If your payment was successful, expect an email to that address within 30 mins with more details.</span>
          </div>
          <div className="flex items-start space-x-3">
            <Mail className="w-6 h-6 mt-1 text-sky-400 flex-shrink-0" />
            <span><strong>Check spam folder</strong> if not received</span>
          </div>
        </div>

        {/* Support Section */}
        <div className={`
          my-8 p-4 rounded-2xl text-center backdrop-blur-sm border font-mono text-sm tracking-wide
          ${theme === 'dark' 
            ? 'bg-slate-900/60 border-slate-700/50 text-slate-400' 
            : 'bg-white/50 border-amber-200/50 text-slate-800/90'
          }
        `}>
          <p className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4 text-sky-400" />
            <span>For support: </span>
            <span className="font-bold text-sky-400 hover:text-sky-300 cursor-pointer underline decoration-sky-400">optimabyte@gmail.com</span>
          </p>
        </div>


        {/* Button */}
        <button 
          onClick={() => navigate('/')}
          className={`
            w-full relative bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 
            text-white py-6 px-10 rounded-3xl text-xl font-black shadow-2xl hover:shadow-3xl 
            hover:from-emerald-500 hover:via-emerald-400 hover:to-teal-500 
            transform hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 
            border-2 border-emerald-400/50 backdrop-blur-xl overflow-hidden
          `}
        >
          <span className="flex items-center justify-center space-x-3">
            <Home className="w-6 h-6" />
            <span>Back to Luxury Homes</span>
            <ArrowLeft className="w-6 h-6 rotate-180" />
          </span>
        </button>

        {/* Subtle Footer */}
        <div className={`mt-8 pt-6 text-xs opacity-75 ${
          theme === 'dark' ? 'text-slate-400' : 'text-white/80'
        }`}>
          Your lease journey begins now. Thank you for choosing OptimaRent! 🗽
        </div>
      </div>
    </div>
  );
}


  return (
    <div className={`
      min-h-screen py-20 px-4
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50'
      }
    `}>
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className={`
            flex items-center mb-8 font-semibold transition-all hover:scale-105
            ${theme === 'dark' 
              ? 'text-slate-300 hover:text-cyan-400' 
              : 'text-slate-700 hover:text-orange-600'
            }
          `}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Properties
        </button>

        <div className={`
          backdrop-blur-xl shadow-2xl rounded-3xl p-12 border
          ${theme === 'dark' 
            ? 'bg-slate-800/60 border-indigo-500/30' 
            : 'bg-white/80 border-amber-200/50'
          }
        `}>
          <h1 className={`text-4xl md:text-5xl font-black text-center mb-2 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent'
              : 'bg-gradient-to-r from-slate-900 via-orange-900 to-amber-900 bg-clip-text text-transparent'
          }`}>
            OptimaRent Lease Application
          </h1>
          
          <div className="text-center mb-12">
            <p className={`text-xl mb-4 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Select property code to autofill details
            </p>
            
            {/* Airtm Payment Info */}
            <div className={`inline-flex items-center p-4 rounded-2xl mb-6 backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-slate-700/50 border-slate-600 text-slate-300' 
                : 'bg-white/60 border-amber-200 text-slate-800'
            }`}>
              <span className="text-sm mr-3">💳</span>
              <span className="text-sm font-medium">Payments via Airtm • Email: </span>
              <a href="mailto:optimabyte@gmail.com" className="font-bold underline hover:no-underline ml-1">
                optimabyte@gmail.com
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Code Dropdown */}
            <div>
              <label className={`block text-sm font-bold mb-3 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
              }`}>
                Property Code <span className="text-rose-500">*</span>
              </label>
              <select
                title='code'
                value={selectedCode}
                onChange={(e) => setSelectedCode(e.target.value)}
                className={`
                  w-full p-5 rounded-3xl text-lg font-semibold shadow-lg transition-all
                  ${theme === 'dark' 
                    ? 'bg-slate-700/80 border-2 border-slate-600 text-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/30 hover:border-sky-500 hover:shadow-cyan-500/20' 
                    : 'bg-white/70 border-2 border-amber-300 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-400/30 hover:border-amber-400 hover:shadow-orange-300/50'
                  }
                `}
                required
              >
                <option value="">Choose NYC Apartment</option>
                {properties.map(prop => (
                  <option key={prop.code} value={prop.code}>
                    {prop.code} - {prop.nature} • {prop.city}
                  </option>
                ))}
              </select>
            </div>

            {/* Autofill Property Details */}
            <div className={`
              grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-slate-800/40 border border-slate-700/50' 
                : 'bg-white/50 border border-amber-200/30'
              }
            `}>
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  State
                </label>
                <input
                  type="text"
                  value={formData.state}
                  readOnly
                  className={`
                    w-full p-4 rounded-xl font-semibold text-lg bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-slate-700/70 to-slate-600/70 border border-slate-600 text-cyan-200' 
                      : 'from-amber-50 to-orange-50 border border-amber-200 text-slate-900'
                    }
                  `}
                />
              </div>
              
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  City
                </label>
                <input 
                  type="text" 
                  value={formData.city} 
                  readOnly 
                  className={`
                    w-full p-4 rounded-xl font-bold text-xl bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-sky-500/20 to-cyan-500/20 border border-sky-600 text-sky-300' 
                      : 'from-blue-100 to-emerald-100 border border-blue-200 text-blue-900'
                    }
                  `} 
                />
              </div>
              
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  ZIP
                </label>
                <input 
                  type="text" 
                  value={formData.zipcode} 
                  readOnly 
                  className={`
                    w-full p-4 rounded-xl font-mono text-lg bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-slate-700/70 to-slate-600/70 border border-slate-600 text-slate-200' 
                      : 'from-gray-100 to-gray-200 border border-gray-300 text-slate-800'
                    }
                  `} 
                />
              </div>
              
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Type
                </label>
                <input 
                  type="text" 
                  value={formData.nature} 
                  readOnly 
                  className={`
                    w-full p-4 rounded-xl font-semibold text-lg bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-emerald-500/20 to-green-500/20 border border-emerald-600 text-emerald-300' 
                      : 'from-emerald-100 to-green-100 border border-emerald-200 text-emerald-900'
                    }
                  `} 
                />
              </div>
            </div>

            {/* Rent & Fees */}
            <div className={`
              grid md:grid-cols-3 gap-6 p-8 rounded-3xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-slate-800/40 border border-slate-700/50' 
                : 'bg-white/50 border border-amber-200/30'
              }
            `}>
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Monthly Rent
                </label>
                <input 
                  type="text" 
                  value={formData.monthly_rent} 
                  readOnly 
                  className={`
                    w-full p-5 rounded-2xl font-black text-2xl bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-emerald-600/30 to-green-600/30 border-2 border-emerald-500 text-emerald-300 shadow-emerald-500/25' 
                      : 'from-emerald-400/20 to-green-400/20 border-2 border-emerald-400 text-emerald-700 shadow-emerald-300/50'
                    }
                  `} 
                />
              </div>
              
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Application Fee
                </label>
                <input 
                  type="text" 
                  value={formData.application_fee} 
                  readOnly 
                  className={`
                    w-full p-5 rounded-2xl font-bold text-xl bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-orange-500/20 to-rose-500/20 border border-orange-600 text-orange-300' 
                      : 'from-orange-200 to-rose-200 border border-orange-300 text-orange-800'
                    }
                  `} 
                />
              </div>
              
              <div>
                <label className={`block text-xs font-semibold uppercase tracking-wide mb-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Currency
                </label>
                <input 
                  type="text" 
                  value={formData.currency} 
                  readOnly 
                  className={`
                    w-full p-5 rounded-2xl font-black text-lg bg-gradient-to-r
                    ${theme === 'dark' 
                      ? 'from-sky-500/30 to-cyan-500/30 border-2 border-sky-500 text-sky-300 shadow-sky-500/25' 
                      : 'from-sky-300/30 to-blue-300/30 border-2 border-sky-400 text-sky-700 shadow-sky-300/50'
                    }
                  `} 
                />
              </div>
            </div>

            {/* Add Initial Rent Toggle */}
            <div className={`
              p-6 rounded-3xl backdrop-blur-sm border flex items-center justify-between
              ${theme === 'dark' 
                ? 'bg-slate-800/50 border-slate-700/50' 
                : 'bg-white/60 border-amber-200/50'
              }
            `}>
              <span className={`font-semibold ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
              }`}>
                Include First Month Rent?
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={addInitialRent}
                  onChange={(e) => setAddInitialRent(e.target.checked)}
                />
                <div className={`
                  relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
                  ${theme === 'dark' 
                    ? 'peer-focus:ring-sky-800' 
                    : 'peer-focus:ring-orange-300'
                  } rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:rounded-full after:h-6 after:w-6 after:transition-all 
                  ${theme === 'dark' 
                    ? 'peer-checked:bg-sky-600 bg-slate-700' 
                    : addInitialRent 
                      ? 'peer-checked:bg-orange-600 bg-gray-300' 
                      : 'bg-gray-300'
                  }
                `}></div>
              </label>
            </div>

            {/* Applicant Details */}
            <div className={`
              space-y-6 p-8 rounded-3xl backdrop-blur-sm
              ${theme === 'dark' 
                ? 'bg-slate-800/40 border border-slate-700/50' 
                : 'bg-white/60 border border-amber-200/30'
              }
            `}>
              <h3 className={`text-2xl font-bold text-center ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-900'
              }`}>
                Applicant Information
              </h3>
              
              <div>
                <label className={`block text-sm font-bold mb-3 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                }`}>
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.applicantName}
                  onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                  className={`
                    w-full p-5 rounded-3xl text-lg font-semibold shadow-lg transition-all
                    ${theme === 'dark' 
                      ? 'bg-slate-700/80 border-2 border-slate-600 text-slate-200 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/30 hover:border-sky-500 hover:shadow-cyan-500/20 placeholder-slate-500' 
                      : 'bg-white/70 border-2 border-amber-300 text-slate-900 focus:border-orange-500 focus:ring-4 focus:ring-orange-400/30 hover:border-amber-400 hover:shadow-orange-300/50 placeholder-slate-500'
                    }
                  `}
                  required
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-bold mb-3 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                  }`}>
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`
                      w-full p-5 rounded-3xl text-lg font-semibold shadow-lg transition-all
                      ${theme === 'dark' 
                        ? 'bg-slate-700/80 border-2 border-slate-600 text-slate-200 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/30 hover:border-emerald-500 hover:shadow-emerald-500/20 placeholder-slate-500' 
                        : 'bg-white/70 border-2 border-amber-300 text-slate-900 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-400/30 hover:border-emerald-400 hover:shadow-emerald-300/50 placeholder-slate-500'
                      }
                    `}
                    required 
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-bold mb-3 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
                  }`}>
                    Phone <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone} 
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`
                      w-full p-5 rounded-3xl text-lg font-semibold shadow-lg transition-all
                      ${theme === 'dark' 
                        ? 'bg-slate-700/80 border-2 border-slate-600 text-slate-200 focus:border-sky-400 focus:ring-4 focus:ring-sky-500/30 hover:border-sky-500 hover:shadow-sky-500/20 placeholder-slate-500' 
                        : 'bg-white/70 border-2 border-amber-300 text-slate-900 focus:border-sky-500 focus:ring-4 focus:ring-sky-400/30 hover:border-sky-400 hover:shadow-sky-300/50 placeholder-slate-500'
                      }
                    `}
                    required 
                    placeholder="(212) 555-0123"
                  />
                </div>
              </div>
            </div>

            {/* Total Amount */}
            <div className={`
                p-8 rounded-3xl backdrop-blur-sm border-2 text-center
                ${theme === 'dark' 
                    ? 'bg-gradient-to-r from-emerald-600/20 to-green-600/20 border-emerald-500/40 shadow-emerald-500/20' 
                    : 'bg-gradient-to-r from-emerald-400/20 to-green-400/20 border-emerald-400/40 shadow-emerald-300/30'
                }
                `}>
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className={`text-4xl font-black ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                    }`}>
                    ${isNaN(totalAmount) 
                        ? '0' 
                        : totalAmount.toLocaleString('en-US', { 
                            minimumFractionDigits: 0, 
                            maximumFractionDigits: 0 
                        })
                    }
                    </span>
                    <span className={`text-xl font-semibold ${
                    theme === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
                    }`}>
                    USD
                    </span>
                </div>
                
                <p className={`text-xs mb-6 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                    Pay via Airtm to <span className={`font-bold ${
                    theme === 'dark' ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-500'
                    }`}>
                    optimabyte@gmail.com
                    </span>
                </p>

                {/* Payment Confirmation Notice */}
                <div className={`
                    p-4 rounded-2xl backdrop-blur-sm border text-sm
                    ${theme === 'dark' 
                    ? 'bg-slate-800/60 border-slate-700/50 text-slate-300' 
                    : 'bg-white/70 border-amber-200/40 text-slate-800'
                    }
                `}>
                    <p className="flex items-start space-x-2">
                    <span className="mt-1 text-rose-400">⚠️</span>
                    <span>
                        By pressing the submit button, you confirm that you have paid the amount stated to the email given via Airtm. 
                        The application fee will queue your account for confirmation immediately.
                    </span>
                    </p>
                </div>
            </div>

            {/* Submit Button - Full Width */}
            <button
            type="submit"
            disabled={loading || !selectedCode}
            className={`
                w-full bg-gradient-to-r text-white py-6 px-8 rounded-3xl text-xl font-black shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center space-x-3 border-2 mt-6
                ${theme === 'dark' 
                ? 'from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-cyan-400' 
                : 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 border-orange-400 text-white'
                }
            `}
            >
            {loading ? (
                <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing...</span>
                </>
            ) : (
                <>
                <Send className="w-6 h-6" />
                <span>Submit Application</span>
                </>
            )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
