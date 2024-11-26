/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Sans Arabic', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
      },
      colors: {
        brand: {
          50: '#f4f7fb',
          100: '#e9eff7',
          200: '#d3dfef',
          300: '#bccee7',
          400: '#a6bde0',
          500: '#2c4d89', // Primary brand color
          600: '#1a3b77',
          700: '#0d2965',
          800: '#001753',
          900: '#000a41',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
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
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};