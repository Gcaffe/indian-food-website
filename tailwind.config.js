/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'india': {
          'orange': '#FF6B35',
          'turquoise': '#4ECDC4',
          'gold': '#FFE66D',
          'dark': '#2D3142',
          'cream': '#FFF8F0',
          'gray': '#F8F9FA',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}