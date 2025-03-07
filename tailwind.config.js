/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0f172a',
          900: '#030712',
        },
        accent: {
          100: '#93c5fd',
          200: '#60a5fa',
          300: '#3b82f6',
          400: '#2563eb',
          500: '#1d4ed8',
          600: '#1e40af',
          700: '#1e3a8a',
        },
        vibrant: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          teal: '#14b8a6',
          emerald: '#10b981',
          amber: '#f59e0b',
          pink: '#ec4899',
          indigo: '#6366f1',
        }
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 25px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
} 