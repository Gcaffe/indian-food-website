/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales de Sabores de la India
        'india': {
          'orange': '#FF6B35',      // Naranja-coral vibrante (principal)
          'turquoise': '#4ECDC4',   // Turquesa brillante (secundario)
          'gold': '#FFE66D',        // Amarillo dorado (acento)
          'dark': '#2D3142',        // Gris azulado oscuro (texto)
          'cream': '#FFF8F0',       // Crema cálido (fondo)
          'gray': '#F8F9FA',        // Gris muy claro (fondo alternativo)
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'display': ['"Playfair Display"', 'serif'],  // ← NUEVA: Para títulos principales
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'india': '0 4px 20px rgba(255, 107, 53, 0.15)',
        'india-lg': '0 10px 40px rgba(255, 107, 53, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}