/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        museum: {
          bg: '#FAF8F5',
          cream: '#F4EFEA',
          card: '#FFFFFF',
          dark: '#141316',
          charcoal: '#222026',
          muted: '#736D79',
          border: '#E8E2D8',
          borderLight: '#F0EBE1',
          terracotta: {
            DEFAULT: '#A84826',
            light: '#C35B35',
            dark: '#873518',
            bg: '#FBF0EB'
          },
          gold: {
            DEFAULT: '#9B7C50',
            light: '#BFA277',
            dark: '#7A5E35',
            bg: '#F8F4ED'
          },
          clay: '#8C5E48',
          stone: '#5C5761'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'museum': '0 20px 40px -15px rgba(20, 19, 22, 0.07)',
        'museum-hover': '0 25px 50px -12px rgba(168, 72, 38, 0.12)',
        'museum-card': '0 4px 24px -2px rgba(20, 19, 22, 0.05)',
        'glow-terracotta': '0 10px 30px rgba(168, 72, 38, 0.25)',
      }
    },
  },
  plugins: [],
}
