import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowLeft, CheckCircle, Shield, FileText, Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`
      min-h-screen pt-24
      ${theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50/50 to-rose-50'
      }
    `}>
      {/* Header */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/"
            className={`
              inline-flex items-center mb-12 font-semibold transition-all group
              ${theme === 'dark' ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-700 hover:text-orange-600'}
            `}
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className={`text-5xl md:text-6xl font-black mb-6 leading-tight ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white via-sky-300 to-emerald-300 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-slate-900 via-amber-900 to-orange-900 bg-clip-text text-transparent'
            }`}>
              Terms of Service
            </h1>
            <p className={`text-xl md:text-2xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Last Updated: March 11, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className={`
          backdrop-blur-xl rounded-3xl p-12 shadow-2xl border
          ${theme === 'dark' 
            ? 'bg-slate-800/70 border-slate-700/50' 
            : 'bg-white/90 border-amber-200/50'
          }
        `}>
          
          <section className="mb-16">
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <Shield className="w-8 h-8" />
              <span>1. Acceptance of Terms</span>
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
            }`}>
              By accessing or using OptimaRent (the "Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree, please do not use the Service. OptimaRent operates as a platform connecting renters 
              with available properties in New York City.
            </p>
          </section>

          <section className="mb-16">
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <FileText className="w-8 h-8" />
              <span>2. Rental Applications</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Applications are processed through our secure platform with transparent pricing.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • By submitting payment via Airtm to <strong>optimabyte@gmail.com</strong>, you confirm payment has been completed.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Application fees are non-refundable. First month's rent is required for account activation.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • We facilitate connections but property availability is subject to landlord confirmation.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <CheckCircle className="w-8 h-8" />
              <span>3. Payment Terms</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • All payments processed via Airtm to <strong>optimabyte@gmail.com</strong>.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Total due = Application Fee + First Month Rent (if selected).
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Submit button confirms payment completion. No refunds after submission.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Account activation emails sent within 30 minutes of first rent payment.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <Scale className="w-8 h-8" />
              <span>4. User Responsibilities</span>
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Provide accurate information during application process.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • Verify property details with landlords before final commitments.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • NYC rental laws apply. Review local regulations independently.
              </p>
              <p className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                • You are responsible for all lease agreements with property owners.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <Shield className="w-8 h-8" />
              <span>5. Limitation of Liability</span>
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
            }`}>
              OptimaRent acts as a facilitator, not a leasing agent. We do not guarantee property availability, 
              lease approvals, or landlord responses. Users assume all risks associated with rental transactions.
            </p>
          </section>

          <section className="mb-16">
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <FileText className="w-8 h-8" />
              <span>6. Modifications</span>
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
            }`}>
              We may update these Terms at any time. Continued use of the Service constitutes acceptance of changes.
            </p>
          </section>

          <section>
            <h2 className={`text-3xl font-black mb-6 flex items-center space-x-3 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent'
                : 'text-slate-900'
            }`}>
              <CheckCircle className="w-8 h-8" />
              <span>7. Contact</span>
            </h2>
            <div className={`text-lg leading-relaxed p-6 rounded-2xl backdrop-blur-sm border ${
              theme === 'dark' 
                ? 'bg-slate-800/50 border-slate-700/50 text-slate-200' 
                : 'bg-white/70 border-amber-200/50 text-slate-800'
            }`}>
              <p className="mb-4">Questions about these Terms? Contact us:</p>
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">✉️</span>
                  <span><strong>optimabyte@gmail.com</strong></span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📍</span>
                  <span>Manhattan, New York, NY 10001</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <div className="mt-20 pt-12 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/" 
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  theme === 'dark' 
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' 
                    : 'text-slate-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                Back to Properties
              </Link>
              <Link 
                to="/apply" 
                className={`px-6 py-3 rounded-2xl font-semibold transition-all ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500' 
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-400 hover:to-orange-400'
                }`}
              >
                Start Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
