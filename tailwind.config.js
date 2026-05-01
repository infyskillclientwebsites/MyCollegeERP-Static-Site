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
      fontSize: {
        // Bigger, more impactful display sizes
        'hero-mobile': ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'hero-tablet': ['4.25rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'hero-desktop': ['5.5rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
        'hero-xl': ['6.75rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'section-mobile': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-tablet': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'section-desktop': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'stat-counter': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'stat-counter-lg': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 4px 16px -4px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 12px 32px -6px rgba(15, 23, 42, 0.12)',
        'card-xl': '0 10px 15px -3px rgba(15, 23, 42, 0.1), 0 24px 48px -12px rgba(15, 23, 42, 0.15)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.1), 0 8px 24px -4px rgba(37, 99, 235, 0.25)',
        'glow-teal': '0 0 0 1px rgba(20, 184, 166, 0.15), 0 8px 32px -4px rgba(20, 184, 166, 0.35)',
        'inner-glow': 'inset 0 0 24px rgba(37, 99, 235, 0.05)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 0%, rgba(37, 99, 235, 0.12), transparent 50%), radial-gradient(circle at 80% 30%, rgba(20, 184, 166, 0.12), transparent 50%), radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.06), transparent 50%)',
        'cta-gradient':
          'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f766e 100%)',
        'grid-pattern':
          'linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
        'dot-pattern':
          'radial-gradient(circle, rgba(15, 23, 42, 0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
        dots: '24px 24px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-left': 'slideLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradient-x 5s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
