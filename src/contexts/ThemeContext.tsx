import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const initial = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(initial);
    root.classList.remove('light', 'dark');
    root.classList.add(initial);
  }, []);

  const handleSetTheme = (newTheme: 'dark' | 'light') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
