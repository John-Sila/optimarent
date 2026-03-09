import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { LucideSun, LucideMoon, LucideMenu, LucideX } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md bg-white/80 dark:bg-slate-900/80 sticky top-0 z-50 shadow-lg border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              OptimaRent  {/* Your company [cite:2] */}
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
            <Link to="/apply" className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Apply for Lease
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition"
            >
              {theme === 'dark' ? <LucideSun size={20} /> : <LucideMoon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">Home</Link>
            <Link to="/apply" className="block px-4 py-2 bg-blue-600 text-white rounded-full mx-4 font-semibold">Apply for Lease</Link>
            <button
              onClick={() => { setMobileOpen(false); setTheme(theme === 'dark' ? 'light' : 'dark'); }}
              className="block w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
