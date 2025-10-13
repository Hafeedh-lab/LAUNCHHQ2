import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1E63FF',
          cyan: '#00D7FF',
          aqua: '#8FF5D5',
          'blue-light': '#4E87FF',
          'blue-dark': '#0E4ACC',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#EFF1F5',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        ink: '#0F1220',
        success: '#10B981',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        display: ['Nunito Sans', 'system-ui', 'sans-serif'],
        body: ['Roboto', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1E63FF 0%, #00D7FF 50%, #8FF5D5 100%)',
        'gradient-brand-subtle': 'linear-gradient(135deg, rgba(30,99,255,0.1) 0%, rgba(0,215,255,0.1) 50%, rgba(143,245,213,0.1) 100%)',
      },
      boxShadow: {
        card: '0 2px 8px rgba(15, 18, 32, 0.08)',
        'card-hover': '0 4px 16px rgba(15, 18, 32, 0.12)',
        wizard: '0 8px 32px rgba(30, 99, 255, 0.15)',
      },
      animation: {
        progress: 'progress 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        progress: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
