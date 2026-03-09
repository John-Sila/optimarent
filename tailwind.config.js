/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // Enables dark: prefix [web:6][web:10]
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],  // Real estate pro font [web:5]
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
      },
    },
  },
  plugins: [],
}
