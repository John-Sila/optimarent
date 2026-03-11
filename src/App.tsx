import React from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Application from './pages/Application';
import AboutUs from './pages/AboutUs';
import TermsOfService from './pages/TermsOfService';

function AppContent() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="min-h-screen">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Application />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
