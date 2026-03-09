import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowLeft, Download, Send, CheckCircle } from 'lucide-react';

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
      code: "NYC001",
      state: "New York", 
      city: "Manhattan",
      zipcode: "10001",
      nature: "1 Bedroom Luxury Apartment",
      monthly_rent: "$3,200",
      application_fee: "$75",
      currency: "USD"
    },
    // array[1]
    {
      code: "NYC002",
      state: "New York", 
      city: "Brooklyn", 
      zipcode: "11211",
      nature: "2 Bedroom Modern Apartment",
      monthly_rent: "$4,500",
      application_fee: "$100",
      currency: "USD"
    },
    // array[2]
    {
      code: "NYC003",
      state: "New York",
      city: "Williamsburg",
      zipcode: "11249", 
      nature: "3 Bedroom Loft",
      monthly_rent: "$6,800",
      application_fee: "$125",
      currency: "USD"
    },
    // array[3]
    {
      code: "NYC004",
      state: "New York",
      city: "Chelsea",
      zipcode: "10011",
      nature: "Studio Apartment", 
      monthly_rent: "$2,900",
      application_fee: "$60",
      currency: "USD"
    },
    // array[4]
    {
      code: "NYC005",
      state: "New York",
      city: "East Village",
      zipcode: "10003",
      nature: "Luxury 2 Bedroom", 
      monthly_rent: "$5,200",
      application_fee: "$110",
      currency: "USD"
    }
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
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

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

    const totalAmount = addInitialRent 
        ? parseFloat(formData.application_fee.replace(/[$,]/g, '')) + parseFloat(formData.monthly_rent.replace(/[$,]/g, ''))
        : parseFloat(formData.application_fee.replace(/[$,]/g, ''));

  if (submitted) {
    return (
      <div className={`
        min-h-screen flex items-center justify-center py-12 px-4
        ${theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900' 
          : 'bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500'
        }
        text-white
      `}>
        <div className={`
          max-w-md w-full backdrop-blur-2xl rounded-3xl p-12 text-center shadow-2xl border
          ${theme === 'dark' 
            ? 'bg-slate-800/40 border-indigo-500/30' 
            : 'bg-white/20 border-amber-300/40'
          }
        `}>
          <CheckCircle className="w-24 h-24 mx-auto mb-8 text-emerald-400 animate-bounce" />
          <h2 className={`text-4xl font-black mb-4 ${
            theme === 'dark' ? 'text-cyan-300' : 'text-amber-100'
          }`}>
            Application Submitted!
          </h2>
          <p className={`text-xl mb-12 opacity-95 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-800'
          }`}>
            We'll review and contact you within 24 hours.
          </p>
          
          <div className="space-y-4">
            <button className={`
              bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all w-full
              ${theme === 'dark' ? 'hover:bg-slate-100' : 'hover:bg-amber-50'}
            `}>
              <Download className="inline w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button 
              onClick={() => navigate('/')}
              className="bg-transparent border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all w-full"
            >
              Back to Homes
            </button>
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
            NYC Lease Application
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
                  App Fee
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
                        This will queue your account for confirmation.
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
