import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        grafite: '#0E0B0A',
        dourado: '#C89A3C',
        vinho: '#5A1018',
        'verde-samba': '#0E3B24',
        cobre: '#A85F2A',
        ambar: '#E0A64B',
        creme: '#D8C39A',
        madeira: '#3A2418',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-parisienne)', 'cursive'],
      },
      backgroundImage: {
        'radial-warm':
          'radial-gradient(circle at 50% 0%, rgba(200,154,60,0.12), transparent 55%)',
        'gold-gradient': 'linear-gradient(135deg, #E0A64B 0%, #C89A3C 45%, #A85F2A 100%)',
      },
      boxShadow: {
        gold: '0 0 24px rgba(200,154,60,0.25)',
        'gold-lg': '0 8px 40px rgba(200,154,60,0.28)',
        soft: '0 12px 40px rgba(0,0,0,0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 1.2s ease both',
        'slow-zoom': 'slow-zoom 18s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
