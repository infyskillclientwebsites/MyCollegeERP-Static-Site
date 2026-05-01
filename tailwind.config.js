/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f172a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        brand: {
          blue: '#2563eb',
          teal: '#14b8a6',
          amber: '#fbbf24',
          bg: '#f6f7f9',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 4px 16px -4px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 12px 32px -6px rgba(15, 23, 42, 0.12)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.1), 0 8px 24px -4px rgba(37, 99, 235, 0.2)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 0%, rgba(37, 99, 235, 0.08), transparent 50%), radial-gradient(circle at 80% 30%, rgba(20, 184, 166, 0.08), transparent 50%)',
        'cta-gradient':
          'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f766e 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
